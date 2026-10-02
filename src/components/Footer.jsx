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
                    <path d="M12 2.1C6.7 2.1 2.4 6.1 2.4 11.1c0 1.8.5 3.5 1.4 5l-1.3 4.4 4.6-1.3c1.4.9 3 1.4 4.9 1.4 5.3 0 9.6-4 9.6-9 0-5-4.3-8.9-9.6-8.9Zm5.1 12.3c-.2.5-.9 1-1.4 1.1-.3.1-.7.1-1.7-.3-.4-.2-.9-.5-1.6-.9-.9-.5-1.7-1.3-2.3-2.2-.3-.4-.5-.9-.5-1.5 0-.4.1-.7.5-1 .1-.1.3-.2.5-.2h.4c.1 0 .3 0 .4.3l.4 1.1c.1.3 0 .4-.1.6l-.3.4c-.2.2-.1.4.1.6.3.3.7.6 1.1.9.5.4.9.7 1.3.9.4.2.6.1.8-.1l.5-.6c.2-.3.4-.3.7-.2l1.1.5c.3.1.4.3.4.5.1.4.1.8-.1 1.2Z" fill="#25D366"/>
                    <path d="M14.1 8.8c-.3-.4-.7-.6-1.2-.7-.3-.1-.6-.1-.8-.1-.4.1-.7.3-.9.6-.2.3-.3.7-.2 1.1.1.4.4.7.8 1 .3.2.5.4.7.6.6.4 1.1.9 1.4 1.5.2.4.2.9.1 1.3-.1.4-.4.7-.7 1-.4.3-.8.5-1.3.4-.4 0-.8-.2-1.1-.5l-.5-.5-.8.2.6.8c.5.7 1.2 1.1 2 1.3.8.2 1.6.2 2.4-.1.7-.2 1.3-.7 1.6-1.3.4-.7.5-1.5.3-2.2-.2-.7-.7-1.3-1.3-1.8l-.2-.2Z" fill="#fff"/>
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
