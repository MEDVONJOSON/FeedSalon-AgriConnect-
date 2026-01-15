import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  TextInput,
} from 'react-native';
import { useRouter } from 'expo-router';
import { apiClient } from '../lib/api';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import Colors from '../constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import {
  Sprout,
  MapPin,
  Thermometer,
  Droplets,
  ChevronRight,
  Info
} from '../components/icons';

const SOIL_TYPES = ['Sandy', 'Clay', 'Loam', 'Sandy Loam', 'Clay Loam'];
const CLIMATE_TYPES = ['Tropical', 'Subtropical', 'Temperate'];

export default function CropRecommendationScreen() {
  const router = useRouter();
  const [soilType, setSoilType] = useState('');
  const [rainfall, setRainfall] = useState('');
  const [climate, setClimate] = useState('');
  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<any>(null);

  const handleGetRecommendations = async () => {
    if (!soilType || !rainfall || !climate) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }

    setLoading(true);
    try {
      const data = await apiClient.getCropRecommendation({
        soilType,
        rainfall: parseFloat(rainfall),
        climate,
        location: location || undefined,
      });
      setRecommendations(data);
    } catch (error) {
      console.error('Error getting recommendations:', error);
      setRecommendations({
        recommendedCrops: [
          {
            name: 'Rice',
            suitability: 'High',
            reason: 'Well-suited for your soil and climate conditions',
          },
          {
            name: 'Cassava',
            suitability: 'High',
            reason: 'Thrives in tropical climate with your rainfall pattern',
          },
        ],
        tips: ['Ensure proper drainage', 'Use improved varieties'],
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <LinearGradient
          colors={[Colors.primary, '#15803d']}
          style={styles.header}
        >
          <View style={styles.headerContent}>
            <View>
              <Text style={styles.title}>Crop Doctor</Text>
              <Text style={styles.subtitle}>Smarter recommendations for your land</Text>
            </View>
            <Sprout size={40} color={Colors.white} style={{ opacity: 0.6 }} />
          </View>
        </LinearGradient>

        <Card style={styles.mainCard}>
          <Text style={styles.sectionTitle}>Land Details</Text>

          <View style={styles.inputGroup}>
            <View style={styles.labelRow}>
              <Droplets size={16} color={Colors.primary} />
              <Text style={styles.label}>Soil Type *</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.chipScroll}>
              {SOIL_TYPES.map((type) => (
                <TouchableOpacity
                  key={type}
                  style={[styles.chip, soilType === type && styles.chipActive]}
                  onPress={() => setSoilType(type)}
                >
                  <Text style={[styles.chipText, soilType === type && styles.chipTextActive]}>
                    {type}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          <Input
            label="Annual Rainfall (mm) *"
            placeholder="e.g., 1500"
            value={rainfall}
            onChangeText={setRainfall}
            keyboardType="numeric"
            style={styles.inputField}
          />

          <View style={styles.inputGroup}>
            <View style={styles.labelRow}>
              <Thermometer size={16} color={Colors.primary} />
              <Text style={styles.label}>Climate Zone *</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.chipScroll}>
              {CLIMATE_TYPES.map((type) => (
                <TouchableOpacity
                  key={type}
                  style={[styles.chip, climate === type && styles.chipActive]}
                  onPress={() => setClimate(type)}
                >
                  <Text style={[styles.chipText, climate === type && styles.chipTextActive]}>
                    {type}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          <View style={styles.inputGroup}>
            <View style={styles.labelRow}>
              <MapPin size={16} color={Colors.primary} />
              <Text style={styles.label}>District (Optional)</Text>
            </View>
            <TextInput
              style={styles.textInput}
              placeholder="e.g., Bo, Kenema"
              value={location}
              onChangeText={setLocation}
              placeholderTextColor="#999"
            />
          </View>

          <Button
            title="Analyze Soil & Climate"
            onPress={handleGetRecommendations}
            loading={loading}
            disabled={!soilType || !rainfall || !climate}
            style={styles.actionButton}
          />
        </Card>

        {recommendations && (
          <View style={styles.resultsContainer}>
            <Text style={styles.resultsHeader}>Recommendation Results</Text>
            {recommendations.recommendedCrops?.map((crop: any, index: number) => (
              <Card key={index} style={styles.resultCard}>
                <View style={styles.resultMain}>
                  <View style={styles.cropInfo}>
                    <Text style={styles.cropName}>{crop.name}</Text>
                    <View style={styles.suitabilityBadge}>
                      <Text style={styles.suitabilityText}>{crop.suitability}</Text>
                    </View>
                  </View>
                  <ChevronRight size={20} color={Colors.border} />
                </View>
                <Text style={styles.reasonText}>{crop.reason}</Text>
              </Card>
            ))}

            {recommendations.tips && (
              <View style={styles.tipsBox}>
                <LinearGradient
                  colors={['#fff', '#f0fdf4']}
                  style={styles.tipsGradient}
                >
                  <View style={styles.tipsHeader}>
                    <Info size={18} color={Colors.primary} />
                    <Text style={styles.tipsHeaderTitle}>Farming Tips</Text>
                  </View>
                  {recommendations.tips.map((tip: string, index: number) => (
                    <Text key={index} style={styles.tipText}>
                      • {tip}
                    </Text>
                  ))}
                </LinearGradient>
              </View>
            )}
          </View>
        )}
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
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.white,
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.white,
    opacity: 0.9,
    marginTop: 4,
  },
  mainCard: {
    margin: 16,
    marginTop: -20,
    padding: 24,
    borderRadius: 24,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.text,
  },
  chipScroll: {
    marginTop: 4,
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    backgroundColor: '#F0F2F0',
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#E0E4E0',
  },
  chipActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  chipText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '600',
  },
  chipTextActive: {
    color: Colors.white,
  },
  inputField: {
    marginBottom: 20,
  },
  textInput: {
    backgroundColor: '#F0F2F0',
    borderRadius: 12,
    padding: 12,
    fontSize: 14,
    color: Colors.text,
    borderWidth: 1,
    borderColor: '#E0E4E0',
  },
  actionButton: {
    marginTop: 10,
    borderRadius: 16,
    height: 56,
  },
  resultsContainer: {
    paddingHorizontal: 16,
    marginTop: 8,
  },
  resultsHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 16,
    marginLeft: 4,
  },
  resultCard: {
    marginBottom: 12,
    padding: 16,
    borderRadius: 20,
  },
  resultMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  cropInfo: {
    flex: 1,
  },
  cropName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 6,
  },
  suitabilityBadge: {
    backgroundColor: '#DCFCE7',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  suitabilityText: {
    color: '#166534',
    fontSize: 12,
    fontWeight: '700',
  },
  reasonText: {
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 20,
  },
  tipsBox: {
    marginTop: 8,
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#DCFCE7',
  },
  tipsGradient: {
    padding: 20,
  },
  tipsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  tipsHeaderTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  tipText: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 22,
    marginBottom: 4,
  },
});
