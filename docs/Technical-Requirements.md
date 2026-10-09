# Technical Requirements Document (TRD)

## 1. Overview
This document defines the strict technical stack, architectural decisions, and performance requirements used to build and maintain the JOHIA Cubao V2 website.

## 2. Core Principles
* **Mobile-First Performance:** Given that the majority of the congregation accesses the site via mobile devices, keeping the JavaScript bundle small and the GPU usage low is paramount.
* **Component Reusability:** UI elements (Buttons, Cards, Modals) must be highly abstracted and reusable.
* **Serverless First:** The frontend operates entirely independently of a backend server, utilizing static files and edge delivery.

## 3. Frontend Technology Stack

| Area | Technology / Package | Justification & Usage |
| :--- | :--- | :--- |
| **Core Framework** | React 19 + Vite | Provides instantaneous Hot Module Replacement (HMR) during dev and heavily optimized, minified rollup builds for production. |
| **Styling Engine** | Tailwind CSS v3 | Utility-first styling. Configured with a custom `brand` color palette in `tailwind.config.js`. |
| **Class Merging** | `clsx` & `tailwind-merge` | Used to conditionally join Tailwind classes without styling conflicts (crucial for custom reusable UI components). |
| **Animation** | `framer-motion` | Powers the `PageTransition`, `AnimatedSection`, and physics-based `TiltCard` components. |
| **Routing** | `react-router-dom` v7 | Handles client-side SPA routing. Configured to automatically scroll to the top (or to a hash anchor) on page transitions. |
| **SEO & Meta** | `react-helmet-async` | Dynamically injects title and meta tags into the document `<head>` based on the current route. |
| **Icons** | `@tabler/icons-react` | Lightweight SVG icons used across navigation, buttons, and contact links. |

## 4. Performance & Optimization Strategy
To achieve and maintain our **82+ Mobile Performance Score**, the following strategies are strictly enforced:

1. **Route-Level Code Splitting:**
   * **Implementation:** `React.lazy()` is used in `App.jsx` for all secondary routes (About, Programs, Posts, etc.).
   * **Result:** The user only downloads the JavaScript required for the Homepage upon initial load. The rest is fetched dynamically on demand.
2. **Suspense & Skeletons:**
   * **Implementation:** A custom `PageSkeleton.jsx` wraps the React Router `<Suspense>` boundary to provide immediate visual feedback while lazy-loaded chunks are fetched over the network.
3. **Input Debouncing:**
   * **Implementation:** `use-debounce` is applied to the Posts search bar (300ms delay) to prevent expensive DOM recalculations and React re-renders on every keystroke.
4. **Image Compression:**
   * **Implementation:** `vite-plugin-image-optimizer` (powered by `sharp`) is integrated into `vite.config.js`. It mathematically compresses PNGs, JPEGs, and WebPs at build time.
   * **Implementation:** All raw `<img>` tags must include the `loading="lazy"` HTML attribute.

## 5. Deployment & CI/CD Pipeline
* **Hosting Provider:** Hostinger (React/Vite integration).
* **CI/CD:** The repository is directly connected to Hostinger via GitHub Webhooks.
* **Trigger:** Any push or Pull Request merge to the `main` branch automatically triggers Hostinger's edge servers to run `npm install`, `npm run build`, and deploy the static artifacts to the global CDN.

## 6. Future Backend Architecture (Planned V2.1)
* **Subdomain:** `admin.johiacubao.com`
* **Database:** MySQL/PostgreSQL
* **Architecture:** Standalone internal tool for church demographics (e.g., Laravel, Node.js/Express, or similar framework).
* **Isolation:** The future backend will function strictly as an independent CRM for demographic data, tithes, and attendance. It will **not** serve as a Headless CMS or API for the main website. The frontend React SPA will remain 100% static and serverless.
* *(Refer to `Backend-Schema.md` for the proposed internal CRM data relationships).*
