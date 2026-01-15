import Constants from 'expo-constants';

export const API_URL = 
  Constants.expoConfig?.extra?.apiUrl || 
  process.env.EXPO_PUBLIC_API_URL || 
  'http://localhost:5000';

export default API_URL;
