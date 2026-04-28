import { Professor, NewsItem } from "./types";
import data from "./database.json";

export const FACULTY_DATABASE: Record<string, Professor[]> = data as Record<string, Professor[]>;

export const getFacultyForInstitute = (instituteName: string): Professor[] => {
  return FACULTY_DATABASE[instituteName] || [];
};

export const NEWS_DATABASE: NewsItem[] = [
  {
    id: "news-delhi-phd-2026",
    title: "IIT Delhi: Shortlist Published for PhD Written Test (2026-27)",
    source: "IIT Delhi Admissions",
    url: "https://hss.iitd.ac.in/admissions",
    timestamp: new Date().toISOString(),
    category: "EXAM",
    summary: "The Department of Humanities and Social Sciences, IIT Delhi has released the shortlist of candidates for PhD written tests. Candidates are advised to check the official HSS website for the list and schedule.",
    imageKeyword: "iit-delhi"
  },
  {
    id: "news-bombay-phd-2026",
    title: "IIT Bombay: PhD Written Test Schedule for Autumn Semester 2026",
    source: "IIT B Admissions",
    url: "https://www.iitb.ac.in/newweb/phd-admissions",
    timestamp: new Date().toISOString(),
    category: "EXAM",
    summary: "IIT Bombay has announced the schedule for PhD entrance tests and interviews for the Autumn 2026-27 session. Specific dates for Psychology and CogSci have been uploaded.",
    imageKeyword: "iit-bombay"
  },
  {
    id: "news-kanpur-cogsci-2026",
    title: "IIT Kanpur: Cognitive Science PhD Admission Portal Open",
    source: "IITK News",
    url: "https://www.iitk.ac.in/cogs/admissions",
    timestamp: new Date().toISOString(),
    category: "PHD ADMISSION",
    summary: "The Department of Cognitive Science at IIT Kanpur is accepting applications for the July 2026 intake. Research areas include computational neuroscience and decision making.",
    imageKeyword: "iit-kanpur"
  },
  {
    id: "news-mandi-phd-2026",
    title: "IIT Mandi: Call for Ph.D. in HSS and Cognitive Science",
    source: "IIT Mandi Portal",
    url: "https://iitmandi.ac.in/academics/admissions/",
    timestamp: new Date().toISOString(),
    category: "PHD ADMISSION",
    summary: "IIT Mandi invites applications for its doctoral program in Psychology, Cognitive Science, and AI. Financial assistance available for eligible candidates.",
    imageKeyword: "iit-mandi"
  },
  {
    id: "news-gandhinagar-research-2026",
    title: "IIT Gandhinagar: Cognitive Science Research Internships 2026",
    source: "IITGN Research",
    url: "https://cogs.iitgn.ac.in/",
    timestamp: new Date().toISOString(),
    category: "RESEARCH",
    summary: "IIT Gandhinagar is offering summer research internships and PhD residency programs for students interested in embodied cognition and visual attention.",
    imageKeyword: "iit-gandhinagar"
  },
  {
    id: "news-nimhans-2026",
    title: "NIMHANS: PhD Clinical Psychology Entrance (May 2026)",
    source: "NIMHANS Admin",
    url: "https://nimhans.ac.in/admissions/",
    timestamp: new Date().toISOString(),
    category: "EXAM",
    summary: "The entrance test for PhD in Clinical Psychology at NIMHANS is scheduled for mid-May 2026. Hall tickets will be available for download 10 days prior.",
    imageKeyword: "nimhans"
  },
  {
    id: "news-hyderabad-phd-2026",
    title: "IIT Hyderabad: PhD in Psychology - July 2026 Intake",
    source: "IITH Admission",
    url: "https://www.iith.ac.in/phdadmissions/",
    timestamp: new Date().toISOString(),
    category: "PHD ADMISSION",
    summary: "IIT Hyderabad Liberal Arts department is accepting PhD applications. Focus on Cognitive Psychology and Organizational Behavior is encouraged.",
    imageKeyword: "iit-hyderabad"
  },
  {
    id: "news-iisc-2026",
    title: "IISc Bangalore: PhD Admissions Result for Brain Research",
    source: "IISc Portal",
    url: "https://admissions.iisc.ac.in/",
    timestamp: new Date().toISOString(),
    category: "PHD ADMISSION",
    summary: "The Center for Neuroscience and Brain Research at IISc Bangalore has started releasing interview shortlists for the 2026-27 academic year.",
    imageKeyword: "iisc-bangalore"
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