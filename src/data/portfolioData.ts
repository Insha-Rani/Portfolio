import { Project, MetricCard, ContactChannel } from '../types';

export const HERO_METRICS: MetricCard[] = [
  {
    value: '4+',
    label: 'End-to-End',
    sublabel: 'DS Projects',
  },
  {
    value: 'BCA',
    label: 'CS & Analytics',
    sublabel: 'Shoolini University',
  },
  {
    value: 'Python & SQL',
    label: 'Core Stack',
    sublabel: 'Data & Modeling',
  },
];

export const TECHNICAL_SKILLS = [
  'Python (Pandas, NumPy, Scikit-learn)',
  'SQL',
  'HTML & CSS',
  'JavaScript',
  'Streamlit',
  'Random Forest & Ensembles',
  'SMOTE (Imbalanced Data)',
  'EDA & Feature Engineering',
  'Threshold Optimization',
  'Data Cleaning & Standardization',
  'Plotly & Seaborn',
  'Cosine Similarity (TF-IDF)',
  'Gradient Boosting Regressor',
  'ColumnTransformer Pipelines',
  'Git & GitHub',
];

export const PROJECTS: Project[] = [
  {
    id: 'women-crime-analysis',
    badge: '● Deployed • Live Streamlit App',
    badgeType: 'deployed',
    category: 'End-to-End ML & Analytics',
    title: 'Women Safety Intelligence Dashboard',
    description:
      'End-to-end data pipeline & ML web app analyzing multi-year NCRB crime against women data (2001–2024). Standardizes messy multi-format district records, computes composite safety scores, and evaluates risk using Gradient Boosting with direct CSV data pipelines and an interactive Streamlit & Plotly UI.',
    tags: ['Python', 'Streamlit', 'Pandas', 'Scikit-learn', 'Plotly', 'Data Pipeline'],
    liveUrl: 'https://women-crime-analysis-4rq5wwh7s7k4gjd97jhmlp.streamlit.app/',
    repoUrl: 'https://github.com/Insha-Rani',
    primaryCta: {
      label: 'Open Live Demo ↗',
      action: 'demo',
      url: 'https://women-crime-analysis-4rq5wwh7s7k4gjd97jhmlp.streamlit.app/',
    },
    secondaryCta: {
      label: 'Read Case Study',
      action: 'case-study',
    },
    iconType: 'trend',
    metrics: [
      { label: 'ML Algorithm', value: 'Gradient Boosting' },
      { label: 'Data Processing', value: 'Direct CSV Stream' },
      { label: 'Time Coverage', value: '2001–2024 NCRB' },
    ],
    caseStudy: {
      overview:
        'Built an end-to-end Women Safety Intelligence system using NCRB crime-against-women data (2001–2024). Standardized multi-format state and district records across years, engineered a normalized district-level safety score (0–100), and trained a Gradient Boosting Regressor.',
      problem:
        'NCRB releases crime data in changing formats across different years. District names fluctuate, total/summary rows are interleaved, and stakeholders lacked an intuitive way to compare district-level safety signals over time.',
      methodology: [
        'Data Pipeline: Ingested 4 distinct NCRB annual formats, mapped & standardized all state/district names, and purged summary/aggregate rows into a unified 2001–2024 clean dataset.',
        'Safety Scoring (0–100): Calculated multi-year averages (2017–2024), computing weighted risk penalties across major categories, normalized and inverted to reflect safety.',
        'Machine Learning: Trained a Gradient Boosting Regressor for risk evaluation and trend analysis using Scikit-Learn.',
        'Architecture: Integrated direct preprocessed CSV data loading with Streamlit caching (@st.cache_data) for instantaneous state-level and district-level slice-and-dice queries, coupled with interactive Plotly visual charts.',
      ],
      results: [
        { metric: 'Data Pipeline', value: '2001–2024 NCRB', description: 'Multi-year format harmonization across districts' },
        { metric: 'Data Access', value: 'Direct CSV Stream', description: 'Streamlit cached pipelines for instant responsiveness' },
        { metric: 'Interactive Dashboard', value: 'Streamlit + Plotly', description: 'Live district filtering and trend visual charts' },
      ],
      techStackDetails: ['Python 3', 'Streamlit', 'Plotly', 'Pandas', 'NumPy', 'Scikit-learn', 'Joblib'],
    },
  },
  {
    id: 'movie-recommendation-system',
    badge: '● Deployed • Live Streamlit App',
    badgeType: 'deployed',
    category: 'NLP & Content-Based Filtering',
    title: 'Movie Recommendation System',
    description:
      'Content-based recommendation engine suggesting movies matched to user preferences and genres. Implements robust text preprocessing, TF-IDF vectorization, and Cosine Similarity to compute real-time relevance across thousands of films.',
    tags: ['Python', 'Streamlit', 'Scikit-learn', 'TF-IDF', 'Cosine Similarity', 'Pandas'],
    liveUrl: 'https://movie-recommender-system-cujliqbs3wyyzkjwmwrrjf.streamlit.app/',
    repoUrl: 'https://github.com/Insha-Rani',
    primaryCta: {
      label: 'Try Demo ↗',
      action: 'demo',
      url: 'https://movie-recommender-system-cujliqbs3wyyzkjwmwrrjf.streamlit.app/',
    },
    secondaryCta: {
      label: 'Read Case Study',
      action: 'case-study',
    },
    iconType: 'media',
    metrics: [
      { label: 'Movie Dataset', value: 'Thousands of Films' },
      { label: 'Similarity Metric', value: 'Cosine Distance' },
      { label: 'Latency', value: 'Instant Real-time' },
    ],
    caseStudy: {
      overview:
        'A deployed interactive recommendation system powered by NLP content-based filtering. Users select or search any film to instantly retrieve ranked recommendations based on plot keywords, genres, and semantic feature vectors.',
      problem:
        'Traditional recommendation systems often require large user-interaction matrices and struggle with new users (cold-start). Content-based filtering ensures high-precision recommendations based directly on movie metadata.',
      methodology: [
        'Extracted and cleaned multi-feature text metadata including genres, keywords, plot synopses, and credits.',
        'Applied NLP tokenization, text normalization, and vectorization using Scikit-learn (TF-IDF / Count Vectors).',
        'Computed pairwise Cosine Similarity matrices to measure geometric distance between film vectors in high-dimensional space.',
        'Built an intuitive Streamlit interface allowing real-time selection, poster fetching, and similarity sorting.',
      ],
      results: [
        { metric: 'Algorithm', value: 'Cosine Similarity', description: 'High semantic relevance for genres & themes' },
        { metric: 'Interface', value: 'Streamlit UI', description: 'Clean, responsive web-based interaction' },
        { metric: 'Preprocessing', value: 'NLP Pipeline', description: 'Cleaned text features and stopwords removal' },
      ],
      techStackDetails: ['Python', 'Streamlit', 'Pandas', 'Scikit-learn', 'TF-IDF', 'Cosine Similarity'],
    },
  },
  {
    id: 'housing-price-prediction',
    badge: '📁 GitHub • ML Pipeline',
    badgeType: 'github',
    category: 'Supervised Machine Learning',
    title: 'California Housing Price Prediction',
    description:
      'End-to-end regression system predicting median house values across 16,500+ California districts. Implemented stratified sampling, Scikit-Learn ColumnTransformer pipelines, and evaluated Linear Regression, Decision Trees, and Random Forests using 10-fold cross-validation.',
    tags: ['Python', 'Scikit-learn', 'Random Forest', 'Pipelines', 'Cross-Validation', 'Pandas'],
    repoUrl: 'https://github.com/Insha-Rani',
    primaryCta: {
      label: 'View Repository ↗',
      action: 'repo',
      url: 'https://github.com/Insha-Rani',
    },
    secondaryCta: {
      label: 'Read Case Study',
      action: 'case-study',
    },
    iconType: 'chart',
    metrics: [
      { label: 'Best Model', value: 'Random Forest' },
      { label: '10-Fold CV RMSE', value: '$49,462' },
      { label: 'Baseline Comparison', value: '-28.5% Error vs OLS' },
    ],
    caseStudy: {
      overview:
        'A production-grade regression workflow benchmarked on 16,512 training instances (13 engineered features) from the California Housing dataset. Evaluated model generalization using 10-fold cross-validation across three distinct algorithms.',
      problem:
        'Median house values are heavily skewed by geographic coordinates, ocean proximity, and median income levels. Simple train-test splits introduce sampling bias, and raw data contains missing attributes and unencoded categorical values.',
      methodology: [
        'Stratified Sampling: Employed StratifiedShuffleSplit on median income categories to guarantee representative population distributions across train and test sets.',
        'Feature Pipeline: Built modular Scikit-Learn Pipelines with SimpleImputer (median strategy), StandardScaler, and OneHotEncoder combined in a unified ColumnTransformer.',
        '10-Fold Cross-Validation: Evaluated Linear Regression, DecisionTreeRegressor, and RandomForestRegressor using neg_root_mean_squared_error across 10 folds.',
        'Benchmarking & Diagnosis: Identified high variance and severe training overfitting in single Decision Trees ($68,892 RMSE), while Random Forest ensemble stabilized predictions to $49,462 RMSE (minimum $45,860).',
      ],
      results: [
        { metric: 'Random Forest (10-Fold CV)', value: '$49,462 RMSE', description: 'Lowest error with ±$2,269 standard deviation across 10 folds' },
        { metric: 'Decision Tree (10-Fold CV)', value: '$68,892 RMSE', description: 'Overfit on training splits; high error variance' },
        { metric: 'Linear Regression (10-Fold CV)', value: '$69,204 RMSE', description: 'High-bias baseline with ±$2,500 standard deviation' },
      ],
      techStackDetails: ['Python 3', 'Scikit-learn', 'NumPy', 'Pandas', 'ColumnTransformer', 'Pipeline', 'K-Fold CV'],
    },
  },
  {
    id: 'credit-card-fraud-detection',
    badge: '📁 GitHub • Fraud Detection',
    badgeType: 'github',
    category: 'Classification & Anomaly Detection',
    title: 'Credit Card Fraud Detection & Threshold Optimization',
    description:
      'High-stakes financial fraud detection on 284,807 European transactions with extreme class imbalance (0.17% fraud). Balanced data with SMOTE, scaled Time & Amount with StandardScaler, trained Logistic Regression, Decision Tree & Random Forest, and tuned decision threshold to 0.90 to slash false alarms by 87%.',
    tags: ['Python', 'Scikit-learn', 'SMOTE', 'Random Forest', 'Threshold Tuning', 'Seaborn'],
    repoUrl: 'https://github.com/Insha-Rani',
    primaryCta: {
      label: 'View Repository ↗',
      action: 'repo',
      url: 'https://github.com/Insha-Rani',
    },
    secondaryCta: {
      label: 'Read Case Study',
      action: 'case-study',
    },
    iconType: 'shield',
    metrics: [
      { label: 'Dataset Size', value: '284,807 Rows' },
      { label: 'Fraud Recall', value: '88% – 92%' },
      { label: 'False Alarm Cut', value: '-87% (at 0.90 Thr)' },
    ],
    caseStudy: {
      overview:
        'A comprehensive fraud detection classification architecture trained on Kaggle Credit Card dataset (284,807 transactions, 492 frauds). Handled severe skewness via synthetic minority oversampling (SMOTE) and optimized production decision boundary to protect customer experience while catching critical financial frauds.',
      problem:
        'With only 0.17% fraud transactions, naive models achieve 99.8% dummy accuracy while completely missing real theft. Standard 0.50 threshold yields over 1,400 false positives in Logistic Regression, blocking innocent cardholders.',
      methodology: [
        'Data Ingestion & Stratified Split: Analyzed 284,807 transactions, stratified 80/20 train-test split (56,962 test transactions with 98 actual frauds) to preserve distribution.',
        'Feature Scaling: Separated Time & Amount and fitted StandardScaler exclusively on training set to avoid data leakage before transforming test set.',
        'SMOTE Resampling: Synthesized artificial fraud instances exclusively on the training data using imblearn.over_sampling.SMOTE to achieve 50/50 balance.',
        'Comparative Model Training: Trained Logistic Regression (max_iter=1000), Decision Tree (max_depth=10), and Random Forest (100 estimators, max_depth=10).',
        'Decision Boundary Optimization: Transitioned from rigid 0.5 default predictions to predict_proba() thresholding at 0.90 probability, drastically cutting False Positives from 115 down to 15 while retaining 73 caught frauds.',
      ],
      results: [
        { metric: 'Threshold 0.90 Tuning', value: '15 False Positives', description: 'Reduced false alarms from 115 to 15 (87% drop in customer disruption)' },
        { metric: 'Random Forest F1-Score', value: '0.58 @ 0.50', description: '88% Fraud Recall (86/98) and 43% precision under default settings' },
        { metric: 'Logistic Regression Recall', value: '92% (90/98 frauds)', description: 'Highest sensitivity but generated 1,461 false alarms' },
      ],
      techStackDetails: ['Python', 'Scikit-learn', 'SMOTE (imblearn)', 'RandomForestClassifier', 'DecisionTreeClassifier', 'LogisticRegression', 'Seaborn', 'Matplotlib', 'Pickle'],
    },
  },
];

export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    id: 'email',
    icon: 'mail',
    label: 'Email Address',
    value: 'insharani02@gmail.com',
    link: 'mailto:insharani02@gmail.com',
    category: 'Direct Message',
  },
  {
    id: 'linkedin',
    icon: 'briefcase',
    label: 'LinkedIn Profile',
    value: 'insha-rani-22bb10338',
    link: 'https://www.linkedin.com/in/insha-rani-22bb10338/',
    category: 'Professional Network',
  },
  {
    id: 'github',
    icon: 'code',
    label: 'GitHub Profile',
    value: 'github.com/Insha-Rani',
    link: 'https://github.com/Insha-Rani',
    category: 'Open Source Code',
  },
];

export const DEMO_SAMPLE_DATA = {
  movies: [
    { title: 'Inception', year: 2010, match: 98, genre: 'Sci-Fi / Action', similarity: '0.982', tags: ['Dream logic', 'Time dilation', 'Mind heist'] },
    { title: 'Interstellar', year: 2014, match: 95, genre: 'Sci-Fi / Drama', similarity: '0.947', tags: ['Space exploration', 'Wormholes', 'Relativity'] },
    { title: 'Shutter Island', year: 2010, match: 89, genre: 'Psychological Thriller', similarity: '0.891', tags: ['Plot twist', 'Investigator', 'Mystery'] },
    { title: 'Tenet', year: 2020, match: 87, genre: 'Sci-Fi / Espionage', similarity: '0.865', tags: ['Temporal inversion', 'Secret agents', 'Quantum'] },
    { title: 'The Prestige', year: 2006, match: 85, genre: 'Drama / Mystery', similarity: '0.849', tags: ['Rivalry', 'Illusionists', 'Obsession'] },
    { title: 'Memento', year: 2000, match: 83, genre: 'Mystery / Thriller', similarity: '0.832', tags: ['Non-linear memory', 'Amnesia', 'Noir'] },
  ],
  crimeStats: [
    { region: 'Metropolitan Central', index: 78.4, safetyScore: 68, trend: '+2.1%', incidents: 1420 },
    { region: 'Northern Urban Corridor', index: 62.1, safetyScore: 74, trend: '-4.8%', incidents: 980 },
    { region: 'Southern Coastal District', index: 44.8, safetyScore: 86, trend: '-11.2%', incidents: 610 },
    { region: 'Eastern Industrial Zone', index: 71.9, safetyScore: 65, trend: '-1.4%', incidents: 1140 },
    { region: 'Western Suburbs', index: 39.2, safetyScore: 91, trend: '-8.5%', incidents: 490 },
  ],
  housingFeatureDefaults: {
    medianIncome: 4.8, // in tens of thousands
    houseAge: 25,
    avgRooms: 5.4,
    oceanProximity: 'NEAR BAY',
  },
};
