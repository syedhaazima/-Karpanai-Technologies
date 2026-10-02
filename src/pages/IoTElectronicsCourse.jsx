import { motion } from 'framer-motion';
import { Boxes, CircuitBoard, Cog, Cpu, Lightbulb, Radio, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';
import CourseBackLink from '../components/CourseBackLink';
import iotImage from '../assets/iot.png';
import './IoTElectronicsCourse.css';

const learningAreas = [
  { title: 'Basic Electronics', Icon: CircuitBoard },
  { title: 'Sensors', Icon: Radio },
  { title: 'Circuits', Icon: Cpu },
  { title: 'Microcontrollers', Icon: Cpu },
  { title: 'Embedded Systems', Icon: Workflow },
  { title: 'IoT Devices', Icon: Radio },
  { title: 'Connected Systems', Icon: Boxes },
  { title: 'Automation', Icon: Cog },
  { title: 'Smart Technology Projects', Icon: Lightbulb },
];

export default function IoTElectronicsCourse() {
  return (
    <div className="iot-course-page">
      <section className="iot-hero">
        <div className="iot-container iot-hero-grid">
          <motion.div
            className="iot-hero-copy"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <CourseBackLink />
            <p className="iot-eyebrow">IOT &amp; ELECTRONICS</p>
            <h1>Connect Ideas to the Real World</h1>
            <p className="iot-intro">
              The Internet of Things connects physical devices, sensors and software to create intelligent systems.
            </p>
            <p className="iot-intro">
              Our IoT and electronics learning programs help students understand how connected technology works through practical projects.
            </p>
          </motion.div>

          <motion.div
            className="iot-hero-visual"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
          >
            <img src={iotImage} alt="IoT electronics project with a microcontroller, sensors and jumper wires" />
          </motion.div>
        </div>
      </section>

      <section className="iot-areas-section" id="iot-learning-areas">
        <div className="iot-container">
          <div className="iot-section-heading">
            <h2>LEARNING AREAS</h2>
          </div>
          <div className="iot-area-grid">
            {learningAreas.map(({ title, Icon }, index) => (
              <motion.article
                className="iot-area-card"
                key={title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35, delay: index % 4 * 0.05 }}
              >
                <Icon className="iot-area-icon" aria-hidden="true" strokeWidth={1.8} />
                <h3>{title}</h3>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="iot-practical-section">
        <div className="iot-container iot-practical-callout">
          <p className="iot-eyebrow">PRACTICAL LEARNING</p>
          <p className="iot-practical-statement">
            Our IoT and electronics learning programs help students understand how connected technology works through practical projects.
          </p>
        </div>
      </section>

      <section className="iot-cta-section">
        <div className="iot-container iot-cta-inner">
          <Link to="/courses" className="iot-cta-button">EXPLORE IOT &amp; ELECTRONICS</Link>
          <CourseBackLink className="course-back-link-bottom" />
        </div>
      </section>
    </div>
  );
}