import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import {
  Home,
  User,
  Layers,
  Cpu,
  Briefcase,
  BookOpen,
  Mail,
  Sparkles,
} from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  anchor: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { id: 'hero', label: 'Home', anchor: '/', icon: Home },
  { id: 'about', label: 'About', anchor: '/#about', icon: User },
  { id: 'projects', label: 'Case Studies', anchor: '/#projects', icon: Layers },
  { id: 'skills', label: 'Tech Stack', anchor: '/#skills', icon: Cpu },
  { id: 'experience', label: 'Timeline', anchor: '/#experience', icon: Briefcase },
  { id: 'blog', label: 'Insights', anchor: '/#blog', icon: BookOpen },
  { id: 'contact', label: 'Contact', anchor: '/#contact', icon: Mail },
];

export const BubbleMenu: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const prefersReducedMotion = useReducedMotion();
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  // Track scroll position on HomePage to update active section
  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection('');
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      if (scrollPosition < 500) {
        setActiveSection('hero');
        return;
      }

      const sections = ['about', 'projects', 'skills', 'experience', 'blog', 'contact'];
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleNavClick = (item: NavItem) => {
    if (item.anchor === '/') {
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
      } else {
        navigate('/');
      }
    } else if (item.anchor.startsWith('/#')) {
      const targetId = item.anchor.replace('/#', '');
      if (location.pathname === '/') {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
        }
      } else {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
          }
        }, 150);
      }
    }
  };

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 px-2 pointer-events-auto">
      <motion.div
        initial={prefersReducedMotion ? false : { y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 350, damping: 25, delay: 0.2 }}
        className="flex items-center gap-1 sm:gap-1.5 p-2 rounded-full bg-slate-950/85 backdrop-blur-xl border border-slate-800 shadow-2xl shadow-cyan-500/10"
      >
        {/* Toggle Collapse/Expand Button for mobile compactness if needed */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 flex items-center justify-center transition-colors shrink-0"
          title={isExpanded ? 'Minimize Navigation' : 'Expand Navigation'}
          aria-label="Toggle Navigation Dock"
        >
          <Sparkles size={16} className={isExpanded ? 'animate-pulse' : ''} />
        </button>

        {/* Navigation Dock Items */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={prefersReducedMotion ? false : { width: 0, opacity: 0 }}
              animate={{ width: 'auto', opacity: 1 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { width: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="flex items-center gap-1 sm:gap-1.5 overflow-hidden px-1"
            >
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                const isHovered = hoveredId === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item)}
                    onMouseEnter={() => setHoveredId(item.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className={`relative group flex items-center gap-1.5 px-3 sm:px-3.5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 shrink-0 ${
                      isActive
                        ? 'text-white bg-cyan-500/20 border border-cyan-500/40 shadow-sm shadow-cyan-500/20'
                        : 'text-slate-400 hover:text-white hover:bg-slate-900/80 border border-transparent'
                    }`}
                    aria-label={`Navigate to ${item.label}`}
                  >
                    <Icon
                      size={15}
                      className={isActive ? 'text-cyan-400 scale-110 transition-transform' : 'text-slate-400 group-hover:text-cyan-400 transition-colors'}
                    />

                    {/* Label is shown on desktop or when active/hovered */}
                    <span className="hidden md:inline font-mono tracking-tight text-xs">
                      {item.label}
                    </span>

                    {/* Tooltip on hover for mobile/tablet when collapsed/icon-only */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.9 }}
                          transition={{ duration: 0.15 }}
                          className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg bg-slate-900 border border-cyan-500/40 text-cyan-300 text-[11px] font-bold font-mono uppercase tracking-wider whitespace-nowrap shadow-xl pointer-events-none md:hidden"
                        >
                          {item.label}
                          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 border-r border-b border-cyan-500/40 rotate-45" />
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Active Bottom Glow Indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="active-bubble-dot"
                        className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-1 bg-cyan-400 rounded-full shadow-sm shadow-cyan-400"
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
