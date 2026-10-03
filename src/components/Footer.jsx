import { Link } from 'react-router-dom';
import { courses } from '../data/courses';
import { contactDetails } from '../data/contact';
import logoImg from '../assets/logokarpanai.png';
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
                <a href={contactDetails.phoneCallUrl}>
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
                  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
                    <path
                      d="M7.5 18.2 5.2 19.3l1.2-2.3A7.7 7.7 0 1 1 18.8 12a7.6 7.6 0 0 1-11.3 6.2Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M9 9.5h6M9 12h4.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </a>
              </li>
              <li>
                <a href={contactDetails.secondaryPhoneCallUrl}>{contactDetails.secondaryPhone}</a>
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
