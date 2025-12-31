'use client'

import { Navigation } from '@/components/navigation'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Fish, Thermometer, Droplets, Activity, Clock, Waves } from 'lucide-react'

export default function FisheriesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Premium Gradient Header */}
      <div className="bg-gradient-to-r from-[#1EB53A] to-[#0072C6] pt-32 pb-20 relative overflow-hidden">
        {/* Dynamic Accents */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/10 blur-[100px] rounded-full translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-white/5 blur-[80px] rounded-full -translate-x-1/4"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-md px-4 py-1 flex items-center gap-2">
                <Fish className="w-3 h-3" />
                AQUACULTURE CONTROL HUB
              </Badge>
            </div>
            <h1 className="text-6xl font-black text-white mb-6 leading-tight select-none">Fisheries & Marine Monitor</h1>
            <p className="text-xl text-white/80 font-medium max-w-2xl mb-12">
              Precision monitoring of <span className="text-white font-black underline decoration-2 underline-offset-4">water quality</span>, growth trajectories, and feeding optimization for national food security.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button className="h-14 px-8 bg-white text-[#0072C6] hover:bg-white/90 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl active:scale-95 transition-all">
                Link Pond Sensors
              </Button>
              <Button className="h-14 px-8 bg-[#0072C6] border border-white/10 text-white hover:bg-slate-800 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl active:scale-95 transition-all">
                Generate Export Cert
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Real-time Telemetry Widgets */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 -mt-32 relative z-20">
            <Card className="p-8 border-none shadow-2xl rounded-[2rem] bg-white group hover:-translate-y-2 transition-all">
              <div className="flex items-center justify-between mb-6">
                <div className="bg-[#0072C6]/10 p-3 rounded-xl group-hover:bg-[#0072C6] group-hover:text-white transition-all">
                  <Thermometer className="w-6 h-6 text-[#0072C6] group-hover:text-white" />
                </div>
                <Badge className="bg-green-100 text-green-600 border-none font-black px-2 py-0.5 rounded-full text-[8px] uppercase tracking-widest">Stable</Badge>
              </div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Pond Temperature</p>
              <div className="text-4xl font-black text-slate-900">26.5<span className="text-[#0072C6]">°C</span></div>
            </Card>

            <Card className="p-8 border-none shadow-2xl rounded-[2rem] bg-white group hover:-translate-y-2 transition-all">
              <div className="flex items-center justify-between mb-6">
                <div className="bg-amber-100 p-3 rounded-xl group-hover:bg-amber-500 group-hover:text-white transition-all">
                  <Droplets className="w-6 h-6 text-amber-600 group-hover:text-white" />
                </div>
                <Badge className="bg-green-100 text-green-600 border-none font-black px-2 py-0.5 rounded-full text-[8px] uppercase tracking-widest">Optimal</Badge>
              </div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">pH Balance Index</p>
              <div className="text-4xl font-black text-slate-900">7.2<span className="text-amber-500">pH</span></div>
            </Card>

            <Card className="p-8 border-none shadow-2xl rounded-[2rem] bg-white group hover:-translate-y-2 transition-all">
              <div className="flex items-center justify-between mb-6">
                <div className="bg-[#1EB53A]/10 p-3 rounded-xl group-hover:bg-[#1EB53A] group-hover:text-white transition-all">
                  <Waves className="w-6 h-6 text-[#1EB53A] group-hover:text-white" />
                </div>
                <Badge className="bg-green-100 text-green-600 border-none font-black px-2 py-0.5 rounded-full text-[8px] uppercase tracking-widest">Normal</Badge>
              </div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Dissolved Oxygen</p>
              <div className="text-4xl font-black text-slate-900">6.8<span className="text-[#1EB53A]">mg/L</span></div>
            </Card>

            <Card className="p-8 border-none shadow-2xl rounded-[2rem] bg-white group hover:-translate-y-2 transition-all">
              <div className="flex items-center justify-between mb-6">
                <div className="bg-slate-100 p-3 rounded-xl group-hover:bg-[#0072C6] group-hover:text-white transition-all">
                  <Activity className="w-6 h-6 text-slate-600 group-hover:text-white" />
                </div>
                <Badge className="bg-blue-100 text-blue-600 border-none font-black px-2 py-0.5 rounded-full text-[8px] uppercase tracking-widest">Safe</Badge>
              </div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Ammonia Density</p>
              <div className="text-4xl font-black text-slate-900">0.02<span className="text-slate-400">ppm</span></div>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-10 border-none shadow-2xl rounded-[2.5rem] bg-white">
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-[#1EB53A]" />
                  <h3 className="text-2xl font-black text-slate-900">Feeding Optimization</h3>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { time: '08:00 AM', amount: '5.0 kg', status: 'Completed', color: '#1EB53A' },
                  { time: '12:00 PM', amount: '3.5 kg', status: 'In Progress', color: '#0072C6' },
                  { time: '04:00 PM', amount: '5.0 kg', status: 'Scheduled', color: '#F59E0B' },
                ].map((feed, i) => (
                  <div key={i} className="flex items-center justify-between p-6 bg-slate-50 border border-slate-100 rounded-2xl hover:border-[#1EB53A]/30 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: feed.color }}></div>
                      <div className="font-black text-slate-900">{feed.time}</div>
                    </div>
                    <div className="font-bold text-slate-500">{feed.amount} High-Protein Pellets</div>
                    <Badge className="bg-white text-slate-400 font-black px-4 py-1 rounded-full text-[8px] uppercase tracking-widest border border-slate-100">
                      {feed.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-10 border-none shadow-2xl rounded-[2.5rem] bg-[#0072C6] text-white relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1EB53A]/10 to-[#0072C6]/10 opacity-50"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-black mb-8 px-1">Projected Harvest Yield</h3>
                <div className="flex items-center gap-6 mb-10">
                  <div className="text-7xl font-black text-white group-hover:text-[#1EB53A] transition-colors">750<span className="text-3xl text-white/40">kg</span></div>
                  <div className="space-y-1">
                    <p className="text-xs font-black text-[#1EB53A] uppercase tracking-widest">Premium Quality</p>
                    <p className="text-sm font-bold text-white/50">Est. Market Value: Le 45.3M</p>
                  </div>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md">
                  <div className="flex justify-between text-xs font-black uppercase tracking-widest mb-4">
                    <span className="text-white/40">Growth Cycle Progress</span>
                    <span className="text-[#1EB53A]">82% Complete</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#1EB53A] to-[#0072C6] rounded-full" style={{ width: '82%' }}></div>
                  </div>
                </div>
                <p className="mt-8 text-xs font-bold text-white/30 text-center italic">Calculated based on average weight increments and sensor telemetry.</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
