import React, { useState } from 'react';
import { X, Sliders, ExternalLink, Code2, FileText, ArrowRight, ShieldAlert } from 'lucide-react';
import { Project } from '../types';
import { DEMO_SAMPLE_DATA } from '../data/portfolioData';

interface InteractiveDemoModalProps {
  project: Project | null;
  mode: 'demo' | 'case-study' | 'repo' | null;
  onClose: () => void;
  onContactClick: () => void;
}

export const InteractiveDemoModal: React.FC<InteractiveDemoModalProps> = ({
  project,
  mode,
  onClose,
  onContactClick,
}) => {
  if (!project || !mode) return null;

  // State for Movie Recommender Demo
  const [selectedMovie, setSelectedMovie] = useState('Inception');
  const [similarityThreshold, setSimilarityThreshold] = useState(0.85);

  // State for Housing Price Demo
  const [medianIncome, setMedianIncome] = useState(6.5); // $65,000
  const [houseAge, setHouseAge] = useState(18);
  const [avgRooms, setAvgRooms] = useState(5.8);
  const [oceanProximity, setOceanProximity] = useState('NEAR BAY');

  // State for Fraud Detection Demo
  const [transactionAmount, setTransactionAmount] = useState(48.5);
  const [isOverseas, setIsOverseas] = useState(false);
  const [isNightTime, setIsNightTime] = useState(false);
  const [anomalyThreshold, setAnomalyThreshold] = useState(0.75);

  // Computed Housing Price
  const computeHousingPrice = () => {
    const oceanMultiplier = oceanProximity === 'NEAR BAY' ? 1.35 : oceanProximity === 'NEAR OCEAN' ? 1.4 : oceanProximity === 'INLAND' ? 0.75 : 1.1;
    const base = 90000;
    const incomeWeight = medianIncome * 42000;
    const ageWeight = (50 - houseAge) * 1200;
    const roomWeight = avgRooms * 15000;
    const total = Math.round((base + incomeWeight + ageWeight + roomWeight) * oceanMultiplier);
    return total;
  };

  // Computed Fraud Score
  const computeFraudScore = () => {
    let score = 0.02;
    if (transactionAmount > 1000) score += 0.45;
    else if (transactionAmount > 400) score += 0.20;
    if (isOverseas) score += 0.35;
    if (isNightTime) score += 0.18;
    return Math.min(0.99, Math.max(0.01, score));
  };

  const fraudProbability = computeFraudScore();
  const isFraudFlagged = fraudProbability >= anomalyThreshold;

  // Movie recommendation generator
  const getMovieRecommendations = () => {
    const pool: Record<string, typeof DEMO_SAMPLE_DATA.movies> = {
      'Inception': [
        { title: 'Interstellar', year: 2014, match: 96, genre: 'Sci-Fi / Drama', similarity: '0.962', tags: ['Space', 'Wormhole', 'Nolan'] },
        { title: 'Tenet', year: 2020, match: 92, genre: 'Sci-Fi / Action', similarity: '0.924', tags: ['Time inversion', 'Physics', 'Espionage'] },
        { title: 'Shutter Island', year: 2010, match: 89, genre: 'Psychological Thriller', similarity: '0.893', tags: ['DiCaprio', 'Twist', 'Mind'] },
        { title: 'The Matrix', year: 1999, match: 88, genre: 'Cyberpunk / Action', similarity: '0.881', tags: ['Simulated reality', 'AI'] },
      ],
      'Interstellar': [
        { title: 'Inception', year: 2010, match: 96, genre: 'Sci-Fi / Action', similarity: '0.962', tags: ['Nolan', 'High stakes'] },
        { title: 'Arrival', year: 2016, match: 94, genre: 'Sci-Fi / Mystery', similarity: '0.941', tags: ['Linguistics', 'Extraterrestrial'] },
        { title: 'Gravity', year: 2013, match: 90, genre: 'Sci-Fi / Thriller', similarity: '0.902', tags: ['Orbit', 'Survival'] },
        { title: 'The Martian', year: 2015, match: 88, genre: 'Sci-Fi / Adventure', similarity: '0.884', tags: ['Botany', 'Survival'] },
      ],
      'The Dark Knight': [
        { title: 'Batman Begins', year: 2005, match: 95, genre: 'Action / Crime', similarity: '0.953', tags: ['Origins', 'Gotham'] },
        { title: 'The Prestige', year: 2006, match: 90, genre: 'Mystery / Drama', similarity: '0.908', tags: ['Bale', 'Nolan', 'Obsession'] },
        { title: 'Heat', year: 1995, match: 88, genre: 'Action / Crime', similarity: '0.882', tags: ['Heist', 'Cat & Mouse'] },
        { title: 'Joker', year: 2019, match: 86, genre: 'Crime / Drama', similarity: '0.865', tags: ['Psychological', 'Origin'] },
      ],
      'Pulp Fiction': [
        { title: 'Reservoir Dogs', year: 1992, match: 96, genre: 'Crime / Drama', similarity: '0.965', tags: ['Tarantino', 'Dialogue'] },
        { title: 'Fight Club', year: 1999, match: 91, genre: 'Drama', similarity: '0.912', tags: ['Anti-consumerism', 'Cult'] },
        { title: 'Goodfellas', year: 1990, match: 89, genre: 'Crime / Biography', similarity: '0.894', tags: ['Mafia', 'Scorsese'] },
        { title: 'Kill Bill: Vol. 1', year: 2003, match: 88, genre: 'Action / Crime', similarity: '0.885', tags: ['Revenge', 'Martial Arts'] },
      ],
    };
    return pool[selectedMovie] || pool['Inception'];
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#0A192F] border border-sky-500/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="px-5 sm:px-6 py-4 bg-[#030B1E] border-b border-sky-900/40 flex items-center justify-between sticky top-0 z-10">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-sky-400 font-semibold">
                {mode === 'case-study' ? 'System Case Study' : mode === 'repo' ? 'Repository & Code Pipeline' : 'Streamlit Interactive Live Demo'}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white font-['Plus_Jakarta_Sans']">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
          {/* CASE STUDY MODE */}
          {mode === 'case-study' && (
            <div className="space-y-6">
              {/* Executive Summary */}
              <div className="glass-panel rounded-xl p-5 border border-sky-900/40">
                <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-sky-400 mb-2 flex items-center gap-1.5">
                  <FileText className="w-4 h-4" />
                  <span>Executive Architecture Overview</span>
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.caseStudy?.overview || project.description}
                </p>
              </div>

              {/* Problem & Motivation */}
              <div className="glass-panel rounded-xl p-5 border border-sky-900/40">
                <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-white mb-2">
                  The Analytical Challenge
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.caseStudy?.problem || 'Translating ambiguous, high-dimensional multi-source data into low-latency inference services.'}
                </p>
              </div>

              {/* Methodology Checklist */}
              {project.caseStudy?.methodology && (
                <div className="glass-panel rounded-xl p-5 border border-sky-900/40">
                  <h3 className="text-xs font-bold font-mono uppercase tracking-wider text-white mb-3">
                    Mathematical &amp; Algorithmic Workflow
                  </h3>
                  <div className="space-y-2.5">
                    {project.caseStudy.methodology.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <span className="w-5 h-5 rounded-full bg-sky-950 border border-sky-500/40 text-sky-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantitative Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {(project.caseStudy?.results || project.metrics || []).map((res, i) => (
                  <div key={i} className="glass-panel rounded-xl p-3.5 text-center border border-sky-900/40">
                    <div className="text-lg sm:text-xl font-black text-sky-400 font-['Plus_Jakarta_Sans']">
                      {'value' in res ? res.value : ''}
                    </div>
                    <div className="text-xs font-semibold text-white">
                      {'metric' in res ? res.metric : res.label}
                    </div>
                    {'description' in res && (
                      <div className="text-[10px] text-slate-400 mt-0.5 font-mono">
                        {res.description}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="glass-panel rounded-xl p-4 border border-sky-900/40">
                <div className="text-xs font-mono uppercase tracking-wide text-slate-400 mb-2.5">
                  Verified Tools &amp; Libraries
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {(project.caseStudy?.techStackDetails || project.tags).map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-md bg-slate-900 border border-sky-900/50 text-sky-300 text-xs font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons in Case Study */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white text-sm font-semibold flex items-center justify-center gap-2 transition-all shadow-md shadow-sky-500/20"
                  >
                    <span>Launch Live Streamlit App</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                <a
                  href={project.repoUrl || 'https://github.com/Insha-Rani'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-5 rounded-full bg-slate-900 hover:bg-slate-800 border border-sky-900/50 text-white text-sm font-medium flex items-center justify-center gap-2 transition-all"
                >
                  <span>View on GitHub</span>
                  <Code2 className="w-4 h-4 text-sky-400" />
                </a>
              </div>
            </div>
          )}

          {/* REPOSITORY / CODE VIEW MODE */}
          {mode === 'repo' && (
            <div className="space-y-5">
              <div className="glass-panel rounded-xl p-5 border border-sky-900/40">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-sky-400" />
                    <span className="font-mono text-xs font-semibold text-white">
                      github.com/Insha-Rani/{project.id}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-500/40">
                    Main Branch • Passing
                  </span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Simulated Pipeline Code Snippet */}
                <div className="bg-[#030B1E] text-white p-4 rounded-lg font-mono text-xs overflow-x-auto leading-relaxed border border-sky-900/50">
                  <div className="text-slate-500 mb-1"># Pipeline execution script</div>
                  <div className="text-sky-300">from <span className="text-white">sklearn.pipeline</span> import <span className="text-white">Pipeline</span></div>
                  <div className="text-sky-300">from <span className="text-white">sklearn.compose</span> import <span className="text-white">ColumnTransformer</span></div>
                  <div className="text-sky-300">import <span className="text-white">pandas as pd</span></div>
                  <div className="text-sky-300">import <span className="text-white">joblib</span></div>
                  <br />
                  <div className="text-emerald-400"># 1. Load trained ensemble model artifact</div>
                  <div>model = joblib.load(<span className="text-amber-300">&quot;models/{project.id}_v2.pkl&quot;</span>)</div>
                  <div className="text-slate-500"># 2. Score batch input data with calibrated decision bounds</div>
                  <div>predictions = model.predict(X_val)</div>
                  <div>print(<span className="text-amber-300">f&quot;[EVALUATION] Processed {`{len(predictions)}`} records with calibrated threshold.&quot;</span>)</div>
                </div>
              </div>

              {/* Action */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://github.com/Insha-Rani/${project.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white text-sm font-semibold flex items-center justify-center gap-2 transition-all shadow-md shadow-sky-500/20"
                >
                  <span>Open on GitHub</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <button
                  onClick={() => onContactClick()}
                  className="py-3 px-5 rounded-full bg-slate-900 hover:bg-slate-800 border border-sky-900/50 text-white text-sm font-medium transition-all cursor-pointer"
                >
                  Discuss Implementation
                </button>
              </div>
            </div>
          )}

          {/* INTERACTIVE DEMO MODE */}
          {mode === 'demo' && (
            <div className="space-y-5">
              {/* Demo 1: Movie Recommendation System */}
              {project.id === 'movie-recommendation-system' && (
                <div className="space-y-5">
                  <div className="p-4 rounded-xl glass-panel border border-sky-900/40 space-y-4">
                    <div>
                      <label className="text-xs font-semibold text-white block mb-2">
                        Select Seed Movie (Query Vector):
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {['Inception', 'Interstellar', 'The Dark Knight', 'Pulp Fiction'].map((title) => (
                          <button
                            key={title}
                            onClick={() => setSelectedMovie(title)}
                            className={`py-2 px-3 rounded-xl text-xs font-medium transition-all ${
                              selectedMovie === title
                                ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md font-semibold'
                                : 'bg-slate-900 text-slate-300 border border-sky-900/50 hover:border-sky-400/50'
                            }`}
                          >
                            {title}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="font-mono text-slate-400">Cosine Similarity Cutoff Threshold:</span>
                        <span className="font-mono font-bold text-sky-400">{similarityThreshold}</span>
                      </div>
                      <input
                        type="range"
                        min="0.75"
                        max="0.95"
                        step="0.01"
                        value={similarityThreshold}
                        onChange={(e) => setSimilarityThreshold(parseFloat(e.target.value))}
                        className="w-full accent-sky-400 cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* Recommendations Output */}
                  <div className="space-y-2">
                    <div className="text-xs font-mono text-slate-400">
                      Top Cosine Matches for &quot;{selectedMovie}&quot;:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {getMovieRecommendations().map((m) => (
                        <div key={m.title} className="p-3.5 glass-panel rounded-xl border border-sky-900/40 flex justify-between items-center">
                          <div>
                            <div className="font-bold text-sm text-white">{m.title}</div>
                            <div className="text-xs text-slate-400">{m.genre} ({m.year})</div>
                            <div className="flex gap-1 mt-1.5">
                              {m.tags.map((t) => (
                                <span key={t} className="text-[10px] bg-slate-900 border border-sky-900/40 text-sky-300 px-1.5 py-0.5 rounded font-mono">
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/80 px-2 py-1 rounded-full border border-emerald-500/30">
                              {m.match}% Match
                            </span>
                            <div className="text-[10px] font-mono text-slate-500 mt-1">
                              cos θ: {m.similarity}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Demo 2: Housing Price Prediction */}
              {project.id === 'california-housing-price-prediction' && (
                <div className="space-y-5">
                  <div className="p-4 rounded-xl glass-panel border border-sky-900/40 space-y-4">
                    <div className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold flex items-center gap-1.5">
                      <Sliders className="w-4 h-4" />
                      <span>Input Feature Controls</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <div className="flex justify-between text-xs mb-1 font-mono">
                          <span className="text-slate-300">Median Income:</span>
                          <span className="font-bold text-sky-400">${(medianIncome * 10).toFixed(0)}k / yr</span>
                        </div>
                        <input
                          type="range"
                          min="1"
                          max="15"
                          step="0.5"
                          value={medianIncome}
                          onChange={(e) => setMedianIncome(parseFloat(e.target.value))}
                          className="w-full accent-sky-400 cursor-pointer"
                        />
                      </div>

                      <div>
                        <div className="flex justify-between text-xs mb-1 font-mono">
                          <span className="text-slate-300">House Age:</span>
                          <span className="font-bold text-sky-400">{houseAge} Years</span>
                        </div>
                        <input
                          type="range"
                          min="1"
                          max="50"
                          value={houseAge}
                          onChange={(e) => setHouseAge(parseInt(e.target.value))}
                          className="w-full accent-sky-400 cursor-pointer"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                      <div>
                        <label className="text-xs font-mono text-slate-300 block mb-1">Ocean Proximity:</label>
                        <select
                          value={oceanProximity}
                          onChange={(e) => setOceanProximity(e.target.value)}
                          className="w-full text-xs font-mono bg-slate-900 border border-sky-900/50 rounded-lg p-2 text-white focus:outline-none focus:border-sky-400"
                        >
                          <option value="NEAR BAY">NEAR BAY</option>
                          <option value="NEAR OCEAN">NEAR OCEAN</option>
                          <option value="INLAND">INLAND</option>
                          <option value="&lt;1H OCEAN">&lt;1H OCEAN</option>
                        </select>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs mb-1 font-mono">
                          <span className="text-slate-300">Average Rooms:</span>
                          <span className="font-bold text-sky-400">{avgRooms} rooms</span>
                        </div>
                        <input
                          type="range"
                          min="2"
                          max="10"
                          step="0.2"
                          value={avgRooms}
                          onChange={(e) => setAvgRooms(parseFloat(e.target.value))}
                          className="w-full accent-sky-400 cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Prediction Output */}
                  <div className="p-5 rounded-xl glass-panel border border-sky-500/40 text-center">
                    <div className="text-xs font-mono uppercase text-sky-400 mb-1">
                      Estimated Median House Value
                    </div>
                    <div className="text-4xl font-black text-white font-['Plus_Jakarta_Sans']">
                      ${computeHousingPrice().toLocaleString()}
                    </div>
                    <p className="text-xs text-slate-400 mt-1">
                      Predicted via 10-fold cross-validated Gradient Boosting Regressor (RMSE $49,850)
                    </p>
                  </div>
                </div>
              )}

              {/* Demo 3: Credit Card Fraud Detection */}
              {project.id === 'credit-card-fraud-detection' && (
                <div className="space-y-5">
                  <div className="p-4 rounded-xl glass-panel border border-sky-900/40 space-y-4">
                    <div className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold flex items-center gap-1.5">
                      <ShieldAlert className="w-4 h-4" />
                      <span>Transaction Anomaly Simulator</span>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs mb-1 font-mono">
                        <span className="text-slate-300">Transaction Amount ($):</span>
                        <span className="font-bold text-white">${transactionAmount.toFixed(2)}</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="2500"
                        value={transactionAmount}
                        onChange={(e) => setTransactionAmount(parseFloat(e.target.value))}
                        className="w-full accent-sky-400 cursor-pointer"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <label className="flex items-center gap-2 p-2.5 bg-slate-900/80 border border-sky-900/50 rounded-xl text-xs font-medium cursor-pointer">
                        <input
                          type="checkbox"
                          checked={isOverseas}
                          onChange={(e) => setIsOverseas(e.target.checked)}
                          className="accent-sky-400 w-4 h-4"
                        />
                        <span className="text-slate-200">Overseas Origin</span>
                      </label>

                      <label className="flex items-center gap-2 p-2.5 bg-slate-900/80 border border-sky-900/50 rounded-xl text-xs font-medium cursor-pointer">
                        <input
                          type="checkbox"
                          checked={isNightTime}
                          onChange={(e) => setIsNightTime(e.target.checked)}
                          className="accent-sky-400 w-4 h-4"
                        />
                        <span className="text-slate-200">Late Night (2 - 5 AM)</span>
                      </label>
                    </div>

                    <div className="pt-2">
                      <div className="flex justify-between text-xs mb-1 font-mono">
                        <span className="text-slate-300">Decision Threshold:</span>
                        <span className="font-bold text-sky-400">{anomalyThreshold}</span>
                      </div>
                      <input
                        type="range"
                        min="0.30"
                        max="0.95"
                        step="0.05"
                        value={anomalyThreshold}
                        onChange={(e) => setAnomalyThreshold(parseFloat(e.target.value))}
                        className="w-full accent-sky-400 cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* Prediction Banner */}
                  <div
                    className={`p-5 rounded-xl border text-center transition-all ${
                      isFraudFlagged
                        ? 'bg-rose-950/80 border-rose-500/50 text-rose-200'
                        : 'bg-emerald-950/80 border-emerald-500/50 text-emerald-200'
                    }`}
                  >
                    <div className="text-xs font-mono uppercase tracking-wider mb-1 font-semibold">
                      {isFraudFlagged ? '🚨 ALERT: Anomalous Transaction Blocked' : '✅ Verified: Normal Legitimate Activity'}
                    </div>
                    <div className="text-3xl font-black font-['Plus_Jakarta_Sans'] mb-1">
                      {(fraudProbability * 100).toFixed(1)}% Fraud Probability
                    </div>
                    <p className="text-xs opacity-80 max-w-sm mx-auto">
                      {isFraudFlagged
                        ? 'Exceeds SMOTE anomaly risk threshold. Triggered instant step-up SMS OTP authentication.'
                        : 'Within standard consumer spending velocity distribution.'}
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-5 sm:px-6 py-4 bg-[#030B1E] border-t border-sky-900/40 flex items-center justify-between">
          <div className="text-xs text-slate-400 font-mono hidden sm:block">
            Insha Rani &bull; Machine Learning Engineer
          </div>

          <div className="flex gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={onClose}
              className="py-2 px-4 rounded-full bg-slate-900 hover:bg-slate-800 border border-sky-900/40 text-xs font-medium text-slate-300 cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onContactClick();
              }}
              className="py-2 px-4 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-xs font-semibold text-white shadow-md cursor-pointer flex items-center gap-1.5"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
