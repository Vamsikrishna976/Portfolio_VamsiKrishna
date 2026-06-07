import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const PROJECTS = [
  {
    id: 1,
    number: '01',
    title: 'Meat Delivery Application',
    description: 'A full-stack meat delivery platform featuring user authentication, product browsing, cart management, order placement, admin dashboard, and secure backend integration.',
    emoji: '🥩',
    gradient: 'linear-gradient(135deg, rgba(239,68,68,0.15), rgba(234,179,8,0.1))',
    category: ['Full-Stack', 'MERN'],
    features: ['Authentication', 'Product Management', 'Shopping Cart', 'Order Tracking', 'Admin Dashboard', 'Responsive Design'],
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/Vamsikrishna976/Meat-Delivery-Application.git',
    demo: 'https://meat-delivery-application.vercel.app',
  },
  // {
  //   id: 2,
  //   number: '02',
  //   title: 'E-Commerce Platform',
  //   description: 'Modern shopping application with dynamic product listings, advanced filtering, responsive UI, and seamless cart functionality.',
  //   emoji: '🛒',
  //   gradient: 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(139,92,246,0.1))',
  //   category: ['Frontend', 'React'],
  //   features: ['Product Catalog', 'Search', 'Filtering', 'Responsive UI', 'Cart Functionality'],
  //   stack: ['React.js', 'JavaScript', 'Bootstrap'],
  //   github: 'https://github.com/',
  //   demo: 'https://food-adda-eight.vercel.app',
  // },
  {
    id: 2,
    number: '02',
    title: 'Food Adda ',
    description: 'A modern food delivery website with a clean design and responsive layout.',
    emoji: '🍔',
    gradient: 'linear-gradient(135deg, rgba(245,158,11,0.15), rgba(239,68,68,0.1))',
    category: ['Frontend'],
    features: ['Home', 'About', 'Explore Menu', 'Contact', 'Cart'],
    stack: ['React', 'JavaScript', 'Redux','Tailwind CSS', 'express.js', 'node.js', 'mongodb'],
    github: 'https://github.com/Vamsikrishna976/Food_Adda.git',
    demo: 'https://food-adda-eight.vercel.app',
  },
  {
    id: 3,
    number: '03',
    title: 'Job Portal',
    description: 'A modern job portal website with a clean design and responsive layout.',
    emoji: '💼',
    gradient: 'linear-gradient(135deg, rgba(245,158,11,0.15), rgba(239,68,68,0.1))',
    category: ['Frontend'],
    features: ['Home', 'Search', 'Job Listings', 'Filtering', 'Contact'],
    stack: ['React', 'JavaScript', 'Redux','Tailwind CSS', 'vite'],
    github: 'https://github.com/Vamsikrishna976/Job-Postings.git',
    demo: 'https://job-postings-six.vercel.app',
  },

  // {
  //   id: 4,
  //   number: '04',
  //   title: 'Flutter News App',
  //   description: 'Cross-platform mobile application with API integration, category filtering, dark/light themes, animations, bookmarks, and BLoC state management.',
  //   emoji: '📰',
  //   gradient: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(59,130,246,0.1))',
  //   category: ['Mobile', 'Flutter'],
  //   features: ['API Integration', 'Category Filtering', 'Dark/Light Theme', 'Animations', 'Bookmarks', 'BLoC State'],
  //   stack: ['Flutter', 'Dart', 'REST API'],
  //   github: 'https://github.com/',
  //   demo: '#',
  // },
  // {
  //   id: 5,
  //   number: '05',
  //   title: 'Profile Viewer & Mapping App',
  //   description: 'React-based profile management application with interactive profile visualization and map integration for location-based data.',
  //   emoji: '🗺️',
  //   gradient: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(59,130,246,0.1))',
  //   category: ['Frontend', 'React'],
  //   features: ['Profile Management', 'Map Integration', 'Search', 'Data Visualization', 'Responsive UI'],
  //   stack: ['React.js', 'JavaScript'],
  //   github: 'https://github.com/',
  //   demo: '#',
  // },
];

const FILTER_CATEGORIES = ['All', 'Frontend', 'Full-Stack'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const filtered = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category.includes(activeFilter));

  return (
    <section className="section" id="projects" ref={ref} style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(139,92,246,0.02) 50%, transparent 100%)' }}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag">✦ Portfolio</div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Real-world applications showcasing end-to-end development skills.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="project-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          {FILTER_CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="projects-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                className="project-card glass"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, type: 'spring', bounce: 0.2 }}
                whileHover={{ y: -8 }}
              >
                {/* Preview */}
                <div
                  className="project-preview"
                  style={{ background: project.gradient }}
                >
                  <span style={{ fontSize: '56px', zIndex: 1 }}>{project.emoji}</span>
                  <div className="project-preview-overlay">
                    <a href={project.demo} className="btn btn-primary" style={{ fontSize: '12px', padding: '8px 16px' }}>
                      <FiExternalLink size={13} /> Live Demo
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ fontSize: '12px', padding: '8px 16px' }}>
                      <FiGithub size={13} /> GitHub
                    </a>
                  </div>
                </div>

                {/* Body */}
                <div className="project-body">
                  <div className="project-number">{project.number} · {project.category[0]}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-features">
                    {project.features.slice(0, 4).map(f => (
                      <span key={f} className="project-feature">{f}</span>
                    ))}
                    {project.features.length > 4 && (
                      <span className="project-feature">+{project.features.length - 4} more</span>
                    )}
                  </div>

                  <div className="project-stack">
                    {project.stack.map(t => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <a href={project.demo} className="btn btn-primary" style={{ fontSize: '12px', padding: '8px 16px', flex: 1, justifyContent: 'center' }}>
                      <FiExternalLink size={13} /> Demo
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ fontSize: '12px', padding: '8px 16px' }}>
                      <FiGithub size={13} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
