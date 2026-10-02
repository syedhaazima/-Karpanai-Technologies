import { motion } from 'framer-motion';
import { Boxes, Code2, Cog, Cpu, Lightbulb, Plane, Radio, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';
import CourseBackLink from '../components/CourseBackLink';
import droneImage from '../assets/drone.png';
import './DroneCourse.css';

const explorationAreas = [
  { title: 'Drone Fundamentals', Icon: Plane },
  { title: 'Flight Concepts', Icon: Workflow },
  { title: 'Sensors', Icon: Radio },
  { title: 'Electronics', Icon: Cpu },
  { title: 'Control Systems', Icon: Cog },
  { title: 'Drone Applications', Icon: Boxes },
  { title: 'Technology Projects', Icon: Code2 },
  { title: 'Innovation Challenges', Icon: Lightbulb },
];

export default function DroneCourse() {
  return (
    <div className="drone-course-page">
      <section className="drone-hero">
        <div className="drone-container drone-hero-grid">
          <motion.div
            className="drone-hero-copy"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <CourseBackLink />
            <p className="drone-eyebrow">DRONE TECHNOLOGY</p>
            <h1>Explore the Technology Above Us</h1>
            <p className="drone-intro">
              Drone technology combines electronics, sensors, programming, control systems, engineering and real-world applications.
            </p>
            <p className="drone-intro">
              Our drone technology programs introduce learners to the fundamentals of drone systems through age-appropriate activities and projects.
            </p>
          </motion.div>

          <motion.div
            className="drone-hero-visual"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
          >
            <img src={droneImage} alt="Drone flying above a mountain landscape with flight path overlays" />
          </motion.div>
        </div>
      </section>

      <section className="drone-areas-section" id="drone-exploration-areas">
        <div className="drone-container">
          <div className="drone-section-heading">
            <h2>AREAS OF EXPLORATION</h2>
          </div>
          <div className="drone-area-grid">
            {explorationAreas.map(({ title, Icon }, index) => (
              <motion.article
                className="drone-area-card"
                key={title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35, delay: index % 4 * 0.05 }}
              >
                <Icon className="drone-area-icon" aria-hidden="true" strokeWidth={1.8} />
                <h3>{title}</h3>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="drone-cta-section">
        <div className="drone-container drone-cta-inner">
          <Link to="/courses" className="drone-cta-button">EXPLORE DRONE TECHNOLOGY</Link>
        </div>
      </section>
    </div>
  );
}