import { Professor, NewsItem } from "./types";
import data from "./database.json";

export const FACULTY_DATABASE: Record<string, Professor[]> = data as Record<string, Professor[]>;

export const getFacultyForInstitute = (instituteName: string): Professor[] => {
  return FACULTY_DATABASE[instituteName] || [];
};

export const NEWS_DATABASE: NewsItem[] = [
  {
    id: "news-iitb-semester-registration-2026",
    title: "IIT Bombay: Autumn Semester Registration Commences for Cognitive Science Cohort",
    source: "IIT Bombay Academic Office",
    url: "https://www.iitb.ac.in/newweb/phd-admissions",
    timestamp: "2026-07-12T09:00:00Z",
    category: "PHD ADMISSION",
    summary: "Formal enrollment and physical registration for the newly selected Autumn 2026 PhD batch in Cognitive Science and Psychology have commenced. Candidates must complete portal registration and pay semester fees by July 22, 2026.",
    imageKeyword: "iit-bombay"
  },
  {
    id: "news-nimhans-shortlists-2026",
    title: "NIMHANS: PhD Clinical Psychology Selection Interview Shortlists Declared",
    source: "NIMHANS Academic Desk",
    url: "https://nimhans.ac.in/admissions/",
    timestamp: "2026-07-08T11:30:00Z",
    category: "PHD ADMISSION",
    summary: "Following the written entrance examination held on June 15-16, NIMHANS has officially released the list of qualified candidates shortlisted for the final selection interview rounds in Clinical Psychology and Neuropsychology.",
    imageKeyword: "nimhans"
  },
  {
    id: "news-dst-csri-guidelines-2026",
    title: "DST CSRI 2026: Official Guidelines and Funding Framework Released",
    source: "DST Scientific Division",
    url: "https://dst.gov.in/scientific-programmes/scientific-engineering-research/cognitive-science-research-initiative-csri",
    timestamp: "2026-07-05T14:45:00Z",
    category: "FELLOWSHIP",
    summary: "The Department of Science and Technology (DST) has released updated guidelines for the 2026 Cognitive Science Research Initiative (CSRI). Changes include enhanced research fellowship rates for doctoral/postdoctoral candidates and revised equipment grants.",
    imageKeyword: "fellowship"
  },
  {
    id: "news-iitd-dynamic-neuromapping-2026",
    title: "IIT Delhi: Dynamic Neuromapping Lab Publishes EEG Study on Virtual Attention",
    source: "IITD HSS Research",
    url: "https://hss.iitd.ac.in/admissions",
    timestamp: "2026-07-01T10:00:00Z",
    category: "RESEARCH",
    summary: "Scholars at IIT Delhi's Dynamic Neuromapping Laboratory have published a high-impact paper using joint EEG-Eye Tracking to analyze spatial attention drift during immersive virtual learning tasks, proposing new adaptive scaffolding interfaces.",
    imageKeyword: "iit-delhi"
  },
  {
    id: "news-nimhans-entrance-2026",
    title: "NIMHANS: PhD Clinical Psychology Entrance Exam Advisory for June 15-16 Candidates",
    source: "NIMHANS Academic Desk",
    url: "https://nimhans.ac.in/admissions/",
    timestamp: "2026-06-14T08:30:00Z",
    category: "EXAM",
    summary: "NIMHANS has issued final candidate guidelines and reporting schedules for the competitive PhD in Clinical Psychology entrance test starting on June 15, 2026. Hand sanitization, original admit cards, and identification documents are mandatory.",
    imageKeyword: "nimhans"
  },
  {
    id: "news-iisc-visual-cortex-2026",
    title: "IISc Bangalore: Center for Neuroscience Unveils Visual Cortex Plasticity Maps",
    source: "IISc CNS Media Office",
    url: "https://admissions.iisc.ac.in/",
    timestamp: "2026-06-12T14:15:00Z",
    category: "RESEARCH",
    summary: "Researchers at IISc's Center for Neuroscience have mapped the synaptic plasticity of the visual cortex under dynamic gaze-direction shifts, illustrating pattern adaptability relevant to brain-inspired neural networks.",
    imageKeyword: "iisc-bangalore"
  },
  {
    id: "news-iitk-waitlist-2026",
    title: "IIT Kanpur: Cognitive Science PhD Second Offer Lists and Waitlists Dispatched",
    source: "IITK Admissions",
    url: "https://www.iitk.ac.in/cogs/admissions",
    timestamp: "2026-06-10T11:00:00Z",
    category: "PHD ADMISSION",
    summary: "Following the first-round confirmation deadline, the Department of Cognitive Science at IIT Kanpur has compiled and dispatched second-round selection offer letters. Responses remain open until June 18, 2026.",
    imageKeyword: "iit-kanpur"
  },
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