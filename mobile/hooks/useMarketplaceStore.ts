import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { apiClient } from '../lib/api';

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

interface MarketplaceState {
    products: Product[];
    lastUpdated: number | null;
    loading: boolean;
    error: string | null;
    fetchProducts: () => Promise<void>;
    setProducts: (products: Product[]) => void;
}

export const useMarketplaceStore = create<MarketplaceState>()(
    persist(
        (set, get) => ({
            products: [],
            lastUpdated: null,
            loading: false,
            error: null,

            setProducts: (products) => set({ products, lastUpdated: Date.now() }),

            fetchProducts: async () => {
                set({ loading: true, error: null });
                try {
                    const data = await apiClient.getProducts();
                    set({
                        products: data,
                        lastUpdated: Date.now(),
                        loading: false
                    });
                } catch (error: any) {
                    console.error('Error fetching products in store:', error);
                    set({
                        error: 'Failed to fetch products. Showing cached data.',
                        loading: false
                    });
                    // Note: If fetch fails, we keep the previous 'products' in state (offline support)
                }
            },
        }),
        {
            name: 'marketplace-storage',
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
);
