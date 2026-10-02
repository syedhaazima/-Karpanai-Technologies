import { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logoImg from '../assets/logokarpanai.png';
import '../styles/Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleNav = (path) => { setMenuOpen(false); navigate(path); };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>

        {/* ── Logo ── */}
        <Link to="/" className="navbar-logo">
          <img src={logoImg} alt="Karpanai Technologies" className="navbar-logo-img" />
        </Link>

        {/* ── Desktop links ── */}
        <ul className="nav-links">
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/courses">Courses</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li className="nav-cta"><NavLink to="/contact">Contact</NavLink></li>
        </ul>

        {/* ── Hamburger ── */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* ── Mobile menu ── */}
      <div id="mobile-navigation" className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-logo">
          <img src={logoImg} alt="Karpanai Technologies" className="navbar-logo-img" />
        </div>
        <button onClick={() => handleNav('/')}>Home</button>
        <button onClick={() => handleNav('/courses')}>Courses</button>
        <button onClick={() => handleNav('/about')}>About</button>
        <button onClick={() => handleNav('/contact')}>Contact</button>
      </div>
    </>
  );
}
