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
  Radio, DollarSign, ClipboardList, Target, Banknote, PieChart, ArrowRight,
  Building2, User, Zap, LayoutDashboard, Search
} from 'lucide-react'

import { useState, useEffect } from 'react'
import { auth, type User as AuthUser } from '@/lib/auth'

export default function DashboardPage() {
  const [user, setUser] = useState<AuthUser | null>(null)

  useEffect(() => {
    setUser(auth.getUser())
  }, [])

  const farmerData = {
    name: user?.name || 'User',
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
      color: 'text-[#1EB53A]',
      bgColor: 'bg-[#1EB53A]/10',
    },
    {
      label: 'Predicted Yield',
      value: '95%',
      icon: TrendingUp,
      color: 'text-[#0072C6]',
      bgColor: 'bg-[#0072C6]/10',
    },
    {
      label: 'Farm Health',
      value: 'Good',
      icon: CheckCircle2,
      color: 'text-[#1EB53A]',
      bgColor: 'bg-[#1EB53A]/10',
    },
    {
      label: 'Security Alerts',
      value: '2',
      icon: AlertTriangle,
      color: 'text-amber-500',
      bgColor: 'bg-amber-500/10',
    },
  ]

  const agriPlatformFeatures = [
    { label: 'Agri Industry', icon: Factory, href: '/agri-industry', color: 'text-amber-500', bgColor: 'bg-amber-500/10', desc: 'Processing' },
    { label: 'Crop Insurance', icon: ShieldCheck, href: '/financial-services', color: 'text-[#0072C6]', bgColor: 'bg-[#0072C6]/10', desc: 'Secure Assets' },
    { label: 'Diaspora Invest', icon: Globe, href: '/diaspora-invest', color: 'text-[#1EB53A]', bgColor: 'bg-[#1EB53A]/10', desc: 'Capital' },
    { label: 'Education', icon: GraduationCap, href: '/education', color: 'text-amber-500', bgColor: 'bg-amber-500/10', desc: 'Training' },
    { label: 'Extension Hub', icon: Radio, href: '/extension-hub', color: 'text-[#0072C6]', bgColor: 'bg-[#0072C6]/10', desc: 'Assistance' },
    { label: 'Farm Finances', icon: DollarSign, href: '/financial-services', color: 'text-[#1EB53A]', bgColor: 'bg-[#1EB53A]/10', desc: 'Revenue' },
    { label: 'Farm Management', icon: ClipboardList, href: '/farm-management', color: 'text-[#1EB53A]', bgColor: 'bg-[#1EB53A]/10', desc: 'Operations' },
    { label: 'Feed Salone', icon: Target, href: '/feed-salone', color: 'text-rose-500', bgColor: 'bg-rose-500/10', desc: 'Mandate' },
    { label: 'Financial Services', icon: Banknote, href: '/financial-services', color: 'text-[#1EB53A]', bgColor: 'bg-[#1EB53A]/10', desc: 'Loans' },
    { label: 'Food Security', icon: PieChart, href: '/food-security', color: 'text-[#0072C6]', bgColor: 'bg-[#0072C6]/10', desc: 'Statistics' },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Premium Gradient Command Header */}
      <div className="bg-gradient-to-r from-[#1EB53A] to-[#0072C6] pt-32 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/10 blur-[100px] rounded-full translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-white/5 blur-[80px] rounded-full -translate-x-1/4"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="space-y-4">
                <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-md px-4 py-1 flex items-center gap-2">
                  <LayoutDashboard className="w-3 h-3" />
                  INSTITUTIONAL COMMAND CENTER
                </Badge>
                <h1 className="text-5xl md:text-6xl font-black text-white leading-tight">
                  Welcome, <span className="text-white underline decoration-4 underline-offset-8 decoration-white/30">{user?.name || 'Explorer'}</span>
                </h1>
                <div className="flex items-center gap-6 text-white/70 font-bold uppercase tracking-widest text-[10px]">
                  <div className="flex items-center gap-2">
                    <Sprout className="w-4 h-4 text-[#1EB53A]" />
                    {user?.farmDetails?.name || 'UNREGISTERED NODE'}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-white" />
                    {user?.location || 'SIERRA LEONE NETWORK'}
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <Button className="h-14 px-8 bg-white text-[#0072C6] hover:bg-white/90 rounded-2xl font-black uppercase tracking-widest text-xs shadow-2xl transition-all" asChild>
                  <Link href="/profile">
                    <User className="w-4 h-4 mr-2" /> Account Profile
                  </Link>
                </Button>
                <Button variant="outline" className="h-14 px-8 border-white/30 text-white hover:bg-white/10 rounded-2xl font-black uppercase tracking-widest text-xs backdrop-blur-md transition-all">
                  <Bell className="w-4 h-4 mr-2" />
                  <span className="relative">
                    Alerts
                    <span className="absolute -top-1 -right-2 w-2 h-2 bg-rose-500 rounded-full"></span>
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 -mt-12 relative z-20">
        <div className="max-w-7xl mx-auto space-y-12">

          {/* Quick Action Hub */}
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            <Button className="h-14 px-10 bg-[#0072C6] border-none hover:bg-slate-800 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl transition-all shrink-0" asChild>
              <Link href="/government-schemes">
                <Building2 className="w-4 h-4 mr-3" /> Agri-Opp Portal
              </Link>
            </Button>
            {user?.role === 'farmer' && (
              <>
                <Button className="h-14 px-10 bg-[#1EB53A] border-none hover:bg-[#1base-3A]/90 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl transition-all shrink-0" asChild>
                  <Link href="/profile?edit=farm">
                    <Plus className="w-4 h-4 mr-3" /> Manage Estate
                  </Link>
                </Button>
                <Button variant="outline" className="h-14 px-10 border-slate-200 text-slate-900 hover:bg-slate-50 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all shrink-0" asChild>
                  <Link href="/marketplace/sell">
                    <ArrowRight className="w-4 h-4 mr-3" /> Post Listing
                  </Link>
                </Button>
              </>
            )}
            <Button variant="outline" className="h-14 px-10 border-slate-200 text-slate-900 hover:bg-slate-50 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all shrink-0" asChild>
              <Link href="/marketplace">
                <ShoppingBag className="w-4 h-4 mr-3" /> Marketplace
              </Link>
            </Button>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickStats.map((stat, i) => {
              const Icon = stat.icon
              return (
                <Card key={i} className="p-8 border-none shadow-xl rounded-[2rem] bg-white group hover:-translate-y-1 transition-all">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
                      <p className="text-3xl font-black text-slate-900">{stat.value}</p>
                    </div>
                    <div className={`${stat.bgColor} p-4 rounded-2xl group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-8 h-8 ${stat.color}`} />
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>

          {/* Command Modules */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Weather Intelligence Module */}
            <Card className="p-10 lg:col-span-1 bg-[#0072C6] text-white border-none rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0072C6]/20 blur-[60px] rounded-full"></div>
              <div className="flex items-center justify-between mb-10 relative z-10">
                <div className="space-y-1">
                  <Badge className="bg-white/10 text-white border-white/20 text-[8px] font-black uppercase tracking-widest px-3 py-0.5">METEOROLOGICAL NODE</Badge>
                  <h3 className="text-2xl font-black">Climate Intel</h3>
                </div>
                <Cloud className="w-10 h-10 text-[#0072C6]" />
              </div>
              <div className="text-center py-6 relative z-10">
                <p className="text-7xl font-black mb-4 group-hover:scale-110 transition-transform">{weatherData.temp}</p>
                <p className="text-[#0072C6] text-sm font-black uppercase tracking-[0.3em]">{weatherData.condition}</p>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-white/5 relative z-10">
                <div className="text-center">
                  <Droplets className="w-5 h-5 text-slate-500 mx-auto mb-2" />
                  <p className="text-sm font-black">{weatherData.humidity}</p>
                  <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">Humidity</p>
                </div>
                <div className="text-center">
                  <Wind className="w-5 h-5 text-slate-500 mx-auto mb-2" />
                  <p className="text-sm font-black">{weatherData.wind}</p>
                  <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">Wind</p>
                </div>
                <div className="text-center">
                  <Zap className="w-5 h-5 text-slate-500 mx-auto mb-2" />
                  <p className="text-sm font-black">Low</p>
                  <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">Risk</p>
                </div>
              </div>
            </Card>

            {/* Secure Alerts Module */}
            <Card className="p-10 lg:col-span-2 border-none shadow-xl rounded-[2.5rem] bg-white">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <h3 className="text-2xl font-black text-slate-900">Network Security Alerts</h3>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">Real-time system monitoring</p>
                </div>
                <Badge className="bg-emerald-50 text-[#1EB53A] border-none font-black px-4 py-1.5 rounded-full text-[10px] uppercase tracking-widest">
                  {recentAlerts.length} Active Feeds
                </Badge>
              </div>
              <div className="space-y-4">
                {recentAlerts.map((alert) => (
                  <div key={alert.id} className="p-6 rounded-3xl border border-slate-50 bg-slate-50/50 flex items-start gap-4 hover:bg-white hover:shadow-lg transition-all group">
                    <div className={`p-4 rounded-2xl ${alert.type === 'warning' ? 'bg-amber-100/50 text-amber-600' : 'bg-[#0072C6]/10 text-[#0072C6]'}`}>
                      {alert.type === 'warning' ? <AlertTriangle className="w-6 h-6" /> : <ShieldCheck className="w-6 h-6" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-lg font-black text-slate-900 group-hover:text-branded transition-colors">{alert.title}</p>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{alert.time}</p>
                      </div>
                      <p className="text-sm text-slate-500 font-medium leading-relaxed">{alert.message}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="link" className="w-full mt-8 text-slate-900 font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 group-hover:text-branded">
                Access Full Registry <ArrowRight className="w-4 h-4" />
              </Button>
            </Card>
          </div>

          {/* AI Core Intelligence Section */}
          <div>
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className="text-3xl font-black text-slate-900">AI Core Intelligence</h2>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">Advanced machine learning directives</p>
              </div>
              <Button variant="outline" className="border-slate-200 text-slate-900 rounded-xl font-black uppercase tracking-widest text-[10px] h-12 px-6">System Overview</Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Crop Selector', icon: Sprout, color: '#1EB53A', desc: 'Soil-to-commodity optimization models.', href: '/crop-recommendation' },
                { title: 'Yield Oracle', icon: TrendingUp, color: '#0072C6', desc: 'Probabilistic harvest outcome estimation.', href: '#' },
                { title: 'Pathogen Scanner', icon: Bug, color: '#F43F5E', desc: 'Computer vision diagnostics in the field.', href: '/disease-detection' },
                { title: 'Nutrient Matrix', icon: FileText, color: '#8B5CF6', desc: 'Synthetic fertilizer application schedules.', href: '#' }
              ].map((ai, i) => (
                <Link href={ai.href} key={i}>
                  <Card className="p-10 border-none shadow-xl hover:shadow-2xl transition-all rounded-[2.5rem] bg-white group hover:-translate-y-1">
                    <div className="p-5 rounded-2xl w-fit mb-8 group-hover:scale-110 transition-transform" style={{ backgroundColor: `${ai.color}10`, color: ai.color }}>
                      <ai.icon className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tight group-hover:text-branded transition-colors">{ai.title}</h4>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6">{ai.desc}</p>
                    <div className="h-1 w-12 bg-slate-50 group-hover:bg-branded group-hover:w-full transition-all duration-500"></div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* National Platform Ecosystem */}
          <div id="agri-platform">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-1 w-12 bg-[#1EB53A]"></div>
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Agricultural Platform Ecosystem</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {agriPlatformFeatures.map((feature, i) => {
                const Icon = feature.icon
                return (
                  <Link href={feature.href} key={i}>
                    <Card className="p-6 border-none shadow-sm hover:shadow-xl transition-all rounded-[2rem] bg-white group border border-slate-50 hover:border-[#1EB53A]/20">
                      <div className={`${feature.bgColor} p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform`}>
                        <Icon className={`w-6 h-6 ${feature.color}`} />
                      </div>
                      <h4 className="font-extrabold text-slate-900 text-sm mb-1">{feature.label}</h4>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{feature.desc}</p>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Estate Management & Communal Intelligence */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Physical Estate Management */}
            <Card className="p-10 lg:col-span-2 border-none shadow-xl rounded-[3rem] bg-white">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <h3 className="text-2xl font-black text-slate-900">Physical Estate Inventory</h3>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">Satellite-verified land assets</p>
                </div>
                <Button className="h-12 px-6 bg-[#1EB53A] text-white rounded-xl font-black uppercase tracking-widest text-[10px] shadow-lg">
                  <Plus className="w-4 h-4 mr-2" /> Register Asset
                </Button>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {farmerData.currentCrops.map((crop, i) => (
                  <div key={i} className="p-8 border border-slate-50 bg-slate-50/50 rounded-[2rem] hover:bg-white hover:shadow-xl transition-all group">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h4 className="text-xl font-black text-slate-900 uppercase tracking-tight">Division {i + 1}</h4>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{(25 / 3).toFixed(1)} Dedicated Acres</p>
                      </div>
                      <Badge className="bg-[#1EB53A]/10 text-[#1EB53A] border-none font-black px-4 py-1 rounded-full text-[8px] uppercase tracking-widest">VERIFIED ACTIVE</Badge>
                    </div>
                    <div className="flex items-center justify-between text-[11px] font-bold">
                      <span className="text-slate-400 uppercase tracking-widest">Crop: <span className="text-slate-900 font-black">{crop}</span></span>
                      <span className="text-[#1EB53A] uppercase tracking-widest flex items-center gap-2">
                        <CheckCircle2 className="w-3 h-3" /> Optimal Health
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Communal Intelligence & Trade */}
            <div className="space-y-8">
              <Card className="p-10 bg-gradient-to-br from-[#1EB53A] to-[#1EB53A]/80 text-white rounded-[2.5rem] shadow-2xl border-none relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 blur-[60px] rounded-full"></div>
                <div className="flex items-center gap-4 mb-8 relative z-10">
                  <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-md">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black">Communal Intel</h3>
                </div>
                <p className="text-white/80 font-medium mb-8 leading-relaxed relative z-10">
                  Connect with <span className="text-white font-black underline decoration-white/30 underline-offset-4">500+ professionals</span> in your district Hub.
                </p>
                <Button className="w-full h-14 bg-white text-[#1EB53A] hover:bg-white/90 rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-2xl active:scale-95 transition-all relative z-10" asChild>
                  <Link href="/forum">Access Comm Network</Link>
                </Button>
              </Card>

              <Card className="p-10 bg-[#0072C6] text-white rounded-[2.5rem] shadow-2xl border-none relative overflow-hidden group">
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-amber-500/20 blur-[60px] rounded-full"></div>
                <div className="flex items-center gap-4 mb-8 relative z-10">
                  <div className="bg-amber-500/20 p-3 rounded-2xl">
                    <ShoppingBag className="w-8 h-8 text-amber-500" />
                  </div>
                  <h3 className="text-2xl font-black">Trade Node</h3>
                </div>
                <p className="text-white/50 font-medium mb-8 leading-relaxed relative z-10">
                  Direct market access terminal. Guaranteed institutional commodity pricing.
                </p>
                <Button className="w-full h-14 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-2xl active:scale-95 transition-all relative z-10" asChild>
                  <Link href="/marketplace">Enter Trade Hub</Link>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
