import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Colors from '../../constants/Colors';
import { Button } from './Button';

interface ImagePickerProps {
  onImageSelected: (uri: string, base64?: string) => void;
  currentImage?: string;
  allowCamera?: boolean;
  allowGallery?: boolean;
}

export function ImagePickerComponent({
  onImageSelected,
  currentImage,
  allowCamera = true,
  allowGallery = true,
}: ImagePickerProps) {
  const [image, setImage] = useState<string | null>(currentImage || null);

  const requestPermissions = async (type: 'camera' | 'library') => {
    if (type === 'camera') {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission needed', 'We need camera permissions to take photos.');
        return false;
      }
    } else {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission needed', 'We need camera roll permissions to upload images.');
        return false;
      }
    }
    return true;
  };

  const takePhoto = async () => {
    const hasPermission = await requestPermissions('camera');
    if (!hasPermission) return;

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 0.8,
      base64: true,
    });

    if (!result.canceled && result.assets[0]) {
      const uri = result.assets[0].uri;
      const base64 = result.assets[0].base64
        ? `data:image/jpeg;base64,${result.assets[0].base64}`
        : undefined;
      setImage(uri);
      onImageSelected(uri, base64);
    }
  };

  const pickImage = async () => {
    const hasPermission = await requestPermissions('library');
    if (!hasPermission) return;

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.8,
      base64: true,
    });

    if (!result.canceled && result.assets[0]) {
      const uri = result.assets[0].uri;
      const base64 = result.assets[0].base64
        ? `data:image/jpeg;base64,${result.assets[0].base64}`
        : undefined;
      setImage(uri);
      onImageSelected(uri, base64);
    }
  };

  const removeImage = () => {
    setImage(null);
    onImageSelected('');
  };

  return (
    <View style={styles.container}>
      {image && (
        <View style={styles.imageContainer}>
          <Image source={{ uri: image }} style={styles.image} />
          <TouchableOpacity style={styles.removeButton} onPress={removeImage}>
            <Text style={styles.removeButtonText}>✕</Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.buttonContainer}>
        {allowCamera && (
          <Button title="Take Photo" onPress={takePhoto} variant="outline" style={styles.button} />
        )}
        {allowGallery && (
          <Button
            title="Choose from Gallery"
            onPress={pickImage}
            variant="outline"
            style={styles.button}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  imageContainer: {
    position: 'relative',
    marginBottom: 12,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    backgroundColor: Colors.border,
  },
  removeButton: {
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
  removeButtonText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  button: {
    flex: 1,
  },
});
