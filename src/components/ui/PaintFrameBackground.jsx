import React from 'react';
import ShaderBackground from './ShaderBackground';

export default function PaintFrameBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-[#f9f9f9] dark:bg-black">
      
      {/* 
        1. V2 3D Fluid Gradient (WebGL) 
        This replaces the old DOM-based mesh gradient with a high-performance 3D shader.
      */}
      <ShaderBackground />

      {/* 
        2. A subtle darkening gradient to ensure text readability overlaying the shader
      */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/40 dark:to-black/80 z-20"></div>

    </div>
  );
}
