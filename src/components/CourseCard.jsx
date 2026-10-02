import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import robotImg  from '../assets/robotics.png';
import droneImg  from '../assets/drone.png';
import aiImg     from '../assets/ai.png';
import iotImg    from '../assets/iot.png';
import visionImg from '../assets/computervision.png';
import spaceImg  from '../assets/images/course-space.jpg';

const COURSE_THEME = { accent: '#2563eb', bg: '#dbeafe', text: '#1e40af' };

const CFG = {
  robot:  { img: robotImg,  tags: ['Build', 'Program', 'Design'] },
  drone:  { img: droneImg,  tags: ['Navigate', 'Explore', 'Pilot'] },
  ai:     { img: aiImg,     tags: ['Imagine', 'Create', 'Innovate'] },
  iot:    { img: iotImg,    tags: ['Connect', 'Smart', 'Automate'] },
  vision: { img: visionImg, tags: ['Analyze', 'Detect', 'Deploy'] },
  space:  { img: spaceImg,  tags: ['Explore', 'Design', 'Mission'] },
};

export default function CourseCard({ course, index = 0 }) {
  const navigate = useNavigate();
  const cfg = CFG[course.animationTheme] || CFG.robot;
  const displayName = course.slug === 'iot-smart-home' ? 'IoT & Electronics' : course.name;
  const coursePath = course.slug === 'iot-smart-home'
    ? '/courses/iot-electronics'
    : course.slug === 'space-satellite'
      ? '/courses/space-satellite-technology'
      : `/courses/${course.slug}`;

  return (
    <motion.article
      className="course-card"
      onClick={() => navigate(coursePath)}
      style={{
        background: '#ffffff',
        borderRadius: 20,
        border: '1px solid rgba(37,99,235,0.1)',
        boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
        cursor: 'pointer',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      whileHover={{
        y: -7,
        boxShadow: `0 20px 48px ${COURSE_THEME.accent}22, 0 0 0 1.5px ${COURSE_THEME.accent}44`,
        transition: { duration: 0.22 },
      }}
    >
      {/* ── Image banner ── */}
      <div style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '16/9',
        overflow: 'hidden',
        flexShrink: 0,
      }}>
        <motion.img
          src={cfg.img}
          alt={displayName}
          draggable={false}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />

        {/* Subtle top-to-bottom gradient for readability */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.22) 100%)',
          pointerEvents: 'none',
        }} />

        {/* Accent top bar */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 4,
          background: `linear-gradient(90deg, ${COURSE_THEME.accent}, ${COURSE_THEME.accent}99)`,
        }} />

        {/* Emoji badge — top left */}
        <div style={{
          position: 'absolute', top: 14, left: 14,
          background: 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(6px)',
          borderRadius: 10,
          padding: '4px 10px',
          display: 'flex', alignItems: 'center', gap: 5,
          boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
        }}>
          <span style={{ fontSize: '1rem' }}>{course.emoji}</span>
          <span style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: '0.55rem', fontWeight: 800,
            color: COURSE_THEME.text, letterSpacing: '0.1em',
          }}>
            {course.animationTheme.toUpperCase()}
          </span>
        </div>
      </div>

      {/* ── Card body ── */}
      <div style={{ padding: '20px 22px 24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>

        {/* Course name */}
        <h3 style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '1rem', fontWeight: 800,
          color: '#0f172a', letterSpacing: '-0.01em',
          lineHeight: 1.3, marginBottom: 8,
        }}>
          {displayName}
        </h3>

        {/* Short intro */}
        <p style={{
          fontSize: '0.855rem', color: '#475569',
          lineHeight: 1.7, flexGrow: 1, marginBottom: 16,
        }}>
          {course.shortIntro}
        </p>

        {/* Skill tag chips */}
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 18 }}>
          {cfg.tags.map((tag, i) => (
            <span key={i} style={{
              background: i === 0 ? COURSE_THEME.bg : '#f1f5f9',
              color: i === 0 ? COURSE_THEME.text : '#475569',
              fontSize: '0.68rem', fontWeight: 600,
              padding: '3px 10px', borderRadius: 50,
              border: i === 0 ? `1px solid ${COURSE_THEME.accent}44` : '1px solid #e2e8f0',
              letterSpacing: '0.02em',
            }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'rgba(37,99,235,0.08)', marginBottom: 14 }} />

        {/* CTA row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <motion.span
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 5,
              fontSize: '0.85rem', fontWeight: 700, color: COURSE_THEME.accent,
            }}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.18 }}
          >
            Explore Course →
          </motion.span>

          {/* Arrow circle */}
          <div style={{
            width: 32, height: 32, borderRadius: '50%',
            background: COURSE_THEME.bg,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: COURSE_THEME.accent, fontSize: '0.9rem', fontWeight: 700,
          }}>
            →
          </div>
        </div>
      </div>
    </motion.article>
  );
}
