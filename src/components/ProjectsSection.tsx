import React from 'react';
import { ArrowUpRight, FolderGit2, Activity, Tv, BarChart3, ShieldCheck, ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface ProjectsSectionProps {
  projects: Project[];
  onOpenDemo: (project: Project) => void;
  onOpenCaseStudy: (project: Project) => void;
  onOpenRepo: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  onOpenDemo,
  onOpenCaseStudy,
  onOpenRepo,
}) => {
  const renderIcon = (type: Project['iconType']) => {
    switch (type) {
      case 'trend':
        return <Activity className="w-5 h-5 text-[#983d55]" />;
      case 'media':
        return <Tv className="w-5 h-5 text-[#983d55]" />;
      case 'chart':
        return <BarChart3 className="w-5 h-5 text-[#983d55]" />;
      case 'shield':
        return <ShieldCheck className="w-5 h-5 text-[#983d55]" />;
      default:
        return <Activity className="w-5 h-5 text-[#983d55]" />;
    }
  };

  const handlePrimaryClick = (project: Project, e: React.MouseEvent) => {
    // If it's a live demo or repo, redirect directly to external URL!
    if (project.liveUrl) {
      // Let standard link navigation happen or force open in new window
      window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
      e.preventDefault();
      return;
    }
    if (project.repoUrl) {
      window.open(project.repoUrl, '_blank', 'noopener,noreferrer');
      e.preventDefault();
      return;
    }
    if (project.primaryCta.action === 'demo') {
      onOpenDemo(project);
    } else {
      onOpenRepo(project);
    }
  };

  return (
    <section id="projects" className="py-10 max-w-[560px] mx-auto px-4 sm:px-6">
      {/* Eyebrow & Headline */}
      <div className="mb-6">
        <span className="text-[11px] font-bold uppercase tracking-widest text-sky-400 font-['Plus_Jakarta_Sans'] block mb-1">
          FEATURED WORK
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight font-['Plus_Jakarta_Sans'] mb-2">
          Machine Learning Models
        </h2>
        <p className="text-sm sm:text-base text-slate-400">
          Live deployed Streamlit applications &amp; production ML predictive pipelines
        </p>
      </div>

      {/* Project Cards Stack */}
      <div className="flex flex-col gap-6">
        {projects.map((project) => {
          const targetUrl = project.liveUrl || project.repoUrl || project.primaryCta.url;

          return (
            <article
              key={project.id}
              className="glass-panel hover:border-sky-500/50 rounded-2xl p-5 sm:p-6 shadow-lg shadow-sky-950/20 transition-all duration-300 group relative overflow-hidden"
              id={`project-card-${project.id}`}
            >
              {/* Subtle top card glow line */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-sky-500/40 to-transparent" />

              {/* Top Row: Badge & Type Icon */}
              <div className="flex items-center justify-between gap-2 mb-4">
                {project.badgeType === 'deployed' ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/70 hover:bg-emerald-900/80 border border-emerald-500/40 text-emerald-400 text-xs font-semibold transition-colors shadow-[0_0_12px_rgba(16,185,129,0.15)]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{project.badge.replace('● ', '')}</span>
                    <ExternalLink className="w-3 h-3 ml-0.5 opacity-80" />
                  </a>
                ) : (
                  <a
                    href={project.repoUrl || 'https://github.com/Insha-Rani'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-950/60 hover:bg-sky-900/70 border border-sky-800/50 text-sky-300 text-xs font-medium transition-colors"
                  >
                    <FolderGit2 className="w-3.5 h-3.5 text-sky-400" />
                    <span>{project.badge.replace('📁 ', '')}</span>
                    <ExternalLink className="w-3 h-3 ml-0.5 opacity-60" />
                  </a>
                )}

                <div className="p-1 text-slate-400 group-hover:text-sky-400 transition-colors">
                  {renderIcon(project.iconType)}
                </div>
              </div>

              {/* Project Title with Direct Link */}
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-['Plus_Jakarta_Sans'] mb-2.5">
                {targetUrl ? (
                  <a
                    href={targetUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-sky-400 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-sky-400" />
                  </a>
                ) : (
                  project.title
                )}
              </h3>

              {/* Project Description */}
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Metrics preview row */}
              {project.metrics && project.metrics.length > 0 && (
                <div className="grid grid-cols-3 gap-2 mb-4 p-2.5 rounded-xl bg-slate-900/80 border border-sky-900/40">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-xs sm:text-[13px] font-bold text-sky-400 font-['Plus_Jakarta_Sans']">
                        {m.value}
                      </div>
                      <div className="text-[10px] text-slate-400 truncate font-medium">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-slate-900/90 text-sky-300/90 border border-sky-900/40 text-xs font-mono tracking-tight"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div>
                {project.secondaryCta ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Primary Button -> Directly redirects to Live App in a new tab */}
                    <a
                      href={targetUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => handlePrimaryClick(project, e)}
                      className="w-full py-2.5 px-4 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 active:scale-[0.98] text-white text-sm font-semibold transition-all shadow-md shadow-sky-500/20 flex items-center justify-center gap-1.5 cursor-pointer text-center"
                      id={`btn-demo-${project.id}`}
                    >
                      <span>{project.primaryCta.label}</span>
                    </a>
                    {/* Secondary Button -> Opens detailed Case Study Modal */}
                    <button
                      type="button"
                      onClick={() => onOpenCaseStudy(project)}
                      className="w-full py-2.5 px-4 rounded-full bg-slate-900/90 hover:bg-slate-800/90 border border-sky-900/60 hover:border-sky-500/50 active:scale-[0.98] text-slate-200 hover:text-white text-sm font-medium transition-all shadow-2xs flex items-center justify-center cursor-pointer text-center"
                      id={`btn-case-${project.id}`}
                    >
                      <span>{project.secondaryCta.label}</span>
                    </button>
                  </div>
                ) : (
                  /* Single full-width button -> Directly redirects */
                  <a
                    href={targetUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => handlePrimaryClick(project, e)}
                    className="w-full py-3 px-4 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 active:scale-[0.98] text-white text-sm font-semibold transition-all shadow-md shadow-sky-500/20 flex items-center justify-center gap-1.5 cursor-pointer text-center"
                    id={`btn-demo-${project.id}`}
                  >
                    <span>{project.primaryCta.label}</span>
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
