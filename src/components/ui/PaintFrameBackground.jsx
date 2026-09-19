import React from 'react';

export default function PaintFrameBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-[#f9f9f9] dark:bg-gray-900">
      
      {/* Subtle paper texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      ></div>

      {/* Reusable filters */}
      <svg className="hidden">
        <defs>
          <filter id="paint-edge" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="20" xChannelSelector="R" yChannelSelector="G" />
          </filter>
          <filter id="paint-edge-heavy" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="40" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      {/* Top Left Paint - Yellow/Gold (LinC) */}
      <svg className="absolute top-0 left-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] opacity-80" viewBox="0 0 400 400" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#paint-edge)">
          <path d="M-50,-50 L350,-50 L200,200 L-50,250 Z" fill="#E5B53B" />
          <path d="M-50,-50 L400,-50 L300,100 L100,100 L-50,150 Z" fill="#FBB03B" opacity="0.9" />
        </g>
      </svg>

      {/* Top Right Paint - Pink/Purple (Ushers/Sunday School) */}
      <svg className="absolute top-0 right-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] opacity-80" viewBox="0 0 400 400" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#paint-edge)">
          <path d="M450,-50 L50,-50 L100,200 L300,300 L450,100 Z" fill="#fd3db5" />
          <path d="M450,-50 L150,-50 L200,100 L350,150 L450,50 Z" fill="#6633cc" opacity="0.9" />
        </g>
      </svg>

      {/* Bottom Left Paint - Blue/Teal (Engineering/YaH) */}
      <svg className="absolute bottom-0 left-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] opacity-80" viewBox="0 0 400 400" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#paint-edge-heavy)">
          <path d="M-50,450 L-50,100 L50,50 L200,250 L150,450 Z" fill="#305cde" />
          <path d="M-50,450 L-50,200 L100,150 L300,350 L100,450 Z" fill="#008080" opacity="0.9" />
        </g>
      </svg>

      {/* Bottom Right Paint - Red/Orange (Couples/Creatives) */}
      <svg className="absolute bottom-0 right-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] opacity-80" viewBox="0 0 400 400" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#paint-edge-heavy)">
          <path d="M450,450 L450,50 L200,50 L50,250 L150,450 Z" fill="#ff0000" />
          <path d="M450,450 L450,200 L300,150 L150,350 L350,450 Z" fill="#ff9900" opacity="0.9" />
        </g>
      </svg>

    </div>
  );
}
