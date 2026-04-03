import { Professor, ResearchTopic, NewsItem } from "../types";
import { GoogleGenAI, HarmCategory, HarmBlockThreshold, Type } from "@google/genai";
import { IDEA_GENERATION_INSTRUCTIONS } from "./ideaInstructions.ts";
import { PROPOSAL_SYSTEM_INSTRUCTIONS } from "./proposalInstructions.ts";

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

async function callGeminiAI(task: string, params: any = {}) {
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
      prompt = `Search for the professional profile of Prof. ${params.professorName} at ${params.institute} using Google Search.
      Return the data as a JSON object with keys: bio, publications, citationTrend, publicationTrend.`;
      tools = [{ googleSearch: {} }];
      break;
    case 'topics':
      prompt = `Professor Profile: ${params.professor.name}, ${params.instituteName}. Recent Publications: ${params.pubData.publications.join("\n")}. Generate 10 PhD research ideas.`;
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

  return { text: response.text };
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

export async function getProfessorPublications(professorName: string, institute: string): Promise<{ publications: string[], bio: string, citationTrend: { year: number; count: number }[], publicationTrend: { year: number; count: number }[] }> {
  const cacheKey = `crid_pub_${professorName}`;
  const cached = getCachedData<any>(cacheKey);
  if (cached) return cached;

  try {
    const { text } = await callGeminiAI('publications', { professorName, institute });
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
  const pubData = await getProfessorPublications(professor.name, instituteName);
  
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

export async function generateFullProposal(topic: ResearchTopic, professorName: string, specialization: string, instituteName: string): Promise<string> {
  try {
    const { text } = await callGeminiAI('proposal', { topic, professorName, specialization, instituteName });
    return text ? text.replace(/\*\*/g, '') : "Failed to generate proposal.";
  } catch (error: any) {
    console.error("Error generating proposal:", error);
    throw error;
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
