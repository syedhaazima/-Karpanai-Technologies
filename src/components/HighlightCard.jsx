import { motion } from 'framer-motion';
import logoImg from '../assets/images/logo.jpg';

/* Icon map using Unicode/emoji for zero dependencies */
const iconMap = {
  cpu:          '💻',
  zap:          null,
  eye:          '👁️',
  navigation:   '🧭',
  wind:         '💨',
  map:          '🗺️',
  shield:       '🛡️',
  camera:       '📷',
  image:        '🖼️',
  mic:          '🎙️',
  film:         '🎬',
  sparkles:     '✨',
  wifi:         '📡',
  thermometer:  '🌡️',
  home:         '🏠',
  cloud:        '☁️',
  aperture:     '🔭',
  search:       '🔍',
  users:        '👥',
  activity:     '📊',
  globe:        '🌐',
  radio:        '📻',
  target:       '🎯',
  telescope:    '🔭',
};

export default function HighlightCard({ highlight, accentColor, index = 0 }) {
  const icon = iconMap[highlight.icon] || '🔷';

  return (
    <motion.div
      className="highlight-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      whileHover={{ y: -4, borderColor: accentColor + '44' }}
      style={{ '--accent': accentColor }}
    >
      {/* Top bar */}
      <div
        className="highlight-card-top-bar"
        style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          height: '2px',
          background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
          opacity: 0,
          transition: 'opacity 0.3s ease',
        }}
      />

      <div
        className="highlight-icon"
        style={{
          background: accentColor + '18',
          border: `1px solid ${accentColor}33`,
          boxShadow: `0 0 16px ${accentColor}20`,
        }}
      >
        {highlight.icon === 'zap' ? (
          <img src={logoImg} alt="" className="highlight-icon-logo" />
        ) : icon}
      </div>

      <h4 className="highlight-title" style={{ color: '#0f172a' }}>
        {highlight.title}
      </h4>

      <p className="highlight-text">{highlight.text}</p>
    </motion.div>
  );
}
