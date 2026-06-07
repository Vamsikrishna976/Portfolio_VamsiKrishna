import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCalendar, FiMapPin, FiBookOpen } from 'react-icons/fi';

const RELEVANT_COURSES = [
  'Data Structures & Algorithms',
  'Web Technologies',
  'Database Management',
  'Object-Oriented Programming',
  'Software Engineering',
  'Computer Networks',
];

export default function Education() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="section" id="education" ref={ref} style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(16,185,129,0.02) 50%, transparent 100%)' }}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag">✦ Education</div>
          <h2 className="section-title">
            Academic <span className="gradient-text">Background</span>
          </h2>
          <p className="section-subtitle">
            Building a solid theoretical foundation to complement practical development skills.
          </p>
        </motion.div>

        <motion.div
          className="education-card glass"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7, type: 'spring', bounce: 0.2 }}
          style={{ maxWidth: 700, margin: '0 auto' }}
        >
          <div className="edu-icon">🎓</div>
          <div className="edu-details">
            <h3>Bachelor of Technology</h3>
            <div style={{ fontSize: '16px', fontWeight: 700, marginBottom: '2px' }}>
              Computer Science & Engineering
            </div>
            <div className="edu-university">Audisankara University · Andhra Pradesh, India</div>

            <div className="edu-meta">
              <div className="edu-meta-item">
                <FiCalendar size={14} />
                <span>2020 – 2024</span>
              </div>
              <div className="edu-meta-item">
                <FiMapPin size={14} />
                <span>Andhra Pradesh, India</span>
              </div>
              <div className="edu-meta-item">
                <FiBookOpen size={14} />
                <span>CGPA: 7.5+</span>
              </div>
            </div>

            <div style={{ marginBottom: '12px', fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)' }}>
              Relevant Coursework
            </div>
            <div className="edu-courses">
              {RELEVANT_COURSES.map(c => (
                <span key={c} className="tech-tag">{c}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
