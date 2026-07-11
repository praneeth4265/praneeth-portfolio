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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2F3FC] border border-[#DDE0F0] text-[#4F46E5] text-xs font-bold uppercase tracking-wider shadow-sm">
              <Sparkles size={14} />
              <span>The Rarest Overlap</span>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#09090F] leading-tight">
                The Engineer Who Sells.<br />The Marketer Who Codes.
              </h2>
              <TrueFocus
                sentence={focusPhrases}
                blurAmount={2}
                className="my-1"
              />
            </div>

            <div className="text-base sm:text-lg md:text-xl text-[#2D2B4A] font-normal leading-relaxed">
              <p>
                Most people pick a lane. I refused to. Finishing a B.E. in <strong className="text-[#09090F] font-bold">Computer Science (AI/ML)</strong> at CBIT while simultaneously completing a Postgraduate in <strong className="text-[#09090F] font-bold">Digital Marketing</strong> at Digital Nest — I don't just understand both worlds, I build in both simultaneously. Predictive pipelines that feed your ad targeting. Neuromarketing principles baked into the UX your customers never consciously notice. Revenue-engineered funnels that work because they're <em>designed</em>, not guessed.
              </p>
            </div>

            {/* Dual Competency Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="p-6 sm:p-7 rounded-3xl bg-[#FAFAFF] border border-[#DDE0F0] shadow-lg hover:border-[#4F46E5] hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-[#4F46E5]/10 flex items-center justify-center text-[#4F46E5] mb-4 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp size={24} />
                </div>
                <h3 className="text-lg font-bold text-[#09090F] mb-1">
                  Digital Nest School of Business
                </h3>
                <p className="text-sm font-semibold text-[#4F46E5] mb-3">
                  Postgraduate Program in Digital Marketing ('26)
                </p>
                <p className="text-xs sm:text-sm text-[#2D2B4A] leading-relaxed">
                  A 21-module curriculum built around real brand briefs. Not theory — live campaigns, client data, and immediate consequences for every strategy that doesn't hold up.
                </p>
              </div>

              <div className="p-6 sm:p-7 rounded-3xl bg-[#FAFAFF] border border-[#DDE0F0] shadow-lg hover:border-[#1E1B4B] hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-[#1E1B4B]/10 flex items-center justify-center text-[#1E1B4B] mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Code2 size={24} />
                </div>
                <h3 className="text-lg font-bold text-[#09090F] mb-1">
                  Chaitanya Bharathi Institute of Technology
                </h3>
                <p className="text-sm font-semibold text-[#1E1B4B] mb-3">
                  B.E. Computer Science & Engineering ('26)
                </p>
                <p className="text-xs sm:text-sm text-[#2D2B4A] leading-relaxed">
                  Where the obsession with systems started. From AI diagnostic pipelines to full-stack web platforms — built to ship, not just to pass peer review.
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual / Avatar Column */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center gap-6 w-full max-w-md mx-auto lg:sticky lg:top-28 pt-4 lg:pt-0">
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden border-2 border-[#DDE0F0] shadow-2xl shadow-[#4F46E5]/10 group bg-[#FAFAFF]">
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090F]/85 via-[#09090F]/20 to-transparent z-10 pointer-events-none" />
              
              <img
                src={siteConfig.avatarUrl}
                alt={siteConfig.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAFAFF]/90 backdrop-blur-md border border-[#DDE0F0] text-[#09090F] text-xs font-bold mb-3 shadow-md">
                  <Zap size={13} className="text-[#4F46E5]" />
                  <span>Open to the Right Roles</span>
                </div>
                <h4 className="text-2xl font-black text-white tracking-tight">
                  {siteConfig.name}
                </h4>
                <p className="text-sm font-medium text-[#F2F3FC] mt-0.5">
                  {siteConfig.location}
                </p>
              </div>
            </div>

            {/* Verified Mastery Pill */}
            <div className="w-full p-5 rounded-2xl bg-[#FAFAFF] border border-[#DDE0F0] shadow-lg flex items-center gap-4 hover:border-[#4F46E5] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#4F46E5]/10 text-[#4F46E5] flex items-center justify-center shrink-0">
                <Award size={24} />
              </div>
              <div className="flex-1">
                  <div className="text-[11px] font-bold text-[#6B6880] uppercase tracking-wider font-mono">
                    Tools built. Results proven.
                  </div>
                  <div className="text-base font-black text-[#09090F] mt-0.5">
                    60+ Tools Mastered · 17 Capstone Projects
                  </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
};
