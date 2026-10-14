import type { ExperienceEntry, Highlight } from "@/types/content";

export const experience: ExperienceEntry[] = [
  {
    company: "GoFasti",
    role: "Frontend Engineer",
    period: "Apr 2026 — Present",
    start: "2026-04",
    end: null,
    workModel: "Remote · US-based team",
    summary:
      "Leading and contributing to the migration of manual, spreadsheet-based operational workflows into a scalable internal platform.",
    contributions: [
      "Helping migrate spreadsheet-based operational workflows into an internal platform, reducing process time by up to 50%.",
      "Designing frontend architecture and API integration patterns together with backend engineers.",
      "Collaborating on API contracts, authentication, data structures and request handling.",
      "Building product workflows with React, TypeScript and TanStack Query.",
      "Managing asynchronous state and server data across multiple features.",
      "Contributing to UX and layout decisions for new product features.",
      "Translating business workflows into technical product requirements.",
      "Helping bridge communication between engineering and non-technical business teams.",
    ],
    technologies: ["React", "TypeScript", "TanStack Query", "REST APIs", "Authentication"],
  },
  {
    company: "Agência Sonora",
    role: "Frontend Developer",
    period: "Apr 2025 — Sep 2026",
    start: "2025-04",
    end: "2026-09",
    workModel: "Remote",
    summary:
      "Delivered promotional and incentive campaign products — multiple web applications with different business rules, audiences and visual identities.",
    contributions: [
      "Delivered more than 20 responsive web applications for promotional and incentive campaigns.",
      "Built reusable frontend architectures using React, Next.js and TypeScript.",
      "Used Tailwind CSS and GSAP to implement responsive and interactive experiences.",
      "Translated Figma designs into production-ready interfaces with a strong mobile-first approach.",
      "Focused on accessibility, SEO, performance and visual quality.",
      "Balanced short delivery cycles with maintainable frontend structures.",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Figma"],
  },
  {
    company: "Truckpag",
    role: "Frontend Developer",
    period: "Nov 2023 — Apr 2025",
    start: "2023-11",
    end: "2025-04",
    workModel: "Remote",
    summary:
      "Built features, improved frontend architecture and increased code quality and maintainability in a production React application.",
    contributions: [
      "Built and evolved production features using React and TypeScript.",
      "Increased frontend test coverage by approximately 20% with React Testing Library and Jest.",
      "Led the application's internationalization with i18next — Portuguese, English and Spanish.",
      "Refactored shared components and logic to improve scalability and reuse.",
      "Participated in code reviews.",
      "Produced technical documentation with Writerside, helping centralize business rules and improve onboarding.",
    ],
    technologies: ["React", "TypeScript", "Material UI", "React Testing Library", "Jest", "i18next", "Writerside"],
  },
  {
    company: "ESMenezes",
    role: "Frontend Developer",
    period: "Nov 2022 — Oct 2023",
    start: "2022-11",
    end: "2023-10",
    workModel: "Remote",
    summary: "Worked on B2B and operational web platforms using React and Next.js.",
    contributions: [
      "Migrated a legacy system to Next.js and Material UI, improving order tracking and overall user experience.",
      "Built a B2B platform with real-time chat using SignalR.",
      "Developed kanban-style operational workflows.",
      "Built responsive React and TypeScript interfaces from Figma designs, with design and product teams.",
      "Worked with OpenLayers, geolocation and dynamic themes with React Context.",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Material UI", "SignalR", "OpenLayers"],
  },
];

/** Only real, verified numbers. Do not add metrics here without a source. */
export const highlights: Highlight[] = [
  { value: "2022", caption: "Started working professionally in frontend development." },
  { value: "20+", caption: "Web applications delivered for promotional and incentive campaigns." },
  { value: "20%", qualifier: "approx.", caption: "Increase in frontend test coverage in a production application." },
  {
    value: "50%",
    qualifier: "up to",
    caption: "Reduction in process time for workflows migrated from spreadsheets to an internal platform.",
  },
  { value: "4", caption: "Professional frontend roles since 2022." },
];
