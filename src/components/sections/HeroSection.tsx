import React from 'react';
import { motion } from 'motion/react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { ScrambledText } from '@/components/reactbits/text/ScrambledText';
import { RotatingText } from '@/components/reactbits/text/RotatingText';
import { Container } from '@/components/ui/Container';
import { siteConfig } from '@/data/site-config';
import { ArrowDown, Sparkles, Terminal } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/utils/animation-variants';

const LiquidEther = React.lazy(() => import('@/components/reactbits/backgrounds/LiquidEther'));

export const HeroSection: React.FC = () => {
  const reducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = React.useState(false);
  const [hasWebGL, setHasWebGL] = React.useState(true);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    setIsMobile(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    
    // Detect WebGL support (e.g., handles Brave Shields block or disabled WebGL)
    try {
      const canvas = document.createElement('canvas');
      const support = !!(
        window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
      );
      setHasWebGL(support);
    } catch (e) {
      setHasWebGL(false);
    }

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const showInteractiveBackground = !reducedMotion && !isMobile && hasWebGL;

  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const elem = document.getElementById('projects');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const elem = document.getElementById('contact');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      aria-label="Introduction and Overview"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-24 px-4 sm:px-6 lg:px-8"
    >
      {/* Background Layer: WebGL LiquidEther or Static CSS Fallback */}
      {showInteractiveBackground ? (
        <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
          <React.Suspense fallback={<div className="absolute inset-0 bg-[#FAFAFF]" />}>
            <LiquidEther
              colors={['#4F46E5', '#DDE0F0', '#1E1B4B', '#9089FC']}
              mouseForce={22}
              cursorSize={120}
              resolution={0.5}
              autoDemo={true}
              autoSpeed={0.4}
              autoIntensity={2.0}
              autoResumeDelay={3000}
              isBounce={false}
              isViscous={false}
            />
          </React.Suspense>
        </div>
      ) : (
        <div 
          className="absolute inset-0 z-0 w-full h-full pointer-events-none bg-[#FAFAFF]"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(79, 70, 229, 0.08) 0%, rgba(221, 224, 240, 0.03) 50%, transparent 100%)'
          }}
        />
      )}

      <Container className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Top Status Badge */}
          <motion.div 
            variants={fadeInUp}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#F2F3FC] border border-[#DDE0F0] mb-6 shadow-sm"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#1E1B4B] animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#1E1B4B] flex items-center gap-1.5 font-bold">
                <Terminal size={13} className="text-[#4F46E5]" />
                $ status: open to the right problem
              </span>
          </motion.div>

          {/* Profile Portrait Badge */}
          <motion.div variants={fadeInUp} className="mb-5">
            <div className="relative p-1 rounded-full bg-gradient-to-tr from-[#4F46E5] via-[#DDE0F0] to-[#1E1B4B] shadow-xl shadow-[#4F46E5]/15 group cursor-pointer">
              <img
                src="/images/hero_avatar.jpg"
                alt={siteConfig.name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-[#FAFAFF] group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-[#4F46E5] border-2 border-[#FAFAFF] animate-pulse" title="Available for work" />
            </div>
          </motion.div>

          {/* Main Name Heading with ScrambledText Reveal */}
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-[#09090F] mb-6 select-none"
          >
            <span className="block text-[#6B6880] text-lg sm:text-2xl font-normal tracking-normal mb-2 font-mono">
              The marketer who ships code.
            </span>
            <ScrambledText 
              text={siteConfig.name} 
              speed={35} 
              delay={300}
              className="text-[#09090F] drop-shadow-sm"
            />
          </motion.h1>

          {/* Dynamic Role / Title via RotatingText */}
          <motion.div 
            variants={fadeInUp}
            className="text-xl sm:text-3xl md:text-4xl font-semibold text-[#2D2B4A] mb-8 flex flex-wrap items-center justify-center gap-3"
          >
            <span>Campaigns built on</span>
            <span className="px-4 py-1.5 rounded-xl bg-[#F2F3FC] border border-[#DDE0F0] text-[#4F46E5] shadow-sm font-bold">
              <RotatingText items={siteConfig.roles} interval={3200} />
            </span>
          </motion.div>

          {/* Short Bio Tagline */}
          <motion.p 
            variants={fadeInUp}
            className="text-base sm:text-xl text-[#2D2B4A] max-w-2xl mx-auto mb-12 leading-relaxed font-normal"
          >
            {siteConfig.shortBio}
          </motion.p>

          {/* Large Fitts's Law Primary & Secondary CTAs above fold */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md mx-auto"
          >
            <motion.a
              href="#projects"
              onClick={scrollToProjects}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 bg-[#4F46E5] text-white font-bold text-base sm:text-lg rounded-full shadow-lg shadow-[#4F46E5]/25 flex items-center justify-center space-x-2 transition-all cursor-pointer"
            >
              <Sparkles size={18} className="text-white" />
              <span>See the Proof</span>
            </motion.a>

            <motion.a
              href="#contact"
              onClick={scrollToContact}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 bg-[#F2F3FC] hover:bg-[#DDE0F0]/50 text-[#09090F] font-semibold text-base sm:text-lg rounded-full border border-[#DDE0F0] flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-sm"
            >
              <span>Start a Conversation</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </Container>

      {/* Bottom Scroll Indicator */}
      <motion.a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
        aria-label="Scroll to About Section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 text-[#6B6880] hover:text-[#4F46E5] transition-colors cursor-pointer"
      >
        <span className="text-xs font-mono tracking-widest uppercase">Keep going</span>
        <ArrowDown size={16} />
      </motion.a>
    </section>
  );
};
