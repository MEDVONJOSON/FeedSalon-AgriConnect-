# EAS Build Configuration Guide

This guide will help you configure and build the Agri Connect mobile app for production.

## Prerequisites

1. Install EAS CLI:
```bash
npm install -g eas-cli
```

2. Login to Expo:
```bash
eas login
```

3. Link your project:
```bash
eas build:configure
```

## iOS Build Configuration

### 1. Update app.json

Ensure your `app.json` has the correct iOS configuration:

```json
{
  "expo": {
    "ios": {
      "bundleIdentifier": "com.agriconnect.app",
      "buildNumber": "1.0.0",
      "supportsTablet": true
    }
  }
}
```

### 2. Create App Icons

Create app icons in the following sizes:
- 1024x1024 (required for App Store)
- Place in `mobile/assets/icon.png`

### 3. Create Splash Screen

Create splash screen:
- 2048x2048 (recommended)
- Place in `mobile/assets/splash.png`

### 4. Build for iOS

```bash
eas build --platform ios
```

For TestFlight:
```bash
eas build --platform ios --profile production
```

## Android Build Configuration

### 1. Update app.json

Ensure your `app.json` has the correct Android configuration:

```json
{
  "expo": {
    "android": {
      "package": "com.agriconnect.app",
      "versionCode": 1,
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#1EB53A"
      }
    }
  }
}
```

### 2. Create Adaptive Icon

Create adaptive icon:
- 1024x1024 foreground image
- Place in `mobile/assets/adaptive-icon.png`

### 3. Build for Android

```bash
eas build --platform android
```

For Play Store:
```bash
eas build --platform android --profile production
```

## Environment Variables

Set environment variables in EAS:

```bash
eas secret:create --scope project --name EXPO_PUBLIC_API_URL --value https://your-backend-url.com
```

## Build Profiles

Create `eas.json` in the mobile directory:

```json
{
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "preview": {
      "distribution": "internal"
    },
    "production": {
      "autoIncrement": true
    }
  },
  "submit": {
    "production": {}
  }
}
```

## Notes

- First build may take 15-20 minutes
- Subsequent builds are faster due to caching
- Ensure your backend CORS allows requests from the mobile app
- Test on physical devices before submitting to stores
