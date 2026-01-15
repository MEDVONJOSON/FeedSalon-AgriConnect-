# 🚀 Start Deployment - Quick Guide

## Step 1: Login (One Time)

Open terminal in the `mobile` folder and run:

```bash
vercel login
```

**What happens:**
- Browser opens
- You login/authorize
- Terminal shows "Success! Authentication complete"

## Step 2: Deploy

After login, run:

```bash
vercel --prod
```

**Answer the prompts:**
- ✅ Set up and deploy? → **Yes** (press Enter)
- ✅ Which scope? → **Select your account** (press Enter)
- ✅ Link to existing project? → **No** (type `n`, press Enter)
- ✅ Project name? → **agri-connect-mobile** (press Enter)
- ✅ Directory? → **./** (press Enter)
- ✅ Override settings? → **No** (press Enter)

## Step 3: Set Backend URL

```bash
vercel env add EXPO_PUBLIC_API_URL production
```

Paste your backend URL (e.g., `https://feedsalon-backend.onrender.com`)

## Step 4: Redeploy

```bash
vercel --prod
```

## ✅ Done!

Your app will be live at the URL Vercel provides!

---

## Or Use the Automated Script

After logging in, just run:

```bash
.\deploy.ps1
```

The script will guide you through everything!

---

**Total time: ~5 minutes** ⏱️
