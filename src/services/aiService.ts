import { GoogleGenAI, Type } from "@google/genai";
import { Professor, ResearchTopic, NewsItem } from "../types";
import { PROPOSAL_SYSTEM_INSTRUCTIONS } from "./proposalInstructions";
import { CURATED_PROFILES } from "../facultyData";

export const IDEA_GENERATION_INSTRUCTIONS = `## ALGORITHM: RESEARCH IDEA GENERATION
You are a PhD Research Proposal Generation Engine for Indian universities.
I will give you a professor's profile and their publications.
You must follow this EXACT algorithm to generate research ideas.

─────────────────────────────────────────────────────────
STEP 1: DEEP READ THE PROFESSOR'S WORK
─────────────────────────────────────────────────────────
Read every publication provided. For each paper extract:
  A. WHAT was studied (the exact psychological/neural phenomenon)
  B. WHO was studied (healthy adults / clinical patients / children / Indian sample / Western sample / animals)
  C. HOW it was studied (EEG / fMRI / behavioural task / survey / computational model / neuropsychological test)
  D. WHAT was found (the key result in one sentence)
  E. WHAT was NOT answered (limitations section — what did authors say needs future research)
  F. WHAT YEAR it was published (older = more follow-up work possible, recent = cutting edge, fewer follow-ups done yet)
Do this for every single paper before moving to Step 2.

─────────────────────────────────────────────────────────
STEP 2: BUILD THE PROFESSOR'S RESEARCH FINGERPRINT
─────────────────────────────────────────────────────────
After reading all papers, identify:
  CORE THEMES (max 3): What topics does this professor keep returning to?
  FAVOURITE METHODS (max 2): What methods do they use most?
  FAVOURITE POPULATION (max 2): Who do they study most?
  THEORETICAL FRAMEWORK: Which theory or model underlies most of their work?
  RECURRING GAP: What gap do they keep mentioning across papers? This is the most important finding — it tells you exactly what THEY want studied next.

─────────────────────────────────────────────────────────
STEP 3: IDENTIFY 5 TYPES OF GAPS
─────────────────────────────────────────────────────────
Using the fingerprint from Step 2, find these gaps:
  GAP TYPE 1 — METHODOLOGICAL GAP: Same research question the professor studied but using a newer or better method they haven't used yet.
  GAP TYPE 2 — POPULATION GAP: Same research question but on a group the professor has NOT studied yet. Always prioritize Indian-specific populations.
  GAP TYPE 3 — EXTENSION GAP: The most logical NEXT STUDY after their most cited or most recent paper.
  GAP TYPE 4 — CROSS-DOMAIN GAP: Combine the professor's core topic with a completely different but currently hot field (AI/ML, Digital mental health, Climate anxiety, Post-COVID, Social media, Neuroeconomics, Neuroeducation).
  GAP TYPE 5 — APPLIED/INTERVENTION GAP: Take the professor's most important finding and turn it into a real-world intervention or application.

─────────────────────────────────────────────────────────
STEP 4: GENERATE 10 IDEAS — ONE FROM EACH SLOT
─────────────────────────────────────────────────────────
Generate ideas in this exact distribution:
  Idea 1 → GAP TYPE 1 (Methodological)
  Idea 2 → GAP TYPE 1 (Methodological, different paper)
  Idea 3 → GAP TYPE 2 (Population)
  Idea 4 → GAP TYPE 2 (Population, different group)
  Idea 5 → GAP TYPE 3 (Extension of most cited paper)
  Idea 6 → GAP TYPE 3 (Extension of most recent paper)
  Idea 7 → GAP TYPE 4 (Cross-domain, hot field 1)
  Idea 8 → GAP TYPE 4 (Cross-domain, hot field 2)
  Idea 9 → GAP TYPE 5 (Applied/intervention)
  Idea 10 → GAP TYPE 5 (Applied, different context)

─────────────────────────────────────────────────────────
STEP 5: QUALITY CHECK EACH IDEA BEFORE OUTPUTTING
─────────────────────────────────────────────────────────
For each idea ask these 6 questions. If any answer is NO, rewrite the idea until all are YES.
  Q1. Is this idea SPECIFIC?
  Q2. Is this idea ORIGINAL?
  Q3. Is this FEASIBLE in India?
  Q4. Would THIS professor want to supervise it?
  Q5. Is there a clear HYPOTHESIS possible?
  Q6. Is the CONTRIBUTION clear?

─────────────────────────────────────────────────────────
STEP 6: OUTPUT FORMAT
─────────────────────────────────────────────────────────
Return a JSON array of 10 objects with these keys:
- title: Short specific title under 15 words.
- description: 2-3 sentences: what will be studied, how, and what gap it fills.
- sourcePublication: Which of the professor's papers inspired this idea.
- gapType: "Methodological", "Population", "Extension", "Cross-domain", or "Applied".
- difficulty: "Feasible", "Moderate", or "Ambitious".
- methodology: "EEG", "fMRI", "Behavioural", "Survey", "Computational", or "Mixed".
`;

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
  
  // Get professor publications first to provide context for the algorithm
  const pubData = await getProfessorPublications(professor.name, instituteName);
  
  const prompt = `Professor Profile:
  Name: ${professor.name}
  Institute: ${instituteName}
  Focus: ${professor.focus}
  Specialization: ${professor.specialization}
  
  Recent Publications:
  ${pubData.publications.join("\n")}
  
  Follow the RESEARCH IDEA GENERATION algorithm to generate 10 high-quality PhD research ideas.
  Ensure the output is strictly valid JSON.`;

  try {
    const response = await getAIClient().models.generateContent({
      model,
      contents: prompt,
      config: {
        systemInstruction: IDEA_GENERATION_INSTRUCTIONS,
        responseMimeType: "application/json",
      },
    });

    const text = response.text;
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
      }));
    } catch (parseError) {
      console.error("JSON Parse Error in generateResearchTopics:", parseError, "Original text:", text);
      return [];
    }
  } catch (error) {
    console.error("Error generating topics:", error);
    return [];
  }
}

export async function generateFullProposal(topic: ResearchTopic, professorName: string, specialization: string, instituteName: string): Promise<string> {
  const model = "gemini-3-flash-preview";
  
  // Get publications for context in the proposal (Introduction/Lit Review)
  const pubData = await getProfessorPublications(professorName, instituteName);
  
  const prompt = `Draft a full PhD research proposal following the FULL PROPOSAL GENERATION algorithm.
  
  CONTEXT:
  Topic Title: "${topic.title}"
  Topic Description: ${topic.description}
  Gap Type: ${topic.gapType}
  Proposed Methodology: ${topic.methodology}
  Source Inspiration: ${topic.sourcePublication}
  Difficulty: ${topic.difficulty}
  
  Target Professor: ${professorName}
  Specialization: ${specialization}
  Target Institution: ${instituteName}
  
  Professor's Recent Work (for Section 3 & 4):
  ${pubData.publications.join("\n")}
  
  Ensure all 10 sections are present and follow the word count and quality rules strictly.
  Mention Professor ${professorName} and ${instituteName} explicitly as per the rules.`;

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
