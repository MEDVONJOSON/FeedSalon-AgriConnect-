# ⚡ Quick Deploy to Vercel

## 3 Simple Commands

```bash
cd mobile
vercel login
vercel --prod
```

## When Prompted:

1. **Set up and deploy?** → Press Enter (Yes)
2. **Which scope?** → Select your account, press Enter
3. **Link to existing project?** → Type `n` and press Enter (No - create new)
4. **Project name?** → Type `agri-connect-mobile` or press Enter
5. **Directory?** → Press Enter (use current directory)
6. **Override settings?** → Press Enter (No)

## Set Backend URL:

```bash
vercel env add EXPO_PUBLIC_API_URL production
```

Paste your backend URL (e.g., `https://feedsalon-backend.onrender.com`)

## Redeploy:

```bash
vercel --prod
```

## ✅ Done!

Your app will be live at: **https://agri-connect-mobile.vercel.app**

---

**That's it!** 🎉
