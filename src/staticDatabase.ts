import { Professor, NewsItem } from "./types";
import data from "./database.json";

export const FACULTY_DATABASE: Record<string, Professor[]> = data as Record<string, Professor[]>;

export const getFacultyForInstitute = (instituteName: string): Professor[] => {
  return FACULTY_DATABASE[instituteName] || [];
};

export const NEWS_DATABASE: NewsItem[] = [
  {
    id: "news-nimhans-2026",
    title: "NIMHANS: PhD Clinical Psychology Entrance Exam Scheduled (June 2026)",
    source: "NIMHANS Academic Section",
    url: "https://nimhans.ac.in/admissions/",
    timestamp: "2026-05-18T00:00:00Z",
    category: "EXAM",
    summary: "NIMHANS has announced the schedule for the highly competitive PhD in Clinical Psychology Entrance Exam. Hall tickets are available, and testing centers are set for mid-June 2026.",
    imageKeyword: "nimhans"
  },
  {
    id: "news-bombay-phd-2026",
    title: "IIT Bombay: Cognitive Science PhD Shortlist & Written Test Guidelines",
    source: "IIT Bombay IDRP CogSci",
    url: "https://www.iitb.ac.in/newweb/phd-admissions",
    timestamp: "2026-05-15T00:00:00Z",
    category: "PHD ADMISSION",
    summary: "IIT Bombay's IDRP in Cognitive Science has released the shortlist of candidates for the written admission test for the Autumn 2026 semester. Exams will be followed by online faculty interviews.",
    imageKeyword: "iit-bombay"
  },
  {
    id: "news-delhi-phd-2026",
    title: "IIT Delhi: PhD Written Test Schedule Released for Psychology & Linguistics",
    source: "IIT Delhi HSS Portal",
    url: "https://hss.iitd.ac.in/admissions",
    timestamp: "2026-05-12T00:00:00Z",
    category: "PHD ADMISSION",
    summary: "The Department of Humanities and Social Sciences (HSS) at IIT Delhi has declared the qualifying cutoffs and written-test shortlists for applicants to Psychology/Linguistics curricula.",
    imageKeyword: "iit-delhi"
  },
  {
    id: "news-cogjet-results-2026",
    title: "COGJET 2026: Cognitive Science Joint Test Results Declared",
    source: "COGJET Joint Portal",
    url: "https://cbcs.ac.in/admissions/cogjet/",
    timestamp: "2026-05-10T00:00:00Z",
    category: "EXAM",
    summary: "The official scorecards of the Cognitive Science Joint Entrance Test (COGJET 2026) are now live. Participating institutes including CBCS Allahabad and IIT Kanpur are processing applications based on these scores.",
    imageKeyword: "brain"
  },
  {
    id: "news-kanpur-cogsci-2026",
    title: "IIT Kanpur: Cognitive Science PhD Admission Interview Slots Announced",
    source: "IITK CogSci Department",
    url: "https://www.iitk.ac.in/cogs/admissions",
    timestamp: "2026-05-08T00:00:00Z",
    category: "PHD ADMISSION",
    summary: "IIT Kanpur's Department of Cognitive Science has sent interview invites to candidates qualifying through COGJET and national fellowships. Remote panels will run through late May.",
    imageKeyword: "iit-kanpur"
  },
  {
    id: "news-iisc-2026",
    title: "IISc Bangalore: Center for Neuroscience PhD Evaluation Timelines",
    source: "IISc CNS Division",
    url: "https://admissions.iisc.ac.in/",
    timestamp: "2026-05-05T00:00:00Z",
    category: "RESEARCH",
    summary: "The CNS at IISc Bangalore has finalized selection schedules for candidate evaluations in visual coding, neurobiology, and computational neuroscience for the 2026-27 academic session.",
    imageKeyword: "iisc-bangalore"
  },
  {
    id: "news-gandhinagar-research-2026",
    title: "IIT Gandhinagar: Cognitive Science Research Residencies Open",
    source: "IITGN Cognitive Science",
    url: "https://cogs.iitgn.ac.in/",
    timestamp: "2026-05-02T00:00:00Z",
    category: "RESEARCH",
    summary: "IIT Gandhinagar welcomes applications for fully-funded short-term research residency programs focusing on eye-tracking, decision-making, and spatial navigation.",
    imageKeyword: "iit-gandhinagar"
  },
  {
    id: "news-madras-cns-2026",
    title: "IIT Madras: Sudha Gopalakrishnan Brain Centre PhD Fellowships Open",
    source: "IITM Admissions",
    url: "https://www.iitm.ac.in/academics/phd-admissions",
    timestamp: "2026-04-28T00:00:00Z",
    category: "FELLOWSHIP",
    summary: "Applications are open for funded national fellowships at IIT Madras Brain Centre, supporting computational mapping, brain-inspired modeling, and high-resolution imaging projects.",
    imageKeyword: "iit-madras"
  },
  {
    id: "news-hyderabad-phd-2026",
    title: "IIT Hyderabad: Liberal Arts PhD psychology Shortlist for Autumn Batch",
    source: "IITH Liberal Arts Portal",
    url: "https://www.iith.ac.in/phdadmissions/",
    timestamp: "2026-04-25T00:00:00Z",
    category: "PHD ADMISSION",
    summary: "IIT Hyderabad Psychology / Liberal Arts section has updated shortlists for written and presentation rounds. Primary areas of focus are Human Factors, Social Psychology and Mental Health.",
    imageKeyword: "iit-hyderabad"
  }
];