# 🚀 Deploy to Vercel NOW - Quick Guide

## Step-by-Step Deployment

### 1. Install Vercel CLI (2 minutes)

Open terminal and run:
```bash
npm install -g vercel
```

### 2. Login to Vercel (1 minute)

```bash
vercel login
```
- This will open your browser
- Sign up or login with GitHub/Email

### 3. Deploy the App (3 minutes)

```bash
cd mobile
vercel
```

**Answer the prompts:**
- ✅ Set up and deploy? → **Yes**
- ✅ Which scope? → **Select your account**
- ✅ Link to existing project? → **No** (first time)
- ✅ Project name? → **agri-connect-mobile** (or press Enter)
- ✅ Directory? → **./** (press Enter)
- ✅ Override settings? → **No** (press Enter)

### 4. Set Environment Variable (1 minute)

After first deploy, set your backend URL:

```bash
vercel env add EXPO_PUBLIC_API_URL
```

When prompted:
- **Value**: Enter your Render backend URL
  - Example: `https://feedsalon-backend.onrender.com`
- **Environment**: Select **Production, Preview, Development**

Then redeploy:
```bash
vercel --prod
```

## 🎉 Done!

Your app will be live at:
**https://agri-connect-mobile.vercel.app** (or your custom name)

## Access Your App

1. Go to the URL Vercel provides
2. Bookmark it for easy access
3. Share with team members
4. Use it while working!

## Update the App

Whenever you make changes:
```bash
cd mobile
vercel --prod
```

Or push to Git and Vercel will auto-deploy!

---

**Total Time**: ~7 minutes
**Result**: Live web app you can access anytime! 🚀
