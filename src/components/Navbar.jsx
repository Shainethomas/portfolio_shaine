import React, { useState, useEffect } from 'react';
import { Gamepad2, Menu, X, Mail } from 'lucide-react';

export default function Navbar({ onContactClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['home', 'work', 'lab', 'about'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', number: '01', label: 'HOME' },
    { id: 'work', number: '02', label: 'WORK' },
    { id: 'lab', number: '03', label: 'LAB' },
    { id: 'about', number: '04', label: 'ABOUT' }
  ];

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: scrolled ? 'var(--bg-overlay)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-dim)' : '1px solid transparent',
        transition: 'all 0.3s ease',
        padding: '0.8rem 0'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Brand / Logo */}
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
          style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
        >
          {/* Pixel Avatar Box */}
          <div style={{
            width: '36px',
            height: '36px',
            background: 'var(--bg-tertiary)',
            border: '1px solid var(--border-accent)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%)'
          }}>
            <Gamepad2 size={20} color="var(--accent-orange)" />
          </div>

          <div>
            <div className="pixel-font" style={{ fontSize: '0.9rem', color: 'var(--text-primary)', letterSpacing: '0.05em' }}>
              SHAINE.T
            </div>
            <div className="mono-font" style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.08em' }}>
              GAME DESIGNER
            </div>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: isActive ? 'var(--accent-orange)' : 'var(--text-secondary)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 12px',
                  position: 'relative',
                  transition: 'color 0.2s ease'
                }}
              >
                <span style={{ opacity: 0.5, fontSize: '0.72rem' }}>{item.number}</span>
                <span>{item.label}</span>

                {isActive && (
                  <span style={{
                    position: 'absolute',
                    bottom: '-4px',
                    left: '12px',
                    right: '12px',
                    height: '2px',
                    backgroundColor: 'var(--accent-orange)',
                    boxShadow: '0 0 8px var(--accent-orange)'
                  }} />
                )}
              </button>
            );
          })}
        </nav>

        {/* Controller Indicator & Right CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }} className="desktop-nav">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.75 }}>
            <Gamepad2 size={18} color="var(--accent-gold)" />
            <span className="mono-font" style={{ fontSize: '0.68rem', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
              DESIGN / PLAY / ITERATE
            </span>
          </div>

          <button 
            className="btn-primary" 
            onClick={onContactClick}
            style={{ padding: '8px 16px', fontSize: '0.75rem' }}
          >
            <Mail size={14} />
            <span>GET IN TOUCH</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-toggle"
          style={{
            display: 'none',
            background: 'var(--bg-tertiary)',
            border: '1px solid var(--border-subtle)',
            color: 'var(--text-primary)',
            padding: '8px',
            cursor: 'pointer'
          }}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div style={{
          backgroundColor: 'var(--bg-secondary)',
          borderBottom: '1px solid var(--border-subtle)',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              style={{
                background: 'none',
                border: 'none',
                color: activeSection === item.id ? 'var(--accent-orange)' : 'var(--text-primary)',
                fontFamily: 'var(--font-mono)',
                fontSize: '1rem',
                textAlign: 'left',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '8px 0',
                cursor: 'pointer'
              }}
            >
              <span style={{ color: 'var(--accent-gold)' }}>{item.number}</span>
              <span>{item.label}</span>
            </button>
          ))}

          <button 
            className="btn-primary" 
            onClick={() => { setMobileMenuOpen(false); onContactClick(); }}
            style={{ width: '100%', marginTop: '0.5rem' }}
          >
            <Mail size={16} />
            <span>GET IN TOUCH</span>
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
