import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowRight, Play, Gamepad2, Sparkles } from 'lucide-react';

export default function FeaturedProject({ onOpenCaseStudy }) {
  const project = PORTFOLIO_DATA.heroProject; // GRAPPLEDEVIL

  return (
    <section 
      id="featured" 
      style={{
        padding: '4rem 0',
        position: 'relative'
      }}
    >
      <div className="container">
        
        {/* Section Navigation Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid var(--border-dim)',
          paddingBottom: '1rem',
          marginBottom: '2rem'
        }}>
          <div className="mono-font" style={{
            fontSize: '0.8rem',
            letterSpacing: '0.12em',
            color: 'var(--accent-gold)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <span style={{ color: 'var(--accent-orange)' }}>←</span> HERO CASE STUDY // FEATURED GAME 01
          </div>

          <button 
            onClick={() => onOpenCaseStudy(project)}
            className="mono-font"
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--accent-orange)',
              fontSize: '0.8rem',
              letterSpacing: '0.1em',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <span>VIEW CASE STUDY</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Featured Project Showcase Panel */}
        <div 
          className="hud-panel hud-panel-notch"
          style={{
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '4px',
            overflow: 'hidden'
          }}
        >
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.3fr',
            gap: '0'
          }} className="featured-grid">
            
            {/* Left Content Area */}
            <div style={{
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                {/* Title */}
                <h2 className="pixel-font" style={{
                  fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.02em',
                  marginBottom: '0.5rem'
                }}>
                  {project.title}
                </h2>

                {/* Subtitle */}
                <div className="mono-font" style={{
                  fontSize: '0.85rem',
                  color: 'var(--accent-orange)',
                  letterSpacing: '0.15em',
                  fontWeight: 600,
                  marginBottom: '1.25rem'
                }}>
                  {project.subtitle}
                </div>

                {/* Description */}
                <p style={{
                  fontSize: '1.05rem',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.65',
                  marginBottom: '1.25rem'
                }}>
                  {project.shortDescription}
                </p>

                <p style={{
                  fontSize: '0.92rem',
                  color: 'var(--text-muted)',
                  lineHeight: '1.6',
                  marginBottom: '1.75rem'
                }}>
                  {project.description}
                </p>

                {/* Framing Formula Badge */}
                <div className="mono-font" style={{
                  fontSize: '0.72rem',
                  color: 'var(--accent-gold)',
                  background: 'var(--bg-tertiary)',
                  padding: '6px 12px',
                  border: '1px solid var(--border-dim)',
                  marginBottom: '1.5rem',
                  display: 'inline-block'
                }}>
                  {project.framing}
                </div>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '2rem' }}>
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="hud-tag cyan">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button & Quick Metrics */}
              <div>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '12px',
                  marginBottom: '1.75rem',
                  padding: '12px',
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-dim)'
                }}>
                  {project.metrics.map((m, i) => (
                    <div key={i}>
                      <div className="mono-font" style={{ fontSize: '0.62rem', color: 'var(--text-muted)' }}>
                        {m.label}
                      </div>
                      <div className="mono-font" style={{ fontSize: '0.75rem', color: 'var(--accent-gold)', fontWeight: 600 }}>
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>

                <button 
                  className="btn-gold" 
                  onClick={() => onOpenCaseStudy(project)}
                  style={{ width: '100%' }}
                >
                  <span>VIEW CASE STUDY</span>
                  <ArrowRight size={16} />
                </button>
              </div>

            </div>

            {/* Right Image Showcase */}
            <div 
              style={{ position: 'relative', overflow: 'hidden', background: '#000', cursor: 'pointer' }}
              onClick={() => onOpenCaseStudy(project)}
            >
              <img 
                src={project.image} 
                alt="GrappleDevil Gameplay Showcase" 
                style={{
                  width: '100%',
                  height: '100%',
                  minHeight: '400px',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.5s ease',
                  filter: 'contrast(1.05)'
                }}
                className="featured-img"
              />

              {/* HUD Badge Overlay Bottom Left */}
              <div style={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                background: 'rgba(12, 13, 16, 0.85)',
                backdropFilter: 'blur(8px)',
                padding: '6px 12px',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-orange)' }} />
                <span className="mono-font" style={{ fontSize: '0.7rem', color: 'var(--text-primary)', letterSpacing: '0.08em' }}>
                  PHYSICS MOMENTUM PLATFORMER // OPENING CASE STUDY
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .featured-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
