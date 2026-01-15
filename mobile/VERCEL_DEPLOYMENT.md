# Deploying Agri Connect Mobile App to Vercel

## Quick Deploy

### Option 1: Deploy via Vercel CLI (Recommended)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Navigate to mobile directory
cd mobile

# Login to Vercel (first time only)
vercel login

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (Select your account)
# - Link to existing project? No
# - Project name? agri-connect-mobile (or your choice)
# - Directory? ./
# - Override settings? No
```

### Option 2: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login
3. Click "Add New Project"
4. Import your Git repository
5. Configure:
   - **Framework Preset**: Other
   - **Root Directory**: `mobile`
   - **Build Command**: `npm run build:web`
   - **Output Directory**: `.expo/web-build`
6. Add Environment Variables:
   - `EXPO_PUBLIC_API_URL` = Your backend URL (e.g., `https://your-backend.onrender.com`)
7. Click "Deploy"

## Environment Variables

Make sure to set these in Vercel Dashboard:

1. **EXPO_PUBLIC_API_URL**
   - Value: Your Render backend URL
   - Example: `https://feedsalon-backend.onrender.com`

## Build Configuration

The app is configured with:
- **Build Command**: `npm run build:web`
- **Output Directory**: `.expo/web-build`
- **Framework**: Expo Web

## After Deployment

Once deployed, you'll get a URL like:
- `https://agri-connect-mobile.vercel.app`

You can:
- Share this URL with others
- Access it from any device
- Use it while working on improvements

## Updating the Deployment

### Via CLI:
```bash
cd mobile
vercel --prod
```

### Via Dashboard:
- Push changes to your Git repository
- Vercel will automatically redeploy

## Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Ensure `EXPO_PUBLIC_API_URL` is set
- Check build logs in Vercel dashboard

### App Doesn't Load
- Verify environment variables are set
- Check that backend API is accessible
- Review browser console for errors

### CORS Issues
- Ensure backend CORS allows your Vercel domain
- Check `server/server.js` CORS configuration

## Notes

- This deploys the **web version** of the app
- Some mobile features work differently in web
- For native mobile apps, use EAS Build instead
- The web version is great for testing and demos

## Custom Domain (Optional)

1. Go to Vercel project settings
2. Add your custom domain
3. Update DNS records as instructed
4. Wait for SSL certificate

---

**Your app will be live at**: `https://your-project.vercel.app` 🚀
