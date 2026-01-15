import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Alert,
  TouchableOpacity,
} from 'react-native';
import * as Location from 'expo-location';
import { Card } from '../components/ui/Card';
import Colors from '../constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import {
  CloudSun,
  Wind,
  Droplets,
  Navigation,
  Search,
  Thermometer,
  Calendar,
  Sprout,
  ChevronRight,
  AlertCircle
} from '../components/icons';

export default function WeatherScreen() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [loading, setLoading] = useState(true);
  const [weatherData, setWeatherData] = useState({
    temp: '28°C',
    humidity: '65%',
    wind: '12 km/h',
    condition: 'Partly Cloudy',
    feelsLike: '30°C',
    uvIndex: 'Low',
    forecast: [
      { day: 'Today', high: '30°C', low: '24°C', condition: 'Partly Cloudy', icon: CloudSun },
      { day: 'Tomorrow', high: '31°C', low: '25°C', condition: 'Sunny', icon: CloudSun },
      { day: 'Friday', high: '29°C', low: '23°C', condition: 'Rainy', icon: Droplets },
      { day: 'Saturday', high: '28°C', low: '22°C', condition: 'Showers', icon: Droplets },
    ],
  });

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission needed', 'Location permission is needed for accurate weather data.');
        setLoading(false);
        return;
      }

      const currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
      setLoading(false);
    } catch (error) {
      console.error('Error getting location:', error);
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <LinearGradient
          colors={['#4facfe', '#00f2fe']}
          style={styles.header}
        >
          <View style={styles.headerTop}>
            <View>
              <Text style={styles.headerTitle}>Weather Forecast</Text>
              {location ? (
                <View style={styles.locationWrapper}>
                  <Navigation size={14} color={Colors.white} />
                  <Text style={styles.locationText}>Your Location</Text>
                </View>
              ) : (
                <Text style={styles.locationText}>Detecting location...</Text>
              )}
            </View>
            <TouchableOpacity style={styles.searchButton}>
              <Search size={24} color={Colors.white} />
            </TouchableOpacity>
          </View>

          <View style={styles.currentWeather}>
            <CloudSun size={80} color={Colors.white} />
            <Text style={styles.currentTemp}>{weatherData.temp}</Text>
            <Text style={styles.currentCondition}>{weatherData.condition}</Text>
            <Text style={styles.feelsLike}>Feels like {weatherData.feelsLike}</Text>
          </View>

          <View style={styles.statsRow}>
            <View style={styles.statBox}>
              <Droplets size={20} color={Colors.white} />
              <Text style={styles.statValue}>{weatherData.humidity}</Text>
              <Text style={styles.statLabel}>Humidity</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statBox}>
              <Wind size={20} color={Colors.white} />
              <Text style={styles.statValue}>{weatherData.wind}</Text>
              <Text style={styles.statLabel}>Wind Speed</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statBox}>
              <Thermometer size={20} color={Colors.white} />
              <Text style={styles.statValue}>{weatherData.uvIndex}</Text>
              <Text style={styles.statLabel}>UV Index</Text>
            </View>
          </View>
        </LinearGradient>

        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={Colors.primary} />
            <Text style={styles.loadingText}>Syncing global weather data...</Text>
          </View>
        ) : (
          <View style={styles.content}>
            <View style={styles.sectionHeader}>
              <Calendar size={18} color={Colors.text} />
              <Text style={styles.sectionTitle}>7-Day Forecast</Text>
            </View>

            <View style={styles.forecastList}>
              {weatherData.forecast.map((day, index) => (
                <TouchableOpacity key={index} style={styles.forecastItem}>
                  <Text style={styles.forecastDay}>{day.day}</Text>
                  <View style={styles.forecastIconWrapper}>
                    <day.icon size={22} color={index === 2 ? '#3b82f6' : '#f59e0b'} />
                    <Text style={styles.forecastConditionText}>{day.condition}</Text>
                  </View>
                  <View style={styles.forecastTemps}>
                    <Text style={styles.forecastHigh}>{day.high}</Text>
                    <Text style={styles.forecastLow}>{day.low}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>

            <LinearGradient
              colors={['#fdfcfb', '#e2d1c3']}
              style={styles.recommendationCard}
            >
              <View style={styles.recHeader}>
                <Sprout size={24} color="#15803d" />
                <View>
                  <Text style={styles.recTitle}>Farming Advice</Text>
                  <Text style={styles.recSubtitle}>Daily recommendation</Text>
                </View>
              </View>

              <View style={styles.recContent}>
                <View style={styles.recItem}>
                  <View style={styles.recDot} />
                  <Text style={styles.recText}>Favorable for planting most crops today.</Text>
                </View>
                <View style={styles.recItem}>
                  <View style={styles.recDot} />
                  <Text style={styles.recText}>Moderate humidity is ideal for soil prep.</Text>
                </View>
                <View style={styles.recItem}>
                  <View style={styles.recDot} />
                  <Text style={styles.recText}>Clear skies ahead—perfect for harvest.</Text>
                </View>
              </View>

              <TouchableOpacity style={styles.recButton}>
                <Text style={styles.recButtonText}>View Detailed Planner</Text>
                <ChevronRight size={16} color={Colors.white} />
              </TouchableOpacity>
            </LinearGradient>

            <View style={styles.pollenBox}>
              <AlertCircle size={18} color="#92400e" />
              <Text style={styles.pollenText}>Slight pollen alert for allergy-sensitive workers.</Text>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  scrollContent: {
    paddingBottom: 40,
  },
  header: {
    padding: 24,
    paddingTop: 60,
    paddingBottom: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 32,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.white,
  },
  locationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    opacity: 0.9,
    gap: 4,
  },
  locationText: {
    color: Colors.white,
    fontSize: 13,
    fontWeight: '500',
  },
  searchButton: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: 10,
    borderRadius: 14,
  },
  currentWeather: {
    alignItems: 'center',
    marginBottom: 40,
  },
  currentTemp: {
    fontSize: 72,
    fontWeight: 'bold',
    color: Colors.white,
    marginTop: 10,
  },
  currentCondition: {
    fontSize: 22,
    fontWeight: '600',
    color: Colors.white,
    marginTop: -8,
  },
  feelsLike: {
    fontSize: 14,
    color: Colors.white,
    opacity: 0.8,
    marginTop: 4,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255,255,255,0.15)',
    padding: 20,
    borderRadius: 24,
  },
  statBox: {
    alignItems: 'center',
    flex: 1,
  },
  statValue: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 6,
  },
  statLabel: {
    color: Colors.white,
    fontSize: 11,
    opacity: 0.8,
    marginTop: 2,
  },
  statDivider: {
    width: 1,
    height: '60%',
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignSelf: 'center',
  },
  loadingContainer: {
    paddingTop: 60,
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 16,
    color: Colors.textSecondary,
    fontSize: 15,
  },
  content: {
    padding: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.text,
  },
  forecastList: {
    backgroundColor: Colors.white,
    borderRadius: 24,
    padding: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    marginBottom: 24,
  },
  forecastItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  forecastDay: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.text,
    width: 80,
  },
  forecastIconWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  forecastConditionText: {
    fontSize: 13,
    color: Colors.textSecondary,
  },
  forecastTemps: {
    flexDirection: 'row',
    gap: 12,
  },
  forecastHigh: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Colors.text,
  },
  forecastLow: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
  recommendationCard: {
    padding: 24,
    borderRadius: 28,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
  },
  recHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 20,
  },
  recTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#064e3b',
  },
  recSubtitle: {
    fontSize: 12,
    color: '#065f46',
    opacity: 0.7,
  },
  recContent: {
    marginBottom: 24,
  },
  recItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
  },
  recDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#059669',
  },
  recText: {
    fontSize: 14,
    color: '#065f46',
    lineHeight: 20,
  },
  recButton: {
    backgroundColor: '#15803d',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    borderRadius: 16,
    gap: 8,
  },
  recButtonText: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 15,
  },
  pollenBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEF3C7',
    padding: 14,
    borderRadius: 16,
    marginTop: 20,
    gap: 8,
  },
  pollenText: {
    fontSize: 13,
    color: '#92400e',
    fontWeight: '500',
  },
});
