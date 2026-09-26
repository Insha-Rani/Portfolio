import React, { useEffect, useState } from 'react';
import { ArrowDown, Code2, Compass } from 'lucide-react';
import { HERO_METRICS, TECHNICAL_SKILLS } from '../data/portfolioData';

const GREETING = "Hello & Welcome, I'm";

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
  const [typedGreeting, setTypedGreeting] = useState('');
  const [isGreetingComplete, setIsGreetingComplete] = useState(false);

  useEffect(() => {
    let characterIndex = 0;
    const typeTimer = window.setInterval(() => {
      characterIndex += 1;
      setTypedGreeting(GREETING.slice(0, characterIndex));

      if (characterIndex >= GREETING.length) {
        window.clearInterval(typeTimer);
        setIsGreetingComplete(true);
      }
    }, 48);

    return () => window.clearInterval(typeTimer);
  }, []);

  const revealAfterGreeting = isGreetingComplete
    ? 'opacity-100 translate-y-0'
    : 'opacity-0 translate-y-3 pointer-events-none';

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

      {/* Interactive opening greeting & main name */}
      <div className="mb-4">
        <span
          className="block min-h-7 text-base sm:text-lg font-medium text-sky-400 font-mono tracking-wide"
          aria-live="polite"
        >
          <span>{typedGreeting}</span>
          <span className="hero-cursor ml-1 text-sky-300 drop-shadow-[0_0_8px_#38bdf8]" aria-hidden="true">
            |
          </span>
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-[1.1] font-['Plus_Jakarta_Sans']">
          Insha Rani
        </h1>
      </div>

      <div className={`transition-all duration-700 ease-out ${revealAfterGreeting}`}>
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
      </div>

      {/* Technical Expertise Section */}
      <div className="pt-2">
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
          {TECHNICAL_SKILLS.map((skill, index) => (
            <button
              key={index}
              onClick={() => onSkillClick && onSkillClick(skill)}
              className="text-xs font-medium px-3 py-1.5 rounded-full bg-slate-900/90 text-slate-200 hover:text-white border border-sky-900/60 hover:border-sky-500/50 hover:bg-sky-950/60 transition-all cursor-pointer shadow-2xs"
            >
              {skill}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
