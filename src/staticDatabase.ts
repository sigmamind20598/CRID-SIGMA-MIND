import { Professor, NewsItem } from "./types";
import data from "./database.json";

export const FACULTY_DATABASE: Record<string, Professor[]> = data as Record<string, Professor[]>;

export const getFacultyForInstitute = (instituteName: string): Professor[] => {
  return FACULTY_DATABASE[instituteName] || [];
};

export const NEWS_DATABASE: NewsItem[] = [
  {
    id: "news-1",
    title: "IIT Delhi: Shortlist Published for PhD Written Test (1st Sem 2026-27)",
    source: "IIT Delhi HSS",
    url: "https://hss.iitd.ac.in/admissions",
    timestamp: new Date().toISOString(),
    category: "EXAM",
    summary: "IIT Delhi has released the shortlist of candidates for the written test for PhD admissions in Cognitive Science and Psychology. Check the portal for dates and venue.",
    imageKeyword: "iit-delhi"
  },
  {
    id: "news-2",
    title: "IIT Bombay: PhD Written Test & Interview Schedule Announced (Autumn 2026)",
    source: "IIT Bombay Admissions",
    url: "https://www.iitb.ac.in/en/education/phd-admissions",
    timestamp: new Date().toISOString(),
    category: "EXAM",
    summary: "IIT Bombay has called shortlisted candidates for the written test. Applicants in Psychology and Humanities departments are advised to check their emails for hall tickets.",
    imageKeyword: "iit-bombay"
  },
  {
    id: "news-3",
    title: "IIT Kanpur: CogSci Admissions Open for July 2026",
    source: "IIT Kanpur Portal",
    url: "https://www.iitk.ac.in/doaa/admission-notice",
    timestamp: new Date().toISOString(),
    category: "PHD ADMISSION",
    summary: "The Department of Cognitive Science at IIT Kanpur is still accepting PhD applications for the July 2026 intake. Focus on computational neuroscience.",
    imageKeyword: "iit-kanpur"
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
    title: "IISc Bangalore: Center for Brain Research PhD Admissions",
    source: "IISc Admissions",
    url: "https://admissions.iisc.ac.in/",
    timestamp: new Date().toISOString(),
    category: "PHD ADMISSION",
    summary: "Final call for PhD applications at the Center for Brain Research, IISc Bangalore. Interviews expected to start in late May 2026.",
    imageKeyword: "iisc-bangalore"
  },
  {
    id: "news-6",
    title: "IIT Hyderabad: PhD in Psychology and Cognitive Science",
    source: "IITH Portal",
    url: "https://www.iith.ac.in/admissions/phd/",
    timestamp: new Date().toISOString(),
    category: "PHD ADMISSION",
    summary: "IIT Hyderabad invites applications for PhD in Liberal Arts. Financial support and research fellowships available for CogSci focus.",
    imageKeyword: "iit-hyderabad"
  },
  {
    id: "news-7",
    title: "UGC NET 2026: Mandatory for PhD Without Entrance @ IITS",
    source: "UGC Official",
    url: "https://www.ugc.gov.in/",
    timestamp: new Date().toISOString(),
    category: "GUIDELINES",
    summary: "New UGC guidelines specify the weightage of NET scores in the selection process for PhD admissions in Central Universities and IITs.",
    imageKeyword: "ugc"
  },
  {
    id: "news-8",
    title: "NIMHANS: PhD Clinical Psychology Entrance Scheduled",
    source: "NIMHANS News",
    url: "https://nimhans.ac.in/admissions/",
    timestamp: new Date().toISOString(),
    category: "EXAM",
    summary: "NIMHANS Bangalore entrance exam for PhD Clinical Psychology is scheduled for May 15, 2026. Admit cards are now downloadable.",
    imageKeyword: "nimhans"
  },
  {
    id: "news-9",
    title: "IIT Guwahati: PhD in Human Factors & Cognitive Ergonomics",
    source: "IITG Research",
    url: "https://www.iitg.ac.in/acad/admissions/",
    timestamp: new Date().toISOString(),
    category: "RESEARCH",
    summary: "IIT Guwahati is seeking PhD candidates for high-impact research in Cognitive Ergonomics and Design Psychology.",
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