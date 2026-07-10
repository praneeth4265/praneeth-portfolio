export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl: string;
  metricHighlight?: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "test-1",
    quote: "<PLACEHOLDER_TESTIMONIAL_1_QUOTE> Combining computer science precision with growth marketing genius is rare. Their custom bidding scripts and landing page overhauls doubled our revenue in 6 months.",
    author: "<PLACEHOLDER_TESTIMONIAL_1_AUTHOR> Marcus Vance",
    role: "VP of Growth & Acquisition",
    company: "SaaSified Metrics",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    metricHighlight: "2x Revenue in 6 Months"
  },
  {
    id: "test-2",
    quote: "<PLACEHOLDER_TESTIMONIAL_2_QUOTE> We hired them to fix our leaky funnel. Not only did they slash our CAC by 38%, but the programmatic SEO engine they built continues to drive thousands of high-intent leads on autopilot.",
    author: "<PLACEHOLDER_TESTIMONIAL_2_AUTHOR> Elena Rostova",
    role: "Founder & CEO",
    company: "Lumiere Health DTC",
    avatarUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    metricHighlight: "-38% CAC Reduction"
  },
  {
    id: "test-3",
    quote: "<PLACEHOLDER_TESTIMONIAL_3_QUOTE> The understanding of neuromarketing and UI/UX cognitive ease is unmatched. Our conversion rates went from 3.1% to 8.4% almost instantly after the new brand identity launched.",
    author: "<PLACEHOLDER_TESTIMONIAL_3_AUTHOR> David Chen",
    role: "Chief Marketing Officer",
    company: "NextGen Fintech Labs",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    metricHighlight: "8.4% Conversion Rate"
  }
];
