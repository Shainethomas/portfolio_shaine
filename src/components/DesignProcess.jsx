import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ChevronRight, ArrowDown, CheckCircle2, Sparkles } from 'lucide-react';

export default function DesignProcess() {
  const steps = PORTFOLIO_DATA.pipeline;
  const [activeStep, setActiveStep] = useState(2); // default to CORE MECHANIC

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
            WORKFLOW ARCHITECTURE
          </div>
          <h2 className="section-title">
            FROM IDEA → SYSTEM → PLAYER
          </h2>
          <p className="section-subtitle" style={{ margin: '0.5rem auto' }}>
            How an initial spark evolves into an addicting game experience.
          </p>
        </div>

        {/* Horizontal Pipeline Steps Container */}
        <div 
          className="hud-panel hud-panel-notch"
          style={{
            padding: '2rem 1.5rem',
            borderRadius: '4px',
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-subtle)',
            overflowX: 'auto'
          }}
        >
          {/* Node Flow Track */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            minWidth: '900px',
            position: 'relative',
            padding: '1rem 0'
          }}>
            {/* Connecting Background Line */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '40px',
              right: '40px',
              height: '2px',
              background: 'var(--border-subtle)',
              zIndex: 1,
              transform: 'translateY(-50%)'
            }} />

            {/* Connecting Active Progress Line */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '40px',
              width: `${(activeStep / (steps.length - 1)) * 90}%`,
              height: '2px',
              background: 'linear-gradient(90deg, var(--accent-orange), var(--accent-gold))',
              zIndex: 1,
              transform: 'translateY(-50%)',
              transition: 'width 0.4s ease'
            }} />

            {/* Individual Pipeline Nodes */}
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              const isPast = idx < activeStep;

              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  style={{
                    position: 'relative',
                    zIndex: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    cursor: 'pointer',
                    userSelect: 'none'
                  }}
                >
                  {/* Node Circle */}
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: isActive ? 'var(--accent-orange)' : isPast ? 'var(--bg-card)' : 'var(--bg-tertiary)',
                    border: isActive ? '3px solid #0c0d10' : isPast ? '2px solid var(--accent-gold)' : '2px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: isActive ? '#0c0d10' : isPast ? 'var(--accent-gold)' : 'var(--text-muted)',
                    fontWeight: 700,
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-mono)',
                    boxShadow: isActive ? '0 0 20px var(--accent-orange)' : 'none',
                    transition: 'all 0.3s ease'
                  }}>
                    {idx + 1}
                  </div>

                  {/* Label under node */}
                  <div className="mono-font" style={{
                    marginTop: '10px',
                    fontSize: '0.68rem',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? 'var(--accent-orange)' : isPast ? 'var(--text-primary)' : 'var(--text-muted)',
                    textAlign: 'center',
                    maxWidth: '85px',
                    letterSpacing: '0.05em'
                  }}>
                    {step.label}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Step Description Panel */}
          <div style={{
            marginTop: '2rem',
            padding: '1.5rem',
            background: 'var(--bg-tertiary)',
            border: '1px solid var(--border-dim)',
            borderRadius: '2px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            flexWrap: 'wrap'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{
                padding: '8px 14px',
                background: 'rgba(242, 101, 57, 0.1)',
                border: '1px solid var(--accent-orange)',
                color: 'var(--accent-orange)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                fontWeight: 700
              }}>
                STAGE {activeStep + 1}: {steps[activeStep].label}
              </div>

              <div style={{ fontSize: '1rem', color: 'var(--text-primary)', lineHeight: '1.5' }}>
                {steps[activeStep].desc}
              </div>
            </div>

            <div className="mono-font" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              CLICK NODES TO INSPECT WORKFLOW
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
