# Mobile App Setup Instructions

## Quick Start

1. **Navigate to mobile directory:**
   ```bash
   cd mobile
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   # Create .env file
   echo "EXPO_PUBLIC_API_URL=http://localhost:5000" > .env
   # Or use your Render backend URL:
   # echo "EXPO_PUBLIC_API_URL=https://your-backend.onrender.com" > .env
   ```

4. **Start the development server:**
   ```bash
   npm start
   ```

5. **Run on device/simulator:**
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Scan QR code with Expo Go app on your phone

## Project Structure

```
mobile/
├── app/                    # Expo Router pages
│   ├── (auth)/            # Login/Signup screens
│   ├── (tabs)/            # Main app tabs (Dashboard, Marketplace, AI Chat, Profile)
│   └── [feature].tsx      # Feature screens (disease-detection, crop-recommendation, etc.)
├── components/            # Reusable components
│   ├── ui/                # UI primitives (Button, Card, Input, Badge)
│   ├── ErrorBoundary.tsx  # Error handling
│   └── LoadingSpinner.tsx # Loading states
├── lib/                    # Utilities
│   ├── api.ts             # API client
│   ├── auth.ts            # Authentication logic
│   ├── api-config.ts      # API configuration
│   └── offline.ts        # Network status utilities
├── contexts/              # React contexts
│   └── AuthContext.tsx    # Authentication context
├── constants/             # App constants
│   └── Colors.ts          # Color scheme
└── package.json           # Dependencies
```

## Features Implemented

✅ **Authentication**
- Login/Signup screens
- Role-based access (Farmer, Buyer, Admin)
- AsyncStorage for persistence

✅ **Dashboard**
- User welcome screen
- Weather widget
- Quick stats
- Quick action buttons

✅ **AI Chat**
- Text-based chat
- Image upload for disease detection
- Offline fallback responses
- Text-to-speech support

✅ **Marketplace**
- Product listings
- Category filters
- Search functionality
- Contact seller/inquiry form
- Pull-to-refresh

✅ **Disease Detection**
- Camera integration
- Image picker
- Crop type selection
- Analysis results display

✅ **Crop Recommendation**
- Form inputs (soil type, rainfall, climate)
- Personalized recommendations
- Tips and guidance

✅ **Weather**
- Location-based weather
- Current conditions
- 7-day forecast
- Farming recommendations

✅ **Farmer Connect**
- Social feed
- Farmer directory
- Post interactions

## Backend Integration

The mobile app connects to your existing backend API on Render. Ensure:

1. **CORS is configured** - Backend allows mobile app requests (already updated in `server/server.js`)
2. **API URL is set** - Update `EXPO_PUBLIC_API_URL` in `.env` file
3. **Endpoints are accessible** - All API endpoints from web app work with mobile app

## Testing

### iOS Simulator
```bash
npm run ios
```

### Android Emulator
```bash
npm run android
```

### Physical Device
1. Install Expo Go app
2. Run `npm start`
3. Scan QR code with Expo Go

## Building for Production

See `EAS_BUILD_GUIDE.md` for detailed instructions on building for App Store and Play Store.

## Troubleshooting

### Common Issues

1. **Metro bundler errors:**
   ```bash
   npm start -- --reset-cache
   ```

2. **Module not found:**
   ```bash
   rm -rf node_modules
   npm install
   ```

3. **iOS build issues:**
   - Ensure Xcode is installed
   - Run `pod install` in `ios/` directory (if using bare workflow)

4. **Android build issues:**
   - Ensure Android Studio is installed
   - Set up Android SDK

## Next Steps

1. Add app icons and splash screens to `assets/` directory
2. Configure EAS Build for production
3. Test on physical devices
4. Submit to App Store/Play Store
