import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import CourseHub from '../components/CourseHub';

import robotImg  from '../assets/images/course-robot.jpg';
import droneImg  from '../assets/images/course-drone.jpg';
import aiImg     from '../assets/images/course-ai.jpg';
import heroImg   from '../assets/robolanding.png';

import '../styles/Home.css';

/* ══════════════════════════════════════════════════════
   FEATURE BAR — 4 trust pillars
══════════════════════════════════════════════════════ */
const FEATURES = [
  { icon: '🧠', title: 'AI-Focused Learning',  desc: 'Cutting-edge AI curriculum designed for school students' },
  { icon: '🏫', title: 'School Programs',       desc: 'Structured programs built and tested for schools' },
  { icon: '⚙️', title: 'Practical Projects',   desc: 'Real hands-on technology projects every student builds' },
  { icon: '🚀', title: 'Future-Ready Skills',   desc: 'Skills that prepare students for tomorrow\'s careers' },
];

/* ══════════════════════════════════════════════════════
   APPROACH CARDS — 3 course image previews (dark-blue)
══════════════════════════════════════════════════════ */
const APPROACH_CARDS = [
  { img: robotImg,  title: 'AI & Robotics',     desc: 'From fundamentals to building real robotic AI systems.' },
  { img: droneImg,  title: 'Drone Technology',  desc: 'Design, program and pilot autonomous flying drones.' },
  { img: aiImg,     title: 'AI Creator Lab',    desc: 'Create with AI — images, video, music and more.' },
];

/* ══════════════════════════════════════════════════════
   ANIMATION VARIANTS
══════════════════════════════════════════════════════ */
const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: d, ease: 'easeOut' } }),
};

/* ══════════════════════════════════════════════════════
   HOME PAGE
══════════════════════════════════════════════════════ */
export default function Home() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="page-enter edu-home">

      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="edu-hero">
        <div className="container">
          <div className="edu-hero-inner">

            {/* LEFT — text content */}
            <div className="edu-hero-left">
              <motion.div className="edu-badge"
                variants={fadeUp} initial="hidden" animate="visible" custom={0.05}>
                🎓 AI Education for the Next Generation
              </motion.div>

              <motion.h1 className="edu-h1"
                variants={fadeUp} initial="hidden" animate="visible" custom={0.18}>
                Empowering Students<br />
                with <span className="edu-blue">AI &amp; Technology</span>
              </motion.h1>

              <motion.p className="edu-sub"
                variants={fadeUp} initial="hidden" animate="visible" custom={0.32}>
                Helping schools and students build practical AI skills, digital confidence,
                and future-ready technology knowledge through hands-on programs.
              </motion.p>

              <motion.div className="edu-btns"
                variants={fadeUp} initial="hidden" animate="visible" custom={0.46}>
                <Link to="/courses" className="edu-btn-primary">
                  Explore Courses →
                </Link>
                <Link to="/about" className="edu-btn-secondary">
                  Learn About Us
                </Link>
              </motion.div>
            </div>

            {/* RIGHT — hero image */}
            <motion.div className="edu-hero-right"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}>
              <img className="edu-home-hero-image" src={heroImg} alt="Robotics education project" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── FEATURE BAR ────────────────────────────────────── */}
      <section className="edu-feature-bar">
        <div className="container">
          <div className="edu-feature-grid">
            {FEATURES.map((f, i) => (
              <motion.div key={f.title} className="edu-feature-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}>
                <div className="edu-feature-icon">{f.icon}</div>
                <h3 className="edu-feature-title">{f.title}</h3>
                <p className="edu-feature-desc">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COURSES HUB ─────────────────────────────────────── */}
      <section className="edu-courses-section" id="courses">
        <div className="container">
          <motion.div className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}>
            <span className="edu-section-label" style={{ display: 'block', marginBottom: 12 }}>
              What We Offer
            </span>
            <h2 className="edu-section-h2">Explore All Courses</h2>
            <p className="edu-section-sub" style={{ marginTop: 12 }}>
              Six future-focused technology programs. One transformative journey.
            </p>
          </motion.div>
          <CourseHub />
        </div>
      </section>

      <section className="edu-approach">
        <div className="container">
          <div className="edu-approach-inner">
            <motion.div className="edu-approach-text"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>
              <span className="edu-section-label">OUR APPROACH</span>
              <h2 className="edu-approach-h2">Learn, Practice,<br />Build</h2>
              <p className="edu-approach-sub">
                We make AI and technology learning simple, practical and exciting. With structured
                courses, real-world projects and expert-designed programs, your students will be
                ready for what's next.
              </p>
              <Link to="/courses" className="edu-btn-primary">
                View All Programs â†’
              </Link>
            </motion.div>

            <div className="edu-approach-cards">
              {APPROACH_CARDS.map((card, i) => (
                <motion.div key={card.title} className="edu-approach-card"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  whileHover={{ y: -5 }}>
                  <img src={card.img} alt={card.title} className="edu-approach-img" />
                  <div className="edu-approach-card-body">
                    <h4>{card.title}</h4>
                    <p>{card.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TECH ECOSYSTEM ──────────────────────────────────── */}
      {/* ── CTA BANNER ──────────────────────────────────────── */}
      <section className="edu-cta-section">
        <div className="container">
          <motion.div className="edu-cta-card"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}>
            <div className="edu-cta-glow" />
            <span className="edu-section-label" style={{ color: '#bfdbfe', marginBottom: 16, display: 'block' }}>
              Ready to Begin?
            </span>
            <h2 className="edu-cta-h2">Start Your Technology Journey</h2>
            <p className="edu-cta-sub">Choose your path. Build the future.</p>
            <div className="edu-cta-btns">
              <Link to="/courses" className="edu-cta-btn-white">View All Courses →</Link>
              <Link to="/contact" className="edu-cta-btn-outline">Get in Touch</Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
