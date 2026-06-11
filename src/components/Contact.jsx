import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FiMail,
  FiLinkedin,
  FiGithub,
  FiDownload,
  FiSend,
  FiCheck,
} from "react-icons/fi";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSending(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      // WhatsApp Redirect
      const whatsappMessage = `
🚀 New Portfolio Inquiry

👤 Name: ${form.name}

📧 Email: ${form.email}

📌 Subject: ${form.subject}

💬 Message:
${form.message}
`;

      const phoneNumber = "919985936366";

      window.open(
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
          whatsappMessage,
        )}`,
        "_blank",
      );

      setSent(true);

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setSent(false), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message.");
    } finally {
      setSending(false);
    }
  };
  const CONTACT_LINKS = [
    {
      Icon: FiMail,
      label: "Gmail",
      value: "paluruvamsikrishna16@gmail.com",
      href: "mailto:paluruvamsikrishna16@gmail.com",
      iconBg: "rgba(59,130,246,0.1)",
      iconColor: "var(--accent-blue)",
    },
    {
      Icon: FiLinkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/vamsi-krishna-paluru",
      href: "https://www.linkedin.com/in/vamsi-krishna-paluru/",
      iconBg: "rgba(10,102,194,0.1)",
      iconColor: "#0A66C2",
    },
    {
      Icon: FiGithub,
      label: "GitHub",
      value: "github.com/Vamsikrishna976",
      href: "https://github.com/Vamsikrishna976",
      iconBg: "rgba(255,255,255,0.06)",
      iconColor: "var(--text-primary)",
    },
    {
      Icon: FiDownload,
      label: "Resume",
      value: "Download PDF",
      href: "/VamsiKrishna_Paluru_Resume.pdf",
      iconBg: "rgba(16,185,129,0.1)",
      iconColor: "var(--accent-emerald)",
      download: true,
    },
  ];

  return (
    <section className="section" id="contact" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag">✦ Get In Touch</div>
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle">
            Open to exciting opportunities, collaborations, and conversations
            about tech.
          </p>
        </motion.div>

        <div className="contact-wrapper">
          {/* LEFT — Info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div>
              <h3 className="contact-info-title">
                Have a project in mind?{" "}
                <span className="gradient-text">Let's talk.</span>
              </h3>
              <p className="contact-info-text" style={{ marginTop: "16px" }}>
                I'm currently open to Frontend, Full-Stack Developer roles and
                freelance projects. Whether it's a startup idea, an open-source
                contribution, or just a tech chat — my inbox is always open.
              </p>
            </div>

            <div className="contact-links">
              {CONTACT_LINKS.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.download ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  download={link.download}
                  className="contact-link glass glass-hover"
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <div
                    className="contact-link-icon"
                    style={{ background: link.iconBg, color: link.iconColor }}
                  >
                    <link.Icon size={20} />
                  </div>
                  <div className="contact-link-text">
                    <h4>{link.label}</h4>
                    <p>{link.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Availability banner */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "16px 20px",
                background: "rgba(16,185,129,0.06)",
                border: "1px solid rgba(16,185,129,0.15)",
                borderRadius: "var(--radius-lg)",
              }}
            >
              <span
                style={{ color: "var(--accent-emerald)", fontSize: "22px" }}
              >
                🟢
              </span>
              <div>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                  }}
                >
                  Available for Opportunities
                </div>
                <div style={{ fontSize: "12px", color: "var(--text-muted)" }}>
                  Actively looking for Frontend / Full-Stack Developer roles
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Form */}
          <motion.form
            className="contact-form glass"
            style={{ padding: "32px", borderRadius: "var(--radius-xl)" }}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
              }}
            >
              <div className="form-group">
                <label className="form-label" htmlFor="contact-name">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  className="form-input"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-email">
                  Email Address
                </label>
                <input
                  id="contact-email"
                  className="form-input"
                  name="email"
                  type="email"
                  placeholder="john@company.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="contact-subject">
                Subject
              </label>
              <input
                id="contact-subject"
                className="form-input"
                name="subject"
                type="text"
                placeholder="Job Opportunity / Project Collaboration"
                value={form.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="contact-message">
                Message
              </label>
              <textarea
                id="contact-message"
                className="form-textarea"
                name="message"
                placeholder="Tell me about the opportunity or project..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <motion.button
              type="submit"
              className="btn btn-primary"
              style={{
                width: "100%",
                justifyContent: "center",
                padding: "14px",
                fontSize: "15px",
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={sending}
            >
              {sent ? (
                <>
                  <FiCheck size={16} />✅ Thank you! Your message has been sent
                  successfully. I'll get back to you soon.
                </>
              ) : sending ? (
                <span
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    style={{ animation: "spin 1s linear infinite" }}
                  >
                    <circle
                      cx="8"
                      cy="8"
                      r="6"
                      stroke="white"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="20"
                      strokeDashoffset="5"
                    />
                  </svg>
                  Sending...
                </span>
              ) : (
                <>
                  <FiSend size={16} /> Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
}
