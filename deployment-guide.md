# GitHub Actions to Hostinger: Deployment Guide

I have already created the deployment script (`.github/workflows/deploy.yml`) and pushed it to your GitHub repository. The automation is fully set up on the code side!

To make it actually work, you just need to link your GitHub repository to your Hostinger server using "Secrets". Follow these steps carefully:

## Step 1: Prepare Hostinger
Because you are replacing the "Hostinger AI Builder" site with this custom React app, we need to clear the way.
1. Log in to your Hostinger hPanel.
2. Go to **Websites**.
3. For `johiacubao.com`, disconnect or delete the AI Builder instance. This ensures your `public_html` folder is empty and ready to receive the custom React code.

## Step 2: Get your FTP Credentials
The GitHub Action needs permission to upload files to your server. It does this via FTP.
1. In hPanel, click **Manage** next to `johiacubao.com`.
2. On the left sidebar, search for or click on **Files** -> **FTP Accounts**.
3. Write down the following three pieces of information:
   - **FTP IP/Host** (Usually looks like an IP address or `ftp.domain.com`)
   - **FTP Username**
   - **FTP Password** (If you don't know it, you can change/reset it right there on that page).

## Step 3: Add Secrets to GitHub
Now we give those credentials to GitHub so it can log in to Hostinger automatically.
1. Open your web browser and go to your repository on GitHub: `https://github.com/2ru17/johia-cubao-web`
2. Click on the **Settings** tab (the gear icon near the top right).
3. On the left sidebar, scroll down to **Secrets and variables** and click on **Actions**.
4. Click the green button that says **New repository secret**.
5. You need to add 3 secrets exactly as named below (ALL CAPS):

   - **Name:** `FTP_SERVER`
     **Secret:** (Paste your FTP IP/Host here) -> Click Add Secret

   - **Name:** `FTP_USERNAME`
     **Secret:** (Paste your FTP Username here) -> Click Add Secret

   - **Name:** `FTP_PASSWORD`
     **Secret:** (Paste your FTP Password here) -> Click Add Secret

## Step 4: Trigger the Deployment
Once the secrets are added, the deployment is ready!
- Go to the **Actions** tab in your GitHub repository.
- You will likely see a failed run from when I pushed the code earlier (because the secrets were missing).
- Click on that failed run, and in the top right corner, click **Re-run jobs** -> **Re-run all jobs**.
- Watch the action run. Once it turns green, your custom React site is live on `johiacubao.com`!

(Note: From now on, anytime you `git push` to the `main` branch, it will automatically deploy within seconds).

---

## Phase 2: Upcoming Backend Deployment (`internals.johiacubao.com`)

When we are ready to deploy the Node.js + MySQL backend for the authorized user login portal, here is the context provided by Hostinger Support on how it will be structured:

**1. Authentication Logic (Your Code):**
- Hostinger provides the raw database, but the actual login/logout system must be built entirely into the Node.js backend.
- Users must be stored in a MySQL database with fields such as `email`, `password_hash`, `role`, and `status`.
- Passwords must be hashed securely using `bcrypt` or `Argon2` (never store plain-text passwords).
- The application will need to provide explicit `/login` and `/logout` API routes, using secure sessions or tokens (which get invalidated upon logout).
- Pages and API endpoints will be restricted based on roles (e.g., `admin` or `staff`).

**2. Database Management:**
- You can manage user records directly through `phpMyAdmin` (provided by Hostinger).
- Alternatively, we will build a secure admin panel directly into the React/Node app for easier management.

**3. Environment Variables (.env files):**
When the Node.js app is deployed to Hostinger, the `.env` variables (like database credentials, JWT secrets, etc.) are managed via the hPanel dashboard:
1. Open **hPanel -> Websites**.
2. Click **Dashboard** for `internals.johiacubao.com`.
3. Open the **Environment variables** section on the left sidebar.
4. Add new variables or edit existing ones.
5. Click **Apply changes**.

*Note: This backend system is a COMPLETELY isolated application. The main React website (`johiacubao.com`) will remain a static landing page and will NOT fetch data from this internal finance/admin dashboard.*
