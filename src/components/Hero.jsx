import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import IntroVideo from "./IntroVideo";

const FLOATING_ICONS = [
  { icon: "⚛️", label: "React", style: { top: "8%", left: "5%" }, delay: 0 },
  { icon: "🟨", label: "JS", style: { top: "15%", right: "8%" }, delay: 0.2 },
  {
    icon: "☕",
    label: "Java",
    style: { bottom: "20%", left: "2%" },
    delay: 0.4,
  },
  {
    icon: "🍃",
    label: "MongoDB",
    style: { bottom: "10%", right: "5%" },
    delay: 0.6,
  },
  {
    icon: "📱",
    label: "Flutter",
    style: { top: "50%", left: "0%" },
    delay: 0.3,
  },
  { icon: "🔷", label: "TS", style: { top: "40%", right: "2%" }, delay: 0.5 },
];

const floatVariant = (delay = 0) => ({
  animate: {
    y: [0, -12, 0],
    rotate: [0, 3, -3, 0],
    transition: {
      duration: 4 + delay,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    },
  },
});

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-bg-gradient" />

      <div
        className="container"
        style={{ position: "relative", zIndex: 1, width: "100%" }}
      >
        <div className="hero-content">
          {/* LEFT CONTENT */}
          <div>
            <motion.div
              className="hero-badge"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="dot" />
              Available for opportunities
            </motion.div>

            <motion.h1
              className="hero-name"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="gradient-text">Vamsi Krishna</span>
              <br />
              Paluru
            </motion.h1>

            <motion.div
              className="hero-typing-wrapper"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
            >
              <TypeAnimation
                sequence={[
                  "React Developer",
                  2000,
                  "Frontend Engineer",
                  2000,
                  "Aspiring MERN Stack Developer",
                  2000,
                  "JavaScript Developer",
                  2000,
                  "Frontend Developer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                deletionSpeed={60}
                repeat={Infinity}
                style={{ color: "var(--text-secondary)" }}
                cursor={true}
              />
            </motion.div>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
            >
              Passionate Frontend Developer with experience building scalable
              web applications using React.js, JavaScript, MERN Stack, and
              modern UI technologies. Focused on creating seamless user
              experiences and continuously expanding expertise toward Full-Stack
              Development.
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
            >
              <button className="btn btn-primary" onClick={scrollToProjects}>
                View Projects →
              </button>
              <a
                href="/VamsiKrishna_Paluru_Resume.pdf"
                className="btn btn-secondary"
                download
              >
                <FiArrowDown size={16} />
                Download Resume
              </a>
              <button className="btn btn-ghost" onClick={scrollToContact}>
                <FiMail size={16} />
                Contact Me
              </button>
            </motion.div>

            <motion.div
              className="hero-stats"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
            >
              {[
                { value: "5+", label: "Projects Built" },
                { value: "10+", label: "Technologies" },
                { value: "1", label: "Internship" },
              ].map((s) => (
                <div className="hero-stat" key={s.label}>
                  <span className="hero-stat-value">{s.value}</span>
                  <span className="hero-stat-label">{s.label}</span>
                </div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              style={{ display: "flex", gap: "12px", marginTop: "28px" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85 }}
            >
              {[
                {
                  icon: <FiGithub />,
                  href: "https://github.com/Vamsikrishna976",
                  label: "GitHub",
                },
                {
                  icon: <FiLinkedin />,
                  href: "https://www.linkedin.com/in/vamsi-krishna-paluru/",
                  label: "LinkedIn",
                },
                {
                  icon: <FiMail />,
                  href: "mailto:paluruvamsikrishna16@gmail.com",
                  label: "Gmail",
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  title={s.label}
                  style={{ width: 40, height: 40 }}
                >
                  {s.icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — AVATAR */}
          <div className="hero-image-wrapper">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.4,
                duration: 0.7,
                type: "spring",
                bounce: 0.3,
              }}
              style={{ position: "relative" }}
            >
              <div className="hero-avatar-container">
                <div className="hero-avatar-ring" />
                <IntroVideo />
              </div>

              {/* Floating Icons */}
              <div className="floating-icons">
                {FLOATING_ICONS.map((fi) => (
                  <motion.div
                    key={fi.label}
                    className="floating-icon"
                    style={fi.style}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + fi.delay, type: "spring" }}
                    variants={floatVariant(fi.delay)}
                    whileInView="animate"
                  >
                    {fi.icon}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={scrollToAbout}
        style={{ cursor: "none" }}
      >
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Scroll</span>
      </motion.div>
    </section>
  );
}
