'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface FadeInOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right';
  duration?: number;
  className?: string;
}

export default function FadeInOnScroll({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.6,
  className = '',
}: FadeInOnScrollProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const offsetMap = {
    up: { x: 0, y: 40 },
    left: { x: -40, y: 0 },
    right: { x: 40, y: 0 },
  };

  const offset = offsetMap[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: offset.x, y: offset.y }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
