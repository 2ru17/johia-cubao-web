import React from 'react';
import { cn } from '../../lib/utils';

export default function SectionWrapper({ children, className, id }) {
  return (
    <section id={id} className={cn("py-20 md:py-[80px] px-6 md:px-8", className)}>
      <div className="container mx-auto">
        {children}
      </div>
    </section>
  );
}
