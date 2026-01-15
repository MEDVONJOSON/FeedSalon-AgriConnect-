import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'agri_user_session';
const DB_KEY = 'agri_users_db';

export interface User {
  name: string;
  email: string;
  role: 'farmer' | 'buyer' | 'admin';
  phone?: string;
  location?: string;
  farmDetails?: {
    name: string;
    size: string;
    location: string;
    crops: string[];
  };
}

// Mock database to store users across sessions (in AsyncStorage)
async function getMockDb(): Promise<Record<string, User>> {
  try {
    const db = await AsyncStorage.getItem(DB_KEY);
    return db ? JSON.parse(db) : {};
  } catch {
    return {};
  }
}

async function saveToMockDb(user: User): Promise<void> {
  try {
    const db = await getMockDb();
    db[user.email] = user;
    await AsyncStorage.setItem(DB_KEY, JSON.stringify(db));
  } catch (error) {
    console.error('Error saving to mock DB:', error);
  }
}

async function getFromMockDb(email: string): Promise<User | null> {
  try {
    const db = await getMockDb();
    return db[email] || null;
  } catch {
    return null;
  }
}

export const auth = {
  login: async (
    email: string,
    password?: string,
    role: User['role'] = 'farmer'
  ): Promise<boolean> => {
    try {
      // For mock purposes, we accept any password if the user exists
      // If user doesn't exist, we create a mock one derived from email
      let user = await getFromMockDb(email);

      if (!user) {
        // Fallback for demo login without signup
        user = {
          name: email.split('@')[0],
          email: email,
          role: role,
        };
      } else if (user.role !== role) {
        // Update role if logging in with different role for demo purposes
        user.role = role;
        await saveToMockDb(user);
      }

      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(user));
      return true;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  },

  signup: async (data: User): Promise<boolean> => {
    try {
      await saveToMockDb(data);
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      return true;
    } catch (error) {
      console.error('Signup error:', error);
      return false;
    }
  },

  logout: async (): Promise<void> => {
    try {
      await AsyncStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error('Logout error:', error);
    }
  },

  getUser: async (): Promise<User | null> => {
    try {
      const userStr = await AsyncStorage.getItem(STORAGE_KEY);
      if (userStr) {
        return JSON.parse(userStr);
      }

      // Return a default Guest user for "Public Access" mode
      return {
        name: 'Guest Farmer',
        email: 'guest@agriconnect.sl',
        role: 'farmer',
        location: 'Freetown, Sierra Leone',
      };
    } catch {
      return null;
    }
  },

  updateProfile: async (updates: Partial<User>): Promise<boolean> => {
    try {
      const user = await auth.getUser();
      if (!user) return false;
      const updatedUser = { ...user, ...updates };
      await saveToMockDb(updatedUser);
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedUser));
      return true;
    } catch (error) {
      console.error('Update profile error:', error);
      return false;
    }
  },

  isAuthenticated: async (): Promise<boolean> => {
    try {
      const user = await auth.getUser();
      return !!user && user.email !== 'guest@agriconnect.sl';
    } catch {
      return false;
    }
  },
};
