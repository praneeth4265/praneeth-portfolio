export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "<PLACEHOLDER_EXP_1_ROLE> Head of Growth & Technical Marketing",
    company: "<PLACEHOLDER_EXP_1_COMPANY> Apex Scale Labs",
    period: "2024 — Present",
    location: "Remote / Hybrid",
    description: "<PLACEHOLDER_EXP_1_DESC> Leading multi-channel performance marketing, growth engineering, and data attribution systems for high-growth DTC & B2B SaaS clients.",
    achievements: [
      "Architected predictive bidding algorithms scaling client ad budgets to $450K/month at profitable ROAS.",
      "Engineered automated programmatic SEO pipelines capturing 2.4M organic visits annually across client portfolios.",
      "Managed cross-functional team of data analysts, media buyers, and frontend UX engineers."
    ]
  },
  {
    id: "exp-2",
    role: "<PLACEHOLDER_EXP_2_ROLE> Senior Performance Growth Engineer",
    company: "<PLACEHOLDER_EXP_2_COMPANY> Conversion Matrix Inc.",
    period: "2022 — 2024",
    location: "San Francisco, CA (Remote)",
    description: "<PLACEHOLDER_EXP_2_DESC> Bridged computer science engineering with full-funnel digital marketing to optimize conversion rates and automated retention loops.",
    achievements: [
      "Redesigned core landing page experiences, driving +165% conversion rate lift via cognitive compulsion UI patterns.",
      "Built custom GA4 + BigQuery multi-touch attribution models replacing inaccurate last-click tracking.",
      "Created automated creative testing workflows using Python script automation."
    ]
  },
  {
    id: "exp-3",
    role: "<PLACEHOLDER_EXP_3_ROLE> Digital Marketing Strategist & Analyst",
    company: "<PLACEHOLDER_EXP_3_COMPANY> Nexus Brand Collective",
    period: "2020 — 2022",
    location: "New York, NY",
    description: "<PLACEHOLDER_EXP_3_DESC> Managed paid search, social media acquisition, and technical SEO audits while pursuing postgraduate Digital Marketing studies.",
    achievements: [
      "Consistently beat CAC targets by over 30% through rigorous audience segmentation and ad copy split testing.",
      "Led end-to-end technical SEO migrations for 14 enterprise websites with zero traffic loss.",
      "Developed interactive client reporting dashboards using Looker Studio and custom SQL connectors."
    ]
  }
];
