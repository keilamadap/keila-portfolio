import type { EducationEntry, SkillGroup } from "@/types/content";

/** Organised by capability, not as a technology cloud. */
export const skills: SkillGroup[] = [
  {
    title: "Frontend Engineering",
    description: "The foundation: typed, component-driven interfaces.",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Responsive UI", "Component architecture"],
  },
  {
    title: "Product & Architecture",
    description: "Where interface work meets product and backend decisions.",
    items: [
      "Frontend architecture",
      "API integration",
      "State management",
      "Authentication",
      "Authorization",
      "Product workflows",
      "Technical debt reduction",
    ],
  },
  {
    title: "Quality",
    description: "Keeping products reliable as they grow.",
    items: ["React Testing Library", "Jest", "Cypress", "MSW", "Accessibility", "Performance", "SEO"],
  },
  {
    title: "UI & Design",
    description: "From Figma to production, mobile-first.",
    items: ["Tailwind CSS", "Material UI", "GSAP", "Figma", "Mobile-first development"],
  },
  {
    title: "Engineering Tools",
    description: "Day-to-day workflow and delivery.",
    items: ["Git", "GitLab", "Docker", "Azure", "Postman", "Writerside"],
  },
];

export const education: EducationEntry[] = [
  {
    title: "Postgraduate Specialization in Full-Stack Development",
    institution: "PUC-RS",
    completed: "Aug 2026",
  },
  {
    title: "Bachelor's Degree in Science and Technology",
    institution: "Federal University of Rio Grande do Norte",
    completed: "Aug 2022",
  },
  {
    title: "Science Without Borders — Exchange Program",
    institution: "Saint Francis University",
    location: "Pennsylvania, USA",
    completed: "Jul 2015",
  },
  {
    title: "Technical Degree in Informatics",
    institution: "Federal Institute of Rio Grande do Norte",
    completed: "Dec 2011",
  },
];
