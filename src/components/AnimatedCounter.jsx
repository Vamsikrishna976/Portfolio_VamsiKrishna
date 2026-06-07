import { useEffect, useRef, useState } from 'react';

/**
 * Simple animated counter that doesn't rely on react-countup's CJS default export.
 */
export default function AnimatedCounter({ end, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const raf = useRef(null);

  useEffect(() => {
    let startTime = null;
    const startVal = 0;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(eased * (end - startVal) + startVal));
      if (progress < 1) {
        raf.current = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    raf.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf.current);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
}
