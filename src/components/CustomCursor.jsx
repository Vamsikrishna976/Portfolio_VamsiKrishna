import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    let posX = 0, posY = 0;
    let mouseX = 0, mouseY = 0;

    const handleMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (cursor) {
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
      }
    };

    const animate = () => {
      posX += (mouseX - posX) * 0.15;
      posY += (mouseY - posY) * 0.15;
      if (follower) {
        follower.style.left = posX + 'px';
        follower.style.top = posY + 'px';
      }
      requestAnimationFrame(animate);
    };

    animate();
    document.addEventListener('mousemove', handleMove);

    const handleHoverIn = () => setHovered(true);
    const handleHoverOut = () => setHovered(false);

    const interactables = document.querySelectorAll('a, button, .btn, .project-card, .skill-card, .cert-card, input, textarea, .filter-btn, .skill-category-btn, .carousel-btn');
    interactables.forEach(el => {
      el.addEventListener('mouseenter', handleHoverIn);
      el.addEventListener('mouseleave', handleHoverOut);
    });

    return () => {
      document.removeEventListener('mousemove', handleMove);
      interactables.forEach(el => {
        el.removeEventListener('mouseenter', handleHoverIn);
        el.removeEventListener('mouseleave', handleHoverOut);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className={`cursor ${hovered ? 'hovered' : ''}`} />
      <div ref={followerRef} className={`cursor-follower ${hovered ? 'hovered' : ''}`} />
    </>
  );
}
