# Deploying Agri Connect

## Option 1: Vercel (Recommended for Next.js)
1. Go to [Vercel](https://vercel.com) and sign up with GitHub.
2. Click "Add New" > "Project".
3. Import the `FeedSalon-AgriConnect-` repository.
4. **Build Settings**:
   - Framework Preset: Next.js
   - Root Directory: `client` (Important! Check "Edit" next to Root Directory and select the `client` folder).
5. Click "Deploy".

## Option 2: GitHub Pages (Frontend Only)
1. Go to your repository Settings > Pages.
2. Select `main` branch and `/docs` folder (if you export there) or use a GitHub Action.
*Note: This app uses a Node.js backend (`server` folder). GitHub Pages only hosts static sites. You will need to host the server separately (e.g. on Render, Heroku) or move the backend logic to Next.js API routes.*

## Option 3: Render / Heroku (Full Stack)
1. You can deploy the `server` folder as a Node.js web service.
2. Deploy the `client` folder as a separate Static Site or Node service.
