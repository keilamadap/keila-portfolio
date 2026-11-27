import type { ExperienceEntry, Highlight } from "@/types/content";

/** Bullets mirror the LinkedIn experience section, in the same order. */

export const experience: ExperienceEntry[] = [
  {
    company: "GoFasti",
    role: "Frontend Engineer",
    period: "Apr 2026 — Present",
    start: "2026-04",
    end: null,
    workModel: "Full-time · Remote · US-based team",
    summary:
      "Sole frontend engineer, owning the frontend of an internal platform that replaced spreadsheet-based workflows and third-party tools.",
    contributions: [
      "As the company's sole Frontend Engineer on a fully remote US-based team, I own frontend development end to end: architecture, technical decisions and feature delivery.",
      "Built the frontend of an internal platform that replaced spreadsheet-based workflows and third-party tools, reducing operational processing time by up to 50% and contributing to a projected $48,000 in annual SaaS savings.",
      "Defined the frontend architecture and API integration patterns (React, TypeScript, TanStack Query), aligning API contracts, data structures, authentication and server-state handling with backend engineers.",
      "Use AI-assisted development (Claude, Codex and GitHub Copilot) as part of my daily workflow: I define the architecture and requirements, delegate implementation to AI, and review, test and refine everything before it reaches production, which lets me deliver more as the team's sole frontend engineer.",
      "Analyzed feature adoption and recommended removing low-value features and unnecessary third-party services, reducing costs.",
      "Gathered requirements directly from non-technical users, turned them into product features, and trained them on the platform to support adoption.",
    ],
    technologies: ["React", "TypeScript", "TanStack Query", "REST APIs", "Authentication", "Claude", "Codex", "GitHub Copilot"],
  },
  {
    company: "Agência Sonora",
    role: "Frontend Engineer",
    period: "Apr 2025 — Nov 2026",
    start: "2025-04",
    end: "2026-11",
    workModel: "Part-time · Remote",
    summary:
      "Web apps for promotional and incentive campaigns — each with its own business rules, audience and deadline — on a shared, reusable frontend base.",
    contributions: [
      "Delivered responsive web apps for 50+ promotional and incentive campaigns, each with its own business rules, audience and deadline.",
      "Built a reusable frontend base with React, Next.js, TypeScript and Tailwind CSS, giving new campaigns a consistent, maintainable starting point.",
      "Developed interactive experiences and complex animations with GSAP while keeping pages fast and responsive.",
      "Worked with design and marketing teams to turn client briefs into production-ready applications.",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Figma"],
  },
  {
    company: "Truckpag",
    role: "Frontend Engineer",
    period: "Nov 2023 — Apr 2025",
    start: "2023-11",
    end: "2025-04",
    workModel: "Full-time · Remote",
    summary:
      "Production features, test coverage, internationalization and documentation in a React and TypeScript application.",
    contributions: [
      "Increased test coverage by 20% with Jest and React Testing Library, catching bugs before production and reducing regressions; reviewed code regularly.",
      "Led the app's internationalization with i18next, enabling multi-language support.",
      "Built and evolved production features in a React and TypeScript application, focusing on frontend architecture, UI consistency and maintainability.",
      "Refactored shared components and logic to improve reusability and code quality.",
      "Created and maintained technical documentation in Writerside, centralizing knowledge and making onboarding easier.",
    ],
    technologies: ["React", "TypeScript", "Material UI", "React Testing Library", "Jest", "i18next", "GitLab", "Writerside"],
  },
  {
    company: "Esmenezes",
    role: "Frontend Engineer",
    period: "Nov 2022 — Oct 2023",
    start: "2022-11",
    end: "2023-10",
    workModel: "Full-time · Remote",
    summary: "A legacy migration to Next.js and a B2B platform with real-time chat and kanban workflows.",
    contributions: [
      "Migrated a legacy system to Next.js and Material UI, improving order tracking, performance and user experience.",
      "Built a B2B platform with real-time chat and kanban workflows using SignalR, giving teams better visibility into operations.",
      "Implemented responsive interfaces from Figma designs with React, TypeScript and styled-components, working closely with design and product.",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Material UI", "styled-components", "SignalR"],
  },
];

/**
 * Only real, verified numbers (same as LinkedIn). Do not add metrics here without a source.
 * Only the `featured` ones appear on the page.
 */
export const highlights: Highlight[] = [
  { value: "2022", caption: "Started working professionally in frontend development." },
  {
    value: "50%",
    qualifier: "up to",
    featured: true,
    caption: "Less operational processing time after replacing spreadsheet workflows with an internal platform.",
  },
  {
    value: "$48k",
    qualifier: "projected",
    featured: true,
    caption: "Annual SaaS savings the internal platform contributes to.",
  },
  { value: "50+", featured: true, caption: "Promotional and incentive campaigns delivered as web apps." },
  { value: "20%", featured: true, caption: "Increase in test coverage in a production React application." },
];
