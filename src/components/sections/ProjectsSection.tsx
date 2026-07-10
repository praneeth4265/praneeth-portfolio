import React, { useState } from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Container } from '@/components/ui/Container';
import { MagicBentoGrid, MagicBentoItem } from '@/components/reactbits/cards/MagicBento';
import { TiltedCard } from '@/components/reactbits/cards/TiltedCard';
import { projectsData } from '@/data/projects';
import type { ProjectCategory } from '@/data/projects';
import { ArrowUpRight, Layers, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const ProjectsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | ProjectCategory>('all');

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'campaign', label: 'Performance Campaigns' },
    { id: 'technical', label: 'AI & Engineering' },
    { id: 'strategy', label: 'Data Attribution' },
    { id: 'creative', label: 'Neuromarketing & CRO' },
  ];

  const filteredProjects = activeTab === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === activeTab);

  return (
    <SectionWrapper id="projects" theme="dark" withTopBorder>
      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider">
              <Layers size={14} />
              <span>Engineered Proof of Craft</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
              High-Impact Case Studies.
            </h2>
            <p className="text-base md:text-lg text-slate-400">
              Where algorithms meet conversion funnels. Every project is engineered for maximum user engagement and measurable ROI.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id as 'all' | ProjectCategory)}
                  className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'text-white shadow-lg shadow-primary/20'
                      : 'text-slate-400 hover:text-white bg-slate-900/50 hover:bg-slate-800 border border-slate-800/80'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-project-tab"
                      className="absolute inset-0 bg-primary rounded-xl -z-10"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Bento Grid */}
        <MagicBentoGrid>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <MagicBentoItem
                key={project.id}
                span={project.bentoSpan || 'col-span-1 row-span-1'}
                index={index}
                className="bg-slate-900/80 border-slate-800/80 hover:border-cyan-500/50"
              >
                <TiltedCard maxTilt={8} className="w-full h-full flex flex-col justify-between p-6 sm:p-8">
                  {/* Top Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-[11px] font-semibold uppercase tracking-wider mb-3">
                        <Sparkles size={11} className="text-cyan-400" />
                        <span>{project.category}</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 mt-1 line-clamp-2">
                        {project.tagline}
                      </p>
                    </div>

                    <a
                      href={project.liveUrl || `#${project.slug}`}
                      className="w-10 h-10 rounded-full bg-white/10 hover:bg-cyan-500 text-white flex items-center justify-center transition-all duration-300 shrink-0 shadow-md group-hover:scale-110"
                      aria-label={`View details for ${project.title}`}
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  </div>

                  {/* Middle Summary & Tech Stack */}
                  <div className="my-6 space-y-4">
                    <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed line-clamp-3">
                      {project.summary}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.slice(0, 4).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded-md bg-cyan-950/40 border border-cyan-800/40 text-cyan-300 text-[10px] font-medium font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="px-2 py-0.5 rounded-md bg-slate-800 text-slate-400 text-[10px] font-medium font-mono">
                          +{project.techStack.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Bottom ROI Metrics Pill */}
                  <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-4">
                      {project.metrics.slice(0, 2).map((metric, i) => (
                        <div key={i} className="flex flex-col">
                          <span className="text-base sm:text-lg font-black text-cyan-400 font-mono tracking-tight">
                            {metric.value}
                          </span>
                          <span className="text-[10px] uppercase tracking-wider text-slate-400">
                            {metric.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-300 uppercase tracking-wider group-hover:text-cyan-400 transition-colors">
                      <span>Explore Case Study</span>
                      <ArrowUpRight size={13} />
                    </div>
                  </div>
                </TiltedCard>
              </MagicBentoItem>
            ))}
          </AnimatePresence>
        </MagicBentoGrid>
      </Container>
    </SectionWrapper>
  );
};
