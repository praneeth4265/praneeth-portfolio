import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { BlogSection } from '@/components/sections/BlogSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';

export const HomePage: React.FC = () => {
  return (
    <main className="w-full relative overflow-x-hidden">
      {/* 1. Hero Section (Full viewport, dark theme) */}
      <HeroSection />

      {/* 2. About Section (Light theme) */}
      <AboutSection />

      {/* 3. Projects Section (Dark theme) */}
      <ProjectsSection />

      {/* 4. Skills Section (Light theme) */}
      <SkillsSection />

      {/* 5. Experience Section (Dark theme) */}
      <ExperienceSection />

      {/* 6. Blog / Insights Section (Light theme) */}
      <BlogSection />

      {/* 7. Testimonials Section (Dark theme) */}
      <TestimonialsSection />

      {/* 8. Contact Section (Dark transition conversion engine) */}
      <ContactSection />
    </main>
  );
};
