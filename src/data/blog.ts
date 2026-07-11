export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: "Growth Engineering" | "Neuromarketing" | "Programmatic SEO" | "Attribution Modeling";
  coverUrl: string;
}

export const blogPostsData: BlogPost[] = [
  {
    id: "blog-1",
    title: "Why Your Visitors Leave in 3 Seconds (And the Neurological Fix No One Talks About)",
    slug: "engineering-cognitive-compulsion-ui-micro-animations",
    excerpt: "Fitts's Law, Hick's Law, Von Restorff — these aren't academic footnotes. They're the invisible code running in every user's brain as they hit your site. Here's exactly how to write UI that exploits all three and turns passive scrollers into buyers who feel like they decided on their own.",
    date: "July 2, 2026",
    readTime: "6 min read",
    category: "Neuromarketing",
    coverUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "blog-2",
    title: "I Built 15,000 Pages in 48 Hours. Here's Every Line of Code.",
    slug: "programmatic-seo-scale-15000-dynamic-pages",
    excerpt: "Not a playbook. Not a framework. The actual Next.js + Python pipeline I used to generate, index, and interlink 15,000 programmatic pages — resulting in 2.4M annual organic visits. Read this only if you're ready to stop publishing and start engineering content.",
    date: "June 18, 2026",
    readTime: "9 min read",
    category: "Programmatic SEO",
    coverUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "blog-3",
    title: "You're Giving Google and Meta Credit They Didn't Earn. Here's How to Take It Back.",
    slug: "custom-markov-chain-attribution-pipeline-ga4-bigquery",
    excerpt: "Last-click attribution is a polite lie your ad platforms tell you. A Markov-chain model in GA4 + BigQuery tells a very different story — one where your SEO and email sequences deserve the revenue credit they've always earned. Here's the SQL to prove it.",
    date: "May 29, 2026",
    readTime: "11 min read",
    category: "Attribution Modeling",
    coverUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
  }
];
