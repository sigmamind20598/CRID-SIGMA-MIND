import { Professor } from "./types";

export const CURATED_FACULTY: Record<string, Professor[]> = {
  "IIT Delhi": [
    {
      id: "iitd-1",
      name: "Prof. Sumitash Jana",
      department: "HSS",
      researchArea: "Cognitive Psychology",
      specialization: "Visual Perception, Attention",
      focus: "Neural correlates of visual awareness and attention",
      scholarLink: "https://hss.iitd.ac.in/faculty/sumitash-jana",
      citations: "Recent Research"
    },
    {
      id: "iitd-2",
      name: "Prof. Purnima Singh",
      department: "HSS",
      researchArea: "Social Psychology",
      specialization: "Identity, Intergroup Relations",
      focus: "Social identity and collective action in Indian context",
      scholarLink: "https://hss.iitd.ac.in/faculty/purnima-singh",
      citations: "Senior Faculty"
    },
    {
      id: "iitd-3",
      name: "Prof. Kamlesh Singh",
      department: "HSS",
      researchArea: "Positive Psychology",
      specialization: "Well-being, Psychometrics",
      focus: "Cross-cultural perspectives on positive psychology",
      scholarLink: "https://hss.iitd.ac.in/faculty/kamlesh-singh",
      citations: "Extensive Publications"
    }
  ],
  "IIT Bombay": [
    {
      id: "iitb-1",
      name: "Prof. Azizuddin Khan",
      department: "HSS",
      researchArea: "Cognitive Psychology",
      specialization: "Memory, Emotion",
      focus: "Interaction of emotion and cognitive processes",
      scholarLink: "https://www.hss.iitb.ac.in/en/faculty-profile/azizuddin-khan",
      citations: "Psychophysiology Lab"
    },
    {
      id: "iitb-2",
      name: "Prof. Meenakshi Gupta",
      department: "HSS",
      researchArea: "Organizational Behavior",
      specialization: "HRM, Social Psychology",
      focus: "Leadership and organizational culture",
      scholarLink: "https://www.hss.iitb.ac.in/en/faculty-profile/meenakshi-gupta",
      citations: "Industrial Focus"
    }
  ],
  "NIMHANS": [
    {
      id: "nim-1",
      name: "Dr. Jamuna Rajeswaran",
      department: "Clinical Psychology",
      researchArea: "Neuropsychology",
      specialization: "Cognitive Retraining",
      focus: "Neurofeedback and cognitive rehabilitation",
      scholarLink: "https://nimhans.ac.in/clinical-psychology/",
      citations: "Clinical Expert"
    },
    {
      id: "nim-2",
      name: "Dr. Seema Mehrotra",
      department: "Clinical Psychology",
      researchArea: "Mental Health",
      specialization: "Positive Psychology",
      focus: "Promotive and preventive mental health interventions",
      scholarLink: "https://nimhans.ac.in/clinical-psychology/",
      citations: "Well-being Focus"
    }
  ],
  "IIT Kanpur": [
    {
      id: "iitk-1",
      name: "Prof. Braj Bhushan",
      department: "HSS",
      researchArea: "Cognitive Neuropsychology",
      specialization: "Trauma, Affective Science",
      focus: "Cognitive and emotional processing in trauma",
      scholarLink: "https://www.iitk.ac.in/hss/profile-braj-bhushan",
      citations: "Highly Cited"
    },
    {
      id: "iitk-2",
      name: "Prof. Ark Verma",
      department: "HSS",
      researchArea: "Cognitive Science",
      specialization: "Lateralization, Language",
      focus: "Hemispheric asymmetries in cognitive processing",
      scholarLink: "https://www.iitk.ac.in/hss/profile-ark-verma",
      citations: "Cognitive Science Expert"
    }
  ],
  "IIT Gandhinagar": [
    {
      id: "iitgn-1",
      name: "Prof. Jaison Manjaly",
      department: "Cognitive Science",
      researchArea: "Philosophy of Mind",
      specialization: "Embodied Cognition",
      focus: "Curiosity and intrinsic motivation in learning",
      scholarLink: "https://cogs.iitgn.ac.in/faculty/jaison-manjaly/",
      citations: "Center Head"
    }
  ],
  "TISS Mumbai": [
    {
      id: "tiss-1",
      name: "Prof. Surinder Jaswal",
      department: "School of Health Systems Studies",
      researchArea: "Public Health, Social Work",
      specialization: "Mental Health",
      focus: "Social determinants of health and mental well-being",
      scholarLink: "https://tiss.edu/view/10/employee/surinder-jaswal/",
      citations: "Senior Academician"
    }
  ],
  "Banaras Hindu University (BHU)": [
    {
      id: "bhu-1",
      name: "Prof. Rakesh Pandey",
      department: "Department of Psychology",
      researchArea: "Clinical Psychology",
      specialization: "Health Psychology, Emotion",
      focus: "Emotional intelligence and health outcomes",
      scholarLink: "https://www.bhu.ac.in/social_sciences/psychology/faculty.php",
      citations: "Expert in Psychometrics"
    }
  ],
  "Indian Institute of Technology Jodhpur": [
    {
      id: "iitj-1",
      name: "Dr. Dipanjan Roy",
      department: "Cognitive Science",
      researchArea: "Large-scale Brain Network Dynamics",
      specialization: "Computational Neuroscience",
      focus: "Understanding brain dynamics through computational modeling and neuroimaging",
      scholarLink: "https://iitj.ac.in/department/index.php?id=cognitive_science",
      citations: "Highly Cited Researcher"
    }
  ]
};

export const CURATED_PROFILES: Record<string, any> = {
  "Dr. Dipanjan Roy": {
    bio: "Dr. Dipanjan Roy is a Professor at the Center for Cognitive Science, IIT Jodhpur. His research focuses on large-scale brain network dynamics, computational neuroscience, and neuroimaging. He previously worked at the National Brain Research Centre (NBRC).",
    publications: [
      "Large-scale brain network dynamics in health and disease",
      "Computational modeling of brain connectivity",
      "Neuroimaging studies of cognitive processes",
      "Dynamics of resting-state brain networks",
      "Integration of multimodal neuroimaging data"
    ],
    citationTrend: [
      { year: 2018, count: 150 },
      { year: 2019, count: 180 },
      { year: 2020, count: 210 },
      { year: 2021, count: 240 },
      { year: 2022, count: 280 },
      { year: 2023, count: 320 }
    ],
    publicationTrend: [
      { year: 2018, count: 4 },
      { year: 2019, count: 5 },
      { year: 2020, count: 6 },
      { year: 2021, count: 4 },
      { year: 2022, count: 7 },
      { year: 2023, count: 5 }
    ]
  }
};
