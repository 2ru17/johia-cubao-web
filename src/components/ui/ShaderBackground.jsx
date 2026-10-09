import React, { Suspense } from 'react';

// Lazy load ShaderGradient so it doesn't block the initial React hydration and page load (Mobile Performance)
const ShaderGradientCanvas = React.lazy(() => 
  import('shadergradient').then(module => ({ default: module.ShaderGradientCanvas }))
);
const ShaderGradient = React.lazy(() => 
  import('shadergradient').then(module => ({ default: module.ShaderGradient }))
);

export default function ShaderBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <Suspense fallback={<div className="absolute inset-0 bg-[#f9f9f9] dark:bg-black" />}>
        <ShaderGradientCanvas
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
          }}
        >
          <ShaderGradient
            control="query"
            urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1.2&cAzimuthAngle=180&cDistance=3.6&cPolarAngle=90&cameraZoom=1&color1=%23ff0000&color2=%23fd3db5&color3=%23305cde&def=0&envPreset=city&format=gif&fov=45&frameRate=10&grain=on&lightType=3d&pixelDensity=1.5&positionX=-1.4&positionY=0&positionZ=0&reflection=0.1&rotationX=0&rotationY=10&rotationZ=50&shader=defaults&type=water&uAmplitude=0&uDensity=1.5&uFrequency=5.5&uSpeed=0.2&uStrength=2.5&uTime=0.2&wireframe=false"
          />
        </ShaderGradientCanvas>
      </Suspense>
    </div>
  );
}
