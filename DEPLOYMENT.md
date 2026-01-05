# 🚀 Agri Connect - Platinum Deployment Guide

This project is optimized for automated deployment on **Render** (Backend) and **Vercel** (Frontend).

## 🛠️ Automated Render Deployment (Backend)
I have created a `render.yaml` file in the root directory. To fix your path issues automatically:
1. Go to your **Render Dashboard**.
2. Click **"New"** > **"Blueprint"**.
3. Select your `FeedSalon-AgriConnect-` repository.
4. Render will automatically detect the settings in `render.yaml` and configure:
   - **Root Directory**: `server`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
5. Click **"Apply"**.

## 🌐 Frontend Deployment (Vercel)
1. Go to [Vercel](https://vercel.com) and import your repo.
2. **Settings**:
   - **Root Directory**: `client`
   - **Framework**: Next.js
3. **Important: Environment Variables**:
   In Vercel Settings > Environment Variables, add:
   - `NEXT_PUBLIC_API_URL`: `https://your-backend-name.onrender.com`

---

## 🔍 Troubleshooting the "Cannot find module" Error
If you are doing manual setup on Render, ensure these settings:
- **Root Directory**: `server`
- **Start Command**: `node server.js`
- **DO NOT** use `node server/server.js` if the Root Directory is set to `server`.

## 📜 Regarding the String: `fc4551e7a2b2ae804e985d95827f03d0`
If this is a Render Secret or Environment Variable provided to you, you can add it in the Render Dashboard under **Environment** > **Environment Variables** as a new key (e.g., `RENDER_INSTANCE_ID`). 

The code has been pushed to GitHub. Simply "Apply" the Blueprint on Render and it will work!