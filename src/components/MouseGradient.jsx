import { useState, useEffect } from 'react';

export default function MouseGradient() {
  const [pos, setPos] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const handle = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handle, { passive: true });
    return () => window.removeEventListener('mousemove', handle);
  }, []);

  return (
    <div
      className="mouse-gradient"
      style={{ left: pos.x, top: pos.y }}
    />
  );
}
