import { motion } from 'framer-motion';
import { Aperture, Box, Camera, Eye, Glasses, Image, Scan, ScanFace, Search, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';
import CourseBackLink from '../components/CourseBackLink';
import visionImage from '../assets/computervision.png';
import './ComputerVisionCourse.css';

const learningAreas = [
  { title: 'Computer Vision Fundamentals', Icon: Eye },
  { title: 'Digital Image Processing', Icon: Image },
  { title: 'Image Recognition', Icon: Scan },
  { title: 'Object Detection', Icon: Search },
  { title: 'Face & Gesture Recognition', Icon: ScanFace },
  { title: '3D Vision', Icon: Box },
  { title: 'Augmented Reality', Icon: Aperture },
  { title: 'Virtual Reality', Icon: Glasses },
  { title: 'Camera & Vision Sensors', Icon: Camera },
  { title: 'AI-Based Visual Applications', Icon: Workflow },
];

const practicalProjects = [
  'Object Recognition',
  'Image Classification',
  'AR Visual Experiences',
  '3D Object Tracking',
  'Smart Camera Applications',
];

const courseAudience = [
  'Students interested in AI & technology',
  'Future engineers',
  'Robotics learners',
  'Creative technology enthusiasts',
  'Students interested in AR/VR and 3D technologies',
];

const learningOutcomes = [
  'Understand how computers process visual information',
  'Recognize objects',
  'Work with cameras and sensors',
  'Build basic intelligent visual applications',
];

export default function ComputerVisionCourse() {
  return (
    <div className="computer-vision-course-page">
      <section className="computer-vision-hero">
        <div className="computer-vision-container computer-vision-hero-grid">
          <motion.div
            className="computer-vision-hero-copy"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <CourseBackLink />
            <p className="computer-vision-eyebrow">COMPUTER VISION ENGINEERING</p>
            <h1>See • Recognize • Understand the Computer</h1>
            <p className="computer-vision-intro">
              Computer Vision enables computers to understand and interact with the visual world. Students explore how cameras, images, sensors and intelligent systems can be used to recognize objects, understand environments and create interactive technologies.
            </p>
          </motion.div>

          <motion.div
            className="computer-vision-hero-visual"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
          >
            <img src={visionImage} alt="Computer vision camera tracking vehicles with object-detection boxes" />
          </motion.div>
        </div>
      </section>

      <section className="computer-vision-areas-section" id="computer-vision-learning-areas">
        <div className="computer-vision-container">
          <div className="computer-vision-section-heading">
            <h2>COMPUTER VISION LEARNING AREAS</h2>
          </div>
          <div className="computer-vision-area-grid">
            {learningAreas.map(({ title, Icon }, index) => (
              <motion.article
                className="computer-vision-area-card"
                key={title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35, delay: index % 4 * 0.05 }}
              >
                <Icon className="computer-vision-area-icon" aria-hidden="true" strokeWidth={1.8} />
                <h3>{title}</h3>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="computer-vision-practical-section">
        <div className="computer-vision-container">
          <div className="computer-vision-callout">
            <p className="computer-vision-eyebrow">PRACTICAL LEARNING</p>
            <p className="computer-vision-callout-text">
              Students learn by building small computer vision and interactive technology projects.
            </p>
            <div className="computer-vision-project-grid">
              {practicalProjects.map((project, index) => (
                <div className="computer-vision-project" key={project}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <p>{project}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="computer-vision-audience-section">
        <div className="computer-vision-container">
          <div className="computer-vision-section-heading">
            <h2>WHO IS THIS COURSE FOR?</h2>
          </div>
          <div className="computer-vision-audience-grid">
            {courseAudience.map((audience, index) => (
              <article className="computer-vision-audience-card" key={audience}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{audience}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="computer-vision-outcomes-section">
        <div className="computer-vision-container">
          <div className="computer-vision-section-heading">
            <h2>LEARNING OUTCOMES</h2>
          </div>
          <div className="computer-vision-outcomes-grid">
            {learningOutcomes.map((outcome, index) => (
              <article className="computer-vision-outcome-card" key={outcome}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{outcome}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="computer-vision-cta-section">
        <div className="computer-vision-container computer-vision-cta-inner">
          <Link to="/courses" className="computer-vision-cta-button">Explore Computer Vision</Link>
        </div>
      </section>
    </div>
  );
}