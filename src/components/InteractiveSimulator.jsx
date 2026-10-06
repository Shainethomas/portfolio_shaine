import React, { useState, useEffect, useRef } from 'react';
import { Sliders, Play, RefreshCw, Zap, Award, Activity } from 'lucide-react';

export default function InteractiveSimulator() {
  // System Loop Simulator Controls
  const [risk, setRisk] = useState(65);
  const [dropRate, setDropRate] = useState(40);
  const [enemyAggro, setEnemyAggro] = useState(55);
  const [respawnSpeed, setRespawnSpeed] = useState(85);

  // Playable Echo Canvas state
  const canvasRef = useRef(null);
  const [gameScore, setGameScore] = useState(0);
  const [echoCount, setEchoCount] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Calculate live telemetry metrics based on sliders
  const retentionIndex = Math.min(99, Math.max(12, Math.round((dropRate * 0.4) + (respawnSpeed * 0.4) + (100 - Math.abs(risk - 60)) * 0.2)));
  const frustrationVector = Math.min(100, Math.max(5, Math.round((risk * 0.6) + (enemyAggro * 0.5) - (respawnSpeed * 0.3))));
  const flowState = Math.min(100, Math.max(10, Math.round(100 - Math.abs(retentionIndex - frustrationVector))));

  // Canvas Game Mini Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animId;
    let frame = 0;
    let playerX = 50;
    let ghosts = [];

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw Grid lines
      ctx.strokeStyle = '#1d222e';
      ctx.lineWidth = 1;
      for (let x = 0; x < canvas.width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Record Ghost every 40 frames
      if (frame % 40 === 0 && isPlaying) {
        ghosts.push({ x: playerX, opacity: 0.8, action: frame % 80 === 0 ? 'SLASH' : 'JUMP' });
        if (ghosts.length > 4) ghosts.shift();
        setEchoCount(ghosts.length);
      }

      // Update player position
      if (isPlaying) {
        playerX = (playerX + 2) % (canvas.width - 40);
      }

      // Draw Ghosts (Echoes)
      ghosts.forEach((g, idx) => {
        ctx.fillStyle = `rgba(56, 189, 248, ${g.opacity})`;
        ctx.fillRect(g.x, canvas.height - 70, 24, 40);

        ctx.fillStyle = '#38bdf8';
        ctx.font = '10px monospace';
        ctx.fillText(`ECHO #${idx + 1}`, g.x - 10, canvas.height - 80);

        g.opacity = Math.max(0.15, g.opacity - 0.001);
      });

      // Draw Active Player Hero
      ctx.fillStyle = '#f26539';
      ctx.fillRect(playerX, canvas.height - 70, 28, 44);
      
      // Draw Hero Scarf
      ctx.fillStyle = '#ff6b35';
      ctx.beginPath();
      ctx.arc(playerX - 6, canvas.height - 60, 6, 0, Math.PI * 2);
      ctx.fill();

      // Floor
      ctx.fillStyle = '#262a36';
      ctx.fillRect(0, canvas.height - 26, canvas.width, 26);

      // Floor highlight line
      ctx.strokeStyle = '#f26539';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, canvas.height - 26);
      ctx.lineTo(canvas.width, canvas.height - 26);
      ctx.stroke();

      animId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, [isPlaying]);

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
        <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>
            SYSTEM & MECHANICS SIMULATOR
          </div>
          <h2 className="section-title">
            LIVE SYSTEM LOOP LAB
          </h2>
          <p className="section-subtitle" style={{ margin: '0.5rem auto' }}>
            Adjust economy variables and test player retention vectors in real time.
          </p>
        </div>

        {/* Grid: Left Simulator Controls, Right Telemetry & Canvas */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem'
        }} className="sim-grid">

          {/* Left Panel: Variable Controls */}
          <div 
            className="hud-panel hud-panel-notch"
            style={{
              padding: '2rem',
              borderRadius: '4px',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-subtle)'
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '1.75rem',
              borderBottom: '1px solid var(--border-dim)',
              paddingBottom: '0.75rem'
            }}>
              <div className="mono-font" style={{ fontSize: '0.85rem', color: 'var(--accent-gold)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Sliders size={16} /> SYSTEM ECONOMY SLIDERS
              </div>
              <button 
                onClick={() => { setRisk(65); setDropRate(40); setEnemyAggro(55); setRespawnSpeed(85); }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  fontSize: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
                className="mono-font"
              >
                <RefreshCw size={12} /> RESET
              </button>
            </div>

            {/* Slider 1: Risk vs Reward */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span className="mono-font" style={{ fontSize: '0.8rem', color: 'var(--text-primary)' }}>Risk vs Reward Curve</span>
                <span className="mono-font" style={{ fontSize: '0.8rem', color: 'var(--accent-orange)' }}>{risk}%</span>
              </div>
              <input 
                type="range" 
                min="10" 
                max="100" 
                value={risk} 
                onChange={(e) => setRisk(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--accent-orange)', cursor: 'pointer' }}
              />
            </div>

            {/* Slider 2: Crafting Drop Rate */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span className="mono-font" style={{ fontSize: '0.8rem', color: 'var(--text-primary)' }}>Crafting Material Drop Rate</span>
                <span className="mono-font" style={{ fontSize: '0.8rem', color: 'var(--accent-gold)' }}>{dropRate}%</span>
              </div>
              <input 
                type="range" 
                min="5" 
                max="95" 
                value={dropRate} 
                onChange={(e) => setDropRate(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--accent-gold)', cursor: 'pointer' }}
              />
            </div>

            {/* Slider 3: Enemy Aggro Frequency */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span className="mono-font" style={{ fontSize: '0.8rem', color: 'var(--text-primary)' }}>Enemy Encounter Density</span>
                <span className="mono-font" style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)' }}>{enemyAggro}%</span>
              </div>
              <input 
                type="range" 
                min="10" 
                max="95" 
                value={enemyAggro} 
                onChange={(e) => setEnemyAggro(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--accent-cyan)', cursor: 'pointer' }}
              />
            </div>

            {/* Slider 4: Respawn Iteration Speed */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span className="mono-font" style={{ fontSize: '0.8rem', color: 'var(--text-primary)' }}>Instant Respawn Loop Speed</span>
                <span className="mono-font" style={{ fontSize: '0.8rem', color: 'var(--accent-teal)' }}>{respawnSpeed}%</span>
              </div>
              <input 
                type="range" 
                min="10" 
                max="100" 
                value={respawnSpeed} 
                onChange={(e) => setRespawnSpeed(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--accent-teal)', cursor: 'pointer' }}
              />
            </div>

            {/* Telemetry Output Boxes */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gap: '10px',
              marginTop: '2rem',
              paddingTop: '1rem',
              borderTop: '1px solid var(--border-dim)'
            }}>
              <div style={{ background: 'var(--bg-tertiary)', padding: '10px', borderRadius: '2px', textAlign: 'center' }}>
                <div className="mono-font" style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>RETENTION</div>
                <div className="mono-font" style={{ fontSize: '1.1rem', color: 'var(--accent-gold)', fontWeight: 700 }}>
                  {retentionIndex}%
                </div>
              </div>

              <div style={{ background: 'var(--bg-tertiary)', padding: '10px', borderRadius: '2px', textAlign: 'center' }}>
                <div className="mono-font" style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>FRUSTRATION</div>
                <div className="mono-font" style={{ fontSize: '1.1rem', color: 'var(--accent-orange)', fontWeight: 700 }}>
                  {frustrationVector}%
                </div>
              </div>

              <div style={{ background: 'var(--bg-tertiary)', padding: '10px', borderRadius: '2px', textAlign: 'center' }}>
                <div className="mono-font" style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>FLOW STATE</div>
                <div className="mono-font" style={{ fontSize: '1.1rem', color: 'var(--accent-teal)', fontWeight: 700 }}>
                  {flowState}%
                </div>
              </div>
            </div>

          </div>

          {/* Right Panel: Playable Temporal Canvas Sandbox */}
          <div 
            className="hud-panel hud-panel-notch"
            style={{
              padding: '1.75rem',
              borderRadius: '4px',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-subtle)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1rem'
              }}>
                <div className="mono-font" style={{ fontSize: '0.85rem', color: 'var(--accent-teal)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Activity size={16} /> TIME SLIP // PROTOTYPE CANVAS
                </div>

                <div className="hud-tag cyan">
                  ECHO CLONES: {echoCount}
                </div>
              </div>

              {/* Interactive Canvas View */}
              <div style={{
                position: 'relative',
                width: '100%',
                height: '210px',
                borderRadius: '4px',
                overflow: 'hidden',
                border: '1px solid var(--border-subtle)',
                background: '#090a0d'
              }}>
                <canvas 
                  ref={canvasRef} 
                  width={500} 
                  height={210}
                  style={{ width: '100%', height: '100%', display: 'block' }}
                />

                {!isPlaying && (
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(12, 13, 16, 0.75)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px'
                  }}>
                    <button 
                      className="btn-primary" 
                      onClick={() => setIsPlaying(true)}
                    >
                      <Play size={16} fill="currentColor" />
                      <span>START PROTOTYPE LOOP</span>
                    </button>
                    <span className="mono-font" style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                      CLICK TO SIMULATE RECORDING & ECHO SPLITS
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Controls */}
            <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div className="mono-font" style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                {isPlaying ? "⚡ RECORDING TEMPORAL BUFFER..." : "PAUSED"}
              </div>

              {isPlaying && (
                <button 
                  className="btn-secondary" 
                  onClick={() => setIsPlaying(false)}
                  style={{ padding: '6px 14px', fontSize: '0.75rem' }}
                >
                  PAUSE SIMULATION
                </button>
              )}
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .sim-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
