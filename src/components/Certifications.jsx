import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiChevronLeft, FiChevronRight, FiAward } from 'react-icons/fi';

const CERTS = [
  {
    icon: '⚛️',
    iconColor: 'blue',
    title: 'React.js Development Certification',
    org: 'NamasteDev',
    skills: ['React Hooks', 'State Management', 'Component Design'],
  },
  {
    icon: '🌐',
    iconColor: 'purple',
    title: 'Full-Stack Web Development',
    org: 'MERN Stack Bootcamp',
    skills: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
  },
  {
    icon: '💻',
    iconColor: 'emerald',
    title: 'Frontend Developer Certification',
    org: 'Web Dev Academy',
    skills: ['React.js', 'JavaScript', 'Redux', 'Design Principles'],
  },
  {
    icon: '🟢',
    iconColor: 'Green',
    title: 'SQL Certificate',
    org: 'HackerRank',
    skills: ['Joins','SQL Commands', 'Tables'],
  },
  {
    icon: '🏢',
    iconColor: 'pink',
    title: 'Frontend Developer Internship Completion Certificate',
    org: 'Slash Mark',
    year: '2024',
    skills: ['React.js', 'UI Development', 'Team Collaboration'],
  },
  {
    icon: '🐍',
    iconColor: 'Red',
    title: 'Python Completion Certificate',
    org: 'HackerRank',
    skills: ['OOP', 'Data Structures', 'Algorithms'],
  },
  {
    icon: '',
    iconColor: '',
    title: '',
    org: '',
    skills: [],
  },
  // {
  //   icon: '📱',
  //   iconColor: 'blue',
  //   title: 'Flutter & Dart Development',
  //   org: 'Mobile Dev Institute',
  //   year: '2024',
  //   skills: ['Flutter', 'Dart', 'BLoC', 'REST API'],
  // },
  // {
  //   icon: '☕',
  //   iconColor: 'purple',
  //   title: 'Java Programming Fundamentals',
  //   org: 'Java Academy',
  //   year: '2023',
  //   skills: ['OOP', 'Data Structures', 'JDBC', 'Spring Boot Basics'],
  // },
];

export default function Certifications() {
  const [current, setCurrent] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  const trackRef = useRef(null);

  const visible = 3;
  const maxIndex = CERTS.length - visible;

  const prev = () => setCurrent(c => Math.max(0, c - 1));
  const next = () => setCurrent(c => Math.min(maxIndex, c + 1));

  return (
    <section className="section" id="certifications" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag">✦ Credentials</div>
          <h2 className="section-title">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="section-subtitle">
            Verified credentials demonstrating continuous learning and skill development.
          </p>
        </motion.div>

        <motion.div
          className="cert-carousel"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          <div style={{ overflow: 'hidden' }}>
            <motion.div
              ref={trackRef}
              className="cert-track"
              animate={{ x: `-${current * (300 + 24)}px` }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              {CERTS.map((cert, i) => (
                <motion.div
                  key={i}
                  className={`cert-card glass glass-hover`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.1 + i * 0.08 }}
                >
                  <div className={`cert-icon ${cert.iconColor}`}>
                    {cert.icon}
                  </div>
                  <div>
                    <div className="cert-title">{cert.title}</div>
                    <div className="cert-org">{cert.org} · {cert.year}</div>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {cert.skills.map(s => (
                      <span key={s} className="tech-tag" style={{ fontSize: '11px' }}>{s}</span>
                    ))}
                  </div>
                  <div className="cert-badge">
                    <FiAward size={12} /> Certified
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Controls */}
          <div className="carousel-controls">
            <button className="carousel-btn" onClick={prev} disabled={current === 0}>
              <FiChevronLeft />
            </button>

            <div className="carousel-dots">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <div
                  key={i}
                  className={`carousel-dot ${current === i ? 'active' : ''}`}
                  onClick={() => setCurrent(i)}
                />
              ))}
            </div>

            <button className="carousel-btn" onClick={next} disabled={current === maxIndex}>
              <FiChevronRight />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
