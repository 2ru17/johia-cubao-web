# Instagram Feed Synchronization Guide

Because Instagram blocks direct scraping and third-party widgets often come with limits or watermarks, we use a **Simulated Grid** for the website. This provides maximum future-proofing, immediate load speeds, and zero cost.

When you want to update the 9 photos on the Media page to match your latest Instagram posts, follow these simple steps:

## Step 1: Download the Photos
1. Go to your Instagram page: `https://www.instagram.com/johiacubao`
2. Download the 9 most recent photos you want to display on the website.
3. Save them into the `public/images/ig/` directory in this codebase (create the folder if it doesn't exist).
   - *Tip: Name them sequentially, like `post1.jpg`, `post2.jpg`, ..., `post9.jpg`.*

## Step 2: Prompt the AI
Once the photos are in the folder, simply ask the AI to sync the feed:

> "Hey AI, please sync the Instagram feed based on SYNC_INSTAGRAM.md. I have placed the new photos in public/images/ig/."

## Step 3: What the AI Will Do (AI Instructions)
*When the user runs the prompt above, the AI must execute the following:*
1. Scan the `public/images/ig/` directory to identify the newly uploaded photos.
2. Open `src/pages/Media.jsx`.
3. Locate the `igPhotos` array.
4. Replace the 9 objects in the `igPhotos` array with the new file paths (e.g., `src: "/images/ig/post1.jpg"`).
5. Ensure the `link` property for all 9 objects points to `https://www.instagram.com/johiacubao`.
6. Save the file and notify the user that the sync is complete.
