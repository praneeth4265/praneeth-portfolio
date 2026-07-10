import React, { useState } from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Container } from '@/components/ui/Container';
import { LiquidChrome } from '@/components/reactbits/backgrounds/LiquidChrome';
import { TextPressure } from '@/components/reactbits/text/TextPressure';
import { siteConfig } from '@/data/site-config';
import { ArrowRight, Check, Copy, Mail, MapPin, Phone, Sparkles } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <SectionWrapper
      id="contact"
      theme="dark"
      withTopBorder
      className="relative overflow-hidden py-24 md:py-32"
    >
      {/* Shimmering Liquid Chrome Ambient Canvas */}
      <LiquidChrome speed={0.4} className="opacity-80" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/20 backdrop-blur-md border border-cyan-500/40 text-cyan-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles size={14} />
            <span>Direct Response Channel</span>
          </div>

          {/* Interactive Proximity Headline */}
          <div className="py-2">
            <TextPressure
              text="Let's Build Something Extraordinary."
              textColor="#ffffff"
              className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter"
            />
          </div>

          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Whether you need to scale customer acquisition channels, architect a high-converting CRO funnel, or build an AI/ML powered backend integration — let's talk.
          </p>

          {/* Large Fitts's Law Target Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            {/* Main Mailto CTA */}
            <a
              href={`mailto:${siteConfig.email}?subject=Strategic%20Inquiry%20from%20Portfolio`}
              className="w-full sm:w-auto px-8 py-5 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-lg tracking-tight transition-all duration-300 shadow-2xl shadow-cyan-500/40 hover:shadow-cyan-500/60 hover:scale-105 flex items-center justify-center gap-3 group"
            >
              <Mail size={22} />
              <span>Send Direct Email</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Copy Email Button */}
            <button
              onClick={copyEmail}
              className="w-full sm:w-auto px-6 py-5 rounded-2xl bg-slate-900/80 hover:bg-slate-800/90 backdrop-blur-md border border-slate-700 hover:border-cyan-500/60 text-white font-bold text-base transition-all duration-200 flex items-center justify-center gap-3 shadow-xl"
            >
              {copied ? (
                <>
                  <Check size={20} className="text-emerald-400" />
                  <span className="text-emerald-400">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={20} className="text-slate-400" />
                  <span>Copy Address ({siteConfig.email})</span>
                </>
              )}
            </button>
          </div>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto gap-4 pt-12 text-left">
            <div className="p-5 rounded-2xl bg-slate-900/60 backdrop-blur-md border border-slate-800/80 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <div className="text-xs uppercase font-bold tracking-wider text-slate-400">
                  Location
                </div>
                <div className="text-base font-bold text-white mt-0.5">
                  {siteConfig.location}
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 backdrop-blur-md border border-slate-800/80 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <div className="text-xs uppercase font-bold tracking-wider text-slate-400">
                  Phone / WhatsApp
                </div>
                <div className="text-base font-bold text-white mt-0.5 font-mono">
                  {siteConfig.phone}
                </div>
              </div>
            </div>
          </div>

          {/* Social Links Bar */}
          <div className="pt-12 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-6 text-sm text-slate-400">
            <div>
              © {new Date().getFullYear()} {siteConfig.name}. Engineered for Cognitive Compulsion.
            </div>

            <div className="flex items-center gap-4">
              {siteConfig.socials.map((social: { name: string; url: string; icon: string }) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors font-semibold"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
};
