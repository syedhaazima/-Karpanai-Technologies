import { motion } from 'framer-motion';
import { Bot, Boxes, CircuitBoard, Code2, Cog, Cpu, DraftingCompass, Lightbulb, Radio, Workflow, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import CourseBackLink from '../components/CourseBackLink';
import roboticsImage from '../assets/robolanding.png';
import './RoboticsCourse.css';

const learningAreas = [
  { title: 'Robotics Fundamentals', Icon: Bot },
  { title: 'Electronics', Icon: Cpu },
  { title: 'Sensors', Icon: Radio },
  { title: 'Motors', Icon: Cog },
  { title: 'Programming', Icon: Code2 },
  { title: 'Automation', Icon: Workflow },
  { title: 'Embedded Systems', Icon: CircuitBoard },
  { title: 'Robot Design', Icon: DraftingCompass },
  { title: 'Problem Solving', Icon: Lightbulb },
  { title: 'Robotics Projects', Icon: Boxes },
  { title: 'Engineering Challenges', Icon: Wrench },
];

export default function RoboticsCourse() {
  return (
    <div className="robotics-course-page">
      <section className="robotics-hero">
        <div className="robotics-container robotics-hero-grid">
          <motion.div
            className="robotics-hero-copy"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <CourseBackLink />
            <p className="robotics-eyebrow">ROBOTICS EDUCATION</p>
            <h1>From Ideas to Intelligent Machines</h1>
            <p className="robotics-hero-intro">
              Robotics brings together multiple areas of technology including electronics, programming, engineering, sensors, automation and problem-solving.
            </p>
          </motion.div>

          <motion.div
            className="robotics-hero-visual"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
          >
            <img src={roboticsImage} alt="Robotics education with an AI robot, electronics and a project rover" />
          </motion.div>
        </div>
      </section>

      <section className="robotics-intro-section">
        <div className="robotics-container robotics-intro-grid">
          <p>
            Our robotics education programs introduce learners to these concepts through practical projects.
          </p>
          <p>
            Students can gradually progress from basic concepts to more advanced robotics challenges depending on their age and learning level.
          </p>
        </div>
      </section>

      <section className="robotics-areas-section" id="robotics-learning-areas">
        <div className="robotics-container">
          <div className="robotics-section-heading">
            <p className="robotics-eyebrow">ROBOTICS EDUCATION</p>
            <h2>ROBOTICS LEARNING AREAS</h2>
          </div>
          <div className="robotics-area-grid">
            {learningAreas.map(({ title, Icon }, index) => (
              <motion.article
                className="robotics-area-card"
                key={title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35, delay: index % 4 * 0.05 }}
              >
                <Icon className="robotics-area-icon" aria-hidden="true" strokeWidth={1.8} />
                <h3>{title}</h3>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="robotics-cta-section">
        <div className="robotics-container robotics-cta-inner">
          <Link to="/courses" className="robotics-cta-button">EXPLORE ROBOTICS</Link>
        </div>
      </section>
    </div>
  );
}