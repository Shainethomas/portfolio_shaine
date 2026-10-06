import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GraduationCap, Code2, Gamepad2, Layers, Award, ArrowDown } from 'lucide-react';

export default function About() {
  const { bio, timeline } = PORTFOLIO_DATA.about;

  const icons = [
    <GraduationCap size={18} color="var(--accent-gold)" />,
    <Code2 size={18} color="var(--accent-cyan)" />,
    <Layers size={18} color="var(--accent-teal)" />,
    <Gamepad2 size={18} color="var(--accent-orange)" />,
    <Award size={18} color="var(--accent-gold)" />
  ];

  return (
    <section 
      id="about" 
      style={{
        padding: '5rem 0',
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-dim)',
        position: 'relative'
      }}
    >
      <div className="container">
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '3rem',
          alignItems: 'start'
        }} className="about-grid">

          {/* Left Column: Bio & Core Philosophy */}
          <div>
            <div className="section-eyebrow">
              BACKGROUND & PERSPECTIVE
            </div>
            <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
              ABOUT ME
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
              {bio.map((paragraph, idx) => (
                <p 
                  key={idx} 
                  style={{
                    fontSize: '1.05rem',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.7'
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Highlights Box */}
            <div 
              className="hud-panel hud-panel-notch"
              style={{
                padding: '1.5rem',
                borderRadius: '4px',
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <div className="mono-font" style={{
                fontSize: '0.8rem',
                color: 'var(--accent-gold)',
                marginBottom: '0.75rem',
                letterSpacing: '0.1em'
              }}>
                PRIMARY DESIGN FOCUS
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '10px'
              }}>
                <div style={{ fontSize: '0.88rem', color: 'var(--text-primary)' }}>• Systems & Economy Models</div>
                <div style={{ fontSize: '0.88rem', color: 'var(--text-primary)' }}>• Mobile Game Progression</div>
                <div style={{ fontSize: '0.88rem', color: 'var(--text-primary)' }}>• Precision Level Design</div>
                <div style={{ fontSize: '0.88rem', color: 'var(--text-primary)' }}>• Rapid Prototyping</div>
              </div>
            </div>

          </div>

          {/* Right Column: Career Timeline */}
          <div>
            <div className="mono-font" style={{
              fontSize: '0.85rem',
              color: 'var(--accent-orange)',
              letterSpacing: '0.12em',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              EVOLUTION PATHWAY
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {timeline.map((item, idx) => (
                <React.Fragment key={idx}>
                  <div 
                    className="hud-panel"
                    style={{
                      padding: '1.25rem 1.5rem',
                      borderRadius: '4px',
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem'
                    }}
                  >
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '2px',
                      background: 'var(--bg-tertiary)',
                      border: '1px solid var(--border-dim)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {icons[idx]}
                    </div>

                    <div>
                      <div className="mono-font" style={{
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        marginBottom: '2px'
                      }}>
                        {item.step}
                      </div>
                      <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                        {item.detail}
                      </div>
                    </div>
                  </div>

                  {idx < timeline.length - 1 && (
                    <div style={{ textAlign: 'center', color: 'var(--accent-orange)', opacity: 0.6, margin: '-4px 0' }}>
                      <ArrowDown size={14} style={{ display: 'inline-block' }} />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
