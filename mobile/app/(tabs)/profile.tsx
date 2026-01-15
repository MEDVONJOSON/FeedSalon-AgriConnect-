import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '../../contexts/AuthContext';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import Colors from '../../constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import {
  User,
  Settings,
  CreditCard,
  Bell,
  HelpCircle,
  LogOut,
  ChevronRight,
  ShieldCheck,
  MapPin,
  Phone,
  Mail,
  Edit2
} from '../../components/icons';

export default function ProfileScreen() {
  const router = useRouter();
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Logout',
        style: 'destructive',
        onPress: async () => {
          await logout();
          router.replace('/(auth)/login' as any);
        },
      },
    ]);
  };

  const accountItems = [
    { label: 'Edit Profile', icon: User, route: '/(auth)/login' }, // Placeholder route
    { label: 'Payment Methods', icon: CreditCard, route: '/(tabs)/marketplace' },
    { label: 'Notifications', icon: Bell, route: '/(tabs)/index' },
  ];

  const supportItems = [
    { label: 'Help Center', icon: HelpCircle, route: '/' },
    { label: 'About App', icon: ShieldCheck, route: '/' },
  ];

  const renderItem = (item: any, index: number, total: number) => (
    <TouchableOpacity
      key={index}
      style={[
        styles.actionItem,
        index === total - 1 && { borderBottomWidth: 0 }
      ]}
    >
      <View style={styles.actionLeft}>
        <View style={styles.iconWrapper}>
          <item.icon size={20} color={Colors.primary} />
        </View>
        <Text style={styles.actionText}>{item.label}</Text>
      </View>
      <ChevronRight size={18} color="#9CA3AF" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <LinearGradient
          colors={[Colors.primary, '#15803d']}
          style={styles.header}
        >
          <TouchableOpacity style={styles.editBtn}>
            <Edit2 size={18} color={Colors.white} />
          </TouchableOpacity>

          <View style={styles.profileInfo}>
            <View style={styles.avatarWrapper}>
              <LinearGradient
                colors={['#fff', '#f0fdf4']}
                style={styles.avatarGradient}
              >
                <Text style={styles.avatarText}>
                  {user?.name?.charAt(0).toUpperCase() || 'U'}
                </Text>
              </LinearGradient>
              <View style={styles.verifiedBadge}>
                <ShieldCheck size={14} color={Colors.white} />
              </View>
            </View>

            <Text style={styles.name}>{user?.name || 'Agri Connect Farmer'}</Text>
            <View style={styles.roleBadge}>
              <Text style={styles.roleText}>{user?.role?.toUpperCase() || 'FARMER'}</Text>
            </View>
          </View>
        </LinearGradient>

        <View style={styles.content}>
          <Card style={styles.detailsCard}>
            <View style={styles.detailRow}>
              <Mail size={16} color="#6B7280" />
              <Text style={styles.detailText}>{user?.email || 'No email provided'}</Text>
            </View>
            <View style={styles.detailRow}>
              <Phone size={16} color="#6B7280" />
              <Text style={styles.detailText}>{user?.phone || '+232 00 000 000'}</Text>
            </View>
            <View style={styles.detailRow}>
              <MapPin size={16} color="#6B7280" />
              <Text style={styles.detailText}>{user?.location || 'Freetown, Sierra Leone'}</Text>
            </View>
          </Card>

          <Text style={styles.sectionHeader}>Account Settings</Text>
          <View style={styles.actionCard}>
            {accountItems.map((item, i) => renderItem(item, i, accountItems.length))}
          </View>

          <Text style={styles.sectionHeader}>Support & Info</Text>
          <View style={styles.actionCard}>
            {supportItems.map((item, i) => renderItem(item, i, supportItems.length))}
          </View>

          <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
            <LinearGradient
              colors={['#fef2f2', '#fee2e2']}
              style={styles.logoutGradient}
            >
              <LogOut size={20} color="#ef4444" />
              <Text style={styles.logoutText}>Sign Out</Text>
            </LinearGradient>
          </TouchableOpacity>

          <Text style={styles.versionText}>v1.2.0-pwa-hybrid</Text>
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
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    alignItems: 'center',
  },
  editBtn: {
    position: 'absolute',
    top: 60,
    right: 24,
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: 10,
    borderRadius: 12,
  },
  profileInfo: {
    alignItems: 'center',
  },
  avatarWrapper: {
    marginBottom: 16,
  },
  avatarGradient: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  avatarText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  verifiedBadge: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    backgroundColor: '#3B82F6',
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#1EB53A',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.white,
    marginBottom: 8,
  },
  roleBadge: {
    backgroundColor: 'rgba(0,0,0,0.15)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  roleText: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
  },
  content: {
    padding: 24,
    marginTop: -20,
  },
  detailsCard: {
    backgroundColor: Colors.white,
    padding: 20,
    borderRadius: 24,
    gap: 16,
    marginBottom: 24,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  detailText: {
    fontSize: 14,
    color: '#4B5563',
    fontWeight: '500',
  },
  sectionHeader: {
    fontSize: 14,
    fontWeight: '700',
    color: '#9CA3AF',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 12,
    marginLeft: 4,
  },
  actionCard: {
    backgroundColor: Colors.white,
    borderRadius: 24,
    paddingHorizontal: 16,
    marginBottom: 24,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
  },
  actionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  actionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  iconWrapper: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#F0FDF4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionText: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.text,
  },
  logoutBtn: {
    marginTop: 8,
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#FEE2E2',
  },
  logoutGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    gap: 10,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#EF4444',
  },
  versionText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#9CA3AF',
    marginTop: 32,
  },
});
