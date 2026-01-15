# Automated Vercel Deployment Script for Agri Connect Mobile App

Write-Host "🚀 Agri Connect Mobile App - Vercel Deployment" -ForegroundColor Green
Write-Host "=============================================" -ForegroundColor Green
Write-Host ""

# Check if logged in
Write-Host "Checking Vercel authentication..." -ForegroundColor Yellow
$whoami = vercel whoami 2>&1

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Not logged in to Vercel" -ForegroundColor Red
    Write-Host ""
    Write-Host "Please login first:" -ForegroundColor Yellow
    Write-Host "1. Run: vercel login" -ForegroundColor Cyan
    Write-Host "2. Complete authentication in browser" -ForegroundColor Cyan
    Write-Host "3. Then run this script again" -ForegroundColor Cyan
    Write-Host ""
    exit 1
}

Write-Host "✅ Logged in as: $whoami" -ForegroundColor Green
Write-Host ""

# Get backend URL
Write-Host "📝 Backend API URL Configuration" -ForegroundColor Yellow
$backendUrl = Read-Host "Enter your backend URL (e.g., https://feedsalon-backend.onrender.com) or press Enter to skip"

# Deploy
Write-Host ""
Write-Host "🚀 Deploying to Vercel..." -ForegroundColor Green
Write-Host ""

# Create new project (not linking to existing)
$deployOutput = vercel --prod --yes 2>&1

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ Deployment successful!" -ForegroundColor Green
    Write-Host ""
    
    # Extract URL from output
    $url = ($deployOutput | Select-String -Pattern "https://.*\.vercel\.app" | Select-Object -First 1).Matches.Value
    
    if ($url) {
        Write-Host "🌐 Your app is live at: $url" -ForegroundColor Cyan
        Write-Host ""
        Write-Host "Opening in browser..." -ForegroundColor Yellow
        Start-Process $url
    }
    
    # Set environment variable if provided
    if ($backendUrl) {
        Write-Host ""
        Write-Host "📝 Setting environment variable..." -ForegroundColor Yellow
        Write-Host "Value: $backendUrl" -ForegroundColor Gray
        Write-Host ""
        Write-Host "Please run manually:" -ForegroundColor Yellow
        Write-Host "  vercel env add EXPO_PUBLIC_API_URL production" -ForegroundColor Cyan
        Write-Host "  (Paste: $backendUrl)" -ForegroundColor Gray
        Write-Host "  vercel --prod" -ForegroundColor Cyan
    }
    
} else {
    Write-Host ""
    Write-Host "❌ Deployment failed" -ForegroundColor Red
    Write-Host "Error output:" -ForegroundColor Yellow
    Write-Host $deployOutput -ForegroundColor Red
    Write-Host ""
    Write-Host "Try running manually:" -ForegroundColor Yellow
    Write-Host "  vercel --prod" -ForegroundColor Cyan
}

Write-Host ""
