import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#030B1E]/85 backdrop-blur-md border-b border-sky-900/40 transition-all">
      <div className="max-w-[560px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Left: Brand Icon + Monogram */}
        <a 
          href="#top" 
          className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-sky-400/30 rounded-lg p-1"
          aria-label="Insha Rani Home"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-900/60 to-sky-950/80 border border-sky-500/30 flex items-center justify-center text-sky-400 shadow-xs group-hover:border-sky-400/60 transition-colors">
            {/* Neural network / ML node icon */}
            <svg 
              className="w-5 h-5 text-sky-400 group-hover:scale-105 transition-transform" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <circle cx="12" cy="5" r="2" />
              <circle cx="5" cy="19" r="2" />
              <circle cx="19" cy="19" r="2" />
              <circle cx="12" cy="12" r="2" />
              <line x1="12" y1="7" x2="12" y2="10" />
              <line x1="6.8" y1="17.6" x2="10.2" y2="13.4" />
              <line x1="17.2" y1="17.6" x2="13.8" y2="13.4" />
            </svg>
          </div>
          <span className="font-extrabold text-xl tracking-tight text-white font-['Plus_Jakarta_Sans'] group-hover:text-sky-400 transition-colors">
            IR
          </span>
        </a>

        {/* Right: Glowing Cyan Pill Button "Get in Touch ↗" */}
        <button
          onClick={onContactClick}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 active:scale-[0.98] text-white text-sm font-semibold transition-all shadow-md shadow-sky-500/20 hover:shadow-sky-400/30 cursor-pointer"
          id="nav-get-in-touch-btn"
        >
          <span>Get in Touch</span>
          <ArrowUpRight className="w-4 h-4 text-white/90" />
        </button>
      </div>
    </header>
  );
};
