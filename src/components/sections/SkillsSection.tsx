import React, { useState, useMemo } from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Container } from '@/components/ui/Container';
import { skillsData } from '@/data/skills';
import type { SkillItem } from '@/data/skills';
import { motion } from 'motion/react';
import {
  BarChart3,
  Cpu,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Terminal,
  Globe,
  LayoutGrid,
  Database,
  Search,
  Target,
  TrendingUp,
  Users,
  ShoppingBag,
  Zap,
  Brain,
  Layers,
  Flame,
  Video,
  Layout,
  PenTool
} from 'lucide-react';
import { Masonry } from '@/components/reactbits/cards/Masonry';
import type { MasonryItemDef } from '@/components/reactbits/cards/Masonry';

// Curated high-impact Lucide icons for every discipline
const SKILL_ICON_MAP: Record<string, React.ReactNode> = {
  "Full Stack Development (React, Next.js, Node, Tailwind)": <Terminal className="w-5 h-5 sm:w-6 sm:h-6" />,
  "REST APIs & Backend Integration": <Database className="w-5 h-5 sm:w-6 sm:h-6" />,
  "Programmatic SEO & Technical Site Audits": <Search className="w-5 h-5 sm:w-6 sm:h-6" />,
  "Omnichannel Performance Ads (Google, Meta, LinkedIn)": <Target className="w-5 h-5 sm:w-6 sm:h-6" />,
  "Conversion Rate Optimization (CRO & A/B Testing)": <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />,
  "Account-Based Marketing (ABM & B2B Lead Gen)": <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
  "E-Commerce Strategy (WooCommerce & Razorpay)": <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" />,
  "Marketing Automation (Zapier, Drip, WhatsApp Bots)": <Zap className="w-5 h-5 sm:w-6 sm:h-6" />,
  "Neuromarketing & UX Buyer Journey Mapping": <Brain className="w-5 h-5 sm:w-6 sm:h-6" />,
  "GA4 & BigQuery Multi-Touch Attribution": <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6" />,
  "Looker Studio & GTM Tag Automation": <Layers className="w-5 h-5 sm:w-6 sm:h-6" />,
  "Google Search Console & SERP Indexing": <Globe className="w-5 h-5 sm:w-6 sm:h-6" />,
  "Heatmaps & User Behavior Analytics (Hotjar)": <Flame className="w-5 h-5 sm:w-6 sm:h-6" />,
  "AI-Driven Ad Creative & Video Generation": <Video className="w-5 h-5 sm:w-6 sm:h-6" />,
  "Figma Prototyping & Visual Storytelling": <Layout className="w-5 h-5 sm:w-6 sm:h-6" />,
  "Direct Response & Conversion Copywriting": <PenTool className="w-5 h-5 sm:w-6 sm:h-6" />,
  "Micro-Animation & Fitts's Law UI Design": <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
};

// Rich, human-like copy and dynamic sizing for our Masonry layout
const SKILL_DETAILS_MAP: Record<string, { description: string; size: 'normal' | 'large' | 'featured' }> = {
  "Full Stack Development (React, Next.js, Node, Tailwind)": {
    description: "Most marketers rely on sluggish page builders that bleed conversions. I build custom, blazing-fast web architectures from scratch using React 19, Next.js, and Node—achieving sub-second load times that keep visitors locked in.",
    size: 'featured'
  },
  "Omnichannel Performance Ads (Google, Meta, LinkedIn)": {
    description: "I don't just bid on keywords; I engineer high-intent ad funnels across Google, Meta, and LinkedIn that systematically lower CAC while scaling enterprise ROAS.",
    size: 'featured'
  },
  "Neuromarketing & UX Buyer Journey Mapping": {
    description: "Every pixel must answer a psychological objection. Using behavioral psychology and Fitts's Law, I structure layouts and user flows to effortlessly guide human decision-making toward the conversion goal.",
    size: 'featured'
  },
  "Micro-Animation & Fitts's Law UI Design": {
    description: "Motion isn't decoration—it's cognitive feedback. I craft physics-based micro-interactions that trigger instant dopamine and reinforce user confidence at every touchpoint.",
    size: 'featured'
  },
  "AI-Driven Ad Creative & Video Generation": {
    description: "Leveraging cutting-edge AI video and generative workflows to rapidly prototype, iterate, and deploy hundreds of hyper-personalized ad variations per campaign.",
    size: 'large'
  },
  "Programmatic SEO & Technical Site Audits": {
    description: "Transforming raw data into tens of thousands of highly targeted landing pages, backed by rigorous technical SEO audits and schema architecture.",
    size: 'large'
  },
  "Conversion Rate Optimization (CRO & A/B Testing)": {
    description: "Rigorous statistical experimentation. I deploy continuous A/B and multivariate tests to isolate exact friction points and compound your bottom-line revenue.",
    size: 'large'
  },
  "GA4 & BigQuery Multi-Touch Attribution": {
    description: "No guesswork. I construct custom SQL pipelines in BigQuery linked to GA4 to track multi-touch attribution models across complex, long-cycle B2B journeys.",
    size: 'large'
  },
  "E-Commerce Strategy (WooCommerce & Razorpay)": {
    description: "End-to-end checkout optimization, automated abandoned cart sequences, and custom payment gateway integrations designed to maximize average order value.",
    size: 'large'
  },
  "Direct Response & Conversion Copywriting": {
    description: "Words that compel action. I write hypnotic, objection-shattering sales copy and email sequences tested against live audience behavior.",
    size: 'large'
  },
  "Figma Prototyping & Visual Storytelling": {
    description: "High-fidelity interactive design systems and design tokens built for seamless developer handoff and pixel-perfect visual brand authority.",
    size: 'large'
  },
  "Heatmaps & User Behavior Analytics (Hotjar)": {
    description: "Deep qualitative analysis of rage clicks, scroll depth, and session recordings to uncover hidden usability leaks before scaling ad spend.",
    size: 'normal'
  },
  "REST APIs & Backend Integration": {
    description: "Custom webhooks, CRM syncs, and REST API integrations connecting front-end experiences directly to backend analytics and sales engines.",
    size: 'normal'
  },
  "Account-Based Marketing (ABM & B2B Lead Gen)": {
    description: "Hyper-targeted B2B campaigns tailored specifically to key decision-makers across high-ticket enterprise accounts.",
    size: 'normal'
  },
  "Marketing Automation (Zapier, Drip, WhatsApp Bots)": {
    description: "Automating lead nurturing pipelines, instant WhatsApp follow-ups, and complex CRM routing to close deals 24/7 on autopilot.",
    size: 'normal'
  },
  "Looker Studio & GTM Tag Automation": {
    description: "Custom real-time executive dashboards and event tracking automation ensuring zero data loss across marketing funnels.",
    size: 'normal'
  },
  "Google Search Console & SERP Indexing": {
    description: "Advanced indexation recovery, Core Web Vitals optimization, and algorithmic penalty protection for high-traffic domains.",
    size: 'normal'
  }
};

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'masonry' | 'grid'>('masonry');

  const categories = [
    { id: 'All', label: 'All Capabilities', icon: Sparkles },
    { id: 'Technical & CS', label: 'Technical & Full Stack', icon: Terminal },
    { id: 'Marketing Strategy', label: 'Marketing Strategy', icon: Lightbulb },
    { id: 'Analytics & Data', label: 'Analytics & Attribution', icon: BarChart3 },
    { id: 'Creative & UX', label: 'Creative & UX Engineering', icon: Cpu },
  ];

  const filteredSkills: SkillItem[] = useMemo(() => {
    return selectedCategory === 'All'
      ? skillsData
      : skillsData.filter((s) => s.category === selectedCategory);
  }, [selectedCategory]);

  const masonryItems: MasonryItemDef[] = useMemo(() => {
    return filteredSkills.map((skill) => {
      const details = SKILL_DETAILS_MAP[skill.name] || {
        description: "Engineered for high-impact execution, combining rigorous technical standards with psychological marketing principles.",
        size: 'normal' as const
      };

      return {
        id: skill.name,
        title: skill.name,
        category: skill.category,
        level: skill.level,
        highlighted: skill.highlighted,
        icon: SKILL_ICON_MAP[skill.name] || <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />,
        description: details.description,
        size: details.size
      };
    });
  }, [filteredSkills]);

  return (
    <SectionWrapper id="skills" theme="light" withTopBorder>
      <Container>
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAFAFF] border border-[#DDE0F0] text-[#4F46E5] text-xs font-bold uppercase tracking-wider shadow-sm font-mono">
            <ShieldCheck size={14} />
            <span>THE DUAL-ENGINE CAPABILITY</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#09090F]">
            Two disciplines. Zero translation layers.
          </h2>
          <p className="text-base md:text-lg text-[#2D2B4A]">
            I build the technical infrastructure that makes marketing campaigns mathematically profitable. These are the skills, frameworks, and tools I deploy to eliminate CAC leaks and scale returns.
          </p>

          {/* View Toggle */}
          <div className="flex items-center justify-center pt-2">
            <div className="inline-flex p-1 rounded-xl bg-[#F2F3FC] border border-[#DDE0F0] shadow-inner font-mono">
              <button
                onClick={() => setViewMode('masonry')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  viewMode === 'masonry'
                    ? 'bg-[#09090F] text-[#FAFAFF] shadow-md'
                    : 'text-[#2D2B4A] hover:text-[#09090F]'
                }`}
              >
                <LayoutGrid size={14} className={viewMode === 'masonry' ? 'text-[#4F46E5]' : ''} />
                <span>Masonry Gallery</span>
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  viewMode === 'grid'
                    ? 'bg-[#09090F] text-[#FAFAFF] shadow-md'
                    : 'text-[#2D2B4A] hover:text-[#09090F]'
                }`}
              >
                <Globe size={14} className={viewMode === 'grid' ? 'text-[#4F46E5]' : ''} />
                <span>Classic Grid</span>
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs md:text-sm font-bold transition-all duration-300 font-mono ${
                  isActive
                    ? 'bg-[#4F46E5] text-white shadow-lg shadow-[#4F46E5]/20 scale-105'
                    : 'bg-[#FAFAFF] border border-[#DDE0F0] text-[#2D2B4A] hover:text-[#09090F] hover:border-[#4F46E5]'
                }`}
              >
                <Icon size={16} className={isActive ? 'text-white' : 'text-[#4F46E5]'} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Display Area: Masonry Gallery vs Classic Grid */}
        {viewMode === 'masonry' ? (
          <div className="w-full">
            <Masonry
              items={masonryItems}
              columns={{
                default: 3,
                1280: 3,
                1024: 2,
                768: 2,
                640: 1
              }}
              gap={22}
            />
          </div>
        ) : (
          /* Classic Capabilities Grid */
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filteredSkills.map((skill, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: idx * 0.03 }}
                key={skill.name}
                className={`p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                  skill.highlighted
                    ? 'bg-[#FAFAFF] border-[#4F46E5] shadow-md shadow-[#4F46E5]/10'
                    : 'bg-[#FAFAFF] border-[#DDE0F0] hover:border-[#6B6880] shadow-sm'
                }`}
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#1E1B4B] px-2 py-0.5 rounded bg-[#F2F3FC] border border-[#DDE0F0] font-mono">
                      {skill.category}
                    </span>
                    <h3 className="text-base font-bold text-[#09090F] mt-2">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="text-sm font-black font-mono text-[#4F46E5]">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-2 rounded-full bg-[#F2F3FC] overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: idx * 0.04 }}
                    className={`h-full rounded-full ${
                      skill.highlighted
                        ? 'bg-[#4F46E5]'
                        : 'bg-[#1E1B4B]'
                    }`}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </Container>
    </SectionWrapper>
  );
};
