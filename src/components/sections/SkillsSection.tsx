import React, { useState } from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Container } from '@/components/ui/Container';
import { skillsData } from '@/data/skills';
import type { SkillItem } from '@/data/skills';
import { motion } from 'motion/react';
import { BarChart3, Cpu, Lightbulb, ShieldCheck, Sparkles, Terminal } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    { id: 'All', label: 'All Capabilities', icon: Sparkles },
    { id: 'Technical & CS', label: 'Technical & Full Stack', icon: Terminal },
    { id: 'Marketing Strategy', label: 'Marketing Strategy', icon: Lightbulb },
    { id: 'Analytics & Data', label: 'Analytics & Attribution', icon: BarChart3 },
    { id: 'Creative & UX', label: 'Creative & UX Engineering', icon: Cpu },
  ];

  const filteredSkills: SkillItem[] = selectedCategory === 'All'
    ? skillsData
    : skillsData.filter((s) => s.category === selectedCategory);

  return (
    <SectionWrapper id="skills" theme="light" withTopBorder>
      <Container>
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
            <ShieldCheck size={14} />
            <span>Dual-Engine Proficiency</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground">
            The Growth Engineer Stack.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            A potent combination of 60+ digital marketing tools and modern full stack development capabilities.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs md:text-sm font-bold transition-all duration-300 ${
                  isActive
                    ? 'bg-primary text-white shadow-xl shadow-primary/25 scale-105'
                    : 'bg-card border border-border/80 text-muted-foreground hover:text-foreground hover:border-primary/40'
                }`}
              >
                <Icon size={16} className={isActive ? 'text-white' : 'text-primary'} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
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
                  ? 'bg-gradient-to-br from-primary/5 via-card to-purple-500/5 border-primary/40 shadow-md shadow-primary/5'
                  : 'bg-card border-border/70 hover:border-border'
              }`}
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary px-2 py-0.5 rounded bg-primary/10">
                    {skill.category}
                  </span>
                  <h3 className="text-base font-bold text-foreground mt-2">
                    {skill.name}
                  </h3>
                </div>
                <span className="text-sm font-black font-mono text-primary">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: 'easeOut', delay: idx * 0.04 }}
                  className={`h-full rounded-full ${
                    skill.highlighted
                      ? 'bg-gradient-to-r from-primary to-purple-600'
                      : 'bg-primary/80'
                  }`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </SectionWrapper>
  );
};
