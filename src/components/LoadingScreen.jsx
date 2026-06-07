import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <span className="loading-logo gradient-text">VK.</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        style={{ textAlign: 'center' }}
      >
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '16px', letterSpacing: '0.05em' }}>
          Building experience...
        </p>
        <div className="loading-bar-container">
          <motion.div
            className="loading-bar"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.8, ease: 'easeInOut', delay: 0.2 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
