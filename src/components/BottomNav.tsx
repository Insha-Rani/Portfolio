import React from 'react';
import { LayoutGrid, Code2, User, Mail } from 'lucide-react';

export type NavTab = 'overview' | 'projects' | 'about' | 'contact';

interface BottomNavProps {
  activeTab: NavTab;
  onTabChange: (tab: NavTab) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'overview' as NavTab, label: 'Overview', icon: LayoutGrid },
    { id: 'projects' as NavTab, label: 'Projects', icon: Code2 },
    { id: 'about' as NavTab, label: 'About', icon: User },
    { id: 'contact' as NavTab, label: 'Contact', icon: Mail },
  ];

  return (
    <nav 
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 px-3 py-2 rounded-full bg-[#030B1E]/90 backdrop-blur-xl border border-sky-500/30 shadow-2xl shadow-sky-500/10 flex items-center gap-1 sm:gap-2 max-w-[calc(100vw-2rem)]"
      aria-label="Bottom Quick Navigation"
    >
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5 px-3.5 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
              isActive
                ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold shadow-md shadow-sky-500/25'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60 font-medium'
            }`}
            id={`nav-tab-${tab.id}`}
          >
            <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
            <span className="text-[11px] sm:text-xs leading-none tracking-tight">
              {tab.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};
