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

  aboutShort: [
    "I'm a Frontend Engineer building and evolving production web applications since 2022.",
    "My work goes beyond implementing interfaces. I collaborate with backend, product, design and business teams to understand workflows, define technical solutions and turn complex requirements into scalable web products.",
  ],

  about: [
    "I'm a Frontend Engineer with professional experience building and evolving production web applications since 2022.",
    "My work goes beyond implementing interfaces. I collaborate with backend, product, design and business teams to understand workflows, define technical solutions and turn complex requirements into scalable web products.",
    "My experience includes frontend architecture, API integration, state management, responsive interfaces, testing, performance optimization, accessibility and technical debt reduction.",
    "I care about building interfaces that are technically solid, maintainable and genuinely useful to the people using them.",
    "Currently, I work with a US-based remote team building internal products and helping migrate manual operational workflows into scalable web applications.",
    "Outside of day-to-day development, I'm interested in technology events, AI, product engineering and the evolution of frontend development.",
  ],

  personal:
    "When I'm away from the editor, you'll probably find me at a tech event, playing games, dancing or roller skating.",

  interests: [
    "Frontend architecture",
    "Product engineering",
    "UX",
    "Scalable frontend systems",
    "State management",
    "API integration",
    "Performance",
    "Accessibility",
    "Testing",
    "AI-assisted software development",
  ],

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

export const navigation = [
  { label: "Experience", href: "/experience", folio: "02" },
  { label: "About", href: "/about", folio: "03" },
  { label: "Contact", href: "/#contact", folio: "04" },
] as const;
