import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import CourseBackLink from '../components/CourseBackLink';
import { getCourseBySlug } from '../data/courses';
import HighlightCard from '../components/HighlightCard';
import NotFound from './NotFound';
import '../styles/CourseDetails.css';

/* ── Real course images ──────────────────────────────── */
import robotImg  from '../assets/images/course-robot.jpg';
import droneImg  from '../assets/images/course-drone.jpg';
import aiImg     from '../assets/images/course-ai.jpg';
import iotImg    from '../assets/images/course-iot.jpg';
import visionImg from '../assets/images/course-vision.jpg';
import spaceImg  from '../assets/images/course-space.jpg';

const courseImages = {
  robot:  robotImg,
  drone:  droneImg,
  ai:     aiImg,
  iot:    iotImg,
  vision: visionImg,
  space:  spaceImg,
};

const courseAccent = '#2563eb';

/* ── Cinematic hero image panel ──────────────────────── */
function CourseVisual({ theme, accentColor }) {
  const img = courseImages[theme];
  if (!img) return null;

  return (
    <motion.div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: 560,
        borderRadius: 20,
        overflow: 'hidden',
        border: `1.5px solid ${accentColor}55`,
        boxShadow: `0 8px 40px ${accentColor}30, 0 0 80px ${accentColor}12`,
      }}
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <motion.img
        src={img}
        alt=""
        draggable={false}
        style={{
          width: '100%', display: 'block',
          aspectRatio: '4/3', objectFit: 'cover', objectPosition: 'center',
        }}
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
      />

      {/* Subtle tint from top */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `linear-gradient(180deg, ${accentColor}15 0%, transparent 50%, rgba(255,255,255,0.1) 100%)`,
        pointerEvents: 'none',
      }} />

      {/* HUD corner brackets */}
      {[
        { top: 12,    left: 12,   borderTop:    `1.5px solid ${accentColor}`, borderLeft:   `1.5px solid ${accentColor}` },
        { top: 12,    right: 12,  borderTop:    `1.5px solid ${accentColor}`, borderRight:  `1.5px solid ${accentColor}` },
        { bottom: 12, left: 12,   borderBottom: `1.5px solid ${accentColor}`, borderLeft:   `1.5px solid ${accentColor}` },
        { bottom: 12, right: 12,  borderBottom: `1.5px solid ${accentColor}`, borderRight:  `1.5px solid ${accentColor}` },
      ].map((s, i) => (
        <div key={i} style={{ position: 'absolute', width: 20, height: 20, ...s, pointerEvents: 'none' }} />
      ))}

      {/* Animated sweep line */}
      <motion.div
        style={{
          position: 'absolute', left: 0, right: 0, height: '1.5px',
          background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
          pointerEvents: 'none',
          boxShadow: `0 0 8px ${accentColor}`,
        }}
        animate={{ top: ['0%', '100%', '0%'], opacity: [0.7, 0, 0.7] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
      />

      {/* PREVIEW badge */}
      <div style={{
        position: 'absolute', top: 12, left: 12,
        background: accentColor,
        color: '#fff',
        fontFamily: "'Orbitron', sans-serif",
        fontSize: '0.55rem', fontWeight: 800,
        letterSpacing: '0.12em',
        padding: '3px 10px', borderRadius: 50,
        pointerEvents: 'none',
      }}>
        PREVIEW
      </div>
    </motion.div>
  );
}

/* ── Main Course Details Page ─────────────────────────── */
export default function CourseDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const course = getCourseBySlug(slug);

  if (!course) return <NotFound />;

  return (
    <div className="page-enter">

      {/* ─── HERO ─────────────────────────────────────── */}
      <section className="course-hero">
        <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <div className="course-hero-content">
            <CourseBackLink />

            {/* Badge */}
            <motion.div
              className="course-badge"
              style={{
                color: courseAccent,
                borderColor: courseAccent + '55',
                background: courseAccent + '15',
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              <span>{course.emoji}</span>
              <span style={{ fontFamily: 'Orbitron', fontSize: '0.7rem', letterSpacing: '0.2em' }}>
                KARPANAI PROGRAM
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              className="course-hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              {course.name}
            </motion.h1>

            {/* Tagline */}
            <motion.p
              className="course-hero-tagline"
              style={{ color: courseAccent }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              {course.tagline}
            </motion.p>

            {/* Intro */}
            <motion.p
              className="course-hero-intro"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
            >
              {course.shortIntro}
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
            >
              <button
                className="btn-primary"
                style={{
                  background: `linear-gradient(135deg, ${courseAccent}, #0ea5e9)`,
                  boxShadow: `0 4px 20px ${courseAccent}44`,
                }}
                onClick={() => navigate('/contact')}
              >
                <span>Enquire Now</span> <span>→</span>
              </button>
            </motion.div>
          </div>
        </div>

        {/* Right cinematic image */}
        <div className="course-hero-visual">
          <CourseVisual theme={course.animationTheme} accentColor={courseAccent} />
        </div>
      </section>

      {/* ─── HIGHLIGHTS ───────────────────────────────── */}
      <section className="highlights-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="section-label" style={{ color: courseAccent, marginBottom: 12 }}>
              What You'll Explore
            </p>
            <h2 className="section-title" style={{ color: '#0f172a' }}>Course Highlights</h2>
          </motion.div>

          <div className="highlights-grid">
            {course.highlights.map((h, i) => (
              <HighlightCard key={i} highlight={h} accentColor={courseAccent} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL PROJECT ────────────────────────────── */}
      <section className="final-project-section">
        <div className="container">
          <motion.div
            className="final-project-card"
            style={{
              background: 'linear-gradient(135deg, #1e40af 0%, #2563eb 55%, #0ea5e9 100%)',
              border: 'none',
            }}
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Background image — blurred, very dim */}
            <div style={{
              position: 'absolute', inset: 0, borderRadius: 'inherit', overflow: 'hidden',
              zIndex: 0, pointerEvents: 'none',
            }}>
              <img
                src={courseImages[course.animationTheme]}
                alt=""
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover', objectPosition: 'center',
                  opacity: 0.1, filter: 'blur(6px) saturate(1.5)',
                }}
              />
            </div>

            <div className="final-project-glow" style={{ background: '#ffffff' }} />

            <p className="final-project-label" style={{ color: 'rgba(255,255,255,0.8)', position: 'relative', zIndex: 1 }}>
              ★ CAPSTONE PROJECT
            </p>

            <motion.span
              className="final-project-emoji"
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              style={{ position: 'relative', zIndex: 1 }}
            >
              {course.emoji}
            </motion.span>

            <h2
              className="final-project-title"
              style={{ color: '#ffffff', position: 'relative', zIndex: 1 }}
            >
              {course.finalProject.name}
            </h2>

            <p className="final-project-desc" style={{ position: 'relative', zIndex: 1 }}>
              {course.finalProject.description}
            </p>

            <button
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: '#ffffff', color: '#1e40af',
                padding: '14px 32px', borderRadius: 50, fontWeight: 700,
                fontSize: '1rem', border: 'none', cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                position: 'relative', zIndex: 1,
                transition: 'all 0.3s ease',
              }}
              onClick={() => navigate('/contact')}
            >
              <span>Start This Journey</span> <span>→</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* ─── BACK TO COURSES ──────────────────────────── */}
      <section className="section" style={{ padding: '64px 0', background: '#f8faff' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.p
            style={{ color: '#64748b', marginBottom: 24 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Ready to explore more?
          </motion.p>
          <button className="btn-outline" onClick={() => navigate('/courses')}>
            ← Browse All Courses
          </button>
        </div>
      </section>

    </div>
  );
}
