# Agri Connect Mobile App

React Native/Expo mobile application for Agri Connect - Sierra Leone agricultural platform.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- iOS Simulator (for Mac) or Android Studio (for Android)

### Installation

1. Install dependencies:
```bash
cd mobile
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env
# Edit .env and set EXPO_PUBLIC_API_URL to your backend URL
```

3. Start the development server:
```bash
npm start
```

4. Run on iOS:
```bash
npm run ios
```

5. Run on Android:
```bash
npm run android
```

## Project Structure

```
mobile/
├── app/                    # Expo Router app directory
│   ├── (auth)/            # Authentication screens
│   ├── (tabs)/            # Main app tabs
│   └── _layout.tsx         # Root layout
├── components/            # Reusable components
│   └── ui/                # UI primitives
├── lib/                   # Utilities and API client
├── contexts/              # React contexts
├── constants/             # App constants
└── package.json
```

## Features

- Authentication (Login/Signup)
- Dashboard with weather and stats
- AI Chatbot with image upload
- Marketplace for buying/selling produce
- Disease Detection with camera
- Crop Recommendation
- Weather Forecast
- Farmer Connect (social features)

## Building for Production

### iOS

1. Install EAS CLI:
```bash
npm install -g eas-cli
```

2. Configure EAS:
```bash
eas build:configure
```

3. Build for iOS:
```bash
eas build --platform ios
```

### Android

```bash
eas build --platform android
```

## Environment Variables

- `EXPO_PUBLIC_API_URL`: Backend API URL (default: http://localhost:5000)

## Notes

- The app uses AsyncStorage for local data persistence
- Image uploads use base64 encoding
- Location services require permissions
- Camera access requires permissions
