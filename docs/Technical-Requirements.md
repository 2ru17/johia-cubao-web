# Technical Requirements Document

## 1. Overview
This document outlines the tools, technologies, and infrastructure used to build the JOHIA Cubao V2 website. It ensures alignment on the technical stack, performance benchmarks, and future architectural growth.

## 2. Technical Goals
Build a highly performant, accessible, and maintainable Single Page Application (SPA). Ensure a mobile-first performance approach (targeting high Hostinger mobile scores) through code splitting, lazy loading, and asset compression, while leaving room for a future headless backend.

## 3. Technology Stack

| Area | Tool / Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend Framework** | React 19 + Vite | Builds the user interface with fast module replacement and highly optimized production builds. |
| **Styling** | Tailwind CSS v3 | Utility-first CSS framework for rapid, responsive UI development. |
| **Animations** | Framer Motion | Powers page transitions, scroll animations, and interactive component states. |
| **3D Rendering** | React Three Fiber & ShaderGradient | Renders the high-performance WebGL fluid gradient background on the hero section. |
| **Routing** | React Router DOM v7 | Handles client-side navigation with route-level code splitting (`React.lazy`). |
| **Icons** | Tabler Icons & Lucide | Provides lightweight, scalable SVG iconography. |
| **Hosting & CI/CD** | Hostinger (Native GitHub Integration) | Hosts the frontend with automatic deployments on pushes to the `main` branch. |
| **Build Optimization** | Vite Image Optimizer (Sharp) | Automatically compresses images at build time to save bandwidth and improve mobile scores. |

## 4. Future Backend Architecture (Planned)
Currently, the application operates as a static frontend using mock JSON data. A future backend is planned under the `admin.johiacubao.com` subdomain.
* **Database:** MySQL or PostgreSQL (Hosted on Hostinger).
* **API / CMS Layer:** A Headless CMS (e.g., Strapi, Directus) or a custom Laravel API is recommended to allow non-technical church staff to publish sermons, manage ministries, and update the gallery without touching the codebase.
