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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
              <BookOpen size={14} />
              <span>Thought Leadership & Technical Insights</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground">
              Neuromarketing & AI Notes.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Deep dives into programmatic SEO, conversion rate psychology, predictive LTV models, and modern growth engineering.
            </p>
          </div>

          <a
            href="#all-articles"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-card border border-border/80 hover:border-primary text-sm font-bold text-foreground transition-all duration-200 hover:shadow-md shrink-0 self-start md:self-auto"
          >
            <span>Read All Articles</span>
            <ArrowUpRight size={16} className="text-primary" />
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
              className="group flex flex-col rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shadow-lg hover:border-cyan-400 hover:shadow-xl transition-all duration-300 text-white"
            >
              {/* Cover Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-800">
                <img
                  src={post.coverUrl}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider border border-white/10">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-xs font-medium text-slate-400">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-700" />
                    <span className="inline-flex items-center gap-1 text-cyan-400 font-semibold">
                      <Clock size={13} />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-2">
                    <Shuffle text={post.title} triggerOnHover duration={500} />
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-bold text-cyan-400">
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
