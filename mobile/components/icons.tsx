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
  <LayoutDashboard {...(props as any)} size={size as any} color={color} />
);

export const MarketplaceIcon = ({ size = 24, color = '#1EB53A', ...props }: IconProps) => (
  <ShoppingBag {...(props as any)} size={size as any} color={color} />
);

export const ChatIcon = ({ size = 24, color = '#1EB53A', ...props }: IconProps) => (
  <MessageCircle {...(props as any)} size={size as any} color={color} />
);

export const ProfileIcon = ({ size = 24, color = '#1EB53A', ...props }: IconProps) => (
  <User {...(props as any)} size={size as any} color={color} />
);

export const CropIcon = ({ size = 24, color = '#1EB53A', ...props }: IconProps) => (
  <Sprout {...(props as any)} size={size as any} color={color} />
);

export const DiseaseIcon = ({ size = 24, color = '#1EB53A', ...props }: IconProps) => (
  <ShieldAlert {...(props as any)} size={size as any} color={color} />
);

export const WeatherIcon = ({ size = 24, color = '#1EB53A', ...props }: IconProps) => (
  <CloudSun {...(props as any)} size={size as any} color={color} />
);

export const CommunityIcon = ({ size = 24, color = '#1EB53A', ...props }: IconProps) => (
  <Users {...(props as any)} size={size as any} color={color} />
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
  Package,
  Clock,
  Tag,
  HelpCircle,
  Filter,
  Calendar
} from 'lucide-react-native';
