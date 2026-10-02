import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { courses } from '../data/courses';

/* ── Course images ─────────────────────────────────── */
import robotImg  from '../assets/robotics.png';
import droneImg  from '../assets/drone.png';
import aiImg     from '../assets/ai.png';
import iotImg    from '../assets/iot.png';
import visionImg from '../assets/computervision.png';
import spaceImg  from '../assets/images/course-space.jpg';

const courseImages = {
  robot: robotImg, drone: droneImg, ai: aiImg,
  iot: iotImg, vision: visionImg, space: spaceImg,
};

/* ── Accent palette ─────────────────────────────────── */
const palette = {
  robot:  { p: '#38bdf8', dark: '#0284c7' },
  drone:  { p: '#818cf8', dark: '#4f46e5' },
  ai:     { p: '#c084fc', dark: '#9333ea' },
  iot:    { p: '#34d399', dark: '#059669' },
  vision: { p: '#fbbf24', dark: '#d97706' },
  space:  { p: '#7dd3fc', dark: '#0369a1' },
};

/* ═══════════════════════════════════════════════════════
   CARD LAYOUT — clock-face positions, mixed sizes
   Matching the reference: spread-out orbit, varied sizes
═══════════════════════════════════════════════════════ */
const cardDefs = [
  // AI + Robotics   → 10 o'clock (top-left)
  { w: 245, h: 195, ox: -295, oy: -170 },
  // Drone           → 12 o'clock (top center)  — wider
  { w: 285, h: 170, ox:    0, oy: -318 },
  // AI Creator Lab  → 2 o'clock  (top-right)
  { w: 225, h: 190, ox:  295, oy: -170 },
  // IoT Smart Home  → 4 o'clock  (bot-right)
  { w: 220, h: 210, ox:  295, oy:  170 },
  // Computer Vision → 6 o'clock  (bot center)  — wider
  { w: 278, h: 160, ox:    0, oy:  318 },
  // Space           → 8 o'clock  (bot-left)
  { w: 240, h: 195, ox: -295, oy:  170 },
];

const HUB_SIZE = 158;
const PAD = 16;

/* container geometry — hub at 50% / 50% */
const maxRight  = Math.max(...cardDefs.map(d => d.ox + d.w / 2)) + PAD;
const maxLeft   = Math.abs(Math.min(...cardDefs.map(d => d.ox - d.w / 2))) + PAD;
const maxBottom = Math.max(...cardDefs.map(d => d.oy + d.h / 2)) + PAD;
const maxTop    = Math.abs(Math.min(...cardDefs.map(d => d.oy - d.h / 2))) + PAD;
const CONT_W    = maxLeft + maxRight;
const CONT_H    = maxTop  + maxBottom;

/* ══════════════════════════════════════════════════════
   COURSE CARD
══════════════════════════════════════════════════════ */
function CourseCard({ course, index, expanded, onNavigate }) {
  const [hovered, setHovered] = useState(false);
  const c   = palette[course.animationTheme];
  const def = cardDefs[index];
  const img = courseImages[course.animationTheme];

  return (
    <motion.div
      style={{
        position: 'absolute',
        left: '50%', top: '50%',
        marginLeft: -(def.w / 2), marginTop: -(def.h / 2),
        width: def.w, height: def.h,
        borderRadius: 16, overflow: 'hidden',
        cursor: expanded ? 'pointer' : 'default',
        zIndex: 4,
        border: `1.5px solid ${hovered ? c.p + 'cc' : c.p + '66'}`,
        boxShadow: hovered
          ? `0 0 0 3px ${c.p}18, 0 16px 32px rgba(15, 23, 42, 0.2)`
          : `0 8px 24px rgba(15, 23, 42, 0.16)`,
        transition: 'border 0.3s, box-shadow 0.3s',
        willChange: 'transform',
        backgroundColor: '#0b1930',
      }}
      initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
      animate={
        expanded
          ? { x: def.ox, y: def.oy, scale: 1, opacity: 1 }
          : { x: 0, y: 0, scale: 0, opacity: 0 }
      }
      transition={
        expanded
          ? { type: 'spring', stiffness: 220, damping: 24, delay: index * 0.07 }
          : { duration: 0.25, delay: (courses.length - 1 - index) * 0.04 }
      }
      onClick={() => expanded && onNavigate(getCoursePath(course.slug))}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* Course image */}
      <motion.img
        src={img} alt={course.name} draggable={false}
        style={{
          width: '100%', height: '100%',
          objectFit: 'contain', objectPosition: 'center',
          display: 'block', position: 'absolute', inset: 0,
          backgroundColor: '#0b1930',
        }}
        animate={{ scale: hovered ? 1.06 : 1 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      />

    </motion.div>
  );
}

function getCoursePath(slug) {
  if (slug === 'iot-smart-home') return '/courses/iot-electronics';
  if (slug === 'space-satellite') return '/courses/space-satellite-technology';
  return `/courses/${slug}`;
}

/* ══════════════════════════════════════════════════════
  HUB CENTER — blue circle, explore prompt
══════════════════════════════════════════════════════ */
function HubCenter({ expanded, onClick, className }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.button
      className={className}
      onClick={onClick}
      aria-expanded={expanded}
      aria-controls="mobile-course-list"
      aria-label={expanded ? 'Close course list' : 'Tap to explore courses'}
      style={{
        position: 'absolute',
        left: '50%', top: '50%',
        marginLeft: -(HUB_SIZE / 2), marginTop: -(HUB_SIZE / 2),
        width: HUB_SIZE, height: HUB_SIZE,
        borderRadius: '50%',
        background: 'radial-gradient(circle at 35% 35%, #3b82f6 0%, #1d4ed8 50%, #1e3a8a 100%)',
        border: '3px solid rgba(147,197,253,0.5)',
        cursor: 'pointer', zIndex: 10,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: 4,
        outline: 'none', color: '#fff',
        boxShadow: '0 0 0 8px rgba(37,99,235,0.08), 0 0 0 18px rgba(37,99,235,0.04)',
      }}
      animate={shouldReduceMotion ? {} : {
        boxShadow: expanded
          ? ['0 0 0 8px rgba(37,99,235,0.2), 0 0 0 20px rgba(37,99,235,0.1)', '0 0 0 12px rgba(37,99,235,0.3), 0 0 0 28px rgba(37,99,235,0.12)', '0 0 0 8px rgba(37,99,235,0.2), 0 0 0 20px rgba(37,99,235,0.1)']
          : ['0 0 0 8px rgba(37,99,235,0.12), 0 0 0 18px rgba(37,99,235,0.06)', '0 0 0 12px rgba(37,99,235,0.2), 0 0 0 24px rgba(37,99,235,0.08)', '0 0 0 8px rgba(37,99,235,0.12), 0 0 0 18px rgba(37,99,235,0.06)'],
      }}
      transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.94 }}
    >
      {/* Dashed spinning ring */}
      <motion.div style={{
        position: 'absolute', inset: -12, borderRadius: '50%',
        border: '1.5px dashed rgba(147,197,253,0.45)', pointerEvents: 'none',
      }}
        animate={shouldReduceMotion ? {} : { rotate: expanded ? -360 : 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      />

      {expanded && (
        <motion.div
          style={{ fontSize: '1.6rem', lineHeight: 1 }}
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 1, rotate: 90 }}
          transition={{ duration: 0.35 }}
        >
          ✕
        </motion.div>
      )}

      {/* Text */}
      <p style={{
        fontFamily: "'Orbitron', sans-serif",
        fontSize: '0.56rem', fontWeight: 800,
        letterSpacing: '0.1em', color: '#fff',
        lineHeight: 1.35, margin: 0,
        textAlign: 'center', padding: '0 10px',
        textShadow: '0 0 12px rgba(147,197,253,0.6)',
      }}>
        {expanded ? 'CLOSE' : 'tap to explore'}
      </p>
    </motion.button>
  );
}

/* ══════════════════════════════════════════════════════
   MAIN EXPORT
══════════════════════════════════════════════════════ */
export default function CourseHub() {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="course-hub-wrap">
      <div className="khub-bento" style={{ position: 'relative', width: CONT_W, height: CONT_H, flexShrink: 0 }}>
        {courses.map((course, i) => (
          <CourseCard
            key={course.slug}
            course={course} index={i}
            expanded={expanded} onNavigate={navigate}
          />
        ))}

        <HubCenter
          className="course-hub-desktop-toggle"
          expanded={expanded}
          onClick={() => setExpanded(v => !v)}
        />
      </div>

      <div className="course-hub-mobile-orbit">
        <HubCenter
          className="course-hub-mobile-toggle"
          expanded={expanded}
          onClick={() => setExpanded(v => !v)}
        />
        <div className={`course-hub-mobile-list${expanded ? ' is-open' : ''}`} id="mobile-course-list">
          {courses.map((course, index) => (
            <Link
              className={`course-hub-mobile-card course-hub-mobile-card-${index}`}
              key={course.slug}
              to={getCoursePath(course.slug)}
              aria-label={`Explore ${course.name}`}
            >
              <img src={courseImages[course.animationTheme]} alt="" />
              <span>{course.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
