import { GoogleGenAI, HarmCategory, HarmBlockThreshold } from "@google/genai";
import { PROPOSAL_SYSTEM_INSTRUCTIONS } from "../src/services/proposalInstructions.ts";

const IDEA_GENERATION_INSTRUCTIONS = `## ALGORITHM: RESEARCH IDEA GENERATION
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
title, description, sourcePublication, gapType, difficulty, methodology, keyVariables: { independent, dependent, population }
`;

export default async function handler(req: any, res: any) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "Missing GEMINI_API_KEY" });
  }

  const genAI = new GoogleGenAI({ apiKey });
  const { task, ...params } = req.body;

  try {
    let prompt = "";
    let systemInstruction = "";
    let tools: any[] = [];
    let responseMimeType = "text/plain";

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
        return res.status(400).json({ error: "Invalid task" });
    }

    const response = await genAI.models.generateContent({
      model: "gemini-3.1-flash-lite-preview",
      contents: prompt,
      config: {
        systemInstruction,
        responseMimeType,
        tools: tools.length > 0 ? tools : undefined,
        safetySettings: [
          { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_NONE },
          { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_NONE },
          { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_NONE },
          { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_NONE },
        ],
      },
    });

    res.status(200).json({ text: response.text });
  } catch (error: any) {
    console.error(`AI ${task} Error:`, error);
    res.status(500).json({ error: error.message });
  }
}
