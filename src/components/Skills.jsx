import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Shield, Wrench, Layers, Check, Sparkles } from 'lucide-react';

export default function Skills() {
  const { gameDesign, production, tools } = PORTFOLIO_DATA.skills;
  const [selectedSkill, setSelectedSkill] = useState({
    name: 'Game Mechanics',
    category: 'GAME DESIGN',
    desc: 'Designing intuitive input-response feedback loops and player interaction models.'
  });

  const categories = [
    { title: 'GAME DESIGN', icon: <Shield size={18} color="var(--accent-orange)" />, list: gameDesign },
    { title: 'PRODUCTION', icon: <Layers size={18} color="var(--accent-gold)" />, list: production },
    { title: 'TOOLS', icon: <Wrench size={18} color="var(--accent-teal)" />, list: tools }
  ];

  return (
    <section 
      style={{
        padding: '5rem 0',
        backgroundColor: 'var(--bg-primary)',
        position: 'relative'
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: '3.5rem', textAlign: 'center' }}>
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>
            DESIGN CAPABILITIES & PRODUCTION
          </div>
          <h2 className="section-title">
            SKILLS & TOOLCHAIN
          </h2>
          <p className="section-subtitle" style={{ margin: '0.5rem auto' }}>
            Reorganized inventory of design proficiencies, production workflows, and tools.
          </p>
        </div>

        {/* Skill Inventory Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {categories.map((cat, idx) => (
            <div 
              key={idx}
              className="hud-panel hud-panel-notch"
              style={{
                padding: '2rem',
                borderRadius: '4px',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-subtle)'
              }}
            >
              {/* Category Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '1.5rem',
                borderBottom: '1px solid var(--border-dim)',
                paddingBottom: '0.75rem'
              }}>
                {cat.icon}
                <span className="mono-font" style={{
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  letterSpacing: '0.08em'
                }}>
                  {cat.title}
                </span>
              </div>

              {/* Skill Tags Grid */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px'
              }}>
                {cat.list.map((skill, sIdx) => {
                  const isSelected = selectedSkill.name === skill;
                  return (
                    <div
                      key={sIdx}
                      onClick={() => setSelectedSkill({
                        name: skill,
                        category: cat.title,
                        desc: `Applied ${skill} across core game mechanics, mobile game economies, and live feature architecture.`
                      })}
                      style={{
                        padding: '8px 14px',
                        background: isSelected ? 'var(--accent-orange)' : 'var(--bg-tertiary)',
                        color: isSelected ? '#0c0d10' : 'var(--text-secondary)',
                        border: isSelected ? '1px solid var(--accent-orange)' : '1px solid var(--border-subtle)',
                        borderRadius: '2px',
                        fontSize: '0.85rem',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: isSelected ? 700 : 500,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                      className="skill-pill"
                    >
                      <Check size={12} style={{ opacity: isSelected ? 1 : 0.4 }} />
                      <span>{skill}</span>
                    </div>
                  );
                })}
              </div>

            </div>
          ))}
        </div>

        {/* Selected Skill Telemetry Box */}
        <div style={{
          marginTop: '2.5rem',
          padding: '1.25rem 1.75rem',
          background: 'var(--bg-card)',
          border: '1px solid var(--accent-gold)',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          flexWrap: 'wrap'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Sparkles size={20} color="var(--accent-gold)" />
            <div>
              <div className="mono-font" style={{ fontSize: '0.72rem', color: 'var(--accent-gold)' }}>
                ACTIVE DESIGN PERK: {selectedSkill.category} // {selectedSkill.name}
              </div>
              <div style={{ fontSize: '0.92rem', color: 'var(--text-primary)' }}>
                {selectedSkill.desc}
              </div>
            </div>
          </div>

          <div className="mono-font" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            STATUS: UNLOCKED
          </div>
        </div>

      </div>

      <style>{`
        .skill-pill:hover {
          border-color: var(--accent-orange) !important;
          color: var(--accent-orange) !important;
        }
      `}</style>
    </section>
  );
}
