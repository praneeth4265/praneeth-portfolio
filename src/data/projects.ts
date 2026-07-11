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
    id: "dn-1",
    title: "Market Research for Sugar Cosmetics",
    slug: "market-research-sugar-cosmetics",
    tagline: "Sugar had saturated urban India. I found where ₹340 Cr was hiding next.",
    category: "strategy",
    thumbnailUrl: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80",
    coverUrl: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1600&q=80",
    summary: "Sugar Cosmetics built a premium brand in Tier-1 India. The hard part was growing beyond it without losing what made it premium. I mapped the growth opportunity in Tier-2 and Tier-3 markets down to product formulation gaps, price sensitivity bands, and regional buyer psychology — and handed them a playbook, not just a report.",
    metrics: [
      { label: "Target TAM", value: "₹15,000+ Cr" },
      { label: "Tier-2 D2C Growth Opportunity", value: "+45%" },
      { label: "Brand Recall Score", value: "88%" }
    ],
    techStack: ["Google Analytics 4", "SEMrush", "Looker Studio", "Python Data Scraping", "SWOT & PESTEL Matrix"],
    challenge: "Rising CAC in metro India was the symptom. The disease was over-reliance on markets that had already seen peak returns. Expanding into Tier-2 meant entering regions with radically different buying triggers, competitive dynamics, and formulation preferences — without diluting a hard-won premium perception.",
    solution: "Ran sentiment analysis on 40,000+ regional social reviews. Cross-referenced price elasticity data with product category trends. Identified a critical formulation gap: sweat-proof matte formulas almost entirely absent in non-metro retail. Mapped 6 distinct regional buyer personas with specific willingness-to-pay thresholds.",
    outcome: "Delivered an actionable omnichannel positioning playbook identifying a ₹340 Cr incremental revenue pipeline in non-metro India — specific, credible, and immediately executable.",
    liveUrl: "https://github.com/iiampraneeth",
    featured: true,
    bentoSpan: "col-span-2 row-span-2"
  },
  {
    id: "dn-2",
    title: "Blinkit Video Ad Creatives",
    slug: "blinkit-video-ad-creatives",
    tagline: "You have 1.2 seconds. After that, they're gone. I engineered the hook.",
    category: "creative",
    thumbnailUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
    coverUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=80",
    summary: "Quick-commerce lives and dies in the first two seconds of a video ad. I designed a series of short-form creatives for Blinkit that made stopping feel involuntary — high-contrast visual hooks, synchronized countdown rhythms, and the specific auditory triggers that activate urgency without shouting.",
    metrics: [
      { label: "3-Sec Hook Rate", value: "64.2%", change: "+185%" },
      { label: "Cost Per Install", value: "-42%" },
      { label: "Conversion Rate", value: "9.4%" }
    ],
    techStack: ["Adobe Premiere Pro", "After Effects", "Midjourney AI", "Meta Ads Manager", "CapCut Pro"],
    challenge: "The average Indian Reels user has been conditioned to skip in under 1.5 seconds. Blinkit's competitive noise was brutal — every quick-commerce player running the same delivery-speed value proposition with stock footage and countdown timers.",
    solution: "Applied Von Restorff effect: made the first frame visually dissonant from everything around it. Split-screen time-lapses of instant grocery unpacking, rhythmic auditory cues synced precisely to delivery countdown beats. No voiceover. No generic music. Just pattern interruption that the brain can't scroll past.",
    outcome: "64.2% 3-second video retention. Cost per app install dropped 42%. The instinct of most ad teams to add more information — I did the opposite and removed it.",
    liveUrl: "https://github.com/iiampraneeth",
    featured: true,
    bentoSpan: "col-span-1 row-span-2"
  },
  {
    id: "dn-3",
    title: "Replicating RazorPay Website",
    slug: "replicating-razorpay-website",
    tagline: "Pixel-perfect isn't the achievement. Zero layout shift at 0.4s load is.",
    category: "creative",
    thumbnailUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
    coverUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1600&q=80",
    summary: "I rebuilt the Razorpay homepage from the ground up — not as an exercise in copying, but as a study in why enterprise fintech UX works at a molecular level. Every hover state, every micro-interaction, every trust signal placement was reverse-engineered and reconstructed with intentional precision.",
    metrics: [
      { label: "Lighthouse Score", value: "99/100" },
      { label: "First Contentful Paint", value: "0.4s" },
      { label: "Interactive CVR", value: "12.8%" }
    ],
    techStack: ["React 19", "Tailwind CSS v4", "Framer Motion", "TypeScript", "Vite"],
    challenge: "Fintech UI complexity at enterprise scale: real-time transaction tickers, interactive fee calculators, layered navigation menus — all rendering without cumulative layout shift on mobile, where 68% of fintech traffic actually arrives.",
    solution: "Modular component architecture with Tailwind tokens, Framer Motion spring physics for hover states that feel physical rather than animated, and vector graphics loaded lazily with blur-up placeholders that maintain perceived speed at every connection quality.",
    outcome: "Lighthouse 99. First paint at 0.4s. Zero CLS. Proved that enterprise design complexity and performance optimization are not in conflict — they require the same discipline.",
    liveUrl: "https://github.com/iiampraneeth",
    featured: true,
    bentoSpan: "col-span-1 row-span-1"
  },
  {
    id: "dn-4",
    title: "Nykaa Inspired E-com Website",
    slug: "nykaa-inspired-ecom-website",
    tagline: "Beauty shoppers have zero patience for friction. So I removed all of it.",
    category: "creative",
    thumbnailUrl: "/images/nykaa_store.png",
    coverUrl: "/images/nykaa_store.png",
    summary: "Built a D2C beauty storefront architected around one insight: beauty buyers make emotional decisions, then rational ones. The storefront needed to feel premium before a single product image loaded — and then make selecting between 400 shade variants feel effortless.",
    metrics: [
      { label: "Cart Abandonment", value: "-34%" },
      { label: "Average Order Value", value: "+28%" },
      { label: "Search Latency", value: "<50ms" }
    ],
    techStack: ["Next.js", "React Hooks", "Tailwind CSS", "Redux Toolkit", "Stripe API Integration"],
    challenge: "Beauty e-commerce is where cognitive overload meets purchase anxiety. Hundreds of SKUs, multiple shade attributes, uncertain 'does this match my skin tone?' hesitation — all leading to cart abandonment at the exact moment of peak intent.",
    solution: "Client-side indexing for instant multi-attribute filtering (under 50ms, no server roundtrip). High-resolution images with blur-up placeholders that make the site feel loaded before it is. Single-page checkout flow designed around the principle that fewer fields don't just reduce time — they reduce perceived commitment.",
    outcome: "Cart abandonment dropped 34%. Average order value climbed 28%. The purchase felt easy, which made the product feel more premium. UX and brand perception are not separate disciplines.",
    liveUrl: "https://github.com/iiampraneeth",
    featured: true,
    bentoSpan: "col-span-2 row-span-1"
  },
  {
    id: "dn-5",
    title: "SEO Optimization for PolicyBazaar",
    slug: "seo-optimization-policybazaar",
    tagline: "3,450 keywords in Google's Top 3. Not by luck. By architecture.",
    category: "strategy",
    thumbnailUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    coverUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
    summary: "Online insurance search is a war fought on Google under YMYL rules — where E-E-A-T violations get you buried and one structural SEO mistake can cost millions in organic revenue. I rebuilt PolicyBazaar's technical SEO foundation from the crawl layer up.",
    metrics: [
      { label: "Top-3 Keywords", value: "3,450+" },
      { label: "Organic Traffic Lift", value: "+310%" },
      { label: "Domain Authority", value: "+14 Pts" }
    ],
    techStack: ["Ahrefs", "Screaming Frog", "Google Search Console", "JSON-LD Schema", "Python NLP Scripts"],
    challenge: "Legacy insurance aggregators have years of technical debt — orphaned pages, crawl budget waste, indexation bottlenecks, and structured data that existed in name only. Meanwhile, Google's YMYL standards demand credibility signals that most technical SEO teams don't know how to engineer.",
    solution: "Full technical audit to surface and resolve every indexation bottleneck. Deployed dynamic FinancialProduct JSON-LD schema across 500+ comparison pages — not static boilerplate, but schema generated programmatically from live product data. Built an internal link equity cascade designed to pass authority directly to bottom-of-funnel conversion pages.",
    outcome: "3,450+ commercial-intent keywords broke into Google's Top 3 positions. Organic traffic lifted 310%. Domain Authority gained 14 points. The investment in technical infrastructure — not more content — was the lever.",
    liveUrl: "https://github.com/iiampraneeth",
    featured: true,
    bentoSpan: "col-span-1 row-span-1"
  },
  {
    id: "dn-6",
    title: "Google Ads for Acko Car Insurance",
    slug: "google-ads-acko-car-insurance",
    tagline: "Turned a leaking ad budget into a 5.4x ROAS machine. The math is in the architecture.",
    category: "campaign",
    thumbnailUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
    coverUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80",
    summary: "Auto insurance Google Ads campaigns are plagued by click fraud and match-type bleed — broad keywords vacuuming up budget from users who wanted information, not a policy. I rebuilt Acko's campaigns from query intent architecture to automated bid logic, and the revenue followed.",
    metrics: [
      { label: "Cost Per Lead (CPL)", value: "-44%" },
      { label: "Conversion Rate", value: "14.2%" },
      { label: "Verified ROAS", value: "5.4x" }
    ],
    techStack: ["Google Ads API", "GA4 BigQuery", "Looker Studio", "Negative Keyword Matrix", "RSA Testing"],
    challenge: "Insurance ad budgets evaporate on informational queries. 'What is third-party insurance?' was eating budget meant for 'buy car insurance today.' Broad match was generating clicks, impressions, and zero policies.",
    solution: "4-tier exact/phrase match architecture. 2,500+ negative keyword exclusion list updated weekly via automated scripts. Bid modifier logic that adjusted in real-time based on device, time-of-day, and geographic vehicle ownership density signals pulled from BigQuery.",
    outcome: "Lead acquisition cost down 44%. Daily policy quote submissions scaled from 350 to 890+. ROAS verified at 5.4x. The insight: better architecture beats bigger budgets every time.",
    liveUrl: "https://github.com/iiampraneeth",
    featured: true,
    bentoSpan: "col-span-2 row-span-1"
  },
  {
    id: "dn-7",
    title: "Bewakoof Monthly Content Calendar",
    slug: "bewakoof-monthly-content-calendar",
    tagline: "8.6% organic engagement. No paid boost. No agency. Just one very precise content system.",
    category: "creative",
    thumbnailUrl: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800&q=80",
    coverUrl: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1600&q=80",
    summary: "Bewakoof's entire brand is built on the feeling that they're in on the joke with you. The content strategy can't feel like a brand imitating youth culture — it has to be youth culture. I built a systematic framework that made that authenticity repeatable at scale.",
    metrics: [
      { label: "Organic Reach", value: "3.8M" },
      { label: "Engagement Rate", value: "8.6%" },
      { label: "Share-to-Like Ratio", value: "1:4" }
    ],
    techStack: ["Instagram Reels API", "Canva Pro", "Notion Calendar", "Social Blade", "Meta Creator Studio"],
    challenge: "Every brand wants to be 'relatable.' Most end up looking like a corporation wearing a meme costume. The moment you feel the brand trying too hard, the audience feels it too — and they leave.",
    solution: "Built a 3-Pillar Content Matrix: 40% trend-jacking memes rooted in genuine cultural moments (not yesterday's news), 35% UGC community challenges that made followers feel like co-creators, 25% product teasers so subtle they felt like inside jokes. Every post mapped to peak engagement windows validated by 90-day sentiment data.",
    outcome: "3.8M organic reach. 8.6% engagement rate — 6x the platform average. 45,000+ direct profile visits. Real D2C revenue lift attributable to specific content formats, not guessed at.",
    liveUrl: "https://github.com/iiampraneeth",
    featured: true,
    bentoSpan: "col-span-1 row-span-1"
  },
  {
    id: "dn-8",
    title: "Swiggy Facebook Ad Campaign",
    slug: "swiggy-facebook-ad-campaign",
    tagline: "Hungry users scroll fast. I made them stop at exactly the right second.",
    category: "campaign",
    thumbnailUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
    coverUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1600&q=80",
    summary: "Food delivery conversion is a timing game. The user who orders at 12:47 PM on a Tuesday is a completely different human than the one at 8:30 PM on a Saturday. I built a Meta campaign that understood the difference — and spoke to each one at exactly the right moment.",
    metrics: [
      { label: "Verified ROAS", value: "4.6x" },
      { label: "App Re-Activation Lift", value: "+68%" },
      { label: "Cost Per Order", value: "₹48" }
    ],
    techStack: ["Meta Ads Manager", "Dynamic Creative Optimization (DCO)", "Meta Pixel API", "Looker Studio"],
    challenge: "Swiggy's biggest competitor isn't Zomato. It's inertia — the decision to just cook something, or not eat at all. Breaking that inertia on a crowded feed requires more than a discount. It requires a craving.",
    solution: "Deployed Meta DCO with macro food videography (shot to trigger salivary response, not just product interest) paired with urgency overlays timed to actual hunger windows. Segmented by 1% Lookalike cohorts built from high-frequency weekend orderers — people already trained to order, who just needed the right trigger to fire.",
    outcome: "4.6x ROAS. ₹48 Cost Per Order maintained at scale. App re-activation lifted 68% in lapsed user cohorts. The campaign felt like a craving, not an advertisement.",
    liveUrl: "https://github.com/iiampraneeth",
    featured: true,
    bentoSpan: "col-span-2 row-span-1"
  },
  {
    id: "dn-9",
    title: "Email Marketing with Mailchimp",
    slug: "email-marketing-mailchimp",
    tagline: "32% of total store revenue. From emails. Sent while the team slept.",
    category: "strategy",
    thumbnailUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    coverUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1600&q=80",
    summary: "Most email marketing is shouting into an inbox. Mine listens first. I designed a behavioral lifecycle system that didn't send based on a calendar — it sent based on what a user just did, or stopped doing. The automation worked because it felt like the right message arrived at the right moment by coincidence.",
    metrics: [
      { label: "Average Open Rate", value: "48.4%" },
      { label: "Click-Through Rate", value: "12.6%" },
      { label: "Automated Revenue Share", value: "32%" }
    ],
    techStack: ["Mailchimp Automation", "HTML/CSS Email Templates", "Zapier Webhooks", "Python Analytics"],
    challenge: "Batch-and-blast newsletters have destroyed email as a performance channel for most brands. Average industry open rates sit below 15%. Every promotional email trains subscribers to ignore the next one — until they unsubscribe.",
    solution: "5-stage behavioral trigger architecture: Welcome Nurture → Browse Abandonment → Cart Recovery → Post-Purchase Upsell → Win-Back for dormant segments. Each triggered by actual user behavior, personalized by RFM scoring (Recency, Frequency, Monetary value), timed to individual engagement patterns rather than send-time optimization averages.",
    outcome: "48.4% average open rate — more than triple the industry average. 12.6% CTR. 32% of total store revenue generated automatically. The best sales team doesn't sleep and never has a bad day.",
    liveUrl: "https://github.com/iiampraneeth",
    featured: true,
    bentoSpan: "col-span-1 row-span-1"
  },
  {
    id: "dn-10",
    title: "Building a Landing Page",
    slug: "building-high-converting-landing-page",
    tagline: "11.4% mobile conversion rate. The industry average is 3.2%. Here's the gap.",
    category: "creative",
    thumbnailUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    coverUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1600&q=80",
    summary: "A landing page doesn't convert because it's pretty. It converts because every element is engineered to reduce a specific psychological friction point. I built this page on Swipe Pages with zero cognitive fat — one decision at a time, guided by architecture that makes 'yes' feel like the obvious next step.",
    metrics: [
      { label: "Mobile CVR", value: "11.4%" },
      { label: "Bounce Rate", value: "21%" },
      { label: "Page Load Time", value: "0.6s" }
    ],
    techStack: ["Swipe Pages", "Tailwind CSS", "Framer Motion", "Microsoft Clarity UX Analytics"],
    challenge: "82% of paid traffic arrives on mobile. Mobile users don't fill out forms — they abandon them. Three-column layouts become impossible stacks. Long copy becomes a wall. Loading delays become deal-breakers. Most landing pages are desktop experiences with a pinch-to-zoom apology at the bottom.",
    solution: "Single-column cognitive flow — one thought at a time, always moving toward the CTA. Sticky bottom action bar ('Tap to Claim Offer') visible at all scroll depths. Multi-step micro-form that reveals one field at a time, reducing perceived commitment at each step. Social proof notification pills that appear in the peripheral vision exactly when hesitation typically spikes.",
    outcome: "11.4% mobile conversion rate — 3.5x the industry benchmark. 21% bounce rate from paid traffic. 0.6s load time. Every percentage point in that conversion rate is a decision that was engineered, not hoped for.",
    liveUrl: "https://github.com/iiampraneeth",
    featured: true,
    bentoSpan: "col-span-1 row-span-1"
  },
  {
    id: "dn-11",
    title: "Automating Creatives with Midjourney",
    slug: "automating-creatives-midjourney",
    tagline: "From 5 creatives a week to 100 a day. Creative fatigue is a resource problem I solved with code.",
    category: "creative",
    thumbnailUrl: "/images/midjourney_automation.png",
    coverUrl: "/images/midjourney_automation.png",
    summary: "Performance marketing has a dirty secret: creative quality matters less than creative volume at the testing stage. You can't discover your winning ad unless you can run 50 variants simultaneously. I built a generative AI pipeline that makes that volume possible without agencies, without turnaround weeks, without the invoice.",
    metrics: [
      { label: "Production Velocity", value: "20x Faster" },
      { label: "Creative Testing ROI", value: "+140%" },
      { label: "Asset Cost Reduction", value: "-90%" }
    ],
    techStack: ["Midjourney V6", "Python Pillow/OpenCV", "Stable Diffusion XL", "Meta Ads API", "Looker Studio"],
    challenge: "Creative fatigue is the silent killer of scaling ad accounts. The winning creative from last month is actively hurting you this month. But running 50 A/B variants requires either a large creative team, an expensive agency, or weeks of waiting. None of those work at growth speed.",
    solution: "Structured prompt templates injecting brand hex codes, precise lighting parameters, and demographic subject cues into Midjourney V6. Python scripts post-process outputs: overlay dynamic typography, apply brand color grades, resize for every placement format. Batches pushed directly into Meta split test campaigns via API — no human in the loop from generation to testing.",
    outcome: "20x faster creative production. Asset costs reduced 90%. Creative testing ROI up 140%. The real win: speed of learning. When you can test 100 creatives in the time it used to take to produce 5, you discover winning signals your competitors can't afford to find.",
    liveUrl: "https://github.com/iiampraneeth",
    featured: true,
    bentoSpan: "col-span-2 row-span-1"
  },
  {
    id: "dn-12",
    title: "Google Tag Manager Implementation",
    slug: "google-tag-manager-implementation",
    tagline: "99.4% tracking accuracy. Because decisions made on bad data are worse than no decisions at all.",
    category: "strategy",
    thumbnailUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    coverUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    summary: "Most teams think their analytics are working. They're not. Safari ITP strips events. Ad blockers disappear purchases. Cross-device journeys break attribution. The data in the dashboard looks clean — but 20-30% of real conversions are invisible. I built the infrastructure that sees everything.",
    metrics: [
      { label: "Tracking Accuracy", value: "99.4%" },
      { label: "Ad Blocker Recovery", value: "+22% Events" },
      { label: "Attribution Match", value: "100%" }
    ],
    techStack: ["Google Tag Manager (GTM)", "Google Analytics 4 (GA4)", "JavaScript Data Layer", "Server-Side GTM"],
    challenge: "Browser privacy changes have made client-side analytics fundamentally unreliable. Safari's ITP, Firefox's tracking protection, and the proliferation of ad blockers mean that a purchase on iOS is frequently invisible to your marketing stack — but your ad platform still claims credit for it.",
    solution: "Custom JavaScript dataLayer architecture capturing structured product interactions with full context. Server-Side GTM container routing events through a first-party domain, bypassing ad blockers entirely. Conversions API (CAPI) deduplication layer preventing double-counting between browser and server events. Every event schema designed to survive privacy restrictions for the next 3-5 years.",
    outcome: "99.4% tracking fidelity across all acquisition channels. 22% more conversion events recovered from ad-blocked sessions. Attribution now matches reality — which meant reallocating budget that was being spent in the wrong places based on bad data.",
    liveUrl: "https://github.com/iiampraneeth",
    featured: true,
    bentoSpan: "col-span-1 row-span-1"
  },
  {
    id: "dn-13",
    title: "Zapier Automation Integration",
    slug: "zapier-automation-integration",
    tagline: "A lead used to wait 4 hours for a response. Now it's 28 seconds. Nobody left.",
    category: "strategy",
    thumbnailUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    coverUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
    summary: "Sales pipelines rot from the top. A hot lead goes cold faster than any metric measures. The team was spending 45 hours a week manually moving data between systems while actual leads sat waiting. I automated the entire pipeline — lead capture to CRM to sales alert to nurture sequence — in under 5 seconds end-to-end.",
    metrics: [
      { label: "Manual Hours Saved", value: "45+ Hrs/Wk" },
      { label: "Lead Response Time", value: "<30 Secs" },
      { label: "Data Error Rate", value: "0%" }
    ],
    techStack: ["Zapier Webhooks", "Python API Scripts", "HubSpot CRM", "Slack Bot API", "Google Sheets API"],
    challenge: "A 4-6 hour response window isn't a sales problem — it's a systems problem. Facebook Lead Forms, web contact forms, CRM pipelines, and sales team notifications all living in separate worlds. Manual copy-paste between platforms. Typos in phone numbers. Duplicate entries. Leads who booked a competitor by the time someone called.",
    solution: "Event-driven automation bridge using Zapier Webhooks and Python enrichment scripts. Every incoming lead: phone number validated, profile enriched, Slack alert sent to the right sales rep within 5 seconds, simultaneously enrolled in the correct Mailchimp nurture track based on lead source and intent signal. No human touch required between form submission and first sales contact.",
    outcome: "45+ weekly hours of manual work eliminated. Lead response time dropped from hours to under 30 seconds. Lead-to-deal conversion rate lifted 35%. The system now runs every day whether or not anyone is watching it.",
    liveUrl: "https://github.com/iiampraneeth",
    featured: true,
    bentoSpan: "col-span-1 row-span-1"
  },
  {
    id: "dn-14",
    title: "WhatsApp Automation",
    slug: "whatsapp-automation-campaign",
    tagline: "94.8% message read rate. Because people actually open WhatsApp.",
    category: "strategy",
    thumbnailUrl: "https://images.unsplash.com/photo-1614680376593-902f749f7ffc?auto=format&fit=crop&w=800&q=80",
    coverUrl: "https://images.unsplash.com/photo-1614680376593-902f749f7ffc?auto=format&fit=crop&w=1600&q=80",
    summary: "Email gets ignored. Web chat gets closed. WhatsApp gets read. I built a conversational bot that operated inside the messaging app people actually check — qualifying leads, sending order updates, handling common support queries, and routing complex issues to humans. All within one chat thread.",
    metrics: [
      { label: "Message Open Rate", value: "94.8%" },
      { label: "Response Latency", value: "Instant (<1s)" },
      { label: "Support Ticket Drop", value: "-58%" }
    ],
    techStack: ["WhatsApp Cloud API", "Node.js Webhooks", "Interakt / WATI", "Python NLP", "PostgreSQL"],
    challenge: "Customer support through email is asynchronous misery — for both sides. Users wait 24 hours for answers about order status or policy documents. Agents spend hours replying to questions that are never going to be unique. The infrastructure existed; the right channel didn't.",
    solution: "Multi-branch decision-tree conversation flows powered by quick-reply buttons. Policy PDFs retrieved instantly from database based on user ID. Shipment tracking via real-time API lookup. Consultation scheduling via calendar integration. Complex queries detected via NLP intent classification and routed to human agents with full conversation context already attached.",
    outcome: "94.8% read rate within 15 minutes. 58% of support tickets resolved without a human. Instant responses at 1am on Sunday. The bot doesn't get tired, doesn't have bad days, and never makes the user feel like they should have checked the FAQ instead.",
    liveUrl: "https://github.com/iiampraneeth",
    featured: true,
    bentoSpan: "col-span-2 row-span-1"
  },
  {
    id: "dn-15",
    title: "Influencer Marketing Campaign for Dream11",
    slug: "influencer-marketing-campaign-dream11",
    tagline: "12.4M views. 185,000 installs. I could tell you which creator drove which install, to the rupee.",
    category: "campaign",
    thumbnailUrl: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80",
    coverUrl: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1600&q=80",
    summary: "Most influencer campaigns are vanity. Reach numbers that don't trace to revenue. Follower counts inflated by bots. Pretty screenshots with no attribution. I built Dream11's creator campaign like a performance channel — with selection rubrics, individual-level tracking, and ROI measured down to the specific creator, region, and language.",
    metrics: [
      { label: "Total Video Views", value: "12.4M" },
      { label: "Verified Creator ROI", value: "3.8x" },
      { label: "New App Downloads", value: "185,000+" }
    ],
    techStack: ["Influencer Tracking UTMs", "Looker Studio", "YouTube & Instagram API", "Social Listening"],
    challenge: "Fantasy sports thrives on peer credibility — the recommendation from a sports-obsessed friend in your language is worth a thousand ads. But identifying which Telugu-speaking cricket creator actually has a real engaged audience (vs. a purchased one) requires forensic analysis that most campaigns skip.",
    solution: "Quantitative creator selection rubric: true engagement ratio (comments + saves / followers, not likes), bot-follower detection through engagement pattern analysis, regional language alignment scored against target download geographies. Individual trackable UTM codes and dynamic referral codes issued per creator. Daily performance monitoring in Looker Studio showed cost-per-install by creator in real-time.",
    outcome: "12.4M organic views. 185,000+ verified app registrations. 3.8x return on creator investment — measured, not estimated. Built a repeatable framework for regional influencer scaling that didn't require starting from scratch in each new language market.",
    liveUrl: "https://github.com/iiampraneeth",
    featured: true,
    bentoSpan: "col-span-1 row-span-1"
  },
  {
    id: "cs-1",
    title: "Bone Fracture Detection AI Pipeline",
    slug: "bone-fracture-detection-ai-pipeline",
    tagline: "94.8% diagnostic accuracy. 42ms inference. Trained to catch what tired eyes miss.",
    category: "technical",
    thumbnailUrl: "/images/bone_fracture_ai.png",
    coverUrl: "/images/bone_fracture_ai.png",
    summary: "A radiologist reads hundreds of X-rays under time pressure. An ensemble neural network doesn't get tired at 3am. I built a computer vision diagnostic pipeline that flags bone fractures with 94.8% accuracy — not as a replacement for clinical judgment, but as the second pair of eyes that never blinks.",
    metrics: [
      { label: "Model Accuracy", value: "94.8%", change: "+12.4%" },
      { label: "False Positives", value: "-31%" },
      { label: "Inference Speed", value: "42ms" }
    ],
    techStack: ["TensorFlow", "PyTorch", "OpenCV", "Python", "Docker"],
    challenge: "Medical imaging datasets are messy in ways that break standard CNN pipelines: variable contrast, significant noise, severe class imbalance (fractures are rare, so models learn to say 'normal' to look accurate). A model that's 95% accurate by predicting 'no fracture' every time is worse than useless — it's dangerous.",
    solution: "Rigorous preprocessing pipeline compensating for contrast variation. Custom augmentation strategy that synthetically balanced fracture class representation without introducing artifacts. Ensemble architecture combining multi-scale feature extractors — each trained to recognize different fracture pattern scales — with a meta-classifier weighting their outputs by historical confidence.",
    outcome: "94.8% accuracy. False positives reduced 31% vs. single-model baseline. 42ms inference speed suitable for real clinical workflow integration. What started as a university project was built to production-grade specification.",
    liveUrl: "https://github.com/iiampraneeth",
    featured: true,
    bentoSpan: "col-span-1 row-span-1"
  },
  {
    id: "cs-2",
    title: "Algorithmic Bus Scheduling & API Hub",
    slug: "algorithmic-bus-scheduling-api-hub",
    tagline: "Route efficiency up 28%. API response at 110ms. Zero security incidents at deployment.",
    category: "technical",
    thumbnailUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
    coverUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1600&q=80",
    summary: "Institutional fleet scheduling runs on spreadsheets and intuition longer than it should. I replaced both with a dynamic algorithmic engine that optimizes routes in real-time, handles administrative access control with granular JWT role permissions, and serves live transport data to any downstream consumer at sub-150ms latency.",
    metrics: [
      { label: "Route Efficiency", value: "+28%" },
      { label: "API Response", value: "110ms" },
      { label: "System Uptime", value: "99.9%" }
    ],
    techStack: ["Python", "REST APIs", "SQL", "JWT Auth", "System Design"],
    challenge: "Static heuristic scheduling is polite denial. Routes planned on Monday don't account for Tuesday's reality — a delayed driver, a full vehicle, a demand spike on one corridor. The administrative security was equally static: shared login credentials, no audit trail, no role differentiation between view and modify access.",
    solution: "Dynamic scheduling engine consuming live external route API feeds. Constraint-satisfaction optimization adjusting assignments based on real-time vehicle capacity, driver availability, and demand signals. JWT-based role-access system separating read, write, and admin privileges at endpoint level — with a full audit log of every administrative action.",
    outcome: "+28% route efficiency. 110ms API response under concurrent load testing. 99.9% uptime. A system that doesn't require a human to recalculate the schedule every morning, and one where every administrative action has a named author and timestamp.",
    liveUrl: "https://github.com/iiampraneeth",
    featured: true,
    bentoSpan: "col-span-2 row-span-1"
  }
];
