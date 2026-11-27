import type { SocialLink } from "@/types/content";

/**
 * Single source of truth for identity, copy and links.
 * Edit this file to update text across the site.
 */
export const site = {
  name: "Keila Amada",
  role: "Frontend Engineer",
  positioning: "Product-minded Frontend Engineer building scalable digital products.",
  description:
    "Keila Amada is a product-minded Frontend Engineer building scalable, maintainable and user-friendly web products with React, Next.js and TypeScript.",
  location: "Natal, Brazil",
  locationShort: "Natal, BR",
  timezone: "UTC−3",
  startedYear: 2022,
  /** Leave null to hide the email link. */
  email: "keila.amadap@hotmail.com" as string | null,
  /** Path inside /public — leave null until you add a CV file. */
  resumePath: null as string | null, // e.g. "/keila-amada-cv.pdf"

  hero: {
    eyebrow: "Frontend Engineer",
    headline: {
      before: "Frontend Engineer building",
      emphasis: "scalable",
      after: "digital products.",
    },
    supporting:
      "I build and evolve production web applications with React, Next.js and TypeScript, combining frontend architecture, product thinking and user experience to turn complex requirements into maintainable interfaces.",
    status: "Based in Brazil. Working globally.",
    exploringLabel: "Currently exploring",
    exploring: ["AI-assisted development", "Frontend architecture", "Product engineering"],
  },

  /** Mirrors the LinkedIn "About" (the "Before that" list lives in the experience ledger). */
  about: [
    "I'm a Frontend Engineer with 4 years of experience building production web applications with React, Next.js and TypeScript.",
    "Today I'm the frontend engineer at GoFasti, a US-based company, working remotely with the engineering and business teams. I lead the frontend of an internal platform that replaced spreadsheet-based workflows and third-party tools. It reduced operational processing time by up to 50% and is part of a projected $48,000 in annual SaaS savings.",
    "Beyond the code, I define frontend architecture and API patterns with the backend team, talk directly with the people who use the product, and help decide which features are worth keeping.",
  ],

  personal:
    "When I'm away from the editor, you'll probably find me at a tech event, playing games, dancing or roller skating.",

  languages: [
    { name: "Portuguese", level: "Native" },
    { name: "English", level: "Full professional proficiency" },
    { name: "Spanish", level: "Intermediate" },
  ],

  contact: {
    headline: { before: "Building a product that needs", emphasis: "careful frontend work?" },
    body: "I'm open to conversations about frontend engineering roles, product teams and interesting problems in web products. The fastest way to reach me is LinkedIn.",
  },
} as const;

export const socials: SocialLink[] = [
  {
    label: "LinkedIn",
    handle: "in/keila-amada-parreira",
    href: "https://www.linkedin.com/in/keila-amada-parreira/",
  },
  {
    label: "GitHub",
    handle: "@keilamadap",
    href: "https://github.com/keilamadap",
  },
];
