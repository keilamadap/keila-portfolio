import type { EventEntry } from "@/types/content";

import sonoraTeamBuilding from "@/assets/images/events/sonora-team-building-it-kitchen.jpg";
import sebraeCommunity from "@/assets/images/events/sebrae-community-event.jpg";
import truckverseStage from "@/assets/images/events/truckverse-2024-stage.jpg";
import truckverseTeam from "@/assets/images/events/truckverse-2024-team.jpg";

/**
 * Events, conferences, meetups and study groups.
 * Add entries here — the home section and /about update automatically.
 * Put photos in src/assets/images/events/ and import them (next/image
 * then generates sizes and a blur placeholder automatically).
 *
 * Fields in "[…]" are placeholders and are highlighted on the site.
 */
export const events: EventEntry[] = [
  {
    name: "GDG Natal",
    kind: "Community event",
    location: "SEBRAE · Natal, Brazil",
    date: "Jun 2026",
    sortKey: "2026-06",
    photos: [
      {
        src: sebraeCommunity,
        alt: "Aerial photo of GDG Natal attendees waving in front of the SEBRAE building in Natal.",
        focus: "50% 55%",
      },
    ],
    note: "A Google Developer Groups community event with talks on applying AI, AI-driven optimization, new tools, and career planning in tech.",
    takeaway: "The highlight was stepping away from screens and building real connections — from experienced engineers to people just entering the field.",
    url: "https://www.linkedin.com/showcase/google-developer-groups/",
  },
  {
    name: "MasterChef-style Team Building",
    kind: "Company event",
    location: "it.kitchen · São Paulo, Brazil",
    date: "2025",
    sortKey: "2025",
    photos: [
      {
        src: sonoraTeamBuilding,
        alt: "The Agência Sonora team in aprons, holding certificates after a MasterChef-style team-building activity at it.kitchen in São Paulo.",
        focus: "50% 50%",
      },
    ],
    note: "A team-building experience organized by Agência Sonora — cooking together in a MasterChef format to put teamwork, communication and ownership into practice.",
    takeaway: "Great deliveries start with people who communicate, trust each other and own their part of the execution.",
    url: "https://www.linkedin.com/company/agencia-sonora/",
  },
  {
    name: "Truckverse 2024",
    kind: "Company event",
    location: "Cascavel, Paraná, Brazil",
    date: "2024",
    sortKey: "2024",
    photos: [
      {
        src: truckverseTeam,
        alt: "Keila with colleagues at Truckverse 2024, standing in front of a wall of colorful event posters.",
        focus: "40% 45%",
      },
      {
        src: truckverseStage,
        alt: "Keila on stage at Truckverse 2024 with two colleagues, in front of the event screen.",
        focus: "50% 40%",
      },
    ],
    note: "Truckpag’s annual company convention — a chance to finally meet my remote teammates in person and exchange knowledge face to face.",
    takeaway: "Even for a fully remote team, sharing knowledge in person builds a different kind of connection.",
  },
];

/** Themes the events section mentions while the log is empty (and alongside it after). */
export const eventTopics = [
  "Frontend engineering",
  "Software development",
  "Artificial intelligence",
  "Product development",
  "Technology trends",
];

export const exploring = [
  {
    title: "AI-assisted software engineering",
    note: "How AI tools change the way features are planned, written, reviewed and tested.",
  },
  {
    title: "AI applied to web products",
    note: "Interfaces where AI is part of the product, not a chat box bolted on.",
  },
  {
    title: "Modern frontend architecture",
    note: "Server-first rendering, data boundaries and keeping growing codebases legible.",
  },
  {
    title: "Scalable product interfaces",
    note: "Patterns for workflow-heavy and admin products that keep working at size.",
  },
  {
    title: "Developer experience",
    note: "Documentation, conventions and tooling that make teams faster.",
  },
];
