export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  linkText?: string;
  linkHref?: string;
}

export const homeFaqItems: FaqItem[] = [
  {
    id: "faq-1",
    question: "Which industries do you work in?",
    answer: "Technology, IT Infrastructure, Healthcare, Education, Real Estate and Retail.",
  },
  {
    id: "faq-2",
    question: "Who do you work with?",
    answer: "Technology companies, OEMs, partners, distributors and channel partners.",
  },
  {
    id: "faq-3",
    question: "How does a campaign run?",
    answer: "We follow a structured 4-step methodology: Strategy (ICP and market definition), Reach (targeted database and outreach), Engage (prospect qualification and conversations), and Convert (handing off sales-ready opportunities).",
  },
  {
    id: "faq-4",
    question: "How long is a campaign cycle?",
    answer: "The campaigns in our case studies run on a monthly cycle.",
  },
  {
    id: "faq-5",
    question: "Where do you operate?",
    answer: "Pan-India outreach.",
  },
  {
    id: "faq-6",
    question: "How do I get started?",
    answer: "Book a free consultation with our team to discuss your target accounts and pipeline goals.",
    linkText: "Book a free consultation",
    linkHref: "/contact",
  },
];
