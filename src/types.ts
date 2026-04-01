export interface Professor {
  id: string;
  name: string;
  department?: string;
  researchArea?: string;
  specialization: string;
  focus: string;
  scholarLink: string;
  publicationsCount?: number;
  recentPapers?: string[];
  citations?: string;
  citationTrend?: { year: number; count: number }[];
  publicationTrend?: { year: number; count: number }[];
  topPapers?: string[];
  researchIdeas?: ResearchTopic[];
}

export interface Institute {
  id: string;
  name: string;
  location: string;
  departments: string[];
  url?: string;
}

export interface ResearchTopic {
  id: string;
  title: string;
  description: string;
  sourcePublication: string;
  gapType: string;
  difficulty: string;
  methodology: string;
}

export interface ResearchProposal {
  topic: string;
  content: string;
}

export interface NewsItem {
  id: string;
  title: string;
  source: string;
  url: string;
  timestamp: string;
  category: 'YouTube' | 'Telegram' | 'X' | 'Journal' | 'Admission' | 'Research' | 'PHD ADMISSION' | 'JOB OPENING' | 'EXAM' | 'RESEARCH';
  summary: string;
  imageKeyword: string;
}

export const INITIAL_INSTITUTES: Institute[] = [
  // Target Universities
  { id: 'du', name: 'University of Delhi', location: 'New Delhi', departments: ['Psychology', 'Applied Psychology'] },
  { id: 'iisc', name: 'Indian Institute of Science (IISc)', location: 'Bangalore, Karnataka', departments: ['Cognitive Science', 'Neuroscience'] },
  { id: 'nimhans', name: 'NIMHANS (National Institute of Mental Health and Neurosciences)', location: 'Bangalore, Karnataka', departments: ['Clinical Psychology', 'Neuropsychology'] },

  // All IITs
  { id: 'iitd', name: 'Indian Institute of Technology Delhi', location: 'Hauz Khas, New Delhi', departments: ['Psychology', 'Cognitive Science'] },
  { id: 'iitb', name: 'Indian Institute of Technology Bombay', location: 'Mumbai, Maharashtra', departments: ['Psychology', 'Cognitive Science'] },
  { id: 'iitk', name: 'Indian Institute of Technology Kanpur', location: 'Kanpur, UP', departments: ['Psychology', 'Cognitive Science'] },
  { id: 'iitm', name: 'Indian Institute of Technology Madras', location: 'Chennai, Tamil Nadu', departments: ['Psychology'] },
  { id: 'iitkgp', name: 'Indian Institute of Technology Kharagpur', location: 'Kharagpur, WB', departments: ['Psychology'] },
  { id: 'iitg', name: 'Indian Institute of Technology Guwahati', location: 'Guwahati, Assam', departments: ['Psychology'] },
  { id: 'iitr', name: 'Indian Institute of Technology Roorkee', location: 'Roorkee, Uttarakhand', departments: ['Psychology'] },
  { id: 'iith', name: 'Indian Institute of Technology Hyderabad', location: 'Sangareddy, Telangana', departments: ['Psychology'] },
  { id: 'iitj', name: 'Indian Institute of Technology Jodhpur', location: 'Jodhpur, Rajasthan', departments: ['Psychology', 'Cognitive Science'] },
  { id: 'iitgn', name: 'Indian Institute of Technology Gandhinagar', location: 'Gandhinagar, Gujarat', departments: ['Psychology', 'Cognitive Science'] },
  { id: 'iiti', name: 'Indian Institute of Technology Indore', location: 'Indore, MP', departments: ['Psychology'] },
  { id: 'iitp', name: 'Indian Institute of Technology Patna', location: 'Patna, Bihar', departments: ['Psychology'] },
  { id: 'iitropar', name: 'Indian Institute of Technology Ropar', location: 'Rupnagar, Punjab', departments: ['Psychology'] },
  { id: 'iitmandi', name: 'Indian Institute of Technology Mandi', location: 'Mandi, HP', departments: ['Psychology'] },
  { id: 'iitbhu', name: 'Indian Institute of Technology (BHU) Varanasi', location: 'Varanasi, UP', departments: ['Psychology'] },
  { id: 'iitbbs', name: 'Indian Institute of Technology Bhubaneswar', location: 'Bhubaneswar, Odisha', departments: ['Psychology'] },
  { id: 'iitdh', name: 'Indian Institute of Technology Dharwad', location: 'Dharwad, Karnataka', departments: ['Psychology'] },
  { id: 'iitpkd', name: 'Indian Institute of Technology Palakkad', location: 'Palakkad, Kerala', departments: ['Psychology'] },
  { id: 'iittp', name: 'Indian Institute of Technology Tirupati', location: 'Tirupati, AP', departments: ['Psychology'] },
  { id: 'iitbhilai', name: 'Indian Institute of Technology Bhilai', location: 'Bhilai, Chhattisgarh', departments: ['Psychology'] },
  { id: 'iitjammu', name: 'Indian Institute of Technology Jammu', location: 'Jammu', departments: ['Psychology'] },
  { id: 'iitgoa', name: 'Indian Institute of Technology Goa', location: 'Ponda, Goa', departments: ['Psychology'] }
];
