import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ParallaxDivider({ imageSrc, alt = "Divider", height = "h-[400px]" }) {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div ref={ref} className={`relative ${height} overflow-hidden`}>
      <motion.img
        src={imageSrc}
        alt={alt}
        style={{ y }}
        className="absolute inset-0 w-full h-[130%] object-cover grayscale-[50%]"
      />
      <div className="absolute inset-0 bg-black/40"></div>
    </div>
  );
}
