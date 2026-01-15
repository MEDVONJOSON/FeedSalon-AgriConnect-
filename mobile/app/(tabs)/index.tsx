import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '../../contexts/AuthContext';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../../constants/Colors';
import {
  ChatIcon,
  WeatherIcon,
  CropIcon,
  DiseaseIcon,
  MarketplaceIcon,
  DashboardIcon,
  ChevronRight,
  Plus
} from '../../components/icons';

export default function DashboardScreen() {
  const { user } = useAuth();
  const router = useRouter();
  const [refreshing, setRefreshing] = useState(false);

  const weatherData = {
    temp: '28°C',
    humidity: '65%',
    wind: '12 km/h',
    condition: 'Partly Cloudy',
  };

  const quickStats = [
    { label: 'Active Fields', value: '3', color: Colors.primary, icon: CropIcon },
    { label: 'Predicted Yield', value: '95%', color: Colors.secondary, icon: DashboardIcon },
    { label: 'Farm Health', value: 'Good', color: Colors.success, icon: DashboardIcon },
    { label: 'Alerts', value: '2', color: Colors.warning, icon: DiseaseIcon },
  ];

  const quickActions = [
    { title: 'Crop Guide', route: '/crop-recommendation', color: Colors.primary, icon: CropIcon },
    { title: 'Disease AI', route: '/disease-detection', color: Colors.error, icon: DiseaseIcon },
    { title: 'Weather', route: '/weather', color: Colors.secondary, icon: WeatherIcon },
    { title: 'Market', route: '/(tabs)/marketplace', color: Colors.success, icon: MarketplaceIcon },
  ];

  const onRefresh = async () => {
    setRefreshing(true);
    // Simulate refresh
    setTimeout(() => setRefreshing(false), 1000);
  };

  return (
    <ScrollView
      style={styles.container}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
      <LinearGradient
        colors={[Colors.primary, '#15803d']}
        style={styles.header}
      >
        <View style={styles.headerContent}>
          <View>
            <Text style={styles.greeting}>Welcome back,</Text>
            <Text style={styles.name}>{user?.name || 'User'}</Text>
          </View>
          <Badge variant="default" style={styles.roleBadge}>
            {user?.role?.toUpperCase() || 'FARMER'}
          </Badge>
        </View>
      </LinearGradient>

      <Card style={styles.weatherCard}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Weather Update</Text>
          <WeatherIcon size={20} color={Colors.textSecondary} />
        </View>
        <View style={styles.weatherContent}>
          <View>
            <Text style={styles.temp}>{weatherData.temp}</Text>
            <Text style={styles.condition}>{weatherData.condition}</Text>
          </View>
          <View style={styles.weatherDetails}>
            <Text style={styles.weatherText}>Humidity: {weatherData.humidity}</Text>
            <Text style={styles.weatherText}>Wind: {weatherData.wind}</Text>
          </View>
        </View>
      </Card>

      <View style={styles.statsContainer}>
        {quickStats.map((stat, index) => (
          <Card key={index} style={styles.statCard}>
            <stat.icon size={20} color={stat.color} />
            <Text style={styles.statValue}>{stat.value}</Text>
            <Text style={styles.statLabel}>{stat.label}</Text>
          </Card>
        ))}
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Powerful Tools</Text>
        <View style={styles.actionsGrid}>
          {quickActions.map((action, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.actionButton, { backgroundColor: action.color + '10', borderColor: action.color + '20' }]}
              onPress={() => router.push(action.route as any)}
            >
              <View style={[styles.actionIconContainer, { backgroundColor: action.color }]}>
                <action.icon size={24} color={Colors.white} />
              </View>
              <Text style={styles.actionText}>{action.title}</Text>
              <ChevronRight size={16} color={Colors.textSecondary} />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <TouchableOpacity
        style={styles.aiBanner}
        onPress={() => router.push('/(tabs)/agri-ai')}
      >
        <LinearGradient
          colors={['#0072C6', '#004a80']}
          style={styles.aiBannerGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <View style={styles.aiBannerContent}>
            <ChatIcon size={32} color={Colors.white} />
            <View style={styles.aiBannerText}>
              <Text style={styles.aiBannerTitle}>Ask Agri AI</Text>
              <Text style={styles.aiBannerSubtitle}>Get expert advice for your crops instantly</Text>
            </View>
            <Plus size={24} color={Colors.white} />
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    padding: 20,
    paddingTop: 60,
    paddingBottom: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 16,
    color: Colors.white,
    opacity: 0.9,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.white,
    marginTop: 4,
  },
  roleBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  weatherCard: {
    margin: 16,
    marginTop: -20,
    padding: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.text,
  },
  weatherContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  temp: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.text,
  },
  condition: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginTop: 4,
  },
  weatherDetails: {
    alignItems: 'flex-end',
  },
  weatherText: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginTop: 4,
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    gap: 12,
  },
  statCard: {
    width: '47%',
    alignItems: 'center',
    padding: 16,
  },
  statValue: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.text,
    marginVertical: 4,
  },
  statLabel: {
    fontSize: 12,
    color: Colors.textSecondary,
    textAlign: 'center',
  },
  sectionContainer: {
    padding: 16,
    marginTop: 10,
  },
  actionsGrid: {
    gap: 12,
    marginTop: 12,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 16,
    borderWidth: 1,
  },
  actionIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  actionText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
  },
  aiBanner: {
    margin: 16,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 40,
  },
  aiBannerGradient: {
    padding: 20,
  },
  aiBannerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  aiBannerText: {
    flex: 1,
    marginLeft: 16,
  },
  aiBannerTitle: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  aiBannerSubtitle: {
    color: Colors.white,
    fontSize: 12,
    opacity: 0.8,
    marginTop: 2,
  },
});
