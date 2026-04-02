import fs from 'fs';

async function main() {
  const filePath = 'src/staticDatabase.ts';
  let content = fs.readFileSync(filePath, 'utf8');

  // Find all paper titles and their frequencies
  const paperMatches = content.match(/"([^"]+ \(\d{4}\))"/g);
  const counts: Record<string, number> = {};
  if (paperMatches) {
    paperMatches.forEach(m => {
      const clean = m.replace(/"/g, '');
      counts[clean] = (counts[clean] || 0) + 1;
    });
  }

  // A paper is considered a placeholder if it appears more than 1 time
  // or if it's in our known singletons that are also generic.
  const isPlaceholder = (title: string) => {
    // Remove UNVERIFIED: prefix if it exists
    const cleanTitle = title.replace(/^UNVERIFIED:\s*/, '');
    return (counts[cleanTitle] && counts[cleanTitle] > 1) || 
           cleanTitle.includes("Cognitive mechanisms") ||
           cleanTitle.includes("Neuroplasticity") ||
           cleanTitle.includes("Behavioral interventions") ||
           cleanTitle.includes("Advanced methodologies") ||
           cleanTitle.includes("Cross-cultural perspectives") ||
           cleanTitle.includes("Quantitative analysis") ||
           cleanTitle.includes("Theoretical models") ||
           cleanTitle.includes("Applied psychology") ||
           cleanTitle.includes("Developmental trajectories") ||
           cleanTitle.includes("Psychometric evaluation") ||
           cleanTitle.includes("Working memory and emotion") ||
           cleanTitle.includes("Prospective memory in aging") ||
           cleanTitle.includes("Cognitive deficits in dyslexia") ||
           cleanTitle.includes("Executive functions and learning") ||
           cleanTitle.includes("Emotion regulation and cognition") ||
           cleanTitle.includes("Human-computer interaction") ||
           cleanTitle.includes("Computational models") ||
           cleanTitle.includes("Interdisciplinary approaches") ||
           cleanTitle.includes("Gender and mental health") ||
           cleanTitle.includes("Cultural psychology of emotion") ||
           cleanTitle.includes("Work-life integration") ||
           cleanTitle.includes("Diversity and inclusion") ||
           cleanTitle.includes("Chronotype and academic performance") ||
           cleanTitle.includes("Qualitative research") ||
           cleanTitle.includes("Stress and coping") ||
           cleanTitle.includes("Health behavior change") ||
           cleanTitle.includes("Quality of life in chronic illness") ||
           cleanTitle.includes("Object recognition") ||
           cleanTitle.includes("Machine learning in cognitive science") ||
           cleanTitle.includes("Healing practices in India") ||
           cleanTitle.includes("Psychology of religion") ||
           cleanTitle.includes("Stress and burnout in IT professionals") ||
           cleanTitle.includes("Ergonomic design of workspaces") ||
           cleanTitle.includes("Moral judgments and embodied metaphors") ||
           cleanTitle.includes("Cognitive mechanisms of curiosity") ||
           cleanTitle.includes("Social cognition and empathy") ||
           cleanTitle.includes("Philosophy of mind and cognitive science") ||
           cleanTitle.includes("Language processing in bilinguals") ||
           cleanTitle.includes("Cognitive development and language") ||
           cleanTitle.includes("Syntax and semantics") ||
           cleanTitle.includes("Cognitive behavior therapy for anxiety") ||
           cleanTitle.includes("Saccadic Eye Movements and Attention") ||
           cleanTitle.includes("Perceptual Learning and Plasticity") ||
           cleanTitle.includes("Attention in the Aging Brain");
  };

  // Process the file content
  // We will use regex to find professor blocks and update them
  
  // 1. Update topPapers
  content = content.replace(/"topPapers":\s*\[([\s\S]*?)\]/g, (match, papersStr) => {
    const updatedPapers = papersStr.split(',').map((line: string) => {
      const titleMatch = line.match(/"([^"]+)"/);
      if (titleMatch) {
        let title = titleMatch[1];
        if (!title.startsWith("UNVERIFIED:") && !title.includes(" - DOI: ")) {
          if (isPlaceholder(title)) {
            return line.replace(`"${title}"`, `"UNVERIFIED: ${title}"`);
          }
        }
      }
      return line;
    }).join(',');
    return `"topPapers": [${updatedPapers}]`;
  });

  // 2. Update researchIdeas sourcePublication
  content = content.replace(/"sourcePublication":\s*"([^"]+)"/g, (match, title) => {
    if (!title.startsWith("UNVERIFIED:") && !title.includes(" - DOI: ")) {
      if (isPlaceholder(title)) {
        return `"sourcePublication": "UNVERIFIED: ${title}"`;
      }
    }
    return match;
  });

  // 3. Update scholarLink and citations
  // We'll replace scholarLink with a search query if it's a generic one or missing
  // We'll replace citations with N/A if it's a generic number
  
  // We need to parse the professor objects to get their names for the scholar link
  const profRegex = /{\s*"id":\s*"[^"]+",\s*"name":\s*"([^"]+)",[\s\S]*?"scholarLink":\s*"([^"]*)",\s*"citations":\s*"([^"]*)"/g;
  
  content = content.replace(profRegex, (match, name, scholarLink, citations) => {
    let newScholarLink = scholarLink;
    let newCitations = citations;

    // If scholarLink is empty or points to a generic iit page, update it
    if (!scholarLink || scholarLink.includes("iit") || scholarLink.includes("ac.in")) {
      newScholarLink = `https://scholar.google.com/scholar?q=${encodeURIComponent(name)}`;
    }

    // If citations is a round number like "500", "1200", etc. it's likely fake
    if (citations === "500" || citations === "1200" || citations === "2400" || !citations) {
      newCitations = "N/A";
    }

    return match
      .replace(`"scholarLink": "${scholarLink}"`, `"scholarLink": "${newScholarLink}"`)
      .replace(`"citations": "${citations}"`, `"citations": "${newCitations}"`);
  });

  fs.writeFileSync(filePath, content, 'utf8');
  console.log("Successfully processed all professors.");
}

main().catch(console.error);
