# Implementation Plan Document

## 1. Overview
This document outlines the phases of the JOHIA Cubao V2 project, detailing what was built, what is currently being built, and the roadmap for future backend integration.

## 2. Goals
Deliver a blazing-fast, visually premium website for the church, migrating from the old platform to a modern React SPA, followed by a gradual rollout of a dedicated content management backend.

## 3. Implementation Phases

| Phase | What Gets Built | Key Deliverables | Status |
| :--- | :--- | :--- | :--- |
| **1. Planning & Setup** | Finalize design requirements, set up Vite + Tailwind, and configure GitHub Actions for CI/CD. | Project scaffold, Brand color config, `ComingSoon.jsx` gate. | ✅ Complete |
| **2. Frontend Architecture** | Build the core layout, routing, and shared UI components (`TiltCard`, `AnimatedSection`). | Responsive nav, footer, dark mode toggle. | ✅ Complete |
| **3. Content Migration** | Map existing website copy to the new V2 components. | Home, About, Programs, Give, Contact pages populated. | ✅ Complete |
| **4. Perf & Aesthetics** | Overhaul visual design with 3D elements while strictly managing mobile performance. | ShaderGradient integration, Route Code-Splitting, Input Debouncing, Imagemin. | ✅ Complete |
| **5. Stakeholder Review** | Soft-launch via `/?preview=johia`. Gather missing assets (GCash QR, Stats). | Finalized copy, approved media assets. | ⏳ In Progress |
| **6. Public Launch** | Disable `IS_COMING_SOON_MODE`. Point main DNS to the live deployment. | Live production website. | 🗓️ Pending |
| **7. Backend Admin (V2.1)**| Setup `admin.johiacubao.com`, database schema, and CMS for dynamic content. | SQL Database, API endpoints, Admin Dashboard. | 🗓️ Future |

## 4. Key Milestones

| Milestone | Description |
| :--- | :--- |
| **Alpha Build** | Core React pages built and deployed behind maintenance wall. |
| **V2 Copy Sync** | All content from `WEBSITE-WRITE-UP.xlsx` successfully merged. |
| **Tech Stack Expansion** | React Three Fiber and performance optimizations successfully merged. |
| **Asset Finalization** | All stakeholder feedback addressed and missing media uploaded. |
| **Go Live** | The public launch of JOHIA Cubao V2. |
