'use client'

import { Navigation } from '@/components/navigation'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ShoppingCart, Heart, Package, TrendingUp, Search, Star, MapPin, Phone, Mail, Filter, Bell, User, Settings, Clock, CheckCircle2, XCircle, Truck, Sprout, CloudRain, BarChart3, ShieldCheck, Factory, Globe, GraduationCap, MessageSquare, DollarSign, ClipboardList, ArrowRight, Wallet } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { useEffect, useState } from 'react'
import { auth, type User as AuthUser } from '@/lib/auth'
import Link from 'next/link'

export default function BuyerDashboard() {
  const [user, setUser] = useState<AuthUser | null>(null)

  useEffect(() => {
    setUser(auth.getUser())
  }, [])

  return (
    <div className="min-h-screen bg-white pb-24">
      <Navigation />

      <div className="bg-gradient-to-r from-[#1EB53A] to-[#0072C6] pt-32 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/10 blur-[100px] rounded-full translate-x-1/2"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-6">
            <div>
              <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-md px-4 py-1.5 mb-4 flex items-center gap-2 w-fit font-black uppercase tracking-widest text-[10px]">
                <Wallet className="w-3 h-3" />
                Buyer Portal
              </Badge>
              <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tighter">
                Welcome back,<br />
                <span className="text-white underline decoration-4 underline-offset-8 decoration-white/30">{user ? user.name : 'Partner'}</span>
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="lg" className="border-white/20 hover:bg-white/10 text-white rounded-[1.5rem] font-bold h-14" asChild>
                <Link href="/profile">
                  <User className="w-5 h-5 mr-2" />
                  Access Profile
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-white text-slate-900 border-none hover:bg-slate-100 rounded-[1.5rem] font-bold h-14">
                <Bell className="w-5 h-5 mr-2" />
                Alerts
              </Button>
            </div>
          </div>
          <p className="text-white/80 font-medium max-w-xl text-lg">Manage your procurement portfolio and discover certified agricultural assets.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-12 relative z-20">
        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="p-8 border-none shadow-xl rounded-[2.5rem] bg-white group hover:-translate-y-1 transition-all">
            <div className="flex items-center justify-between mb-6">
              <div className="bg-[#0072C6]/10 p-4 rounded-2xl">
                <ShoppingCart className="w-6 h-6 text-[#0072C6]" />
              </div>
              <Badge className="bg-[#0072C6] text-white border-none text-[10px] uppercase font-black tracking-widest px-3 py-1">Active</Badge>
            </div>
            <h3 className="text-4xl font-black text-slate-900 mb-1 tracking-tighter">12</h3>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Active Orders</p>
          </Card>

          <Card className="p-8 border-none shadow-xl rounded-[2.5rem] bg-white group hover:-translate-y-1 transition-all">
            <div className="flex items-center justify-between mb-6">
              <div className="bg-[#1EB53A]/10 p-4 rounded-2xl">
                <Package className="w-6 h-6 text-[#1EB53A]" />
              </div>
              <Badge className="bg-[#1EB53A] text-white border-none text-[10px] uppercase font-black tracking-widest px-3 py-1">Complete</Badge>
            </div>
            <h3 className="text-4xl font-black text-slate-900 mb-1 tracking-tighter">45</h3>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Fulfilled</p>
          </Card>

          <Card className="p-8 border-none shadow-xl rounded-[2.5rem] bg-white group hover:-translate-y-1 transition-all">
            <div className="flex items-center justify-between mb-6">
              <div className="bg-amber-100 p-4 rounded-2xl">
                <Heart className="w-6 h-6 text-amber-500" />
              </div>
              <Badge className="bg-amber-500 text-white border-none text-[10px] uppercase font-black tracking-widest px-3 py-1">Watchlist</Badge>
            </div>
            <h3 className="text-4xl font-black text-slate-900 mb-1 tracking-tighter">28</h3>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Saved Assets</p>
          </Card>

          <Card className="p-8 border-none shadow-xl rounded-[2.5rem] bg-[#0072C6] text-white group hover:-translate-y-1 transition-all relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#1EB53A]/20 blur-[60px] rounded-full"></div>
            <div className="flex items-center justify-between mb-6 relative z-10">
              <div className="bg-white/10 p-4 rounded-2xl">
                <TrendingUp className="w-6 h-6 text-[#1EB53A]" />
              </div>
              <Badge className="bg-white/10 text-white border-none text-[10px] uppercase font-black tracking-widest px-3 py-1">30 Days</Badge>
            </div>
            <h3 className="text-4xl font-black text-white mb-1 tracking-tighter relative z-10">Le 2.4M</h3>
            <p className="text-xs font-bold text-white/50 uppercase tracking-widest relative z-10">Total Volume</p>
          </Card>
        </div>

        {/* AI Intelligence */}
        <div className="mb-12">
          <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Market Intelligence Engine</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: TrendingUp, title: "Yield Forecast", desc: "Predict supply availability for key crops.", action: "View Models", color: "text-[#1EB53A]", bg: "bg-[#1EB53A]" },
              { icon: CloudRain, title: "Risk Analysis", desc: "Assess climate impact on logistics routes.", action: "Check Risks", color: "text-[#0072C6]", bg: "bg-[#0072C6]" },
              { icon: BarChart3, title: "Price Analytics", desc: "Real-time fluctuation heatmaps.", action: "Analyze", color: "text-amber-500", bg: "bg-amber-500" },
              { icon: CheckCircle2, title: "AI Grading", desc: "Automated quality verification protocols.", action: "Verify", color: "text-purple-500", bg: "bg-purple-500" }
            ].map((item, i) => (
              <Card key={i} className="p-8 border-none shadow-lg rounded-[2.5rem] bg-white group hover:shadow-2xl transition-all cursor-pointer">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-4 rounded-2xl ${item.bg}/10 group-hover:scale-110 transition-transform`}>
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                </div>
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-2">{item.title}</h3>
                <p className="text-sm font-medium text-slate-500 mb-6 leading-relaxed">{item.desc}</p>
                <div className={`flex items-center text-[10px] font-black uppercase tracking-widest ${item.color}`}>
                  {item.action} <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Search */}
            <Card className="p-4 rounded-[2rem] border-none shadow-lg bg-white flex items-center gap-4">
              <div className="flex-1 relative">
                <Search className="w-5 h-5 absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" />
                <Input placeholder="Search global inventory..." className="pl-14 h-14 bg-slate-50 border-none rounded-[1.5rem] font-bold text-slate-700" />
              </div>
              <Button className="h-14 w-14 rounded-[1.5rem] bg-[#0072C6] text-white hover:bg-[#1EB53A]">
                <Filter className="w-5 h-5" />
              </Button>
            </Card>

            {/* Products */}
            <div className="space-y-6">
              <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Verified Listings</h2>
              {[
                { name: "Organic Wheat Seeds", type: "Grain", price: "Le 700/kg", seller: "Mohamed Kamara", icon: "🌾", color: "text-[#1EB53A]", bg: "bg-[#1EB53A]" },
                { name: "Harvester Combine", type: "Equipment", price: "Le 24k/hr", seller: "Ibrahim Sesay", icon: "🚜", color: "text-amber-500", bg: "bg-amber-500" },
                { name: "Fresh Tomatoes", type: "Produce", price: "Le 500/kg", seller: "Green Valley Farms", icon: "🍅", color: "text-red-500", bg: "bg-red-500" }
              ].map((product, i) => (
                <Card key={i} className="p-6 border-none shadow-md rounded-[2.5rem] bg-white hover:shadow-xl transition-all cursor-pointer group">
                  <div className="flex gap-6 items-center">
                    <div className={`h-24 w-24 rounded-[1.8rem] ${product.bg}/10 flex items-center justify-center text-4xl shadow-inner`}>
                      {product.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-xl font-black text-slate-900 group-hover:text-[#1EB53A] transition-colors">{product.name}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge className="bg-slate-100 text-slate-500 border-none text-[9px] uppercase font-black tracking-widest">{product.type}</Badge>
                            <span className="text-[10px] font-bold text-slate-400">By {product.seller}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`text-xl font-black ${product.color}`}>{product.price}</div>
                          <div className="flex gap-2 justify-end mt-2">
                            <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full hover:bg-slate-100"><Heart className="w-4 h-4 text-slate-400" /></Button>
                            <Button size="icon" className="h-8 w-8 rounded-full bg-[#0072C6] text-white hover:bg-[#1EB53A]"><ShoppingCart className="w-4 h-4" /></Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <Card className="p-8 border-none shadow-xl rounded-[2.5rem] bg-white">
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Quick Actions</h3>
              <div className="space-y-3">
                <Button className="w-full justify-start h-14 rounded-[1.2rem] font-bold text-slate-600 hover:text-slate-900" variant="ghost">
                  <ShoppingCart className="w-5 h-5 mr-3" /> Cart (3)
                </Button>
                <Button className="w-full justify-start h-14 rounded-[1.2rem] font-bold text-slate-600 hover:text-slate-900" variant="ghost">
                  <Heart className="w-5 h-5 mr-3" /> Watchlist (28)
                </Button>
                <Button className="w-full justify-start h-14 rounded-[1.2rem] bg-[#1EB53A] text-white hover:bg-[#1base-3A]/90 font-black shadow-lg shadow-green-200">
                  <Search className="w-5 h-5 mr-3" /> Browse Market
                </Button>
              </div>
            </Card>

            <Card className="p-8 border-none shadow-xl rounded-[2.5rem] bg-white">
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Trusted Sources</h3>
              <div className="space-y-6">
                {["Mohamed Kamara", "Green Valley", "Ibrahim Sesay"].map((name, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center font-black text-slate-300">
                      {name[0]}
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-slate-900 text-sm">{name}</p>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">4.8 / 5.0</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>

    </div>
  )
}
