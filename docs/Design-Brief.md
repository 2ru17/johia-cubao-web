# Design Brief Document

## 1. Overview
This document defines the visual design direction for the JOHIA Cubao V2 website, ensuring a consistent, vibrant, and highly engaging user experience across all devices.

## 2. Brand Identity
The design language is modern, bright, and welcoming. It heavily relies on "Glassmorphism" (frosted glass, blurs, noise textures) layered over vibrant, moving 3D fluid gradients. The aesthetic bridges a highly premium tech feel with the warmth of a community church.

## 3. Color Palette
The application supports both Light (Default) and Dark modes. The core brand colors are represented dynamically through the background mesh gradients.
* **Base (Light):** `#f9f9f9` (Background), `text-neutral-900`
* **Base (Dark):** `#000000` (Background), `text-gray-100`
* **Brand Yellow (LinC):** `#E5B53B` / `#FBB03B`
* **Brand Blue/Teal (YaH):** `#305cde` / `#008080`
* **Brand Pink/Purple (Ushers):** `#fd3db5` / `#6633cc`
* **Brand Red/Orange (Couples):** `#ff0000` / `#ff9900`

> **Note:** We exclusively use Tailwind's `neutral` palette for dark mode grays to avoid the unwanted blue tint present in the default `gray` palette.

## 4. Typography
* **Primary Font:** `Inter` (or similar clean sans-serif) used for all body text, UI elements, and headings. Ensures maximum legibility across mobile and desktop.

## 5. UI Components & Effects
* **Cards & Containers:** Utilize `TiltCard` components wrapped in Framer Motion to provide physics-based hover interactions. Cards use frosted glass borders (`border-white/20` in dark mode) and soft drop shadows.
* **Bento Grid:** The Posts and Ministries sections use a mathematical Bento Box grid layout, scaling specific cards to be `large` or `wide` to break visual monotony.
* **3D Gradient:** The Hero section utilizes `ShaderGradient` via React Three Fiber to render a fluid, WebGL-based color mixing effect.
* **Skeletons:** Route transitions are masked by a custom, pulsing `PageSkeleton` component rather than a generic loading spinner.
