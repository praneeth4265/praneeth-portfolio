import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';

export const HomePage: React.FC = () => {
  return (
    <main className="w-full relative overflow-x-hidden">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. About Section */}
      <AboutSection />

      {/* 3. Projects Section */}
      <ProjectsSection />

      {/* 4. Skills Section */}
      <SkillsSection />

      {/* 5. Experience Section */}
      <ExperienceSection />

      {/* 6. Testimonials Section */}
      <TestimonialsSection />

      {/* 7. Contact Section */}
      <ContactSection />
    </main>
  );
};
