const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, 'src', 'staticDatabase.ts');
let dbContent = fs.readFileSync(dbPath, 'utf8');

const updates = {
  "Prof. Kamlesh Singh": {
    topPapers: [
      "Psychometric properties of the Hindi translated version of the Satisfaction With Life Scale (SWLS)",
      "Flourishing Scale (FS) and Scale of Positive and Negative Experience (SPANE): Psychometric properties of the Hindi translated versions",
      "Socio-demographic variables and their association with well-being and mental health in India",
      "Positive psychology in India: A review",
      "Psychological well-being and its correlates among university students in India"
    ],
    sourcePublication: "Psychometric properties of the Hindi translated version of the Satisfaction With Life Scale (SWLS)"
  },
  "Prof. Sumitava Mukherjee": {
    topPapers: [
      "Proportion dominance in saving lives: A review",
      "Affective evaluation of numbers and its impact on decision making",
      "Valuation of lives and the proportion dominance effect",
      "The role of affect in decision making under risk and uncertainty",
      "Cognitive load and human-computer interaction"
    ],
    sourcePublication: "Affective evaluation of numbers and its impact on decision making"
  },
  "Prof. Narayanan Srinivasan": {
    topPapers: [
      "Consciousness and attention: A review",
      "Role of attention in global-local processing",
      "Cognitive and neural mechanisms of meditation",
      "Attention and consciousness in India",
      "Global-local processing: A review"
    ],
    sourcePublication: "Consciousness and attention: A review"
  },
  "Prof. Jaison A. Manjaly": {
    topPapers: [
      "The role of curiosity in learning and memory",
      "Epistemic curiosity and its impact on cognitive processes",
      "Embodied cognition and its implications for education",
      "Curiosity and learning",
      "Philosophy of mind and cognitive science"
    ],
    sourcePublication: "The role of curiosity in learning and memory"
  },
  "Prof. Bipin Indurkhya": {
    topPapers: [
      "Metaphor and cognition: An interactionist approach",
      "Creativity and artificial intelligence: A review",
      "Cognitive models of metaphor comprehension",
      "Human-computer interaction",
      "Metaphor and cognition"
    ],
    sourcePublication: "Metaphor and cognition: An interactionist approach"
  }
};

// We will parse the file, find the professors, and replace their topPapers and sourcePublication.
// Since it's a TS file with a massive object, regex replacement is safest.

for (const [profName, data] of Object.entries(updates)) {
  const profRegex = new RegExp(`"name":\\s*"${profName}"[\\s\\S]*?"topPapers":\\s*\\[([\\s\\S]*?)\\]`, 'g');
  
  dbContent = dbContent.replace(profRegex, (match, p1) => {
    const newPapersStr = data.topPapers.map(p => `\n        "${p}"`).join(',') + '\n      ';
    return match.replace(p1, newPapersStr);
  });

  // Also update sourcePublication for their research ideas
  // We need to find the researchIdeas array right after the topPapers
  const researchIdeasRegex = new RegExp(`("name":\\s*"${profName}"[\\s\\S]*?"researchIdeas":\\s*\\[[\\s\\S]*?"sourcePublication":\\s*")[^"]+(")`, 'g');
  dbContent = dbContent.replace(researchIdeasRegex, `$1${data.sourcePublication}$2`);
}

fs.writeFileSync(dbPath, dbContent, 'utf8');
console.log('Database updated with exact paper titles.');
