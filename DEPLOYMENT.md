# 🚀 Agri Connect - Free Deployment Guide

This project is optimized for deployment on **Render** (Backend) and **Vercel** (Frontend) using their free tiers.

## 🛠️ Backend Deployment (Render - FREE TIER)
1. Go to your **Render Dashboard**.
2. Click **"New"** > **"Web Service"**.
3. Select your `FeedSalon-AgriConnect-` repository.
4. **Settings**:
   - **Name**: `feedsalon-backend`
   - **Root Directory**: `server` (CRITICAL: Do not leave blank)
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
   - **Instance Type**: Select **Free**
5. Click **"Create Web Service"**.

## 🌐 Frontend Deployment (Vercel)
1. Go to [Vercel](https://vercel.com) and import your repo.
2. **Settings**:
   - **Root Directory**: `client`
   - **Framework**: Next.js
3. **Important: Environment Variables**:
   In Vercel Settings > Environment Variables, add:
   - `NEXT_PUBLIC_API_URL`: Your Render URL (e.g., `https://feedsalon-backend.onrender.com`)

---

## 🔍 Troubleshooting "Cannot find module"
If Render says it can't find `server.js`:
- Check that **Root Directory** is set to `server`.
- Check that **Start Command** is exactly `node server.js`.