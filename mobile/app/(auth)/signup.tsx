import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '../../components/ui/Button';
import Colors from '../../constants/Colors';
import { User as UserType } from '../../lib/auth';
import { LinearGradient } from 'expo-linear-gradient';
import {
  Sprout,
  Mail,
  Lock,
  User as UserIcon,
  ShoppingBag,
  MapPin,
  Phone,
  ChevronLeft
} from '../../components/icons';

export default function SignupScreen() {
  const router = useRouter();
  const { signup } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    location: '',
  });
  const [role, setRole] = useState<UserType['role']>('farmer');
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    if (!formData.name.trim() || !formData.email.trim()) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }

    setLoading(true);
    try {
      const userData: UserType = {
        name: formData.name,
        email: formData.email,
        role: role,
        phone: formData.phone || undefined,
        location: formData.location || undefined,
      };

      const success = await signup(userData);
      if (success) {
        router.replace('/(tabs)' as any);
      } else {
        Alert.alert('Error', 'Signup failed. Please try again.');
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const roles = [
    { id: 'farmer', label: 'Farmer', icon: Sprout },
    { id: 'buyer', label: 'Buyer', icon: ShoppingBag },
  ];

  const renderInput = (icon: any, placeholder: string, key: string, config: any = {}) => (
    <View style={styles.inputWrapper}>
      <View style={styles.inputIcon}>
        {React.createElement(icon, { size: 20, color: Colors.primary })}
      </View>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        value={(formData as any)[key]}
        onChangeText={(text) => setFormData({ ...formData, [key]: text })}
        placeholderTextColor="#9CA3AF"
        {...config}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#15803d', '#064e3b']}
        style={styles.background}
      />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => router.back()}
          >
            <ChevronLeft size={24} color={Colors.white} />
          </TouchableOpacity>

          <View style={styles.header}>
            <Text style={styles.title}>Join Us</Text>
            <Text style={styles.subtitle}>Start your smart farming journey today</Text>
          </View>

          <View style={styles.formCard}>
            <View style={styles.roleContainer}>
              {roles.map((r) => (
                <TouchableOpacity
                  key={r.id}
                  style={[
                    styles.roleTab,
                    role === r.id && styles.roleTabActive
                  ]}
                  onPress={() => setRole(r.id as UserType['role'])}
                >
                  <r.icon size={20} color={role === r.id ? Colors.white : '#9CA3AF'} />
                  <Text style={[
                    styles.roleTabText,
                    role === r.id && styles.roleTabTextActive
                  ]}>{r.label}</Text>
                </TouchableOpacity>
              ))}
            </View>

            {renderInput(UserIcon, 'Full Name *', 'name')}
            {renderInput(Mail, 'Email Address *', 'email', {
              keyboardType: 'email-address',
              autoCapitalize: 'none'
            })}
            {renderInput(Phone, 'Phone Number (Optional)', 'phone', {
              keyboardType: 'phone-pad'
            })}
            {renderInput(MapPin, 'Location (Optional)', 'location')}
            {renderInput(Lock, 'Password (Optional)', 'password', {
              secureTextEntry: true
            })}

            <Button
              title="Create Account"
              onPress={handleSignup}
              loading={loading}
              style={styles.signupButton}
            />

            <View style={styles.footer}>
              <Text style={styles.footerText}>Already have an account? </Text>
              <TouchableOpacity onPress={() => router.push('/(auth)/login' as any)}>
                <Text style={styles.linkText}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.termsBox}>
            <Text style={styles.termsText}>
              By signing up, you agree to our Terms of Service and Privacy Policy.
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#064e3b',
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  scrollContent: {
    flexGrow: 1,
    padding: 24,
    paddingTop: 60,
    paddingBottom: 40,
  },
  backBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  header: {
    marginBottom: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.white,
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.white,
    opacity: 0.8,
    marginTop: 4,
  },
  formCard: {
    backgroundColor: Colors.white,
    borderRadius: 32,
    padding: 24,
    elevation: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
  },
  roleContainer: {
    flexDirection: 'row',
    backgroundColor: '#F3F4F6',
    borderRadius: 16,
    padding: 6,
    marginBottom: 24,
  },
  roleTab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 12,
    gap: 8,
  },
  roleTabActive: {
    backgroundColor: Colors.primary,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  roleTabText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#6B7280',
  },
  roleTabTextActive: {
    color: Colors.white,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginBottom: 16,
    paddingHorizontal: 16,
    height: 56,
  },
  inputIcon: {
    marginRight: 12,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: Colors.text,
  },
  signupButton: {
    height: 56,
    borderRadius: 16,
    marginTop: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },
  footerText: {
    fontSize: 14,
    color: '#6B7280',
  },
  linkText: {
    fontSize: 14,
    color: Colors.primary,
    fontWeight: 'bold',
  },
  termsBox: {
    marginTop: 32,
    paddingHorizontal: 20,
  },
  termsText: {
    fontSize: 12,
    color: Colors.white,
    opacity: 0.6,
    textAlign: 'center',
    lineHeight: 18,
  },
});
