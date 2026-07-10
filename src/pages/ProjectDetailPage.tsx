import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { projectsData } from '@/data/projects';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Container } from '@/components/ui/Container';
import { LiquidChrome } from '@/components/reactbits/backgrounds/LiquidChrome';
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
      <SectionWrapper id="not-found" theme="dark" className="min-h-screen flex items-center justify-center">
        <Container className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-black text-white">Case Study Not Found</h1>
          <p className="text-slate-400 max-w-md mx-auto">
            The requested project path (`{slug}`) does not match our verified case study database.
          </p>
          <button
            onClick={() => navigate('/#projects')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-all shadow-lg shadow-cyan-500/30"
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
      className="w-full min-h-screen bg-slate-950 text-white relative pb-32"
    >
      {/* Sticky Back Header Bar */}
      <div className="sticky top-0 z-40 w-full bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80 py-4 px-4 sm:px-8 transition-all">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                const el = document.getElementById('projects');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/50 text-slate-300 hover:text-white text-xs sm:text-sm font-bold transition-all shadow-md group"
          >
            <ArrowLeft size={16} className="text-cyan-400 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Case Studies</span>
          </button>

          <div className="hidden md:flex items-center gap-3">
            <span className="text-xs uppercase font-bold tracking-wider text-slate-500">Current Project //</span>
            <span className="text-sm font-bold text-cyan-400 font-mono truncate max-w-xs">{project.title}</span>
          </div>

          {project.liveUrl && project.liveUrl !== '<PLACEHOLDER_PROJECT_1_LIVE_URL>' && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs sm:text-sm font-black transition-all shadow-md shadow-cyan-500/30"
            >
              <span>View Live Project</span>
              <ArrowUpRight size={15} />
            </a>
          )}
        </div>
      </div>

      {/* Hero Banner Section */}
      <div className="relative overflow-hidden pt-12 pb-20 border-b border-slate-800/80">
        <LiquidChrome speed={0.3} className="opacity-40" />

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto space-y-6 text-center sm:text-left">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
              <span className="px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-black uppercase tracking-wider">
                <Sparkles size={13} className="inline mr-1.5 -mt-0.5" />
                {project.category}
              </span>
              <span className="text-xs font-mono text-slate-400">ID // {project.id}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
              {project.title}
            </h1>

            <p className="text-lg sm:text-2xl text-cyan-300 font-semibold leading-snug">
              {project.tagline}
            </p>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
              {project.summary}
            </p>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-4">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700/80 text-slate-200 text-xs font-mono font-medium shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* Part 1: Executive ROI Metrics Banner (`PROJ-04`) */}
      <Container className="py-12 -mt-10 relative z-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5">
          {project.metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-slate-800/90 shadow-2xl hover:border-cyan-500/50 transition-all flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {metric.label}
                </span>
                <TrendingUp size={18} className="text-cyan-400" />
              </div>

              <div className="text-3xl sm:text-4xl font-black font-mono text-white tracking-tight my-2">
                {metric.value}
              </div>

              {metric.change && (
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 mt-2">
                  <span>{metric.change}</span>
                  <span className="text-slate-500 font-normal">verified performance</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </Container>

      {/* Part 2: Strategy & Neuromarketing Narrative + Challenge/Solution (`PROJ-04`) */}
      <Container className="py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-bold uppercase tracking-wider">
                <Lightbulb size={14} />
                <span>Strategic Rationale & Problem Space</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                The Core Challenge.
              </h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed bg-slate-900/50 p-6 rounded-2xl border border-slate-800/80">
                {project.challenge}
              </p>
            </div>

            <div className="space-y-3 pt-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                <Target size={14} />
                <span>Engineered Compulsion Solution</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                How We Solved It.
              </h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed bg-slate-900/50 p-6 rounded-2xl border border-slate-800/80">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Part 3: Outcome & Execution Box (`PROJ-04`) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-cyan-950/40 border border-cyan-500/30 shadow-2xl space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                <CheckCircle2 size={24} />
              </div>

              <h3 className="text-2xl font-black text-white tracking-tight">
                Verified Outcome & ROI Impact
              </h3>

              <p className="text-base text-slate-300 leading-relaxed">
                {project.outcome}
              </p>

              <div className="pt-4 border-t border-slate-800 space-y-3 text-sm text-slate-400 font-medium">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span>Cognitive Compulsion Funnel Architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-400" />
                  <span>Real-Time Algorithmic Optimization</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>High-Velocity Conversion Testing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Part 4: Creative & Technical Marketing Architecture Preview (`PROJ-04`) */}
      <Container className="py-16 border-t border-slate-900">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="space-y-4 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider">
              <Cpu size={14} />
              <span>Technical & Creative Synthesis</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              System Architecture & Visual Craft
            </h2>
            <p className="text-slate-400 text-base">
              A dual-engine integration combining computer science AI models with conversion-driven marketing assets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Visual Creative Sample Box */}
            <div className="rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden shadow-2xl flex flex-col">
              <div className="aspect-[16/10] bg-slate-950 relative overflow-hidden group">
                <img
                  src={project.coverUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
              </div>
              <div className="p-6 sm:p-8 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono">
                  Creative & UI/UX Execution
                </span>
                <h3 className="text-xl font-bold text-white">
                  High-Impact Visual Artifacts
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Every creative asset and UI layout is structured to direct visitor attention toward high-value conversion triggers using directional cues and contrast hierarchy.
                </p>
              </div>
            </div>

            {/* Technical Marketing Matrix Box */}
            <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-2xl">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
                    <Layers size={20} />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-purple-400 font-mono">
                      Engineering Stack
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      Technical Integration Matrix
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  Powered by robust data pipelines, API integrations, and programmatic workflows that eliminate manual friction while ensuring pristine attribution.
                </p>

                <div className="space-y-3 pt-4 border-t border-slate-800/80">
                  <div className="text-xs font-bold uppercase text-slate-400">Deployed Technologies</div>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-cyan-300 font-mono text-xs font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
                <Link
                  to="/"
                  onClick={() => {
                    setTimeout(() => {
                      const el = document.getElementById('contact');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 transition-colors"
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
