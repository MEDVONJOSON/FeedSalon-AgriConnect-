# Web Testing Guide

## Starting the App in Browser

The mobile app can run in the browser using Expo's web support.

### Quick Start

```bash
cd mobile
npm run web
```

Or:

```bash
cd mobile
npx expo start --web
```

### Expected Behavior

1. Expo will start the Metro bundler
2. It will compile the app for web
3. It should automatically open your browser to `http://localhost:8081` or similar
4. The app will load in the browser

### Manual Access

If the browser doesn't open automatically:

1. Look for a message like: "Web is waiting on http://localhost:8081"
2. Open your browser
3. Navigate to: `http://localhost:8081`

### Features Available in Web

✅ **Working:**
- Authentication (Login/Signup)
- Dashboard
- Marketplace (browse, search, filters)
- AI Chat (text messages)
- Profile
- Navigation
- Forms

⚠️ **Limited/Not Available:**
- Camera (web has different API)
- Native file picker (uses web file input)
- Location services (requires HTTPS)
- Some native features

### Troubleshooting

**Port already in use:**
```bash
npx expo start --web --port 8082
```

**Clear cache:**
```bash
npx expo start --web --clear
```

**Check if web dependencies installed:**
```bash
npm list react-native-web react-dom
```

### Notes

- Web version is for development/testing
- Some mobile-specific features won't work
- For full mobile experience, use iOS/Android simulators or Expo Go app
- Production builds should target native platforms
