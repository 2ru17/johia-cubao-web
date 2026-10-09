import React from 'react';

export default function PaintFrameBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-[#f9f9f9] dark:bg-black">
      
      {/* 
        1. The Base Colors (DOM-based Mesh Gradient)
        Using pure DOM divs instead of SVG completely eliminates the browser flickering/clipping bugs 
        associated with animating CSS transforms inside a massively blurred SVG.
      */}
      <div className="absolute inset-0 w-[150vw] h-[150vh] -left-[25vw] -top-[25vh] opacity-80 dark:opacity-70 blur-[100px] md:blur-[140px] transition-opacity duration-700 pointer-events-none transform-gpu">
        
        {/* Top Left - Yellow/Gold (LinC) */}
        <div className="absolute top-[10%] left-[15%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-[#E5B53B] rounded-full mix-blend-multiply dark:mix-blend-screen animate-float-tl"></div>
        <div className="absolute top-[5%] left-[25%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] bg-[#FBB03B] rounded-full mix-blend-multiply dark:mix-blend-screen animate-float-tr opacity-80"></div>
        
        {/* Bottom Left - Blue/Teal (YaH & Engineering) */}
        <div className="absolute bottom-[10%] left-[10%] w-[45vw] h-[45vw] max-w-[700px] max-h-[700px] bg-[#305cde] rounded-full mix-blend-multiply dark:mix-blend-screen animate-float-bl"></div>
        <div className="absolute bottom-[20%] left-[25%] w-[35vw] h-[35vw] max-w-[550px] max-h-[550px] bg-[#008080] rounded-full mix-blend-multiply dark:mix-blend-screen animate-float-tl opacity-80"></div>
        
        {/* Top Right - Pink/Purple (Ushers) */}
        <div className="absolute top-[5%] right-[10%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-[#fd3db5] rounded-full mix-blend-multiply dark:mix-blend-screen animate-float-tr"></div>
        <div className="absolute top-[20%] right-[25%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-[#6633cc] rounded-full mix-blend-multiply dark:mix-blend-screen animate-float-bl opacity-90"></div>
        
        {/* Bottom Right - Red/Orange (Couples) */}
        <div className="absolute bottom-[5%] right-[15%] w-[45vw] h-[45vw] max-w-[700px] max-h-[700px] bg-[#ff0000] rounded-full mix-blend-multiply dark:mix-blend-screen animate-float-br"></div>
        <div className="absolute bottom-[15%] right-[30%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-[#ff9900] rounded-full mix-blend-multiply dark:mix-blend-screen animate-float-tl opacity-90"></div>

        {/* Center Blend Nodes for richer gradient across the middle */}
        <div className="absolute top-[40%] left-[40%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] bg-[#6633cc] rounded-full mix-blend-multiply dark:mix-blend-screen animate-float-tr opacity-60"></div>
        <div className="absolute bottom-[35%] right-[40%] w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] bg-[#E5B53B] rounded-full mix-blend-multiply dark:mix-blend-screen animate-float-bl opacity-60"></div>
        <div className="absolute top-[45%] right-[30%] w-[25vw] h-[25vw] max-w-[350px] max-h-[350px] bg-[#fd3db5] rounded-full mix-blend-multiply dark:mix-blend-screen animate-float-br opacity-50"></div>
        <div className="absolute bottom-[40%] left-[30%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] bg-[#305cde] rounded-full mix-blend-multiply dark:mix-blend-screen animate-float-tl opacity-60"></div>

      </div>

      {/* 
        2. The Frosted Glass Grain (Noise Texture)
        By increasing the opacity and using mix-blend-overlay, this creates 
        that exact premium frosted glass texture seen in UI design trends.
        In dark mode, we use mix-blend-soft-light to prevent the grain from looking harsh against pure OLED black.
      */}
      <div 
        className="absolute inset-0 opacity-[0.25] dark:opacity-[0.10] mix-blend-overlay dark:mix-blend-screen z-10 pointer-events-none"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      ></div>

      {/* 3. A subtle darkening gradient to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/20 dark:to-black/80 z-20"></div>

    </div>
  );
}
