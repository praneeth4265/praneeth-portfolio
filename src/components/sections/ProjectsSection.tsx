import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Container } from '@/components/ui/Container';
import { MagicBentoGrid, MagicBentoItem } from '@/components/reactbits/cards/MagicBento';
import { TiltedCard } from '@/components/reactbits/cards/TiltedCard';
import { InfiniteMenu } from '@/components/reactbits/cards/InfiniteMenu';
import { projectsData } from '@/data/projects';
import type { ProjectCategory } from '@/data/projects';
import { ArrowUpRight, Compass, Layers, LayoutGrid, Sparkles } from 'lucide-react';
import { AnimatePresence } from 'motion/react';

export const CATEGORY_DISPLAY_MAP: Record<ProjectCategory, string> = {
  campaign: 'Performance Campaigns',
  technical: 'AI & Engineering',
  strategy: 'Marketing Strategy',
  creative: 'Creative & CRO',
};

export const ProjectsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | ProjectCategory>('all');
  const [viewMode, setViewMode] = useState<'wheel' | 'bento'>('wheel');

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'campaign', label: CATEGORY_DISPLAY_MAP.campaign },
    { id: 'technical', label: CATEGORY_DISPLAY_MAP.technical },
    { id: 'strategy', label: CATEGORY_DISPLAY_MAP.strategy },
    { id: 'creative', label: CATEGORY_DISPLAY_MAP.creative },
  ];

  const filteredProjects = activeTab === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === activeTab);

  const menuItems = filteredProjects.map((project) => ({
    image: project.coverUrl || project.thumbnailUrl,
    link: `/projects/${project.slug}`,
    title: project.title,
    description: project.tagline,
    category: CATEGORY_DISPLAY_MAP[project.category].toUpperCase(),
    metrics: project.metrics?.[0]?.value || 'Verified Impact'
  }));

  return (
    <SectionWrapper id="projects" theme="light" withTopBorder>
      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2F3FC] border border-[#DDE0F0] text-[#4F46E5] text-xs font-bold uppercase tracking-wider">
              <Layers size={14} />
              <span>Real Briefs. Real Results.</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#09090F]">
              Decisions that moved numbers.
            </h2>
            <p className="text-base md:text-lg text-[#2D2B4A]">
              Every project starts with a business problem. Every case study ends with a number that changed.
            </p>
          </div>

          {/* Controls: Category Filter Tabs & Layout View Toggle */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 w-full md:w-auto">
            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const isActive = activeTab === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id as 'all' | ProjectCategory)}
                    className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 font-mono cursor-pointer ${
                      isActive
                        ? 'text-white shadow-lg shadow-[#4F46E5]/20 bg-[#4F46E5]'
                        : 'text-[#2D2B4A] hover:text-[#09090F] bg-[#FAFAFF] hover:bg-[#F2F3FC] border border-[#DDE0F0]'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Layout Toggle Button Group */}
            <div className="inline-flex items-center p-1 bg-[#F2F3FC] border border-[#DDE0F0] rounded-xl self-start sm:self-auto shrink-0 shadow-sm">
              <button
                onClick={() => setViewMode('wheel')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  viewMode === 'wheel'
                    ? 'bg-[#4F46E5] text-white shadow-sm'
                    : 'text-[#2D2B4A] hover:text-[#09090F]'
                }`}
              >
                <Compass size={14} />
                <span>3D Infinite Wheel</span>
              </button>
              <button
                onClick={() => setViewMode('bento')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  viewMode === 'bento'
                    ? 'bg-[#4F46E5] text-white shadow-sm'
                    : 'text-[#2D2B4A] hover:text-[#09090F]'
                }`}
              >
                <LayoutGrid size={14} />
                <span>Bento Grid</span>
              </button>
            </div>
          </div>
        </div>

        {/* Layout Display: 3D Wheel or Bento Grid */}
        {viewMode === 'wheel' ? (
          <div className="relative w-full h-[580px] sm:h-[680px] md:h-[760px] rounded-3xl overflow-hidden bg-gradient-to-b from-[#FAFAFF] via-[#F2F3FC] to-[#FAFAFF] border border-[#DDE0F0] shadow-xl transition-all duration-500">
            {/* Ambient background glow inside the 3D wheel container */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#4F46E5]/6 rounded-full blur-[100px]" />
            </div>

            {/* Instruction badge */}
            <div className="absolute top-4 left-4 z-20 pointer-events-none inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAFAFF]/90 backdrop-blur-md border border-[#DDE0F0] text-[#09090F] text-xs font-bold font-mono shadow-md">
              <Compass size={14} className="text-[#4F46E5] animate-spin" style={{ animationDuration: '10s' }} />
              <span>Drag to spin 3D case study wheel • Click item center to open</span>
            </div>

            <InfiniteMenu items={menuItems} scale={1.0} />
          </div>
        ) : (
          <MagicBentoGrid>
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <MagicBentoItem
                  key={project.id}
                  span={project.bentoSpan || 'col-span-1 row-span-1'}
                  index={index}
                  className="bg-[#FAFAFF] border border-[#DDE0F0] hover:border-[#4F46E5] shadow-md transition-all duration-300 rounded-3xl overflow-hidden"
                >
                  <TiltedCard maxTilt={8} className="w-full h-full flex flex-col justify-between p-6 sm:p-8">
                    {/* Top Header */}
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F2F3FC] border border-[#DDE0F0] text-[#1E1B4B] text-[11px] font-bold uppercase tracking-wider mb-3 font-mono">
                          <Sparkles size={11} className="text-[#4F46E5]" />
                          <span>{CATEGORY_DISPLAY_MAP[project.category]}</span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-[#09090F] tracking-tight group-hover:text-[#4F46E5] transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#2D2B4A] mt-1 line-clamp-2">
                          {project.tagline}
                        </p>
                      </div>

                      <Link
                        to={`/projects/${project.slug}`}
                        className="w-10 h-10 rounded-full bg-[#F2F3FC] hover:bg-[#4F46E5] text-[#09090F] hover:text-white flex items-center justify-center transition-all duration-300 shrink-0 shadow-sm border border-[#DDE0F0] group-hover:scale-110"
                        aria-label={`View details for ${project.title}`}
                      >
                        <ArrowUpRight size={18} />
                      </Link>
                    </div>

                    {/* Middle Summary & Tech Stack */}
                    <div className="my-6 space-y-4">
                      <p className="text-xs sm:text-sm text-[#2D2B4A] leading-relaxed line-clamp-3">
                        {project.summary}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.slice(0, 4).map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded-md bg-[#F2F3FC] border border-[#DDE0F0] text-[#1E1B4B] text-[10px] font-bold font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 4 && (
                          <span className="px-2 py-0.5 rounded-md bg-[#F2F3FC] text-[#6B6880] text-[10px] font-bold font-mono">
                            +{project.techStack.length - 4}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Bottom ROI Metrics Pill */}
                    <div className="pt-4 border-t border-[#DDE0F0] flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-4">
                        {project.metrics.slice(0, 2).map((metric, i) => (
                          <div key={i} className="flex flex-col">
                            <span className="text-base sm:text-lg font-black text-[#4F46E5] font-mono tracking-tight">
                              {metric.value}
                            </span>
                            <span className="text-[10px] uppercase tracking-wider text-[#6B6880] font-mono">
                              {metric.label}
                            </span>
                          </div>
                        ))}
                      </div>

                      <Link
                        to={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-[#09090F] uppercase tracking-wider group-hover:text-[#4F46E5] transition-colors"
                      >
                        <span>Explore Case Study</span>
                        <ArrowUpRight size={13} />
                      </Link>
                    </div>
                  </TiltedCard>
                </MagicBentoItem>
              ))}
            </AnimatePresence>
          </MagicBentoGrid>
        )}
      </Container>
    </SectionWrapper>
  );
};

