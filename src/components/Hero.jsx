import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Play, User, CheckSquare, Square, Sparkles } from 'lucide-react';

export default function Hero({ onWorkClick, onAboutClick }) {
  const { eyebrow, role, tagline, positioningNote, skillTags, quote } = PORTFOLIO_DATA.hero;

  const [hudItems, setHudItems] = useState([
    { label: 'IDEAS', done: true },
    { label: 'MECHANICS', done: true },
    { label: 'SYSTEMS', done: true },
    { label: 'PLAYTESTS', done: true },
    { label: 'BETTER GAMES', done: true }
  ]);

  const toggleHud = (index) => {
    setHudItems(prev => {
      const copy = [...prev];
      copy[index].done = !copy[index].done;
      return copy;
    });
  };

  return (
    <section 
      id="home" 
      style={{
        paddingTop: '7rem',
        paddingBottom: '4rem',
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative'
      }}
    >
      <div className="container" style={{ width: '100%' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.1fr',
          gap: '2.5rem',
          alignItems: 'center'
        }} className="hero-grid">

          {/* Left Column: Positioning & Typography */}
          <div style={{ zIndex: 2 }}>
            
            {/* Eyebrow */}
            <div className="mono-font" style={{
              fontSize: '0.85rem',
              letterSpacing: '0.15em',
              color: 'var(--accent-gold)',
              marginBottom: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span style={{ color: 'var(--accent-orange)' }}>●</span> {eyebrow}
            </div>

            {/* Huge Name Heading */}
            <h1 className="pixel-font" style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
              lineHeight: '1.05',
              color: 'var(--text-primary)',
              marginBottom: '0.75rem',
              textShadow: '0 0 30px rgba(242, 101, 57, 0.15)',
              letterSpacing: '-0.02em'
            }}>
              SHAINE<br />
              <span style={{ color: 'var(--text-primary)' }}>THOMAS</span>
            </h1>

            {/* Subtitle */}
            <div className="mono-font" style={{
              fontSize: '1.1rem',
              fontWeight: 600,
              color: 'var(--accent-orange)',
              letterSpacing: '0.12em',
              marginBottom: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <span style={{ width: '24px', height: '2px', background: 'var(--accent-orange)' }} />
              {role}
            </div>

            {/* Tagline & Positioning Note */}
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              lineHeight: '1.6',
              maxWidth: '540px',
              marginBottom: '1rem',
              fontStyle: 'italic',
              borderLeft: '3px solid var(--accent-orange)',
              paddingLeft: '1rem'
            }}>
              "{tagline}"
            </p>

            <p style={{
              fontSize: '0.92rem',
              color: 'var(--accent-gold)',
              fontFamily: 'var(--font-mono)',
              lineHeight: '1.5',
              maxWidth: '540px',
              marginBottom: '1.75rem'
            }}>
              {positioningNote}
            </p>

            {/* Skill Tags */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              marginBottom: '2rem',
              maxWidth: '540px'
            }}>
              {skillTags.map((tag, idx) => (
                <span key={idx} className="hud-tag">
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <button 
                className="btn-primary" 
                onClick={onWorkClick}
              >
                <Play size={16} fill="currentColor" />
                <span>EXPLORE GAMES</span>
              </button>

              <button 
                className="btn-secondary"
                onClick={onAboutClick}
              >
                <User size={16} />
                <span>ABOUT ME</span>
              </button>
            </div>

          </div>

          {/* Right Column: Hero Key Art Showcase */}
          <div style={{ position: 'relative' }}>
            
            <div 
              className="hud-panel hud-panel-notch"
              style={{
                borderRadius: '4px',
                overflow: 'hidden',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 20px rgba(242, 101, 57, 0.1)',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <img 
                src="/assets/hero_rooftop_sunset.jpg" 
                alt="Shaine Thomas - Game Designer Artwork" 
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '460px',
                  objectFit: 'cover',
                  display: 'block',
                  filter: 'contrast(1.05) brightness(0.95)'
                }}
              />

              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '40%',
                background: 'linear-gradient(to top, rgba(12, 13, 16, 0.9) 0%, transparent 100%)',
                pointerEvents: 'none'
              }} />

              {/* Quote Note Top Right */}
              <div style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'rgba(18, 20, 26, 0.85)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(229, 169, 60, 0.3)',
                padding: '8px 14px',
                borderRadius: '4px',
                maxWidth: '220px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.5)'
              }}>
                <div style={{
                  fontFamily: 'Caveat, cursive, sans-serif',
                  fontSize: '0.95rem',
                  color: 'var(--accent-gold)',
                  fontStyle: 'italic',
                  lineHeight: '1.3'
                }}>
                  "{quote}"
                </div>
              </div>

              {/* Interactive HUD Checklist Bottom Right */}
              <div style={{
                position: 'absolute',
                bottom: '16px',
                right: '16px',
                background: 'rgba(12, 13, 16, 0.85)',
                backdropFilter: 'blur(8px)',
                border: '1px solid var(--border-subtle)',
                padding: '10px 14px',
                borderRadius: '4px',
                minWidth: '170px'
              }}>
                <div className="mono-font" style={{
                  fontSize: '0.65rem',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.1em',
                  marginBottom: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <Sparkles size={10} color="var(--accent-orange)" /> DESIGN PIPELINE
                </div>

                {hudItems.map((item, index) => (
                  <div 
                    key={index} 
                    onClick={() => toggleHud(index)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      color: item.done ? 'var(--accent-gold)' : 'var(--text-muted)',
                      margin: '3px 0',
                      cursor: 'pointer',
                      userSelect: 'none'
                    }}
                  >
                    {item.done ? (
                      <CheckSquare size={12} color="var(--accent-gold)" />
                    ) : (
                      <Square size={12} color="var(--text-muted)" />
                    )}
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>

              <div style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                background: 'rgba(12, 13, 16, 0.8)',
                padding: '4px 8px',
                border: '1px solid var(--border-dim)',
                fontSize: '0.65rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--accent-orange)',
                letterSpacing: '0.1em'
              }}>
                GAME_DESIGN_ARCHIVE // 01
              </div>

            </div>

          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
