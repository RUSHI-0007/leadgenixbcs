export interface NavLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  domain: string;
  tagline: string;
  description: string;
  email: string;
  phone: string;
  foundedYear: number;
  copyright: string;
  navLinks: NavLink[];
  ctaButton: {
    label: string;
    href: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "LEADGENIX BCS",
  domain: "leadgenixbcs.com",
  tagline: "B2B Lead Generation & Account-Based Marketing",
  description: "Specialized B2B lead generation and ABM partner for technology companies, OEMs, distributors, and channel partners in India.",
  email: "info@leadgenixbcs.com", // TODO: Replace with official production inbox
  phone: "+91 XXXXX XXXXX", // TODO: Replace with official phone line
  foundedYear: 2026,
  copyright: "© 2026 Leadgenix BCS. All rights reserved.",
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Services", href: "/services" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Contact Us", href: "/contact" },
  ],
  ctaButton: {
    label: "Schedule Consultation",
    href: "/contact",
  },
};
