import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { BookOpen, Boxes, Brain, Briefcase, Bot, Code, Cpu, GraduationCap, Lightbulb, ListChecks, Plane, Presentation, Radio, Rocket, School, Sparkles, Users, Workflow } from 'lucide-react';
import './AboutVisual.css';
import agenticAiImage from '../assets/agenticai.png';
import classroomImage from '../assets/lab.png';
import innovationImage from '../assets/innovation.png';
import iotElectronicsImage from '../assets/iot.png';

const MotionLink = motion.create(Link);

const coreAreas = [
  { title: 'STEM', Icon: Cpu },
  { title: 'Robotics', Icon: Bot },
  { title: 'AI', Icon: Brain },
  { title: 'Generative AI', Icon: Sparkles },
  { title: 'Agentic AI', Icon: Workflow },
  { title: 'Coding', Icon: Code },
  { title: 'Drones', Icon: Plane },
  { title: 'IoT', Icon: Radio },
];

const learningSteps = [
  { title: 'DISCOVER', description: 'Understand the world around you and develop curiosity.' },
  { title: 'EXPLORE', description: 'Experiment with concepts, tools and technologies.' },
  { title: 'BUILD', description: 'Create projects using technology and engineering principles.' },
  { title: 'TEST', description: 'Observe results, identify problems and improve solutions.' },
  { title: 'SOLVE', description: 'Develop logical thinking and practical problem-solving skills.' },
  { title: 'CREATE', description: 'Turn ideas into useful projects and innovative solutions.' },
];

const benefits = [
  { title: 'Practical Learning', Icon: BookOpen },
  { title: 'Future Technologies', Icon: Rocket },
  { title: 'Structured Curriculum', Icon: ListChecks },
  { title: 'Project-Based Education', Icon: Boxes },
  { title: 'Innovation Focus', Icon: Lightbulb },
];

const audiences = [
  { title: 'Schools', Icon: School },
  { title: 'Colleges', Icon: GraduationCap },
  { title: 'Students', Icon: Users },
  { title: 'Teachers', Icon: Presentation },
  { title: 'Professionals', Icon: Briefcase },
];

const revealProps = (side, delay, reduceMotion) => ({
  initial: reduceMotion ? false : { opacity: 0, x: side === 'left' ? '-4vw' : '4vw' },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: {
    duration: reduceMotion ? 0 : 0.8,
    delay: reduceMotion ? 0 : delay,
    ease: [0.22, 1, 0.36, 1],
  },
});

export default function AboutVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="about-visual-page">
      <section className="about-hero">
        <div className="about-container about-hero-grid">
          <motion.div className="about-hero-visual" {...revealProps('left', 0, reduceMotion)}>
            <img src={classroomImage} alt="STEM learning classroom with engineering and robotics projects" />
          </motion.div>
          <motion.div className="about-hero-copy" {...revealProps('right', 0.12, reduceMotion)}>
            <p className="about-eyebrow">About Karpanai</p>
            <p className="about-hero-topics">
              STEM Education | Robotics | Artificial Intelligence | GenAI | Agentic AI | Drone Technology | Coding | IoT
            </p>
            <h1>Building the Technology Creators of Tomorrow</h1>
          </motion.div>
        </div>
      </section>

      <section className="about-section about-who-section">
        <div className="about-container about-two-column">
          <motion.div className="about-copy" {...revealProps('left', 0, reduceMotion)}>
            <p className="about-eyebrow">WHO WE ARE</p>
            <h2>Karpanai Technologies</h2>
            <p>
              Karpanai Technologies is a technology education and innovation company based in <strong>Tiruppur, Tamil Nadu, India</strong>, providing practical and future-focused technology learning programs for <strong>schools, colleges, students, educators and professionals</strong>.
            </p>
            <p>
              We specialize in <strong>STEM education, robotics, artificial intelligence, Generative AI, Agentic AI, drone technology, coding, electronics, IoT and project-based technology learning</strong>.
            </p>
            <p>
              Our programs are designed to move learners beyond traditional classroom learning and help them <strong>explore, experiment, build, solve problems and create real-world technology projects</strong>.
            </p>
            <p className="about-copy-emphasis"><strong>Learn Technology. Build Projects. Create the Future.</strong></p>
            <div className="about-actions">
              <Link className="about-button about-button-primary" to="/courses">EXPLORE OUR PROGRAMS</Link>
              <Link className="about-button about-button-secondary" to="/contact">PARTNER WITH US</Link>
            </div>
          </motion.div>
          <motion.div className="about-image-frame" {...revealProps('right', 0.12, reduceMotion)}>
            <img src={innovationImage} alt="Innovation project with a solar-powered robot and renewable energy models" loading="lazy" />
          </motion.div>
        </div>
      </section>

      <section className="about-section about-core-section">
        <div className="about-container">
          <motion.div className="about-section-heading" {...revealProps('left', 0, reduceMotion)}>
            <h2>OUR CORE AREAS</h2>
          </motion.div>
          <div className="about-core-grid">
            {coreAreas.map(({ title, Icon }, index) => (
              <motion.article
                className="about-core-card"
                key={title}
                whileHover={reduceMotion ? undefined : { y: -3 }}
                {...revealProps(index % 2 === 0 ? 'left' : 'right', index * 0.08, reduceMotion)}
              >
                <Icon className="about-card-icon" aria-hidden="true" strokeWidth={1.8} />
                <h3>{title}</h3>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-practical-section">
        <div className="about-container">
          <motion.div className="about-practical-intro" {...revealProps('left', 0, reduceMotion)}>
            <p className="about-eyebrow about-eyebrow-light">PRACTICAL LEARNING</p>
            <h2>Learn by Building</h2>
            <p>At Karpanai Technologies, technology education is not limited to textbooks and theory.</p>
            <p>Our learning methodology focuses on:</p>
          </motion.div>
          <ol className="about-learning-grid">
            {learningSteps.map((step, index) => (
              <motion.li
                className="about-learning-step"
                key={step.title}
                {...revealProps(index % 2 === 0 ? 'left' : 'right', index * 0.08, reduceMotion)}
              >
                <span className="about-step-number">{String(index + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </motion.li>
            ))}
          </ol>
          <motion.p className="about-learning-sequence" {...revealProps('right', 0.12, reduceMotion)}>
            Discover → Explore → Build → Test → Solve → Create
          </motion.p>
        </div>
      </section>

      <section className="about-section about-why-section">
        <div className="about-container about-why-layout">
          <motion.div className="about-why-visual" {...revealProps('left', 0, reduceMotion)}>
            <img src={agenticAiImage} alt="Agentic AI workflow on a computer beside a robotics arm" loading="lazy" />
          </motion.div>
          <motion.div className="about-why-content" {...revealProps('right', 0.12, reduceMotion)}>
          <motion.div className="about-section-heading" {...revealProps('right', 0, reduceMotion)}>
            <h2>WHY KARPANAI?</h2>
          </motion.div>
          <div className="about-benefit-grid">
            {benefits.map(({ title, Icon }, index) => (
              <motion.article
                className="about-benefit-card"
                key={title}
                whileHover={reduceMotion ? undefined : { y: -3 }}
                {...revealProps(index % 2 === 0 ? 'left' : 'right', index * 0.08, reduceMotion)}
              >
                <Icon className="about-card-icon" aria-hidden="true" strokeWidth={1.8} />
                <h3>{title}</h3>
              </motion.article>
            ))}
          </div>
          </motion.div>
        </div>
      </section>

      <section className="about-section about-serve-section">
        <div className="about-container">
          <motion.div className="about-section-heading" {...revealProps('left', 0, reduceMotion)}>
            <h2>WHO WE SERVE</h2>
          </motion.div>
          <div className="about-audience-grid">
            {audiences.map(({ title, Icon }, index) => (
              <motion.article
                className="about-audience-card"
                key={title}
                whileHover={reduceMotion ? undefined : { y: -3 }}
                {...revealProps(index % 2 === 0 ? 'left' : 'right', index * 0.08, reduceMotion)}
              >
                <Icon className="about-card-icon" aria-hidden="true" strokeWidth={1.8} />
                <h3>{title}</h3>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-philosophy-section">
        <motion.div className="about-container" {...revealProps('left', 0, reduceMotion)}>
          <p className="about-eyebrow about-eyebrow-light">LEARNING PHILOSOPHY</p>
          <h2>"Don't Just Learn Technology.<br />Understand It. Build With It."</h2>
        </motion.div>
      </section>

      <section className="about-section about-vision-section">
        <div className="about-container about-two-column about-vision-grid">
          <motion.div className="about-vision-copy" {...revealProps('left', 0, reduceMotion)}>
            <p className="about-eyebrow">OUR VISION</p>
            <h2>Building a Generation of Technology Creators</h2>
          </motion.div>
          <motion.div className="about-image-frame about-vision-image" {...revealProps('right', 0.12, reduceMotion)}>
            <img src={iotElectronicsImage} alt="IoT electronics project with a microcontroller, sensors and jumper wires" loading="lazy" />
          </motion.div>
        </div>
      </section>

      <section className="about-cta-section">
        <div className="about-container about-cta-actions">
          <MotionLink
            className="about-button about-button-cta-primary"
            to="/courses"
            {...revealProps('left', 0, reduceMotion)}
          >
            Explore Courses
          </MotionLink>
          <MotionLink
            className="about-button about-button-cta-secondary"
            to="/contact"
            {...revealProps('right', 0.12, reduceMotion)}
          >
            Contact Us
          </MotionLink>
        </div>
      </section>
    </div>
  );
}