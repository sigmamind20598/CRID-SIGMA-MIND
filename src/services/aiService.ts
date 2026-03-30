import { GoogleGenAI, Type } from "@google/genai";
import { Professor, ResearchTopic, NewsItem } from "../types";
import { PROPOSAL_SYSTEM_INSTRUCTIONS } from "./proposalInstructions";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function getLatestNews(): Promise<NewsItem[]> {
  const model = "gemini-3-flash-preview";
  const prompt = `Find the 10 most recent and relevant updates, notifications, or research news related to Psychology, Neuroscience, and PhD admissions in India.
  
  Include:
  - PhD Admission Forms and Deadlines
  - Job Openings (JRF, SRF, Project Assistant)
  - Research news and breakthroughs
  
  Focus on these specific sources:
  - YouTube: UPS Education, Power Within Psychology, NTA UGC NET, Physics Wallah, Unacademy UGC NET, Research Methodology India.
  - Telegram: UGC NET Mentor, Gyan Adda by SM, Psychology Study, PhD Notification Only, All India PhD Scholars, Shodhganga, CSIR NET.
  - X (Twitter): UGC India, NIMHANS Official, RCI India, TISS Mumbai, IIT Bombay Psychology.
  
  For each news item, provide:
  1. Title (concise and catchy)
  2. Source name
  3. URL (if available, otherwise a placeholder)
  4. Category (YouTube, Telegram, X, or Journal)
  5. A 1-sentence summary.
  6. A single relevant keyword for an image search (e.g., "graduation", "microscope", "brain", "exam", "books", "university").
  
  Return the data as a JSON array of objects with keys: title, source, url, category, summary, imageKeyword.`;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              source: { type: Type.STRING },
              url: { type: Type.STRING },
              category: { type: Type.STRING, enum: ['YouTube', 'Telegram', 'X', 'Journal'] },
              summary: { type: Type.STRING },
              imageKeyword: { type: Type.STRING }
            },
            required: ['title', 'source', 'category', 'summary', 'imageKeyword']
          }
        }
      },
    });

    const text = response.text;
    if (!text) return [];
    const data = JSON.parse(text);
    return data.map((item: any, index: number) => ({
      ...item,
      id: `news-${index}-${Date.now()}`,
      timestamp: new Date().toISOString()
    }));
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
}

export async function getFacultyData(instituteName: string): Promise<Professor[]> {
  const model = "gemini-3-flash-preview";
  const prompt = `Find the top 5-8 professors at ${instituteName} using this EXACT filtering logic:
  1. FIRST, locate the Department of Humanities and Social Sciences (HSS) or Behavioral Sciences.
  2. SECOND, filter for faculty within the Psychology division/area.
  3. THIRD, prioritize those specializing in Cognitive Neuroscience (e.g., Prof. Sumitash Jana at IIT Delhi).
  4. FOURTH, EXCLUDE anyone whose primary research or department is related to Linguistics.
  
  If ${instituteName} is a URL, visit it to find the faculty. If it's a name, search for the faculty at that institution.
  
  For each professor, provide:
  1. Name
  2. Primary Specialization (e.g., "Cognitive Neuroscience", "Social Psychology")
  3. Key Publication Focus (e.g., "Visual Perception", "Neural Correlates of Memory")
  4. A DIRECT link to their Research Profile (ORCID, ResearchGate, or University page).
  5. Citation metrics (e.g., "1500+ citations" or "H-index: 25") to help users decide on a research area.
  
  Return ONLY a valid JSON array of objects with keys: name, department, researchArea, specialization, focus, scholarLink, citations. 
  Do not include any other text or markdown formatting.`;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
        // We'll parse manually to be more robust against model variations
      },
    });

    const text = response.text;
    if (!text) return [];

    // Clean the response text to extract JSON
    let jsonStr = text.trim();
    if (jsonStr.includes("```json")) {
      jsonStr = jsonStr.split("```json")[1].split("```")[0].trim();
    } else if (jsonStr.includes("```")) {
      jsonStr = jsonStr.split("```")[1].split("```")[0].trim();
    }

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
    const response = await ai.models.generateContent({
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
    const response = await ai.models.generateContent({
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
    const response = await ai.models.generateContent({
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
    const response = await ai.models.generateContent({
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
