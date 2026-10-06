import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProject from './components/FeaturedProject';
import SelectedWork from './components/SelectedWork';
import DesignLab from './components/DesignLab';
import InteractiveSimulator from './components/InteractiveSimulator';
import DesignPhilosophy from './components/DesignPhilosophy';
import DesignProcess from './components/DesignProcess';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CaseStudyModal from './components/CaseStudyModal';
import ContactModal from './components/ContactModal';

export default function App() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>

      {/* Subtle Glowing Radial Cursor Following Indicator */}
      <div
        className="cursor-glow"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`
        }}
      />

      {/* Navigation */}
      <Navbar onContactClick={() => setIsContactOpen(true)} />

      {/* Main Page Sections */}
      <main>
        <Hero
          onWorkClick={() => scrollToSection('featured')}
          onAboutClick={() => scrollToSection('about')}
        />

        <FeaturedProject
          onOpenCaseStudy={(proj) => setSelectedCaseStudy(proj)}
        />

        <SelectedWork
          onOpenCaseStudy={(proj) => setSelectedCaseStudy(proj)}
        />

        <DesignLab />

        <InteractiveSimulator />

        <DesignPhilosophy />

        <DesignProcess />

        <About />

        <Skills />

        <Experience />

        <Contact
          onOpenModal={() => setIsContactOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      {selectedCaseStudy && (
        <CaseStudyModal
          project={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
        />
      )}

      {isContactOpen && (
        <ContactModal
          onClose={() => setIsContactOpen(false)}
        />
      )}

    </div>
  );
}
