import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ImageLightbox({ images, isOpen, onClose, layoutId, initialIndex = 0 }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // Close on Escape key and handle arrows
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') nextImage(e);
      if (e.key === 'ArrowLeft') prevImage(e);
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, currentIndex, images]);

  if (!isOpen || !images || images.length === 0) return null;

  const nextImage = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          onClick={onClose}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white z-50 p-2 bg-black/50 hover:bg-black/80 rounded-full transition-colors" 
            onClick={onClose}
            aria-label="Close Gallery"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>

          {/* Previous Button */}
          {images.length > 1 && (
            <button 
              className="absolute left-4 md:left-12 text-white/50 hover:text-white z-50 p-4 bg-black/30 hover:bg-black/60 rounded-full transition-colors" 
              onClick={prevImage}
            >
              <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
          )}

          {/* Current Image */}
          <div className="relative w-full h-full max-w-7xl max-h-[90vh] px-20 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
              alt={`Gallery image ${currentIndex + 1}`}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="max-w-full max-h-full object-contain drop-shadow-2xl rounded-lg"
              onClick={(e) => e.stopPropagation()} // Prevent click from closing
              />
            </AnimatePresence>
          </div>

          {/* Next Button */}
          {images.length > 1 && (
            <button 
              className="absolute right-4 md:right-12 text-white/50 hover:text-white z-50 p-4 bg-black/30 hover:bg-black/60 rounded-full transition-colors" 
              onClick={nextImage}
            >
              <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          )}

          {/* Indicators */}
          {images.length > 1 && (
            <div className="absolute bottom-8 flex space-x-3">
              {images.map((_, idx) => (
                <button 
                  key={idx} 
                  onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                  className={`w-3 h-3 rounded-full transition-colors ${idx === currentIndex ? 'bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]' : 'bg-white/30 hover:bg-white/50'}`} 
                />
              ))}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
