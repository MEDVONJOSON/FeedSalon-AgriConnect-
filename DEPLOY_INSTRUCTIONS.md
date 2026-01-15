# 🚀 Deploy to Vercel - Simple Instructions

## Quick Deploy (5 minutes)

### Step 1: Login to Vercel

Open terminal in the `mobile` folder and run:

```bash
cd mobile
vercel login
```

This will:
- Open your browser
- Ask you to sign up/login (use GitHub, GitLab, or Email)
- Complete authentication

### Step 2: Deploy

```bash
vercel --prod
```

**Answer the prompts:**
- ✅ Set up and deploy? → **Yes** (press Enter)
- ✅ Which scope? → **Select your account** (press Enter)
- ✅ Link to existing project? → **No** (press Enter - first time)
- ✅ Project name? → **agri-connect-mobile** (press Enter or type custom name)
- ✅ Directory? → **./** (press Enter)
- ✅ Override settings? → **No** (press Enter)

### Step 3: Set Environment Variable

After deployment, set your backend URL:

```bash
vercel env add EXPO_PUBLIC_API_URL
```

When prompted:
- **Value**: Paste your Render backend URL
  - Example: `https://feedsalon-backend.onrender.com`
- **Environment**: Select **Production** (press Enter)

Then redeploy:
```bash
vercel --prod
```

## 🎉 Done!

Your app will be live at:
**https://agri-connect-mobile.vercel.app** (or your custom name)

## Access Your App

1. ✅ Copy the URL Vercel provides
2. ✅ Open it in your browser
3. ✅ Bookmark it
4. ✅ Share with your team
5. ✅ Use it while working!

## Update the App

Whenever you make changes:

```bash
cd mobile
vercel --prod
```

Or connect to Git for automatic deployments!

---

## Alternative: Use Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login
3. Click "Add New Project"
4. Import your Git repository OR upload the `mobile` folder
5. Configure:
   - **Framework Preset**: Other
   - **Root Directory**: `mobile`
   - **Build Command**: `npm run build:web`
   - **Output Directory**: `.expo/web-build`
6. Add Environment Variable:
   - Name: `EXPO_PUBLIC_API_URL`
   - Value: Your backend URL
7. Click "Deploy"

---

**Your app will be accessible 24/7 at the Vercel URL!** 🚀
