export interface SkillItem {
  name: string;
  category: "Marketing Strategy" | "Technical & CS" | "Analytics & Data" | "Creative & UX";
  level: number; // 1 to 100
  highlighted?: boolean;
}

export const skillsData: SkillItem[] = [
  // Technical & CS
  { name: "Python / Scripting", category: "Technical & CS", level: 90, highlighted: true },
  { name: "JavaScript / TypeScript", category: "Technical & CS", level: 88, highlighted: true },
  { name: "React / Next.js / Tailwind", category: "Technical & CS", level: 85, highlighted: true },
  { name: "SQL & Database Queries", category: "Technical & CS", level: 85 },
  { name: "Programmatic SEO Automation", category: "Technical & CS", level: 95, highlighted: true },
  { name: "REST APIs & Webhooks", category: "Technical & CS", level: 90 },

  // Marketing Strategy
  { name: "Omnichannel Paid Acquisition", category: "Marketing Strategy", level: 95, highlighted: true },
  { name: "Conversion Rate Optimization (CRO)", category: "Marketing Strategy", level: 98, highlighted: true },
  { name: "Performance Brand Architecture", category: "Marketing Strategy", level: 92 },
  { name: "Lifecycle & Retention Engineering", category: "Marketing Strategy", level: 88 },
  { name: "Neuromarketing & UX Psychology", category: "Marketing Strategy", level: 94, highlighted: true },

  // Analytics & Data
  { name: "GA4 & BigQuery Attribution", category: "Analytics & Data", level: 92, highlighted: true },
  { name: "Looker Studio Dashboards", category: "Analytics & Data", level: 95 },
  { name: "Predictive LTV Modeling", category: "Analytics & Data", level: 86 },
  { name: "A/B & Multivariate Testing", category: "Analytics & Data", level: 96, highlighted: true },

  // Creative & UX
  { name: "Ad Creative Engineering", category: "Creative & UX", level: 90 },
  { name: "Figma UI/UX Prototyping", category: "Creative & UX", level: 85 },
  { name: "Direct Response Copywriting", category: "Creative & UX", level: 92, highlighted: true },
  { name: "Micro-Animation Strategy", category: "Creative & UX", level: 88 }
];
