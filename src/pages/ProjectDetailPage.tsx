import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { projectsData } from '@/data/projects';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Container } from '@/components/ui/Container';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Layers,
  Lightbulb,
  Sparkles,
  Target,
  TrendingUp,
} from 'lucide-react';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const prefersReducedMotion = useReducedMotion();

  const project = projectsData.find((p) => p.slug === slug);

  // Scroll to top when detail page mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  }, [slug, prefersReducedMotion]);

  if (!project) {
    return (
      <SectionWrapper id="not-found" theme="light" className="min-h-screen flex items-center justify-center bg-[#FAFAFF]">
        <Container className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-black text-[#09090F]">Case Study Not Found</h1>
          <p className="text-[#2D2B4A] max-w-md mx-auto">
            The requested project path (`{slug}`) does not match our verified case study database.
          </p>
          <button
            onClick={() => navigate('/#projects')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#4F46E5] hover:bg-[#3730A3] text-white font-bold transition-all shadow-lg shadow-[#4F46E5]/20"
          >
            <ArrowLeft size={18} />
            <span>Return to All Case Studies</span>
          </button>
        </Container>
      </SectionWrapper>
    );
  }

  return (
    <motion.main
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="w-full min-h-screen bg-[#FAFAFF] text-[#09090F] relative pb-32"
    >
      {/* Sticky Back Header Bar */}
      <div className="sticky top-0 z-40 w-full bg-[#FAFAFF]/90 backdrop-blur-xl border-b border-[#DDE0F0] py-4 px-4 sm:px-8 transition-all">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                const el = document.getElementById('projects');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#FAFAFF] hover:bg-[#F2F3FC] border border-[#DDE0F0] hover:border-[#4F46E5] text-[#2D2B4A] hover:text-[#09090F] text-xs sm:text-sm font-bold transition-all shadow-sm group"
          >
            <ArrowLeft size={16} className="text-[#4F46E5] group-hover:-translate-x-1 transition-transform" />
            <span>Back to Case Studies</span>
          </button>

          <div className="hidden md:flex items-center gap-3">
            <span className="text-xs uppercase font-bold tracking-wider text-[#6B6880] font-mono">Current Project //</span>
            <span className="text-sm font-bold text-[#4F46E5] font-mono truncate max-w-xs">{project.title}</span>
          </div>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#4F46E5] hover:bg-[#3730A3] text-white text-xs sm:text-sm font-black transition-all shadow-md shadow-[#4F46E5]/20"
            >
              <span>View Live Project</span>
              <ArrowUpRight size={15} />
            </a>
          )}
        </div>
      </div>

      {/* Hero Banner Section */}
      <div className="relative overflow-hidden pt-12 pb-20 border-b border-[#DDE0F0]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFF] via-[#F2F3FC]/30 to-[#FAFAFF] opacity-70 pointer-events-none" />

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto space-y-6 text-center sm:text-left">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
              <span className="px-3.5 py-1 rounded-full bg-[#F2F3FC] border border-[#DDE0F0] text-[#1E1B4B] text-xs font-black uppercase tracking-wider font-mono">
                <Sparkles size={13} className="inline mr-1.5 -mt-0.5 text-[#4F46E5]" />
                {project.category}
              </span>
              <span className="text-xs font-mono text-[#6B6880]">ID // {project.id}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#09090F] leading-tight">
              {project.title}
            </h1>

            <p className="text-lg sm:text-2xl text-[#4F46E5] font-semibold leading-snug">
              {project.tagline}
            </p>

            <p className="text-base sm:text-lg text-[#2D2B4A] leading-relaxed max-w-3xl">
              {project.summary}
            </p>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-4">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-lg bg-[#FAFAFF] border border-[#DDE0F0] text-[#1E1B4B] text-xs font-mono font-bold shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* Part 1: Executive ROI Metrics Banner */}
      <Container className="py-12 -mt-10 relative z-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5">
          {project.metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-[#FAFAFF] backdrop-blur-xl border border-[#DDE0F0] shadow-lg hover:border-[#4F46E5] transition-all flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#6B6880] font-mono">
                  {metric.label}
                </span>
                <TrendingUp size={18} className="text-[#4F46E5]" />
              </div>

              <div className="text-3xl sm:text-4xl font-black font-mono text-[#09090F] tracking-tight my-2">
                {metric.value}
              </div>

              {metric.change && (
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1E1B4B] mt-2">
                  <span>{metric.change}</span>
                  <span className="text-[#6B6880] font-normal">verified performance</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </Container>

      {/* Part 2: Strategy & Neuromarketing Narrative + Challenge/Solution */}
      <Container className="py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2F3FC] border border-[#DDE0F0] text-[#4F46E5] text-xs font-bold uppercase tracking-wider font-mono">
                <Lightbulb size={14} />
                <span>Strategic Rationale & Problem Space</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#09090F]">
                The Core Challenge.
              </h2>
              <p className="text-base sm:text-lg text-[#2D2B4A] leading-relaxed bg-[#FAFAFF] p-6 rounded-2xl border border-[#DDE0F0] shadow-sm">
                {project.challenge}
              </p>
            </div>

            <div className="space-y-3 pt-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2F3FC] border border-[#DDE0F0] text-[#1E1B4B] text-xs font-bold uppercase tracking-wider font-mono">
                <Target size={14} />
                <span>Engineered Compulsion Solution</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-[#09090F]">
                How We Solved It.
              </h2>
              <p className="text-base sm:text-lg text-[#2D2B4A] leading-relaxed bg-[#FAFAFF] p-6 rounded-2xl border border-[#DDE0F0] shadow-sm">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Part 3: Outcome & Execution Box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#FAFAFF] border border-[#DDE0F0] shadow-lg space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-[#4F46E5]/10 text-[#4F46E5] flex items-center justify-center">
                <CheckCircle2 size={24} />
              </div>

              <h3 className="text-2xl font-black text-[#09090F] tracking-tight">
                Verified Outcome & ROI Impact
              </h3>

              <p className="text-base text-[#2D2B4A] leading-relaxed">
                {project.outcome}
              </p>

              <div className="pt-4 border-t border-[#DDE0F0] space-y-3 text-sm text-[#2D2B4A] font-medium font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#4F46E5]" />
                  <span>Cognitive Compulsion Funnel Architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#1E1B4B]" />
                  <span>Real-Time Algorithmic Optimization</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#6B6880]" />
                  <span>High-Velocity Conversion Testing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Part 4: Creative & Technical Marketing Architecture Preview */}
      <Container className="py-16 border-t border-[#DDE0F0]">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="space-y-4 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F2F3FC] border border-[#DDE0F0] text-[#4F46E5] text-xs font-bold uppercase tracking-wider font-mono">
              <Cpu size={14} />
              <span>Technical & Creative Synthesis</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#09090F]">
              System Architecture & Visual Craft
            </h2>
            <p className="text-[#2D2B4A] text-base">
              A dual-engine integration combining computer science AI models with conversion-driven marketing assets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Visual Creative Sample Box */}
            <div className="rounded-3xl bg-[#FAFAFF] border border-[#DDE0F0] overflow-hidden shadow-lg flex flex-col">
              <div className="aspect-[16/10] bg-[#09090F] relative overflow-hidden group">
                <img
                  src={project.coverUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
              </div>
              <div className="p-6 sm:p-8 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#4F46E5] font-mono">
                  Creative & UI/UX Execution
                </span>
                <h3 className="text-xl font-bold text-[#09090F]">
                  High-Impact Visual Artifacts
                </h3>
                <p className="text-sm text-[#2D2B4A] leading-relaxed">
                  Every creative asset and UI layout is structured to direct visitor attention toward high-value conversion triggers using directional cues and contrast hierarchy.
                </p>
              </div>
            </div>

            {/* Technical Marketing Matrix Box */}
            <div className="rounded-3xl bg-[#FAFAFF] border border-[#DDE0F0] p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-lg">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F2F3FC] text-[#1E1B4B] flex items-center justify-center">
                    <Layers size={20} />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1E1B4B] font-mono">
                      Engineering Stack
                    </span>
                    <h3 className="text-xl font-bold text-[#09090F]">
                      Technical Integration Matrix
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-[#2D2B4A] leading-relaxed">
                  Powered by robust data pipelines, API integrations, and programmatic workflows that eliminate manual friction while ensuring pristine attribution.
                </p>

                <div className="space-y-3 pt-4 border-t border-[#DDE0F0]">
                  <div className="text-xs font-bold uppercase text-[#6B6880] font-mono">Deployed Technologies</div>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-lg bg-[#FAFAFF] border border-[#DDE0F0] text-[#1E1B4B] font-mono text-xs font-bold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#DDE0F0] flex items-center justify-between">
                <Link
                  to="/"
                  onClick={() => {
                    setTimeout(() => {
                      const el = document.getElementById('contact');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#4F46E5] hover:text-[#3730A3] transition-colors font-mono"
                >
                  <span>Inquire About Similar Architecture</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </motion.main>
  );
};
