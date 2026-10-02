import { motion } from 'framer-motion';
import { Boxes, Brain, Code2, Cpu, Eye, Lightbulb, ShieldCheck, Sparkles, Workflow, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import CourseBackLink from '../components/CourseBackLink';
import aiImage from '../assets/ai.png';
import './AICreatorCourse.css';

const learningAreas = [
  { title: 'Artificial Intelligence Fundamentals', Icon: Brain },
  { title: 'Machine Learning Concepts', Icon: Cpu },
  { title: 'Computer Vision', Icon: Eye },
  { title: 'AI Applications', Icon: Workflow },
  { title: 'Generative AI', Icon: Sparkles },
  { title: 'Prompt Engineering', Icon: Code2 },
  { title: 'AI Tools', Icon: Wrench },
  { title: 'AI-Assisted Creativity', Icon: Lightbulb },
  { title: 'Responsible AI', Icon: ShieldCheck },
  { title: 'AI Projects', Icon: Boxes },
];

export default function AICreatorCourse() {
  return (
    <div className="ai-creator-course-page">
      <section className="ai-creator-hero">
        <div className="ai-creator-container ai-creator-hero-grid">
          <motion.div
            className="ai-creator-hero-copy"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <CourseBackLink />
            <p className="ai-creator-eyebrow">AI CREATOR LAB</p>
            <h1>Introducing Students to the World of AI</h1>
            <p className="ai-creator-intro">
              Artificial Intelligence is becoming an important part of modern technology.
            </p>
            <p className="ai-creator-intro">
              Karpanai Technologies provides structured AI learning experiences that help students and learners understand how intelligent systems work and where AI can be applied.
            </p>
          </motion.div>

          <motion.div
            className="ai-creator-hero-visual"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
          >
            <img src={aiImage} alt="Artificial intelligence and machine learning visual on a laptop" />
          </motion.div>
        </div>
      </section>

      <section className="ai-creator-areas-section" id="ai-learning-areas">
        <div className="ai-creator-container">
          <div className="ai-creator-section-heading">
            <h2>AI LEARNING AREAS</h2>
          </div>
          <div className="ai-creator-area-grid">
            {learningAreas.map(({ title, Icon }, index) => (
              <motion.article
                className="ai-creator-area-card"
                key={title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35, delay: index % 4 * 0.05 }}
              >
                <Icon className="ai-creator-area-icon" aria-hidden="true" strokeWidth={1.8} />
                <h3>{title}</h3>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="ai-creator-practical-section">
        <div className="ai-creator-container">
          <p className="ai-creator-eyebrow">PRACTICAL LEARNING</p>
          <p className="ai-creator-practical-statement">
            The focus is on understanding technology and applying it through practical activities and projects.
          </p>
        </div>
      </section>

      <section className="ai-creator-cta-section">
        <div className="ai-creator-container ai-creator-cta-inner">
          <Link to="/courses" className="ai-creator-cta-button">EXPLORE AI PROGRAMS</Link>
        </div>
      </section>
    </div>
  );
}