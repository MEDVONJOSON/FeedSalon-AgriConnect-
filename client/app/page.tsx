"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { MapPin, Cloud, Settings, Bug, Sprout, Building2, RefreshCw, Calendar, TrendingUp } from 'lucide-react'
import { ChatWidget } from '@/components/chat-widget'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <div className="relative h-[600px] w-full overflow-hidden flex items-center bg-slate-900">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero-drone.png')" }}
        />

        {/* Flag Gradient Overlay - Lighter/Clearer */}
        <div className="absolute inset-0 bg-gradient-to-b from-green-600/30 via-transparent to-blue-600/30"></div>

        {/* Hero Content */}
        <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-center text-center z-10 pt-20">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-md max-w-5xl tracking-tight">
            Empowering Sierra Leone's Agriculture <br /> with AI & Technology
          </h1>
          <p className="text-xl md:text-2xl text-white font-medium mb-10 max-w-3xl drop-shadow-sm">
            Everything you need to manage your farm efficiently, boost yields, and access markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-8 h-12 shadow-lg border-2 border-transparent">
              <Link href="/auth/signup">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/20 text-white border-2 border-white/60 hover:bg-white/30 hover:text-white backdrop-blur-md font-bold text-lg px-8 h-12 shadow-lg">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* AI Tools Quick Access Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#1EB53A]/10 via-white to-[#0072C6]/10 border-y-4 border-[#1EB53A]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#1EB53A] to-[#0072C6] bg-clip-text text-transparent">🤖 AI-Powered Tools</span>
            </h2>
            <p className="text-lg text-slate-600">Get instant agricultural insights with our AI assistants</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Crop Recommendation */}
            <Link href="/crop-recommendation">
              <Card className="p-6 bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 border-transparent hover:border-green-500 group">
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Sprout className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Crop Recommendation</h3>
                <p className="text-slate-600 text-sm mb-4">Get personalized crop suggestions based on your soil and climate</p>
                <div className="flex items-center text-green-600 font-semibold text-sm group-hover:gap-2 transition-all">
                  <span>Try Now</span>
                  <span className="ml-1 group-hover:ml-2 transition-all">→</span>
                </div>
              </Card>
            </Link>

            {/* Disease Detection */}
            <Link href="/disease-prediction">
              <Card className="p-6 bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 border-transparent hover:border-red-500 group">
                <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Bug className="w-7 h-7 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Disease Detection</h3>
                <p className="text-slate-600 text-sm mb-4">Upload plant images to identify diseases and get treatment advice</p>
                <div className="flex items-center text-red-600 font-semibold text-sm group-hover:gap-2 transition-all">
                  <span>Scan Now</span>
                  <span className="ml-1 group-hover:ml-2 transition-all">→</span>
                </div>
              </Card>
            </Link>

            {/* Yield Prediction */}
            <Link href="/agri-ai/yield-prediction">
              <Card className="p-6 bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 border-transparent hover:border-blue-500 group">
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Yield Prediction</h3>
                <p className="text-slate-600 text-sm mb-4">Estimate your harvest based on conditions and farming practices</p>
                <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:gap-2 transition-all">
                  <span>Predict Now</span>
                  <span className="ml-1 group-hover:ml-2 transition-all">→</span>
                </div>
              </Card>
            </Link>

            {/* Fertilizer Guide */}
            <Link href="/agri-ai/fertilizer-guide">
              <Card className="p-6 bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 border-transparent hover:border-emerald-500 group">
                <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Sprout className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Fertilizer Guide</h3>
                <p className="text-slate-600 text-sm mb-4">Get customized fertilizer schedules for your crops</p>
                <div className="flex items-center text-emerald-600 font-semibold text-sm group-hover:gap-2 transition-all">
                  <span>Get Guide</span>
                  <span className="ml-1 group-hover:ml-2 transition-all">→</span>
                </div>
              </Card>
            </Link>
          </div>

          {/* Chatbot CTA */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-white rounded-2xl shadow-lg p-6 border-2 border-green-200">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <img src="/rubot-icon.png" alt="Agri Connect" className="w-full h-full object-cover" />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-lg text-slate-800">Chat with Agri Connect</h3>
                  <p className="text-slate-600 text-sm">Ask me anything about farming! Click the chat icon below →</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center shadow-inner">
                <Sprout className="w-10 h-10 text-green-600" />
              </div>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage your farm efficiently
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Land Information */}
            <Card className="bg-white shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-slate-100">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-6">
                  <MapPin className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  Land Information
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Track and manage your farmland parcels with detailed information about location, area, soil type, and current crops.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-all"
                >
                  <Link href="/land-management">Manage Land</Link>
                </Button>
              </div>
            </Card>

            {/* Weather Information */}
            <Card className="bg-white shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-slate-100">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                  <Cloud className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  Weather Information
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Get real-time weather updates and 5-day forecasts to plan your agricultural activities effectively.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all"
                >
                  <Link href="/weather">Check Weather</Link>
                </Button>
              </div>
            </Card>

            {/* Land Preparation */}
            <Card className="bg-white shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-slate-100">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center mb-6">
                  <Settings className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  Land Preparation
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Get expert guidance on land preparation techniques based on your soil type and target crops.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white transition-all"
                >
                  <Link href="/land-preparation">View Guide</Link>
                </Button>
              </div>
            </Card>

            {/* Disease Detection */}
            <Card className="bg-white shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-slate-100">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-6">
                  <Bug className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  Disease Detection
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Upload plant images to detect diseases using AI and get treatment recommendations instantly.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all"
                >
                  <Link href="/disease-prediction">Detect Disease</Link>
                </Button>
              </div>
            </Card>

            {/* Seed & Fertilizer */}
            <Card className="bg-white shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-slate-100">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mb-6">
                  <Sprout className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  Seed & Fertilizer
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Get personalized recommendations for the best seeds and fertilizers for your crops and soil type.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white transition-all"
                >
                  <Link href="/crop-recommendation">Get Recommendations</Link>
                </Button>
              </div>
            </Card>

            {/* Government Schemes */}
            <Card className="bg-white shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-slate-100">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-purple-50 flex items-center justify-center mb-6">
                  <Building2 className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  Government Schemes
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Browse and search agricultural government schemes and subsidies available for farmers.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-all"
                >
                  <Link href="/financial-services">View Schemes</Link>
                </Button>
              </div>
            </Card>

            {/* Crop Calendar */}
            <Card className="bg-white shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-slate-100">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center mb-6">
                  <Calendar className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  Crop Calendar
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  View planting and harvesting schedules for different crops throughout the year.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-all"
                >
                  <Link href="/dashboard">View Calendar</Link>
                </Button>
              </div>
            </Card>

            {/* Market Analysis */}
            <Card className="bg-white shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-slate-100">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-cyan-50 flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  Market Analysis
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Stay updated with daily market prices and trends for various agricultural commodities.
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white transition-all"
                >
                  <Link href="/marketplace">View Market</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Live Market Updates Section */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-slate-900">Live Market Prices</h2>
            <Link href="/marketplace" className="text-green-600 font-semibold hover:underline flex items-center gap-1">
              View All <TrendingUp className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {/* Mock Data */}
            {[
              { name: 'Rice (50kg)', price: 'Le 850,000', change: '+2.5%', isUp: true },
              { name: 'Cassava (100kg)', price: 'Le 450,000', change: '-1.2%', isUp: false },
              { name: 'Cocoa (kg)', price: 'Le 35,000', change: '+5.0%', isUp: true },
              { name: 'Palm Oil (5 Gal)', price: 'Le 600,000', change: '+0.5%', isUp: true },
            ].map((item, i) => (
              <Card key={i} className="p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-semibold text-slate-700">{item.name}</span>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${item.isUp ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {item.change}
                  </span>
                </div>
                <div className="text-2xl font-bold text-slate-900">{item.price}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Agricultural News Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Latest Agricultural News</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Government Announces New Fertilizer Subsidy', date: 'Oct 15, 2023', category: 'Policy' },
              { title: 'Sierra Leone Rice Production Hits Record High', date: 'Oct 12, 2023', category: 'Production' },
              { title: 'New Irrigation Scheme Launched in Bo District', date: 'Oct 10, 2023', category: 'Development' },
            ].map((news, i) => (
              <Card key={i} className="bg-white p-6 shadow-md hover:shadow-xl transition-all cursor-pointer group">
                <div className="text-xs font-bold text-green-600 mb-2 uppercase tracking-wide">{news.category}</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-green-700 transition-colors">{news.title}</h3>
                <div className="text-slate-500 text-sm">{news.date}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Chat Widget */}
      <ChatWidget />
    </div>
  )
}
