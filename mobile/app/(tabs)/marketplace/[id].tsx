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
  Dimensions,
  Platform,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { apiClient } from '../../../lib/api';
import { useAuth } from '../../../contexts/AuthContext';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { Input } from '../../../components/ui/Input';
import Colors from '../../../constants/Colors';
import { LoadingSpinner } from '../../../components/LoadingSpinner';
import { LinearGradient } from 'expo-linear-gradient';
import {
  ChevronLeft,
  ShoppingBag,
  MapPin,
  User,
  Phone,
  Mail,
  Tag as TagIcon,
  Package,
  ShieldCheck,
  MessageSquare,
  TrendingUp
} from '../../../components/icons';

const { width } = Dimensions.get('window');

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
    return (
      <View style={styles.loadingWrapper}>
        <LoadingSpinner message="Loading product details..." />
      </View>
    );
  }

  if (!product) {
    return (
      <View style={styles.errorContainer}>
        <Package size={64} color="#9CA3AF" />
        <Text style={styles.errorText}>Product not found</Text>
        <Button title="Return to Marketplace" onPress={() => router.back()} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Header with Overlay */}
        <View style={styles.imageContainer}>
          {product.image_url ? (
            <Image source={{ uri: product.image_url }} style={styles.productImage} resizeMode="cover" />
          ) : (
            <View style={styles.imagePlaceholder}>
              <TagIcon size={80} color="#E5E7EB" {...({} as any)} />
            </View>
          )}

          <LinearGradient
            colors={['rgba(0,0,0,0.4)', 'transparent', 'transparent']}
            style={styles.headerButtons}
          >
            <TouchableOpacity onPress={() => router.back()} style={styles.iconBtn}>
              <ChevronLeft size={24} color="#fff" {...({} as any)} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconBtn}>
              <TagIcon size={20} color="#fff" {...({} as any)} />
            </TouchableOpacity>
          </LinearGradient>
        </View>

        <View style={styles.detailsContent}>
          <View style={styles.mainInfo}>
            <View style={styles.categoryBadge}>
              <Text style={styles.categoryText}>{product.category || 'General'}</Text>
            </View>
            <Text style={styles.productName}>{product.product_name}</Text>

            <View style={styles.priceRow}>
              <Text style={styles.productPrice}>{formatPrice(product.price)}</Text>
              <Text style={styles.unitText}>/ {product.unit}</Text>
            </View>

            <View style={styles.stockRow}>
              <Package size={16} color="#059669" {...({} as any)} />
              <Text style={styles.stockText}>{product.quantity_available} {product.unit} available</Text>
            </View>
          </View>

          <Card style={styles.sectionCard}>
            <Text style={styles.sectionLabel}>Description</Text>
            <Text style={styles.description}>
              {product.description || "No description provided for this product. Contact the seller for more details about quality and availability."}
            </Text>
          </Card>

          <Card style={styles.sellerCard}>
            <View style={styles.sellerHeader}>
              <View style={styles.sellerAvatar}>
                <Text style={styles.avatarText}>{product.seller_name?.[0] || 'S'}</Text>
                <View style={styles.verifiedBadge}>
                  <ShieldCheck size={12} color="#fff" {...({} as any)} />
                </View>
              </View>
              <View style={styles.sellerMeta}>
                <Text style={styles.sellerLabel}>Sold by</Text>
                <Text style={styles.sellerName}>{product.seller_name}</Text>
                <View style={styles.locationRow}>
                  <MapPin size={14} color="#6B7280" {...({} as any)} />
                  <Text style={styles.sellerLocation}>{product.seller_location}</Text>
                </View>
              </View>
            </View>

            <View style={styles.sellerActions}>
              <View style={styles.sellerMetric}>
                <TrendingUp size={16} color="#059669" {...({} as any)} />
                <Text style={styles.metricText}>Fast Response</Text>
              </View>
              <View style={styles.sellerMetric}>
                <ShieldCheck size={16} color="#059669" {...({} as any)} />
                <Text style={styles.metricText}>Verified Seller</Text>
              </View>
            </View>
          </Card>

          <View style={styles.safetyCard}>
            <Text style={styles.safetyTitle}>Safety Tips</Text>
            <Text style={styles.safetyTip}>• Meet in a safe, public location.</Text>
            <Text style={styles.safetyTip}>• Check the item before paying.</Text>
            <Text style={styles.safetyTip}>• Only pay when you've received the product.</Text>
          </View>
        </View>
      </ScrollView>

      {/* Floating Bottom Bar */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.secondaryBtn}>
          <MessageSquare size={20} color={Colors.primary} {...({} as any)} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.primaryBtn}
          onPress={() => setShowInquiryModal(true)}
        >
          <LinearGradient
            colors={[Colors.primary, '#15803d']}
            style={styles.btnGradient}
          >
            <Text style={styles.btnText}>Contact Seller</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      <Modal
        visible={showInquiryModal}
        animationType="slide"
        transparent
        onRequestClose={() => setShowInquiryModal(false)}
      >
        <View style={styles.modalOverlay}>
          <Card style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Send Inquiry</Text>
              <TouchableOpacity onPress={() => setShowInquiryModal(false)}>
                <Text style={styles.closeBtn}>✕</Text>
              </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
              <Input
                label="Your Name"
                placeholder="Full Name"
                value={inquiryForm.buyer_name}
                onChangeText={(text) => setInquiryForm({ ...inquiryForm, buyer_name: text })}
              />
              <Input
                label="Email"
                placeholder="email@example.com"
                value={inquiryForm.buyer_email}
                onChangeText={(text) => setInquiryForm({ ...inquiryForm, buyer_email: text })}
                keyboardType="email-address"
              />
              <Input
                label="Phone"
                placeholder="Phone Number"
                value={inquiryForm.buyer_phone}
                onChangeText={(text) => setInquiryForm({ ...inquiryForm, buyer_phone: text })}
                keyboardType="phone-pad"
              />
              <Input
                label="Message"
                placeholder="Write your message to the seller..."
                value={inquiryForm.message}
                onChangeText={(text) => setInquiryForm({ ...inquiryForm, message: text })}
                multiline
                numberOfLines={4}
              />

              <View style={styles.modalFooter}>
                <Button
                  title="Submit Inquiry"
                  onPress={handleSubmitInquiry}
                  loading={submitting}
                  style={styles.submitBtn}
                />
              </View>
            </ScrollView>
          </Card>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loadingWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContent: {
    paddingBottom: 100,
  },
  imageContainer: {
    width: width,
    height: width * 0.9,
    backgroundColor: '#F3F4F6',
    position: 'relative',
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  imagePlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
  },
  headerButtons: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingTop: 50,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  iconBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContent: {
    padding: 20,
    marginTop: -24,
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  mainInfo: {
    marginBottom: 24,
  },
  categoryBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: '#F0FDF4',
    alignSelf: 'flex-start',
    borderRadius: 6,
    marginBottom: 12,
  },
  categoryText: {
    color: Colors.primary,
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  productName: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 12,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 12,
  },
  productPrice: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  unitText: {
    fontSize: 16,
    color: '#6B7280',
    marginLeft: 4,
  },
  stockRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  stockText: {
    fontSize: 14,
    color: '#059669',
    fontWeight: '600',
  },
  sectionCard: {
    padding: 20,
    borderRadius: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#F3F4F6',
    elevation: 0,
  },
  sectionLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    color: '#4B5563',
    lineHeight: 22,
  },
  sellerCard: {
    padding: 20,
    borderRadius: 16,
    marginBottom: 16,
    backgroundColor: '#F9FAFB',
    elevation: 0,
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
  sellerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginBottom: 20,
  },
  sellerAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  avatarText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  verifiedBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#3B82F6',
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  sellerMeta: {
    flex: 1,
  },
  sellerLabel: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 2,
  },
  sellerName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  sellerLocation: {
    fontSize: 14,
    color: '#6B7280',
  },
  sellerActions: {
    flexDirection: 'row',
    gap: 20,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  sellerMetric: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  metricText: {
    fontSize: 13,
    color: '#4B5563',
    fontWeight: '500',
  },
  safetyCard: {
    padding: 16,
    backgroundColor: '#FFFBEB',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FEF3C7',
  },
  safetyTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#92400E',
    marginBottom: 8,
  },
  safetyTip: {
    fontSize: 13,
    color: '#B45309',
    marginBottom: 4,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 90,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 12,
    flexDirection: 'row',
    gap: 12,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
      },
      android: {
        elevation: 10,
      },
    }),
  },
  secondaryBtn: {
    width: 56,
    height: 56,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryBtn: {
    flex: 1,
    height: 56,
    borderRadius: 16,
    overflow: 'hidden',
  },
  btnGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    gap: 16,
  },
  errorText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4B5563',
    marginBottom: 8,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    padding: 24,
    maxHeight: '85%',
    elevation: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111827',
  },
  closeBtn: {
    fontSize: 20,
    color: '#9CA3AF',
    fontWeight: 'bold',
  },
  modalFooter: {
    marginTop: 20,
    marginBottom: 30,
  },
  submitBtn: {
    height: 56,
    borderRadius: 16,
  },
});
