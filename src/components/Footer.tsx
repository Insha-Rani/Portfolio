import React from 'react';

interface FooterProps {
  onNavClick: (target: 'overview' | 'projects' | 'about' | 'contact') => void;
  onOpenSourceCode?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick, onOpenSourceCode }) => {
  return (
    <footer className="pt-12 pb-28 max-w-[560px] mx-auto px-4 sm:px-6 text-center">
      {/* Monogram */}
      <div className="mb-4">
        <span className="font-black text-2xl tracking-tight text-white font-['Plus_Jakarta_Sans']">
          IR
        </span>
      </div>

      {/* Copyright Notice */}
      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md mx-auto mb-5 font-normal">
        &copy; 2026 Insha Rani &bull; Data Science Portfolio
      </p>

      {/* Footer Navigation Links */}
      <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-medium text-slate-300">
        <button
          onClick={() => {
            if (onOpenSourceCode) onOpenSourceCode();
            else window.open('https://github.com/Insha-Rani', '_blank');
          }}
          className="hover:text-sky-400 transition-colors cursor-pointer"
        >
          Source Code
        </button>
        <button
          onClick={() => onNavClick('projects')}
          className="hover:text-sky-400 transition-colors cursor-pointer"
        >
          Research &amp; Models
        </button>
        <button
          onClick={() => onNavClick('projects')}
          className="hover:text-sky-400 transition-colors cursor-pointer"
        >
          Interactive Demos
        </button>
        <button
          onClick={() => onNavClick('contact')}
          className="hover:text-sky-400 transition-colors cursor-pointer"
        >
          Contact
        </button>
      </div>
    </footer>
  );
};
