export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  iconName: "calendar-check" | "target" | "ticket" | "layers" | "workflow" | "trending-up" | "handshake" | "database";
  deliverables: string[];
}

export const servicesHeader = {
  eyebrow: "OUR SERVICES",
  headline: "Marketing Services",
  subheadline:
    "End-to-end B2B demand generation solutions tailored for technology OEMs, distributors, and channel partners across India.",
};

export const servicesList: ServiceItem[] = [
  {
    id: "appointment-setting",
    number: "01",
    title: "Appointment Setting",
    shortDescription:
      "We connect your sales team with key decision-makers by scheduling qualified meetings, allowing you to focus on closing business opportunities.",
    iconName: "calendar-check",
    deliverables: [
      "ICP & Account Validation",
      "Interest & Intent Qualification",
      "Meeting Scheduling & Confirmation",
      "Follow-Ups & Reminders",
      "Meeting With Partner",
      "Appointment Delivered",
    ],
  },
  {
    id: "lead-generation",
    number: "02",
    title: "Lead Generation",
    shortDescription:
      "Identify and engage high-quality prospects through targeted outbound and inbound strategies, delivering qualified leads that match your ideal customer profile.",
    iconName: "target",
    deliverables: [
      "ICP-Based Lead Database",
      "Requirement Qualification",
      "Meeting Scheduling & Confirmation",
      "Follow-Ups & Reminders",
      "Lead Validation Meeting With Partner",
      "Lead Delivered",
    ],
  },
  {
    id: "event-marketing",
    number: "03",
    title: "Virtual & Physical Event Marketing",
    shortDescription:
      "We drive targeted registrations and meaningful engagement through strategic outreach, audience building, event promotions and post-event follow-ups.",
    iconName: "ticket",
    deliverables: [
      "Database Building & Decision-Maker Mapping",
      "Event Promotion & Personalized Outreach",
      "Registration & RSVP Generation",
      "Registration Confirmation & Reminders",
      "On-Ground / Virtual Audience Drive",
      "Event Performance & Attendance Reports",
    ],
  },
  {
    id: "account-based-marketing",
    number: "04",
    title: "Account-Based Marketing (ABM)",
    shortDescription:
      "We focus on high-value target accounts with personalized strategies that engage key decision-makers, build meaningful relationships and create qualified opportunities for sustainable business growth.",
    iconName: "layers",
    deliverables: [
      "Target Account Identification & Mapping",
      "Account Intelligence & Research",
      "Multi-Channel Account Engagement",
      "Lead Nurturing & Follow-Ups",
      "Qualified Opportunities & Account Insights",
      "Campaign Performance & ROI Reporting",
    ],
  },
  {
    id: "marketing-automation",
    number: "05",
    title: "Marketing Automation",
    shortDescription:
      "We streamline marketing with automated workflows that nurture prospects, personalize engagement and track customer journeys—helping you improve efficiency, accelerate lead conversion and drive measurable growth.",
    iconName: "workflow",
    deliverables: [
      "Marketing Automation Strategy & Planning",
      "Automated Email & Outreach Campaigns",
      "Lead Capture, Segmentation & Nurturing",
      "Prospect Scoring & Qualification",
      "Personalized Customer Journeys",
      "Follow-Up & Engagement Automation",
      "CRM & Marketing Platform Integration",
      "Campaign Tracking & Analytics",
      "Performance & Conversion Reporting",
    ],
  },
  {
    id: "digital-marketing",
    number: "06",
    title: "Digital Marketing",
    shortDescription:
      "We create targeted digital campaigns that strengthen brand visibility, engage the right audience and generate measurable traffic, leads and business opportunities across relevant digital channels.",
    iconName: "trending-up",
    deliverables: [
      "Digital Marketing Strategy & Planning",
      "Target Audience & Campaign Segmentation",
      "Search Engine & Social Media Campaigns",
      "Content & Creative Development",
      "Lead Generation Campaigns",
      "Landing Page & Conversion Optimization",
      "Campaign Monitoring & Performance Tracking",
      "Analytics, Insights & ROI Reporting",
    ],
  },
  {
    id: "sales-outsourcing",
    number: "07",
    title: "Sales Outsourcing",
    shortDescription:
      "Extend your sales capabilities with a focused, experienced team that manages prospecting, engagement, qualification and pipeline development—helping you accelerate opportunities while staying focused on your core business.",
    iconName: "handshake",
    deliverables: [
      "Sales Strategy & Market Mapping",
      "Prospecting & Lead Generation",
      "Lead Qualification & Nurturing",
      "Quotation Sharing",
      "Negotiations",
      "Purchase Order",
      "Payment Intimation",
      "Delivery and Profit Sharing",
    ],
  },
  {
    id: "database-building",
    number: "08",
    title: "Database Building & Management",
    shortDescription:
      "We build accurate, targeted and well-structured databases aligned with your ICP, enabling effective prospecting, personalized outreach and consistent lead generation.",
    iconName: "database",
    deliverables: [
      "Target Account Identification",
      "ICP-Based Database Building",
      "Decision Maker & Contact Data Verification",
      "Industry & Account Segmentation & Profiling",
      "Database Cleaning, Updating & Removal",
      "Campaign-Ready Prospect Lists",
      "Database Reports & Insights",
    ],
  },
];
