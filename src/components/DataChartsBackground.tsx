import React from 'react';

const scatterPoints = [
  [1048, 846],
  [1082, 824],
  [1106, 808],
  [1132, 790],
  [1162, 774],
  [1190, 748],
  [1218, 735],
  [1248, 704],
  [1275, 684],
  [1306, 658],
  [1332, 646],
] as const;

const networkNodes = [
  [1080, 116],
  [1170, 178],
  [1286, 128],
  [1370, 224],
  [1132, 300],
  [1250, 284],
  [1320, 360],
] as const;

export const DataChartsBackground: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden -z-10 opacity-40"
      aria-hidden="true"
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 1000"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#38BDF8" stopOpacity="0.95" />
            <stop offset="1" stopColor="#0EA5E9" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="barSideGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#0EA5E9" stopOpacity="0.7" />
            <stop offset="1" stopColor="#0369A1" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="curveGradient" x1="1030" y1="880" x2="1370" y2="610">
            <stop stopColor="#0EA5E9" stopOpacity="0.2" />
            <stop offset="1" stopColor="#38BDF8" />
          </linearGradient>
          <linearGradient id="trendGradient" x1="420" y1="860" x2="760" y2="620">
            <stop stopColor="#0EA5E9" stopOpacity="0.04" />
            <stop offset="1" stopColor="#38BDF8" stopOpacity="0.26" />
          </linearGradient>
          <radialGradient id="nodeGradient">
            <stop stopColor="#BAE6FD" />
            <stop offset="0.35" stopColor="#38BDF8" stopOpacity="0.9" />
            <stop offset="1" stopColor="#0EA5E9" stopOpacity="0" />
          </radialGradient>
          <clipPath id="inspectionLensClip">
            <circle cx="1180" cy="220" r="88" />
          </clipPath>
          <filter id="neonGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="softGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Top-right: Neural network constellation */}
        <g opacity="0.55" stroke="#38BDF8" strokeWidth="1">
          <path d="M1080 116L1170 178L1286 128L1370 224" />
          <path d="M1080 116L1132 300L1250 284L1286 128" />
          <path d="M1170 178L1250 284L1320 360L1370 224" />
          <path d="M1132 300L1320 360" opacity="0.45" />
        </g>
        {networkNodes.map(([cx, cy], index) => (
          <g key={`network-node-${index}`} filter="url(#softGlow)">
            <circle cx={cx} cy={cy} r="15" fill="url(#nodeGradient)" opacity="0.35" />
            <circle cx={cx} cy={cy} r="3.5" fill="#38BDF8" />
            <circle cx={cx} cy={cy} r="1.25" fill="#E0F2FE" />
          </g>
        ))}

        {/* Top-right: Magnifying glass inspection widget over a data matrix */}
        <g className="data-float" style={{ animationDelay: '-3s' }} opacity="0.65">
          <g clipPath="url(#inspectionLensClip)" opacity="0.6">
            <path d="M1082 170H1278M1082 195H1278M1082 220H1278M1082 245H1278M1082 270H1278" stroke="#38BDF8" strokeOpacity="0.2" strokeDasharray="2 7" />
            <path d="M1100 132V308M1128 132V308M1156 132V308M1184 132V308M1212 132V308M1240 132V308M1268 132V308" stroke="#0EA5E9" strokeOpacity="0.18" strokeDasharray="2 7" />
            {[
              [1098, 185], [1124, 250], [1146, 204], [1168, 272], [1198, 164],
              [1218, 234], [1244, 188], [1264, 260], [1112, 216], [1230, 278],
            ].map(([cx, cy], index) => (
              <circle key={`inspection-point-${index}`} cx={cx} cy={cy} r={index % 2 ? 2.5 : 3.5} fill="#38BDF8" />
            ))}
            <path d="M1090 276C1130 250 1150 258 1185 226C1212 202 1234 218 1272 168" stroke="#7DD3FC" strokeOpacity="0.7" strokeWidth="2" />
          </g>
          <circle cx="1180" cy="220" r="88" fill="#030B1E" fillOpacity="0.14" stroke="#38BDF8" strokeOpacity="0.65" strokeWidth="2" filter="url(#softGlow)" />
          <circle cx="1180" cy="220" r="77" stroke="#0EA5E9" strokeOpacity="0.3" strokeDasharray="2 8" />
          <path d="M1243 283L1310 350" stroke="#38BDF8" strokeOpacity="0.8" strokeWidth="10" strokeLinecap="round" filter="url(#softGlow)" />
          <path d="M1243 283L1310 350" stroke="#BAE6FD" strokeOpacity="0.55" strokeWidth="2" strokeLinecap="round" />
          <path d="M1138 220H1222M1180 178V262" stroke="#BAE6FD" strokeOpacity="0.65" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="1180" cy="220" r="4" fill="#BAE6FD" filter="url(#softGlow)" />
          <text x="1088" y="338" fill="#7DD3FC" fillOpacity="0.72" fontSize="10" fontFamily="monospace">
            DATA INSPECTION / 94.2%
          </text>
        </g>

        {/* Bottom-left: Neon 3D frequency distribution */}
        <g className="data-float" style={{ animationDelay: '-7s' }} opacity="0.72">
          <path d="M48 902H390M48 902V690" stroke="#38BDF8" strokeOpacity="0.32" />
          <path d="M48 850H390M48 798H390M48 746H390" stroke="#38BDF8" strokeOpacity="0.12" strokeDasharray="3 8" />
          <path d="M48 902L86 920H428L390 902" fill="#0EA5E9" fillOpacity="0.06" stroke="#38BDF8" strokeOpacity="0.28" />
          <g filter="url(#softGlow)">
            <rect x="76" y="826" width="38" height="76" fill="url(#barGradient)" />
            <path d="M76 826L91 815L129 815L114 826Z" fill="#7DD3FC" fillOpacity="0.65" />
            <path d="M114 826L129 815V891L114 902Z" fill="url(#barSideGradient)" />

            <rect x="142" y="770" width="38" height="132" fill="url(#barGradient)" />
            <path d="M142 770L157 759L195 759L180 770Z" fill="#7DD3FC" fillOpacity="0.65" />
            <path d="M180 770L195 759V891L180 902Z" fill="url(#barSideGradient)" />

            <rect x="208" y="714" width="38" height="188" fill="url(#barGradient)" />
            <path d="M208 714L223 703L261 703L246 714Z" fill="#7DD3FC" fillOpacity="0.65" />
            <path d="M246 714L261 703V891L246 902Z" fill="url(#barSideGradient)" />

            <rect x="274" y="786" width="38" height="116" fill="url(#barGradient)" />
            <path d="M274 786L289 775L327 775L312 786Z" fill="#7DD3FC" fillOpacity="0.65" />
            <path d="M312 786L327 775V891L312 902Z" fill="url(#barSideGradient)" />

            <rect x="340" y="748" width="38" height="154" fill="url(#barGradient)" />
            <path d="M340 748L355 737L393 737L378 748Z" fill="#7DD3FC" fillOpacity="0.65" />
            <path d="M378 748L393 737V891L378 902Z" fill="url(#barSideGradient)" />
          </g>
          <text x="48" y="936" fill="#7DD3FC" fillOpacity="0.72" fontSize="11" fontFamily="monospace">
            FREQUENCY DISTRIBUTION
          </text>
        </g>

        {/* Bottom-center-left: Smooth trend line with gradient area and peak nodes */}
        <g className="data-float" style={{ animationDelay: '-5s' }} opacity="0.62">
          <path d="M430 884H690M430 832H690M430 780H690M430 728H690" stroke="#38BDF8" strokeOpacity="0.1" strokeDasharray="3 8" />
          <path d="M430 884V700" stroke="#38BDF8" strokeOpacity="0.22" />
          <path d="M430 878C470 850 505 858 540 810C575 762 602 794 632 730C655 680 672 704 690 652L690 884H430Z" fill="url(#trendGradient)" />
          <path d="M430 878C470 850 505 858 540 810C575 762 602 794 632 730C655 680 672 704 690 652" stroke="#38BDF8" strokeWidth="2.5" filter="url(#neonGlow)" />
          {[ [470, 850], [540, 810], [602, 794], [632, 730], [672, 704] ].map(([cx, cy], index) => (
            <circle className="data-pulse" key={`trend-node-${index}`} cx={cx} cy={cy} r="4" fill="#BAE6FD" style={{ animationDelay: `${index * 0.4}s` }} />
          ))}
          <text x="430" y="916" fill="#7DD3FC" fillOpacity="0.72" fontSize="10" fontFamily="monospace">
            MODEL TREND / PEAK SIGNAL
          </text>
        </g>

        {/* Bottom-center: Stacked class distribution bars */}
        <g className="data-float" style={{ animationDelay: '-9s' }} opacity="0.68">
          <path d="M455 884H645" stroke="#38BDF8" strokeOpacity="0.22" />
          <rect x="470" y="828" width="28" height="56" fill="#38BDF8" fillOpacity="0.75" />
          <rect x="470" y="798" width="28" height="30" fill="#0EA5E9" fillOpacity="0.75" />
          <rect x="470" y="780" width="28" height="18" fill="#7DD3FC" fillOpacity="0.75" />
          <rect x="530" y="810" width="28" height="74" fill="#38BDF8" fillOpacity="0.75" />
          <rect x="530" y="770" width="28" height="40" fill="#0EA5E9" fillOpacity="0.75" />
          <rect x="530" y="744" width="28" height="26" fill="#7DD3FC" fillOpacity="0.75" />
          <rect x="590" y="842" width="28" height="42" fill="#38BDF8" fillOpacity="0.75" />
          <rect x="590" y="800" width="28" height="42" fill="#0EA5E9" fillOpacity="0.75" />
          <rect x="590" y="776" width="28" height="24" fill="#7DD3FC" fillOpacity="0.75" />
          <text x="455" y="908" fill="#7DD3FC" fillOpacity="0.72" fontSize="10" fontFamily="monospace">
            CLASS DISTRIBUTION
          </text>
        </g>

        {/* Bottom-center: Segmented model metrics donut */}
        <g className="data-float" style={{ animationDelay: '-2s' }} transform="translate(780 824)" opacity="0.72" filter="url(#softGlow)">
          <circle r="102" stroke="#0EA5E9" strokeOpacity="0.1" strokeWidth="1" strokeDasharray="2 8" />
          <circle r="84" stroke="#0EA5E9" strokeOpacity="0.12" strokeWidth="20" />
          <circle r="84" stroke="#38BDF8" strokeWidth="20" strokeDasharray="118 410" strokeDashoffset="0" transform="rotate(-90)" />
          <circle r="84" stroke="#0EA5E9" strokeWidth="20" strokeDasharray="88 440" strokeDashoffset="-132" transform="rotate(-90)" />
          <circle r="84" stroke="#7DD3FC" strokeWidth="20" strokeDasharray="66 462" strokeDashoffset="-235" transform="rotate(-90)" />
          <circle r="84" stroke="#0369A1" strokeWidth="20" strokeDasharray="92 436" strokeDashoffset="-322" transform="rotate(-90)" />
          <circle r="58" fill="#030B1E" fillOpacity="0.55" stroke="#38BDF8" strokeOpacity="0.22" />
          <circle r="4" fill="#BAE6FD" />
          <text x="0" y="-10" textAnchor="middle" fill="#BAE6FD" fillOpacity="0.8" fontSize="12" fontFamily="monospace">
            MODEL
          </text>
          <text x="0" y="12" textAnchor="middle" fill="#38BDF8" fillOpacity="0.82" fontSize="15" fontFamily="monospace">
            R² 0.94
          </text>
        </g>

        {/* Bottom-right: Regression curve, scatter points and isometric hexagons */}
        <g className="data-float" style={{ animationDelay: '-8s' }} opacity="0.68">
          <path d="M1018 900H1390M1018 900V640" stroke="#38BDF8" strokeOpacity="0.25" />
          <path d="M1018 840H1390M1018 780H1390M1018 720H1390" stroke="#38BDF8" strokeOpacity="0.1" strokeDasharray="3 8" />
          <path
            d="M1028 874C1100 846 1140 826 1184 790C1222 760 1255 704 1302 674C1330 656 1356 634 1382 612"
            stroke="url(#curveGradient)"
            strokeWidth="3"
            filter="url(#neonGlow)"
          />
          <path
            d="M1028 892C1100 862 1140 842 1184 808C1222 778 1255 722 1302 692C1330 674 1356 652 1382 630"
            stroke="#0EA5E9"
            strokeOpacity="0.14"
            strokeWidth="20"
            filter="url(#softGlow)"
          />
          {scatterPoints.map(([cx, cy], index) => (
            <circle key={`scatter-${index}`} cx={cx} cy={cy} r={index % 3 === 0 ? 4 : 3} fill="#38BDF8" filter="url(#softGlow)" />
          ))}
          <g stroke="#0EA5E9" strokeOpacity="0.2" strokeWidth="1.5">
            <path d="M1076 700L1110 680L1144 700L1110 720Z" />
            <path d="M1110 680V720M1076 700L1110 740L1144 720" />
            <path d="M1280 500L1318 478L1356 500L1318 522Z" />
            <path d="M1318 478V522M1280 500L1318 544L1356 522" />
            <path d="M1235 590L1261 575L1287 590L1261 605Z" />
            <path d="M1261 575V605M1235 590L1261 620L1287 605" />
          </g>
          <text x="1020" y="936" fill="#7DD3FC" fillOpacity="0.72" fontSize="11" fontFamily="monospace">
            REGRESSION / SCATTER
          </text>
        </g>
      </svg>

      {/* Top-left: Faint Python / machine learning code */}
      <div className="absolute left-4 top-20 hidden w-[min(440px,43vw)] min-w-[300px] -rotate-1 font-mono text-[10px] leading-5 text-sky-200/60 sm:block md:left-10 md:top-24 md:text-xs">
        <div className="mb-2 flex items-center gap-2 text-sky-400/70">
          <span className="data-pulse h-1.5 w-1.5 rounded-full bg-sky-400/80 shadow-[0_0_8px_#38bdf8]" />
          <span>ml_pipeline.py</span>
        </div>
        <pre className="overflow-hidden rounded-xl border border-sky-400/10 bg-slate-950/20 p-3 shadow-[0_0_35px_rgba(14,165,233,0.08)]">
          <code>
            <span className="data-code-line block text-fuchsia-300/65" style={{ animationDelay: '0.1s' }}>import <span className="text-sky-300/70">pandas</span> as <span className="text-sky-300/70">pd</span></span>
            <span className="data-code-line block text-fuchsia-300/65" style={{ animationDelay: '0.55s' }}>from <span className="text-sky-300/70">sklearn.model_selection</span> import <span className="text-cyan-200/75">train_test_split</span></span>
            <span className="data-code-line block text-fuchsia-300/65" style={{ animationDelay: '1s' }}>from <span className="text-sky-300/70">sklearn.ensemble</span> import <span className="text-cyan-200/75">GradientBoostingRegressor</span></span>
            <span className="data-code-line block text-sky-300/70" style={{ animationDelay: '1.45s' }}>model<span className="text-slate-300/55">.</span><span className="text-cyan-200/75">fit</span><span className="text-slate-300/55">(</span>X_train, y_train<span className="text-slate-300/55">)</span></span>
            <span className="data-code-line block text-emerald-300/65" style={{ animationDelay: '1.9s' }}>accuracy <span className="text-slate-300/55">=</span> <span className="text-sky-300/70">0.942</span></span>
          </code>
        </pre>
      </div>
    </div>
  );
};