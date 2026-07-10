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
    role: "Digital Marketing Strategist & Apprentice",
    company: "Digital Nest School of Business (PGP '26)",
    period: "2024 — Present",
    location: "Hyderabad, Telangana, India",
    description: "Architecting full-funnel digital marketing strategies, conversion rate optimization (CRO), and omnichannel performance campaigns.",
    achievements: [
      "Engineered data-driven growth models and automated reporting pipelines integrating GA4 and custom tracking scripts.",
      "Optimized landing page UX and conversion funnels leveraging neuromarketing and Fitts's Law principles.",
      "<PLACEHOLDER_EXP_1_ACHIEVEMENT> Managed and scaled performance ad campaigns across Meta and Google Ads ecosystems."
    ]
  },
  {
    id: "exp-2",
    role: "AI/ML Engineer & Full Stack Developer (B.E.)",
    company: "Chaitanya Bharathi Institute of Technology (CBIT)",
    period: "Nov 2022 — May 2026",
    location: "Hyderabad, Telangana, India",
    description: "Pursuing Bachelor of Engineering in Computer Science (AI & ML), translating complex algorithmic concepts into practical high-performance software systems.",
    achievements: [
      "Designed a computer vision pipeline using ensemble deep learning (TensorFlow, PyTorch, OpenCV) for robust medical imaging diagnostic workflows.",
      "Architected an algorithmic bus scheduling optimization system with secure role-based access and REST API integration.",
      "Earned Oracle Cloud Infrastructure 2025 AI Foundations Associate and HackerRank Software Engineer Intern Role certifications."
    ]
  },
  {
    id: "exp-3",
    role: "Events Head & Technical Coordinator",
    company: "NeuralNexus Club, CBIT",
    period: "2023 — 2025",
    location: "Hyderabad, Telangana, India",
    description: "Spearheaded technical and AI-focused campus initiatives, bridging leadership with practical tech execution.",
    achievements: [
      "Led end-to-end execution of high-impact AI workshops, hackathons, and technical symposiums.",
      "Directed cross-functional student engineering teams and stakeholder communications.",
      "<PLACEHOLDER_EXP_3_ACHIEVEMENT> Orchestrated cross-disciplinary workshops combining tech innovation with strategic marketing outreach."
    ]
  }
];
