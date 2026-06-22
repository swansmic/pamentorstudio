import type { ServicePathway } from "@/types/content";

export const servicePathways: ServicePathway[] = [
  {
    slug: "1-year",
    name: "1-Year Mentorship",
    duration: "12 months",
    investment: "$5,000",
    tagline: "Focused preparation for applicants within the final year of their application journey.",
    description:
      "Strategic, intensive mentorship for applicants who are ready to apply and need focused, expert support to present their strongest possible candidacy.",
    href: "/services/1-year",
    cadence: ["Monthly sessions, 1 hour each"],
  },
  {
    slug: "2-year",
    name: "2-Year Mentorship",
    duration: "24 months",
    investment: "$7,000",
    tagline: "Structured development across two intentional years of preparation.",
    description:
      "A structured two-year developmental arc for applicants who want time to build their clinical foundation, refine their narrative, and apply with confidence.",
    href: "/services/2-year",
    cadence: ["Monthly sessions, 1 hour each"],
  },
  {
    slug: "3-year",
    name: "3-Year Mentorship",
    duration: "36 months",
    investment: "$10,000",
    tagline: "Long-horizon mentorship beginning from the earliest stages of aspiration.",
    description:
      "A comprehensive three-year mentorship relationship for applicants who are beginning early and want sustained, experienced guidance at every stage of their journey.",
    href: "/services/3-year",
    cadence: ["Monthly sessions, 1 hour each"],
  },
];
