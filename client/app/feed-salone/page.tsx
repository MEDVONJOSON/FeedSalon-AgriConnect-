"use client"

import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Sprout, Package, Factory, TrendingUp, Shield, CloudRain, Users, Target, ArrowRight, ShieldCheck, Globe, Zap } from 'lucide-react'

export default function FeedSalonePage() {
  return (
    <div className="min-h-screen bg-slate-50/50">
      <Navigation />

      {/* Hero Mandate Section */}
      <section className="relative bg-[#0072C6] pt-32 pb-24 relative overflow-hidden border-b-4 border-[#1EB53A]">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 blur-[120px] rounded-full translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-[#1EB53A]/10 blur-[100px] rounded-full -translate-x-1/4"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-md px-6 py-1.5 mb-6 font-black uppercase tracking-widest text-[10px]">
              Presidential Priority Initiative
            </Badge>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter leading-[0.9]">
              Feed <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 underline decoration-[#1EB53A] underline-offset-8">Salone</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl font-medium leading-relaxed mb-10">
              The definitive <span className="text-white font-black underline decoration-white/20">National Strategy</span> for food sovereignty. Leveraging AI, institutional processing, and global market integration to transform Sierra Leone.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="h-16 px-10 bg-[#1EB53A] text-white hover:bg-slate-800 rounded-2xl font-black uppercase tracking-widest text-[11px] shadow-2xl transition-all">
                <Target className="w-5 h-5 mr-3" />
                Access Mandates
              </Button>
              <Button size="lg" variant="outline" className="h-16 px-10 border-white/20 text-white hover:bg-white/10 rounded-2xl font-black uppercase tracking-widest text-[11px]">
                Technical Whitepaper
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics / Objectives */}
      <section className="py-12 -mt-10 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { val: '-50%', lab: 'Imports', sub: 'Reduction Goal', color: 'text-rose-500' },
              { val: '+200%', lab: 'Exports', sub: 'Value Growth', color: 'text-[#1EB53A]' },
              { val: '500K', lab: 'Jobs', sub: 'Agro-Employment', color: 'text-[#0072C6]' },
              { val: 'Zero', lab: 'Hunger', sub: 'National Mandate', color: 'text-amber-500' },
              { val: '100%', lab: 'Climate', sub: 'Resilience Ready', color: 'text-indigo-500' },
              { val: '#1', lab: 'Priority', sub: 'Economic Driver', color: 'text-slate-900' },
            ].map((stat, i) => (
              <Card key={i} className="p-6 bg-white border-none shadow-xl text-center rounded-3xl hover:-translate-y-2 transition-transform">
                <div className={`text-3xl font-black ${stat.color} mb-1 tracking-tight`}>{stat.val}</div>
                <p className="text-[10px] font-black text-slate-900 uppercase tracking-widest">{stat.lab}</p>
                <p className="text-[9px] font-bold text-slate-400 mt-1">{stat.sub}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter">Strategic <span className="text-[#0072C6]">Pillars</span></h2>
            <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">
              Six integrated operational frameworks driving the agricultural revolution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Seeds & Inputs System */}
            <Link href="/inputs" className="group block">
              <Card className="p-0 border-none bg-white rounded-[3rem] shadow-xl hover:shadow-2xl transition-all overflow-hidden h-full flex flex-col">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10"></div>
                  <img src="/feed-seeds.jpg" alt="Seeds" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <Badge className="absolute top-6 left-6 z-20 bg-[#1EB53A] text-white border-none font-black px-4 py-1.5 rounded-full text-[9px] uppercase tracking-widest">
                    Pillar 01
                  </Badge>
                </div>
                <div className="p-8 space-y-4 flex-1">
                  <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Inputs Management</h3>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">
                    Certified seed distribution mapping and agro-dealer networking to ensure baseline productivity.
                  </p>
                  <div className="flex items-center text-[#0072C6] text-[10px] font-black uppercase tracking-widest pt-4 border-t border-slate-50">
                    Enterprise Portal <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Card>
            </Link>

            {/* Aggregation & Processing */}
            <Link href="/processing" className="group block">
              <Card className="p-0 border-none bg-white rounded-[3rem] shadow-xl hover:shadow-2xl transition-all overflow-hidden h-full flex flex-col">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10"></div>
                  <img src="/feed-processing.jpg" alt="Processing" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <Badge className="absolute top-6 left-6 z-20 bg-[#0072C6] text-white border-none font-black px-4 py-1.5 rounded-full text-[9px] uppercase tracking-widest">
                    Pillar 02
                  </Badge>
                </div>
                <div className="p-8 space-y-4 flex-1">
                  <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Post-Harvest Ops</h3>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">
                    Regional aggregation hubs and industrial processing assets for national value addition.
                  </p>
                  <div className="flex items-center text-[#0072C6] text-[10px] font-black uppercase tracking-widest pt-4 border-t border-slate-50">
                    Industrial Registry <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Card>
            </Link>

            {/* Export Readiness */}
            <Link href="/feed-salone/export-readiness" className="group block">
              <Card className="p-0 border-none bg-white rounded-[3rem] shadow-xl hover:shadow-2xl transition-all overflow-hidden h-full flex flex-col">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10"></div>
                  <img src="/feed-export.jpg" alt="Export" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <Badge className="absolute top-6 left-6 z-20 bg-amber-500 text-white border-none font-black px-4 py-1.5 rounded-full text-[9px] uppercase tracking-widest">
                    Pillar 03
                  </Badge>
                </div>
                <div className="p-8 space-y-4 flex-1">
                  <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Global Integration</h3>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">
                    Quality standards certification and direct linkage to international cocoa and coffee markets.
                  </p>
                  <div className="flex items-center text-[#0072C6] text-[10px] font-black uppercase tracking-widest pt-4 border-t border-slate-50">
                    Export Console <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-center md:text-left">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter">Impact <span className="text-[#1EB53A]">Audits</span></h2>
              <p className="text-lg text-slate-500 font-medium">Real results from the frontlines of production.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Mariama Kamara', role: 'Rice Farmer, Bombali', quote: 'Access to certified seeds through Feed Salone increased my rice yield by 60%.', icon: Sprout, color: 'text-[#1EB53A]' },
              { name: 'Mohamed Sesay', role: 'Cassava Processor, Kenema', quote: 'The aggregation center connected me with 50+ farmers. My facility now runs at full capacity.', icon: Factory, color: 'text-[#0072C6]' },
              { name: 'Fatmata Koroma', role: 'Cocoa Exporter, Bo', quote: 'Export readiness training helped me meet international standards. Tripled my income in one year.', icon: Globe, color: 'text-amber-500' },
            ].map((story, i) => (
              <Card key={i} className="p-10 border-none bg-slate-50 rounded-[3rem] relative shadow-sm hover:shadow-lg transition-all group">
                <story.icon className={`w-12 h-12 ${story.color} mb-6 transition-transform group-hover:scale-110`} />
                <p className="text-xl font-bold text-slate-800 leading-relaxed italic mb-8">"{story.quote}"</p>
                <div className="pt-6 border-t border-slate-200">
                  <p className="font-black text-slate-900 uppercase tracking-tight">{story.name}</p>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">{story.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Elite Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <Card className="p-16 bg-[#0072C6] text-white rounded-[4rem] shadow-2xl relative overflow-hidden text-center group">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 blur-[120px] rounded-full translate-x-1/2"></div>
            <div className="relative z-10 space-y-10">
              <div className="w-24 h-24 rounded-3xl bg-white text-[#0072C6] flex items-center justify-center mx-auto shadow-2xl rotate-3 group-hover:rotate-6 transition-transform">
                <ShieldCheck className="w-12 h-12" />
              </div>
              <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none">Formalize Your <br /> Agricultural Asset</h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto font-medium">
                Be part of the national registry. Secure your subsidies, processing slots, and export licenses today.
              </p>
              <div className="flex flex-wrap gap-6 justify-center">
                <Button size="lg" className="h-16 px-12 bg-white text-[#0072C6] hover:bg-[#1EB53A] hover:text-white rounded-2xl font-black uppercase tracking-widest text-[11px] shadow-2xl transition-all">
                  Register as Farmer
                </Button>
                <Button size="lg" variant="outline" className="h-16 px-12 border-white/20 text-white hover:bg-white/10 rounded-2xl font-black uppercase tracking-widest text-[11px]">
                  Institutional Partnership
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}

