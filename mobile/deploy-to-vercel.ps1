# Agri Connect - Deploy to Vercel Script

Write-Host "🚀 Deploying Agri Connect Mobile App to Vercel" -ForegroundColor Green
Write-Host "=============================================" -ForegroundColor Green
Write-Host ""

# Check if Vercel CLI is installed
try {
    $vercelVersion = vercel --version
    Write-Host "✅ Vercel CLI found: $vercelVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Vercel CLI not found. Installing..." -ForegroundColor Red
    npm install -g vercel
}

Write-Host ""
Write-Host "📝 Step 1: Login to Vercel (if not already logged in)" -ForegroundColor Yellow
Write-Host "This will open your browser..." -ForegroundColor Gray
Write-Host ""
$login = Read-Host "Press Enter to login (or 's' to skip if already logged in)"

if ($login -ne 's') {
    vercel login
}

Write-Host ""
Write-Host "📝 Step 2: Setting up environment variable" -ForegroundColor Yellow
Write-Host "You need to provide your backend API URL" -ForegroundColor Gray
Write-Host ""
$apiUrl = Read-Host "Enter your backend URL (e.g., https://feedsalon-backend.onrender.com) or press Enter to skip"

if ($apiUrl) {
    Write-Host ""
    Write-Host "Setting environment variable..." -ForegroundColor Yellow
    vercel env add EXPO_PUBLIC_API_URL production
    Write-Host "Value: $apiUrl" -ForegroundColor Gray
    # Note: This will prompt for value, user needs to paste it
}

Write-Host ""
Write-Host "📝 Step 3: Deploying to Vercel" -ForegroundColor Yellow
Write-Host "Follow the prompts:" -ForegroundColor Gray
Write-Host "  - Set up and deploy? → Yes" -ForegroundColor Gray
Write-Host "  - Which scope? → Select your account" -ForegroundColor Gray
Write-Host "  - Link to existing project? → No (first time)" -ForegroundColor Gray
Write-Host "  - Project name? → agri-connect-mobile (or press Enter)" -ForegroundColor Gray
Write-Host "  - Directory? → ./ (press Enter)" -ForegroundColor Gray
Write-Host "  - Override settings? → No (press Enter)" -ForegroundColor Gray
Write-Host ""
Read-Host "Press Enter to start deployment"

vercel --prod

Write-Host ""
Write-Host "🎉 Deployment complete!" -ForegroundColor Green
Write-Host ""
Write-Host "Your app will be live at the URL shown above." -ForegroundColor Cyan
Write-Host "You can access it from any device!" -ForegroundColor Cyan
Write-Host ""
