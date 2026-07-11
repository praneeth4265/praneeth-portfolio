import React from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Container } from '@/components/ui/Container';
import { experienceData } from '@/data/experience';
import { SplitText } from '@/components/reactbits/text/SplitText';
import { motion } from 'motion/react';
import { Briefcase, Calendar, CheckCircle2, MapPin } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <SectionWrapper id="experience" theme="light" withTopBorder>
      <Container>
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAFAFF] border border-[#DDE0F0] text-[#4F46E5] text-xs font-bold uppercase tracking-wider shadow-sm">
            <Briefcase size={14} />
            <span>Building in Two Languages Since 2022</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#09090F]">
            <SplitText text="Work that actually happened." />
          </h2>
          <p className="text-base md:text-lg text-[#2D2B4A]">
            A progression built in both code and campaigns — simultaneously. Not sequentially.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-[#DDE0F0] ml-4 md:ml-8 pl-6 md:pl-12 space-y-12">
          {experienceData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Timeline Node Dot */}
              <div className="absolute -left-[31px] md:-left-[55px] top-1.5 w-5 h-5 rounded-full bg-[#FAFAFF] border-2 border-[#4F46E5] group-hover:scale-125 group-hover:bg-[#4F46E5] transition-all duration-300 shadow-md shadow-[#4F46E5]/30" />

              {/* Card */}
              <div className="p-6 md:p-8 rounded-2xl bg-[#FAFAFF] border border-[#DDE0F0] hover:border-[#4F46E5] transition-all duration-300 shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-[#09090F] group-hover:text-[#4F46E5] transition-colors">
                      {item.role}
                    </h3>
                    <div className="text-base font-semibold text-[#4F46E5] mt-0.5">
                      {item.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-[#2D2B4A]">
                    <span className="inline-flex items-center gap-1 bg-[#F2F3FC] border border-[#DDE0F0] px-3 py-1 rounded-full text-[#1E1B4B] font-mono">
                      <Calendar size={13} className="text-[#4F46E5]" />
                      {item.period}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[#6B6880]">
                      <MapPin size={13} />
                      {item.location}
                    </span>
                  </div>
                </div>

                <p className="text-sm md:text-base text-[#2D2B4A] mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* Key Achievements */}
                <div className="space-y-2.5">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#6B6880] font-mono mb-3">
                    Proof Points
                  </div>
                  {item.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-[#2D2B4A] leading-relaxed">
                      <CheckCircle2 size={16} className="text-[#4F46E5] shrink-0 mt-0.5" />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
};
