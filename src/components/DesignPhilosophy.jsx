import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Compass, Cpu, Repeat, ShieldAlert, Sparkles, Layers } from 'lucide-react';

export default function DesignPhilosophy() {
  const principles = PORTFOLIO_DATA.designPhilosophy;
  const [selectedIdx, setSelectedIdx] = useState(0);

  const icons = [
    <Compass size={22} color="var(--accent-orange)" />,
    <Cpu size={22} color="var(--accent-gold)" />,
    <ShieldAlert size={22} color="var(--accent-teal)" />,
    <Repeat size={22} color="var(--accent-cyan)" />,
    <Layers size={22} color="var(--accent-gold)" />
  ];

  return (
    <section 
      id="philosophy" 
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
        <div style={{ marginBottom: '3.5rem', textAlign: 'center' }}>
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>
            DESIGN THINKING & METHODOLOGY
          </div>
          <h2 className="section-title">
            DESIGN PHILOSOPHY
          </h2>
          <p className="section-subtitle" style={{ margin: '0.5rem auto' }}>
            Core principles that guide every mechanic, loop, system, and level decision.
          </p>
        </div>

        {/* Grid of 5 Principle Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.25rem'
        }}>
          {principles.map((item, idx) => {
            const isSelected = selectedIdx === idx;
            return (
              <div
                key={idx}
                onClick={() => setSelectedIdx(idx)}
                className="hud-panel principle-card"
                style={{
                  padding: '1.75rem',
                  borderRadius: '4px',
                  background: isSelected ? 'var(--bg-card-hover)' : 'var(--bg-card)',
                  border: isSelected ? '1px solid var(--accent-orange)' : '1px solid var(--border-subtle)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: isSelected ? '0 10px 30px rgba(242, 101, 57, 0.12)' : 'none'
                }}
              >
                <div>
                  {/* Top Icon & Number */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.25rem'
                  }}>
                    <div style={{
                      width: '38px',
                      height: '38px',
                      background: 'var(--bg-tertiary)',
                      border: '1px solid var(--border-dim)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {icons[idx]}
                    </div>

                    <span className="mono-font" style={{
                      fontSize: '0.9rem',
                      fontWeight: 700,
                      color: isSelected ? 'var(--accent-orange)' : 'var(--text-muted)'
                    }}>
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mono-font" style={{
                    fontSize: '1rem',
                    color: 'var(--text-primary)',
                    marginBottom: '0.6rem',
                    letterSpacing: '0.04em'
                  }}>
                    {item.title}
                  </h3>

                  {/* Quote */}
                  <p style={{
                    fontSize: '0.88rem',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.55',
                    fontStyle: 'italic',
                    marginBottom: '1rem'
                  }}>
                    "{item.quote}"
                  </p>
                </div>

                {/* Extended Detail */}
                <div style={{
                  borderTop: '1px solid var(--border-dim)',
                  paddingTop: '0.85rem',
                  fontSize: '0.82rem',
                  color: isSelected ? 'var(--text-primary)' : 'var(--text-muted)',
                  lineHeight: '1.5'
                }}>
                  {item.detail}
                </div>

              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        .principle-card:hover {
          border-color: var(--accent-orange) !important;
          transform: translateY(-4px);
        }
      `}</style>
    </section>
  );
}
