# App Flow Document

## 1. Overview
This document maps the main user journeys through the website, showing what happens when a user navigates between pages and interacts with core features.

## 2. Key User Journeys
* **New Visitor Journey:** Homepage -> About Page (to learn about the church) -> Ministries Page (to find a group).
* **Congregation Journey:** Homepage -> Posts/Journals (to read latest sermons or Friday Alive recaps).
* **Donation Journey:** Homepage -> Give Page -> Scan GCash QR or view bank details.

## 3. App Flow Diagram

```mermaid
graph TD
    %% Main Entry Points
    Entry((Web Traffic)) --> Auth{Is Coming Soon Mode?}
    Auth -- Yes (Without bypass) --> CS[Coming Soon Page]
    Auth -- Yes (With /?preview=johia) --> Home
    Auth -- No (Live) --> Home[Homepage]

    %% Top Level Navigation
    Home --> About[About Page]
    Home --> Programs[Programs & Ministries]
    Home --> Give[Give / Donate Page]
    Home --> ContentHub[Content Hub: Posts / Journals / Media]
    Home --> Contact[Contact Page]

    %% Deep Links
    ContentHub --> Search[Search & Filter]
    Search --> PostDetail[Read Single Post / Sermon]
    
    Contact --> SubmitForm(Submit Contact Form)
    SubmitForm --> SuccessAlert[Success Notification]
```

## 4. Maintenance / Preview Flow
The application features a built-in maintenance gate (`IS_COMING_SOON_MODE`). 
1. User hits `johiacubao.com`.
2. App checks `localStorage` and URL parameters.
3. If no bypass is found, the user is locked into the `ComingSoon.jsx` route.
4. If `?preview=johia` is appended, a flag is stored in `localStorage`, and the full routing tree unlocks.
