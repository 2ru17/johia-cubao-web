# Design Brief Document

## 1. Overview
This document defines the comprehensive visual design direction for the JOHIA Cubao V2 website. It serves as the strict guideline for typography, color palettes, spacing, and interaction design to ensure a consistent, premium, and on-brand experience.

## 2. Brand Identity & Aesthetic
The design language bridges a highly premium tech feel with the warmth of a community church.
* **Core Aesthetic:** "Dynamic Glassmorphism". We utilize frosted glass panes layered over vibrant, moving mesh gradients.
* **Vibe:** Modern, bright, welcoming, and highly legible.
* **Motion:** Physics-based springs (via Framer Motion). Elements should feel heavy but fluid, never snappy or linear.

## 3. Comprehensive Color Palette
The application supports both Light (Default) and Dark modes. The core brand colors are represented dynamically through the background mesh gradients and Ministry-specific accents.

### Core System Colors
| Usage | Light Mode | Dark Mode | Notes |
| :--- | :--- | :--- | :--- |
| **App Background** | `#f9f9f9` | `#000000` (Pure Black) | Pure black is used instead of gray to increase contrast for the vibrant mesh orbs. |
| **Primary Text** | `#171717` (Neutral-900) | `#f3f4f6` (Gray-100) | We strictly use Tailwind's `neutral` palette for dark mode cards to avoid the unwanted blue tint in default `gray`. |
| **Card Background** | `rgba(255,255,255, 0.7)` | `rgba(255,255,255, 0.05)` | Paired with `backdrop-blur-md` or `blur-xl`. |
| **Card Borders** | `rgba(0,0,0, 0.1)` | `rgba(255,255,255, 0.08)` | 1px solid stroke to define edges against the gradient. |

### Ministry & Mood Colors (Hex Codes)
These specific hex codes power the background DOM mesh gradients and the Post categorization tags.
* **LinC (Youth/Joy):** `#E5B53B`, `#FBB03B`, `#FFD700`, `#FFA500` (Yellows & Golds)
* **YaH & Engineering (Peace):** `#305cde`, `#008080`, `#00BFFF`, `#1E90FF` (Blues & Teals)
* **Ushers (Worship):** `#fd3db5`, `#6633cc` (Pinks & Purples)
* **Couples (Fire/Action):** `#ff0000`, `#ff9900`, `#FF4500`, `#DC143C` (Reds & Oranges)
* **Reflection (Neutral):** `#25252A`, `#64748B` (Muted Grays)

## 4. Typography Rules
We utilize a clean, highly legible sans-serif stack to maintain a modern tech aesthetic.
* **Primary Font Family:** `Inter`, `system-ui`, `sans-serif`
* **Heading 1 (Hero):** 72px (Desktop), 48px (Mobile), `font-extrabold`, `tracking-tight`
* **Heading 2 (Section):** 48px (Desktop), 36px (Mobile), `font-bold`
* **Heading 3 (Cards):** 24px, `font-bold`
* **Body Text:** 18px (Desktop), 16px (Mobile), `font-normal`, `leading-relaxed` (1.625)
* **Overlines/Badges:** 12px, `font-bold`, `uppercase`, `tracking-wider`

## 5. UI Components & Effects Guidelines

### The Mesh Background
* **Implementation:** Built using absolute positioned HTML `<div>` elements rather than SVGs to prevent WebKit/Chromium compositor crashes.
* **Blur Radius:** `blur-[100px]` on Mobile, `blur-[140px]` on Desktop.
* **Hardware Acceleration:** All gradient orbs must include the `transform-gpu` class to offload rendering to the device GPU.
* **Noise Overlay:** A fractal noise SVG filter is overlaid across the entire app. Opacity is set at `0.25` (Light) and `0.10` (Dark) to create a premium frosted glass texture.

### Cards & Containers (`TiltCard`)
* **Interaction:** Physics-based 3D tilt on mouse hover.
* **Shadows:** Rest stop at `shadow-[0_10px_30px_rgba(0,0,0,0.1)]`. Hover state elevates to `shadow-[0_20px_40px_rgba(0,0,0,0.2)]`.
* **Border Radius:** Heavy rounding. Standard cards use `rounded-2xl` (16px) or `rounded-3xl` (24px).

### The Bento Grid
* Used for routing posts and ministries.
* **Mathematical Layout:** 
  * Every 5th item (index % 5 === 0) spans 2 columns and 2 rows (`md:col-span-2 md:row-span-2`).
  * Every 4th item (index % 5 === 3) spans 3 columns wide (`md:col-span-3`).
  * All other items are standard 1x1 squares.

### Buttons
* **Primary Action:** Solid background (usually Brand Yellow or White) with heavy drop shadows and slight scale-up on hover (`hover:scale-105`).
* **Secondary Action:** Transparent background, 1px solid border (`variant="outline"`), matching text color to the border.
