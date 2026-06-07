import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiClock, FiArrowRight } from 'react-icons/fi';

const BLOGS = [
  {
    emoji: '⚛️',
    category: 'React Development',
    title: 'Mastering React Hooks: useState, useEffect, and Beyond',
    excerpt: 'Deep dive into React hooks patterns and how they revolutionize component state management in modern applications.',
    readTime: '8 min read',
    gradient: 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(99,102,241,0.1))',
  },
  {
    emoji: '🟨',
    category: 'JavaScript',
    title: 'JavaScript ES2024: Features You Need to Know',
    excerpt: 'Explore the latest JavaScript features including the new temporal API, pattern matching, and decorators.',
    readTime: '6 min read',
    gradient: 'linear-gradient(135deg, rgba(245,158,11,0.15), rgba(239,68,68,0.1))',
  },
  {
    emoji: '🌐',
    category: 'MERN Stack',
    title: 'Building Scalable REST APIs with Express.js and MongoDB',
    excerpt: 'Learn best practices for designing production-ready APIs with proper authentication, validation, and error handling.',
    readTime: '10 min read',
    gradient: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(59,130,246,0.1))',
  },
  // {
  //   emoji: '☕',
  //   category: 'Java Programming',
  //   title: 'Spring Boot for React Developers: A Beginner\'s Guide',
  //   excerpt: 'Transitioning from frontend to full-stack? Here\'s how Spring Boot complements your React knowledge.',
  //   readTime: '12 min read',
  //   gradient: 'linear-gradient(135deg, rgba(239,68,68,0.15), rgba(245,158,11,0.1))',
  // },
  // {
  //   emoji: '📱',
  //   category: 'Flutter Development',
  //   title: 'State Management in Flutter: BLoC vs Provider vs Riverpod',
  //   excerpt: 'A comprehensive comparison of Flutter\'s top state management solutions with real-world examples.',
  //   readTime: '9 min read',
  //   gradient: 'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(59,130,246,0.1))',
  // },
  {
    emoji: '🎨',
    category: 'UI/UX Design',
    title: 'Glassmorphism in 2025: Implementation Tips & Tricks',
    excerpt: 'How to implement stunning glassmorphism effects in React applications while maintaining accessibility.',
    readTime: '5 min read',
    gradient: 'linear-gradient(135deg, rgba(236,72,153,0.15), rgba(139,92,246,0.1))',
  },
];

export default function Blog() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section" id="blog" ref={ref} style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(59,130,246,0.02) 50%, transparent 100%)' }}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag">✦ Blog</div>
          <h2 className="section-title">
            Thoughts & <span className="gradient-text">Articles</span>
          </h2>
          <p className="section-subtitle">
            Sharing knowledge, insights, and lessons from my development journey.
          </p>
        </motion.div>

        <div className="blog-grid">
          {BLOGS.map((blog, i) => (
            <motion.div
              key={i}
              className="blog-card glass"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, type: 'spring', bounce: 0.2 }}
              whileHover={{ y: -6 }}
            >
              <div className="blog-card-header" style={{ background: blog.gradient }}>
                <span style={{ fontSize: '48px', position: 'relative', zIndex: 1 }}>{blog.emoji}</span>
              </div>
              <div className="blog-card-body">
                <div className="blog-category">{blog.category}</div>
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-excerpt">{blog.excerpt}</p>
                <div className="blog-meta">
                  <div className="blog-coming-soon">Coming Soon</div>
                  <div className="blog-read-time">
                    <FiClock size={12} style={{ verticalAlign: 'middle', marginRight: '4px' }} />
                    {blog.readTime}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          style={{ textAlign: 'center', marginTop: '48px' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 24px',
            background: 'rgba(139,92,246,0.06)',
            border: '1px solid rgba(139,92,246,0.15)',
            borderRadius: 'var(--radius-full)',
            fontSize: '14px',
            color: 'var(--text-secondary)',
          }}>
            <span>📝</span>
            Blog launching soon — follow along for dev tutorials & insights
            <FiArrowRight size={14} style={{ color: 'var(--accent-purple)' }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
