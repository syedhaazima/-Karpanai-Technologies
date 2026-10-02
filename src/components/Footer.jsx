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
                  <svg viewBox="0 0 32 32" width="18" height="18" aria-hidden="true" focusable="false">
                    <circle cx="16" cy="16" r="16" fill="#25D366" />
                    <path
                      fill="#ffffff"
                      d="M22.07 18.74c-.28-.14-1.64-.81-1.89-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.2-.44-2.29-1.41-.85-.75-1.42-1.67-1.59-1.95-.17-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.18-.28.28-.47.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.44-.46-.61-.46h-.52c-.18 0-.48.07-.73.34-.25.28-1.14 1.11-1.14 2.71 0 1.6 1.17 3.15 1.33 3.37.16.22 2.29 3.49 5.55 4.89.78.34 1.39.54 1.87.69.79.25 1.51.22 2.08.13.64-.1 1.94-.79 2.22-1.55.28-.76.28-1.4.2-1.53-.08-.14-.28-.22-.57-.36Z"
                    />
                    <path
                      fill="#ffffff"
                      d="M18.72 10.2a5.24 5.24 0 0 1 3.98 1.64 5.42 5.42 0 0 1 1.23 3.2c-.02 1.48-.75 2.76-2.04 3.58l-.02.01c-.93.57-1.6.87-2.53.95-.56.05-1.03.02-1.5-.15l-1.39-.53-.7.18.27.76.34.95c.08.23.15.46.05.69-.1.23-.46.43-1.15.58-.17.04-.34.06-.5.08-.32.03-.63-.03-.93-.15-.73-.29-1.1-.74-1.45-1.39-.39-.72-.59-1.41-.57-2.2.03-.59.24-1.14.51-1.64.35-.6.85-1.11 1.46-1.5.86-.55 1.86-.7 2.82-.44.2.06.39.16.56.26.17.1.31.1.45.03.14-.07.77-.44.95-.65.18-.21.36-.14.61-.09.24.05 1.48.7 1.73.82a.45.45 0 0 1 .18.46.65.65 0 0 1-.1.28c-.12.18-.31.3-.49.48-.18.18-.22.3-.11.52.11.22.32.48.49.69.28.35.57.73.74 1.16.15.38.22.82.09 1.2-.16.46-.53.72-.87.89-.43.22-.85.28-1.26.16-.4-.12-.7-.18-1.09-.3-.34-.1-.73-.03-1.08.18-.08.05-.15.11-.23.18-.16.13-.33.24-.58.2-.08-.01-.16-.04-.23-.08l-.44-.15-.52-.17c-.31-.11-.62-.22-.86-.41-.27-.22-.47-.48-.61-.82-.15-.36-.14-.74-.02-1.12.13-.4.52-.82.82-1.18.26-.3.55-.59.87-.84.42-.33.89-.56 1.39-.73.25-.09.49-.18.74-.25Z"
                    />
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
