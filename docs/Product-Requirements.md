# Product Requirements Document (PRD)

## 1. Overview
This document serves as the comprehensive blueprint for the JOHIA Cubao V2 website. It outlines the product vision, target audience, core feature requirements, and success metrics from a product and user perspective.

## 2. Product Goal & Vision
To build a blazing-fast, visually premium digital home for the Jesus Our Hope International Assemblies (JOHIA) Cubao branch. The website must act as a digital front door for new visitors, a centralized content hub for existing members (sermons, journals), and a secure portal for tithes and contact inquiries.

## 3. Target User Personas
1. **The First-Time Visitor:** Looking for service times, location, and a general "vibe" of the church. They need clear navigation and immediate access to the "About" and "Contact/Location" sections.
2. **The Active Congregation Member:** Returning weekly to read Friday Alive (FA) recaps, download Sermon Notes, and access the Give portal. They require fast search functionality and clear content categorization.
3. **The Ministry Leader (Future Admin):** Needs to verify that their ministry's information (e.g., LinC, Couples) is accurately represented and eventually needs a backend portal to manage internal demographic data (not connected to the website).

## 4. Detailed Feature Requirements

### 4.1 Global Infrastructure
* **Soft-Launch / Maintenance Gate (`ComingSoon.jsx`):** 
  * The entire application must be gated behind a "Coming Soon" screen by default.
  * *Bypass:* Appending `/?preview=johia` to the URL sets a localStorage flag, bypassing the gate and allowing stakeholder review of the live production site.
* **Theme Management:**
  * Must support both Light (default) and Dark modes.
  * The user's preference must be saved to `localStorage` and persist across sessions.

### 4.2 Core Pages
* **Homepage:**
  * Dynamic DOM-based mesh gradient background.
  * "JOHIA by the Numbers" statistics counter (e.g., 6 Pastors, 10+ Ministries).
  * Direct CTAs to About, Programs, and Give.
* **About Page:**
  * Mission and Vision statements.
  * Pastoral Team hierarchy and bios.
* **Programs & Ministries:**
  * Bento Box grid displaying all active ministries.
  * Each card must utilize the ministry's specific brand color hex codes for hover glows.
* **Give Portal:**
  * Clear, secure display of tithe and offering guidelines.
  * Static display of official GCash QR codes and direct Bank Transfer details.

### 4.3 Content Hub (Posts & Journals)
* **Search & Filter:** 
  * Real-time search bar that scans post titles and excerpts.
  * *Requirement:* Must be debounced (300ms) to prevent UI stuttering on mobile devices.
* **Bento Grid Display:** 
  * Posts must render in a mathematically staggered grid (mix of large, wide, and standard squares) to maintain visual interest.
* **Pagination:**
  * Maximum of 6 posts per page to preserve DOM performance.
  * Pagination controls (Prev/Next) must render dynamically based on the total post count.

### 4.4 Contact System
* **Form Inputs:** Full Name, Email Address, and Message (All required).
* **Submission Handling:** 
  * Integrates with Web3Forms via background AJAX `fetch`.
  * *Requirement:* No page redirects. Upon success or failure, the UI must render an inline, animated Toast notification confirming the action.
* **Location Mapping:** Embedded interactive Google Map pointing precisely to the JOHIA Cubao physical address.

## 5. Success Metrics
* **Performance:** Hostinger/Lighthouse Mobile PageSpeed score must remain strictly above **80**. (Currently achieved: 82).
* **Bundle Size:** Initial JS payload must be minimized through strict route-level Code Splitting.
* **User Engagement:** Zero reported browser crashes from WebGL/CSS transform rendering (achieved via DOM mesh fallback).
