import { Professor, NewsItem } from "./types";
import data from "./database.json";

export const FACULTY_DATABASE: Record<string, Professor[]> = data as Record<string, Professor[]>;

export const getFacultyForInstitute = (instituteName: string): Professor[] => {
  return FACULTY_DATABASE[instituteName] || [];
};

export const NEWS_DATABASE: NewsItem[] = [
  {
    id: "news-1",
    title: "IIT Delhi: PhD Admissions for 1st Semester 2026-27 (Cognitive Science)",
    source: "IIT Delhi Official",
    url: "https://home.iitd.ac.in/admissions.php",
    timestamp: new Date().toISOString(),
    category: "PHD ADMISSION",
    summary: "IIT Delhi invites applications for PhD programs in Cognitive Science and Psychology for the upcoming academic session. Apply by April 15th, 2026.",
    imageKeyword: "iit-delhi"
  },
  {
    id: "news-2",
    title: "IIT Kanpur: CogSci Admissions Open for July 2026",
    source: "IIT Kanpur Portal",
    url: "https://www.iitk.ac.in/doaa/admission-notice",
    timestamp: new Date().toISOString(),
    category: "PHD ADMISSION",
    summary: "The Department of Cognitive Science at IIT Kanpur is accepting PhD applications for the July 2026 intake. Focus on computational neuroscience and linguistics.",
    imageKeyword: "iit-kanpur"
  },
  {
    id: "news-3",
    title: "IIT Bombay: Interdisciplinary PhD Program in Neuroscience",
    source: "IIT Bombay News",
    url: "https://www.iitb.ac.in/en/education/phd-admissions",
    timestamp: new Date().toISOString(),
    category: "RESEARCH",
    summary: "IIT Bombay announces a new interdisciplinary PhD program combining AI, Neuroscience, and Psychology. Applications close soon.",
    imageKeyword: "iit-bombay"
  },
  {
    id: "news-4",
    title: "IIT Gandhinagar: Cognitive Science Research Fellowship 2026",
    source: "IITGN Research",
    url: "https://iitgn.ac.in/admissions/phd",
    timestamp: new Date().toISOString(),
    category: "FELLOWSHIP",
    summary: "Apply for the prestigious Cognitive Science Research Fellowship at IIT Gandhinagar. Excellent opportunities for interdisciplinary research.",
    imageKeyword: "iit-gandhinagar"
  },
  {
    id: "news-5",
    title: "IISc Bangalore: Admissions for PhD in Brain and Computing",
    source: "IISc Admissions",
    url: "https://admissions.iisc.ac.in/",
    timestamp: new Date().toISOString(),
    category: "PHD ADMISSION",
    summary: "The Center for Brain Research at IISc Bangalore is looking for PhD candidates interested in the intersection of brain science and computing.",
    imageKeyword: "iisc-bangalore"
  },
  {
    id: "news-6",
    title: "IIT Hyderabad: PhD in Psychology and Cognitive Science",
    source: "IITH Portal",
    url: "https://www.iith.ac.in/admissions/phd/",
    timestamp: new Date().toISOString(),
    category: "PHD ADMISSION",
    summary: "IIT Hyderabad invites applications for PhD in Liberal Arts with a focus on Psychology and Cognitive Science. Financial support available.",
    imageKeyword: "iit-hyderabad"
  },
  {
    id: "news-7",
    title: "UGC NET 2026: New Guidelines for PhD Admissions",
    source: "UGC Official",
    url: "https://www.ugc.gov.in/",
    timestamp: new Date().toISOString(),
    category: "GUIDELINES",
    summary: "UGC releases updated guidelines for PhD admissions, emphasizing the importance of NET scores for direct entry into research programs.",
    imageKeyword: "ugc"
  },
  {
    id: "news-8",
    title: "NIMHANS: PhD in Clinical Psychology Admissions 2026",
    source: "NIMHANS News",
    url: "https://nimhans.ac.in/admissions/",
    timestamp: new Date().toISOString(),
    category: "PHD ADMISSION",
    summary: "NIMHANS Bangalore announces admissions for its prestigious PhD program in Clinical Psychology. Entrance exam scheduled for May 2026.",
    imageKeyword: "nimhans"
  },
  {
    id: "news-9",
    title: "IIT Guwahati: Research in Human-Computer Interaction (HCI)",
    source: "IITG Research",
    url: "https://www.iitg.ac.in/acad/admissions/",
    timestamp: new Date().toISOString(),
    category: "RESEARCH",
    summary: "The Department of Design at IIT Guwahati is seeking PhD candidates for research in HCI and Cognitive Ergonomics.",
    imageKeyword: "iit-guwahati"
  },
  {
    id: "news-10",
    title: "IIT Madras: Brain Research Center (BRC) PhD Fellowships",
    source: "IITM News",
    url: "https://www.iitm.ac.in/academics/phd-admissions",
    timestamp: new Date().toISOString(),
    category: "FELLOWSHIP",
    summary: "IIT Madras BRC announces fully funded PhD fellowships for research in computational neuroscience and brain-inspired AI.",
    imageKeyword: "iit-madras"
  }
];