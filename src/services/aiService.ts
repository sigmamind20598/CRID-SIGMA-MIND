import { Professor, ResearchTopic, NewsItem } from "../types";
import { IDEA_GENERATION_INSTRUCTIONS } from "./ideaInstructions.ts";
import { PROPOSAL_SYSTEM_INSTRUCTIONS } from "./proposalInstructions.ts";
import { GoogleGenAI } from "@google/genai";
import Groq from "groq-sdk";
import { db } from "../firebase";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";

const CACHE_TTL = 3600000; // 1 hour in milliseconds

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY || '', dangerouslyAllowBrowser: true });

function getCachedData<T>(key: string): T | null {
  const cached = localStorage.getItem(key);
  if (!cached) return null;

  try {
    const { data, timestamp } = JSON.parse(cached);
    if (Date.now() - timestamp < CACHE_TTL) {
      return data as T;
    }
    localStorage.removeItem(key);
  } catch (e) {
    localStorage.removeItem(key);
  }
  return null;
}

function setCachedData<T>(key: string, data: T) {
  localStorage.setItem(key, JSON.stringify({ data, timestamp: Date.now() }));
}

async function callGeminiAI(task: string, params: any = {}, retryCount = 0): Promise<{ text: string }> {
  try {
    let prompt = "";
    switch (task) {
      case 'news':
        prompt = `Provide 4-5 very recent and specific news items, alerts, or breakthroughs in Cognitive Science and Psychology relevant to Indian research institutes (IITs, IISc, CBCS, NIMHANS). 
        
        Focus on:
        1. PhD Admission alerts (e.g., IIT Bombay and IIT Delhi have called for written tests/interviews).
        2. New research project launches or funding.
        3. Major publications from Indian labs.
        
        Format as a JSON array of objects:
        [{
          "title": "Clear concise headline",
          "summary": "1-2 sentence description",
          "timestamp": "2026-04-27T00:00:00Z",
          "source": "Name of the institute or news portal",
          "category": "PHD ADMISSION / RESEARCH / EXAM / FELLOWSHIP / GUIDELINES",
          "url": "A plausible URL to the institute's admission or news page",
          "imageKeyword": "relevant-keyword (e.g., iit-delhi, psychology, brain)"
        }]. 
        
        Ensure the first 2 items are about the latest PhD written tests at IIT Bombay and IIT Delhi as they are currently active.`;
        break;
      case 'faculty':
        prompt = `List 5 prominent faculty members in Cognitive Science at ${params?.instituteName || 'top Indian institutes'}. Include their research interests and lab names. Format as JSON array: [{name, institute, interests, lab}].`;
        break;
      case 'publications':
        prompt = `Research Prof. ${params?.professorName} at ${params?.institute || 'Indian research institutes'}. 
        
        CRITICAL TASK: Find their professional research identifiers using this algorithm:
        1. Search for a relevant paper/publication by this author.
        2. Check the author metadata in those papers for ORCID or ResearchGate links.
        3. Check the official institute website faculty profile for ${params?.professorName} at ${params?.institute}.
        4. Look for Vidwan ID (from Vidwan Expert Database), ORCID, and ResearchGate.
        
        Identifiers to find:
        - ORCID ID (e.g., https://orcid.org/0000-...)
        - Vidwan ID (e.g., https://vidwan.inflibnet.ac.in/profile/...)
        - ResearchGate Profile (e.g., https://www.researchgate.net/profile/...)
        
        Also provide:
        - Top 10 most cited or recent publications.
        - A short professional bio (2-3 sentences).
        - Citation and publication trends for the last 5 years as arrays of {year, count}.
        
        Format as JSON: 
        {
          "bio": "...",
          "publications": ["Title 1", "Title 2", ...],
          "orcid": "VALID_ORCID_URL_OR_NULL",
          "vidwanId": "VALID_VIDWAN_URL_OR_NULL",
          "researchGate": "VALID_RESEARCHGATE_URL_OR_NULL",
          "citationTrend": [{"year": 2020, "count": 50}, ...],
          "publicationTrend": [{"year": 2020, "count": 2}, ...]
        }
        
        If you cannot find a specific ID with 100% certainty, return null for that field. Do not guess.`;
        break;
      case 'topics':
        prompt = `Suggest 5 trending PhD research topics in Cognitive Science specifically for the Indian academic landscape. Format as JSON array: [{title, description, relevance}].`;
        break;
      case 'proposal':
        prompt = `${PROPOSAL_SYSTEM_INSTRUCTIONS}\n\nGenerate a full proposal based on:\nProfessor: ${params?.professorName}\nInstitute: ${params?.instituteName}\nResearch Area: ${params?.specialization}`;
        break;
      case 'extract-institute':
        prompt = `Extract the most likely Indian research institute name from this text: "${params?.url}". Return only the name.`;
        break;
    }

    const modelName = 'gemini-3.1-flash';

    try {
      const response = await ai.models.generateContent({
        model: modelName,
        contents: prompt,
      });
      return { text: response.text || "" };
    } catch (geminiError: any) {
      console.warn(`Gemini failed for ${task}, trying Groq...`, geminiError);
      
      // Fallback to Groq
      const groqModel = task === 'proposal' ? 'llama-3.3-70b-versatile' : 'llama-3.1-8b-instant';
      const chatCompletion = await groq.chat.completions.create({
        messages: [{ role: 'user', content: prompt }],
        model: groqModel,
      });
      
      return { text: chatCompletion.choices[0]?.message?.content || "" };
    }
  } catch (error: any) {
    if (retryCount < 2) {
      console.warn(`Error in ${task}, retrying... (${retryCount + 1})`, error);
      return callGeminiAI(task, params, retryCount + 1);
    }
    console.error(`AI ${task} Final Error:`, error);
    throw error;
  }
}

export async function getLatestNews(): Promise<NewsItem[]> {
  const cacheKey = "crid_news_cache";
  const cached = getCachedData<NewsItem[]>(cacheKey);
  if (cached) return cached;

  try {
    const { text } = await callGeminiAI('news');
    if (!text) return [];

    try {
      const cleanedText = cleanJson(text);
      const match = cleanedText.match(/\[[\s\S]*\]/);
      const jsonStr = match ? match[0] : cleanedText;
      const data = JSON.parse(jsonStr);
      if (!Array.isArray(data)) return [];
      const newsItems = data.map((item: any, index: number) => ({
        ...item,
        id: `news-${index}-${Date.now()}`,
        url: item.url || "https://www.google.com/search?q=" + encodeURIComponent(item.title),
        timestamp: new Date().toISOString()
      }));
      setCachedData(cacheKey, newsItems);
      return newsItems;
    } catch (e) {
      console.error("Failed to parse News JSON:", text);
      return [];
    }
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
}

export async function getFacultyData(instituteName: string): Promise<Professor[]> {
  const cacheKey = `crid_faculty_${instituteName}`;
  const cached = getCachedData<Professor[]>(cacheKey);
  if (cached) return cached;

  try {
    const { text } = await callGeminiAI('faculty', { instituteName });
    if (!text) return [];

    try {
      const cleanedText = cleanJson(text);
      const match = cleanedText.match(/\[[\s\S]*\]/);
      const jsonStr = match ? match[0] : cleanedText;
      const data = JSON.parse(jsonStr);
      if (!Array.isArray(data)) return [];

      const professors = data.map((p: any, index: number) => ({
        name: p.name || "Unknown Professor",
        department: p.department || "HSS / Behavioral Sciences",
        researchArea: p.researchArea || "Psychology / Cognitive Neuroscience",
        specialization: p.specialization || "Cognitive Science",
        focus: p.focus || "General Research",
        scholarLink: p.scholarLink || "#",
        citations: p.citations || "N/A",
        id: `${instituteName.toLowerCase().replace(/\s+/g, '-')}-${index}-${Date.now()}`,
      }));
      setCachedData(cacheKey, professors);
      return professors;
    } catch (e) {
      console.error("Failed to parse Faculty JSON:", text);
      return [];
    }
  } catch (error) {
    console.error("Error fetching faculty data:", error);
    return [];
  }
}

function cleanJson(text: string): string {
  return text.replace(/```json\n?|```/g, "").trim();
}

export async function getProfessorPublications(professorName: string, institute: string, scholarLink?: string): Promise<{ 
  publications: string[], 
  bio: string, 
  citationTrend: { year: number; count: number }[], 
  publicationTrend: { year: number; count: number }[],
  orcid?: string,
  vidwanId?: string,
  researchGate?: string
}> {
  const cacheKey = `crid_pub_v3_${professorName}`;
  const cached = getCachedData<any>(cacheKey);
  if (cached) return cached;

  try {
    const { text } = await callGeminiAI('publications', { professorName, institute, scholarLink });
    if (!text) {
      return { 
        bio: `Prof. ${professorName} is a researcher at ${institute}.`, 
        publications: ["Recent research papers in relevant journals."], 
        citationTrend: [], 
        publicationTrend: []
      };
    }
    
    try {
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const data = JSON.parse(jsonMatch[0]);
        const result = {
          bio: data.bio || "No biography available.",
          publications: Array.isArray(data.publications) ? data.publications : [],
          citationTrend: Array.isArray(data.citationTrend) ? data.citationTrend : [],
          publicationTrend: Array.isArray(data.publicationTrend) ? data.publicationTrend : [],
          orcid: data.orcid,
          vidwanId: data.vidwanId,
          researchGate: data.researchGate
        };
        setCachedData(cacheKey, result);
        return result;
      }
      return { bio: "Information currently unavailable.", publications: [], citationTrend: [], publicationTrend: [] };
    } catch (parseError) {
      console.error("JSON Parse Error:", parseError);
      return { bio: "Information currently unavailable.", publications: [], citationTrend: [], publicationTrend: [] };
    }
  } catch (error: any) {
    console.error("Error fetching publications:", error);
    return { bio: "Information currently unavailable.", publications: [], citationTrend: [], publicationTrend: [] };
  }
}

export async function generateResearchTopics(professor: Professor, instituteName: string): Promise<{ topics: ResearchTopic[], keywords: string[] }> {
  const professorId = professor.id;
  
  // 1. Check Firestore Cache First
  try {
    const docRef = doc(db, "professors", professorId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      console.log("Returning cached topics from Firestore for:", professor.name);
      return { 
        topics: data.topics as ResearchTopic[], 
        keywords: data.keywords || [] 
      };
    }
  } catch (e) {
    console.error("Firestore cache check failed:", e);
  }

  const pubData = await getProfessorPublications(professor.name, instituteName, professor.scholarLink);
  
  try {
    const prompt = `
      ${IDEA_GENERATION_INSTRUCTIONS}

      Analyze the following research profile for Prof. ${professor.name} at ${instituteName}:
      
      Publications & Bio:
      ${JSON.stringify(pubData)}
      
      TASK:
      1. Identify the top 6 most relevant research concepts/keywords from their work.
      2. Identify a critical literature gap based on their recent publications.
      3. Generate EXACTLY 5 innovative PhD research topics that address this gap.
      
      FORMAT: Return ONLY a JSON object:
      {
        "keywords": ["keyword1", "keyword2", "keyword3", "keyword4", "keyword5", "keyword6"],
        "gap": "Description of the literature gap",
        "topics": [
          {
            "title": "Topic Title",
            "description": "Detailed description",
            "sourcePublication": "Which paper inspired this?",
            "gapType": "Theoretical/Empirical/Methodological",
            "difficulty": "Feasible/Moderate/Advanced",
            "methodology": "Proposed approach"
          }
        ]
      }
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3.1-flash",
      contents: prompt,
    });

    const text = response.text || "";
    if (!text) return { topics: [], keywords: [] };

    try {
      // Robust JSON extraction: Find the first '{' and the last '}'
      const firstBrace = text.indexOf('{');
      const lastBrace = text.lastIndexOf('}');
      
      if (firstBrace === -1 || lastBrace === -1 || lastBrace < firstBrace) {
        console.error("No valid JSON structure found in response:", text);
        return { topics: [], keywords: [] };
      }

      const jsonCandidate = text.substring(firstBrace, lastBrace + 1);
      let data;
      
      try {
        data = JSON.parse(jsonCandidate);
      } catch (e) {
        // If parsing the whole block fails, try to find the first balanced object
        console.warn("Initial JSON parse failed, attempting balanced brace extraction...");
        let braceCount = 0;
        let foundFirst = false;
        let endIndex = -1;
        
        for (let i = firstBrace; i < text.length; i++) {
          if (text[i] === '{') {
            braceCount++;
            foundFirst = true;
          } else if (text[i] === '}') {
            braceCount--;
          }
          
          if (foundFirst && braceCount === 0) {
            endIndex = i;
            break;
          }
        }
        
        if (endIndex !== -1) {
          data = JSON.parse(text.substring(firstBrace, endIndex + 1));
        } else {
          throw new Error("Could not find balanced JSON object");
        }
      }
      
      const topics = (data.topics || []).map((t: any, index: number) => ({
        id: `topic-${index}-${Date.now()}`,
        ...t
      }));

      const keywords = data.keywords || [];

      // 2. Cache to Firestore
      try {
        await setDoc(doc(db, "professors", professorId), {
          professorId,
          professorName: professor.name,
          instituteName,
          keywords,
          topics,
          updatedAt: serverTimestamp()
        });
      } catch (e: any) {
        if (e.message?.includes("permissions")) {
          // Log but don't crash the UI for caching failures
          console.warn("Firestore caching failed due to permissions. This is expected if not logged in.");
        } else {
          console.error("Failed to cache to Firestore:", e);
        }
      }

      return { topics, keywords };
    } catch (parseError) {
      console.error("JSON Parse Error in generateResearchTopics:", parseError);
      return { topics: [], keywords: [] };
    }
  } catch (error: any) {
    console.error("Error generating topics:", error);
    throw error;
  }
}

export async function generateFullProposal(
  topic: ResearchTopic | string,
  professorName: string,
  specialization: string,
  instituteName: string
): Promise<string> {
  const topicTitle = typeof topic === 'string' ? topic : topic.title;

  // Check cache first
  const cacheKey = `proposal_${topicTitle.substring(0,30)}_${professorName.substring(0,20)}`
    .toLowerCase()
    .replace(/\s+/g, '_')
    .replace(/[^a-z0-9_]/g, '');
    
  const cached = localStorage.getItem(cacheKey);
  if (cached) {
    console.log("Returning cached proposal.");
    return cached;
  }

  try {
    const { text } = await callGeminiAI('proposal', { 
      topic: typeof topic === 'string' ? { title: topic } : topic, 
      professorName, 
      specialization, 
      instituteName 
    });
    
    const result = text || "Failed to generate proposal.";
    localStorage.setItem(cacheKey, result); // save to cache
    return result;
  } catch (error: any) {
    console.error("Proposal generation failed:", error);
    return "An error occurred while generating the proposal. Please try again.";
  }
}

export async function getInstituteNameFromUrl(url: string): Promise<string> {
  try {
    const { text } = await callGeminiAI('extract-institute', { url });
    return text?.trim() || url;
  } catch (error) {
    console.error("Error extracting institute name:", error);
    return url;
  }
}
