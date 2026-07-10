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
    title: "<PLACEHOLDER_BLOG_1_TITLE> Engineering Cognitive Compulsion: Why UI Micro-Animations Drive 40%+ Higher CRO",
    slug: "engineering-cognitive-compulsion-ui-micro-animations",
    excerpt: "<PLACEHOLDER_BLOG_1_EXCERPT> How applying Fitts's Law, Hick's Law, and Von Restorff visual hierarchy transforms passive website visitors into high-LTV conversions.",
    date: "July 2, 2026",
    readTime: "6 min read",
    category: "Neuromarketing",
    coverUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "blog-2",
    title: "<PLACEHOLDER_BLOG_2_TITLE> Programmatic SEO at Scale: How I Built 15,000 Dynamic Pages with Next.js & Python",
    slug: "programmatic-seo-scale-15000-dynamic-pages",
    excerpt: "<PLACEHOLDER_BLOG_2_EXCERPT> A complete breakdown of the data pipelines, semantic schema generation, and internal linking hubs that captured 2.4M annual organic visits.",
    date: "June 18, 2026",
    readTime: "9 min read",
    category: "Programmatic SEO",
    coverUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "blog-3",
    title: "<PLACEHOLDER_BLOG_3_TITLE> Beyond Last-Click: Building a Custom Markov-Chain Attribution Pipeline in GA4 + BigQuery",
    slug: "custom-markov-chain-attribution-pipeline-ga4-bigquery",
    excerpt: "<PLACEHOLDER_BLOG_3_EXCERPT> Stop letting Google and Meta claim credit for organic conversions. Here's how to calculate true multi-touch CAC using SQL and Python.",
    date: "May 29, 2026",
    readTime: "11 min read",
    category: "Attribution Modeling",
    coverUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
  }
];
