import React from 'react';
import { ArrowUpRight, Mail, Code, Briefcase } from 'lucide-react';
import { CONTACT_CHANNELS } from '../data/portfolioData';

interface ContactSectionProps {
  onDirectMessage: (initialSubject?: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onDirectMessage }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'mail':
        return <Mail className="w-5 h-5 text-sky-400" />;
      case 'code':
        return <Code className="w-5 h-5 text-sky-400" />;
      case 'briefcase':
        return <Briefcase className="w-5 h-5 text-sky-400" />;
      default:
        return <Mail className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section id="contact" className="py-10 max-w-[560px] mx-auto px-4 sm:px-6">
      {/* Eyebrow & Headline */}
      <div className="mb-6">
        <span className="text-[11px] font-bold uppercase tracking-widest text-sky-400 font-['Plus_Jakarta_Sans'] block mb-1">
          GET IN TOUCH
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight font-['Plus_Jakarta_Sans'] mb-2">
          Let&apos;s Connect &amp; Build
        </h2>
        <p className="text-sm sm:text-base text-slate-400">
          Click any channel below to reach out directly:
        </p>
      </div>

      {/* 3 Contact Cards - direct click to target, no plain text exposure */}
      <div className="flex flex-col gap-3">
        {CONTACT_CHANNELS.map((channel) => (
          <a
            key={channel.id}
            href={channel.link}
            target={channel.id === 'email' ? undefined : '_blank'}
            rel={channel.id === 'email' ? undefined : 'noopener noreferrer'}
            className="group w-full glass-panel hover:border-sky-400/50 rounded-2xl p-4 sm:p-5 flex items-center justify-between transition-all duration-200 cursor-pointer shadow-md shadow-sky-950/20"
            id={`contact-card-${channel.id}`}
          >
            {/* Left: Icon inside rounded square + Text */}
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-slate-900/90 border border-sky-500/30 flex items-center justify-center shrink-0 group-hover:border-sky-400/60 transition-colors">
                {getIcon(channel.icon)}
              </div>
              <div className="text-left">
                <div className="text-[11px] font-medium text-slate-400 font-mono tracking-tight uppercase">
                  {channel.category}
                </div>
                <div className="text-sm sm:text-base font-semibold text-white group-hover:text-sky-400 transition-colors">
                  {channel.label}
                </div>
              </div>
            </div>

            {/* Right: Arrow Up Right */}
            <div className="p-2 text-slate-400 group-hover:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
