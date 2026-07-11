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
    quote: "I've hired a lot of marketers. I've hired engineers. I've never found someone who thinks in both languages simultaneously until Praneeth. He wrote custom bidding scripts AND rewrote our onboarding copy in the same sprint. Monthly recurring revenue doubled in five months. I stopped asking how and just got out of his way.",
    author: "Marcus Vance",
    role: "VP of Growth & Acquisition",
    company: "SaaSified Metrics",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    metricHighlight: "2.1x Revenue Growth"
  },
  {
    id: "test-2",
    quote: "We were spending well. We just had no idea if it was working. Praneeth tore apart our attribution setup, rebuilt it in Looker Studio, and showed us that 30% of our 'best-performing' campaigns were actually cannibalizing organic conversions. Then he fixed it. CAC dropped 38%. The programmatic SEO system he built still generates qualified leads while we sleep.",
    author: "Elena Rostova",
    role: "Founder & CEO",
    company: "Lumiere Health DTC",
    avatarUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    metricHighlight: "-38% CAC Reduction"
  },
  {
    id: "test-3",
    quote: "He walked into our checkout flow audit and within 20 minutes named three exact points where users were dropping off — before seeing a single heatmap. He called it 'cognitive friction mapping.' I called it uncanny. We restructured the flow on his recommendation. Conversions went from 3.1% to 8.4% in six weeks. Nobody on our team had touched the checkout page in two years.",
    author: "David Chen",
    role: "Chief Marketing Officer",
    company: "NextGen Fintech Labs",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    metricHighlight: "8.4% Conversion Rate"
  }
];
