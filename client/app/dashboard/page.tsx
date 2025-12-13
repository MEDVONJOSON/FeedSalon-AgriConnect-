'use client'

import { Navigation } from '@/components/navigation'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import {
  Sprout, TrendingUp, Bug, FileText, Cloud, MapPin, Calendar, BarChart3,
  AlertTriangle, CheckCircle2, Plus, Settings, Users, ShoppingBag, Bell,
  Droplets, Thermometer, Wind, Factory, ShieldCheck, Globe, GraduationCap,
  Radio, DollarSign, ClipboardList, Target, Banknote, PieChart, ArrowRight
} from 'lucide-react'

import { useState, useEffect } from 'react'
import { auth, User } from '@/lib/auth'

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    setUser(auth.getUser())
  }, [])

  // Mock data - in real app this would come from user's account
  const farmerData = {
    name: user?.name || 'Farmer',
    farmName: 'Green Valley Farm',
    location: 'Bo District, Sierra Leone',
    totalArea: '25 acres',
    activeFields: 3,
    currentCrops: ['Wheat', 'Rice', 'Sugarcane'],
  }

  const weatherData = {
    temp: '28°C',
    humidity: '65%',
    wind: '12 km/h',
    condition: 'Partly Cloudy',
  }

  const recentAlerts = [
    {
      id: 1,
      type: 'warning',
      title: 'Disease Risk Alert',
      message: 'High humidity may increase fungal disease risk in wheat field',
      time: '2 hours ago',
    },
    {
      id: 2,
      type: 'info',
      title: 'Optimal Planting Window',
      message: 'Weather conditions favorable for rice planting next week',
      time: '5 hours ago',
    },
  ]

  const quickStats = [
    {
      label: 'Active Fields',
      value: '3',
      icon: MapPin,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      label: 'Predicted Yield',
      value: '95%',
      icon: TrendingUp,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      label: 'Farm Health',
      value: 'Good',
      icon: CheckCircle2,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      label: 'Alerts',
      value: '2',
      icon: AlertTriangle,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100',
    },
  ]

  const agriPlatformFeatures = [
    { label: 'Agri Industry', icon: Factory, href: '/agri-industry', color: 'text-orange-600', bgColor: 'bg-orange-100', desc: 'Industrial processing' },
    { label: 'Crop Insurance', icon: ShieldCheck, href: '/financial-services', color: 'text-blue-600', bgColor: 'bg-blue-100', desc: 'Protect your crops' },
    { label: 'Diaspora Invest', icon: Globe, href: '/diaspora-invest', color: 'text-indigo-600', bgColor: 'bg-indigo-100', desc: 'Investment opportunities' },
    { label: 'Education', icon: GraduationCap, href: '/education', color: 'text-yellow-600', bgColor: 'bg-yellow-100', desc: 'Learn modern farming' },
    { label: 'Extension Hub', icon: Radio, href: '/extension-hub', color: 'text-purple-600', bgColor: 'bg-purple-100', desc: 'Expert advice' },
    { label: 'Farm Finances', icon: DollarSign, href: '/financial-services', color: 'text-green-600', bgColor: 'bg-green-100', desc: 'Track earnings' },
    { label: 'Farm Management', icon: ClipboardList, href: '/farm-management', color: 'text-teal-600', bgColor: 'bg-teal-100', desc: 'Manage operations' },
    { label: 'Feed Salone', icon: Target, href: '/feed-salone', color: 'text-red-600', bgColor: 'bg-red-100', desc: 'National strategy' },
    { label: 'Financial Services', icon: Banknote, href: '/financial-services', color: 'text-emerald-600', bgColor: 'bg-emerald-100', desc: 'Loans & Banking' },
    { label: 'Food Security', icon: PieChart, href: '/food-security', color: 'text-cyan-600', bgColor: 'bg-cyan-100', desc: 'National stats' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Welcome back, {farmerData.name}
              </h1>
              <div className="flex items-center gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <Sprout className="w-4 h-4" />
                  <span>{farmerData.farmName}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{farmerData.location}</span>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="sm" className="bg-white">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
              <Button variant="outline" size="sm" className="bg-white">
                <Bell className="w-4 h-4 mr-2" />
                Notifications
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {quickStats.map((stat) => {
            const Icon = stat.icon
            return (
              <Card key={stat.label} className="p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">
                      {stat.label}
                    </p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`${stat.bgColor} p-3 rounded-lg`}>
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Weather Widget */}
          <Card className="p-6 lg:col-span-1 bg-gradient-to-br from-blue-500 to-blue-600 text-white border-none">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-lg">Current Weather</h3>
              <Cloud className="w-6 h-6 text-blue-100" />
            </div>
            <div className="space-y-6">
              <div className="text-center py-2">
                <p className="text-5xl font-bold mb-2">{weatherData.temp}</p>
                <p className="text-blue-100 text-lg">{weatherData.condition}</p>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-blue-400/30">
                <div className="text-center">
                  <Droplets className="w-5 h-5 text-blue-100 mx-auto mb-1" />
                  <p className="text-sm font-medium">{weatherData.humidity}</p>
                  <p className="text-xs text-blue-200">Humidity</p>
                </div>
                <div className="text-center">
                  <Wind className="w-5 h-5 text-blue-100 mx-auto mb-1" />
                  <p className="text-sm font-medium">{weatherData.wind}</p>
                  <p className="text-xs text-blue-200">Wind</p>
                </div>
                <div className="text-center">
                  <Thermometer className="w-5 h-5 text-blue-100 mx-auto mb-1" />
                  <p className="text-sm font-medium">{weatherData.temp}</p>
                  <p className="text-xs text-blue-200">Temp</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Recent Alerts */}
          <Card className="p-6 lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-lg text-gray-900">Recent Alerts</h3>
              <Badge variant="outline" className="bg-gray-100">{recentAlerts.length} Active</Badge>
            </div>
            <div className="space-y-3">
              {recentAlerts.map((alert) => (
                <div
                  key={alert.id}
                  className={`p-4 rounded-lg border flex items-start gap-3 ${alert.type === 'warning'
                    ? 'bg-yellow-50 border-yellow-200'
                    : 'bg-blue-50 border-blue-200'
                    }`}
                >
                  {alert.type === 'warning' ? (
                    <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                  ) : (
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5" />
                  )}
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 mb-1">{alert.title}</p>
                    <p className="text-sm text-gray-600 mb-2">
                      {alert.message}
                    </p>
                    <p className="text-xs text-gray-500">
                      {alert.time}
                    </p>
                  </div>
                </div>
              ))}
              <Button variant="ghost" className="w-full text-green-600 hover:text-green-700 hover:bg-green-50" size="sm">
                View All Alerts <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </Card>
        </div>

        {/* AI Services Section */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">AI-Powered Services</h2>
              <p className="text-gray-600">Advanced tools to optimize your farming</p>
            </div>
            <Button variant="outline">View All Services</Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/crop-recommendation">
              <Card className="p-6 hover:shadow-lg transition-all cursor-pointer group border-l-4 border-l-green-500 h-full">
                <div className="bg-green-100 p-3 rounded-full w-fit mb-4 group-hover:scale-110 transition-transform">
                  <Sprout className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-bold text-lg mb-2 group-hover:text-green-700 transition-colors">Crop Recommendation</h4>
                <p className="text-sm text-gray-600">
                  AI-driven analysis to find the best crops for your specific soil conditions.
                </p>
              </Card>
            </Link>

            <Link href="/yield-prediction">
              <Card className="p-6 hover:shadow-lg transition-all cursor-pointer group border-l-4 border-l-blue-500 h-full">
                <div className="bg-blue-100 p-3 rounded-full w-fit mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-bold text-lg mb-2 group-hover:text-blue-700 transition-colors">Yield Prediction</h4>
                <p className="text-sm text-gray-600">
                  Accurate harvest estimates based on weather patterns and crop health.
                </p>
              </Card>
            </Link>

            <Link href="/disease-prediction">
              <Card className="p-6 hover:shadow-lg transition-all cursor-pointer group border-l-4 border-l-red-500 h-full">
                <div className="bg-red-100 p-3 rounded-full w-fit mb-4 group-hover:scale-110 transition-transform">
                  <Bug className="w-6 h-6 text-red-600" />
                </div>
                <h4 className="font-bold text-lg mb-2 group-hover:text-red-700 transition-colors">Disease Detection</h4>
                <p className="text-sm text-gray-600">
                  Early detection of crop diseases using image recognition technology.
                </p>
              </Card>
            </Link>

            <Link href="/fertilizer-guide">
              <Card className="p-6 hover:shadow-lg transition-all cursor-pointer group border-l-4 border-l-purple-500 h-full">
                <div className="bg-purple-100 p-3 rounded-full w-fit mb-4 group-hover:scale-110 transition-transform">
                  <FileText className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-bold text-lg mb-2 group-hover:text-purple-700 transition-colors">Fertilizer Guide</h4>
                <p className="text-sm text-gray-600">
                  Optimized fertilizer application schedules for maximum yield.
                </p>
              </Card>
            </Link>
          </div>
        </div>

        {/* Agri Platform Section */}
        <div className="mb-10" id="agri-platform">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Agri Platform</h2>
              <p className="text-gray-600">Essential tools and resources for your farm business</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {agriPlatformFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Link href={feature.href} key={index}>
                  <Card className="p-4 hover:shadow-md transition-all cursor-pointer h-full border hover:border-green-200">
                    <div className={`${feature.bgColor} p-3 rounded-lg w-fit mb-3`}>
                      <Icon className={`w-6 h-6 ${feature.color}`} />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">{feature.label}</h4>
                    <p className="text-xs text-gray-500 line-clamp-2">
                      {feature.desc}
                    </p>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>

        {/* My Fields & Community */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* My Fields */}
          <Card className="p-6 lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold text-lg">My Fields</h3>
              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                <Plus className="w-4 h-4 mr-2" />
                Add Field
              </Button>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {farmerData.currentCrops.map((crop, index) => (
                <div key={index} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-gray-900">Field {index + 1}</h4>
                      <p className="text-sm text-gray-500">{(25 / 3).toFixed(1)} acres</p>
                    </div>
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-200">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm mt-3">
                    <span className="text-gray-600">Crop: <span className="font-medium text-gray-900">{crop}</span></span>
                    <span className="text-green-600 font-medium">Good Health</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Quick Links */}
          <div className="space-y-6">
            <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-green-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg text-green-900">Community</h3>
              </div>
              <p className="text-sm text-green-800 mb-4">
                Connect with 500+ farmers in your district. Share tips and get advice.
              </p>
              <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
                <Link href="/forum">Join Discussion</Link>
              </Button>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-orange-50 to-amber-50 border-orange-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  <ShoppingBag className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-lg text-orange-900">Marketplace</h3>
              </div>
              <p className="text-sm text-orange-800 mb-4">
                Sell your produce directly to buyers. Best prices guaranteed.
              </p>
              <Button className="w-full bg-orange-600 hover:bg-orange-700" asChild>
                <Link href="/marketplace">Visit Marketplace</Link>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
