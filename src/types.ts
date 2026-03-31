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
  category: 'YouTube' | 'Telegram' | 'X' | 'Journal' | 'Admission' | 'Research';
  summary: string;
  imageKeyword: string;
}

export const INITIAL_INSTITUTES: Institute[] = [
  // Delhi Universities
  { id: 'du', name: 'University of Delhi', location: 'New Delhi', departments: ['Psychology', 'Applied Psychology'] },
  { id: 'jnu', name: 'Jawaharlal Nehru University (JNU)', location: 'New Delhi', departments: ['Psychology', 'Cognitive Science'] },
  { id: 'jmi', name: 'Jamia Millia Islamia (JMI)', location: 'New Delhi', departments: ['Psychology'] },
  { id: 'iitd', name: 'Indian Institute of Technology Delhi', location: 'Hauz Khas, New Delhi', departments: ['Psychology', 'Cognitive Science'] },
  { id: 'aud', name: 'Dr. B.R. Ambedkar University Delhi (AUD)', location: 'New Delhi', departments: ['Psychology', 'Clinical Psychology'] },
  { id: 'aiims', name: 'All India Institute of Medical Sciences (AIIMS)', location: 'Delhi', departments: ['Psychology', 'Psychiatry'] },
  { id: 'ggsipu', name: 'Guru Gobind Singh Indraprastha University', location: 'New Delhi', departments: ['Psychology'] },

  // All IITs (major ones with Psych/HSS)
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
  { id: 'iitgoa', name: 'Indian Institute of Technology Goa', location: 'Ponda, Goa', departments: ['Psychology'] },

  // Specialized & Top Institutions
  { id: 'nimhans', name: 'NIMHANS (National Institute of Mental Health and Neurosciences)', location: 'Bangalore, Karnataka', departments: ['Clinical Psychology', 'Neuropsychology'] },
  { id: 'iisc', name: 'Indian Institute of Science (IISc)', location: 'Bangalore, Karnataka', departments: ['Cognitive Science', 'Neuroscience'] },
  { id: 'tiss', name: 'Tata Institute of Social Sciences (TISS)', location: 'Mumbai, Maharashtra', departments: ['Psychology', 'Applied Psychology'] },
  { id: 'uoh', name: 'University of Hyderabad', location: 'Hyderabad, Telangana', departments: ['Psychology', 'Cognitive Science'] },
  { id: 'bhu', name: 'Banaras Hindu University (BHU)', location: 'Varanasi, Uttar Pradesh', departments: ['Psychology'] },
  { id: 'amu', name: 'Aligarh Muslim University (AMU)', location: 'Aligarh, Uttar Pradesh', departments: ['Psychology'] },
  { id: 'pu', name: 'Panjab University', location: 'Chandigarh', departments: ['Psychology'] },
  { id: 'pune', name: 'Savitribai Phule Pune University', location: 'Pune, Maharashtra', departments: ['Psychology'] },
  { id: 'christ', name: 'Christ University', location: 'Bangalore, Karnataka', departments: ['Psychology', 'Clinical Psychology'] },
  { id: 'ashoka', name: 'Ashoka University', location: 'Sonipat, Haryana', departments: ['Psychology'] },
  { id: 'nfsu', name: 'National Forensic Science University (NFSU)', location: 'Gandhinagar, Gujarat', departments: ['Forensic Psychology', 'Clinical Psychology'] },
  { id: 'cip', name: 'Central Institute of Psychiatry (CIP)', location: 'Ranchi, Jharkhand', departments: ['Clinical Psychology'] },
  { id: 'lgbrimh', name: 'LGB Regional Institute of Mental Health (LGBRIMH)', location: 'Tezpur, Assam', departments: ['Clinical Psychology'] },
  { id: 'rinpas', name: 'Ranchi Institute Neuro-Psychiatry and Allied Sciences (RINPAS)', location: 'Ranchi, Jharkhand', departments: ['Clinical Psychology'] },
  { id: 'calcutta', name: 'University of Calcutta', location: 'Kolkata, WB', departments: ['Psychology', 'Applied Psychology'] },
  { id: 'mumbai', name: 'University of Mumbai', location: 'Mumbai, Maharashtra', departments: ['Psychology'] },
  { id: 'madras', name: 'University of Madras', location: 'Chennai, Tamil Nadu', departments: ['Psychology'] },
  { id: 'pondi', name: 'Pondicherry University', location: 'Puducherry', departments: ['Applied Psychology'] },
  { id: 'haryana', name: 'Central University of Haryana', location: 'Mahendergarh, Haryana', departments: ['Psychology'] },
  { id: 'karnataka', name: 'Central University of Karnataka', location: 'Kalaburagi, Karnataka', departments: ['Psychology'] },
  { id: 'rajasthan', name: 'Central University of Rajasthan', location: 'Ajmer, Rajasthan', departments: ['Psychology'] },
  { id: 'osmania', name: 'Osmania University', location: 'Hyderabad, Telangana', departments: ['Psychology'] },
  { id: 'mysore', name: 'University of Mysore', location: 'Mysuru, Karnataka', departments: ['Psychology'] },
  { id: 'gujarat', name: 'Gujarat University', location: 'Ahmedabad, Gujarat', departments: ['Psychology'] },
  { id: 'bharathiar', name: 'Bharathiar University', location: 'Coimbatore, Tamil Nadu', departments: ['Psychology'] },
  { id: 'andhra', name: 'Andhra University', location: 'Visakhapatnam, AP', departments: ['Psychology'] },
];
