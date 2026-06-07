import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';

const SOCIAL = [
  { icon: <FiGithub />, href: 'https://github.com/Vamsikrishna976', label: 'GitHub' },
  { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/vamsi-krishna-paluru', label: 'LinkedIn' },
  { icon: <FiMail />, href: 'mailto:paluruvamsikrishna16@gmail.com', label: 'Gmail' },
];

const NAV = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer" style={{ position: 'relative', overflow: 'hidden' }}>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 60% 80% at 50% 120%, rgba(59,130,246,0.06), transparent)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Top */}
        <motion.div
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', marginBottom: '32px' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a href="#hero" onClick={(e) => { e.preventDefault(); scrollTo('#hero'); }}
            style={{ fontFamily: 'var(--font-display)', fontSize: '32px', fontWeight: 900 }}
          >
            <span className="gradient-text">VK.</span>
          </a>

          <nav style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', justifyContent: 'center' }}>
            {NAV.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => { e.preventDefault(); scrollTo(l.href); }}
                style={{ padding: '6px 14px', fontSize: '13px', color: 'var(--text-muted)', borderRadius: 'var(--radius-full)', transition: 'color 0.15s' }}
                onMouseEnter={e => e.target.style.color = 'var(--text-primary)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </motion.div>

        {/* Social */}
        <div className="footer-social">
          {SOCIAL.map(s => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              title={s.label}
              whileHover={{ y: -4, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              {s.icon}
            </motion.a>
          ))}
        </div>

        {/* Bottom */}
        <p className="footer-text">
          Built with <FiHeart size={12} style={{ display: 'inline', color: '#EC4899', verticalAlign: 'middle', margin: '0 2px' }} /> by{' '}
          <span style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>Vamsi Krishna Paluru</span>
          {' '}· React + Vite + Framer Motion · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
