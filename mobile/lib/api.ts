import axios, { AxiosInstance, AxiosError } from 'axios';
import { API_URL } from './api-config';
import AsyncStorage from '@react-native-async-storage/async-storage';

class ApiClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: API_URL,
      timeout: 30000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Request interceptor
    this.client.interceptors.request.use(
      async (config) => {
        // Add auth token if available
        const user = await AsyncStorage.getItem('agri_user_session');
        if (user) {
          try {
            const userData = JSON.parse(user);
            // Add any auth headers if needed
            // config.headers.Authorization = `Bearer ${userData.token}`;
          } catch (e) {
            // Ignore parsing errors
          }
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Response interceptor
    this.client.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        // Handle common errors
        if (error.response) {
          // Server responded with error status
          console.error('API Error:', error.response.status, error.response.data);
        } else if (error.request) {
          // Request made but no response
          console.error('Network Error:', error.message);
        } else {
          // Something else happened
          console.error('Error:', error.message);
        }
        return Promise.reject(error);
      }
    );
  }

  // Chat API
  async chat(message: string, imageData?: string) {
    const response = await this.client.post('/api/chat', {
      message,
      imageData,
    });
    return response.data;
  }

  // Marketplace API
  async getProducts(params?: { category?: string; seller_id?: string }) {
    const response = await this.client.get('/api/marketplace/products', { params });
    return response.data;
  }

  async getProduct(id: number) {
    const response = await this.client.get(`/api/marketplace/products/${id}`);
    return response.data;
  }

  async createProduct(productData: any) {
    const response = await this.client.post('/api/marketplace/products', productData);
    return response.data;
  }

  async submitInquiry(inquiryData: any) {
    const response = await this.client.post('/api/marketplace/inquiries', inquiryData);
    return response.data;
  }

  async createOrder(orderData: any) {
    const response = await this.client.post('/api/marketplace/orders', orderData);
    return response.data;
  }

  // AI APIs
  async detectDisease(imageData: string, cropType: string) {
    const response = await this.client.post('/api/ai/disease-detection', {
      imageData,
      cropType,
    });
    return response.data;
  }

  async getCropRecommendation(data: {
    soilType: string;
    rainfall: number;
    climate: string;
    location?: string;
  }) {
    const response = await this.client.post('/api/ai/crop-recommendation', data);
    return response.data;
  }

  async getFertilizerGuide(data: {
    cropType: string;
    soilType: string;
    growthStage: string;
  }) {
    const response = await this.client.post('/api/ai/fertilizer-guide', data);
    return response.data;
  }

  async predictYield(data: {
    cropType: string;
    area: number;
    soilQuality: string;
    weatherConditions: string;
  }) {
    const response = await this.client.post('/api/ai/yield-prediction', data);
    return response.data;
  }

  // Health check
  async healthCheck() {
    const response = await this.client.get('/api/health');
    return response.data;
  }
}

export const apiClient = new ApiClient();
export default apiClient;
