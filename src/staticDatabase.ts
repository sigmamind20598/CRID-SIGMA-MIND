import { Professor, NewsItem } from "./types";
import data from "./database.json";

export const FACULTY_DATABASE: Record<string, Professor[]> = data as Record<string, Professor[]>;

export const getFacultyForInstitute = (instituteName: string): Professor[] => {
  return FACULTY_DATABASE[instituteName] || [];
};

export const NEWS_DATABASE: NewsItem[] = [
  {
    id: "news-1",
    title: "New PhD Admissions Open for Fall 2026",
    source: "University Portal",
    url: "#",
    timestamp: new Date().toISOString(),
    category: "PHD ADMISSION",
    summary: "Applications are now open for the upcoming Fall semester. Apply before the deadline.",
    imageKeyword: "university"
  },
  {
    id: "news-2",
    title: "Recent Breakthrough in Cognitive Psychology",
    source: "Research Journal",
    url: "#",
    timestamp: new Date().toISOString(),
    category: "RESEARCH",
    summary: "A new study reveals fascinating insights into human memory and learning processes.",
    imageKeyword: "brain"
  }
];
