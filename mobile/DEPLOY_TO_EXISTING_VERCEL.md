# Deploy Mobile App to Your Existing Vercel Account

Since you already have `feed-salon-agri-connect.vercel.app` deployed, we have two options:

## Option 1: Create New Project for Mobile App (Recommended)

This keeps your web app and mobile app separate.

### Steps:

1. **Login to Vercel** (if not already):
```bash
cd mobile
vercel login
```

2. **Deploy as New Project**:
```bash
vercel --prod
```

When prompted:
- **Set up and deploy?** → Yes
- **Link to existing project?** → **No** (create new)
- **Project name?** → `agri-connect-mobile` (or `feed-salon-mobile`)
- **Directory?** → `./`
- **Override settings?** → No

3. **Set Environment Variable**:
```bash
vercel env add EXPO_PUBLIC_API_URL production
```
- Paste your backend URL when prompted

4. **Redeploy**:
```bash
vercel --prod
```

**Result**: New URL like `agri-connect-mobile.vercel.app`

---

## Option 2: Update Existing Project

If you want to replace your web app with the mobile app:

1. **Link to Existing Project**:
```bash
cd mobile
vercel link
```

When prompted:
- **Link to existing project?** → Yes
- **Select project** → Choose `feed-salon-agri-connect` (or your project name)

2. **Set Environment Variable** (if not already set):
```bash
vercel env add EXPO_PUBLIC_API_URL production
```

3. **Deploy**:
```bash
vercel --prod
```

**Result**: Updates `feed-salon-agri-connect.vercel.app` with mobile app

---

## Option 3: Deploy via Vercel Dashboard

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure:
   - **Root Directory**: `mobile`
   - **Framework Preset**: Other
   - **Build Command**: `npm run build:web`
   - **Output Directory**: `.expo/web-build`
5. Add Environment Variable:
   - `EXPO_PUBLIC_API_URL` = Your backend URL
6. Click "Deploy"

---

## Quick Deploy Command

For a new mobile app project:

```bash
cd mobile
vercel login
vercel --prod
# Answer: No to "Link to existing project"
# Name it: agri-connect-mobile
```

Then set environment variable:
```bash
vercel env add EXPO_PUBLIC_API_URL production
# Paste your backend URL
vercel --prod
```

---

## Recommended Approach

**Create a separate project** for the mobile app:
- ✅ Keeps web and mobile separate
- ✅ Easy to manage both
- ✅ Can test independently
- ✅ Different URLs for different purposes

**New URL will be**: `agri-connect-mobile.vercel.app` (or your chosen name)

---

## After Deployment

Your mobile app will be live at the Vercel URL and you can:
- ✅ Access it from any device
- ✅ Share with team
- ✅ Use while working
- ✅ Update anytime with `vercel --prod`
