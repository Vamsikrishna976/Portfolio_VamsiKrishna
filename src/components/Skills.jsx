import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SKILL_CATEGORIES = {
  Frontend: [
    { name: 'React.js', icon: '⚛️', level: 90 },
    { name: 'JavaScript', icon: '🟨', level: 95 },
    { name: 'Redux', icon: '🔄', level: 95 },
    { name: 'Tailwind CSS', icon: '🎨', level: 90 },
    { name: 'Bootstrap', icon: '🅱️', level: 82 },
    { name: 'Responsive Design', icon: '📐', level: 85 },
  ],
  Backend: [
    { name: 'Node.js', icon: '🟢', level: 72 },
    { name: 'Express.js', icon: '🚂', level: 70 },
    { name: 'REST APIs', icon: '🔗', level: 75 },
  ],
  Database: [
    { name: 'MongoDB', icon: '🍃', level: 70 },
    { name: 'MySQL', icon: '🐬', level: 65 },
  ],
  Programming: [
    // { name: 'Java', icon: '☕', level: 78 },
    { name: 'Python', icon: '🐍', level: 90 },
  ],
  // Mobile: [
  //   { name: 'Flutter', icon: '📱', level: 72 },
  //   { name: 'Dart', icon: '🎯', level: 70 },
  // ],
  Tools: [
    { name: 'Git', icon: '🔀', level: 82 },
    { name: 'GitHub', icon: '🐙', level: 85 },
    { name: 'VS Code', icon: '💙', level: 95 },
    { name: 'Postman', icon: '📬', level: 78 },
    { name: 'Jira(Agile)', icon: '🎫', level: 80 },
    { name: 'Render', icon: '☁️', level: 85 },
    { name: 'Vercel', icon: '⚡', level: 90 },
  ],
};

const CATEGORY_COLORS = {
  Frontend: 'var(--accent-blue)',
  Backend: 'var(--accent-emerald)',
  Database: '#F59E0B',
  Programming: '#EF4444',
  Mobile: 'var(--accent-purple)',
  Tools: '#EC4899',
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('Frontend');
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const skills = SKILL_CATEGORIES[activeCategory];

  return (
    <section className="section" id="skills" ref={ref} style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(59,130,246,0.02) 50%, transparent 100%)' }}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag">✦ Tech Arsenal</div>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle">
            A curated set of technologies I use to build modern, scalable applications.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="skills-categories"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          {Object.keys(SKILL_CATEGORIES).map(cat => (
            <button
              key={cat}
              className={`skill-category-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
              style={activeCategory === cat ? {
                background: `${CATEGORY_COLORS[cat]}15`,
                borderColor: `${CATEGORY_COLORS[cat]}40`,
                color: CATEGORY_COLORS[cat],
              } : {}}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="skills-grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                className="skill-card glass glass-hover"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.06, type: 'spring', bounce: 0.25 }}
                whileHover={{ y: -6 }}
              >
                <div
                  className="skill-icon"
                  style={{ background: `${CATEGORY_COLORS[activeCategory]}10` }}
                >
                  {skill.icon}
                </div>
                <div className="skill-name">{skill.name}</div>
                <div className="skill-level">
                  <motion.div
                    className="skill-level-bar"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1.2, delay: 0.3 + i * 0.05, ease: 'easeOut' }}
                    style={{
                      background: `linear-gradient(90deg, ${CATEGORY_COLORS[activeCategory]}, ${CATEGORY_COLORS[activeCategory]}99)`,
                    }}
                  />
                </div>
                <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 600 }}>
                  {skill.level}%
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
