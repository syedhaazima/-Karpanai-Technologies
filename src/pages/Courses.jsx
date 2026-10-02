import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { courses } from '../data/courses';
import CourseCard from '../components/CourseCard';

/* ── Stats strip ── */
const STATS = [
  { value: '6',     label: 'Technology Programs' },
  { value: '100%',  label: 'Hands-On Learning'   },
  { value: 'AI',    label: 'Focused Curriculum'   },
  { value: '🏫',   label: 'School Ready'          },
];

export default function Courses() {
  return (
    <div
      className="page-enter courses-page"
      style={{ background: '#f8faff', minHeight: '100vh', paddingTop: 68 }}
    >
      {/* ── Responsive grid ── */}
      <style>{`
        .courses-page-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        @media (max-width: 1024px) {
          .courses-page-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .courses-page-grid { grid-template-columns: 1fr; gap: 20px; }
        }
        .stats-strip {
          display: flex;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
        }
      `}</style>

      {/* ════════════════════════════════════
          HERO
      ════════════════════════════════════ */}
      <section className="site-page-hero" style={{
        background: 'linear-gradient(180deg, #ffffff 0%, #f0f7ff 100%)',
        padding: '70px 0 60px',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(37,99,235,0.08)',
      }}>
        {/* Decorative blobs */}
        <div style={{
          position: 'absolute', top: -120, right: -80,
          width: 440, height: 440, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: -60, left: -60,
          width: 300, height: 300, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(14,165,233,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>

          {/* Badge */}
          <motion.div
            style={{ display: 'flex', justifyContent: 'center', marginBottom: 22 }}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span style={{
              background: '#eff6ff', color: '#1d4ed8',
              border: '1px solid #bfdbfe',
              borderRadius: 50, padding: '7px 20px',
              fontSize: '0.78rem', fontWeight: 600,
              letterSpacing: '0.04em',
            }}>
              🎓 Our Programs
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(2rem, 5vw, 3.4rem)',
              fontWeight: 800,
              color: '#0f172a',
              textAlign: 'center',
              letterSpacing: '-0.025em',
              lineHeight: 1.1,
              marginBottom: 18,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Explore All{' '}
            <span style={{ color: '#2563eb' }}>Courses</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            style={{
              color: '#64748b', textAlign: 'center',
              fontSize: '1rem', maxWidth: 500,
              margin: '0 auto 40px', lineHeight: 1.75,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Six future-focused AI and technology programs designed to give students
            practical skills and digital confidence.
          </motion.p>

          {/* Stats strip */}
          <motion.div
            className="stats-strip"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {STATS.map((s, i) => (
              <div key={i} style={{
                background: '#ffffff',
                border: '1px solid rgba(37,99,235,0.12)',
                borderRadius: 14,
                padding: '14px 24px',
                textAlign: 'center',
                boxShadow: '0 2px 12px rgba(37,99,235,0.06)',
                minWidth: 120,
              }}>
                <p style={{
                  fontSize: '1.5rem', fontWeight: 800,
                  color: '#1e40af', margin: 0, lineHeight: 1,
                }}>
                  {s.value}
                </p>
                <p style={{
                  fontSize: '0.72rem', color: '#64748b',
                  margin: '4px 0 0', fontWeight: 500,
                }}>
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════
          COURSE GRID
      ════════════════════════════════════ */}
      <section style={{ padding: '64px 0 80px' }}>
        <div className="container">
          <div className="courses-page-grid">
            {courses.map((course, i) => (
              <CourseCard key={course.slug} course={course} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          BOTTOM CTA BANNER
      ════════════════════════════════════ */}
      <section style={{ padding: '0 0 80px' }}>
        <div className="container">
          <motion.div className="site-cta"
            style={{
              background: 'linear-gradient(135deg, #1e40af 0%, #2563eb 55%, #0ea5e9 100%)',
              borderRadius: 24,
              padding: '60px 48px',
              textAlign: 'center',
              position: 'relative', overflow: 'hidden',
            }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            {/* Glow overlay */}
            <div style={{
              position: 'absolute', inset: 0, borderRadius: 'inherit',
              background: 'radial-gradient(ellipse 55% 80% at 80% 50%, rgba(255,255,255,0.07) 0%, transparent 60%)',
              pointerEvents: 'none',
            }} />

            <p style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: '0.68rem', letterSpacing: '0.22em',
              color: '#bfdbfe', marginBottom: 14,
              position: 'relative', zIndex: 1,
            }}>
              LOOKING FOR A CUSTOM PROGRAM?
            </p>

            <h2 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(1.5rem, 3.5vw, 2.4rem)',
              fontWeight: 800, color: '#ffffff',
              letterSpacing: '-0.02em', marginBottom: 14,
              position: 'relative', zIndex: 1,
            }}>
              Let's Build a Program for Your School
            </h2>

            <p style={{
              color: 'rgba(255,255,255,0.75)', fontSize: '1rem',
              marginBottom: 32, maxWidth: 480, margin: '0 auto 32px',
              lineHeight: 1.7, position: 'relative', zIndex: 1,
            }}>
              Contact us to design a tailored AI education program that fits your
              school's unique needs and goals.
            </p>

            <div style={{
              display: 'flex', gap: 14, justifyContent: 'center',
              flexWrap: 'wrap', position: 'relative', zIndex: 1,
            }}>
              <Link to="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: '#ffffff', color: '#1e40af',
                padding: '14px 32px', borderRadius: 50,
                fontWeight: 700, fontSize: '0.95rem',
                textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(0,0,0,0.18)',
                transition: 'all 0.25s ease',
              }}>
                Get in Touch →
              </Link>
              <Link to="/about" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'transparent', color: '#fff',
                padding: '13px 28px', borderRadius: 50,
                fontWeight: 600, fontSize: '0.95rem',
                textDecoration: 'none',
                border: '2px solid rgba(255,255,255,0.55)',
                transition: 'all 0.25s ease',
              }}>
                Learn About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
