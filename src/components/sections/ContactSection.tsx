import React, { useState } from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Container } from '@/components/ui/Container';
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
      theme="light"
      withTopBorder
      className="relative overflow-hidden pt-20 pb-12 md:pt-28 md:pb-16"
    >
      {/* Subtle Ambient Shimmer */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAFAFF] via-[#F2F3FC]/30 to-[#FAFAFF] opacity-70 pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="flex flex-col items-center gap-4">
            <div className="relative p-0.5 rounded-full bg-gradient-to-tr from-[#4F46E5] to-[#1E1B4B] shadow-lg shadow-[#4F46E5]/15">
              <img
                src={siteConfig.avatarUrl}
                alt={siteConfig.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-[#FAFAFF]"
              />
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-[#4F46E5] border-2 border-[#FAFAFF] animate-pulse" />
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2F3FC] border border-[#DDE0F0] text-[#4F46E5] text-xs font-bold uppercase tracking-wider shadow-sm">
              <Sparkles size={14} />
              <span>The Shortest Path to Yes</span>
            </div>
          </div>

          {/* Interactive Proximity Headline */}
          <div className="py-2">
            <TextPressure
              text="Got a problem that needs both sides?"
              textColor="#09090F"
              className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter"
            />
          </div>

          <p className="text-lg sm:text-xl text-[#2D2B4A] max-w-2xl mx-auto font-normal leading-relaxed">
            If your marketing strategy needs engineering and your tech stack needs a revenue lens — that's the exact intersection I live in. Let's talk about what's not working.
          </p>

          {/* Large Fitts's Law Target Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <button
              onClick={copyEmail}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#4F46E5] hover:bg-[#3730A3] text-white font-bold text-base sm:text-lg transition-all transform hover:-translate-y-1 shadow-lg shadow-[#4F46E5]/25 flex items-center justify-center gap-3 group"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>{copied ? 'Got it — I\'ll reach out soon!' : 'Copy My Email'}</span>
              {copied ? <Check className="w-5 h-5 text-white" /> : <Copy className="w-4 h-4 opacity-70" />}
            </button>

            <a
              href="https://www.linkedin.com/in/praneeth-chintala-70a6053b5"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#FAFAFF] hover:bg-[#F2F3FC] border border-[#DDE0F0] text-[#09090F] font-bold text-base sm:text-lg transition-all flex items-center justify-center gap-3 shadow-sm hover:border-[#4F46E5]"
            >
              <span>Let's connect on LinkedIn</span>
              <ArrowRight className="w-5 h-5 text-[#4F46E5]" />
            </a>
          </div>

          {/* Secondary Direct Contact Methods */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-8 border-t border-[#DDE0F0] max-w-xl mx-auto">
            <div className="flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-xl bg-[#F2F3FC] border border-[#DDE0F0] flex items-center justify-center text-[#4F46E5] shrink-0 shadow-sm">
                <MapPin size={18} />
              </div>
              <div>
                  <div className="text-xs uppercase font-bold tracking-wider text-[#6B6880] font-mono">
                    Based in
                  </div>
                <div className="text-base font-bold text-[#09090F] mt-0.5">
                  {siteConfig.location}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-xl bg-[#F2F3FC] border border-[#DDE0F0] flex items-center justify-center text-[#1E1B4B] shrink-0 shadow-sm">
                <Phone size={18} />
              </div>
              <div>
                <div className="text-xs uppercase font-bold tracking-wider text-[#6B6880] font-mono">
                  Phone / WhatsApp
                </div>
                <div className="text-base font-bold text-[#09090F] mt-0.5 font-mono">
                  {siteConfig.phone}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
};
