import { Link } from 'react-router-dom';

import heroImg from '../assets/images/hero-illustration.jpg';
import aiImg from '../assets/images/course-ai.jpg';
import robotImg from '../assets/images/course-robot.jpg';
import droneImg from '../assets/images/course-drone.jpg';
import iotImg from '../assets/images/course-iot.jpg';
import visionImg from '../assets/images/course-vision.jpg';
import spaceImg from '../assets/images/course-space.jpg';

const storyCards = [
  {
    id: '01',
    title: 'Learn',
    blurb: 'AI foundations for curious minds and emerging builders.',
    image: aiImg,
  },
  {
    id: '02',
    title: 'Build',
    blurb: 'Robotics and electronics turned into working prototypes.',
    image: robotImg,
  },
  {
    id: '03',
    title: 'Create',
    blurb: 'Ideas become experiences that solve real-world problems.',
    image: droneImg,
  },
];

const courseTracks = [
  { name: 'AI + Robotics', image: robotImg },
  { name: 'Drone Technology', image: droneImg },
  { name: 'AI Creator', image: aiImg },
  { name: 'IoT Smart Home', image: iotImg },
  { name: 'Computer Vision', image: visionImg },
  { name: 'Space & Satellite', image: spaceImg },
];

const philosophyCards = [
  { word: 'Learn', image: aiImg },
  { word: 'Build', image: robotImg },
  { word: 'Create', image: droneImg },
];

export default function About() {
  return (
    <>
      <div className="about-page">
        <section className="about-hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">About Karpanai</span>
              <h1>
                Where imagination<br />
                meets technology
              </h1>
              <p>
                Building the next generation of innovators through AI-powered learning.
              </p>
              <div className="hero-actions">
                <Link to="/courses" className="primary-btn">
                  Explore Courses
                </Link>
                <Link to="/contact" className="secondary-btn">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="hero-visual-wrap">
              <div className="hero-visual">
                <img src={heroImg} alt="Student learning with AI technology" />
                <div className="hero-overlay">
                  <span>AI LAB</span>
                  <span>ROBOTICS</span>
                  <span>SPACE</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="story-section">
          <div className="container">
            <div className="section-header">
              <span className="section-kicker">Learning Beyond the Classroom</span>
            </div>

            <div className="story-grid">
              {storyCards.map((card) => (
                <article key={card.id} className="story-card">
                  <div className="story-index">{card.id}</div>
                  <div className="story-image-wrap">
                    <img src={card.image} alt={card.title} />
                  </div>
                  <div className="story-text">
                    <h3>{card.title}</h3>
                    <p>{card.blurb}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="showcase-section">
          <div className="container">
            <div className="section-header center">
              <span className="section-kicker">AI Education</span>
              <h2>Technology is better when you build it.</h2>
            </div>

            <div className="showcase-panel">
              <img src={robotImg} alt="Students working on robotics" />
              <div className="showcase-overlay">
                <span>Neural AI</span>
                <span>Vision</span>
                <span>Robotics</span>
                <span>IoT</span>
              </div>
            </div>
          </div>
        </section>

        <section className="tracks-section">
          <div className="container">
            <div className="section-header center">
              <span className="section-kicker">Our Paths</span>
              <h2>Six future-ready learning tracks.</h2>
            </div>

            <div className="tracks-grid">
              {courseTracks.map((track) => (
                <article key={track.name} className="track-card">
                  <div className="track-image">
                    <img src={track.image} alt={track.name} />
                  </div>
                  <div className="track-copy">
                    <h3>{track.name}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="philosophy-section">
          <div className="container">
            <div className="philosophy-grid">
              {philosophyCards.map((card) => (
                <div key={card.word} className="statement-card">
                  <img src={card.image} alt={card.word} />
                  <h3>{card.word}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="container">
            <div className="cta-panel">
              <div className="cta-glow" />
              <div className="cta-copy">
                <span className="section-kicker light">Start your journey</span>
                <h2>Your Future Starts Here.</h2>
                <p>Learn. Build. Create.</p>
                <Link to="/courses" className="primary-btn light-btn">
                  Explore Courses →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');

        .about-page {
          background: #f6f9ff;
          color: #0f172a;
          font-family: 'Inter', 'Segoe UI', sans-serif;
        }

        .about-page h1,
        .about-page h2,
        .about-page h3,
        .about-page .eyebrow,
        .about-page .section-kicker,
        .about-page .story-index,
        .about-page .primary-btn,
        .about-page .secondary-btn,
        .about-page .hero-overlay span,
        .about-page .showcase-overlay span {
          font-family: 'Audiowide', 'Segoe UI', sans-serif;
          letter-spacing: 0.04em;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .about-hero {
          padding: 92px 0 64px;
          background: linear-gradient(180deg, #f9fbff 0%, #eef6ff 100%);
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.05fr 1.1fr;
          gap: 32px;
          align-items: center;
        }

        .eyebrow,
        .section-kicker {
          display: inline-block;
          font-size: 0.72rem;
          text-transform: uppercase;
          color: #2563eb;
          letter-spacing: 0.18em;
        }

        .hero-copy h1 {
          margin: 18px 0 14px;
          font-size: clamp(2.7rem, 4.8vw, 4.8rem);
          line-height: 0.96;
          letter-spacing: -0.05em;
          color: #0f172a;
        }

        .hero-copy p {
          max-width: 560px;
          color: #475569;
          font-size: 1.04rem;
          line-height: 1.7;
          margin-bottom: 28px;
        }

        .hero-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .primary-btn,
        .secondary-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 50px;
          padding: 0 24px;
          border-radius: 999px;
          font-size: 0.88rem;
          font-weight: 700;
          text-decoration: none;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .primary-btn {
          background: linear-gradient(135deg, #1d4ed8, #2563eb);
          color: #fff;
          box-shadow: 0 12px 24px rgba(37, 99, 235, 0.2);
        }

        .secondary-btn {
          background: rgba(255, 255, 255, 0.8);
          color: #1d4ed8;
          border: 1px solid rgba(37, 99, 235, 0.28);
        }

        .primary-btn:hover,
        .secondary-btn:hover {
          transform: translateY(-2px);
        }

        .hero-visual-wrap {
          display: flex;
          justify-content: center;
        }

        .hero-visual {
          position: relative;
          width: min(100%, 560px);
          border-radius: 30px;
          overflow: hidden;
          background: #0b1f3a;
          border: 1px solid rgba(191, 219, 254, 0.2);
          box-shadow: 0 26px 60px rgba(15, 23, 42, 0.12);
        }

        .hero-visual img {
          display: block;
          width: 100%;
          height: 540px;
          object-fit: cover;
        }

        .hero-overlay {
          position: absolute;
          left: 20px;
          right: 20px;
          bottom: 18px;
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .hero-overlay span {
          display: inline-flex;
          align-items: center;
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(10, 22, 41, 0.65);
          border: 1px solid rgba(191, 219, 254, 0.3);
          color: #eff6ff;
          font-size: 0.62rem;
        }

        .story-section,
        .tracks-section,
        .philosophy-section {
          padding: 72px 0;
        }

        .section-header {
          margin-bottom: 28px;
        }

        .section-header.center {
          text-align: center;
        }

        .section-header h2 {
          margin-top: 12px;
          font-size: clamp(2rem, 4vw, 3.1rem);
          line-height: 1.08;
          letter-spacing: -0.05em;
          color: #0f172a;
        }

        .story-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }

        .story-card {
          background: #fff;
          border: 1px solid rgba(148, 163, 184, 0.18);
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 14px 28px rgba(15, 23, 42, 0.04);
        }

        .story-index {
          display: inline-flex;
          margin: 18px 18px 0;
          padding: 8px 10px;
          border-radius: 999px;
          background: #dbeafe;
          color: #1d4ed8;
          font-size: 0.7rem;
          font-weight: 700;
        }

        .story-image-wrap {
          padding: 16px 18px 0;
        }

        .story-image-wrap img {
          width: 100%;
          height: 240px;
          object-fit: cover;
          border-radius: 18px;
          display: block;
        }

        .story-text {
          padding: 18px;
        }

        .story-text h3 {
          font-size: 1.2rem;
          margin-bottom: 8px;
          color: #0f172a;
        }

        .story-text p {
          font-size: 0.9rem;
          line-height: 1.7;
          color: #475569;
        }

        .showcase-section {
          padding: 30px 0 76px;
        }

        .showcase-panel {
          position: relative;
          overflow: hidden;
          border-radius: 30px;
          border: 1px solid rgba(148, 163, 184, 0.2);
          background: #0b1f3a;
          box-shadow: 0 18px 40px rgba(15, 23, 42, 0.06);
        }

        .showcase-panel img {
          display: block;
          width: 100%;
          height: 520px;
          object-fit: cover;
        }

        .showcase-overlay {
          position: absolute;
          left: 24px;
          right: 24px;
          bottom: 22px;
          display: flex;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .showcase-overlay span {
          display: inline-flex;
          align-items: center;
          padding: 9px 12px;
          border-radius: 999px;
          background: rgba(15, 23, 42, 0.62);
          border: 1px solid rgba(191, 219, 254, 0.28);
          color: #eff6ff;
          font-size: 0.64rem;
        }

        .tracks-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }

        .track-card {
          background: #fff;
          border: 1px solid rgba(148, 163, 184, 0.18);
          border-radius: 22px;
          overflow: hidden;
          box-shadow: 0 10px 24px rgba(15, 23, 42, 0.04);
        }

        .track-image img {
          display: block;
          width: 100%;
          height: 210px;
          object-fit: cover;
        }

        .track-copy {
          padding: 18px 18px 20px;
        }

        .track-copy h3 {
          font-size: 1.06rem;
          color: #0f172a;
        }

        .philosophy-section {
          background: linear-gradient(180deg, #f2f8ff 0%, #edf5ff 100%);
        }

        .philosophy-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }

        .statement-card {
          position: relative;
          overflow: hidden;
          min-height: 300px;
          border-radius: 26px;
          border: 1px solid rgba(148, 163, 184, 0.18);
          box-shadow: 0 12px 24px rgba(15, 23, 42, 0.04);
        }

        .statement-card img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: saturate(0.9) brightness(0.72);
        }

        .statement-card h3 {
          position: absolute;
          left: 24px;
          bottom: 20px;
          color: #ffffff;
          font-size: clamp(2rem, 4vw, 3rem);
          line-height: 1;
          letter-spacing: -0.05em;
          text-shadow: 0 6px 18px rgba(15, 23, 42, 0.5);
        }

        .final-cta {
          padding: 20px 0 90px;
        }

        .cta-panel {
          position: relative;
          overflow: hidden;
          border-radius: 30px;
          min-height: 300px;
          background: linear-gradient(135deg, #0b1830 0%, #0d2344 48%, #133d70 100%);
          border: 1px solid rgba(191, 219, 254, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .cta-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 50%, rgba(96, 165, 250, 0.2), transparent 42%);
        }

        .cta-copy {
          position: relative;
          z-index: 1;
          max-width: 620px;
          padding: 22px;
        }

        .section-kicker.light {
          color: #bfdbfe;
        }

        .cta-copy h2 {
          margin: 14px 0 12px;
          font-size: clamp(2.3rem, 4vw, 4rem);
          line-height: 1;
          letter-spacing: -0.05em;
          color: #fff;
        }

        .cta-copy p {
          margin-bottom: 26px;
          color: rgba(191, 219, 254, 0.9);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-size: 0.86rem;
        }

        .light-btn {
          background: linear-gradient(135deg, #eff6ff, #dbeafe);
          color: #0f172a;
          box-shadow: 0 12px 30px rgba(96, 165, 250, 0.22);
        }

        @media (max-width: 980px) {
          .hero-grid,
          .story-grid,
          .tracks-grid,
          .philosophy-grid {
            grid-template-columns: 1fr 1fr;
          }

          .hero-grid {
            grid-template-columns: 1fr;
          }

          .hero-copy {
            text-align: center;
          }

          .hero-actions {
            justify-content: center;
          }
        }

        @media (max-width: 700px) {
          .story-grid,
          .tracks-grid,
          .philosophy-grid {
            grid-template-columns: 1fr;
          }

          .hero-visual img,
          .showcase-panel img {
            height: 420px;
          }

          .section-header h2 {
            line-height: 1.1;
          }
        }
      `}</style>
    </>
  );
}
