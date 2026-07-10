import React from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Container } from '@/components/ui/Container';
import { experienceData } from '@/data/experience';
import { SplitText } from '@/components/reactbits/text/SplitText';
import { motion } from 'motion/react';
import { Briefcase, Calendar, CheckCircle2, MapPin } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <SectionWrapper id="experience" theme="dark" withTopBorder>
      <Container>
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Briefcase size={14} />
            <span>Career & Education Chronology</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
            <SplitText text="Verified Track Record." />
          </h2>
          <p className="text-base md:text-lg text-slate-400">
            A continuous trajectory of academic achievement in Computer Science & AI/ML paired with real-world strategic execution in Digital Marketing.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-8 pl-6 md:pl-12 space-y-12">
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
              <div className="absolute -left-[31px] md:-left-[55px] top-1.5 w-5 h-5 rounded-full bg-slate-900 border-2 border-cyan-400 group-hover:scale-125 group-hover:bg-cyan-400 transition-all duration-300 shadow-md shadow-cyan-500/50" />

              {/* Card */}
              <div className="p-6 md:p-8 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {item.role}
                    </h3>
                    <div className="text-base font-semibold text-cyan-400/90 mt-0.5">
                      {item.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-400">
                    <span className="inline-flex items-center gap-1 bg-slate-800 px-3 py-1 rounded-full text-slate-300">
                      <Calendar size={13} className="text-cyan-400" />
                      {item.period}
                    </span>
                    <span className="inline-flex items-center gap-1 text-slate-400">
                      <MapPin size={13} />
                      {item.location}
                    </span>
                  </div>
                </div>

                <p className="text-sm md:text-base text-slate-300 mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* Key Achievements */}
                <div className="space-y-2.5">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    Key Highlights & Execution
                  </div>
                  {item.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300/90 leading-relaxed">
                      <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
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
