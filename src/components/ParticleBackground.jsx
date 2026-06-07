import { useCallback } from 'react';
import { loadSlim } from '@tsparticles/slim';
import { ParticlesProvider, Particles } from '@tsparticles/react';

// Stable init function defined at module level to guarantee reference equality
// across React re-renders and hot reloads, preventing the ParticlesProvider
// singleton guard from throwing "init callback must be stable" errors.
let _initFn = null;
const getInitFn = () => {
  if (!_initFn) {
    _initFn = async (engine) => {
      await loadSlim(engine);
    };
  }
  return _initFn;
};

const PARTICLE_OPTIONS = {
  background: { color: { value: 'transparent' } },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: { enable: true, mode: 'repulse' },
    },
    modes: {
      repulse: { distance: 80, duration: 0.4 },
    },
  },
  particles: {
    color: { value: ['#3B82F6', '#8B5CF6', '#10B981'] },
    links: {
      color: '#3B82F6',
      distance: 140,
      enable: true,
      opacity: 0.06,
      width: 1,
    },
    move: {
      enable: true,
      outModes: { default: 'bounce' },
      random: true,
      speed: 0.6,
      straight: false,
    },
    number: {
      density: { enable: true, area: 1000 },
      value: 55,
    },
    opacity: {
      value: { min: 0.05, max: 0.3 },
      animation: { enable: true, speed: 0.5, minimumValue: 0.05 },
    },
    shape: { type: 'circle' },
    size: {
      value: { min: 1, max: 2.5 },
    },
  },
  detectRetina: true,
};

export default function ParticleBackground() {
  const init = getInitFn();

  return (
    <ParticlesProvider init={init}>
      <Particles
        id="tsparticles"
        options={PARTICLE_OPTIONS}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
    </ParticlesProvider>
  );
}
