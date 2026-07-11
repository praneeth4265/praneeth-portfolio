import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';

export const HomePage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.substring(1);
      
      const scrollToElement = () => {
        const element = document.getElementById(targetId);
        if (element) {
          // Wait briefly for full rendering calculations to settle
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 50);
          return true;
        }
        return false;
      };

      // Try immediately; if not rendered, retry up to 10 times
      if (!scrollToElement()) {
        let attempts = 0;
        const interval = setInterval(() => {
          attempts++;
          if (scrollToElement() || attempts > 10) {
            clearInterval(interval);
          }
        }, 100);
        return () => clearInterval(interval);
      }
    }
  }, [location.hash]);
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
