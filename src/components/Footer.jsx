import React from 'react';
import { Gamepad2, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      backgroundColor: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-subtle)',
      padding: '2.5rem 0 1.5rem 0',
      fontSize: '0.85rem'
    }}>
      <div className="container">
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.5rem',
          marginBottom: '2rem'
        }}>
          {/* Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Gamepad2 size={18} color="var(--accent-orange)" />
            <span className="pixel-font" style={{ fontSize: '0.85rem', color: 'var(--text-primary)' }}>
              SHAINE.T
            </span>
            <span className="mono-font" style={{ fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.08em' }}>
              // GAME DESIGN ARCHIVE
            </span>
          </div>

          {/* System Ticker */}
          <div className="mono-font" style={{
            fontSize: '0.7rem',
            color: 'var(--accent-teal)',
            background: 'var(--bg-tertiary)',
            padding: '6px 14px',
            border: '1px solid var(--border-dim)',
            borderRadius: '2px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-teal)' }} />
            <span>SYSTEM STATUS: NOMINAL // GODOT / HTML5 CANVAS / SYSTEM ARCHITECTURE</span>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="mono-font"
            style={{
              background: 'var(--bg-tertiary)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-secondary)',
              padding: '8px 14px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.75rem',
              borderRadius: '2px'
            }}
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={14} />
          </button>
        </div>

        {/* Bottom copyright */}
        <div style={{
          borderTop: '1px solid var(--border-dim)',
          paddingTop: '1.25rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          color: 'var(--text-muted)',
          fontSize: '0.75rem'
        }}>
          <div>
            © {new Date().getFullYear()} SHAINE THOMAS. ALL RIGHTS RESERVED.
          </div>
          <div className="mono-font" style={{ fontSize: '0.7rem' }}>
            DESIGNED FOR PLAYER EXPERIENCES & GAME SYSTEMS.
          </div>
        </div>

      </div>
    </footer>
  );
}
