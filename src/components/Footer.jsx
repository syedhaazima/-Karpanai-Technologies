import { Link } from 'react-router-dom';
import { courses } from '../data/courses';
import { contactDetails } from '../data/contact';
import logoImg from '../assets/images/logo.jpg';
import { MessageCircle } from 'lucide-react';
import '../styles/Footer.css';

const getCoursePath = (slug) => {
  if (slug === 'iot-smart-home') return '/courses/iot-electronics';
  if (slug === 'space-satellite') return '/courses/space-satellite-technology';
  return `/courses/${slug}`;
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo-wrap">
              <img src={logoImg} alt="Karpanai Technologies" className="footer-logo-img" />
            </div>
            <p className="footer-desc">
              Shaping tomorrow's technology leaders through immersive, hands-on learning experiences.
            </p>
          </div>

          {/* Quick links */}
          <div className="footer-col">
            <h4>Navigate</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Courses */}
          <div className="footer-col">
            <h4>Programs</h4>
            <ul>
              {courses.map((c) => (
                <li key={c.slug}>
                  <Link to={getCoursePath(c.slug)}>
                    {c.slug === 'iot-smart-home' ? 'IoT & Electronics' : c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a></li>
              <li className="footer-whatsapp-row">
                <a href={contactDetails.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  {contactDetails.phone}
                </a>
                <a
                  className="footer-whatsapp-icon"
                  href={contactDetails.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with Karpanai Technologies on WhatsApp"
                  title="WhatsApp"
                >
                  <MessageCircle size={18} aria-hidden="true" />
                </a>
              </li>
              <li><span className="footer-location">{contactDetails.location}</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} <span>Karpanai Technologies</span>. All rights reserved.
          </p>
          <p className="footer-copy">
            Built with <span>❤</span> for future innovators.
          </p>
        </div>
      </div>
    </footer>
  );
}
