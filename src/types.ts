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
  category: 'YouTube' | 'Telegram' | 'X' | 'Journal';
  summary: string;
  imageKeyword: string;
}

export const INITIAL_INSTITUTES: Institute[] = [
  { id: 'iitd', name: 'Indian Institute of Technology Delhi', location: 'Hauz Khas, New Delhi', departments: ['Psychology', 'Cognitive Science'] },
  { id: 'iitr', name: 'Indian Institute of Technology Ropar', location: 'Rupnagar, Punjab', departments: ['Psychology'] },
  { id: 'iitbhu', name: 'Indian Institute of Technology Bhubaneswar', location: 'Khordha, Odisha', departments: ['Psychology'] },
  { id: 'iiti', name: 'Indian Institute of Technology Indore', location: 'Indore, MP', departments: ['Psychology'] },
  { id: 'aud', name: 'Dr. B.R. Ambedkar University Delhi (AUD)', location: 'New Delhi', departments: ['Clinical Psychology'] },
  { id: 'cip', name: 'Central Institute of Psychiatry (CIP)', location: 'Ranchi', departments: ['Clinical Psychology'] },
  { id: 'lgbrimh', name: 'LGB Regional Institute of Mental Health (LGBRIMH)', location: 'Tezpur, Assam', departments: ['Clinical Psychology'] },
  { id: 'bhu', name: 'Banaras Hindu University (BHU)', location: 'Varanasi, Uttar Pradesh', departments: ['Psychology'] },
  { id: 'amu', name: 'Aligarh Muslim University (AMU)', location: 'Aligarh, Uttar Pradesh', departments: ['Psychology'] },
  { id: 'jmi', name: 'Jamia Millia Islamia (JMI)', location: 'New Delhi', departments: ['Psychology'] },
  { id: 'tiss', name: 'Tata Institute of Social Sciences (TISS)', location: 'Mumbai', departments: ['Psychology'] },
  { id: 'rinpas', name: 'Ranchi Institute Neuro-Psychiatry and Allied Sciences (RINPAS)', location: 'Ranchi', departments: ['Clinical Psychology'] },
  { id: 'pu', name: 'Panjab University', location: 'Chandigarh', departments: ['Psychology'] },
  { id: 'christ-c', name: 'Christ University (Bangalore – Central Campus)', location: 'Bangalore', departments: ['Psychology', 'Clinical Psychology', 'Counselling Psychology', 'Neuropsychology'] },
  { id: 'christ-b', name: 'Christ University (Bangalore – Bannerghatta Road Campus)', location: 'Bangalore', departments: ['Psychology'] },
  { id: 'christ-k', name: 'Christ University (Bangalore – Kengeri Campus)', location: 'Bangalore', departments: ['Psychology'] },
  { id: 'christ-y', name: 'Christ University (Bangalore – Yeshwanthpur Campus)', location: 'Bangalore', departments: ['Psychology & Clinical Psychology'] },
  { id: 'christ-d', name: 'Christ University (Delhi-NCR Campus)', location: 'Delhi-NCR', departments: ['Psychology'] },
  { id: 'amity-n', name: 'Amity University (Noida – Central Campus)', location: 'Noida, Delhi-NCR', departments: ['Psychology', 'Clinical Psychology'] },
  { id: 'amity-j', name: 'Amity University (Jaipur Campus)', location: 'Jaipur', departments: ['Psychology'] },
  { id: 'amity-k', name: 'Amity University (Kolkata Campus)', location: 'Kolkata', departments: ['Psychology'] },
  { id: 'amity-r', name: 'Amity University (Raipur Campus)', location: 'Raipur, Chhattisgarh', departments: ['Psychology & Clinical Psychology'] },
  { id: 'ku', name: 'Kurukshetra University', location: 'Thanesar, Haryana', departments: ['Psychology'] },
  { id: 'pondi', name: 'Pondicherry University', location: 'Kalapet, Puducherry', departments: ['Applied Psychology'] },
  { id: 'avinash', name: 'Avinashilingam Institute for Home Science and Higher Education for Women', location: 'Coimbatore, Tamil Nadu', departments: ['Counselling Psychology'] },
  { id: 'sgt', name: 'SGT University', location: 'Gurugram, Haryana', departments: ['Psychology'] },
  { id: 'uoh', name: 'University of Hyderabad', location: 'Hyderabad', departments: ['Psychology'] },
  { id: 'gkh', name: 'Gurukula Kangri, Haridwar', location: 'Haridwar', departments: ['Psychology'] },
  { id: 'bu', name: 'Bundelkhand University', location: 'Jhansi, UP', departments: ['Psychology'] },
  { id: 'au', name: 'Allahabad University', location: 'Prayagraj, Uttar Pradesh', departments: ['Psychology'] },
  { id: 'pnc', name: 'Prajyoti Niketan College', location: 'Puthukkad, Kerala', departments: ['Psychology'] },
  { id: 'psg', name: 'PSG College of Arts and Science', location: 'Coimbatore, Tamil Nadu', departments: ['Psychology'] },
  { id: 'cutn', name: 'Central University of Tamil Nadu', location: 'Thiruvarur, Tamil Nadu', departments: ['Applied Psychology'] },
  { id: 'jammu', name: 'University of Jammu', location: 'Jammu', departments: ['Psychology'] },
  { id: 'kashmir', name: 'University of Kashmir', location: 'Kashmir', departments: ['Psychology'] },
  { id: 'madras', name: 'University of Madras', location: 'Chennai, Tamil Nadu', departments: ['Psychology'] },
  { id: 'ashoka', name: 'Ashoka University', location: 'Sonipat, Haryana', departments: ['Psychology'] },
  { id: 'mizoram', name: 'Mizoram University', location: 'Aizawl, Mizoram', departments: ['Counseling Psychology'] },
  { id: 'aiims', name: 'All India Institute of Medical Sciences (AIIMS)', location: 'Delhi', departments: ['Psychology'] },
  { id: 'lpu', name: 'Lovely Professional University (LPU)', location: 'Jalandhar, Punjab', departments: ['Psychology'] },
  { id: 'reva', name: 'REVA University', location: 'Bangalore', departments: ['Psychology'] },
  { id: 'pune', name: 'Savitribai Phule Pune University', location: 'Pune', departments: ['Psychology'] },
  { id: 'nims', name: 'NIMS University', location: 'Jaipur', departments: ['Psychology'] },
  { id: 'jain', name: 'Jain University', location: 'Bangalore', departments: ['Psychology'] },
  { id: 'utkal', name: 'Utkal University', location: 'Bhubaneswar, Odisha', departments: ['Psychology'] },
  { id: 'galgotia', name: 'Galgotias University', location: 'Greater Noida, Uttar Pradesh', departments: ['Psychology'] },
  { id: 'nfsu', name: 'National Forensic Science University (NFSU)', location: 'Gandhinagar, Gujarat', departments: ['Psychology'] },
  { id: 'rajasthan', name: 'University of Rajasthan', location: 'Jaipur', departments: ['Psychology'] },
  { id: 'haryana', name: 'Central University of Haryana', location: 'Mahendergarh, Haryana', departments: ['Psychology'] },
  { id: 'hpu', name: 'Himachal Pradesh University (HPU)', location: 'Shimla', departments: ['Psychology'] },
  { id: 'singhania', name: 'Singhania University', location: 'Visakhapatnam', departments: ['Psychology'] },
  { id: 'magadh', name: 'Magadh University', location: 'Bodh Gaya, Bihar', departments: ['Psychology'] },
  { id: 'opjs', name: 'OPJS University, Rajgarh', location: 'Sadulpur, Rajasthan', departments: ['Psychology'] },
  { id: 'ssus', name: 'Sree Shankaracharya University of Sanskrit (SSUS)', location: 'Kerala', departments: ['Psychology'] },
  { id: 'prsu', name: 'Pt. Ravishankar Shukla University', location: 'Raipur, Chhattisgarh', departments: ['Psychology'] },
  { id: 'davv', name: 'Devi Ahilya Vishwavidyalaya', location: 'Indore, MP', departments: ['Psychology'] },
  { id: 'igntu', name: 'Indira Gandhi National Tribal University (IGNTU)', location: 'Amarkantak, MP', departments: ['Applied Psychology'] },
  { id: 'dspmu', name: 'Dr. Shyama Prasad Mukherjee University', location: 'Ranchi', departments: ['Psychology'] },
  { id: 'mdu', name: 'Maharshi Dayanand University (MDU)', location: 'Rohtak, Haryana', departments: ['Psychology'] },
  { id: 'ct', name: 'CT University', location: 'Ludhiana, Punjab', departments: ['Psychology'] },
  { id: 'adamas', name: 'Adamas University', location: 'Kolkata', departments: ['Psychology'] },
  { id: 'garden', name: 'Garden City University', location: 'Bangalore', departments: ['Psychology'] },
  { id: 'kalam', name: 'Dr. APJ Abdul Kalam University', location: 'Indore, MP', departments: ['Psychology'] },
  { id: 'cuk', name: 'Central University of Karnataka, Gulbarga', location: 'Kadaganchi, Karnataka', departments: ['Psychology'] },
  { id: 'iis', name: 'IIS University', location: 'Jaipur, Rajasthan', departments: ['Psychology'] },
  { id: 'saurashtra', name: 'Saurashtra University', location: 'Rajkot, Gujarat', departments: ['Psychology'] },
  { id: 'srm', name: 'SRM University AP', location: 'Amaravati, Andhra Pradesh', departments: ['Psychology'] },
  { id: 'kk', name: 'KK University, Nalanda', location: 'Nalanda, Bihar', departments: ['Psychology'] },
  { id: 'sssutms', name: 'Sri Satya Sai University of Technology and Medical Sciences, Sehore', location: 'Pachama, MP', departments: ['Psychology'] },
  { id: 'bhagwant', name: 'Bhagwant University', location: 'Ajmer, Rajasthan', departments: ['Psychology'] },
  { id: 'barkatullah', name: 'Barkatullah University, Bhopal', location: 'Bhopal, MP', departments: ['Psychology'] },
  { id: 'gorakhpur', name: 'Deen Dayal Upadhyaya Gorakhpur University, Gorakhpur', location: 'Gorakhpur, UP', departments: ['Psychology'] },
  { id: 'patna', name: 'Patna University, Patna', location: 'Patna, Bihar', departments: ['Psychology'] },
  { id: 'kalinga', name: 'Kalinga Institute of Social Sciences, Bhubaneswar', location: 'Bhubaneswar', departments: ['Psychology'] },
  { id: 'periyar', name: 'Periyar University', location: 'Salem, Tamil Nadu', departments: ['Psychology'] },
  { id: 'sikkim', name: 'Sikkim University', location: 'Gangtok, Sikkim', departments: ['Psychology'] },
  { id: 'nagaland', name: 'Nagaland University (Kohima Campus)', location: 'Meriema, Nagaland', departments: ['Psychology'] },
  { id: 'sk', name: 'Shri Krishna University', location: 'Chhatarpur, MP', departments: ['Psychology'] },
  { id: 'kannur', name: 'Kannur University', location: 'Kannur, Kerala', departments: ['Psychology'] },
];
