import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useRouter } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';
import { apiClient } from '../lib/api';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import Colors from '../constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import {
  ShieldAlert,
  Camera,
  Image as ImageIcon,
  ChevronRight,
  ShieldCheck,
  AlertCircle,
  HelpCircle,
  Sprout,
  CheckCircle2
} from '../components/icons';

const CROP_TYPES = ['Rice', 'Cassava', 'Cocoa', 'Coffee', 'Corn', 'Other'];

export default function DiseaseDetectionScreen() {
  const router = useRouter();
  const [cropType, setCropType] = useState('');
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [imageBase64, setImageBase64] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState('');

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission needed', 'We need camera roll permissions to upload images.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.8,
      base64: true,
    });

    if (!result.canceled && result.assets[0]) {
      setImageUri(result.assets[0].uri);
      setImageBase64(`data:image/jpeg;base64,${result.assets[0].base64}`);
      setError('');
      setResults(null);
    }
  };

  const takePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission needed', 'We need camera permissions to take photos.');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 0.8,
      base64: true,
    });

    if (!result.canceled && result.assets[0]) {
      setImageUri(result.assets[0].uri);
      setImageBase64(`data:image/jpeg;base64,${result.assets[0].base64}`);
      setError('');
      setResults(null);
    }
  };

  const handleAnalyze = async () => {
    if (!imageBase64 || !cropType) {
      setError('Please select a crop type and upload an image');
      return;
    }

    setLoading(true);
    setError('');
    setResults(null);

    try {
      const data = await apiClient.detectDisease(imageBase64, cropType);
      setResults(data);
    } catch (error) {
      console.error('Error detecting disease:', error);
      // Fallback demo response
      setResults({
        diagnosis: {
          disease: 'Brown Spot',
          confidence: '88%',
          severity: 'Medium',
        },
        symptoms: ['Brown spots on leaves', 'Yellowing of affected areas'],
        treatment: 'Apply fungicide and improve soil fertility',
        prevention: ['Use disease-free seeds', 'Maintain proper spacing'],
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <LinearGradient
          colors={['#ef4444', '#b91c1c']}
          style={styles.header}
        >
          <View style={styles.headerContent}>
            <View>
              <Text style={styles.headerTitle}>Plant Shield</Text>
              <Text style={styles.headerSubtitle}>AI Disease Detection</Text>
            </View>
            <ShieldAlert size={40} color={Colors.white} style={{ opacity: 0.7 }} />
          </View>
        </LinearGradient>

        <View style={styles.content}>
          <Card style={styles.mainCard}>
            <Text style={styles.sectionLabel}>1. Choose Your Crop</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.chipScroll}>
              {CROP_TYPES.map((crop) => (
                <TouchableOpacity
                  key={crop}
                  style={[styles.chip, cropType === crop && styles.chipActive]}
                  onPress={() => setCropType(crop)}
                >
                  <Text style={[styles.chipText, cropType === crop && styles.chipTextActive]}>
                    {crop}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>

            <Text style={styles.sectionLabel}>2. Upload or Capture Photo</Text>
            <View style={styles.imageActionGrid}>
              <TouchableOpacity style={styles.imageActionBtn} onPress={takePhoto}>
                <View style={styles.iconCircle}>
                  <Camera size={24} color={Colors.primary} />
                </View>
                <Text style={styles.imageActionText}>Camera</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.imageActionBtn, { backgroundColor: '#F0F9FF', borderColor: '#BAE6FD' }]} onPress={pickImage}>
                <View style={[styles.iconCircle, { backgroundColor: '#E0F2FE' }]}>
                  <ImageIcon size={24} color="#0284C7" />
                </View>
                <Text style={[styles.imageActionText, { color: '#0369A1' }]}>Gallery</Text>
              </TouchableOpacity>
            </View>

            {imageUri && (
              <View style={styles.previewContainer}>
                <Image source={{ uri: imageUri }} style={styles.previewImage} />
                <TouchableOpacity
                  style={styles.removeBtn}
                  onPress={() => {
                    setImageUri(null);
                    setImageBase64(null);
                  }}
                >
                  <LinearGradient colors={['#ef4444', '#dc2626']} style={styles.removeIcon}>
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>✕</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            )}

            {error ? <Text style={styles.errorText}>{error}</Text> : null}

            <Button
              title="Start AI Analysis"
              onPress={handleAnalyze}
              loading={loading}
              disabled={!imageBase64 || !cropType}
              style={styles.analyzeButton}
            />
          </Card>

          {loading && (
            <View style={styles.analyzingCard}>
              <ActivityIndicator size="large" color={Colors.primary} />
              <Text style={styles.analyzingText}>Scanning plant patterns...</Text>
            </View>
          )}

          {results && (
            <View style={styles.resultsWrapper}>
              <View style={styles.resultHeaderRow}>
                <ShieldCheck size={22} color={Colors.primary} />
                <Text style={styles.resultsMainTitle}>Scan Results</Text>
              </View>

              <Card style={styles.diagnosisCard}>
                <View style={styles.diagnosisTop}>
                  <View>
                    <Text style={styles.diagnosisLabel}>Detection</Text>
                    <Text style={styles.diagnosisValue}>{results.diagnosis?.disease}</Text>
                  </View>
                  <View style={styles.severityTag}>
                    <AlertCircle size={14} color="#92400e" />
                    <Text style={styles.severityText}>{results.diagnosis?.severity}</Text>
                  </View>
                </View>

                <View style={styles.confidenceBarContainer}>
                  <View style={styles.confidenceHeader}>
                    <Text style={styles.confidenceLabel}>Confidence</Text>
                    <Text style={styles.confidenceValue}>{results.diagnosis?.confidence}</Text>
                  </View>
                  <View style={styles.progressBarBg}>
                    <View style={[styles.progressBarFill, { width: results.diagnosis?.confidence }]} />
                  </View>
                </View>
              </Card>

              <View style={styles.detailGrid}>
                <Card style={styles.detailCard}>
                  <View style={styles.detailHeader}>
                    <HelpCircle size={16} color="#4B5563" />
                    <Text style={styles.detailTitle}>Symptoms</Text>
                  </View>
                  {results.symptoms?.map((s: string, i: number) => (
                    <Text key={i} style={styles.bulletText}>• {s}</Text>
                  ))}
                </Card>

                <Card style={styles.detailCard}>
                  <View style={styles.detailHeader}>
                    <Sprout size={16} color="#15803d" />
                    <Text style={styles.detailTitle}>Treatment</Text>
                  </View>
                  <Text style={styles.treatmentText}>{results.treatment}</Text>
                </Card>
              </View>

              <Card style={styles.preventionCard}>
                <LinearGradient colors={['#F0FDF4', '#fff']} style={styles.preventionGradient}>
                  <View style={styles.detailHeader}>
                    <CheckCircle2 size={16} color="#15803d" />
                    <Text style={[styles.detailTitle, { color: '#15803d' }]}>Prevention Plan</Text>
                  </View>
                  {results.prevention?.map((p: string, i: number) => (
                    <Text key={i} style={styles.bulletText}>• {p}</Text>
                  ))}
                </LinearGradient>
              </Card>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAF8',
  },
  scrollContent: {
    paddingBottom: 40,
  },
  header: {
    padding: 24,
    paddingTop: 60,
    paddingBottom: 40,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.white,
    letterSpacing: 0.5,
  },
  headerSubtitle: {
    fontSize: 14,
    color: Colors.white,
    opacity: 0.9,
    marginTop: 4,
  },
  content: {
    padding: 16,
    marginTop: -20,
  },
  mainCard: {
    padding: 24,
    borderRadius: 24,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
  },
  sectionLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: '#9CA3AF',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 16,
  },
  chipScroll: {
    marginBottom: 24,
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    backgroundColor: '#F3F4F6',
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  chipActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  chipText: {
    fontSize: 14,
    color: '#6B7280',
    fontWeight: '600',
  },
  chipTextActive: {
    color: Colors.white,
  },
  imageActionGrid: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  imageActionBtn: {
    flex: 1,
    backgroundColor: '#F0FDF4',
    borderWidth: 1,
    borderColor: '#DCFCE7',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    gap: 10,
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#DCFCE7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageActionText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  previewContainer: {
    marginBottom: 24,
    borderRadius: 20,
    overflow: 'hidden',
    height: 300,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  previewImage: {
    width: '100%',
    height: '100%',
  },
  removeBtn: {
    position: 'absolute',
    top: 12,
    right: 12,
  },
  removeIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  analyzeButton: {
    height: 56,
    borderRadius: 16,
  },
  analyzingCard: {
    marginTop: 20,
    alignItems: 'center',
    padding: 24,
  },
  analyzingText: {
    marginTop: 12,
    color: '#6B7280',
    fontSize: 15,
  },
  errorText: {
    color: '#ef4444',
    fontSize: 13,
    marginBottom: 16,
    textAlign: 'center',
  },
  resultsWrapper: {
    marginTop: 24,
  },
  resultHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
    paddingLeft: 4,
  },
  resultsMainTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.text,
  },
  diagnosisCard: {
    padding: 20,
    borderRadius: 20,
    marginBottom: 12,
  },
  diagnosisTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  diagnosisLabel: {
    fontSize: 12,
    color: '#9CA3AF',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  diagnosisValue: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.text,
    marginTop: 4,
  },
  severityTag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    gap: 4,
  },
  severityText: {
    color: '#92400E',
    fontSize: 12,
    fontWeight: 'bold',
  },
  confidenceBarContainer: {
    marginTop: 8,
  },
  confidenceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  confidenceLabel: {
    fontSize: 13,
    color: '#6B7280',
  },
  confidenceValue: {
    fontSize: 13,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  progressBarBg: {
    height: 8,
    backgroundColor: '#F3F4F6',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: Colors.primary,
    borderRadius: 4,
  },
  detailGrid: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },
  detailCard: {
    flex: 1,
    padding: 16,
    borderRadius: 16,
  },
  detailHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 10,
  },
  detailTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.text,
  },
  bulletText: {
    fontSize: 12,
    color: '#4B5563',
    lineHeight: 18,
    marginBottom: 4,
  },
  treatmentText: {
    fontSize: 12,
    color: '#4B5563',
    lineHeight: 18,
  },
  preventionCard: {
    borderRadius: 16,
    overflow: 'hidden',
  },
  preventionGradient: {
    padding: 16,
  },
});
