# App Flow Document

## 1. Overview
This document exhaustively maps the user journeys and technical routing paths through the JOHIA Cubao V2 website. It serves as a guide for understanding how state, authentication gates, and route transitions interact.

## 2. Core Routing Architecture & Gatekeeping

The application utilizes a strict top-level routing gate in `App.jsx` based on the `IS_COMING_SOON_MODE` global flag.

```mermaid
graph TD
    %% Main Entry Points
    Entry((Web Traffic)) --> AuthCheck{Check Maintenance Flag}
    
    AuthCheck -- IS_COMING_SOON_MODE = true --> URLCheck{Check URL Params}
    URLCheck -- ?preview=johia --> SetLocal[Set localStorage bypass flag]
    SetLocal --> AppRouter[Main App Router]
    URLCheck -- No Param --> CheckLocal{Check localStorage}
    CheckLocal -- bypass flag = true --> AppRouter
    CheckLocal -- bypass flag = false --> CS[Coming Soon Screen]
    
    AuthCheck -- IS_COMING_SOON_MODE = false --> AppRouter
```

## 3. Main Application Flow

Once inside the `AppRouter`, all transitions are wrapped in `framer-motion`'s `<AnimatePresence>` to ensure smooth page-to-page fading. If a route is lazy-loaded, the `PageSkeleton` renders temporarily.

```mermaid
graph TD
    AppRouter((App Router)) --> Home[Homepage]
    
    %% Top Level Navigation
    Home -->|Nav Click| About[About Page]
    Home -->|Nav Click| Programs[Ministries & Programs]
    Home -->|Nav Click| Give[Give / Donate]
    Home -->|Nav Click| ContentHub[Posts & Journals Hub]
    Home -->|Nav Click| Contact[Contact Us]
    Home -->|Invalid URL| 404[404 Not Found]

    %% Deep Links - About
    About --> PastoralTeam(Pastoral Team Section)
    About --> CoreBeliefs(Core Beliefs Section)

    %% Deep Links - Content Hub
    ContentHub --> Search[Type in Search Bar]
    Search --> |Debounce 300ms| FilterLogic{Filter Array}
    FilterLogic --> RenderGrid[Render Bento Grid]
    RenderGrid --> ClickPost(Click Post Card)
    ClickPost --> PostDetail[Post Detail Page /:slug]

    %% Deep Links - Contact
    Contact --> FillForm(Fill Input Fields)
    FillForm --> SubmitForm{Submit Form}
    SubmitForm --> |AJAX Fetch| Web3Forms[(Web3Forms API)]
    Web3Forms --> |Success JSON| ToastSuccess[Render Success Toast]
    Web3Forms --> |Error JSON| ToastError[Render Error Toast]
```

## 4. Key UX Journeys

### Journey 1: The Content Consumer (Sermons/FA)
1. User lands on **Homepage**.
2. Clicks "Journals" or "Posts" in the navigation.
3. Lands on the **Content Hub** (`/posts`).
4. User types "Youth" into the search bar.
5. The application waits 300ms (Debounce), then filters the posts to only show Friday Alive (FA) and youth-related sermons.
6. User clicks a specific card.
7. User reads the sermon on the **Post Detail** (`/posts/:slug`) page.

### Journey 2: The Donor
1. User lands on **Homepage**.
2. Clicks "Give" in the main navigation.
3. Lands on the **Give Page**.
4. Reviews the core giving philosophy.
5. Scans the official GCash QR code displayed on the screen using their mobile banking app.

### Journey 3: The Stakeholder Preview
1. Administrator sends the link `johiacubao.com/?preview=johia` to a Ministry Leader.
2. The Ministry Leader clicks the link on their mobile device.
3. The React app detects the URL parameter, saves `bypassComingSoon=true` to local storage, and strips the parameter from the URL cleanly.
4. The Ministry Leader can now browse the entire live site as if it were fully launched, while the general public still sees the "Coming Soon" page.
