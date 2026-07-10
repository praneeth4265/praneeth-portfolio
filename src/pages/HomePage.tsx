import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Container } from '@/components/ui/Container';
import { DecryptedText } from '@/components/reactbits/text/DecryptedText';
import { siteConfig } from '@/data/site-config';

export const HomePage: React.FC = () => {
  return (
    <main className="w-full relative overflow-x-hidden">
      {/* 1. Hero Section (Full viewport, dark theme) */}
      <HeroSection />

      {/* 2. About Section Shell (Light theme per ANIM-04 alternation) */}
      <SectionWrapper id="about" theme="light">
        <Container>
          <div className="max-w-3xl mx-auto text-center py-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00F0FF] bg-black/5 px-3 py-1 rounded-full">
              01 // Professional Narrative
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mt-4 mb-6">
              About Me
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Phase 2 (`ABOUT-01` through `ABOUT-04`) will populate this section with an interactive bio, scroll-linked `ScrollReveal` text animations, `TrueFocus` phrase highlighting, and a dynamic photo reveal.
            </p>
          </div>
        </Container>
      </SectionWrapper>

      {/* 3. Projects Section Shell (Dark theme per ANIM-04 alternation) */}
      <SectionWrapper id="projects" theme="dark">
        <Container>
          <div className="max-w-3xl mx-auto text-center py-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00F0FF] bg-white/5 px-3 py-1 rounded-full">
              02 // Proof of Craft
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mt-4 mb-6">
              Case Studies & Campaigns
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              Phase 2 (`PROJ-01` through `PROJ-05`) will deploy the `MagicBento` grid structure showcasing interactive 3D `TiltedCard` project case studies with dynamic metrics and direct links to detail views.
            </p>
          </div>
        </Container>
      </SectionWrapper>

      {/* 4. Skills Section Shell (Light theme per ANIM-04 alternation) */}
      <SectionWrapper id="skills" theme="light">
        <Container>
          <div className="max-w-3xl mx-auto text-center py-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8B5CF6] bg-black/5 px-3 py-1 rounded-full">
              03 // Technical Matrix
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mt-4 mb-6">
              Skills & Tech Stack
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Phase 2 (`SKILL-01` through `SKILL-03`) will launch an interactive skill matrix featuring physics-driven floating `Antigravity` tags across Marketing Strategy, CS Engineering, and Data Attribution.
            </p>
          </div>
        </Container>
      </SectionWrapper>

      {/* 5. Experience Section Shell (Dark theme per ANIM-04 alternation) */}
      <SectionWrapper id="experience" theme="dark">
        <Container>
          <div className="max-w-3xl mx-auto text-center py-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00F0FF] bg-white/5 px-3 py-1 rounded-full">
              04 // Career Chronology
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mt-4 mb-6">
              Experience & Timeline
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              Phase 2 (`EXP-01` through `EXP-03`) will render a visual work timeline with scroll-triggered `SplitText` and `ScrollReveal` animations detailing achievements at each step.
            </p>
          </div>
        </Container>
      </SectionWrapper>

      {/* 6. Blog / Insights Section Shell (Light theme per ANIM-04 alternation) */}
      <SectionWrapper id="blog" theme="light">
        <Container>
          <div className="max-w-3xl mx-auto text-center py-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#10B981] bg-black/5 px-3 py-1 rounded-full">
              05 // Thought Leadership
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mt-4 mb-6">
              Insights & Articles
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Phase 2 (`BLOG-01` through `BLOG-03`) will display interactive post previews utilizing `Shuffle` / `TextType` entrance animations directly sourced from `src/data/blog.ts`.
            </p>
          </div>
        </Container>
      </SectionWrapper>

      {/* 7. Testimonials Section Shell (Dark theme per ANIM-04 alternation) */}
      <SectionWrapper id="testimonials" theme="dark">
        <Container>
          <div className="max-w-3xl mx-auto text-center py-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#00F0FF] bg-white/5 px-3 py-1 rounded-full">
              06 // Social Proof
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mt-4 mb-6">
              Testimonials
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              Phase 2 (`TEST-01` through `TEST-03`) will feature client quotes and ROI highlights presented through an interactive `ScrollStack` / card carousel layout.
            </p>
          </div>
        </Container>
      </SectionWrapper>

      {/* 8. Contact Section Shell (Light theme transitioning into CTA footer) */}
      <SectionWrapper id="contact" theme="light" className="pb-36">
        <Container>
          <div className="max-w-3xl mx-auto text-center py-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8B5CF6] bg-black/5 px-3 py-1 rounded-full">
              07 // Conversion Engine
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mt-4 mb-6">
              Let's Scale Together
            </h2>
            <div className="text-xl text-gray-600 font-medium mb-8">
              <DecryptedText text={siteConfig.email} speed={50} className="text-black font-semibold" />
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Phase 2 (`CTA-01` through `CTA-04`) will deploy the high-converting conversion CTA section engineered per Fitts's Law with `TextPressure` headlines, `LiquidChrome` ambient backgrounds, and one-click direct communication options.
            </p>
          </div>
        </Container>
      </SectionWrapper>
    </main>
  );
};
