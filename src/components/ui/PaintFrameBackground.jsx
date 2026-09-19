import React from 'react';

export default function PaintFrameBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-[#f9f9f9] dark:bg-gray-900">
      
      {/* Subtle paper texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      ></div>

      {/* 
        Using xMidYMin slice instead of xMidYMid slice. 
        This keeps the paint splatters anchored to the top/bottom correctly even on very tall mobile screens, 
        preventing the huge scale distortion that pushes them too far to the sides or cuts them off.
      */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 1024" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="paint-edge" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="30" xChannelSelector="R" yChannelSelector="G" />
          </filter>
          
          <filter id="paint-edge-heavy" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="60" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>

        {/* Top Left Paint - Yellow/Gold (LinC) */}
        <g filter="url(#paint-edge)">
          <path d="M-50,-50 L400,-50 L300,250 L-50,350 Z" fill="#E5B53B" opacity="0.95" />
          <path d="M-50,-50 L500,-50 L450,100 L200,180 L-50,250 Z" fill="#FBB03B" opacity="0.85" />
        </g>

        {/* Bottom Left Paint - Blue/Teal (Engineering/YaH) */}
        <g filter="url(#paint-edge-heavy)">
          <path d="M-50,1200 L-50,550 L150,500 L400,650 L350,1200 Z" fill="#305cde" opacity="0.95" />
          <path d="M-50,1200 L-50,650 L200,600 L500,850 L250,1200 Z" fill="#008080" opacity="0.85" />
        </g>

        {/* Top Right Paint - Pink/Purple (Ushers/Sunday School) */}
        <g filter="url(#paint-edge)">
          <path d="M1500,-50 L750,-50 L850,250 L1250,450 L1500,150 Z" fill="#fd3db5" opacity="0.95" />
          <path d="M1500,-50 L900,-50 L950,150 L1350,200 L1500,50 Z" fill="#6633cc" opacity="0.85" />
        </g>

        {/* Bottom Right Paint - Red/Orange (Couples/Creatives) */}
        <g filter="url(#paint-edge-heavy)">
          <path d="M1500,1200 L1500,550 L1100,450 L850,850 L1150,1200 Z" fill="#ff0000" opacity="0.95" />
          <path d="M1500,1200 L1500,700 L1200,600 L950,950 L1300,1200 Z" fill="#ff9900" opacity="0.85" />
        </g>

      </svg>
    </div>
  );
}
