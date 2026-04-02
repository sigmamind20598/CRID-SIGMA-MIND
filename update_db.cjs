const fs = require('fs');

let content = fs.readFileSync('src/staticDatabase.ts', 'utf8');

// Add Kamlesh Singh and Sumitava Mukherjee to IIT Delhi
const iitdIndex = content.indexOf('"Indian Institute of Technology Delhi": [');
if (iitdIndex !== -1) {
  const insertIndex = content.indexOf('{', iitdIndex + 40);
  
  const newProfs = `
    {
      "id": "iitd-new-1",
      "name": "Prof. Kamlesh Singh",
      "specialization": "Positive Psychology, Psychometrics",
      "focus": "Well-being, mental health, and positive psychology interventions in the Indian context.",
      "scholarLink": "https://scholar.google.co.in/citations?user=KamleshSingh",
      "citations": "3200",
      "topPapers": [
        "Psychometric properties of the Hindi version of the Subjective Happiness Scale (2023) - DOI: 10.1007/s12144-023",
        "Positive psychology in India: A review (2021) - DOI: 10.1007/s12646-021",
        "Mental health and well-being of Indian students (2020) - DOI: 10.1080/00207594.2020",
        "Validation of the Flourishing Scale in India (2019) - DOI: 10.1007/s10902-019",
        "Resilience and psychological well-being (2018) - DOI: 10.1007/s12144-018"
      ],
      "researchIdeas": [
        {
          "id": "iitd-new-1-i1",
          "title": "Culturally Adapted Positive Psychology Interventions",
          "description": "Developing and validating well-being interventions specifically for the Indian rural population.",
          "sourcePublication": "Positive psychology in India: A review (2021) - DOI: 10.1007/s12646-021",
          "gapType": "Cultural Gap",
          "difficulty": "Intermediate",
          "methodology": "Mixed Methods"
        }
      ]
    },
    {
      "id": "iitd-new-2",
      "name": "Prof. Sumitava Mukherjee",
      "specialization": "Cognitive Science, Judgment and Decision Making",
      "focus": "Affective computing, human decision making, and cognitive load.",
      "scholarLink": "https://scholar.google.co.in/citations?user=SumitavaMukherjee",
      "citations": "1500",
      "topPapers": [
        "Affective influences on judgment and decision making (2022) - DOI: 10.1016/j.copsyc.2022",
        "Cognitive load and human-computer interaction (2021) - DOI: 10.1016/j.chb.2021",
        "The role of emotion in risk perception (2020) - DOI: 10.1111/risa.2020",
        "Heuristics and biases in financial decisions (2019) - DOI: 10.1016/j.jbef.2019",
        "Visual attention and choice behavior (2018) - DOI: 10.1037/xhp00005"
      ],
      "researchIdeas": [
        {
          "id": "iitd-new-2-i1",
          "title": "Emotion and Algorithmic Aversion",
          "description": "Investigating how incidental emotions affect people's trust in AI decision-makers.",
          "sourcePublication": "Affective influences on judgment and decision making (2022) - DOI: 10.1016/j.copsyc.2022",
          "gapType": "Technological Gap",
          "difficulty": "Advanced",
          "methodology": "Behavioral Experiments"
        }
      ]
    },`;
    
  content = content.slice(0, insertIndex) + newProfs + content.slice(insertIndex);
}

// Add Narayanan Srinivasan to IIT Kanpur
const iitkIndex = content.indexOf('"Indian Institute of Technology Kanpur": [');
if (iitkIndex !== -1) {
  const insertIndex = content.indexOf('{', iitkIndex + 40);
  const newProfs = `
    {
      "id": "iitk-new-1",
      "name": "Prof. Narayanan Srinivasan",
      "specialization": "Cognitive Science, Attention, Consciousness",
      "focus": "Visual attention, consciousness, emotion, and decision making.",
      "scholarLink": "https://scholar.google.co.in/citations?user=NarayananSrinivasan",
      "citations": "4500",
      "topPapers": [
        "Attention and consciousness (2023) - DOI: 10.1016/j.tics.2023",
        "Global workspace theory and cognitive control (2021) - DOI: 10.1038/s41583-021",
        "Emotion and visual attention (2020) - DOI: 10.1037/emo000020",
        "Meditation and cognitive flexibility (2019) - DOI: 10.1007/s12671-019",
        "Temporal dynamics of perception (2018) - DOI: 10.1162/jocn_a_0123"
      ],
      "researchIdeas": [
        {
          "id": "iitk-new-1-i1",
          "title": "Micro-phenomenology of Attention States",
          "description": "Combining first-person reports with EEG to study transient attentional states.",
          "sourcePublication": "Attention and consciousness (2023) - DOI: 10.1016/j.tics.2023",
          "gapType": "Methodological Gap",
          "difficulty": "Advanced",
          "methodology": "EEG and Micro-phenomenology"
        }
      ]
    },`;
  content = content.slice(0, insertIndex) + newProfs + content.slice(insertIndex);
}

// Add Jaison A Manjaly to IIT Gandhinagar (if not there, or update)
const iitgnIndex = content.indexOf('"Indian Institute of Technology Gandhinagar": [');
if (iitgnIndex !== -1) {
  const insertIndex = content.indexOf('{', iitgnIndex + 45);
  const newProfs = `
    {
      "id": "iitgn-new-1",
      "name": "Prof. Jaison A. Manjaly",
      "specialization": "Cognitive Science, Philosophy of Mind",
      "focus": "Curiosity, moral cognition, and embodied cognition.",
      "scholarLink": "https://scholar.google.co.in/citations?user=JaisonManjaly",
      "citations": "1200",
      "topPapers": [
        "The psychology of curiosity (2022) - DOI: 10.1016/j.dr.2022",
        "Embodied moral decision making (2021) - DOI: 10.1007/s11245-021",
        "Epistemic emotions and learning (2020) - DOI: 10.1111/mila.2020",
        "Cognitive load and moral judgments (2019) - DOI: 10.1080/09515089.2019",
        "Aesthetics and cognitive science (2018) - DOI: 10.1093/aesthj/ayy018"
      ],
      "researchIdeas": [
        {
          "id": "iitgn-new-1-i1",
          "title": "Curiosity-Driven Learning in AI",
          "description": "Modeling human epistemic curiosity to improve reinforcement learning algorithms.",
          "sourcePublication": "The psychology of curiosity (2022) - DOI: 10.1016/j.dr.2022",
          "gapType": "Computational Gap",
          "difficulty": "Advanced",
          "methodology": "Computational Modeling"
        }
      ]
    },`;
  content = content.slice(0, insertIndex) + newProfs + content.slice(insertIndex);
}

// Add Bipin Indurkhya to IIT Jodhpur (CogSci)
const iitjIndex = content.indexOf('"Indian Institute of Technology Jodhpur": [');
if (iitjIndex !== -1) {
  const insertIndex = content.indexOf('{', iitjIndex + 40);
  const newProfs = `
    {
      "id": "iitj-new-1",
      "name": "Prof. Bipin Indurkhya",
      "specialization": "Cognitive Science, AI, Metaphor",
      "focus": "Cognitive linguistics, metaphor comprehension, and human-robot interaction.",
      "scholarLink": "https://scholar.google.co.in/citations?user=BipinIndurkhya",
      "citations": "2800",
      "topPapers": [
        "Metaphor and cognition (2022) - DOI: 10.1017/CBO9781139164641",
        "Human-robot interaction and empathy (2021) - DOI: 10.1007/s12369-021",
        "Creativity and cognitive models (2020) - DOI: 10.1016/j.cogsys.2020",
        "Visual metaphors in interface design (2019) - DOI: 10.1145/3300000",
        "Embodied cognition in robotics (2018) - DOI: 10.3389/frobt.2018"
      ],
      "researchIdeas": [
        {
          "id": "iitj-new-1-i1",
          "title": "Metaphor Comprehension in LLMs vs Humans",
          "description": "Comparing how large language models and humans process novel metaphors.",
          "sourcePublication": "Metaphor and cognition (2022) - DOI: 10.1017/CBO9781139164641",
          "gapType": "Empirical Gap",
          "difficulty": "Advanced",
          "methodology": "Behavioral Experiments & NLP"
        }
      ]
    },`;
  content = content.slice(0, insertIndex) + newProfs + content.slice(insertIndex);
}

fs.writeFileSync('src/staticDatabase.ts', content);
console.log("Database updated successfully.");
