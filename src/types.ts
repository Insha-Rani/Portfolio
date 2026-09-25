export interface Project {
  id: string;
  badge: string;
  badgeType: 'deployed' | 'github';
  category: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  primaryCta: {
    label: string;
    action: 'demo' | 'repo';
    url?: string;
  };
  secondaryCta?: {
    label: string;
    action: 'case-study';
  };
  iconType: 'trend' | 'media' | 'chart' | 'shield';
  metrics?: {
    label: string;
    value: string;
  }[];
  caseStudy?: {
    overview: string;
    problem: string;
    methodology: string[];
    results: {
      metric: string;
      value: string;
      description: string;
    }[];
    techStackDetails: string[];
  };
}

export interface MetricCard {
  value: string;
  label: string;
  sublabel: string;
}

export interface ContactChannel {
  id: string;
  icon: string;
  label: string;
  value: string;
  link: string;
  category: string;
}
