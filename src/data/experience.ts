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
    role: "Digital Marketing Strategist & Apprentice (PGP)",
    company: "Digital Nest School of Business",
    period: "2026 — Present",
    location: "Hyderabad, Telangana, India",
    description: "Joined immediately after completing my Computer Science Engineering UG. Not just learning marketing — practicing it on real brands under real pressure. Every module is a live brief stress-tested against actual campaigns, live data, and client ROI.",
    achievements: [
      "Built custom attribution pipelines in GA4 + BigQuery that revealed where budgets were quietly bleeding — and plugged them.",
      "Redesigned landing page flows using Fitts's Law and cognitive load theory. The pages didn't just look better; they converted better.",
      "Ran and scaled performance campaigns across Meta and Google that could justify every rupee spent with a data trail."
    ]
  },
  {
    id: "exp-2",
    role: "AI/ML Engineer & Full Stack Developer (B.E. CSE)",
    company: "Chaitanya Bharathi Institute of Technology (CBIT)",
    period: "2022 — 2026",
    location: "Hyderabad, Telangana, India",
    description: "Where the obsession with systems started. Four years building things that actually run — not just pass peer review. From medical AI to transit optimization, the constraint was always the same: make it work in the real world.",
    achievements: [
      "Built a computer vision diagnostic system using ensemble deep learning (TensorFlow + PyTorch + OpenCV) that could flag bone fractures radiologists might miss — 94.8% accuracy, 42ms inference.",
      "Designed a bus scheduling engine from scratch: live route APIs, JWT role-based access, zero downtime. Built to survive real institutional load.",
      "Earned Oracle Cloud Infrastructure AI Foundations certification — not because it was required, but because cloud deployment was the next gap to close."
    ]
  }
];



