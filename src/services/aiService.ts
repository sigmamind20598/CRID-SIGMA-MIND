import { GoogleGenAI, Type } from "@google/genai";
import { Professor, ResearchTopic, NewsItem } from "../types";
import { PROPOSAL_SYSTEM_INSTRUCTIONS } from "./proposalInstructions";
import { CURATED_PROFILES } from "../facultyData";

let aiClient: GoogleGenAI | null = null;

function getAIClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error("CRITICAL: Missing Gemini API Key. Please set GEMINI_API_KEY in your environment variables.");
      throw new Error("Missing Gemini API Key. If you are on Vercel, please add VITE_GEMINI_API_KEY to your Environment Variables. If you are in AI Studio, ensure the key is set in the Settings menu.");
    }
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
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

export async function getLatestNews(): Promise<NewsItem[]> {
  const cacheKey = "crid_news_cache";
  const cached = getCachedData<NewsItem[]>(cacheKey);
  if (cached) return cached;

  const model = "gemini-3-flash-preview"; 
  const prompt = `Search for the 10 most recent and relevant updates, notifications, or research news related to Psychology, Neuroscience, and PhD admissions in India (2024-2025).
  
  Include:
  - PhD Admission Forms and Deadlines
  - Job Openings (JRF, SRF, Project Assistant)
  - Research breakthroughs
  
  Return a JSON array of objects with exactly these keys: title, source, url, category, summary, imageKeyword.
  Do not include any other text, only the JSON array.`;

  try {
    let response;
    try {
      // Try with Google Search tool first
      response = await getAIClient().models.generateContent({
        model,
        contents: prompt,
        config: {
          tools: [{ googleSearch: {} }]
        },
      });
    } catch (searchError) {
      console.warn("Google Search tool failed, falling back to standard generation:", searchError);
      // Fallback to standard generation if tool fails
      response = await getAIClient().models.generateContent({
        model,
        contents: prompt + " (Use your internal knowledge if search is unavailable)",
      });
    }

    const text = response.text;
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

  const model = "gemini-3-flash-preview";
  const prompt = `Search for the top 5-8 professors at ${instituteName} in the field of Psychology or Cognitive Neuroscience.
  
  For each professor, provide:
  1. Name
  2. Department
  3. Research Area
  4. Specialization
  5. Focus (1 sentence)
  6. Research Profile Link (scholarLink)
  7. Citations/Impact (citations)
  
  Return a JSON array of objects with these keys: name, department, researchArea, specialization, focus, scholarLink, citations.
  Do not include any other text, only the JSON array.`;

  try {
    let response;
    try {
      // Try with Google Search tool first
      response = await getAIClient().models.generateContent({
        model,
        contents: prompt,
        config: {
          tools: [{ googleSearch: {} }]
        },
      });
    } catch (searchError) {
      console.warn("Google Search tool failed for faculty, falling back to standard generation:", searchError);
      response = await getAIClient().models.generateContent({
        model,
        contents: prompt + " (Use your internal knowledge if search is unavailable)",
      });
    }

    const text = response.text;
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
      // Try to extract any JSON if the first match failed
      try {
        const fallbackMatch = text.match(/\[[\s\S]*\]/);
        if (fallbackMatch) {
          const data = JSON.parse(fallbackMatch[0]);
          if (Array.isArray(data)) {
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
          }
        }
      } catch (innerError) {
        console.error("Inner parsing error for faculty:", innerError);
      }
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

  // Check curated profiles first
  if (CURATED_PROFILES[professorName]) {
    return CURATED_PROFILES[professorName];
  }

  const model = "gemini-3-flash-preview";
  const prompt = `Search for the professional profile of Prof. ${professorName} at ${institute} using Google Search.
  
  Provide:
  1. A brief professional bio (2-3 sentences) summarizing their research career and impact.
  2. A list of their TOP 10 most cited or significant publications (full titles).
  3. Realistic data for their Citation Trend (last 6 years, e.g., 2018-2023) as a JSON array of {year: number, count: number}.
  4. Realistic data for their Publication Trend (last 6 years, e.g., 2018-2023) as a JSON array of {year: number, count: number}.
  
  Return the data as a JSON object with keys: bio, publications, citationTrend, publicationTrend.
  If you cannot find specific information, provide a generic but professional bio based on their known research area and estimated trends.`;

  try {
    let response;
    try {
      response = await getAIClient().models.generateContent({
        model,
        contents: prompt,
        config: {
          tools: [{ googleSearch: {} }],
        },
      });
    } catch (searchError) {
      console.warn("Google Search tool failed for publications, falling back to standard generation:", searchError);
      response = await getAIClient().models.generateContent({
        model,
        contents: prompt + " (Use your internal knowledge if search is unavailable)",
      });
    }

    const text = response.text;
    if (!text) {
      return { 
        bio: `Prof. ${professorName} is a researcher at ${institute} specializing in ${professorName.includes('Roy') ? 'Neuroscience and Brain Network Dynamics' : 'Psychology and Behavioral Sciences'}.`, 
        publications: ["Recent research papers in relevant journals."], 
        citationTrend: Array.from({ length: 6 }, (_, i) => ({ year: 2018 + i, count: Math.floor(Math.random() * 50) + 10 })), 
        publicationTrend: Array.from({ length: 6 }, (_, i) => ({ year: 2018 + i, count: Math.floor(Math.random() * 5) + 1 }))
      };
    }
    
    try {
      // Sometimes the model includes thoughts or search results before the JSON
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const data = JSON.parse(jsonMatch[0]);
        // Ensure all required keys exist
        const result = {
          bio: data.bio || "No biography available.",
          publications: Array.isArray(data.publications) ? data.publications : [],
          citationTrend: Array.isArray(data.citationTrend) ? data.citationTrend : [],
          publicationTrend: Array.isArray(data.publicationTrend) ? data.publicationTrend : []
        };
        setCachedData(cacheKey, result);
        return result;
      }
      
      const cleanedText = cleanJson(text);
      const data = JSON.parse(cleanedText);
      setCachedData(cacheKey, data);
      return data;
    } catch (parseError) {
      console.error("JSON Parse Error:", parseError, "Original text:", text);
      return { bio: "Information currently unavailable. Please try again later.", publications: [], citationTrend: [], publicationTrend: [] };
    }
  } catch (error) {
    console.error("Error fetching publications:", error);
    return { bio: "Information currently unavailable. Please try again later.", publications: [], citationTrend: [], publicationTrend: [] };
  }
}

export async function generateResearchTopics(professor: Professor, instituteName: string): Promise<ResearchTopic[]> {
  const model = "gemini-3-flash-preview";
  const prompt = `You are a PhD Research Proposal Assistant for Indian institutions.
  Based on the research focus of Prof. ${professor.name} at ${instituteName} (Focus: ${professor.focus}, Specialization: ${professor.specialization}), 
  generate 12-15 high-level, innovative, and technically precise research proposal topics suitable for PhD applications at this specific institute.
  
  Ensure topics are specific, falsifiable, and align with the technical rigor of ${instituteName}.
  
  Return the data as a JSON array of objects with keys: title, description.`;

  try {
    const response = await getAIClient().models.generateContent({
      model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    const text = response.text;
    if (!text) return [];

    try {
      // Robust JSON extraction
      const cleanedText = cleanJson(text);
      const jsonMatch = cleanedText.match(/\[[\s\S]*\]/);
      const jsonStr = jsonMatch ? jsonMatch[0] : cleanedText;
      const data = JSON.parse(jsonStr);
      
      if (!Array.isArray(data)) return [];

      return data.map((t: any, index: number) => ({
        title: t.title || "Untitled Research Topic",
        description: t.description || "No description provided.",
        id: `topic-${index}-${Date.now()}`,
      }));
    } catch (parseError) {
      console.error("JSON Parse Error in generateResearchTopics:", parseError, "Original text:", text);
      // Fallback topics if parsing fails
      return [
        { id: 'fb-1', title: `Advancements in ${professor.specialization}`, description: `A comprehensive study on modern techniques and methodologies in ${professor.specialization} within the context of ${instituteName}.` },
        { id: 'fb-2', title: `Impact of ${professor.focus} on Behavioral Outcomes`, description: `Investigating the relationship between ${professor.focus} and specific psychological or cognitive metrics.` },
        { id: 'fb-3', title: `Cross-cultural analysis of ${professor.researchArea}`, description: `Exploring how ${professor.researchArea} manifests in the diverse Indian demographic.` }
      ];
    }
  } catch (error) {
    console.error("Error generating topics:", error);
    return [];
  }
}

export async function generateFullProposal(topic: string, professorName: string, specialization: string, instituteName: string): Promise<string> {
  const model = "gemini-3-flash-preview";
  const prompt = `Draft a full PhD research proposal for the following:
  Topic: "${topic}"
  Target Professor: ${professorName}
  Specialization: ${specialization}
  Target Institution: ${instituteName}
  
  Follow the structure and technical rigor specified in your system instructions. 
  The proposal should be approximately 2500 words (excluding references).
  Ensure specific methodology (EEG/Behavioural/etc. as appropriate), statistical plans, and directional hypotheses.`;

  try {
    const response = await getAIClient().models.generateContent({
      model,
      contents: prompt,
      config: {
        systemInstruction: PROPOSAL_SYSTEM_INSTRUCTIONS,
      }
    });

    return response.text || "Failed to generate proposal.";
  } catch (error) {
    console.error("Error generating proposal:", error);
    return "An error occurred while generating the proposal.";
  }
}

export async function getInstituteNameFromUrl(url: string): Promise<string> {
  const model = "gemini-3-flash-preview";
  const prompt = `Extract the official name of the academic institution or department from this URL: ${url}. 
  Return ONLY the name (e.g., "NIMHANS Bangalore" or "IIT Delhi"). 
  If you cannot find a specific name, return a shortened, readable version of the URL.`;

  try {
    const response = await getAIClient().models.generateContent({
      model,
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
      },
    });

    return response.text?.trim() || url;
  } catch (error) {
    console.error("Error extracting institute name:", error);
    return url;
  }
}
