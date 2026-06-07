import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiCalendar, FiMapPin } from "react-icons/fi";

const RESPONSIBILITIES1 = [
  'Delivered 2+ production-ready React.js web applications for clients, including a full-featured food ordering app with live API integration, Redux Toolkit state management, and React Router navigation.',
  'Built Websites as a Freelancer, collaborating with clients to understand requirements, design user-friendly interfaces, and deliver high-quality web solutions on time.',
  'Implemented custom React hooks to streamline API fetching logic, reducing code duplication by ~40% across projects.',
  'Optimized rendering performance via lazy loading and component reuse, achieving consistent sub-2s page load times across desktop and mobile.',
  'Delivered Shimmer UI loading states, error boundaries, and responsive layouts using Tailwind CSS ensuring production readiness',
];

const RESPONSIBILITIES = [
  "Developed responsive user interfaces using React.js and JavaScript for real-world applications.",
  "Built modular and reusable UI components that improved code maintainability by 40%.",
  "Improved website responsiveness and performance, ensuring cross-browser compatibility.",
  "Collaborated on e-commerce frontend development with dynamic product listings and cart features.",
  "Implemented modern web design practices including glassmorphism, animations, and micro-interactions.",
];

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="section" id="experience" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag">✦ Work History</div>
          <h2 className="section-title">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            Real-world experience building production-grade web applications.
          </p>
        </motion.div>

        <div className="experience-timeline">
          <motion.div
            className="exp-card glass glass-hover"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="exp-header">
              <div className="exp-company">
                <div className="exp-company-logo">🏢</div>
                <div>
                  <div className="exp-title">Free Lancer Frontend Developer</div>
                  <div className="exp-company-name">Self-employed</div>
                </div>
              </div>
              <div className="exp-badge">✓ Currently Working</div>
            </div>

            <div className="exp-duration">
              <FiCalendar size={14} />
              <span>Present · Free Lancer</span>
              <span style={{ margin: "0 4px", color: "var(--glass-border)" }}>
                ·
              </span>
              <FiMapPin size={14} />
              <span>Remote, India</span>
            </div>

            <ul className="exp-responsibilities">
              {RESPONSIBILITIES1.map((resp, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  {resp}
                </motion.li>
              ))}
            </ul>

            <motion.div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                marginTop: "20px",
                paddingTop: "20px",
                borderTop: "1px solid var(--glass-border)",
              }}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.9 }}
            >
              {[
                "Project Management",
                "Delivering Projects",
                "Designing UI/UX",
                "Client Communication",
                "Responsive Design",
              ].map((t) => (
                <span key={t} className="tech-tag">
                  {t}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
        <div className="experience-timeline">
          <motion.div
            className="exp-card glass glass-hover"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="exp-header">
              <div className="exp-company">
                <div className="exp-company-logo">🏢</div>
                <div>
                  <div className="exp-title">Frontend Developer intern</div>
                  <div className="exp-company-name">Slash Mark</div>
                </div>
              </div>
              <div className="exp-badge">✓ Completed</div>
            </div>

            <div className="exp-duration">
              <FiCalendar size={14} />
              <span>2024 · Internship</span>
              <span style={{ margin: "0 4px", color: "var(--glass-border)" }}>
                ·
              </span>
              <FiMapPin size={14} />
              <span>Remote, India</span>
            </div>

            <ul className="exp-responsibilities">
              {RESPONSIBILITIES.map((resp, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  {resp}
                </motion.li>
              ))}
            </ul>

            <motion.div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                marginTop: "20px",
                paddingTop: "20px",
                borderTop: "1px solid var(--glass-border)",
              }}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.9 }}
            >
              {[
                "React.js",
                "JavaScript",
                "HTML5",
                "CSS3",
                "Bootstrap",
                "Responsive Design",
              ].map((t) => (
                <span key={t} className="tech-tag">
                  {t}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Future Experience Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            style={{
              padding: "24px 32px",
              borderRadius: "var(--radius-xl)",
              border: "1px dashed rgba(59,130,246,0.2)",
              display: "flex",
              alignItems: "center",
              gap: "16px",
              color: "var(--text-muted)",
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: "rgba(59,130,246,0.05)",
                border: "1px dashed rgba(59,130,246,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
              }}
            >
              +
            </div>
            <div>
              <div
                style={{
                  fontWeight: 600,
                  color: "var(--text-secondary)",
                  marginBottom: "2px",
                }}
              >
                Next Opportunity
              </div>
              <div style={{ fontSize: "13px" }}>
                Actively looking for Full-Stack or Frontend Developer roles
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
