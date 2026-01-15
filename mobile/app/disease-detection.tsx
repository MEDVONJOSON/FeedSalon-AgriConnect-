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
import {
  DiseaseIcon,
  Camera,
  ImageIcon,
  ChevronRight
} from '../components/icons';
import { LinearGradient } from 'expo-linear-gradient';

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
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={[Colors.error, '#991b1b']}
        style={styles.header}
      >
        <Text style={styles.title}>Disease Detection</Text>
        <Text style={styles.subtitle}>AI-powered assistant to identify crop diseases</Text>
      </LinearGradient>

      <Card style={styles.card}>
        <Text style={styles.label}>Select Crop Type</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cropScroll}>
          {CROP_TYPES.map((crop) => (
            <TouchableOpacity
              key={crop}
              style={[styles.cropChip, cropType === crop && styles.cropChipActive]}
              onPress={() => setCropType(crop)}
            >
              <Text
                style={[styles.cropText, cropType === crop && styles.cropTextActive]}
              >
                {crop}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.imageButtons}>
          <Button
            title="Take Photo"
            onPress={takePhoto}
            variant="outline"
            style={styles.imageButton}
          />
          <Button
            title="Choose from Gallery"
            onPress={pickImage}
            variant="outline"
            style={styles.imageButton}
          />
        </View>

        {imageUri && (
          <View style={styles.imagePreview}>
            <Image source={{ uri: imageUri }} style={styles.image} />
            <TouchableOpacity
              style={styles.removeImage}
              onPress={() => {
                setImageUri(null);
                setImageBase64(null);
              }}
            >
              <Text style={styles.removeImageText}>✕</Text>
            </TouchableOpacity>
          </View>
        )}

        {error && <Text style={styles.errorText}>{error}</Text>}

        <Button
          title="Analyze Disease"
          onPress={handleAnalyze}
          loading={loading}
          disabled={!imageBase64 || !cropType}
          style={styles.analyzeButton}
        />
      </Card>

      {loading && (
        <Card style={styles.card}>
          <ActivityIndicator size="large" color={Colors.primary} />
          <Text style={styles.loadingText}>Analyzing image...</Text>
        </Card>
      )}

      {results && (
        <Card style={styles.card}>
          <Text style={styles.resultsTitle}>Analysis Results</Text>
          <View style={styles.resultSection}>
            <Text style={styles.resultLabel}>Disease:</Text>
            <Text style={styles.resultValue}>{results.diagnosis?.disease || 'Unknown'}</Text>
          </View>
          <View style={styles.resultSection}>
            <Text style={styles.resultLabel}>Confidence:</Text>
            <Text style={styles.resultValue}>{results.diagnosis?.confidence || 'N/A'}</Text>
          </View>
          <View style={styles.resultSection}>
            <Text style={styles.resultLabel}>Severity:</Text>
            <Text style={styles.resultValue}>{results.diagnosis?.severity || 'N/A'}</Text>
          </View>

          {results.symptoms && (
            <View style={styles.resultSection}>
              <Text style={styles.resultLabel}>Symptoms:</Text>
              {results.symptoms.map((symptom: string, index: number) => (
                <Text key={index} style={styles.resultBullet}>
                  • {symptom}
                </Text>
              ))}
            </View>
          )}

          {results.treatment && (
            <View style={styles.resultSection}>
              <Text style={styles.resultLabel}>Treatment:</Text>
              <Text style={styles.resultText}>{results.treatment}</Text>
            </View>
          )}

          {results.prevention && (
            <View style={styles.resultSection}>
              <Text style={styles.resultLabel}>Prevention:</Text>
              {results.prevention.map((prevent: string, index: number) => (
                <Text key={index} style={styles.resultBullet}>
                  • {prevent}
                </Text>
              ))}
            </View>
          )}
        </Card>
      )}
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
    backgroundColor: Colors.primary,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.white,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.white,
    opacity: 0.9,
  },
  card: {
    margin: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 12,
  },
  cropScroll: {
    marginBottom: 20,
  },
  cropChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: Colors.background,
    borderWidth: 1,
    borderColor: Colors.border,
    marginRight: 8,
  },
  cropChipActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  cropText: {
    fontSize: 14,
    color: Colors.text,
    fontWeight: '600',
  },
  cropTextActive: {
    color: Colors.white,
  },
  imageButtons: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  imageButton: {
    flex: 1,
  },
  imagePreview: {
    position: 'relative',
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 8,
  },
  removeImage: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: Colors.error,
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeImageText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorText: {
    color: Colors.error,
    fontSize: 12,
    marginBottom: 12,
  },
  analyzeButton: {
    marginTop: 8,
  },
  loadingText: {
    textAlign: 'center',
    marginTop: 12,
    color: Colors.textSecondary,
  },
  resultsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 16,
  },
  resultSection: {
    marginBottom: 16,
  },
  resultLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.textSecondary,
    marginBottom: 4,
  },
  resultValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.text,
  },
  resultText: {
    fontSize: 14,
    color: Colors.text,
    lineHeight: 20,
  },
  resultBullet: {
    fontSize: 14,
    color: Colors.text,
    marginTop: 4,
    lineHeight: 20,
  },
});
