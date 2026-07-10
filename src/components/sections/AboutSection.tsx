import React from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Container } from '@/components/ui/Container';
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-bold uppercase tracking-wider shadow-sm">
              <Sparkles size={14} />
              <span>Architecting Cognitive Compulsion</span>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight">
                Bridging Data Science & Full-Funnel Marketing.
              </h2>
              <TrueFocus
                sentence={focusPhrases}
                blurAmount={2}
                className="my-1"
              />
            </div>

            <div className="text-base sm:text-lg md:text-xl text-slate-600 font-normal leading-relaxed">
              <p>
                I bridge the gap between advanced computer science engineering and full-funnel digital marketing. Pursuing my B.E. in <strong className="text-slate-900 font-bold text-cyan-600">Computer Science (AI/ML)</strong> from CBIT alongside a Postgraduate Program in <strong className="text-slate-900 font-bold text-cyan-600">Digital Marketing</strong> from Digital Nest School of Business, I architect predictive data pipelines, high-velocity ad campaigns, programmatic SEO matrices, and conversion funnels designed per neuromarketing principles.
              </p>
            </div>

            {/* Dual Competency Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-xl hover:border-cyan-400 hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  Digital Nest School of Business
                </h3>
                <p className="text-sm font-semibold text-cyan-600 mb-3">
                  Postgraduate Program in Digital Marketing ('26)
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Mastering the 21-module curriculum: Omnichannel Acquisition, CRO Funnels, ABM B2B, Generative AI for Ads, and Looker Studio Data Attribution.
                </p>
              </div>

              <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-xl hover:border-purple-500 hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Code2 size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  Chaitanya Bharathi Institute of Technology
                </h3>
                <p className="text-sm font-semibold text-purple-600 mb-3">
                  B.E. Computer Science & Engineering ('26)
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Engineering modern Full Stack React & Node applications, programmatic technical SEO tools, high-concurrency APIs, and data automation scripts.
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual / Avatar Column */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center gap-6 w-full max-w-md mx-auto lg:sticky lg:top-28 pt-4 lg:pt-0">
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden border-2 border-cyan-500/30 shadow-2xl shadow-cyan-500/10 group bg-slate-950">
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent z-10 pointer-events-none" />
              
              <img
                src={siteConfig.avatarUrl}
                alt={siteConfig.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/20 backdrop-blur-md border border-cyan-500/40 text-cyan-300 text-xs font-bold mb-3 shadow-md">
                  <Zap size={13} className="text-cyan-400" />
                  <span>Available for Strategic Roles</span>
                </div>
                <h4 className="text-2xl font-black text-white tracking-tight">
                  {siteConfig.name}
                </h4>
                <p className="text-sm font-medium text-slate-300 mt-0.5">
                  {siteConfig.location}
                </p>
              </div>
            </div>

            {/* Verified Mastery Pill (now stacked cleanly below the portrait without overlap) */}
            <div className="w-full p-5 rounded-2xl bg-white border border-slate-200 shadow-xl flex items-center gap-4 hover:border-emerald-500/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                <Award size={24} />
              </div>
              <div className="flex-1">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  Verified Real-World Mastery
                </div>
                <div className="text-base font-black text-slate-900 mt-0.5">
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
