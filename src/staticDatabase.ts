import { Professor, NewsItem } from "./types";
import data from "./database.json";

export const FACULTY_DATABASE: Record<string, Professor[]> = data as Record<string, Professor[]>;

export const getFacultyForInstitute = (instituteName: string): Professor[] => {
  return FACULTY_DATABASE[instituteName] || [];
};

export const NEWS_DATABASE: NewsItem[] = [
  {
    id: "news-iitd-selections-2026",
    title: "IIT Delhi: Selected Candidates for PhD Programs Declared (Autumn 2026-27)",
    source: "IIT Delhi HSS Portal",
    url: "https://hss.iitd.ac.in/admissions",
    timestamp: "2026-06-07T00:00:00Z",
    category: "PHD ADMISSION",
    summary: "The Department of Humanities and Social Sciences (HSS) at IIT Delhi has finalized its interview cycles and published the list of candidates selected for admission to PhD streams (Psychology and Philosophy) for 2026.",
    imageKeyword: "iit-delhi"
  },
  {
    id: "news-iitb-selections-2026",
    title: "IIT Bombay: CogSci and Psychology PhD Provisional Selection Lists Declared",
    source: "IIT Bombay IDRP CogSci",
    url: "https://www.iitb.ac.in/newweb/phd-admissions",
    timestamp: "2026-06-04T00:00:00Z",
    category: "PHD ADMISSION",
    summary: "Provisional lists of recommended candidates for IIT Bombay's Cognitive Science (IDRP) and HSS PhD admissions have been uploaded. Final offer letters are being dispatched via the PG admissions portal.",
    imageKeyword: "iit-bombay"
  },
  {
    id: "news-nimhans-exam-2026",
    title: "NIMHANS: PhD in Clinical Psychology Entrance Guidelines Issued",
    source: "NIMHANS Academic Section",
    url: "https://nimhans.ac.in/admissions/",
    timestamp: "2026-06-02T00:00:00Z",
    category: "EXAM",
    summary: "Official exam hall guidelines have been issued for the upcoming PhD in Clinical Psychology entrance test scheduled for mid-June 2026. Registered candidates can download hall tickets immediately.",
    imageKeyword: "nimhans"
  },
  {
    id: "news-iitk-offers-2026",
    title: "IIT Kanpur: Cognitive Science PhD Admission First-List Offers Dispatched",
    source: "IITK CogSci Department",
    url: "https://www.iitk.ac.in/cogs/admissions",
    timestamp: "2026-05-31T00:00:00Z",
    category: "PHD ADMISSION",
    summary: "IIT Kanpur's Department of Cognitive Science has issued first-round selection offer letters for the July 2026 academic term. Admitted students must confirm and pay fees by June 15.",
    imageKeyword: "iit-kanpur"
  },
  {
    id: "news-iitgn-summer-2026",
    title: "IIT Gandhinagar: Selected Interns for Cognitive Science Program Declared",
    source: "IITGN Cognitive Science",
    url: "https://cogs.iitgn.ac.in/",
    timestamp: "2026-05-28T00:00:00Z",
    category: "RESEARCH",
    summary: "IIT Gandhinagar has announced the final list of summer research scholars. Selected interns will undergo a residency program focusing on eye-tracking, decision-making, and spatial navigation.",
    imageKeyword: "iit-gandhinagar"
  },
  {
    id: "news-iith-shortlist-2026",
    title: "IIT Hyderabad: PhD in Liberal Arts Final Interview Results Out",
    source: "IITH Liberal Arts Portal",
    url: "https://www.iith.ac.in/phdadmissions/",
    timestamp: "2026-05-24T00:00:00Z",
    category: "PHD ADMISSION",
    summary: "The Department of Liberal Arts has announced the list of selected doctoral scholars in Psychology for the Autumn term. Offers have been communicated to individual emails.",
    imageKeyword: "iit-hyderabad"
  },
  {
    id: "news-iitm-brain-2026",
    title: "IIT Madras: Sudha Gopalakrishnan Brain Centre Launches Mapping Cohort",
    source: "IITM Division",
    url: "https://www.iitm.ac.in/academics/phd-admissions",
    timestamp: "2026-05-20T00:00:00Z",
    category: "RESEARCH",
    summary: "In a massive step for neuroscience, the Brain Centre at IIT Madras has inaugurated a specialized cohort for human brain atlas projects, incorporating high-throughput imaging pipeline setups.",
    imageKeyword: "iit-madras"
  },
  {
    id: "news-cogjet-scores-2026",
    title: "COGJET 2026: Entrance Scores Validated and Forwarded to Central Labs",
    source: "COGJET Joint Portal",
    url: "https://cbcs.ac.in/admissions/cogjet/",
    timestamp: "2026-05-15T00:00:00Z",
    category: "EXAM",
    summary: "COGJET scores have been securely verified and transmitted to partner labs, including CBCS Allahabad and IIT Kanpur, to support final-round ranking and screening filters.",
    imageKeyword: "brain"
  }
];