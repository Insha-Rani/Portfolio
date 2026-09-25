import React from 'react';
import { User, ArrowRight, GraduationCap, Award, MapPin, CheckCircle2 } from 'lucide-react';

interface AboutSectionProps {
  onCollaborateClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onCollaborateClick }) => {
  return (
    <section id="about" className="py-10 max-w-[560px] mx-auto px-4 sm:px-6">
      <div className="glass-panel rounded-2xl p-6 sm:p-7 shadow-lg shadow-sky-950/20">
        {/* Eyebrow */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-sky-400" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-sky-400 font-['Plus_Jakarta_Sans']">
              ABOUT &amp; BACKGROUND
            </span>
          </div>
          <div className="flex items-center gap-1 text-[11px] font-medium text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-sky-400" />
            <span>Amroha, UP, India</span>
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-['Plus_Jakarta_Sans'] mb-4 leading-snug">
          Data Science, Statistical Modeling &amp; Machine Learning
        </h2>

        {/* Narrative */}
        <div className="space-y-3.5 text-sm sm:text-[15px] text-slate-300 leading-relaxed font-normal mb-6">
          <p>
            I am an Aspiring Data Scientist with a solid foundation in Python, statistical modeling, and data wrangling. Passionate about uncovering actionable patterns from complex, high-dimensional datasets and training high-precision predictive algorithms.
          </p>
          <p>
            My work spans end-to-end machine learning pipelines—from handling messy multi-format raw datasets (such as 20+ years of NCRB records) to training Gradient Boosting regressors, Random Forest fraud anomaly classifiers with SMOTE, and deploying interactive Streamlit applications.
          </p>
        </div>

        {/* Education & Certification Cards */}
        <div className="space-y-2.5 mb-6 pt-2 border-t border-sky-900/40">
          <div className="p-3 rounded-xl bg-slate-900/80 border border-sky-900/40 flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-sky-950/70 border border-sky-500/30 flex items-center justify-center shrink-0 text-sky-400">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">
                Bachelor of Computer Applications (BCA)
              </div>
              <div className="text-[11px] text-slate-300">
                Shoolini University • 2024 – 2027 (Expected)
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">
                Coursework: DBMS, Mathematics, Web Tech (HTML, CSS, JavaScript), C++/Java
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/80 border border-sky-900/40 flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-sky-950/70 border border-sky-500/30 flex items-center justify-center shrink-0 text-sky-400">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">
                O Level Diploma in Computer Concepts
              </div>
              <div className="text-[11px] text-slate-300">
                NIELIT (National Institute of Electronics &amp; Information Technology)
              </div>
            </div>
          </div>
        </div>

        {/* Quick Highlights / Core Pillars */}
        <div className="grid grid-cols-2 gap-2 mb-6">
          <div className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-900/70 border border-sky-900/30">
            <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
            <span className="text-xs font-medium text-slate-200">Streamlit &amp; Live Deployment</span>
          </div>
          <div className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-900/70 border border-sky-900/30">
            <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
            <span className="text-xs font-medium text-slate-200">Supervised ML &amp; Regression</span>
          </div>
          <div className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-900/70 border border-sky-900/30">
            <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
            <span className="text-xs font-medium text-slate-200">SMOTE Imbalanced Anomaly</span>
          </div>
          <div className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-900/70 border border-sky-900/30">
            <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
            <span className="text-xs font-medium text-slate-200">Scikit-Learn Pipelines &amp; SQL</span>
          </div>
        </div>

        {/* Availability Callout Box */}
        <div className="p-4 rounded-xl bg-gradient-to-r from-sky-950/60 to-blue-950/60 border border-sky-800/40 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs sm:text-sm font-semibold text-white">
              Available for Data Science &amp; ML Roles
            </span>
          </div>

          <button
            onClick={onCollaborateClick}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-sky-400 hover:text-sky-300 hover:underline transition-colors self-start cursor-pointer group"
          >
            <span>Let&apos;s Connect</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
