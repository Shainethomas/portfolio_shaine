import React, { useState } from 'react';
import { X, Send, CheckCircle2, Gamepad2 } from 'lucide-react';

export default function ContactModal({ onClose }) {
  const [formData, setFormData] = useState({ name: '', email: '', projectType: 'Game Systems', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
    }, 1200);
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 3000,
      background: 'rgba(12, 13, 16, 0.88)',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem'
    }}>
      <div 
        className="hud-panel hud-panel-notch"
        style={{
          width: '100%',
          maxWidth: '560px',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '4px',
          padding: '2.5rem',
          position: 'relative'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'var(--bg-tertiary)',
            border: '1px solid var(--border-subtle)',
            color: 'var(--text-primary)',
            padding: '8px',
            cursor: 'pointer',
            borderRadius: '2px'
          }}
        >
          <X size={18} />
        </button>

        {status === 'sent' ? (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'rgba(242, 101, 57, 0.15)',
              border: '2px solid var(--accent-orange)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem auto'
            }}>
              <CheckCircle2 size={32} color="var(--accent-orange)" />
            </div>

            <h3 className="mono-font" style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              TRANSMISSION RECEIVED
            </h3>

            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
              Thank you for reaching out! Shaine will get back to you shortly.
            </p>

            <button className="btn-secondary" onClick={onClose} style={{ width: '100%' }}>
              CLOSE TRANSMISSION
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.5rem' }}>
              <Gamepad2 size={20} color="var(--accent-orange)" />
              <h3 className="mono-font" style={{ fontSize: '1.25rem', color: 'var(--text-primary)', fontWeight: 700 }}>
                INITIATE CONTACT
              </h3>
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <label className="mono-font" style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
                YOUR NAME / STUDIO
              </label>
              <input 
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Alex Vance or Retro Byte Games"
                style={{
                  width: '100%',
                  padding: '12px',
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-primary)',
                  fontSize: '0.9rem',
                  fontFamily: 'var(--font-mono)',
                  borderRadius: '2px',
                  outline: 'none'
                }}
              />
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <label className="mono-font" style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
                EMAIL ADDRESS
              </label>
              <input 
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="alex@studio.com"
                style={{
                  width: '100%',
                  padding: '12px',
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-primary)',
                  fontSize: '0.9rem',
                  fontFamily: 'var(--font-mono)',
                  borderRadius: '2px',
                  outline: 'none'
                }}
              />
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <label className="mono-font" style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
                TOPIC OF INTEREST
              </label>
              <select
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                style={{
                  width: '100%',
                  padding: '12px',
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-primary)',
                  fontSize: '0.9rem',
                  fontFamily: 'var(--font-mono)',
                  borderRadius: '2px',
                  outline: 'none'
                }}
              >
                <option value="Game Systems">Game Systems & Economy Design</option>
                <option value="Level Design">Level Design & Pacing</option>
                <option value="Mechanics Prototyping">Mechanics Prototyping</option>
                <option value="Full-time Role">Studio Full-Time Role Opportunity</option>
              </select>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label className="mono-font" style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
                MESSAGE / PROJECT DETAILS
              </label>
              <textarea 
                rows="4"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your game, mechanic or system..."
                style={{
                  width: '100%',
                  padding: '12px',
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-primary)',
                  fontSize: '0.9rem',
                  fontFamily: 'var(--font-body)',
                  borderRadius: '2px',
                  outline: 'none',
                  resize: 'vertical'
                }}
              />
            </div>

            <button 
              type="submit" 
              className="btn-primary" 
              disabled={status === 'sending'}
              style={{ width: '100%' }}
            >
              {status === 'sending' ? (
                <span>TRANSMITTING...</span>
              ) : (
                <>
                  <Send size={16} />
                  <span>SEND TRANSMISSION</span>
                </>
              )}
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
