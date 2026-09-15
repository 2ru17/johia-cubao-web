import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ParallaxImage({ 
  src, 
  alt, 
  className,
  overlay = true
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Moves the image slightly slower than scroll speed
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div ref={ref} className="absolute inset-0 w-full h-full overflow-hidden z-0">
      <motion.img 
        src={src} 
        alt={alt} 
        style={{ y }}
        className={`absolute inset-0 w-full h-[130%] object-cover ${className}`}
      />
      {overlay && <div className="absolute inset-0 bg-overlay-dark/40 z-10"></div>}
    </div>
  );
}
