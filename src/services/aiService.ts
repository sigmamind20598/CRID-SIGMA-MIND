import { Professor, ResearchTopic, NewsItem } from "../types";
import { GoogleGenAI, HarmCategory, HarmBlockThreshold, Type } from "@google/genai";
import { IDEA_GENERATION_INSTRUCTIONS } from "./ideaInstructions.ts";
import { PROPOSAL_SYSTEM_INSTRUCTIONS } from "./proposalInstructions.ts";

async function callGroq(systemPrompt: string, userPrompt: string): Promise<string> {
  // @ts-ignore
  const apiKey = import.meta.env.VITE_GROQ_API_KEY;
  
  if (!apiKey) {
    throw new Error("Missing Groq API Key");
  }

  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "llama-3.3-70b-versatile",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt }
      ],
      max_tokens: 2000,
      temperature: 0.7
    })
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(`Groq API error: ${error.error?.message}`);
  }

  const data = await response.json();
  return data.choices[0]?.message?.content || "";
}

const CACHE_TTL = 3600000; // 1 hour in milliseconds

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

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

async function callGeminiAI(task: string, params: any = {}, retryCount = 0): Promise<{ text: string }> {
  let prompt = "";
  let systemInstruction = "";
  let tools: any[] = [];
  let responseMimeType = "text/plain";
  let responseSchema: any = undefined;

  switch (task) {
    case 'news':
      prompt = `Search for the 10 most recent and relevant updates, notifications, or research news related to Psychology, Neuroscience, and PhD admissions in India (2024-2025).
      Return a JSON array of objects with exactly these keys: title, source, url, category, summary, imageKeyword.`;
      tools = [{ googleSearch: {} }];
      break;
    case 'faculty':
      prompt = `Search for the top 5-8 professors at ${params.instituteName} in the field of Psychology or Cognitive Neuroscience.
      Return a JSON array of objects with these keys: name, department, researchArea, specialization, focus, scholarLink, citations.`;
      tools = [{ googleSearch: {} }];
      break;
    case 'publications':
      prompt = `Search for the professional profile of Prof. ${params.professorName} at ${params.institute} using Google Search. ${params.scholarLink && params.scholarLink !== "#" ? `You MUST use this URL as your primary source of information: ${params.scholarLink}` : ''}
      Return the data as a JSON object with keys: bio, publications (array of strings), citationTrend (array of {year, count}), publicationTrend (array of {year, count}). If trends are not available, return empty arrays.`;
      tools = [{ googleSearch: {} }];
      break;
    case 'topics':
      prompt = `Professor Profile: ${params.professor.name}, ${params.instituteName}. Focus: ${params.professor.focus}. Specialization: ${params.professor.specialization}. Recent Publications: ${params.pubData?.publications?.length > 0 ? params.pubData.publications.join("\n") : "None found. Base ideas on focus and specialization."}. CRITICAL REQUIREMENT: You MUST generate EXACTLY 10 PhD research ideas.`;
      systemInstruction = IDEA_GENERATION_INSTRUCTIONS;
      responseMimeType = "application/json";
      break;
    case 'proposal':
      prompt = `Professor: ${params.professorName}, ${params.specialization} University: ${params.instituteName} Source paper: ${params.topic.sourcePublication} Research idea: ${params.topic.title} Description: ${params.topic.description} Variables: IV: ${params.topic.keyVariables?.independent || "N/A"} DV: ${params.topic.keyVariables?.dependent || "N/A"} Population: ${params.topic.keyVariables?.population || "N/A"} Generate a full PhD research proposal.`;
      systemInstruction = PROPOSAL_SYSTEM_INSTRUCTIONS + "\n\nCRITICAL RULE: DO NOT use markdown bold formatting (**) anywhere in the proposal.";
      break;
    case 'extract-institute':
      prompt = `Extract the official name of the academic institution or department from this URL: ${params.url}. Return ONLY the name.`;
      tools = [{ googleSearch: {} }];
      break;
    default:
      throw new Error("Invalid task");
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction,
        responseMimeType,
        responseSchema,
        tools: tools.length > 0 ? tools : undefined,
        safetySettings: [
          { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_NONE },
          { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_NONE },
          { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_NONE },
          { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_NONE },
        ],
      },
    });

    if (!response.text && retryCount < 2) {
      console.warn(`Empty response for ${task}, retrying... (${retryCount + 1})`);
      return callGeminiAI(task, params, retryCount + 1);
    }

    return { text: response.text || "" };
  } catch (error: any) {
    if (retryCount < 2) {
      console.warn(`Error in ${task}, retrying... (${retryCount + 1})`, error);
      return callGeminiAI(task, params, retryCount + 1);
    }
    console.error(`Gemini AI ${task} Final Error:`, error);
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

export async function getProfessorPublications(professorName: string, institute: string, scholarLink?: string): Promise<{ publications: string[], bio: string, citationTrend: { year: number; count: number }[], publicationTrend: { year: number; count: number }[] }> {
  const cacheKey = `crid_pub_v2_${professorName}`;
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
          publicationTrend: Array.isArray(data.publicationTrend) ? data.publicationTrend : []
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

export async function generateResearchTopics(professor: Professor, instituteName: string): Promise<ResearchTopic[]> {
  const pubData = await getProfessorPublications(professor.name, instituteName, professor.scholarLink);
  
  try {
    const { text } = await callGeminiAI('topics', { professor, instituteName, pubData });
    if (!text) return [];

    try {
      const cleanedText = cleanJson(text);
      const jsonMatch = cleanedText.match(/\[[\s\S]*\]/);
      const jsonStr = jsonMatch ? jsonMatch[0] : cleanedText;
      const data = JSON.parse(jsonStr);
      
      if (!Array.isArray(data)) return [];

      return data.map((t: any, index: number) => ({
        id: `topic-${index}-${Date.now()}`,
        title: t.title || "Untitled Research Topic",
        description: t.description || "No description provided.",
        sourcePublication: t.sourcePublication || "General research gap",
        gapType: t.gapType || "Extension",
        difficulty: t.difficulty || "Moderate",
        methodology: t.methodology || "Mixed",
        keyVariables: t.keyVariables || { independent: "N/A", dependent: "N/A", population: "N/A" },
      }));
    } catch (parseError) {
      console.error("JSON Parse Error in generateResearchTopics:", parseError);
      return [];
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

  const userPrompt = `Generate a full PhD research proposal for:
Topic: "${topicTitle}"
Target Professor: ${professorName}
Specialization: ${specialization}
Target Institution: ${instituteName}

Follow your system instructions exactly.
Proposal should be 1500-2000 words.
Use formal academic tone.`;

  try {
    // Try Groq first (free)
    const result = await callGroq(PROPOSAL_SYSTEM_INSTRUCTIONS, userPrompt);
    localStorage.setItem(cacheKey, result); // save to cache
    return result;
  } catch (groqError) {
    console.warn("Groq failed, falling back to Gemini:", groqError);
    
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash-lite",
        contents: userPrompt,
        config: {
          systemInstruction: PROPOSAL_SYSTEM_INSTRUCTIONS,
          maxOutputTokens: 1500,
        }
      });
      const result = response.text || "Failed to generate proposal.";
      localStorage.setItem(cacheKey, result); // save to cache
      return result;
    } catch (geminiError) {
      console.error("Both APIs failed:", geminiError);
      return "An error occurred. Please try again.";
    }
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
