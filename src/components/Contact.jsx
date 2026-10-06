import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Mail, Linkedin, Github, ArrowRight, Send, CheckCircle2 } from 'lucide-react';

export default function Contact({ onOpenModal }) {
  const { heading, subheading, email, github, linkedin } = PORTFOLIO_DATA.contact;

  return (
    <section 
      id="contact" 
      style={{
        padding: '6rem 0',
        backgroundColor: 'var(--bg-primary)',
        position: 'relative',
        borderTop: '1px solid var(--border-dim)'
      }}
    >
      <div className="container" style={{ textAlign: 'center' }}>
        
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>
            INITIATE COMMUNICATIONS
          </div>

          <h2 className="pixel-font" style={{
            fontSize: 'clamp(2rem, 4vw, 3.4rem)',
            color: 'var(--text-primary)',
            lineHeight: '1.2',
            marginBottom: '1.25rem',
            letterSpacing: '-0.02em'
          }}>
            LET'S BUILD SOMETHING<br />
            <span style={{ color: 'var(--accent-orange)' }}>PLAYABLE.</span>
          </h2>

          <p style={{
            fontSize: '1.2rem',
            color: 'var(--text-secondary)',
            marginBottom: '2.5rem',
            maxWidth: '560px',
            margin: '0 auto 2.5rem auto'
          }}>
            {subheading}
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3.5rem' }}>
            <button 
              className="btn-primary" 
              onClick={onOpenModal}
              style={{ padding: '16px 36px', fontSize: '1rem' }}
            >
              <span>GET IN TOUCH</span>
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Social & Email Links */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap'
          }}>
            <a 
              href={`mailto:${email}`}
              className="hud-panel"
              style={{
                padding: '12px 20px',
                borderRadius: '4px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                color: 'var(--text-primary)'
              }}
            >
              <Mail size={16} color="var(--accent-orange)" />
              <span>{email}</span>
            </a>

            <a 
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hud-panel"
              style={{
                padding: '12px 20px',
                borderRadius: '4px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                color: 'var(--text-primary)'
              }}
            >
              <Linkedin size={16} color="var(--accent-gold)" />
              <span>LINKEDIN</span>
            </a>

            <a 
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="hud-panel"
              style={{
                padding: '12px 20px',
                borderRadius: '4px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                color: 'var(--text-primary)'
              }}
            >
              <Github size={16} color="var(--accent-teal)" />
              <span>GITHUB</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
