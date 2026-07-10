import React from 'react';
import { motion } from 'motion/react';
import { Aurora } from '@/components/reactbits/backgrounds/Aurora';
import { ScrambledText } from '@/components/reactbits/text/ScrambledText';
import { RotatingText } from '@/components/reactbits/text/RotatingText';
import { Container } from '@/components/ui/Container';
import { siteConfig } from '@/data/site-config';
import { ArrowDown, Sparkles, Terminal } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/utils/animation-variants';

export const HeroSection: React.FC = () => {
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
      {/* Animated Aurora Background */}
      <Aurora />

      <Container className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Top Pill Badge */}
          <motion.div 
            variants={fadeInUp}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 shadow-lg shadow-[#00F0FF]/5"
          >
            <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-gray-300 flex items-center gap-1.5">
              <Terminal size={13} className="text-[#00F0FF]" />
              Engineered Compulsion & Growth
            </span>
          </motion.div>

          {/* Profile Portrait Badge */}
          <motion.div variants={fadeInUp} className="mb-5">
            <div className="relative p-1 rounded-full bg-gradient-to-tr from-cyan-500 via-purple-500 to-emerald-500 shadow-2xl shadow-cyan-500/20 group cursor-pointer">
              <img
                src={siteConfig.avatarUrl}
                alt={siteConfig.name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-slate-950 group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-slate-950 animate-pulse" title="Available for work" />
            </div>
          </motion.div>

          {/* Main Name Heading with ScrambledText Reveal */}
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-6 select-none"
          >
            <span className="block text-gray-400 text-lg sm:text-2xl font-normal tracking-normal mb-2 font-mono">
              Hello, I am
            </span>
            <ScrambledText 
              text={siteConfig.name} 
              speed={35} 
              delay={300}
              className="bg-gradient-to-r from-white via-[#F3F4F6] to-[#9CA3AF] bg-clip-text text-transparent drop-shadow-sm"
            />
          </motion.h1>

          {/* Dynamic Role / Title via RotatingText */}
          <motion.div 
            variants={fadeInUp}
            className="text-xl sm:text-3xl md:text-4xl font-semibold text-gray-300 mb-8 flex flex-wrap items-center justify-center gap-3"
          >
            <span>Architecting</span>
            <span className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-[#00F0FF]/20 to-[#8B5CF6]/20 border border-[#00F0FF]/40 text-[#00F0FF] shadow-[0_0_20px_rgba(0,240,255,0.15)]">
              <RotatingText items={siteConfig.roles} interval={3200} />
            </span>
          </motion.div>

          {/* Short Bio Tagline */}
          <motion.p 
            variants={fadeInUp}
            className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
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
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#00F0FF] to-[#8B5CF6] text-black font-bold text-base sm:text-lg rounded-full shadow-[0_0_30px_rgba(0,240,255,0.4)] flex items-center justify-center space-x-2 transition-all cursor-pointer"
            >
              <Sparkles size={18} className="text-black" />
              <span>Explore Case Studies</span>
            </motion.a>

            <motion.a
              href="#contact"
              onClick={scrollToContact}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-semibold text-base sm:text-lg rounded-full border border-white/20 backdrop-blur-md flex items-center justify-center space-x-2 transition-all cursor-pointer"
            >
              <span>Get in Touch</span>
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 text-gray-400 hover:text-[#00F0FF] transition-colors cursor-pointer"
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <ArrowDown size={16} />
      </motion.a>
    </section>
  );
};
