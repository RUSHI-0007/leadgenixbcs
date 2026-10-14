import { computeRate, formatRate } from "@/lib/rates";

export type CaseStudyCategory = "All" | "Lead Generation" | "Appointment Setting" | "Events & Webinars";

export interface CaseStudyResultMetric {
  label: string;
  value: string;
}

export interface CaseStudyData {
  id: string;
  category: CaseStudyCategory;
  title: string;
  client: string;
  isFlagship?: boolean;
  objective: string;
  solutions: string[];
  process: string[];
  rawMetrics: {
    duration: string;
    bdsAllocation: string;
    accountsTargeted: string;
    [key: string]: string | number;
  };
  computedRates: {
    label: string;
    rate: number;
    formatted: string;
    comment?: string;
  }[];
  headlineKpis: {
    metric: string;
    label: string;
    subtext?: string;
  }[];
  outcome: string;
}

export const caseStudiesHeader = {
  eyebrow: "CASE STUDIES",
  headline: "Results That Speak.",
  subheadline:
    "Explore how our account-based strategies and targeted campaigns deliver measurable sales pipeline and revenue across the technology ecosystem.",
  footnote: "Results reflect individual monthly campaign cycles and vary by engagement.",
};

export const caseStudyCategories: CaseStudyCategory[] = [
  "All",
  "Lead Generation",
  "Appointment Setting",
  "Events & Webinars",
];

export const SHARED_LEADGEN_PROCESS = [
  "ICP Identification",
  "Database Validation",
  "Tele Prospecting",
  "Solution Briefing",
  "Email Outreach",
  "Follow-ups & Re-engagement",
  "Requirement Discovery",
  "Technical Meeting Coordination",
  "Lead Validation",
  "CRM Registration",
];

// Computed rates using formula: round((numerator / denominator) * 100, 2)
// Where source doc differed from computed value, computed value is used and annotated with comments.

// CS1: Rubrik (18 / 25 = 72%)
const cs1Rate = computeRate(18, 25); // source doc said 72%

// CS2: Dell ISG (12 / 22 = 54.55%)
const cs2Rate = computeRate(12, 22); // source doc said 54.54%

// CS3: IBM SWG (10 / 18 = 55.56%)
const cs3Rate = computeRate(10, 18); // source doc said 55.55%

// CS4: System Integrator (32 / 52 = 61.54%)
const cs4Rate = computeRate(32, 52); // source doc said 61.53%

// CS5: Dell CSG (76 / 82 = 92.68%)
const cs5Rate = computeRate(76, 82); // source doc said 92.68%

// CS6: Events (86 / 105 = 81.90%, 52 / 86 = 60.47%)
const cs6ConfirmationRate = computeRate(86, 105); // source doc said 81.90%
const cs6ParticipationRate = computeRate(52, 86); // source doc said 60.69%

// CS7: Webinars (95 / 210 = 45.24%, 40 / 95 = 42.11%)
const cs7ConfirmationRate = computeRate(95, 210); // source doc said 50%
const cs7ParticipationRate = computeRate(40, 95); // source doc said 42.94%

export const caseStudiesList: CaseStudyData[] = [
  {
    id: "cs-1-rubrik",
    category: "Appointment Setting",
    title: "Enterprise Appointment Setting",
    client: "Rubrik Inc.",
    objective: "Generate qualified appointments with enterprise decision-makers using an Account-Based Marketing (ABM) approach.",
    solutions: [
      "Hybrid Data Backup",
      "Cyber Security & Recovery",
      "Cyber Resilience",
      "Cloud Vault",
      "Identity Resilience & Recovery",
      "AI Agent",
    ],
    process: [
      "ICP Identification & Database Validation",
      "Database Building",
      "Tele Calling & Prospecting",
      "Solution Pre-Briefing",
      "Email Outreach with Product Collateral",
      "Follow-up & Re-engagement",
      "Interest Qualification",
      "Appointment Scheduling",
      "Appointment Follow-up",
      "Customer Meeting with Rubrik Representative",
      "CRM Documentation",
    ],
    rawMetrics: {
      duration: "Monthly",
      bdsAllocation: "1 BDS",
      accountsTargeted: "250+ ICP accounts",
      appointmentsBooked: 25,
      appointmentsCompleted: 18,
    },
    computedRates: [
      {
        label: "Appointment Success Rate",
        rate: cs1Rate,
        formatted: formatRate(cs1Rate),
        comment: "Source doc said 72%",
      },
    ],
    headlineKpis: [
      { metric: "250+", label: "Target Accounts", subtext: "Audited ICP universe" },
      { metric: "25 / 18", label: "Booked / Completed", subtext: "Enterprise appointments" },
      { metric: formatRate(cs1Rate), label: "Success Rate", subtext: "Completed / Booked" },
    ],
    outcome:
      "Successfully established active engagement with enterprise prospects while identifying multiple future opportunities for Rubrik's sales pipeline.",
  },
  {
    id: "cs-2-dell-isg",
    category: "Lead Generation",
    title: "Enterprise Lead Generation",
    client: "Dell Technologies – Infrastructure Solutions Group (ISG)",
    objective: "Generate sales-qualified infrastructure opportunities for Dell Infrastructure Group Solutions.",
    solutions: [
      "PowerEdge Servers",
      "NAS Storage (UDS)",
      "Unified Storage",
      "SAN Storage",
      "Hyper-Converged Infrastructure (HCI)",
    ],
    process: SHARED_LEADGEN_PROCESS,
    rawMetrics: {
      duration: "Monthly",
      bdsAllocation: "1 BDS",
      accountsTargeted: "300+ accounts",
      requirementsIdentified: 22,
      qualifiedAcceptedLeads: 12,
    },
    computedRates: [
      {
        label: "Lead Qualification Rate",
        rate: cs2Rate,
        formatted: formatRate(cs2Rate),
        comment: "Source doc said 54.54%",
      },
    ],
    headlineKpis: [
      { metric: "300+", label: "Target Accounts", subtext: "Enterprise database" },
      { metric: "12", label: "Qualified Leads", subtext: "Out of 22 requirements" },
      { metric: formatRate(cs2Rate), label: "Success Rate", subtext: "Leads / Requirements" },
    ],
    outcome:
      "Generated qualified infrastructure opportunities, enabling Dell's partner ecosystem to engage with high-intent prospects.",
  },
  {
    id: "cs-3-ibm-swg",
    category: "Lead Generation",
    title: "Enterprise Lead Generation",
    client: "IBM Software Group (IBM SWG)",
    objective: "Generate sales-qualified opportunities for IBM Software Solutions Group.",
    solutions: [
      "IBM Instana",
      "IBM Guardium Suite",
      "IBM Planning Analytics",
      "IBM QRadar (SIEM & SOAR)",
      "IBM MaaS360",
      "IBM SevOne Networking Security",
    ],
    process: SHARED_LEADGEN_PROCESS,
    rawMetrics: {
      duration: "Monthly",
      bdsAllocation: "1 BDS",
      accountsTargeted: "200+ accounts",
      requirementsIdentified: 18,
      qualifiedLeads: 10,
    },
    computedRates: [
      {
        label: "Qualification Conversion Rate",
        rate: cs3Rate,
        formatted: formatRate(cs3Rate),
        comment: "Source doc said 55.55%",
      },
    ],
    headlineKpis: [
      { metric: "200+", label: "Target Accounts", subtext: "Software buyers mapped" },
      { metric: "10", label: "Qualified Leads", subtext: "From 18 requirements" },
      { metric: formatRate(cs3Rate), label: "Success Rate", subtext: "Leads / Requirements" },
    ],
    outcome:
      "Created solution-specific sales opportunities and enabled IBM partners to accelerate customer engagement.",
  },
  {
    id: "cs-4-system-integrator",
    category: "Lead Generation",
    title: "Enterprise Lead Generation",
    client: "System Integrator",
    objective: "Generate sales-qualified opportunities for IT Infrastructure solutions.",
    solutions: [
      "Cloud Storage",
      "Cloud Migration",
      "Backup & Recovery",
      "Database & Middleware",
      "Artificial Intelligence",
      "IT Asset Management",
      "Managed Services",
      "IT Staff Augmentation",
    ],
    process: SHARED_LEADGEN_PROCESS,
    rawMetrics: {
      duration: "Monthly",
      bdsAllocation: "2 BDS",
      accountsTargeted: "400+ accounts",
      requirementsIdentified: 52,
      qualifiedLeads: 32,
    },
    computedRates: [
      {
        label: "Pipeline Qualification Rate",
        rate: cs4Rate,
        formatted: formatRate(cs4Rate),
        comment: "Source doc said 61.53%",
      },
    ],
    headlineKpis: [
      { metric: "400+", label: "Target Accounts", subtext: "Pan-India coverage" },
      { metric: "32", label: "Qualified Leads", subtext: "From 52 requirements" },
      { metric: formatRate(cs4Rate), label: "Success Rate", subtext: "Leads / Requirements" },
    ],
    outcome:
      "Generated high-quality enterprise opportunities across cloud, infrastructure, AI, and managed services.",
  },
  {
    id: "cs-5-dell-csg",
    category: "Lead Generation",
    title: "Dell Client Solutions Group (CSG)",
    client: "Dell CSG Distributor",
    isFlagship: true, // Featured flagship case study
    objective: "Generate sales-qualified opportunities for Dell Laptops, Desktops and Workstations.",
    solutions: ["Dell Laptops", "Dell Desktops", "Dell Workstations"],
    process: SHARED_LEADGEN_PROCESS,
    rawMetrics: {
      duration: "Monthly",
      bdsAllocation: "3 BDS",
      accountsTargeted: "350+ accounts",
      requirementsIdentified: 82,
      qualifiedLeads: 76,
      dealsClosed: 5,
      totalBusinessGenerated: "INR 2.15 Crore",
    },
    computedRates: [
      {
        label: "Qualification Rate",
        rate: cs5Rate,
        formatted: formatRate(cs5Rate),
        comment: "Source doc said 92.68%",
      },
    ],
    headlineKpis: [
      { metric: "INR 2.15 Cr", label: "Revenue Generated", subtext: "5 Confirmed Deals Closed" },
      { metric: "76", label: "Qualified Leads", subtext: "From 82 requirements" },
      { metric: formatRate(cs5Rate), label: "Success Rate", subtext: "Leads / Requirements" },
    ],
    outcome:
      "Delivered highly qualified opportunities that converted into confirmed purchase orders and significant revenue.",
  },
  {
    id: "cs-6-event-audience",
    category: "Events & Webinars",
    title: "Event Audience Acquisition",
    client: "Technology Distributors & Channel Partners",
    objective: "Drive targeted enterprise audience registrations for technology events.",
    solutions: [
      "Dell Storage",
      "IBM Data & AI",
      "Microsoft Azure & Copilot",
      "Dell CSG",
      "AWS Cloud",
      "IBM Security",
      "Rubrik CIO Events",
      "Gartner Event Audience Drive",
      "Partner Technology Events",
    ],
    process: [
      "Database Building & Decision-Maker Mapping",
      "Personalized Multi-Channel Outreach",
      "Registration & RSVP Drive",
      "Confirmation Calling & Reminders",
      "On-Ground Check-in Coordination",
      "Post-Event Performance Reporting",
    ],
    rawMetrics: {
      duration: "Monthly",
      bdsAllocation: "1 BDS per event",
      accountsTargeted: "300+ accounts",
      registrations: 105,
      attendanceConfirmations: 86,
      actualParticipants: 52,
    },
    computedRates: [
      {
        label: "Confirmation Rate",
        rate: cs6ConfirmationRate,
        formatted: formatRate(cs6ConfirmationRate),
        comment: "Source doc said 81.90%",
      },
      {
        label: "Participation Rate",
        rate: cs6ParticipationRate,
        formatted: formatRate(cs6ParticipationRate),
        comment: "Source doc said 60.69% — this is wrong, computed is 60.47%",
      },
    ],
    headlineKpis: [
      { metric: "105", label: "Registrations", subtext: "Targeted enterprise leaders" },
      { metric: formatRate(cs6ConfirmationRate), label: "Confirmation Rate", subtext: "86 Confirmed" },
      { metric: formatRate(cs6ParticipationRate), label: "Participation Rate", subtext: "52 Actual Attendees" },
    ],
    outcome:
      "Successfully attracted the right enterprise audience, creating valuable networking and business development opportunities for partners.",
  },
  {
    id: "cs-7-webinar-audience",
    category: "Events & Webinars",
    title: "Webinar Audience Generation",
    client: "Technology Distributors & Partners",
    objective: "Increase webinar registrations and maximize live attendance among enterprise decision-makers.",
    solutions: [
      "Rubrik Cloud & Data Security",
      "Rubrik Customer Lab Sessions",
      "Acronis Cloud Backup",
      "TeamViewer",
      "NetApp Storage & Backup",
      "Product Launch Webinars",
    ],
    process: [
      "Audience Persona Mapping",
      "Custom Email & Direct Invitation Outreach",
      "Webinar Registration Campaigns",
      "Multi-Touch Attendance Reminders",
      "Live Session Attendance Support",
      "Post-Webinar Lead Qualification",
    ],
    rawMetrics: {
      duration: "Monthly",
      bdsAllocation: "2 BDS per webinar",
      accountsTargeted: "400+ accounts",
      registrations: 210,
      confirmedAttendees: 95,
      liveParticipants: 40,
    },
    computedRates: [
      {
        label: "Confirmation Rate",
        rate: cs7ConfirmationRate,
        formatted: formatRate(cs7ConfirmationRate),
        comment: "Source doc said 50% — computed is 45.24%",
      },
      {
        label: "Live Participation Rate",
        rate: cs7ParticipationRate,
        formatted: formatRate(cs7ParticipationRate),
        comment: "Source doc said 42.94% — computed is 42.11%",
      },
    ],
    headlineKpis: [
      { metric: "210", label: "Registrations", subtext: "Enterprise registrants" },
      { metric: formatRate(cs7ConfirmationRate), label: "Confirmation Rate", subtext: "95 Confirmed Attendees" },
      { metric: formatRate(cs7ParticipationRate), label: "Live Attendance", subtext: "40 Active Attendees" },
    ],
    outcome:
      "Generated targeted webinar audiences, increased partner engagement, and identified qualified post-webinar sales opportunities through structured follow-up campaigns.",
  },
];
