import React from 'react';
import { X, ArrowLeft, Sparkles, Cpu, Compass, Activity, ShieldAlert, Award } from 'lucide-react';

export default function CaseStudyModal({ project, onClose }) {
  if (!project) return null;

  const { title, subtitle, category, description, shortDescription, image, tags, caseStudy, framing, metrics } = project;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 2500,
      background: 'rgba(12, 13, 16, 0.92)',
      backdropFilter: 'blur(12px)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      padding: '2rem 1rem',
      overflowY: 'auto'
    }}>
      
      <div 
        className="hud-panel hud-panel-notch"
        style={{
          width: '100%',
          maxWidth: '960px',
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '4px',
          padding: '2.5rem',
          position: 'relative',
          margin: 'auto 0'
        }}
      >
        {/* Top Header Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '2rem',
          borderBottom: '1px solid var(--border-dim)',
          paddingBottom: '1rem'
        }}>
          <button
            onClick={onClose}
            className="mono-font"
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--accent-orange)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.85rem'
            }}
          >
            <ArrowLeft size={16} />
            <span>RETURN TO ARCHIVE</span>
          </button>

          <div className="mono-font" style={{ fontSize: '0.75rem', color: 'var(--accent-gold)' }}>
            CASE STUDY // {category}
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'var(--bg-tertiary)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-primary)',
              padding: '8px',
              borderRadius: '2px',
              cursor: 'pointer'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Project Header Banner */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h1 className="pixel-font" style={{
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            color: 'var(--text-primary)',
            marginBottom: '0.5rem'
          }}>
            {title}
          </h1>

          {subtitle && (
            <div className="mono-font" style={{
              fontSize: '1rem',
              color: 'var(--accent-orange)',
              fontWeight: 600,
              letterSpacing: '0.12em',
              marginBottom: '1rem'
            }}>
              {subtitle}
            </div>
          )}

          {framing && (
            <div className="mono-font" style={{
              fontSize: '0.75rem',
              color: 'var(--accent-gold)',
              background: 'var(--bg-tertiary)',
              padding: '6px 14px',
              border: '1px solid var(--border-dim)',
              marginBottom: '1.25rem',
              display: 'inline-block'
            }}>
              FRAMEWORK: {framing}
            </div>
          )}

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '1.5rem' }}>
            {tags.map((tag, idx) => (
              <span key={idx} className="hud-tag cyan">
                {tag}
              </span>
            ))}
          </div>

          {/* Large Showcase Image */}
          <div style={{
            width: '100%',
            maxHeight: '440px',
            borderRadius: '4px',
            overflow: 'hidden',
            border: '1px solid var(--border-subtle)',
            marginBottom: '2rem'
          }}>
            <img 
              src={image} 
              alt={title} 
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
            />
          </div>
        </div>

        {/* Case Study Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          
          {/* Summary */}
          <div>
            <h3 className="mono-font" style={{ fontSize: '1rem', color: 'var(--accent-gold)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sparkles size={16} /> PROJECT SUMMARY
            </h3>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: '1.65' }}>
              {shortDescription || description}
            </p>
          </div>

          {/* Player Experience Highlight */}
          {caseStudy?.playerExperience && (
            <div style={{
              background: 'var(--bg-tertiary)',
              borderLeft: '3px solid var(--accent-orange)',
              padding: '1.25rem 1.5rem'
            }}>
              <h4 className="mono-font" style={{ fontSize: '0.8rem', color: 'var(--accent-orange)', marginBottom: '6px' }}>
                INTENDED PLAYER EXPERIENCE
              </h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-primary)', lineHeight: '1.6', fontStyle: 'italic' }}>
                "{caseStudy.playerExperience}"
              </p>
            </div>
          )}

          {/* The Problem & Design Goal */}
          {caseStudy && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1.5rem'
            }} className="cs-grid">
              
              <div style={{ background: 'var(--bg-tertiary)', padding: '1.5rem', border: '1px solid var(--border-dim)' }}>
                <h4 className="mono-font" style={{ fontSize: '0.85rem', color: 'var(--accent-orange)', marginBottom: '0.75rem' }}>
                  THE DESIGN PROBLEM
                </h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  {caseStudy.problem}
                </p>
              </div>

              <div style={{ background: 'var(--bg-tertiary)', padding: '1.5rem', border: '1px solid var(--border-dim)' }}>
                <h4 className="mono-font" style={{ fontSize: '0.85rem', color: 'var(--accent-teal)', marginBottom: '0.75rem' }}>
                  DESIGN GOAL
                </h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  {caseStudy.goal}
                </p>
              </div>

            </div>
          )}

          {/* Core Loop Diagram Visualizer */}
          {caseStudy?.coreLoop && (
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-accent)',
              padding: '1.75rem',
              borderRadius: '2px'
            }}>
              <h4 className="mono-font" style={{ fontSize: '0.85rem', color: 'var(--accent-orange)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Activity size={16} /> CORE GAMEPLAY LOOP
              </h4>

              <div className="mono-font" style={{
                fontSize: '0.9rem',
                color: 'var(--text-primary)',
                lineHeight: '1.8',
                background: 'var(--bg-tertiary)',
                padding: '1rem',
                border: '1px solid var(--border-dim)'
              }}>
                {caseStudy.coreLoop}
              </div>
            </div>
          )}

          {/* Mechanics */}
          {caseStudy?.mechanics && (
            <div>
              <h3 className="mono-font" style={{ fontSize: '1rem', color: 'var(--accent-gold)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Cpu size={16} /> CORE MECHANICS & SYSTEMS
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {caseStudy.mechanics.map((mech, idx) => (
                  <div key={idx} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    fontSize: '0.95rem',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.5'
                  }}>
                    <span style={{ color: 'var(--accent-orange)', marginTop: '2px' }}>✦</span>
                    <span>{mech}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Playtest & Iteration Learnings */}
          {caseStudy?.playtestLearnings && (
            <div style={{ borderTop: '1px solid var(--border-dim)', paddingTop: '2rem' }}>
              <h3 className="mono-font" style={{ fontSize: '1rem', color: 'var(--accent-teal)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Compass size={16} /> PLAYTESTING & ITERATION NOTES
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {caseStudy.playtestLearnings.map((note, idx) => (
                  <div key={idx} style={{
                    background: 'var(--bg-tertiary)',
                    border: '1px solid var(--border-dim)',
                    padding: '1rem 1.25rem',
                    fontSize: '0.92rem',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6'
                  }}>
                    <span className="mono-font" style={{ color: 'var(--accent-gold)', fontWeight: 600, display: 'block', marginBottom: '4px' }}>
                      ITERATION INSIGHT #{idx + 1}
                    </span>
                    {note}
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Bottom Close Button */}
        <div style={{ marginTop: '3rem', borderTop: '1px solid var(--border-dim)', paddingTop: '1.5rem' }}>
          <button className="btn-secondary" onClick={onClose} style={{ width: '100%' }}>
            CLOSE CASE STUDY
          </button>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .cs-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
