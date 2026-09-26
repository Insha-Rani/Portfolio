import React, { useState } from 'react';
import { X, Send, CheckCircle2, Mail } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSubject?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  initialSubject = '',
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState(initialSubject || 'Data Science Project Inquiry');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('irsaifi584@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-[#0A192F] border border-sky-500/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="px-5 sm:px-6 py-4 bg-[#030B1E] border-b border-sky-900/40 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-sky-400 font-semibold">
              Direct Communication
            </span>
            <h2 className="text-xl font-bold text-white font-['Plus_Jakarta_Sans']">
              Let&apos;s Connect &amp; Build
            </h2>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 bg-emerald-950/70 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white font-['Plus_Jakarta_Sans']">
                Message Sent!
              </h3>
              <p className="text-sm text-slate-300 max-w-xs mx-auto">
                Thank you for reaching out, {name || 'there'}! I will get back to you as soon as possible.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="py-2.5 px-6 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white text-xs font-semibold shadow-md cursor-pointer"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Quick direct copy banner */}
              <div className="p-3 bg-slate-900/80 border border-sky-900/40 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-sky-950/70 border border-sky-500/30 flex items-center justify-center text-sky-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-slate-400">Direct Inbox</div>
                    <div className="text-xs font-bold text-white">irsaifi584@gmail.com</div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-sky-300 text-xs font-medium transition-colors cursor-pointer border border-sky-900/40"
                >
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Dr. Alex Vance"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-sky-900/50 text-white text-sm focus:outline-none focus:border-sky-400 placeholder:text-slate-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Your Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@company.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-sky-900/50 text-white text-sm focus:outline-none focus:border-sky-400 placeholder:text-slate-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Subject</label>
                <input
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-sky-900/50 text-white text-sm focus:outline-none focus:border-sky-400 placeholder:text-slate-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Message</label>
                <textarea
                  rows={3}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Let's discuss an ML role, model evaluation, or collaborative dataset..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-sky-900/50 text-white text-sm focus:outline-none focus:border-sky-400 placeholder:text-slate-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white text-sm font-semibold transition-all shadow-md shadow-sky-500/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Dispatch Inquiry</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
