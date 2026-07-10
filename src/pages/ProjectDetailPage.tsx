import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { projectsData } from '@/data/projects';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find(p => p.slug === slug);

  return (
    <div className="min-h-screen bg-[#0A0A0E] text-[#F3F4F6] py-28 px-4 sm:px-6 lg:px-8">
      <Container>
        <Link 
          to="/" 
          className="inline-flex items-center space-x-2 text-sm font-medium text-[#00F0FF] hover:underline mb-8"
        >
          <ArrowLeft size={16} />
          <span>Back to Portfolio</span>
        </Link>

        {project ? (
          <div className="bg-[#12121A] border border-white/10 rounded-2xl p-8 sm:p-12 shadow-2xl">
            <div className="inline-block px-3 py-1 bg-[#00F0FF]/10 text-[#00F0FF] text-xs font-mono uppercase tracking-widest rounded-full mb-4">
              {project.category}
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
              {project.title}
            </h1>
            <p className="text-lg text-gray-400 mb-8 max-w-3xl">
              {project.tagline}
            </p>

            {/* Placeholder notification for full Phase 3 detail view */}
            <div className="p-6 bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 rounded-xl my-8">
              <p className="text-sm text-gray-300">
                <strong className="text-white">Note:</strong> Full interactive case study breakdown (campaign metrics, creative asset gallery, strategy narrative, and technical marketing architecture) will be finalized in Phase 3 (`PROJ-04`).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="p-4 bg-black/40 border border-white/5 rounded-xl">
                  <div className="text-xs font-mono text-gray-400 uppercase">{m.label}</div>
                  <div className="text-2xl font-bold text-[#00F0FF] mt-1">{m.value}</div>
                  {m.change && <div className="text-xs text-[#10B981] mt-1">{m.change}</div>}
                </div>
              ))}
            </div>

            <div className="space-y-6 text-gray-300 leading-relaxed mt-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">The Challenge</h3>
                <p>{project.challenge}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">The Solution</h3>
                <p>{project.solution}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">The Outcome</h3>
                <p>{project.outcome}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
            <p className="text-gray-400 mb-6">We couldn't find a project matching slug `{slug}`.</p>
            <Link to="/" className="px-6 py-3 bg-[#00F0FF] text-black font-semibold rounded-full hover:bg-[#00F0FF]/90 transition">
              Return Home
            </Link>
          </div>
        )}
      </Container>
    </div>
  );
};
