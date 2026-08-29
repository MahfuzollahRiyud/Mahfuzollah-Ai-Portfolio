import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { CursorGlow } from './components/CursorGlow';
import { Hero } from './components/Hero';
import { TrustStats } from './components/TrustStats';
import { AboutSection } from './components/AboutSection';
import { SkillsConstellation } from './components/SkillsConstellation';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { ProcessSection } from './components/ProcessSection';
import { WhyWorkWithMe } from './components/WhyWorkWithMe';
import { ExperienceSection } from './components/ExperienceSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { PROJECTS } from './data/portfolioData';

export function App() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [contactProjectType, setContactProjectType] = useState<string>('WordPress & Elementor');

  const selectedProject = selectedProjectId
    ? PROJECTS.find((p) => p.id === selectedProjectId) || null
    : null;

  const handleOpenContact = (projectType?: string) => {
    if (projectType) {
      setContactProjectType(projectType);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#090a0f] text-slate-100 selection:bg-cyan-500 selection:text-slate-950 relative overflow-x-hidden">
      {/* Interactive Cursor Spotlight Glow */}
      <CursorGlow />

      {/* Primary Sticky Navbar */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Page Flow */}
      <main id="main-content">
        {/* 1. Hero Section */}
        <Hero
          onOpenContact={() => handleOpenContact()}
          onSelectProject={(id) => setSelectedProjectId(id)}
        />

        {/* 2. Trust & Credibility Stats Strip */}
        <TrustStats />

        {/* 3. About Section */}
        <AboutSection onOpenContact={() => handleOpenContact()} />

        {/* 4. Skills & Expertise Constellation */}
        <SkillsConstellation />

        {/* 5. Services Section */}
        <ServicesSection
          onSelectServiceForInquiry={(serviceTitle) => handleOpenContact(serviceTitle)}
        />

        {/* 6. Selected Work / Projects Showcase */}
        <ProjectsShowcase onSelectProject={(id) => setSelectedProjectId(id)} />

        {/* 7. Development Process & Methodology */}
        <ProcessSection />

        {/* 8. Why Work With Me (Values & Standards) */}
        <WhyWorkWithMe onOpenContact={() => handleOpenContact()} />

        {/* 9. Career & Professional Experience Timeline */}
        <ExperienceSection />

        {/* 10. Client Testimonials & Endorsements */}
        <TestimonialsSection />

        {/* 11. Contact & Proposal Inquiry Form */}
        <ContactSection initialProjectType={contactProjectType} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Deep Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProjectId(null)}
        onOpenContact={handleOpenContact}
      />
    </div>
  );
}

export default App;
