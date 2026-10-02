import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { courses } from '../data/courses';

/* ══════════════════════════════════════════════════════
   DIAGRAM GEOMETRY
   6 nodes at equal 60° intervals around a center hub
   Orbit radius = 195px  |  Container 580 × 530
══════════════════════════════════════════════════════ */
const R   = 195;
const CW  = 580;
const CH  = 530;
const CX  = CW / 2;   // 290
const CY  = CH / 2;   // 265

function toXY(deg, radius = R) {
  const rad = (deg - 90) * (Math.PI / 180); // 0° = top
  return {
    x: CX + Math.cos(rad) * radius,
    y: CY + Math.sin(rad) * radius,
  };
}

/* ── Node definitions — 6 courses, 60° apart ─────────── */
const NODE_CFG = [
  {
    theme: 'drone',
    label: 'Drone Technology',
    emoji: '🚁', deg: 0,   // top (12 o'clock)
    grad: ['#1d4ed8', '#0ea5e9'],
    border: '#38bdf8',
  },
  {
    theme: 'ai',
    label: 'AI Creator Lab',
    emoji: '🎨', deg: 60,  // 2 o'clock
    grad: ['#7c3aed', '#db2777'],
    border: '#c084fc',
  },
  {
    theme: 'iot',
    label: 'IoT Smart Home',
    emoji: '🏠', deg: 120, // 4 o'clock
    grad: ['#065f46', '#10b981'],
    border: '#34d399',
  },
  {
    theme: 'vision',
    label: 'Computer Vision',
    emoji: '👁️', deg: 180, // bottom (6 o'clock)
    grad: ['#1e3a8a', '#6366f1'],
    border: '#818cf8',
  },
  {
    theme: 'space',
    label: 'Space & Satellite',
    emoji: '🛰️', deg: 240, // 8 o'clock
    grad: ['#3b0764', '#7c3aed'],
    border: '#a78bfa',
  },
  {
    theme: 'robot',
    label: 'AI + Robotics',
    emoji: '🤖', deg: 300, // 10 o'clock
    grad: ['#1e3a8a', '#2563eb'],
    border: '#60a5fa',
  },
];

/* ══════════════════════════════════════════════════════
   COMPONENT
══════════════════════════════════════════════════════ */
export default function TechConstellation() {
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate();

  return (
    <div style={{ overflowX: 'auto', paddingBottom: 8 }}>
      <style>{`
        @media (max-width: 640px)  { .tc-wrap { transform: scale(0.6);  transform-origin: top center; } }
        @media (max-width: 420px)  { .tc-wrap { transform: scale(0.46); transform-origin: top center; } }
      `}</style>

      {/* ── Outer card ── */}
      <div
        className="tc-wrap"
        style={{
          position: 'relative',
          width: CW, height: CH,
          margin: '0 auto',
          flexShrink: 0,
        }}
      >
        {/* ── Dot-grid decorations (corners, like reference) ── */}
        {[
          { top: 12,   left: 12  },
          { top: 12,   right: 12 },
          { bottom: 12, left: 12 },
          { bottom: 12, right: 12 },
        ].map((pos, i) => (
          <div key={i} style={{
            position: 'absolute', ...pos,
            width: 64, height: 64, opacity: 0.22, pointerEvents: 'none',
            backgroundImage: 'radial-gradient(circle, #2563eb 1.5px, transparent 1.5px)',
            backgroundSize: '12px 12px',
            zIndex: 0,
          }} />
        ))}

        {/* ── SVG layer: lines + orbit ring ── */}
        <svg
          width={CW} height={CH}
          viewBox={`0 0 ${CW} ${CH}`}
          style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }}
        >
          {/* Orbit ring */}
          <circle
            cx={CX} cy={CY} r={R}
            fill="none"
            stroke="rgba(37,99,235,0.1)"
            strokeWidth="1"
            strokeDasharray="4 6"
          />

          {/* Connection lines — hub to each node */}
          {NODE_CFG.map((n) => {
            const pos = toXY(n.deg);
            const isHov = hovered === n.theme;
            return (
              <motion.line
                key={n.theme}
                x1={CX} y1={CY}
                x2={pos.x} y2={pos.y}
                stroke={isHov ? n.border : 'rgba(100,116,139,0.4)'}
                strokeWidth={isHov ? 2 : 1.5}
                strokeDasharray="7 5"
                animate={{ opacity: isHov ? 0.95 : 0.6 }}
                transition={{ duration: 0.2 }}
              />
            );
          })}
        </svg>

        {/* ── Center hub ── */}
        <motion.div
          style={{
            position: 'absolute',
            left: CX, top: CY,
            transform: 'translate(-50%, -50%)',
            width: 130, height: 130,
            borderRadius: '50%',
            background:
              'radial-gradient(circle at 32% 32%, #7c3aed 0%, #3b82f6 45%, #1e3a8a 100%)',
            border: '3px solid rgba(196,181,253,0.45)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 6,
            zIndex: 5,
            boxShadow:
              '0 0 0 10px rgba(124,58,237,0.08), 0 0 0 22px rgba(124,58,237,0.04), 0 8px 32px rgba(124,58,237,0.35)',
          }}
          animate={{
            boxShadow: [
              '0 0 0 10px rgba(124,58,237,0.08), 0 0 0 22px rgba(124,58,237,0.04), 0 8px 32px rgba(124,58,237,0.3)',
              '0 0 0 16px rgba(124,58,237,0.13), 0 0 0 30px rgba(124,58,237,0.06), 0 8px 40px rgba(124,58,237,0.45)',
              '0 0 0 10px rgba(124,58,237,0.08), 0 0 0 22px rgba(124,58,237,0.04), 0 8px 32px rgba(124,58,237,0.3)',
            ],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* Inner chip square */}
          <div style={{
            width: 56, height: 56,
            borderRadius: 14,
            background: 'rgba(255,255,255,0.13)',
            border: '1.5px solid rgba(255,255,255,0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '2rem',
          }}>
            🧠
          </div>

          {/* "AI +" label */}
          <p style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: '0.68rem', fontWeight: 800,
            color: '#fff', letterSpacing: '0.06em',
            margin: 0, lineHeight: 1,
            textShadow: '0 0 12px rgba(196,181,253,0.7)',
          }}>
            AI +
          </p>
        </motion.div>

        {/* ── Course nodes ── */}
        {NODE_CFG.map((n, i) => {
          const pos   = toXY(n.deg);
          const isHov = hovered === n.theme;
          const course = courses.find(c => c.animationTheme === n.theme);

          return (
            <motion.div
              key={n.theme}
              style={{
                position: 'absolute',
                left: pos.x, top: pos.y,
                transform: 'translate(-50%, -50%)',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', gap: 9,
                zIndex: 4, cursor: 'pointer',
              }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.55, type: 'spring', stiffness: 260, damping: 22 }}
              onHoverStart={() => setHovered(n.theme)}
              onHoverEnd={() => setHovered(null)}
              onClick={() => course && navigate(`/courses/${course.slug}`)}
              whileHover={{ scale: 1.13 }}
              whileTap={{ scale: 0.96 }}
            >
              {/* Colored circle */}
              <div style={{
                width: 90, height: 90,
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${n.grad[0]} 0%, ${n.grad[1]} 100%)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '2.2rem',
                border: `2.5px solid ${isHov ? n.border : n.border + '60'}`,
                boxShadow: isHov
                  ? `0 0 0 6px ${n.border}22, 0 8px 28px ${n.grad[1]}55`
                  : `0 4px 18px ${n.grad[1]}44`,
                transition: 'border 0.25s, box-shadow 0.25s',
              }}>
                {n.emoji}
              </div>

              {/* Dark label pill — matching reference */}
              <div style={{
                background: isHov
                  ? `linear-gradient(135deg, ${n.grad[0]}, ${n.grad[1]})`
                  : 'rgba(15,23,42,0.85)',
                color: '#fff',
                fontSize: '0.7rem', fontWeight: 600,
                padding: '5px 14px',
                borderRadius: 50,
                whiteSpace: 'nowrap',
                border: `1px solid ${isHov ? n.border + '88' : 'rgba(255,255,255,0.12)'}`,
                boxShadow: isHov ? `0 4px 16px ${n.grad[1]}44` : 'none',
                transition: 'all 0.25s ease',
                letterSpacing: '0.02em',
              }}>
                {n.label}
              </div>
            </motion.div>
          );
        })}

      </div>
    </div>
  );
}
