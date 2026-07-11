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
          <div className="w-10 h-10 rounded-xl bg-[#4F46E5]/10 text-[#4F46E5] flex items-center justify-center shrink-0">
            <Quote size={20} />
          </div>

          {t.metricHighlight && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F2F3FC] border border-[#DDE0F0] text-[#1E1B4B] text-xs font-bold uppercase tracking-wider font-mono">
              <TrendingUp size={13} className="text-[#4F46E5]" />
              <span>{t.metricHighlight}</span>
            </div>
          )}
        </div>

        {/* Quote Text */}
        <p className="text-base sm:text-lg md:text-xl font-medium text-[#09090F] italic leading-relaxed my-auto">
          "{t.quote}"
        </p>

        {/* Author Bio */}
        <div className="flex items-center gap-4 pt-4 border-t border-[#DDE0F0]">
          <img
            src={t.avatarUrl}
            alt={t.author}
            className="w-12 h-12 rounded-full object-cover border-2 border-[#DDE0F0]"
          />
          <div>
            <h4 className="text-base font-bold text-[#09090F] tracking-tight">
              {t.author}
            </h4>
            <p className="text-xs text-[#4F46E5] font-semibold">
              {t.role}
            </p>
            <p className="text-[11px] text-[#6B6880] font-mono">
              {t.company}
            </p>
          </div>

          <div className="ml-auto flex items-center gap-0.5 text-[#4F46E5]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} fill="currentColor" />
            ))}
          </div>
        </div>
      </div>
    ),
  }));

  return (
    <SectionWrapper id="testimonials" theme="light" withTopBorder>
      <Container>
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAFAFF] border border-[#DDE0F0] text-[#4F46E5] text-xs font-bold uppercase tracking-wider shadow-sm">
            <MessageSquareQuote size={14} />
            <span>What Actually Happened</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#09090F]">
            What they said when the numbers came in.
          </h2>
          <p className="text-base md:text-lg text-[#2D2B4A]">
            Founders, growth leads, and CMOs talking about what changed — in their revenue, their pipelines, and their thinking.
          </p>
        </div>

        {/* Interactive ScrollStack Carousel */}
        <ScrollStack items={scrollStackItems} />
      </Container>
    </SectionWrapper>
  );
};
