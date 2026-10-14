export interface PhilosophyItem {
  number: string;
  title: string;
  description: string;
}

export interface DrivePrinciple {
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  initials: string;
  isJoiningSoon?: boolean;
}

export const aboutHeroContent = {
  eyebrow: "ABOUT US",
  headline: "Marketing Experts.",
  subheadline: "Built on Experience. Driven by Growth.",
};

export const aboutStoryContent = {
  title: "Our Story",
  paragraph:
    "LEADGENIX BCS was founded in 2026 by two B2B marketing professionals and friends, bringing together 10+ years of collective experience across B2B Marketing, Demand Generation, Lead Generation, Partner & Distributor Ecosystems, and Sales Pipeline Development. Over the years, the founders have worked closely with technology companies, OEMs, partners, distributors, and business stakeholders, helping organizations identify the right markets, engage key decision-makers, generate qualified opportunities, and build sustainable sales pipelines. Through their combined industry experience, they have contributed to generating $250M+ in business pipeline for partners and distributors, with approximately 14% of opportunities progressing to successful business closures.",
};

export const philosophyContent = {
  sectionTitle: "Our Philosophy",
  intro:
    "We combine strategic thinking, market intelligence, technology and human engagement to create meaningful business connections—not just leads. From identifying the right accounts to generating qualified opportunities and supporting the sales journey, we focus on creating measurable outcomes that contribute to sustainable growth.",
  items: [
    {
      number: "01",
      title: "Strategic Planning",
      description:
        "We build focused, data-driven strategies aligned with your business goals, target audience and growth objectives—turning insights into actionable plans and measurable results.",
    },
    {
      number: "02",
      title: "Integrated Campaigns",
      description:
        "We connect multiple marketing channels into one focused strategy to reach the right audience, drive meaningful engagement and generate qualified business opportunities.",
    },
    {
      number: "03",
      title: "Measurable Results",
      description:
        "We focus on outcomes that matter—tracking every campaign, lead and opportunity to deliver transparent performance, actionable insights and measurable business growth.",
    },
  ] satisfies PhilosophyItem[],
};

export const whatDrivesUsContent = {
  sectionTitle: "What Drives Us",
  intro: "Four principles that shape how we work with every client.",
  principles: [
    {
      title: "Strategic Partnership",
      description:
        "We work as an extension of your marketing team, aligning our campaigns with your broader business objectives and brand strategy.",
    },
    {
      title: "Sales Excellence",
      description:
        "We turn qualified opportunities into meaningful sales conversations through focused engagement, smart follow-ups and a disciplined, results-driven approach.",
    },
    {
      title: "Creative Excellence",
      description:
        "Our campaigns combine strategic thinking with compelling messaging that cuts through the clutter and resonates with your target audience.",
    },
    {
      title: "Proven Track Record",
      description:
        "We measure success through qualified pipeline, closed business and revenue growth. Every campaign is built around measurable business objectives.",
    },
  ] satisfies DrivePrinciple[],
};

export const teamContent = {
  sectionTitle: "Meet The Team",
  intro: "B2B marketing and sales specialists with deep experience in the technology channel.",
  members: [
    {
      name: "Akshay Bramhankar",
      role: "Business Strategy Director",
      initials: "AB",
      isJoiningSoon: false,
    },
    {
      name: "Shubham Mahadik",
      role: "Marketing & Sales Director",
      initials: "SM",
      isJoiningSoon: false,
    },
    {
      name: "Joining soon",
      role: "Webinar & Events",
      initials: "WE",
      isJoiningSoon: true,
    },
    {
      name: "Joining soon",
      role: "Brand Strategist",
      initials: "BS",
      isJoiningSoon: true,
    },
  ] satisfies TeamMember[],
};

export const aboutCtaContent = {
  headline: "Ready To Partner?",
  subheadline:
    "Let's discuss how Leadgenix can help you generate qualified opportunities and build lasting pipeline.",
  button: {
    label: "Schedule Consultation",
    href: "/contact",
  },
};
