# Implementation Plan Document

## 1. Overview
This document outlines the highly granular implementation phases of the JOHIA Cubao V2 project. It breaks down the project into clear phases, tracks micro-tasks, and outlines the chronological roadmap from inception to the future backend rollout.

## 2. Project Status
Currently, the core Frontend SPA is complete and deployed to production behind a soft-launch gate. We are in Phase 5: Stakeholder Asset Review.

## 3. Detailed Implementation Phases

### Phase 1: Planning & Architecture Setup (✅ Complete)
- [x] Establish technical stack (React 19, Vite, Tailwind).
- [x] Configure Tailwind config with custom brand hex codes.
- [x] Establish base layout wrappers (`Layout.jsx`, `SectionWrapper.jsx`).
- [x] Implement the `IS_COMING_SOON_MODE` routing gate.
- [x] Setup `/?preview=johia` localStorage bypass logic.

### Phase 2: Core Components & Layout (✅ Complete)
- [x] Build robust `AnimatedSection` using Framer Motion.
- [x] Build physics-based `TiltCard` for interactive UI elements.
- [x] Build responsive Navigation Bar and Footer.
- [x] Implement system-wide Theme Toggling (Light/Dark mode) and persist in localStorage.

### Phase 3: Content Migration & Page Builds (✅ Complete)
- [x] Sync `WEBSITE-WRITE-UP.xlsx` copy to `Home.jsx`.
- [x] Sync copy to `About.jsx`.
- [x] Build `Give.jsx` and embed GCash QR placeholders.
- [x] Build `Programs.jsx` and `Ministries.jsx` using the Bento Grid layout.
- [x] Build `Contact.jsx` and wire it up to Web3Forms via AJAX fetch.

### Phase 4: Performance & Aesthetic Polish (✅ Complete)
- [x] Refactor DOM mesh gradient to remove SVG blur constraints and implement `transform-gpu` hardware acceleration.
- [x] Implement `React.lazy()` for all secondary routes to slash initial JS payload.
- [x] Build `PageSkeleton.jsx` to gracefully mask network latency during lazy loads.
- [x] Install `vite-plugin-image-optimizer` to compress production assets.
- [x] Implement `use-debounce` on the Posts search bar.
- [x] *Reverted:* 3D ShaderGradient implementation due to silent WebGL rendering crashes on specific local environments.

### Phase 5: Stakeholder Asset Review (⏳ In Progress)
- [ ] Receive finalized high-resolution ministry images.
- [ ] Receive final verification on "JOHIA by the Numbers" statistics.
- [ ] Receive final decision on keeping or disabling the GCash QR code.
- [ ] Replace placeholder images and hardcoded statistics with finalized data.

### Phase 6: Public Launch (🗓️ Pending)
- [ ] Toggle `IS_COMING_SOON_MODE` to `false` in `App.jsx`.
- [ ] Ensure all DNS records are cleanly pointing `johiacubao.com` to Hostinger.
- [ ] Monitor Hostinger/Lighthouse Mobile PageSpeed scores (Target: >80).

### Phase 7: Internal Demographics Portal V2.1 (🗓️ Future Expansion)
- [ ] Provision `admin.johiacubao.com` on Hostinger as a completely isolated application.
- [ ] Select backend framework for the internal CRM (e.g., Laravel, Node.js).
- [ ] Setup MySQL/PostgreSQL schema for church demographics and internal data.
- [ ] *Note: This system will act as a standalone internal tool and will not serve API data to the main website.*
