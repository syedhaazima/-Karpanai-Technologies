import { motion } from 'framer-motion';
import { Boxes, Cpu, Globe2, Orbit, Radar, Radio, Rocket, Satellite, Telescope, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';
import CourseBackLink from '../components/CourseBackLink';
import spaceImage from '../assets/images/course-space.jpg';
import './SpaceSatelliteCourse.css';

const learningAreas = [
  { title: 'Space Technology Fundamentals', Icon: Orbit },
  { title: 'Satellite Systems', Icon: Satellite },
  { title: 'Orbits & Space Missions', Icon: Workflow },
  { title: 'Rocket & Launch Systems', Icon: Rocket },
  { title: 'Satellite Communication', Icon: Radio },
  { title: 'Remote Sensing', Icon: Radar },
  { title: 'Earth Observation', Icon: Globe2 },
  { title: 'Space Electronics', Icon: Cpu },
  { title: 'Space Science', Icon: Telescope },
  { title: 'Space Technology Projects', Icon: Boxes },
];

const practicalProjects = [
  'Build a Satellite Model',
  'Explore Planetary Orbits',
  'Satellite Communication Simulation',
  'Earth Observation Activity',
  'Space Mission Design',
];

const courseAudience = [
  'Students interested in space',
  'Future engineers',
  'STEM learners',
  'Students interested in satellites and robotics',
  'Future space technology enthusiasts',
];

export default function SpaceSatelliteCourse() {
  return (
    <div className="space-course-page">
      <section className="space-hero">
        <div className="space-container space-hero-grid">
          <motion.div
            className="space-hero-copy"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <CourseBackLink />
            <p className="space-eyebrow">SPACE &amp; SATELLITE TECHNOLOGY</p>
            <h1>Explore Space • Understand Satellites • Discover Beyond Earth</h1>
            <p className="space-intro">
              Space and satellite technology combines science, engineering, electronics, communication and computing to explore and understand our world and the universe.
            </p>
            <p className="space-intro">
              Our learning programs introduce students to space systems, satellites, orbits and real-world space technology through engaging activities and practical projects.
            </p>
          </motion.div>

          <motion.div
            className="space-hero-visual"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
          >
            <img src={spaceImage} alt="Satellite orbiting Earth with digital orbital paths" />
          </motion.div>
        </div>
      </section>

      <section className="space-areas-section" id="space-learning-areas">
        <div className="space-container">
          <div className="space-section-heading">
            <h2>SPACE &amp; SATELLITE LEARNING AREAS</h2>
          </div>
          <div className="space-area-grid">
            {learningAreas.map(({ title, Icon }, index) => (
              <motion.article
                className="space-area-card"
                key={title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35, delay: index % 4 * 0.05 }}
              >
                <Icon className="space-area-icon" aria-hidden="true" strokeWidth={1.8} />
                <h3>{title}</h3>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="space-practical-section">
        <div className="space-container">
          <div className="space-callout">
            <p className="space-eyebrow">PRACTICAL LEARNING</p>
            <p className="space-callout-text">
              Students learn space technology through activities, experiments, simulations and project-based learning.
            </p>
            <div className="space-project-grid">
              {practicalProjects.map((project, index) => (
                <div className="space-project" key={project}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <p>{project}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="space-audience-section">
        <div className="space-container">
          <div className="space-section-heading">
            <h2>WHO IS THIS COURSE FOR?</h2>
          </div>
          <div className="space-audience-grid">
            {courseAudience.map((audience, index) => (
              <article className="space-audience-card" key={audience}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{audience}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="space-outcomes-section">
        <div className="space-container">
          <div className="space-section-heading">
            <h2>LEARNING OUTCOMES</h2>
          </div>
          <p className="space-outcomes-text">
            Students will understand basic space systems, satellite components, orbital concepts, communication technologies and how space technology is used in real-world applications.
          </p>
        </div>
      </section>

      <section className="space-cta-section">
        <div className="space-container space-cta-inner">
          <Link to="/courses" className="space-cta-button">Explore Space Technology</Link>
        </div>
      </section>
    </div>
  );
}