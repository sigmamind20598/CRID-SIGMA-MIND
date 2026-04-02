import { GoogleGenAI } from '@google/genai';
import fs from 'fs';

// Initialize Gemini API
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function processProfessor(institute: string, prof: any) {
  console.log(`\n🔍 Researching ${prof.name} at ${institute}...`);
  
  const prompt = `
You are an expert academic researcher. I need you to find REAL publications for the following professor:
Name: ${prof.name}
Institute: ${institute}
Specialization: ${prof.specialization}

Please use the googleSearch tool to search the web (Google Scholar, ResearchGate, University website) and find 3 to 5 of their ACTUAL, real published research papers. Include the year and DOI if possible.

Then, based ONLY on these real papers, generate 3 specific research proposal ideas (research gaps) that a student could pursue under this professor.

Return ONLY a valid JSON object with this exact structure (no markdown formatting, no backticks, just the raw JSON):
{
  "topPapers": ["Paper Title 1 (Year) - DOI: ...", "Paper Title 2 (Year)"],
  "researchIdeas": [
    {
      "title": "Idea Title",
      "description": "Idea Description",
      "sourcePublication": "The exact paper title from topPapers this is based on",
      "gapType": "Theoretical Gap",
      "difficulty": "Intermediate",
      "methodology": "Suggested methodology"
    }
  ]
}
`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3.1-pro-preview',
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
        temperature: 0.2
      }
    });

    let text = response.text || "";
    // Clean up markdown if present
    text = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    
    const data = JSON.parse(text);
    
    if (data.topPapers && data.researchIdeas) {
      prof.topPapers = data.topPapers;
      
      // Update research ideas while preserving IDs
      prof.researchIdeas = data.researchIdeas.map((idea: any, index: number) => ({
        id: `${prof.id}-i${index + 1}`,
        ...idea
      }));
      
      console.log(`✅ Successfully updated ${prof.name} with ${prof.topPapers.length} real papers.`);
      return true;
    }
  } catch (error) {
    console.error(`❌ Failed to process ${prof.name}:`, error);
  }
  return false;
}

async function main() {
  const dbPath = 'src/database.json';
  const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
  
  let processedCount = 0;
  const BATCH_SIZE = 3; // Process 3 professors for this demonstration
  
  for (const institute of Object.keys(db)) {
    for (const prof of db[institute]) {
      // Check if this professor still has UNVERIFIED papers
      const needsUpdate = prof.topPapers.some((p: string) => p.includes('UNVERIFIED:'));
      
      if (needsUpdate) {
        const success = await processProfessor(institute, prof);
        if (success) {
          // Save progress immediately
          fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
          processedCount++;
        }
        
        // Add a small delay to avoid rate limits
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        if (processedCount >= BATCH_SIZE) {
          console.log(`\n🛑 Reached batch limit of ${BATCH_SIZE}. Stopping for now.`);
          return;
        }
      }
    }
  }
  
  console.log("\n🎉 All professors processed!");
}

main().catch(console.error);
