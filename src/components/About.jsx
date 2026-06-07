import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedCounter from './AnimatedCounter';

const COUNTERS = [
  { value: 5, suffix: '+', label: 'Projects Built', color: 'var(--accent-blue)', emoji: '🚀' },
  { value: 15, suffix: '+', label: 'Technologies', color: 'var(--accent-purple)', emoji: '⚡' },
  { value: 1, suffix: '', label: 'Internship', color: 'var(--accent-emerald)', emoji: '🏢' },
  { value: 100, suffix: '%', label: 'Dedication', color: '#EC4899', emoji: '❤️' },
];

const TIMELINE = [
  { emoji: '🎓', title: 'Started B.Tech in Computer Science', desc: 'Built a strong foundation in programming, algorithms, and web development.', year: '2020 - 2024' },
  { emoji: '💻', title: 'Learned React.js & JavaScript', desc: 'Mastered modern frontend development and built multiple projects.'  },
  { emoji: '🚀', title: 'Frontend Developer Intern at Slash Mark', desc: 'Built responsive UIs, reusable components, and improved web performance.' },
  { emoji: '⚡', title: 'MERN Stack & Full-Stack Journey', desc: 'Building full-stack applications and learning Java backend development.'},
  { emoji: '📱', title: 'Explored Flutter & Dart', desc: 'Built cross-platform mobile apps with beautiful UIs and state management.' },
];

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag">✦ About Me</div>
          <h2 className="section-title">
            The Developer <span className="gradient-text">Behind The Code</span>
          </h2>
          <p className="section-subtitle">
            Passionate about crafting digital experiences that blend aesthetics with functionality.
          </p>
        </motion.div>

        <div className="about-grid">
          {/* LEFT — Image + Badge */}
          <motion.div
            className="about-image-wrapper"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <div className="about-image-card">
              <span style={{ position: 'relative', zIndex: 1, fontSize: '80px' }}>👨‍💻</span>
              <div className="about-float-badge">
                <div className="value">2+</div>
                <div className="label">Years of Learning</div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Content */}
          <div className="about-content">
            <motion.p
              className="about-text"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              I'm <strong style={{ color: 'var(--text-primary)' }}>Vamsi Krishna Paluru</strong>, a Frontend
              Developer transitioning into Full-Stack Development. My journey started with a curiosity
              about how websites work, and has grown into a passion for building scalable, beautiful
              web applications. I specialize in React.js and the MERN Stack, while expanding into
              Java and Flutter development.
            </motion.p>

            {/* Animated Counters */}
            <motion.div
              className="about-counters"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              {COUNTERS.map((c, i) => (
                <motion.div
                  key={c.label}
                  className="counter-card glass glass-hover"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.35 + i * 0.08, type: 'spring', bounce: 0.3 }}
                >
                  <div style={{ fontSize: '22px', marginBottom: '4px' }}>{c.emoji}</div>
                  <div className="counter-value" style={{ color: c.color }}>
                    {inView && (
                      <AnimatedCounter end={c.value} duration={2000} suffix={c.suffix} />
                    )}
                  </div>
                  <div className="counter-label">{c.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Timeline */}
            <motion.div
              className="about-timeline"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              {TIMELINE.map((item, i) => (
                <motion.div
                  key={i}
                  className="timeline-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <div className="timeline-dot">{item.emoji}</div>
                  <div className="timeline-content">
                    <h4>
                      {item.title}{' '}
                      <span style={{ color: 'var(--accent-blue)', fontSize: '12px', fontWeight: 600 }}>
                        {item.year}
                      </span>
                    </h4>
                    <p>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
