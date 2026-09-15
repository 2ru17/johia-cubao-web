import React from 'react';
import AnimatedSection from './AnimatedSection';

export default function EmptyState({ title = "Coming Soon", message = "We're currently preparing something wonderful here. Please check back later!" }) {
  return (
    <AnimatedSection variant="fade" className="flex flex-col items-center justify-center py-20 px-6 text-center bg-gray-50 rounded-3xl border border-gray-100 shadow-sm max-w-3xl mx-auto my-12">
      <div className="w-24 h-24 bg-brand-yellow/10 rounded-full flex items-center justify-center mb-6">
        <img src="/images/general/Logo Yellow.svg" alt="JOHIA" className="w-12 h-12 opacity-60" />
      </div>
      <h3 className="text-3xl font-extrabold font-heading text-text-dark dark:text-text-light mb-4">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400 font-sans text-lg max-w-md mx-auto">{message}</p>
    </AnimatedSection>
  );
}
