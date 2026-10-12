import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ParallaxDivider({ 
  imageSrc, 
  alt = "Divider", 
  height = "h-[550px]", 
  imagePosition = "center 75%",
  imageClassName = "grayscale-[50%]",
  overlayClassName = "bg-black/40"
}) {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className={`relative w-full ${height} overflow-hidden`}>
      <motion.img
        src={imageSrc}
        alt={alt}
        style={{ y, objectPosition: imagePosition }}
        className={`absolute -top-[10%] inset-x-0 w-full h-[120%] object-cover ${imageClassName}`}
      />
      <div className={`absolute inset-0 ${overlayClassName}`}></div>
    </div>
  );
}
