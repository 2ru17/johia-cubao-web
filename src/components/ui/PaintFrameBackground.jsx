import React from 'react';

export default function PaintFrameBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-[#f9f9f9] dark:bg-[#0a0a0a]">
      
      {/* 
        1. The Base Colors 
        We use the exact same SVG coordinates, but apply a massive CSS blur 
        to melt the sharp paint splatters into a beautiful, soft mesh gradient.
        Scaling it up (scale-125) prevents the blurred edges from pulling away from the screen edge.
      */}
      <svg className="absolute inset-0 w-full h-full scale-125 blur-[100px] md:blur-[140px] opacity-80" viewBox="0 0 1440 1024" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        
        {/* 
          NEW EXTRA COLORS for richer mesh gradient 
          These sit in the middle/edges and blend the corners together!
          Strictly using JOHIA brand colors to maintain identity.
        */}
        <circle cx="300" cy="500" r="250" fill="#305cde" opacity="0.7" className="animate-float-tl" />
        <circle cx="1100" cy="500" r="300" fill="#6633cc" opacity="0.6" className="animate-float-br" />
        <circle cx="720" cy="200" r="200" fill="#fd3db5" opacity="0.6" className="animate-float-tr" />
        <circle cx="720" cy="800" r="250" fill="#ff9900" opacity="0.7" className="animate-float-bl" />

        {/* Top Left - Yellow/Gold */}
        <g className="animate-float-tl">
          <path d="M-50,-50 L400,-50 L300,250 L-50,350 Z" fill="#E5B53B" opacity="0.95" />
          <path d="M-50,-50 L500,-50 L450,100 L200,180 L-50,250 Z" fill="#FBB03B" opacity="0.85" />
        </g>

        {/* Bottom Left - Blue/Teal */}
        <g className="animate-float-bl">
          <path d="M-50,1200 L-50,550 L150,500 L400,650 L350,1200 Z" fill="#305cde" opacity="0.95" />
          <path d="M-50,1200 L-50,650 L200,600 L500,850 L250,1200 Z" fill="#008080" opacity="0.85" />
        </g>

        {/* Top Right - Pink/Purple */}
        <g className="animate-float-tr">
          <path d="M1500,-50 L750,-50 L850,250 L1250,450 L1500,150 Z" fill="#fd3db5" opacity="0.95" />
          <path d="M1500,-50 L900,-50 L950,150 L1350,200 L1500,50 Z" fill="#6633cc" opacity="0.85" />
        </g>

        {/* Bottom Right - Red/Orange */}
        <g className="animate-float-br">
          <path d="M1500,1200 L1500,550 L1100,450 L850,850 L1150,1200 Z" fill="#ff0000" opacity="0.95" />
          <path d="M1500,1200 L1500,700 L1200,600 L950,950 L1300,1200 Z" fill="#ff9900" opacity="0.85" />
        </g>

      </svg>

      {/* 
        2. The Frosted Glass Grain (Noise Texture)
        By increasing the opacity and using mix-blend-overlay, this creates 
        that exact premium frosted glass texture seen in UI design trends.
      */}
      <div
        className="absolute inset-0 opacity-[0.25] dark:opacity-[0.15] mix-blend-overlay z-10"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      ></div>

      {/* 3. A subtle darkening gradient to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/20 dark:to-black/40 z-20"></div>

    </div>
  );
}
