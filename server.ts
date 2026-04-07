import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import nodemailer from "nodemailer";
import Razorpay from "razorpay";
import { GoogleGenAI, HarmCategory, HarmBlockThreshold } from "@google/genai";
import { PROPOSAL_SYSTEM_INSTRUCTIONS } from "./src/services/proposalInstructions.ts";

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

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // --- API ROUTES ---
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  app.post("/api/create-razorpay-order", async (req, res) => {
    try {
      const { amount, currency = "INR" } = req.body;
      
      const keyId = process.env.RAZORPAY_KEY_ID?.trim();
      const keySecret = process.env.RAZORPAY_KEY_SECRET?.trim();

      if (!keyId || !keySecret) {
        console.error("Razorpay keys missing. ID:", !!keyId, "Secret:", !!keySecret);
        return res.status(500).json({ error: "Razorpay keys not configured. Please add RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET in the AI Studio Settings (Secrets panel)." });
      }

      console.log("Creating Razorpay order for amount:", amount, "using key:", keyId.substring(0, 8) + "...");
      
      // Handle potential default export issues in different environments
      const RazorpayClass = (Razorpay as any).default || Razorpay;
      if (typeof RazorpayClass !== 'function') {
        console.error("Razorpay constructor not found. Type:", typeof RazorpayClass, "Value:", RazorpayClass);
        throw new Error("Razorpay library initialization failed. Please check server logs.");
      }
      const instance = new RazorpayClass({
        key_id: keyId,
        key_secret: keySecret,
      });

      const options = {
        amount: Math.floor(Number(amount) * 100), // amount in smallest currency unit (paise)
        currency,
        receipt: `receipt_order_${Date.now()}`,
      };

      console.log("Order options:", JSON.stringify(options));
      const order = await instance.orders.create(options);
      console.log("Order created successfully:", order.id);
      res.json(order);
    } catch (error: any) {
      console.error("Razorpay Order Error Details:", error);
      // Extract the most descriptive error message possible
      const errorMessage = error.error?.description || error.description || error.message || "Failed to create order";
      res.status(500).json({ error: `Razorpay Error: ${errorMessage}` });
    }
  });

  app.post("/api/submit-service", async (req, res) => {
    try {
      const { serviceType, userEmail, userPhone, details } = req.body;

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const mailOptions: any = {
        from: process.env.SMTP_USER || 'noreply@crid.app',
        to: 'manusingh20598@gmail.com, sigmamind20598@gmail.com',
        subject: `New Service Request: ${serviceType}`,
        text: `
          New request for ${serviceType}
          
          Contact Info:
          Email: ${userEmail}
          Phone: ${userPhone}
          
          Details:
          ${JSON.stringify(details, null, 2)}
        `,
      };

      if (process.env.SMTP_USER && process.env.SMTP_PASS) {
        await transporter.sendMail(mailOptions);
        console.log(`Email sent successfully for ${serviceType}`);
      } else {
        console.log('SMTP not configured. Mocking email send:', mailOptions);
      }

      res.json({ success: true });
    } catch (error: any) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send request' });
    }
  });

  // --- AI PROXY ROUTES ---
  const getAIClient = () => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) throw new Error("Missing GEMINI_API_KEY");
    return new GoogleGenAI({ apiKey });
  };

  app.post("/api/ai/news", async (req, res) => {
    try {
      const model = "gemini-3.1-flash-lite-preview";
      const prompt = `Search for the 10 most recent and relevant updates, notifications, or research news related to Psychology, Neuroscience, and PhD admissions in India (2024-2025).
      
      Include:
      - PhD Admission Forms and Deadlines
      - Job Openings (JRF, SRF, Project Assistant)
      - Research breakthroughs
      
      Return a JSON array of objects with exactly these keys: title, source, url, category, summary, imageKeyword.
      Do not include any other text, only the JSON array.`;

      const response = await getAIClient().models.generateContent({
        model,
        contents: prompt,
        config: { tools: [{ googleSearch: {} }] },
      });

      res.json({ text: response.text });
    } catch (error: any) {
      console.error("AI News Error:", error);
      res.status(500).json({ error: error.message });
    }
  });

  app.post("/api/ai/faculty", async (req, res) => {
    try {
      const { instituteName } = req.body;
      const model = "gemini-3.1-flash-lite-preview";
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

      const response = await getAIClient().models.generateContent({
        model,
        contents: prompt,
        config: { tools: [{ googleSearch: {} }] },
      });

      res.json({ text: response.text });
    } catch (error: any) {
      console.error("AI Faculty Error:", error);
      res.status(500).json({ error: error.message });
    }
  });

  app.post("/api/ai/publications", async (req, res) => {
    try {
      const { professorName, institute } = req.body;
      const model = "gemini-3.1-flash-lite-preview";
      const prompt = `Search for the professional profile of Prof. ${professorName} at ${institute} using Google Search.
      
      Provide:
      1. A brief professional bio (2-3 sentences) summarizing their research career and impact.
      2. A list of their TOP 10 most cited or significant publications (full titles).
      3. Realistic data for their Citation Trend (last 6 years, e.g., 2018-2023) as a JSON array of {year: number, count: number}.
      4. Realistic data for their Publication Trend (last 6 years, e.g., 2018-2023) as a JSON array of {year: number, count: number}.
      
      Return the data as a JSON object with keys: bio, publications, citationTrend, publicationTrend.
      If you cannot find specific information, provide a generic but professional bio based on their known research area and estimated trends.`;

      const response = await getAIClient().models.generateContent({
        model,
        contents: prompt,
        config: { tools: [{ googleSearch: {} }] },
      });

      res.json({ text: response.text });
    } catch (error: any) {
      console.error("AI Publications Error:", error);
      res.status(500).json({ error: error.message });
    }
  });

  app.post("/api/ai/topics", async (req, res) => {
    try {
      const { professor, instituteName, pubData } = req.body;
      const model = "gemini-3.1-flash-lite-preview";
      const prompt = `Professor Profile:
      Name: ${professor.name}
      Institute: ${instituteName}
      Focus: ${professor.focus}
      Specialization: ${professor.specialization}
      
      Recent Publications:
      ${pubData?.publications?.length > 0 ? pubData.publications.join("\n") : "No recent publications found. Base the ideas on the professor's Focus and Specialization."}
      
      CRITICAL REQUIREMENT: You MUST generate EXACTLY 10 high-quality PhD research ideas, regardless of how much publication data is available. If publications are sparse, extrapolate based on their focus area.
      Follow the RESEARCH IDEA GENERATION algorithm.
      Ensure the output is strictly valid JSON.`;

      const response = await getAIClient().models.generateContent({
        model,
        contents: prompt,
        config: {
          systemInstruction: IDEA_GENERATION_INSTRUCTIONS,
          responseMimeType: "application/json",
          safetySettings: [
            { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_NONE },
            { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_NONE },
            { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_NONE },
            { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_NONE },
          ],
        },
      });

      res.json({ text: response.text });
    } catch (error: any) {
      console.error("AI Topics Error:", error);
      res.status(500).json({ error: error.message });
    }
  });

  app.post("/api/ai/proposal", async (req, res) => {
    try {
      const { topic, professorName, specialization, instituteName } = req.body;
      const model = "gemini-3.1-flash-lite-preview";
      const prompt = `Professor: ${professorName}, ${specialization} University: ${instituteName} Source paper: ${topic.sourcePublication} Research idea: ${topic.title} Description: ${topic.description} Variables: IV: ${topic.keyVariables?.independent || "N/A"} DV: ${topic.keyVariables?.dependent || "N/A"} Population: ${topic.keyVariables?.population || "N/A"} Generate a full PhD research proposal following your standard structure.`;

      const response = await getAIClient().models.generateContent({
        model,
        contents: prompt,
        config: {
          systemInstruction: PROPOSAL_SYSTEM_INSTRUCTIONS + "\n\nCRITICAL RULE: DO NOT use markdown bold formatting (**) anywhere in the proposal. Output plain text without asterisks for bolding.",
          safetySettings: [
            { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_NONE },
            { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_NONE },
            { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_NONE },
            { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_NONE },
          ],
        },
      });

      res.json({ text: response.text });
    } catch (error: any) {
      console.error("AI Proposal Error:", error);
      res.status(500).json({ error: error.message });
    }
  });

  app.post("/api/ai/extract-institute", async (req, res) => {
    try {
      const { url } = req.body;
      const model = "gemini-3.1-flash-lite-preview";
      const prompt = `Extract the official name of the academic institution or department from this URL: ${url}. 
      Return ONLY the name (e.g., "NIMHANS Bangalore" or "IIT Delhi"). 
      If you cannot find a specific name, return a shortened, readable version of the URL.`;

      const response = await getAIClient().models.generateContent({
        model,
        contents: prompt,
        config: { tools: [{ googleSearch: {} }] },
      });

      res.json({ text: response.text });
    } catch (error: any) {
      console.error("AI Extract Institute Error:", error);
      res.status(500).json({ error: error.message });
    }
  });

  app.post("/api/ai", async (req, res) => {
    try {
      const { task, ...params } = req.body;
      const model = "gemini-3.1-flash-lite-preview";
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
          return res.status(400).json({ error: "Invalid task" });
      }

      const response = await getAIClient().models.generateContent({
        model,
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

      res.json({ text: response.text });
    } catch (error: any) {
      console.error(`AI ${req.body.task} Error:`, error);
      res.status(500).json({ error: error.message });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  if (process.env.NODE_ENV !== "production" || !process.env.VERCEL) {
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  }
  
  return app;
}

const appPromise = startServer();
export default async function (req: any, res: any) {
  const app = await appPromise;
  app(req, res);
}
