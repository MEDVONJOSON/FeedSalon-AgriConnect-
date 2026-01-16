import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  RefreshControl,
  Alert,
  Modal,
  Image,
  ActivityIndicator,
} from 'react-native';
import { useRouter } from 'expo-router';
import { apiClient } from '../../lib/api';
import { useMarketplaceStore } from '../../hooks/useMarketplaceStore';
import { useAuth } from '../../contexts/AuthContext';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import Colors from '../../constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import {
  Search,
  Filter,
  MapPin,
  Tag,
  User,
  ShoppingBag,
  Plus,
  ChevronRight,
  TrendingUp,
  Package
} from '../../components/icons';

interface Product {
  id: number;
  product_name: string;
  price: string;
  category: string;
  unit: string;
  quantity_available: string;
  seller_name: string;
  seller_location: string;
  description?: string;
  image_url?: string;
}

export default function MarketplaceScreen() {
  const router = useRouter();
  const { user } = useAuth();
  const { products, loading, fetchProducts, lastUpdated, error } = useMarketplaceStore();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [inquiryForm, setInquiryForm] = useState({
    buyer_name: '',
    buyer_email: '',
    buyer_phone: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);

  const categories = ['All', 'Crops', 'Livestock', 'Equipment', 'Inputs', 'Processed'];

  useEffect(() => {
    if (products.length === 0) {
      fetchProducts();
    }
  }, []);

  useEffect(() => {
    filterProducts();
  }, [searchQuery, selectedCategory, products]);

  const filterProducts = () => {
    let filtered = [...products];
    if (selectedCategory !== 'All') {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.product_name.toLowerCase().includes(query) ||
          p.seller_location.toLowerCase().includes(query)
      );
    }
    setFilteredProducts(filtered);
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchProducts();
    setRefreshing(false);
  };

  const formatPrice = (price: string) => {
    const num = parseFloat(price);
    return `Le ${num.toLocaleString()}`;
  };

  const getTimeAgo = (timestamp: number | null) => {
    if (!timestamp) return '';
    const seconds = Math.floor((Date.now() - timestamp) / 1000);
    if (seconds < 60) return 'Just now';
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    return new Date(timestamp).toLocaleDateString();
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Colors.primary, '#15803d']}
        style={styles.header}
      >
        <View style={styles.headerTop}>
          <View>
            <Text style={styles.headerTitle}>Agri Market</Text>
            {lastUpdated && (
              <Text style={styles.lastUpdatedText}>Updated {getTimeAgo(lastUpdated)}</Text>
            )}
          </View>
          <View style={styles.headerActions}>
            <TouchableOpacity style={styles.headerIconBtn}>
              <ShoppingBag size={22} color={Colors.white} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.searchSection}>
          <View style={styles.searchBar}>
            <Search size={20} color="#666" />
            <TextInput
              style={styles.searchInput}
              placeholder="Search rice, tools, or land..."
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholderTextColor="#999"
            />
          </View>
          <TouchableOpacity style={styles.filterBtn}>
            <Filter size={20} color={Colors.white} />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <View style={styles.categoryBar}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryContent}
        >
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={[
                styles.categoryChip,
                selectedCategory === category && styles.categoryChipActive,
              ]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text
                style={[
                  styles.categoryText,
                  selectedCategory === category && styles.categoryTextActive,
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <ScrollView
        style={styles.productsContainer}
        contentContainerStyle={styles.productsContent}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        {loading ? (
          <View style={styles.centerContainer}>
            <ActivityIndicator size="large" color={Colors.primary} />
            <Text style={styles.loadingText}>Fetching market data...</Text>
          </View>
        ) : filteredProducts.length === 0 ? (
          <View style={styles.centerContainer}>
            <Package size={64} color="#E5E7EB" />
            <Text style={styles.emptyText}>No items found</Text>
            <Text style={styles.emptySubtext}>Try a different search or category.</Text>
          </View>
        ) : (
          <View style={styles.productGrid}>
            {filteredProducts.map((product) => (
              <TouchableOpacity
                key={product.id}
                style={styles.productCard}
                onPress={() => router.push(`/(tabs)/marketplace/${product.id}` as any)}
              >
                <View style={styles.productImagePlaceholder}>
                  <Tag size={32} color={Colors.border} />
                  <View style={styles.categoryBadge}>
                    <Text style={styles.categoryBadgeText}>{product.category}</Text>
                  </View>
                </View>

                <View style={styles.productInfo}>
                  <Text style={styles.productName} numberOfLines={2}>{product.product_name}</Text>
                  <Text style={styles.productPrice}>{formatPrice(product.price)}</Text>

                  <View style={styles.sellerRow}>
                    <User size={12} color="#9CA3AF" />
                    <Text style={styles.sellerName} numberOfLines={1}>{product.seller_name}</Text>
                  </View>

                  <View style={styles.locationRow}>
                    <MapPin size={12} color="#9CA3AF" />
                    <Text style={styles.locationText} numberOfLines={1}>{product.seller_location}</Text>
                  </View>

                  <View style={styles.stockStatus}>
                    <TrendingUp size={12} color={Colors.success} />
                    <Text style={styles.stockText}>{product.quantity_available} left</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </ScrollView>

      <TouchableOpacity style={styles.fab}>
        <LinearGradient
          colors={[Colors.primary, '#15803d']}
          style={styles.fabGradient}
        >
          <Plus size={24} color={Colors.white} />
          <Text style={styles.fabText}>Sell</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  header: {
    padding: 24,
    paddingTop: 60,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  lastUpdatedText: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.7)',
    marginTop: 2,
    fontWeight: '500',
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.white,
    letterSpacing: 0.5,
  },
  headerActions: {
    flexDirection: 'row',
    gap: 12,
  },
  headerIconBtn: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: 10,
    borderRadius: 12,
  },
  searchSection: {
    flexDirection: 'row',
    gap: 12,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 16,
    paddingHorizontal: 16,
    height: 52,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
    color: Colors.text,
  },
  filterBtn: {
    backgroundColor: '#059669',
    width: 52,
    height: 52,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryBar: {
    backgroundColor: Colors.white,
    paddingVertical: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  categoryContent: {
    paddingHorizontal: 20,
    gap: 10,
  },
  categoryChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  categoryChipActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  categoryText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#6B7280',
  },
  categoryTextActive: {
    color: Colors.white,
  },
  productsContainer: {
    flex: 1,
  },
  productsContent: {
    padding: 16,
    paddingBottom: 100,
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
  productCard: {
    backgroundColor: Colors.white,
    width: '48%',
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    marginBottom: 4,
  },
  productImagePlaceholder: {
    aspectRatio: 1,
    backgroundColor: '#F9FAFB',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  categoryBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'rgba(255,255,255,0.9)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  categoryBadgeText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: Colors.primary,
    textTransform: 'uppercase',
  },
  productInfo: {
    padding: 12,
  },
  productName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Colors.text,
    height: 40,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.primary,
    marginTop: 4,
  },
  sellerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 8,
  },
  sellerName: {
    fontSize: 12,
    color: '#6B7280',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 4,
  },
  locationText: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  stockStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 8,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
  },
  stockText: {
    fontSize: 11,
    fontWeight: '600',
    color: Colors.success,
  },
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    borderRadius: 28,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  fabGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 28,
    gap: 8,
  },
  fabText: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
  },
  loadingText: {
    marginTop: 12,
    color: '#6B7280',
  },
  emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#374151',
    marginTop: 16,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },
});
