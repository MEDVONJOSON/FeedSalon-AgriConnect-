import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
  Modal,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { apiClient } from '../../../lib/api';
import { useAuth } from '../../../contexts/AuthContext';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { Input } from '../../../components/ui/Input';
import Colors from '../../../constants/Colors';
import { LoadingSpinner } from '../../../components/LoadingSpinner';

interface Product {
  id: number;
  product_name: string;
  price: string;
  category: string;
  unit: string;
  quantity_available: string;
  seller_name: string;
  seller_location: string;
  seller_phone?: string;
  seller_email?: string;
  description?: string;
  image_url?: string;
}

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const { user } = useAuth();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState('1');
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const [inquiryForm, setInquiryForm] = useState({
    buyer_name: '',
    buyer_email: '',
    buyer_phone: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const data = await apiClient.getProduct(Number(id));
      setProduct(data);
      if (user) {
        setInquiryForm({
          buyer_name: user.name || '',
          buyer_email: user.email || '',
          buyer_phone: user.phone || '',
          message: `I'm interested in buying your ${data.product_name}. Is it still available?`,
        });
      }
    } catch (error) {
      console.error('Error fetching product:', error);
      Alert.alert('Error', 'Failed to load product details');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitInquiry = async () => {
    if (!product) return;

    setSubmitting(true);
    try {
      await apiClient.submitInquiry({
        product_id: product.id,
        ...inquiryForm,
      });
      Alert.alert('Success', 'Inquiry sent successfully!');
      setShowInquiryModal(false);
    } catch (error) {
      Alert.alert('Error', 'Failed to send inquiry. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const formatPrice = (price: string) => {
    const num = parseFloat(price);
    return `Le ${num.toLocaleString()}`;
  };

  if (loading) {
    return <LoadingSpinner message="Loading product details..." />;
  }

  if (!product) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Product not found</Text>
        <Button title="Go Back" onPress={() => router.back()} />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
      </View>

      {product.image_url && (
        <Image source={{ uri: product.image_url }} style={styles.productImage} />
      )}

      <Card style={styles.card}>
        <Text style={styles.productName}>{product.product_name}</Text>
        <Text style={styles.productPrice}>{formatPrice(product.price)}</Text>
        <Text style={styles.productUnit}>per {product.unit}</Text>

        <View style={styles.divider} />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Category</Text>
          <Text style={styles.sectionValue}>{product.category}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Available Quantity</Text>
          <Text style={styles.sectionValue}>
            {product.quantity_available} {product.unit}
          </Text>
        </View>

        {product.description && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.description}>{product.description}</Text>
          </View>
        )}
      </Card>

      <Card style={styles.card}>
        <Text style={styles.sectionTitle}>Seller Information</Text>
        <View style={styles.sellerInfo}>
          <Text style={styles.sellerName}>{product.seller_name}</Text>
          <Text style={styles.sellerLocation}>📍 {product.seller_location}</Text>
          {product.seller_phone && (
            <Text style={styles.sellerContact}>📞 {product.seller_phone}</Text>
          )}
          {product.seller_email && (
            <Text style={styles.sellerContact}>✉️ {product.seller_email}</Text>
          )}
        </View>
      </Card>

      <View style={styles.actionContainer}>
        <Button
          title="Contact Seller"
          onPress={() => setShowInquiryModal(true)}
          style={styles.contactButton}
        />
      </View>

      <Modal
        visible={showInquiryModal}
        animationType="slide"
        transparent
        onRequestClose={() => setShowInquiryModal(false)}
      >
        <View style={styles.modalOverlay}>
          <Card style={styles.modalContent}>
            <Text style={styles.modalTitle}>Contact Seller</Text>
            <Input
              label="Your Name"
              value={inquiryForm.buyer_name}
              onChangeText={(text) => setInquiryForm({ ...inquiryForm, buyer_name: text })}
            />
            <Input
              label="Email"
              value={inquiryForm.buyer_email}
              onChangeText={(text) => setInquiryForm({ ...inquiryForm, buyer_email: text })}
              keyboardType="email-address"
            />
            <Input
              label="Phone"
              value={inquiryForm.buyer_phone}
              onChangeText={(text) => setInquiryForm({ ...inquiryForm, buyer_phone: text })}
              keyboardType="phone-pad"
            />
            <Input
              label="Message"
              value={inquiryForm.message}
              onChangeText={(text) => setInquiryForm({ ...inquiryForm, message: text })}
              multiline
              numberOfLines={4}
            />
            <View style={styles.modalButtons}>
              <Button
                title="Cancel"
                onPress={() => setShowInquiryModal(false)}
                variant="outline"
                style={styles.modalButton}
              />
              <Button
                title="Send Inquiry"
                onPress={handleSubmitInquiry}
                loading={submitting}
                style={styles.modalButton}
              />
            </View>
          </Card>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    padding: 16,
    paddingTop: 60,
    backgroundColor: Colors.primary,
  },
  backButton: {
    padding: 8,
  },
  backButtonText: {
    fontSize: 16,
    color: Colors.white,
    fontWeight: '600',
  },
  productImage: {
    width: '100%',
    height: 300,
    backgroundColor: Colors.border,
  },
  card: {
    margin: 16,
    marginTop: 0,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 4,
  },
  productUnit: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.border,
    marginVertical: 16,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.textSecondary,
    marginBottom: 4,
  },
  sectionValue: {
    fontSize: 16,
    color: Colors.text,
  },
  description: {
    fontSize: 14,
    color: Colors.text,
    lineHeight: 20,
  },
  sellerInfo: {
    marginTop: 8,
  },
  sellerName: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 8,
  },
  sellerLocation: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginBottom: 4,
  },
  sellerContact: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginBottom: 4,
  },
  actionContainer: {
    padding: 16,
    paddingBottom: 32,
  },
  contactButton: {
    width: '100%',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  errorText: {
    fontSize: 16,
    color: Colors.textSecondary,
    marginBottom: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    width: '100%',
    maxHeight: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 16,
  },
  modalButtons: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 16,
  },
  modalButton: {
    flex: 1,
  },
});
