import React from 'react';
import { ArrowDown, Code2, Compass, Cpu, Database, Network } from 'lucide-react';
import { HERO_METRICS, TECHNICAL_SKILLS } from '../data/portfolioData';

interface HeroProps {
  onViewProjects: () => void;
  onOpenGithub: () => void;
  onSkillClick?: (skill: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onViewProjects,
  onOpenGithub,
  onSkillClick,
}) => {
  return (
    <section className="pt-6 pb-10 max-w-[560px] mx-auto px-4 sm:px-6 relative">
      {/* Decorative Network Grid & Code Glow Background */}
      <div className="absolute top-0 right-4 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Data Scientist Category Tag with Live Pulse */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/70 border border-sky-500/30 text-sky-300 text-xs font-semibold tracking-wide mb-5 shadow-xs">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400"></span>
        </span>
        <span className="font-mono text-[11px] uppercase tracking-wider text-sky-300">
          Data Science &amp; Analytics
        </span>
      </div>

      {/* Main Name with subtle gradient */}
      <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-[1.1] mb-4 font-['Plus_Jakarta_Sans']">
        Insha Rani
      </h1>

      {/* Subtitle / Tagline */}
      <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal mb-8">
        Aspiring Data Scientist turning raw datasets into actionable insights, statistical models &amp; interactive dashboards.
      </p>

      {/* Action CTA Buttons */}
      <div className="flex flex-col gap-3 mb-9">
        <button
          onClick={onViewProjects}
          className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:via-blue-500 hover:to-indigo-500 active:scale-[0.99] text-white text-base font-bold transition-all shadow-lg shadow-sky-500/25 flex items-center justify-center gap-2 cursor-pointer"
          id="hero-view-projects-btn"
        >
          <span>Explore Projects</span>
          <ArrowDown className="w-4 h-4 text-white" />
        </button>

        <a
          href="https://github.com/Insha-Rani"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 px-6 rounded-full bg-slate-900/80 hover:bg-slate-800/90 border border-sky-900/60 hover:border-sky-500/50 active:scale-[0.99] text-slate-200 hover:text-white text-base font-medium transition-all shadow-2xs flex items-center justify-center gap-2.5 cursor-pointer text-center"
          id="hero-github-btn"
        >
          <Code2 className="w-4 h-4 text-sky-400" />
          <span>GitHub (@Insha-Rani)</span>
        </a>
      </div>

      {/* 3 Metric Summary Cards */}
      <div className="grid grid-cols-3 gap-3 mb-10">
        {HERO_METRICS.map((metric, idx) => (
          <div
            key={idx}
            className="glass-panel rounded-xl p-3.5 sm:p-4 text-center shadow-md flex flex-col items-center justify-center transition-all group"
          >
            <div className="text-2xl sm:text-[26px] font-black text-sky-400 tracking-tight font-['Plus_Jakarta_Sans'] leading-tight mb-0.5 group-hover:scale-105 transition-transform">
              {metric.value}
            </div>
            <div className="text-[11px] sm:text-xs text-slate-400 font-medium leading-tight">
              <div className="text-slate-200">{metric.label}</div>
              <div>{metric.sublabel}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Technical Expertise Section */}
      <div className="pt-2">
        {/* Header with Icon + Production Ready flag */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-sky-400" />
            <h2 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-300 font-['Plus_Jakarta_Sans']">
              Technical Stack &amp; Algorithms
            </h2>
          </div>
          <span className="text-[11px] font-mono text-sky-400/90 tracking-tight flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Production Ready
          </span>
        </div>

        {/* Skill Pill Badges */}
        <div className="flex flex-wrap gap-2">
          {TECHNICAL_SKILLS.map((skill) => (
            <button
              key={skill}
              onClick={() => onSkillClick && onSkillClick(skill)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 hover:bg-sky-950/80 border border-sky-900/50 hover:border-sky-400/60 text-slate-300 hover:text-white text-xs font-medium transition-all shadow-2xs cursor-pointer group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 group-hover:scale-125 transition-transform shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
              <span>{skill}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
