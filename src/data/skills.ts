export interface SkillItem {
  name: string;
  category: "Marketing Strategy" | "Technical & CS" | "Analytics & Data" | "Creative & UX";
  level: number; // 1 to 100
  highlighted?: boolean;
}

export const skillsData: SkillItem[] = [
  // Technical & CS (AI/ML & Full Stack Engineering)
  { name: "Python / Data Scripting", category: "Technical & CS", level: 94, highlighted: true },
  { name: "TensorFlow & PyTorch (AI/ML)", category: "Technical & CS", level: 90, highlighted: true },
  { name: "Generative AI & LLM Automation", category: "Technical & CS", level: 96, highlighted: true },
  { name: "React, Next.js & Tailwind CSS", category: "Technical & CS", level: 88, highlighted: true },
  { name: "REST APIs & Backend Integration", category: "Technical & CS", level: 92 },
  { name: "SQL & BigQuery Database Mgmt", category: "Technical & CS", level: 86 },
  { name: "Docker, Linux & CI/CD Pipelines", category: "Technical & CS", level: 84 },
  { name: "Programmatic SEO & Tech Audits", category: "Technical & CS", level: 95, highlighted: true },

  // Marketing Strategy & Performance
  { name: "Omnichannel Performance Ads (Google, Meta, LinkedIn)", category: "Marketing Strategy", level: 96, highlighted: true },
  { name: "Conversion Rate Optimization (CRO & A/B Testing)", category: "Marketing Strategy", level: 98, highlighted: true },
  { name: "Account-Based Marketing (ABM & B2B Lead Gen)", category: "Marketing Strategy", level: 92 },
  { name: "E-Commerce Strategy (WooCommerce & Razorpay)", category: "Marketing Strategy", level: 90 },
  { name: "Marketing Automation (Zapier, Drip, WhatsApp Bots)", category: "Marketing Strategy", level: 94, highlighted: true },
  { name: "Neuromarketing & UX Buyer Journey Mapping", category: "Marketing Strategy", level: 94, highlighted: true },

  // Analytics & Data Attribution
  { name: "GA4 & BigQuery Multi-Touch Attribution", category: "Analytics & Data", level: 94, highlighted: true },
  { name: "Looker Studio & GTM Tag Automation", category: "Analytics & Data", level: 95, highlighted: true },
  { name: "Google Search Console & SERP Indexing", category: "Analytics & Data", level: 92 },
  { name: "Heatmaps & User Behavior Analytics (Hotjar)", category: "Analytics & Data", level: 92 },

  // Creative & UX Engineering
  { name: "AI-Driven Ad Creative & Video Generation", category: "Creative & UX", level: 95, highlighted: true },
  { name: "Figma Prototyping & Visual Storytelling", category: "Creative & UX", level: 86 },
  { name: "Direct Response & Conversion Copywriting", category: "Creative & UX", level: 92 },
  { name: "Micro-Animation & Fitts's Law UI Design", category: "Creative & UX", level: 88 }
];
