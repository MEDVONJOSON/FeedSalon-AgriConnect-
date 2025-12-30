"use client"

import { Navigation } from '@/components/navigation'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, Bug, Droplets, BarChart3, Globe, Users, Sprout, CheckCircle, Cpu, Cloud, Target, Flag } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Premium National Gradient Header */}
      <div className="bg-gradient-to-r from-[#1EB53A] to-[#0072C6] pt-32 pb-40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/10 blur-[100px] rounded-full translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-white/5 blur-[80px] rounded-full -translate-x-1/4"></div>

        <div className="container relative z-10 mx-auto px-4">
          <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-md px-4 py-1.5 mb-6 flex items-center gap-2 w-fit font-black uppercase tracking-widest text-[10px]">
            <Flag className="w-3 h-3" />
            Our National Vision
          </Badge>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tighter">
            Agri-Connect<br />
            <span className="text-white underline decoration-4 underline-offset-8 decoration-white/30">Sierra Leone</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl leading-relaxed font-medium">
            Pioneering the <span className="text-white font-bold italic underline decoration-white/20">Digital Green Revolution</span> to transform our nation's soil into prosperity through <span className="text-white font-bold">Artificial Intelligence</span>.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 h-full -mt-24 relative z-20 pb-24">
        {/* Introduction Card */}
        <Card className="p-12 md:p-16 border-none bg-white rounded-[3rem] shadow-3xl mb-24 relative overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="space-y-10">
              <Badge className="bg-[#1EB53A]/10 text-[#1EB53A] border-none font-black uppercase tracking-widest px-4 py-1.5">Presidential Initiative Support</Badge>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tighter">
                Aligned with <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1EB53A] to-[#0072C6]">"FEED SALONE"</span>
              </h2>
              <p className="text-slate-600 leading-relaxed font-medium text-lg">
                Agri-Connect is the digital backbone of the mandate to achieve food self-sufficiency. We are bridging the gap between traditional wisdom and modern precision.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-slate-50 border border-slate-100 px-6 py-4 rounded-2xl flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#1EB53A]/10 flex items-center justify-center">
                    <CheckCircle className="text-[#1EB53A] w-5 h-5" />
                  </div>
                  <span className="font-bold text-slate-900 text-sm uppercase tracking-wide">Food Security 2028</span>
                </div>
                <div className="bg-slate-50 border border-slate-100 px-6 py-4 rounded-2xl flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#0072C6]/10 flex items-center justify-center">
                    <CheckCircle className="text-[#0072C6] w-5 h-5" />
                  </div>
                  <span className="font-bold text-slate-900 text-sm uppercase tracking-wide">Digital Literacy</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[#1EB53A] to-[#0072C6] rounded-[2.5rem] opacity-10 absolute inset-0 rotate-6 scale-95"></div>
              <div className="aspect-square bg-[#0072C6] rounded-[2.5rem] p-12 flex flex-col items-center justify-center text-center relative z-10 shadow-2xl">
                <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center mb-8 backdrop-blur-sm animate-pulse">
                  <Sprout className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-4xl font-black text-white tracking-tighter mb-4">100% NATIONAL</h3>
                <p className="text-white/60 font-medium leading-relaxed max-w-sm">Engineered in Sierra Leone for the specific climate, soil, and people of our land.</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Mission Section */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
            <div>
              <h2 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.4em] mb-4">Core Directive</h2>
              <div className="text-5xl font-black text-slate-900 uppercase tracking-tighter">Our Mission</div>
            </div>
            <p className="text-xl text-slate-600 font-medium max-w-xl text-right md:text-right">
              To democratize access to <span className="text-[#1EB53A] font-bold">agri-intelligence</span> and empower every Sierra Leonean farmer to double yield by 2030.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            {[
              { val: "15K+", label: "Active Farmers", color: "text-[#1EB53A]", bg: "bg-white" },
              { val: "97%", label: "AI Confidence", color: "text-[#0072C6]", bg: "bg-white" },
              { val: "14+", label: "Districts Covered", color: "text-amber-500", bg: "bg-white" },
              { val: "24h", label: "Expert Support", color: "text-slate-900", bg: "bg-white" }
            ].map((stat, i) => (
              <Card key={i} className={`p-10 border-none shadow-xl hover:shadow-2xl transition-all rounded-[2.5rem] text-center ${stat.bg}`}>
                <p className={`text-6xl font-black tracking-tighter mb-4 ${stat.color}`}>{stat.val}</p>
                <p className="text-slate-400 font-black uppercase tracking-widest text-[10px]">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="bg-slate-50 rounded-[4rem] p-16 mb-24 relative overflow-hidden">
          <div className="text-center mb-16">
            <h2 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.4em] mb-4">Features & Capabilities</h2>
            <div className="text-4xl font-black text-slate-900 uppercase tracking-tighter">Agricultural Intelligence</div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: TrendingUp, title: "Yield Prediction", desc: "Advanced machine learning models predict crop yields with 95% accuracy.", color: "text-[#1EB53A]", bg: "bg-[#1EB53A]" },
              { icon: Bug, title: "Disease Detection", desc: "Early warning system for crop diseases based on environmental vector analysis.", color: "text-red-500", bg: "bg-red-500" },
              { icon: Droplets, title: "Water Management", desc: "Smart irrigation recommendations based on soil moisture and forecast data.", color: "text-[#0072C6]", bg: "bg-[#0072C6]" },
              { icon: BarChart3, title: "Market Analysis", desc: "Real-time market price trends and demand forecasting for informed selling.", color: "text-amber-500", bg: "bg-amber-500" }
            ].map((item, i) => (
              <Card key={i} className="p-10 border-none bg-white rounded-[2.5rem] shadow-lg hover:shadow-2xl transition-all group">
                <div className="flex items-start gap-8">
                  <div className={`w-16 h-16 rounded-2xl ${item.bg}/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                    <item.icon className={`w-8 h-8 ${item.color}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-4">{item.title}</h3>
                    <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Technology Pillars */}
        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          <div className="col-span-2 space-y-8">
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter mb-4">Technological Pillars</h2>

            {[
              { icon: Cpu, title: "Neural Networks", desc: "CNN models trained on 500,000+ localized African crop variant images.", color: "text-[#1EB53A]" },
              { icon: Cloud, title: "Meteorological Fusion", desc: "Combining satellite data with IoT sensors in Freetown, Bo, and Makeni.", color: "text-[#0072C6]" },
              { icon: Users, title: "Hybrid Expert System", desc: "AI handles the data, local agronomists provide the human context.", color: "text-amber-500" }
            ].map((pill, i) => (
              <div key={i} className="flex gap-8 p-8 bg-white rounded-[2.5rem] shadow-lg border border-slate-50">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0">
                  <pill.icon className={`w-8 h-8 ${pill.color}`} />
                </div>
                <div>
                  <h4 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-2">{pill.title}</h4>
                  <p className="text-slate-500 font-medium leading-relaxed">{pill.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <Card className="p-10 bg-[#0072C6] text-white rounded-[3rem] shadow-2xl relative overflow-hidden flex flex-col justify-center text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#1EB53A]/20 blur-[80px] rounded-full"></div>
            <div className="relative z-10">
              <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-[2rem] flex items-center justify-center mx-auto mb-8 border border-white/10">
                <img src="/rubot-icon.png" alt="Rubot" className="w-12 h-12 object-contain" />
              </div>
              <Badge className="bg-[#1EB53A] text-white border-none font-black uppercase tracking-widest mb-6">RUBOT 2.0</Badge>
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-6">Your AI Assistant</h3>
              <p className="text-white/60 font-medium italic leading-relaxed">"My mission is to ensure every seed sown in Sierra Leone fulfills its destiny."</p>
            </div>
          </Card>
        </div>

        {/* Partners */}
        <div className="text-center">
          <p className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-12">Institutional Partners</p>
          <div className="flex flex-wrap justify-center gap-12 lg:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholders for logos, styled with text for now if images missing */}
            <div className="flex flex-col items-center gap-4">
              <div className="h-20 w-20 bg-slate-100 rounded-full flex items-center justify-center font-black text-slate-300">GOSL</div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Gov. of Sierra Leone</span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="h-20 w-20 bg-slate-100 rounded-full flex items-center justify-center font-black text-slate-300">WFP</div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">World Food Programme</span>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="h-20 w-20 bg-slate-100 rounded-full flex items-center justify-center font-black text-slate-300">MAFS</div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Min. of Agriculture</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
