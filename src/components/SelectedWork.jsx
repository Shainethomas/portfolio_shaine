import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowRight, Sparkles, Gamepad2, Layers } from 'lucide-react';

export default function SelectedWork({ onOpenCaseStudy, onPlayGame }) {
  const featuredGames = PORTFOLIO_DATA.featuredGames;
  const gameSystems = PORTFOLIO_DATA.gameSystemsAndFeatures;

  const renderCard = (proj, index, groupPrefix) => (
    <div
      key={proj.id}
      className="hud-panel work-card"
      onClick={() => {
        if (proj.id === 'time-slip' && onPlayGame) {
          onOpenCaseStudy(proj);
        } else {
          onOpenCaseStudy(proj);
        }
      }}
      style={{
        borderRadius: '4px',
        overflow: 'hidden',
        cursor: 'pointer',
        background: 'var(--bg-card)',
        border: '1px solid var(--border-subtle)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      {/* Card Image Header */}
      <div style={{ position: 'relative', overflow: 'hidden', height: '210px', background: '#000' }}>
        <img 
          src={proj.image} 
          alt={proj.title} 
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease',
            filter: 'brightness(0.92) contrast(1.05)'
          }}
          className="card-image"
        />

        {/* Project Number & Category Top Left */}
        <div style={{
          position: 'absolute',
          top: '12px',
          left: '12px',
          background: 'rgba(12, 13, 16, 0.88)',
          backdropFilter: 'blur(6px)',
          border: '1px solid var(--border-subtle)',
          padding: '4px 8px',
          borderRadius: '2px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          <span className="mono-font" style={{ fontSize: '0.65rem', color: 'var(--accent-orange)', fontWeight: 700 }}>
            0{groupPrefix + index + 1}
          </span>
          <span className="mono-font" style={{ fontSize: '0.62rem', color: 'var(--accent-gold)', letterSpacing: '0.08em', fontWeight: 600 }}>
            {proj.category}
          </span>
        </div>

        {/* Hover overlay hint */}
        <div className="hover-overlay" style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(242, 101, 57, 0.15)',
          opacity: 0,
          transition: 'opacity 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px'
        }}>
          <div className="btn-primary" style={{ padding: '8px 16px', fontSize: '0.75rem' }}>
            VIEW CASE STUDY →
          </div>
        </div>
      </div>

      {/* Card Body Content */}
      <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <h3 className="mono-font" style={{
            fontSize: '1.15rem',
            fontWeight: 700,
            color: 'var(--text-primary)',
            marginBottom: '0.6rem',
            letterSpacing: '0.02em'
          }}>
            {proj.title}
          </h3>

          <p style={{
            fontSize: '0.9rem',
            color: 'var(--text-secondary)',
            lineHeight: '1.55',
            marginBottom: '1rem'
          }}>
            {proj.description}
          </p>

          {/* Framing formula if present */}
          {proj.framing && (
            <div className="mono-font" style={{
              fontSize: '0.68rem',
              color: 'var(--accent-gold)',
              background: 'var(--bg-tertiary)',
              padding: '4px 8px',
              border: '1px solid var(--border-dim)',
              marginBottom: '1rem',
              display: 'inline-block'
            }}>
              {proj.framing}
            </div>
          )}
        </div>

        {/* Tags and Action Bar */}
        <div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid var(--border-dim)',
            paddingTop: '1rem',
            marginTop: '0.5rem'
          }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {proj.tags.slice(0, 4).map((tag, idx) => (
                <span key={idx} className="hud-tag" style={{ fontSize: '0.62rem', padding: '2px 6px' }}>
                  {tag}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {proj.id === 'time-slip' && (
                <button
                  onClick={(e) => { e.stopPropagation(); onPlayGame(); }}
                  className="btn-primary"
                  style={{ padding: '4px 10px', fontSize: '0.68rem' }}
                >
                  <Gamepad2 size={12} />
                  <span>PLAY</span>
                </button>
              )}

              <div 
                className="arrow-circle"
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)',
                  transition: 'all 0.2s ease'
                }}
              >
                <ArrowRight size={14} />
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );

  return (
    <section 
      id="work" 
      style={{
        padding: '5rem 0',
        position: 'relative'
      }}
    >
      <div className="container">
        
        {/* GROUP 1: FEATURED GAMES */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: '2rem',
            flexWrap: 'wrap',
            gap: '1rem',
            borderBottom: '1px solid var(--border-dim)',
            paddingBottom: '1rem'
          }}>
            <div>
              <div className="section-eyebrow">
                CORE GAME DESIGN ARCHIVE
              </div>
              <h2 className="section-title">
                FEATURED GAMES
              </h2>
              <p className="section-subtitle">
                Playable experiences, mechanics, and design case studies.
              </p>
            </div>

            <div className="mono-font" style={{
              fontSize: '0.75rem',
              color: 'var(--accent-orange)',
              letterSpacing: '0.12em',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <Sparkles size={14} />
              <span>PROJECTS 01 — 05</span>
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '1.75rem'
          }}>
            {featuredGames.map((proj, idx) => renderCard(proj, idx, 0))}
          </div>
        </div>

        {/* GROUP 2: GAME SYSTEMS & FEATURES */}
        <div>
          <div style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: '2rem',
            flexWrap: 'wrap',
            gap: '1rem',
            borderBottom: '1px solid var(--border-dim)',
            paddingBottom: '1rem'
          }}>
            <div>
              <div className="section-eyebrow" style={{ color: 'var(--accent-teal)' }}>
                PRODUCTION & LIVE SYSTEMS
              </div>
              <h2 className="section-title" style={{ fontSize: '1.8rem' }}>
                GAME SYSTEMS & FEATURES
              </h2>
              <p className="section-subtitle">
                Multiplayer features, economy models, progression loops, and game feel deconstructions.
              </p>
            </div>

            <div className="mono-font" style={{
              fontSize: '0.75rem',
              color: 'var(--accent-teal)',
              letterSpacing: '0.12em',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <Layers size={14} />
              <span>PROJECTS 06 — 08</span>
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '1.75rem'
          }}>
            {gameSystems.map((proj, idx) => renderCard(proj, idx, 5))}
          </div>
        </div>

      </div>

      <style>{`
        .work-card:hover {
          transform: translateY(-4px);
          border-color: var(--accent-orange) !important;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4), 0 0 15px rgba(242, 101, 57, 0.15);
        }
        .work-card:hover .card-image {
          transform: scale(1.05);
        }
        .work-card:hover .hover-overlay {
          opacity: 1;
        }
        .work-card:hover .arrow-circle {
          background: var(--accent-orange) !important;
          color: #0c0d10 !important;
          border-color: var(--accent-orange) !important;
        }
      `}</style>
    </section>
  );
}
