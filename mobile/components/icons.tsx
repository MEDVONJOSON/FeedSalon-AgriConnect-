import React from 'react';
import {
  LucideProps,
  LayoutDashboard,
  ShoppingBag,
  MessageCircle,
  User,
  Sprout,
  ShieldAlert,
  CloudSun,
  Users,
  Camera,
  Image as ImageIcon,
  Send,
  Heart,
  MessageSquare,
  Share2,
  ChevronRight,
  Plus
} from 'lucide-react-native';

interface IconProps {
  size?: number | string;
  color?: string;
  style?: any;
  strokeWidth?: number;
  fill?: string;
  scale?: number;
}

export const DashboardIcon = ({ size = 24, color = '#1EB53A', ...props }: IconProps) => (
  <LayoutDashboard size={size} color={color} {...props} />
);

export const MarketplaceIcon = ({ size = 24, color = '#1EB53A', ...props }: IconProps) => (
  <ShoppingBag size={size} color={color} {...props} />
);

export const ChatIcon = ({ size = 24, color = '#1EB53A', ...props }: IconProps) => (
  <MessageCircle size={size} color={color} {...props} />
);

export const ProfileIcon = ({ size = 24, color = '#1EB53A', ...props }: IconProps) => (
  <User size={size} color={color} {...props} />
);

export const CropIcon = ({ size = 24, color = '#1EB53A', ...props }: IconProps) => (
  <Sprout size={size} color={color} {...props} />
);

export const DiseaseIcon = ({ size = 24, color = '#1EB53A', ...props }: IconProps) => (
  <ShieldAlert size={size} color={color} {...props} />
);

export const WeatherIcon = ({ size = 24, color = '#1EB53A', ...props }: IconProps) => (
  <CloudSun size={size} color={color} {...props} />
);

export const CommunityIcon = ({ size = 24, color = '#1EB53A', ...props }: IconProps) => (
  <Users size={size} color={color} {...props} />
);

export {
  LayoutDashboard,
  ShoppingBag,
  MessageCircle,
  User,
  Sprout,
  ShieldAlert,
  CloudSun,
  Users,
  Camera,
  Image as ImageIcon,
  Send,
  Heart,
  MessageSquare,
  Share2,
  ChevronRight,
  Plus,
  Search,
  MapPin,
  Thermometer,
  Droplets,
  Info,
  Wind,
  Navigation,
  CheckCircle2,
  AlertCircle,
  Mail,
  Lock,
  ShieldCheck,
  Phone,
  ChevronLeft,
  Settings,
  CreditCard,
  Bell,
  LogOut,
  Edit2,
  TrendingUp,
  Package
} from 'lucide-react-native';

