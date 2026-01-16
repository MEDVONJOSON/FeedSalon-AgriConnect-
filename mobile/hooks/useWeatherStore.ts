import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Forecast {
    day: string;
    high: string;
    low: string;
    condition: string;
    iconName: string; // Store icon name instead of component for persistence
}

interface WeatherData {
    temp: string;
    humidity: string;
    wind: string;
    condition: string;
    feelsLike: string;
    uvIndex: string;
    forecast: Forecast[];
}

interface WeatherState {
    weatherData: WeatherData;
    lastUpdated: number | null;
    setWeatherData: (data: WeatherData) => void;
}

export const useWeatherStore = create<WeatherState>()(
    persist(
        (set) => ({
            weatherData: {
                temp: '28°C',
                humidity: '65%',
                wind: '12 km/h',
                condition: 'Partly Cloudy',
                feelsLike: '30°C',
                uvIndex: 'Low',
                forecast: [
                    { day: 'Today', high: '30°C', low: '24°C', condition: 'Partly Cloudy', iconName: 'CloudSun' },
                    { day: 'Tomorrow', high: '31°C', low: '25°C', condition: 'Sunny', iconName: 'CloudSun' },
                    { day: 'Friday', high: '29°C', low: '23°C', condition: 'Rainy', iconName: 'Droplets' },
                    { day: 'Saturday', high: '28°C', low: '22°C', condition: 'Showers', iconName: 'Droplets' },
                ],
            },
            lastUpdated: null,
            setWeatherData: (data) => set({ weatherData: data, lastUpdated: Date.now() }),
        }),
        {
            name: 'weather-storage',
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
);
