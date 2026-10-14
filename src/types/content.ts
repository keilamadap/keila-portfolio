import type { StaticImageData } from "next/image";

export type SocialLink = {
  label: string;
  href: string;
  handle: string;
};

export type Highlight = {
  value: string;
  /** Small honest qualifier shown next to the number, e.g. "up to" */
  qualifier?: string;
  caption: string;
};

export type ExperienceEntry = {
  company: string;
  role: string;
  /** Free-form period label, e.g. "Apr 2026 — Present" */
  period: string;
  start: string; // ISO yyyy-mm
  end: string | null; // null = present
  workModel: string;
  summary: string;
  contributions: string[];
  technologies: string[];
};

export type SkillGroup = {
  title: string;
  description: string;
  items: string[];
};

export type EducationEntry = {
  title: string;
  institution: string;
  location?: string;
  completed: string;
};

export type EventKind = "Conference" | "Meetup" | "Workshop" | "Study group" | "Talk" | "Company event" | "Community event";

export type EventPhoto = {
  src: StaticImageData;
  alt: string;
  /** Optional CSS object-position to control the crop, e.g. "50% 30%" */
  focus?: string;
};

export type EventEntry = {
  name: string;
  kind: EventKind;
  location: string;
  /** Display label, e.g. "2024" or "May 2026" */
  date: string;
  /** Optional, for your own reference — entries render in the order listed. */
  sortKey?: string;
  /** Keep the event on /about only, out of the home page section. */
  hideOnHome?: boolean;
  photos?: EventPhoto[];
  note: string;
  takeaway: string;
  url?: string;
};
