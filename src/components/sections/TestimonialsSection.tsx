import React from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Container } from '@/components/ui/Container';
import { testimonialsData } from '@/data/testimonials';
import { ScrollStack } from '@/components/reactbits/cards/ScrollStack';
import { MessageSquareQuote, Quote, Star, TrendingUp } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const scrollStackItems = testimonialsData.map((t) => ({
    id: t.id,
    content: (
      <div className="h-full flex flex-col justify-between">
        {/* Top Quote Icon & Metric Highlight */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
            <Quote size={20} />
          </div>

          {t.metricHighlight && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <TrendingUp size={13} />
              <span>{t.metricHighlight}</span>
            </div>
          )}
        </div>

        {/* Quote Text */}
        <p className="text-base sm:text-lg md:text-xl font-medium text-white italic leading-relaxed my-auto">
          "{t.quote}"
        </p>

        {/* Author Bio */}
        <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
          <img
            src={t.avatarUrl}
            alt={t.author}
            className="w-12 h-12 rounded-full object-cover border-2 border-cyan-400/40"
          />
          <div>
            <h4 className="text-base font-bold text-white tracking-tight">
              {t.author}
            </h4>
            <p className="text-xs text-cyan-400 font-semibold">
              {t.role}
            </p>
            <p className="text-[11px] text-slate-400">
              {t.company}
            </p>
          </div>

          <div className="ml-auto flex items-center gap-0.5 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} fill="currentColor" />
            ))}
          </div>
        </div>
      </div>
    ),
  }));

  return (
    <SectionWrapper id="testimonials" theme="dark" withTopBorder>
      <Container>
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <MessageSquareQuote size={14} />
            <span>Undeniable Social Proof</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
            Client & Stakeholder Impact.
          </h2>
          <p className="text-base md:text-lg text-slate-400">
            What founders, growth leaders, and engineering directors say about partnering on high-velocity digital transformation.
          </p>
        </div>

        {/* Interactive ScrollStack Carousel */}
        <ScrollStack items={scrollStackItems} />
      </Container>
    </SectionWrapper>
  );
};
