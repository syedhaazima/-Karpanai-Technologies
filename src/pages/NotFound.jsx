import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', textAlign: 'center',
      background: '#020617', padding: '24px',
    }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div style={{ fontSize: '6rem', marginBottom: 24, animation: 'float 4s ease-in-out infinite' }}>🌌</div>
        <h1 style={{
          fontFamily: "'Orbitron', sans-serif",
          fontSize: 'clamp(3rem, 10vw, 6rem)',
          fontWeight: 900, color: '#0ea5e9',
          textShadow: '0 0 40px rgba(14,165,233,0.5)',
          marginBottom: 8,
        }}>
          404
        </h1>
        <p style={{
          fontFamily: "'Orbitron', sans-serif",
          fontSize: '1rem', color: 'rgba(255,255,255,0.5)',
          letterSpacing: '0.15em', marginBottom: 40,
        }}>
          This page drifted into deep space.
        </p>
        <Link to="/" className="btn-primary">
          <span>← Return Home</span>
        </Link>
      </motion.div>
    </div>
  );
}
