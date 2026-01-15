import { Stack } from 'expo-router';
import { AuthProvider } from '../contexts/AuthContext';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { NetworkStatus } from '../components/NetworkStatus';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useEffect(() => {
    // Hide splash screen after a short delay
    const timer = setTimeout(() => {
      SplashScreen.hideAsync();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ErrorBoundary>
      <AuthProvider>
        <StatusBar style="auto" />
        <View style={{ flex: 1 }}>
          <NetworkStatus />
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="(auth)" />
            <Stack.Screen name="(tabs)" />
            <Stack.Screen name="disease-detection" options={{ presentation: 'modal' }} />
            <Stack.Screen name="crop-recommendation" options={{ presentation: 'modal' }} />
            <Stack.Screen name="weather" options={{ presentation: 'modal' }} />
            <Stack.Screen name="farmer-connect" options={{ presentation: 'modal' }} />
          </Stack>
        </View>
      </AuthProvider>
    </ErrorBoundary>
  );
}
