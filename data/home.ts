export interface StatItem {
  id: string;
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  description: string;
}

export interface CapabilityItem {
  number: string;
  title: string;
  description: string;
  href: string;
  tag: string;
}

export interface FeaturedCampaignItem {
  id: string;
  client: string;
  campaignType: string;
  metricHighlight?: string;
  tagline: string;
  href: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const heroContent = {
  headline: "B2B Lead Generation That Delivers Qualified Pipeline.",
  subheadline:
    "We help technology companies and channel partners identify high-value accounts, reach the right decision-makers, and turn conversations into qualified sales opportunities.",
  primaryCta: {
    label: "Schedule Consultation",
    href: "/contact",
  },
  secondaryCta: {
    label: "View Case Studies",
    href: "/case-studies",
  },
};

export const clientMarquee = {
  label: "Trusted by teams at",
  clients: [
    "Techberry Infotech",
    "Rubrik Inc.",
    "Techdata",
    "AWS",
    "Abhiraj Reality",
    "Nobel IT Solutions",
    "Sunfire Technologies",
    "Square Solutions",
  ],
};

export const statsContent: StatItem[] = [
  {
    id: "stat-1",
    value: 10,
    suffix: "+ Years",
    label: "Industry Experience",
    description: "B2B Marketing & Sales Experience",
  },
  {
    id: "stat-2",
    value: 250,
    prefix: "$",
    suffix: "M+",
    label: "Pipeline Created",
    description: "Business Pipeline Generated",
  },
  {
    id: "stat-3",
    value: 14,
    suffix: "%",
    label: "Conversion Success",
    description: "Successful Closure Rate",
  },
  {
    id: "stat-4",
    value: 6,
    suffix: "+ Industries",
    label: "Domain Reach",
    description: "Technology | IT Infrastructure | Healthcare | Education | Real Estate | Retail",
  },
];

export const capabilitiesContent = {
  sectionIntro: "End-to-end B2B demand generation services designed to fill your pipeline with qualified, sales-ready opportunities.",
  items: [
    {
      number: "01",
      title: "Lead Generation & Account Based Marketing",
      description:
        "We help businesses identify high-value target accounts, reach the right decision-makers, and generate genuine sales opportunities through focused B2B Lead Generation and Account-Based Marketing (ABM).",
      href: "/services#account-based-marketing",
      tag: "ABM & Demand Gen",
    },
    {
      number: "02",
      title: "Webinar & Live Event Marketing",
      description:
        "We help businesses maximize webinar and live event outcomes through targeted audience identification, strategic outreach, registration campaigns, attendee engagement, confirmation, and post-event follow-up.",
      href: "/services#event-marketing",
      tag: "Audience Acquisition",
    },
    {
      number: "03",
      title: "Sales Outsourcing",
      description:
        "From prospecting to opportunity development, our sales expertise works as an extension of your team—enabling focused market coverage, consistent follow-ups, and measurable business outcomes.",
      href: "/services#sales-outsourcing",
      tag: "Pipeline Acceleration",
    },
  ] satisfies CapabilityItem[],
};

export const featuredCampaignsContent = {
  sectionIntro: "Recent campaigns that delivered measurable pipeline and revenue for technology brands and partners.",
  campaigns: [
    {
      id: "rubrik-appointment-setting",
      client: "Rubrik Inc.",
      campaignType: "Appointment Setting Campaign",
      metricHighlight: "72% Success Rate",
      tagline: "Engaged 250+ enterprise accounts and delivered 18 confirmed decision-maker meetings.",
      href: "/case-studies",
    },
    {
      id: "techberry-lead-gen",
      client: "Techberry Infotech",
      campaignType: "Lead Generation Campaign",
      // Techberry has no metrics in the source, so show label only, no invented numbers
      tagline: "Targeted outbound prospecting and qualified lead acquisition across key regional accounts.",
      href: "/case-studies",
    },
    {
      id: "dell-sales-closure",
      client: "Dell Technologies",
      campaignType: "Sales Closure Campaign",
      metricHighlight: "INR 2.15 Cr Generated",
      tagline: "High-intent client solutions campaign resulting in 5 confirmed high-value enterprise closures.",
      href: "/case-studies",
    },
  ] satisfies FeaturedCampaignItem[],
};

export const processContent = {
  sectionIntro: "A proven, repeatable methodology that delivers consistent results across every campaign.",
  steps: [
    {
      step: "01",
      title: "STRATEGY",
      description: "Understand your business; define the ICP, objectives, market and campaign strategy.",
    },
    {
      step: "02",
      title: "REACH",
      description: "Connect with the right audience through targeted databases, email, digital campaigns and telemarketing.",
    },
    {
      step: "03",
      title: "ENGAGE",
      description: "Generate interest, qualify prospects, nurture leads and create meaningful sales conversations.",
    },
    {
      step: "04",
      title: "CONVERT",
      description: "Deliver qualified opportunities, appointments and sales-ready prospects to accelerate business growth.",
    },
  ] satisfies ProcessStep[],
};

export const homeCtaContent = {
  headline: "Ready to talk strategy?",
  subheadline:
    "Let's discuss how a structured lead generation and ABM program can strengthen your pipeline and drive measurable growth.",
  button: {
    label: "Schedule Consultation",
    href: "/contact",
  },
};
