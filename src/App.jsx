import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import ParticleBackground from './components/ParticleBackground';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MouseGradient from './components/MouseGradient';
import './index.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.classList.add('loading');
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.classList.remove('loading');
    }, 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Always-mounted elements */}
      <CustomCursor />
      <MouseGradient />
      <div className="noise-overlay" />

      {/* Loading screen */}
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      {/* Particles always mounted to avoid ParticlesProvider singleton errors on remount */}
      <ParticleBackground />

      {/* Main content — revealed after loading, never unmounts */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        style={{ visibility: loading ? 'hidden' : 'visible' }}
      >
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Education />
          <Achievements />
          <Blog />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </>
  );
}

export default App;
