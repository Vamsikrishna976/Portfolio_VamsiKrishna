import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedCounter from './AnimatedCounter';

const STATS = [
  { value: 5, suffix: '+', label: 'Projects Completed', icon: '🚀', gradient: 'linear-gradient(135deg, #3B82F6, #60A5FA)', bg: 'rgba(59,130,246,0.08)' },
  { value: 15, suffix: '+', label: 'Technologies Learned', icon: '⚡', gradient: 'linear-gradient(135deg, #8B5CF6, #A78BFA)', bg: 'rgba(139,92,246,0.08)' },
  { value: 1, suffix: '', label: 'Internship Experience', icon: '🏢', gradient: 'linear-gradient(135deg, #10B981, #34D399)', bg: 'rgba(16,185,129,0.08)' },
  { value: 500, suffix: '+', label: 'Lines of Code Daily', icon: '💻', gradient: 'linear-gradient(135deg, #EC4899, #F472B6)', bg: 'rgba(236,72,153,0.08)' },
  { value: 100, suffix: '%', label: 'Passion & Drive', icon: '❤️', gradient: 'linear-gradient(135deg, #F59E0B, #FBBF24)', bg: 'rgba(245,158,11,0.08)' },
  { value: 3, suffix: '', label: 'Active GitHub Repos', icon: '🐙', gradient: 'linear-gradient(135deg, #6366F1, #818CF8)', bg: 'rgba(99,102,241,0.08)' },
];

export default function Achievements() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section" id="achievements" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag">✦ Impact</div>
          <h2 className="section-title">
            By The <span className="gradient-text">Numbers</span>
          </h2>
          <p className="section-subtitle">
            Milestones and metrics that reflect my developer journey.
          </p>
        </motion.div>

        <div className="achievements-grid">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="achievement-card glass glass-hover"
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, type: 'spring', bounce: 0.3 }}
              whileHover={{ scale: 1.04, y: -6 }}
            >
              <div
                className="achievement-icon"
                style={{ background: stat.bg }}
              >
                {stat.icon}
              </div>

              <div
                className="achievement-value gradient-text"
                style={{ backgroundImage: stat.gradient }}
              >
                {inView && <AnimatedCounter end={stat.value} duration={2200} suffix={stat.suffix} />}
              </div>

              <div className="achievement-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
