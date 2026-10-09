# Product Requirements Document (PRD)

## 1. Overview
This document outlines the core features and expected functionality of the JOHIA Cubao V2 website. It serves as the single source of truth for what the product does from a user's perspective.

## 2. Product Goal
To build a modern, blazing-fast, and visually engaging digital presence for JOHIA Cubao that clearly presents ministries, manages church communications (sermons, journals, media), and provides a seamless user experience across all devices.

## 3. Core Features

| Feature | Description | Expected Behavior |
| :--- | :--- | :--- |
| **Homepage** | Main landing page introducing JOHIA, key value propositions, and primary calls-to-action. | Displays the 3D fluid gradient hero, key statistics (e.g., 6 Pastors, 10+ Ministries), navigation menu, and links to key sections. |
| **About Page** | Information about the church's history, mission, vision, and pastoral team. | Accessible from the nav menu. Displays core beliefs and team hierarchy. |
| **Ministries & Programs** | Overviews of various church groups (e.g., Kids, Youth, Couples). | Lists all active ministries with dedicated cards and relevant CTAs to join or learn more. |
| **Give Page** | Secure portal detailing how to tithe and donate. | Displays offering guidelines, GCash QR codes, and bank transfer details. |
| **Media / Journals / Posts** | Content hubs for Sermon Notes, Devotionals, and Friday Alive (FA) recaps. | Displays a searchable, filterable Bento-box grid of all posts. Clicking a post opens a dedicated reading page. |
| **Contact Form** | Form for visitors to get in touch with the administration. | Validates user input, submits data securely, and shows a confirmation message. |
| **Theme Toggling** | Accessibility feature for visual comfort. | Allows users to toggle between Light (Default) and Dark modes, persisting the choice in local storage. |
| **Coming Soon Mode** | Soft-launch mechanism to gate the live site during development. | Intercepts all traffic and shows a maintenance screen unless the secret `/?preview=johia` URL parameter is used. |
