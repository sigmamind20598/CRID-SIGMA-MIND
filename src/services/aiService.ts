import { GoogleGenAI, Type } from "@google/genai";
import { Professor, ResearchTopic, NewsItem } from "../types";
import { PROPOSAL_SYSTEM_INSTRUCTIONS } from "./proposalInstructions";

let aiClient: GoogleGenAI | null = null;

function getAIClient(): GoogleGenAI {
  if (!aiClient) {
    // @ts-ignore
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY || (typeof process !== 'undefined' ? process.env.GEMINI_API_KEY : '');
    if (!apiKey) {
      console.error("CRITICAL: Missing Gemini API Key. Please set VITE_GEMINI_API_KEY in your Vercel environment variables.");
      throw new Error("Missing Gemini API Key");
    }
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
}

export async function getLatestNews(): Promise<NewsItem[]> {
  const model = "gemini-3-flash-preview"; 
  const prompt = `Search for the 10 most recent and relevant updates, notifications, or research news related to Psychology, Neuroscience, and PhD admissions in India (2024-2025).
  
  Include:
  - PhD Admission Forms and Deadlines
  - Job Openings (JRF, SRF, Project Assistant)
  - Research breakthroughs
  
  Return a JSON array of objects with exactly these keys: title, source, url, category, summary, imageKeyword.
  Do not include any other text, only the JSON array.`;

  try {
    const response = await getAIClient().models.generateContent({
      model,
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }]
      },
    });

    const text = response.text;
    if (!text) return [];

    // Robust JSON extraction
    const match = text.match(/\[[\s\S]*\]/);
    const jsonStr = match ? match[0] : text;

    try {
      const data = JSON.parse(jsonStr);
      if (!Array.isArray(data)) return [];
      return data.map((item: any, index: number) => ({
        ...item,
        id: `news-${index}-${Date.now()}`,
        timestamp: new Date().toISOString()
      }));
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
    const response = await getAIClient().models.generateContent({
      model,
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }]
      },
    });

    const text = response.text;
    if (!text) return [];

    const match = text.match(/\[[\s\S]*\]/);
    const jsonStr = match ? match[0] : text;

    try {
      const data = JSON.parse(jsonStr);
      if (!Array.isArray(data)) return [];

      return data.map((p: any, index: number) => ({
        name: p.name || "Unknown Professor",
        department: p.department || "HSS / Behavioral Sciences",
        researchArea: p.researchArea || "Psychology / Cognitive Neuroscience",
        specialization: p.specialization || "Cognitive Science",
        focus: p.focus || "General Research",
        scholarLink: p.scholarLink || "#",
        citations: p.citations || "N/A",
        id: `${instituteName.toLowerCase().replace(/\s+/g, '-')}-${index}-${Date.now()}`,
      }));
    } catch (e) {
      console.error("Failed to parse Faculty JSON:", text);
      return [];
    }
  } catch (error) {
    console.error("Error fetching faculty data:", error);
    return [];
  }
}

export async function getProfessorPublications(professorName: string, institute: string): Promise<{ publications: string[], bio: string, citationTrend: { year: number; count: number }[], publicationTrend: { year: number; count: number }[] }> {
  const model = "gemini-3-flash-preview";
  const prompt = `Provide a brief professional bio (2-3 sentences) and a list of the TOP 10 most cited or significant publications for Prof. ${professorName} at ${institute}.
  
  Also, provide realistic data for:
  1. Citation Trend (last 6 years, e.g., 2018-2023)
  2. Publication Trend (last 6 years, e.g., 2018-2023)
  
  Return the data as a JSON object with keys: 
  - bio (string)
  - publications (array of strings)
  - citationTrend (array of {year: number, count: number})
  - publicationTrend (array of {year: number, count: number})`;

  try {
    const response = await getAIClient().models.generateContent({
      model,
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
        responseMimeType: "application/json",
      },
    });

    const text = response.text;
    if (!text) return { bio: "", publications: [], citationTrend: [], publicationTrend: [] };
    return JSON.parse(text);
  } catch (error) {
    console.error("Error fetching publications:", error);
    return { bio: "Information currently unavailable.", publications: [], citationTrend: [], publicationTrend: [] };
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
    return JSON.parse(text).map((t: any, index: number) => ({
      ...t,
      id: `topic-${index}`,
    }));
  } catch (error) {
    console.error("Error generating topics:", error);
    return [];
  }
}

export async function generateFullProposal(topic: string, professorName: string, specialization: string, instituteName: string): Promise<string> {
  const model = "gemini-3.1-pro-preview";
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
