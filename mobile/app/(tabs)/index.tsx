import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
  Image,
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
  Plus,
  CommunityIcon,
  TrendingUp,
  MapPin,
  Clock
} from '../../components/icons';

export default function DashboardScreen() {
  const { user } = useAuth();
  const router = useRouter();
  const [refreshing, setRefreshing] = useState(false);

  const weatherData = {
    temp: '29°C',
    humidity: '68%',
    wind: '14 km/h',
    condition: 'Partly Sunny',
    location: 'Freetown, SL'
  };

  const quickStats = [
    { label: 'Active Fields', value: '3', color: Colors.primary, icon: CropIcon },
    { label: 'Market Value', value: 'Le 4.2M', color: Colors.secondary, icon: TrendingUp },
    { label: 'Soil Health', value: '88%', color: Colors.success, icon: DashboardIcon },
    { label: 'System Alerts', value: '0', color: '#6B7280', icon: DiseaseIcon },
  ];

  const quickTools = [
    { title: 'Crop Doctor', subtitle: 'Analysis & Advice', route: '/crop-recommendation', color: Colors.primary, icon: CropIcon },
    { title: 'Disease Scan', subtitle: 'AI Plant Health', route: '/disease-detection', color: Colors.error, icon: DiseaseIcon },
    { title: 'Social Hub', subtitle: 'Farmer Connect', route: '/farmer-connect', color: '#8B5CF6', icon: CommunityIcon },
    { title: 'Marketplace', subtitle: 'Buy and Sell', route: '/(tabs)/marketplace', color: Colors.success, icon: MarketplaceIcon },
  ];

  const recentActivity = [
    { id: 1, type: 'market', title: 'Rice Prices Up 5%', time: '2h ago', icon: TrendingUp, iconColor: Colors.success },
    { id: 2, type: 'community', title: 'New post in Cocoa Farmers', time: '4h ago', icon: CommunityIcon, iconColor: '#8B5CF6' },
    { id: 3, type: 'weather', title: 'Heavy rain expected tomorrow', time: '1d ago', icon: WeatherIcon, iconColor: Colors.warning },
  ];

  const onRefresh = async () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        {/* Premium Header */}
        <LinearGradient
          colors={[Colors.primary, '#15803d']}
          style={styles.header}
        >
          <View style={styles.headerTop}>
            <View>
              <Text style={styles.greeting}>Good Morning,</Text>
              <Text style={styles.name}>{user?.name?.split(' ')[0] || 'Farmer'}</Text>
            </View>
            <TouchableOpacity onPress={() => router.push('/(tabs)/profile')} style={styles.profileBtn}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>{user?.name?.[0] || 'U'}</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.headerFooter}>
            <View style={styles.locationTag}>
              <MapPin size={12} color="#fff" {...({} as any)} />
              <Text style={styles.locationText}>Sierra Leone</Text>
            </View>
            <Badge variant="default" style={styles.roleBadge}>
              {user?.role?.toUpperCase() || 'FARMER'}
            </Badge>
          </View>
        </LinearGradient>

        {/* Dynamic Weather Widget */}
        <Card style={styles.infoCard}>
          <TouchableOpacity style={styles.weatherWidget} onPress={() => router.push('/weather')}>
            <View style={styles.weatherMain}>
              <View style={styles.weatherIconBg}>
                <WeatherIcon size={32} color={Colors.warning} {...({} as any)} />
              </View>
              <View style={styles.weatherTempContainer}>
                <Text style={styles.tempText}>{weatherData.temp}</Text>
                <Text style={styles.conditionText}>{weatherData.condition}</Text>
              </View>
            </View>
            <View style={styles.weatherStats}>
              <View style={styles.wStat}>
                <Text style={styles.wStatLabel}>Humidity</Text>
                <Text style={styles.wStatValue}>{weatherData.humidity}</Text>
              </View>
              <View style={styles.wStatDivider} />
              <View style={styles.wStat}>
                <Text style={styles.wStatLabel}>Wind</Text>
                <Text style={styles.wStatValue}>{weatherData.wind}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </Card>

        {/* Stats Grid */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Overview</Text>
            <TouchableOpacity><Text style={styles.seeAllText}>Details</Text></TouchableOpacity>
          </View>
          <View style={styles.statsGrid}>
            {quickStats.map((stat, index) => (
              <Card key={index} style={styles.statCard}>
                <View style={[styles.statIconContainer, { backgroundColor: stat.color + '15' }]}>
                  <stat.icon size={18} color={stat.color} {...({} as any)} />
                </View>
                <Text style={styles.statValue}>{stat.value}</Text>
                <Text style={styles.statLabel}>{stat.label}</Text>
              </Card>
            ))}
          </View>
        </View>

        {/* Main AI Banner */}
        <TouchableOpacity
          style={styles.aiHero}
          onPress={() => router.push('/(tabs)/agri-ai')}
        >
          <LinearGradient
            colors={['#1e3a8a', '#1e40af']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.aiHeroGradient}
          >
            <View style={styles.aiHeroContent}>
              <View style={styles.aiHeroText}>
                <Text style={styles.aiHeroTitle}>Talk to Agri AI</Text>
                <Text style={styles.aiHeroSubtitle}>Get expert guidance on soil, pests, and yield optimization instantly.</Text>
                <View style={styles.aiBadge}>
                  <Text style={styles.aiBadgeText}>AI Assistant Online</Text>
                </View>
              </View>
              <ChatIcon size={64} color="rgba(255,255,255,0.2)" style={styles.aiIconWatermark} {...({} as any)} />
            </View>
            <View style={styles.aiHeroFooter}>
              <Text style={styles.aiActionText}>Start Chatting</Text>
              <ChevronRight size={16} color="#fff" {...({} as any)} />
            </View>
          </LinearGradient>
        </TouchableOpacity>

        {/* Powerful Tools */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Powerful Tools</Text>
          <View style={styles.toolsGrid}>
            {quickTools.map((tool, index) => (
              <TouchableOpacity
                key={index}
                style={styles.toolItem}
                onPress={() => router.push(tool.route as any)}
              >
                <Card style={styles.toolCard}>
                  <View style={[styles.toolIconContainer, { backgroundColor: tool.color + '15' }]}>
                    <tool.icon size={24} color={tool.color} {...({} as any)} />
                  </View>
                  <Text style={styles.toolTitle}>{tool.title}</Text>
                  <Text style={styles.toolSubtitle}>{tool.subtitle}</Text>
                </Card>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Recent Activity */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Activity</Text>
          </View>
          <Card style={styles.activityCard}>
            {recentActivity.map((activity, index) => (
              <View key={activity.id} style={[styles.activityItem, index === recentActivity.length - 1 && { borderBottomWidth: 0 }]}>
                <View style={[styles.activityIcon, { backgroundColor: activity.iconColor + '15' }]}>
                  <activity.icon size={16} color={activity.iconColor} {...({} as any)} />
                </View>
                <View style={styles.activityContent}>
                  <Text style={styles.activityTitle}>{activity.title}</Text>
                  <View style={styles.activityMeta}>
                    <Clock size={12} color="#9CA3AF" />
                    <Text style={styles.activityTime}>{activity.time}</Text>
                  </View>
                </View>
                <ChevronRight size={14} color="#D1D5DB" {...({} as any)} />
              </View>
            ))}
          </Card>
        </View>
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
    borderBottomLeftRadius: 36,
    borderBottomRightRadius: 36,
    elevation: 10,
    shadowColor: '#1EB53A',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
    fontWeight: '500',
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.white,
    letterSpacing: -0.5,
  },
  profileBtn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.3)',
    padding: 2,
  },
  avatar: {
    flex: 1,
    borderRadius: 25,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  headerFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  locationTag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'rgba(255,255,255,0.15)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  locationText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  roleBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    borderWidth: 0,
  },
  infoCard: {
    margin: 16,
    marginTop: -24,
    borderRadius: 24,
    padding: 0,
    overflow: 'hidden',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
  },
  weatherWidget: {
    padding: 20,
  },
  weatherMain: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  weatherIconBg: {
    width: 60,
    height: 60,
    borderRadius: 20,
    backgroundColor: '#FFFBEB',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  weatherTempContainer: {
    flex: 1,
  },
  tempText: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#111827',
  },
  conditionText: {
    fontSize: 14,
    color: '#6B7280',
    fontWeight: '500',
  },
  weatherStats: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
    paddingTop: 16,
  },
  wStat: {
    flex: 1,
    alignItems: 'center',
  },
  wStatLabel: {
    fontSize: 12,
    color: '#9CA3AF',
    marginBottom: 2,
  },
  wStatValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#374151',
  },
  wStatDivider: {
    width: 1,
    height: '100%',
    backgroundColor: '#F3F4F6',
  },
  sectionContainer: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
  },
  seeAllText: {
    fontSize: 14,
    color: Colors.primary,
    fontWeight: 'bold',
  },
  statsGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  statCard: {
    flex: 1,
    padding: 12,
    borderRadius: 16,
    alignItems: 'center',
    elevation: 0,
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
  statIconContainer: {
    width: 32,
    height: 32,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
  },
  statLabel: {
    fontSize: 10,
    color: '#6B7280',
    marginTop: 2,
    textAlign: 'center',
  },
  aiHero: {
    margin: 16,
    marginTop: 28,
    borderRadius: 24,
    overflow: 'hidden',
    elevation: 4,
  },
  aiHeroGradient: {
    padding: 24,
  },
  aiHeroContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  aiHeroText: {
    flex: 1,
  },
  aiHeroTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  aiHeroSubtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
    lineHeight: 20,
    marginBottom: 16,
  },
  aiBadge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  aiBadgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  aiIconWatermark: {
    position: 'absolute',
    right: -10,
    top: -10,
  },
  aiHeroFooter: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  aiActionText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  toolsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 8,
  },
  toolItem: {
    width: '48.2%',
  },
  toolCard: {
    padding: 16,
    borderRadius: 20,
    elevation: 0,
    borderWidth: 1,
    borderColor: '#F3F4F6',
    gap: 8,
  },
  toolIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  toolTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
  },
  toolSubtitle: {
    fontSize: 12,
    color: '#6B7280',
  },
  activityCard: {
    padding: 0,
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#F3F4F6',
    elevation: 0,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  activityIcon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  activityContent: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1f2937',
  },
  activityMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 2,
  },
  activityTime: {
    fontSize: 12,
    color: '#9CA3AF',
  },
});
