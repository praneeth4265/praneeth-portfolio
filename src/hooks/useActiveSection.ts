import { useState, useEffect } from 'react';
import { navigationItems } from '@/data/navigation';

export const useActiveSection = () => {
  const [activeId, setActiveId] = useState<string>('hero');

  useEffect(() => {
    const sectionIds = navigationItems.map(item => item.id);
    const elements = sectionIds
      .map(id => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Sort entries by how much they intersect or proximity to center
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.1, 0.3, 0.5]
      }
    );

    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return activeId;
};
