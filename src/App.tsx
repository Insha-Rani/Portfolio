import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BottomNav, NavTab } from './components/BottomNav';
import { InteractiveDemoModal } from './components/InteractiveDemoModal';
import { ContactModal } from './components/ContactModal';
import { DataChartsBackground } from './components/DataChartsBackground';
import { PROJECTS } from './data/portfolioData';
import { Project } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('overview');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalMode, setModalMode] = useState<'demo' | 'case-study' | 'repo' | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactSubject, setContactSubject] = useState('');

  // Scroll spy to update activeTab in bottom navigation
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const projectsEl = document.getElementById('projects');
      const aboutEl = document.getElementById('about');
      const contactEl = document.getElementById('contact');

      if (!projectsEl || !aboutEl || !contactEl) return;

      const offset = 220;
      const contactPos = contactEl.offsetTop - offset;
      const aboutPos = aboutEl.offsetTop - offset;
      const projectsPos = projectsEl.offsetTop - offset;

      if (scrollY >= contactPos) {
        setActiveTab('contact');
      } else if (scrollY >= aboutPos) {
        setActiveTab('about');
      } else if (scrollY >= projectsPos) {
        setActiveTab('projects');
      } else {
        setActiveTab('overview');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTabChange = (tab: NavTab) => {
    setActiveTab(tab);
    if (tab === 'overview') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(tab);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleOpenDemo = (project: Project) => {
    if (project.liveUrl) {
      window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
      return;
    }
    setSelectedProject(project);
    setModalMode('demo');
  };

  const handleOpenCaseStudy = (project: Project) => {
    setSelectedProject(project);
    setModalMode('case-study');
  };

  const handleOpenRepo = (project: Project) => {
    const repo = project.repoUrl || 'https://github.com/Insha-Rani';
    window.open(repo, '_blank', 'noopener,noreferrer');
  };

  const handleOpenContact = (subject?: string) => {
    setContactSubject(subject || 'General Inquiry');
    setIsContactOpen(true);
  };

  const handleSkillClick = (skill: string) => {
    // Filter or highlight projects with this skill or scroll to projects
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="top" className="min-h-screen bg-[#030B1E] text-[#F1F5F9] relative isolate selection:bg-sky-500 selection:text-white overflow-x-hidden">
      <DataChartsBackground />

      {/* Top Fixed / Sticky Navigation Bar */}
      <Navbar onContactClick={() => handleOpenContact('Data Science Inquiry')} />

      {/* Main Single-Column Portfolio Content Flow */}
      <main className="w-full">
        {/* Hero Section */}
        <Hero
          onViewProjects={() => handleTabChange('projects')}
          onOpenGithub={() => {
            const project = PROJECTS.find((p) => p.badgeType === 'github') || PROJECTS[2];
            handleOpenRepo(project);
          }}
          onSkillClick={handleSkillClick}
        />

        {/* Featured Projects Section */}
        <ProjectsSection
          projects={PROJECTS}
          onOpenDemo={handleOpenDemo}
          onOpenCaseStudy={handleOpenCaseStudy}
          onOpenRepo={handleOpenRepo}
        />

        {/* About & Background Section */}
        <AboutSection
          onCollaborateClick={() => handleOpenContact('ML Collaboration Request')}
        />

        {/* Get in Touch / Contact Section */}
        <ContactSection
          onDirectMessage={(subj) => handleOpenContact(subj)}
        />

        {/* Footer */}
        <Footer
          onNavClick={(target) => handleTabChange(target)}
          onOpenSourceCode={() => {
            handleOpenRepo(PROJECTS[2]);
          }}
        />
      </main>

      {/* Floating Bottom Quick Navigation Dock */}
      <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />

      {/* Interactive Live Demo & Case Study Modal */}
      <InteractiveDemoModal
        project={selectedProject}
        mode={modalMode}
        onClose={() => {
          setSelectedProject(null);
          setModalMode(null);
        }}
        onContactClick={() => {
          setSelectedProject(null);
          setModalMode(null);
          handleOpenContact(`Discussion on ${selectedProject?.title}`);
        }}
      />

      {/* Contact / Message Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        initialSubject={contactSubject}
      />
    </div>
  );
}
