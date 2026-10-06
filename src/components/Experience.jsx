import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const { company, role, period, description, highlights } = PORTFOLIO_DATA.experience;

  return (
    <section 
      style={{
        padding: '4.5rem 0',
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-dim)',
        position: 'relative'
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div className="section-eyebrow">
            PROFESSIONAL HISTORY
          </div>
          <h2 className="section-title">
            EXPERIENCE
          </h2>
        </div>

        {/* Experience Card */}
        <div 
          className="hud-panel hud-panel-notch"
          style={{
            padding: '2.25rem',
            borderRadius: '4px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)'
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            marginBottom: '1.25rem',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                <Briefcase size={20} color="var(--accent-orange)" />
                <h3 className="mono-font" style={{ fontSize: '1.35rem', color: 'var(--text-primary)', fontWeight: 700 }}>
                  {company}
                </h3>
              </div>
              <div className="mono-font" style={{ fontSize: '0.95rem', color: 'var(--accent-orange)', fontWeight: 600 }}>
                {role}
              </div>
            </div>

            <div className="mono-font" style={{
              fontSize: '0.8rem',
              color: 'var(--accent-gold)',
              background: 'var(--bg-tertiary)',
              padding: '6px 12px',
              border: '1px solid var(--border-dim)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <Calendar size={14} />
              <span>{period}</span>
            </div>
          </div>

          <p style={{
            fontSize: '1rem',
            color: 'var(--text-secondary)',
            lineHeight: '1.6',
            marginBottom: '1.75rem',
            maxWidth: '780px'
          }}>
            {description}
          </p>

          {/* Highlights Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '12px',
            borderTop: '1px solid var(--border-dim)',
            paddingTop: '1.5rem'
          }}>
            {highlights.map((item, idx) => (
              <div 
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.88rem',
                  color: 'var(--text-primary)',
                  background: 'var(--bg-tertiary)',
                  padding: '10px 14px',
                  borderRadius: '2px',
                  border: '1px solid rgba(255,255,255,0.03)'
                }}
              >
                <CheckCircle2 size={16} color="var(--accent-gold)" />
                <span>{item}</span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
