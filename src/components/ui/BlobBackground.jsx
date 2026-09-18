import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export default function BlobBackground({ color, className }) {
  // We use Framer Motion to animate the border-radius to create an organic, morphing blob effect.
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none z-0", className)}>
      <motion.div
        className="absolute inset-0 w-[150%] h-[150%] -top-[25%] -left-[25%] opacity-40 mix-blend-screen blur-2xl"
        style={{ backgroundColor: color }}
        animate={{
          borderRadius: [
            "40% 60% 70% 30% / 40% 50% 60% 50%",
            "50% 50% 30% 70% / 50% 60% 40% 40%",
            "60% 40% 50% 50% / 60% 30% 70% 50%",
            "40% 60% 70% 30% / 40% 50% 60% 50%"
          ],
          rotate: [0, 90, 180, 270, 360],
          scale: [1, 1.1, 0.9, 1.05, 1],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute inset-0 w-[120%] h-[120%] -top-[10%] -left-[10%] opacity-30 mix-blend-multiply dark:mix-blend-overlay blur-3xl"
        style={{ backgroundColor: color }}
        animate={{
          borderRadius: [
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "30% 70% 70% 30% / 30% 60% 40% 70%",
            "50% 50% 20% 80% / 50% 50% 50% 50%",
            "60% 40% 30% 70% / 60% 30% 70% 40%"
          ],
          rotate: [360, 270, 180, 90, 0],
          scale: [0.9, 1.05, 1, 1.1, 0.9],
        }}
        transition={{
          duration: 25,
          ease: "linear",
          repeat: Infinity,
        }}
      />
    </div>
  );
}
