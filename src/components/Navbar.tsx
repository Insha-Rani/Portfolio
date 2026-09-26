import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#030B1E]/85 backdrop-blur-md border-b border-sky-900/40 transition-all">
      <div className="max-w-[560px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Left: IR Monogram only */}
        <a 
          href="#top" 
          className="flex items-center group focus:outline-none focus:ring-2 focus:ring-sky-400/30 rounded-xl p-1"
          aria-label="Insha Rani Home"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500/20 via-blue-900/40 to-slate-900/90 border border-sky-400/40 flex items-center justify-center shadow-[0_0_15px_rgba(56,189,248,0.25)] group-hover:border-sky-400 group-hover:scale-105 transition-all">
            <span className="font-mono font-black text-sm tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-400">
              IR
            </span>
          </div>
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
