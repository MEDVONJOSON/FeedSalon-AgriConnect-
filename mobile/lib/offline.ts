import { useState, useEffect } from 'react';
import * as Network from 'expo-network';

export function useNetworkStatus() {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    checkNetworkStatus().then(setIsConnected);
    
    const interval = setInterval(() => {
      checkNetworkStatus().then(setIsConnected);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return { isConnected };
}

export async function checkNetworkStatus(): Promise<boolean> {
  try {
    const networkState = await Network.getNetworkStateAsync();
    return networkState.isConnected ?? false;
  } catch (error) {
    console.error('Error checking network:', error);
    return false;
  }
}
