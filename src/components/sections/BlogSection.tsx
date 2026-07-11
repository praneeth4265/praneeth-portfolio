import React from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Container } from '@/components/ui/Container';
import { blogPostsData } from '@/data/blog';
import { Shuffle } from '@/components/reactbits/text/Shuffle';
import { ArrowUpRight, BookOpen, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export const BlogSection: React.FC = () => {
  return (
    <SectionWrapper id="blog" theme="light" withTopBorder>
      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2F3FC] border border-[#DDE0F0] text-[#4F46E5] text-xs font-bold uppercase tracking-wider">
              <BookOpen size={14} />
              <span>Thinking Out Loud</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#09090F]">
              Writing that costs you something if you ignore it.
            </h2>
            <p className="text-base md:text-lg text-[#2D2B4A]">
              Breakdowns of the exact thinking behind what worked — SEO architectures, attribution models, creative psychology, and the uncomfortable gaps between marketing theory and actual outcomes.
            </p>
          </div>

          <a
            href="#all-articles"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FAFAFF] border border-[#DDE0F0] hover:border-[#4F46E5] text-sm font-bold text-[#09090F] transition-all duration-200 hover:shadow-md shrink-0 self-start md:self-auto"
          >
            <span>All Articles →</span>
            <ArrowUpRight size={16} className="text-[#4F46E5]" />
          </a>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPostsData.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col rounded-2xl bg-[#FAFAFF] border border-[#DDE0F0] overflow-hidden shadow-sm hover:border-[#4F46E5]/50 hover:shadow-lg hover:shadow-[#4F46E5]/6 transition-all duration-300"
            >
              {/* Cover Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#F2F3FC]">
                <img
                  src={post.coverUrl}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090F]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-[#FAFAFF]/90 backdrop-blur-md text-[#4F46E5] text-[11px] font-bold uppercase tracking-wider border border-[#DDE0F0] shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-xs font-medium text-[#6B6880]">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-[#DDE0F0]" />
                    <span className="inline-flex items-center gap-1 text-[#4F46E5] font-semibold">
                      <Clock size={13} />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#09090F] group-hover:text-[#4F46E5] transition-colors line-clamp-2 leading-snug">
                    <Shuffle text={post.title} triggerOnHover duration={500} />
                  </h3>

                  <p className="text-xs sm:text-sm text-[#2D2B4A] leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#DDE0F0] flex items-center justify-between text-xs font-bold text-[#4F46E5]">
                  <span>Read Full Article</span>
                  <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
};
