import type { NavItem } from "@/types/content";

export const navItems: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "1-Year Mentorship", href: "/services/1-year" },
      { label: "2-Year Mentorship", href: "/services/2-year" },
      { label: "3-Year Mentorship", href: "/services/3-year" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
];

export const footerLinks = {
  services: [
    { label: "1-Year Mentorship", href: "/services/1-year" },
    { label: "2-Year Mentorship", href: "/services/2-year" },
    { label: "3-Year Mentorship", href: "/services/3-year" },
    { label: "Services Overview", href: "/services" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "About", href: "/about" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Disclaimer", href: "/disclaimer" },
  ],
};
