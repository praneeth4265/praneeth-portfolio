import React from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Container } from '@/components/ui/Container';
import { ScrollReveal } from '@/components/reactbits/text/ScrollReveal';
import { TrueFocus } from '@/components/reactbits/text/TrueFocus';
import { siteConfig } from '@/data/site-config';
import { Award, Code2, Sparkles, TrendingUp, Zap } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const focusPhrases = [
    'Digital Marketing Strategist',
    'CS AI/ML Engineer',
    'Neuromarketing Specialist',
    'Growth Architect',
  ];

  return (
    <SectionWrapper id="about" theme="light" withTopBorder>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
              <Sparkles size={14} />
              <span>Architecting Cognitive Compulsion</span>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground">
                Bridging Data Science & Full-Funnel Marketing.
              </h2>
              <TrueFocus
                sentence={focusPhrases}
                borderColor="#00F0FF"
                glowColor="rgba(0, 240, 255, 0.4)"
              />
            </div>

            <div className="text-lg md:text-xl text-muted-foreground font-normal leading-relaxed">
              <ScrollReveal>
                {siteConfig.longBio}
              </ScrollReveal>
            </div>

            {/* Dual Competency Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="p-6 rounded-2xl bg-card border border-border/80 shadow-lg hover:border-primary/40 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp size={24} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">
                  Digital Nest School of Business
                </h3>
                <p className="text-sm font-medium text-primary mb-2">
                  Postgraduate Program in Digital Marketing ('26)
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Mastering the 21-module curriculum: Omnichannel Acquisition, CRO Funnels, ABM B2B, Generative AI for Ads, and Looker Studio Data Attribution.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border/80 shadow-lg hover:border-purple-500/40 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Code2 size={24} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">
                  Chaitanya Bharathi Institute of Technology
                </h3>
                <p className="text-sm font-medium text-purple-600 dark:text-purple-400 mb-2">
                  B.E. Computer Science & Engineering (AI/ML '26)
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Engineering high-concurrency REST APIs, ensemble computer vision pipelines, algorithmic routing systems, and full-stack React web applications.
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual / Avatar Column */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative w-full max-w-sm aspect-square rounded-3xl overflow-hidden border-2 border-primary/30 shadow-2xl shadow-primary/10 group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none" />
              
              <img
                src={siteConfig.avatarUrl}
                alt={siteConfig.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-cyan-500/20 backdrop-blur-md border border-cyan-500/40 text-cyan-300 text-xs font-semibold mb-2">
                  <Zap size={12} />
                  <span>Available for Strategic Roles</span>
                </div>
                <h4 className="text-xl font-bold text-white tracking-tight">
                  {siteConfig.name}
                </h4>
                <p className="text-sm text-slate-300">
                  {siteConfig.location}
                </p>
              </div>
            </div>

            {/* Floating Metric Pill */}
            <div className="mt-8 sm:absolute sm:-bottom-6 sm:-left-4 z-30 p-4 rounded-2xl bg-card border border-border shadow-2xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                <Award size={20} />
              </div>
              <div>
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Verified Real-World Mastery
                </div>
                <div className="text-sm font-bold text-foreground">
                  60+ Tools & 17+ Capstone Projects
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
};
