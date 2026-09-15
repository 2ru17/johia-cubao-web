import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export default function AnimatedText({ 
  text, 
  className,
  delay = 0,
  el: Wrapper = "h2"
}) {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <Wrapper className={cn("overflow-hidden flex flex-wrap", className)}>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        className="flex flex-wrap"
      >
        {words.map((word, index) => (
          <motion.span
            variants={child}
            key={index}
            className="mr-2 mb-2 inline-block"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </Wrapper>
  );
}
