import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { BookOpen, ArrowUpRight, FileText, ChevronRight, X, Sparkles } from 'lucide-react';

export default function DesignLab() {
  const labEntries = PORTFOLIO_DATA.designLab;
  const [activeArticle, setActiveArticle] = useState(null);

  return (
    <section 
      id="lab" 
      style={{
        padding: '5rem 0',
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-dim)',
        borderBottom: '1px solid var(--border-dim)',
        position: 'relative'
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          marginBottom: '3rem',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div>
            <div className="section-eyebrow">
              DECONSTRUCTION & RESEARCH
            </div>
            <h2 className="section-title">
              DESIGN LAB
            </h2>
            <p className="section-subtitle">
              I study games by taking them apart.
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
            <BookOpen size={14} />
            <span>ARCHIVE DECONSTRUCTION</span>
          </div>
        </div>

        {/* Vertical Archive List Interface */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          {labEntries.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveArticle(item)}
              className="hud-panel lab-row"
              style={{
                padding: '1.5rem 2rem',
                borderRadius: '4px',
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                gap: '1.5rem',
                flexWrap: 'wrap'
              }}
            >
              {/* Left Number & Title */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flex: 1, minWidth: '280px' }}>
                <span className="mono-font" style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'var(--accent-orange)',
                  opacity: 0.8
                }}>
                  {item.number}
                </span>

                <div>
                  <h3 className="mono-font" style={{
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '0.25rem'
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontSize: '0.88rem',
                    color: 'var(--text-secondary)'
                  }}>
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Right Metadata & Arrow */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <span className="hud-tag gold">
                  {item.category}
                </span>

                <span className="mono-font" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  {item.readTime}
                </span>

                <div className="lab-arrow" style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '2px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-muted)',
                  transition: 'all 0.2s ease'
                }}>
                  <ArrowUpRight size={16} />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Article Detail Drawer / Modal */}
      {activeArticle && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 2000,
          background: 'rgba(12, 13, 16, 0.85)',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          justifyContent: 'flex-end',
          animation: 'fadeIn 0.2s ease'
        }}>
          <div style={{
            width: '100%',
            maxWidth: '640px',
            height: '100%',
            background: 'var(--bg-card)',
            borderLeft: '1px solid var(--border-subtle)',
            padding: '2.5rem',
            overflowY: 'auto',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              {/* Close Button */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '2rem',
                borderBottom: '1px solid var(--border-dim)',
                paddingBottom: '1rem'
              }}>
                <div className="mono-font" style={{ fontSize: '0.75rem', color: 'var(--accent-gold)' }}>
                  LAB ANALYSIS // {activeArticle.number}
                </div>

                <button
                  onClick={() => setActiveArticle(null)}
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

              {/* Tag & Category */}
              <div style={{ marginBottom: '1rem' }}>
                <span className="hud-tag active" style={{ marginRight: '8px' }}>
                  {activeArticle.category}
                </span>
                <span className="mono-font" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  {activeArticle.readTime}
                </span>
              </div>

              {/* Article Header */}
              <h2 className="mono-font" style={{
                fontSize: '1.6rem',
                color: 'var(--text-primary)',
                marginBottom: '1rem',
                lineHeight: '1.3'
              }}>
                {activeArticle.title}
              </h2>

              <p style={{
                fontSize: '1.05rem',
                color: 'var(--accent-orange)',
                lineHeight: '1.6',
                marginBottom: '2rem',
                fontStyle: 'italic',
                borderLeft: '2px solid var(--accent-orange)',
                paddingLeft: '1rem'
              }}>
                "{activeArticle.content.summary}"
              </p>

              {/* Article Key Takeaways */}
              <h3 className="mono-font" style={{
                fontSize: '0.9rem',
                color: 'var(--text-primary)',
                letterSpacing: '0.1em',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <Sparkles size={14} color="var(--accent-gold)" /> DECONSTRUCTION BREAKDOWN
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
                {activeArticle.content.keyTakeaways.map((point, idx) => (
                  <div 
                    key={idx} 
                    style={{
                      background: 'var(--bg-tertiary)',
                      border: '1px solid var(--border-dim)',
                      padding: '1rem 1.25rem',
                      borderRadius: '2px'
                    }}
                  >
                    <div className="mono-font" style={{
                      fontSize: '0.7rem',
                      color: 'var(--accent-gold)',
                      marginBottom: '4px'
                    }}>
                      PRINCIPLE #{idx + 1}
                    </div>
                    <div style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                      {point}
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Bottom Close CTA */}
            <button 
              className="btn-secondary" 
              onClick={() => setActiveArticle(null)}
              style={{ width: '100%' }}
            >
              CLOSE DECONSTRUCTION
            </button>
          </div>
        </div>
      )}

      <style>{`
        .lab-row:hover {
          border-color: var(--accent-orange) !important;
          background: var(--bg-card) !important;
          transform: translateX(4px);
        }
        .lab-row:hover .lab-arrow {
          background: var(--accent-orange) !important;
          color: #0c0d10 !important;
          border-color: var(--accent-orange) !important;
        }
      `}</style>
    </section>
  );
}
