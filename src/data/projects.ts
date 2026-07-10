export type ProjectCategory = "campaign" | "creative" | "strategy" | "technical";

export interface ProjectMetric {
  label: string;
  value: string;
  change?: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  category: ProjectCategory;
  thumbnailUrl: string;
  coverUrl: string;
  summary: string;
  metrics: ProjectMetric[];
  techStack: string[];
  challenge: string;
  solution: string;
  outcome: string;
  liveUrl?: string;
  caseStudyUrl?: string;
  featured: boolean;
  bentoSpan?: "col-span-1 row-span-1" | "col-span-2 row-span-1" | "col-span-1 row-span-2" | "col-span-2 row-span-2";
}

export const projectsData: Project[] = [
  {
    id: "proj-1",
    title: "<PLACEHOLDER_PROJECT_1_TITLE> Omnichannel Performance Scale",
    slug: "omnichannel-performance-scale",
    tagline: "450% ROI Increase via Algorithmic Bidding & Creative Automation",
    category: "campaign",
    thumbnailUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    coverUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    summary: "<PLACEHOLDER_PROJECT_1_SUMMARY> Engineered and scaled a multi-platform paid acquisition ecosystem leveraging custom predictive bidding scripts and high-velocity ad creative testing.",
    metrics: [
      { label: "ROAS", value: "4.8x", change: "+210%" },
      { label: "CAC Reduction", value: "-38%", change: "QoQ" },
      { label: "Ad Spend Managed", value: "$450K+" }
    ],
    techStack: ["Google Ads API", "Meta Ads", "Python Automation", "GA4 BigQuery", "Looker Studio"],
    challenge: "<PLACEHOLDER_PROJECT_1_CHALLENGE> Traditional ad account structures were plateauing at $20K/mo spend with diminishing returns and creative fatigue.",
    solution: "<PLACEHOLDER_PROJECT_1_SOLUTION> Deployed automated creative testing pipelines paired with CS-driven audience clustering algorithms to dynamically reallocate budget to high-LTV cohorts.",
    outcome: "<PLACEHOLDER_PROJECT_1_OUTCOME> Scaled monthly profitable spend from $20K to $150K+ while slashing customer acquisition cost by nearly 40%.",
    liveUrl: "<PLACEHOLDER_PROJECT_1_LIVE_URL>",
    featured: true,
    bentoSpan: "col-span-2 row-span-2"
  },
  {
    id: "proj-2",
    title: "<PLACEHOLDER_PROJECT_2_TITLE> Programmatic SEO & Content Matrix",
    slug: "programmatic-seo-matrix",
    tagline: "2.4M Organic Annual Visitors Generated from Scratch",
    category: "technical",
    thumbnailUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    coverUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
    summary: "<PLACEHOLDER_PROJECT_2_SUMMARY> Architected a programmatic SEO framework synthesizing structured dataset APIs into 15,000+ high-intent landing pages.",
    metrics: [
      { label: "Organic Traffic", value: "2.4M/yr", change: "+1,200%" },
      { label: "Keywords Top 3", value: "4,850+" },
      { label: "Conversion Rate", value: "6.2%" }
    ],
    techStack: ["Next.js", "Node.js Scripts", "Ahrefs API", "JSON-LD Schema", "PostgreSQL"],
    challenge: "<PLACEHOLDER_PROJECT_2_CHALLENGE> Manual content creation could not keep pace with long-tail search intent across thousands of localized product categories.",
    solution: "<PLACEHOLDER_PROJECT_2_SOLUTION> Built a data pipeline to programmatically generate semantic, highly tailored pages enriched with dynamic schema markup and internal linking hubs.",
    outcome: "<PLACEHOLDER_PROJECT_2_OUTCOME> Captured dominant organic search market share within 8 months without relying on paid acquisition.",
    caseStudyUrl: "<PLACEHOLDER_PROJECT_2_CASE_STUDY>",
    featured: true,
    bentoSpan: "col-span-1 row-span-2"
  },
  {
    id: "proj-3",
    title: "<PLACEHOLDER_PROJECT_3_TITLE> Brand Identity & Conversion Engine",
    slug: "brand-identity-conversion-engine",
    tagline: "Neuromarketing-Driven Landing Page Overhaul",
    category: "creative",
    thumbnailUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    coverUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1600&q=80",
    summary: "<PLACEHOLDER_PROJECT_3_SUMMARY> Complete visual rebranding and interactive UI redesign focused on cognitive ease, Fitts's Law, and micro-animation feedback.",
    metrics: [
      { label: "Landing Page CVR", value: "8.4%", change: "+165%" },
      { label: "Bounce Rate", value: "24%", change: "-42%" },
      { label: "Time on Site", value: "3m 45s" }
    ],
    techStack: ["Figma", "React", "Tailwind CSS", "Framer Motion", "Hotjar UX Analytics"],
    challenge: "<PLACEHOLDER_PROJECT_3_CHALLENGE> High traffic from paid campaigns was leaking due to visual clutter, high cognitive friction, and unclear value propositions.",
    solution: "<PLACEHOLDER_PROJECT_3_SOLUTION> Redesigned the entire funnel using cognitive compulsion principles, interactive calculators, and social proof micro-reveals.",
    outcome: "<PLACEHOLDER_PROJECT_3_OUTCOME> More than doubled conversion rates instantly upon deployment, generating an additional $180K MRR.",
    featured: true,
    bentoSpan: "col-span-1 row-span-1"
  },
  {
    id: "proj-4",
    title: "<PLACEHOLDER_PROJECT_4_TITLE> Predictive LTV & Churn Analytics Hub",
    slug: "predictive-ltv-churn-analytics",
    tagline: "Full-Funnel Attribution & Customer Segmentation Dashboard",
    category: "strategy",
    thumbnailUrl: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
    coverUrl: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1600&q=80",
    summary: "<PLACEHOLDER_PROJECT_4_SUMMARY> Developed a multi-touch attribution model and churn prediction engine integrating CRM data with web behavioral events.",
    metrics: [
      { label: "Churn Reduction", value: "18.5%" },
      { label: "LTV Lift", value: "+34%" },
      { label: "Attribution Accuracy", value: "94%" }
    ],
    techStack: ["Python", "SQL", "Segment", "Mixpanel", "Looker"],
    challenge: "<PLACEHOLDER_PROJECT_4_CHALLENGE> Marketing spend decisions were blinded by last-click bias, obscuring true customer acquisition costs across a 60-day sales cycle.",
    solution: "<PLACEHOLDER_PROJECT_4_SOLUTION> Engineered custom Markov-chain attribution pipelines and automated churn risk alerts integrated into Slack and CRM workflows.",
    outcome: "<PLACEHOLDER_PROJECT_4_OUTCOME> Transformed capital allocation efficiency across all marketing channels, saving $120K in wasted ad budgets.",
    featured: true,
    bentoSpan: "col-span-2 row-span-1"
  },
  {
    id: "proj-5",
    title: "Bone Fracture Detection AI Pipeline",
    slug: "bone-fracture-detection-ai-pipeline",
    tagline: "Ensemble Deep Learning & Computer Vision Diagnostic Architecture",
    category: "technical",
    thumbnailUrl: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80",
    coverUrl: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1600&q=80",
    summary: "Designed an advanced computer vision pipeline leveraging ensemble deep learning to improve diagnostic robustness on medical imaging data.",
    metrics: [
      { label: "Model Accuracy", value: "94.8%", change: "+12.4%" },
      { label: "False Positives", value: "-31%" },
      { label: "Inference Speed", value: "42ms" }
    ],
    techStack: ["TensorFlow", "PyTorch", "OpenCV", "Python", "Docker"],
    challenge: "Medical X-ray imaging datasets frequently suffer from high noise, variable contrast, and class imbalance, degrading standard CNN diagnostic reliability.",
    solution: "Implemented rigorous preprocessing, custom augmentation pipelines, and an ensemble architecture combining multi-scale feature extractors for robust predictions.",
    outcome: "Translated theoretical ML diagnostic concepts into a highly generalizable, production-ready diagnostic evaluation pipeline.",
    featured: true,
    bentoSpan: "col-span-1 row-span-1"
  },
  {
    id: "proj-6",
    title: "Algorithmic Bus Scheduling & API Hub",
    slug: "algorithmic-bus-scheduling-api-hub",
    tagline: "Route Optimization Engine with Role-Based Access Control",
    category: "technical",
    thumbnailUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
    coverUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1600&q=80",
    summary: "Architected an algorithmic scheduling engine integrating live transport route APIs with granular role-based administrative control.",
    metrics: [
      { label: "Route Efficiency", value: "+28%" },
      { label: "API Response", value: "110ms" },
      { label: "Uptime", value: "99.9%" }
    ],
    techStack: ["Python", "REST APIs", "SQL", "JWT Auth", "System Design"],
    challenge: "Existing fleet schedules operated on static heuristics, leading to route delays, resource inefficiencies, and security loopholes during administrative updates.",
    solution: "Built a dynamic backend scheduling engine integrating external route APIs paired with strict JWT role-based access workflows for secure operational usage.",
    outcome: "Demonstrated production-grade algorithmic reasoning, high-concurrency API handling, and scalable system design.",
    featured: true,
    bentoSpan: "col-span-1 row-span-1"
  }
];
