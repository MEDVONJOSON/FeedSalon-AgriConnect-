"use client"

import { Navigation } from '@/components/navigation'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { QrCode, Package, Users, Eye, Shield, Scan, TrendingUp, Globe, ShieldCheck, Zap, ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function TraceabilityPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Premium National Gradient Header */}
      <div className="bg-gradient-to-r from-[#1EB53A] to-[#0072C6] pt-32 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/10 blur-[100px] rounded-full translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-white/5 blur-[80px] rounded-full -translate-x-1/4"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-md px-4 py-1.5 mb-6 flex items-center gap-2 w-fit font-black uppercase tracking-widest text-[10px]">
              <ShieldCheck className="w-3 h-3" />
              NATIONAL AUTHENTICATION FRAMEWORK
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tighter">
              Supply Chain <br />
              <span className="text-white underline decoration-4 underline-offset-8 decoration-white/30">Traceability</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl font-medium leading-relaxed">
              Establishing <span className="text-white font-bold italic underline decoration-white/20">Institutional Trust</span> through immutable blockchain verification for ogni commodity across the Sierra Leonean ecosystem.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 -mt-12 relative z-20">
        <div className="max-w-7xl mx-auto space-y-24">

          {/* Elite Step Architecture */}
          <section>
            <div className="text-center mb-16">
              <h2 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.4em] mb-4">Protocol Architecture</h2>
              <div className="text-4xl font-black text-slate-900 uppercase tracking-tighter">Integrated Lifecycle tracking</div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Package,
                  step: "01",
                  title: "Registry",
                  desc: "Strategic recording of harvest data, metadata, and origin coordinates.",
                  color: "bg-[#1EB53A]"
                },
                {
                  icon: QrCode,
                  step: "02",
                  title: "Synthesis",
                  desc: "Generation of unique cryptographic QR signatures for batch identification.",
                  color: "bg-[#0072C6]"
                },
                {
                  icon: Users,
                  step: "03",
                  title: "Validation",
                  desc: "Immutable scan points across every node of the logistical journey.",
                  color: "bg-amber-500"
                },
                {
                  icon: Eye,
                  step: "04",
                  title: "Visibility",
                  desc: "Public-facing verification terminal for global market assurance.",
                  color: "bg-indigo-600"
                }
              ].map((item, idx) => (
                <Card key={idx} className="p-8 border-none bg-white rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all group border border-slate-50 hover:border-[#1base-3A]/20">
                  <div className="flex justify-between items-start mb-8">
                    <div className={`w-14 h-14 ${item.color}/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <item.icon className={`w-7 h-7 ${item.color.replace('bg-', 'text-')}`} />
                    </div>
                    <span className="text-4xl font-black text-slate-100 group-hover:text-slate-200 transition-colors uppercase italic">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-2 uppercase tracking-tight">{item.title}</h3>
                  <p className="text-slate-500 font-medium text-sm leading-relaxed">{item.desc}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* Action Terminals */}
          <section className="grid md:grid-cols-3 gap-8">
            <Link href="/traceability/register" className="group">
              <Card className="p-10 border-none bg-[#0072C6] text-white rounded-[3rem] shadow-2xl h-full relative overflow-hidden transition-transform hover:scale-[1.02]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#1EB53A]/10 blur-[60px] rounded-full"></div>
                <div className="bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-10 border border-white/10 group-hover:bg-[#1EB53A] transition-all">
                  <Package className="w-8 h-8 text-[#1EB53A] group-hover:text-white" />
                </div>
                <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter">Register <br />Produce</h3>
                <p className="text-white/50 font-medium mb-10 leading-relaxed">Initiate the blockchain legacy for your harvest assets.</p>
                <Button className="w-full h-14 bg-white text-slate-900 hover:bg-[#1base-3A] hover:text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl">
                  Launch Registry Terminal
                </Button>
              </Card>
            </Link>

            <Link href="/traceability/scan" className="group">
              <Card className="p-10 border-none bg-white rounded-[3rem] shadow-2xl h-full relative overflow-hidden transition-transform hover:scale-[1.02] border border-slate-50 hover:border-[#0072C6]/20">
                <div className="bg-[#0072C6]/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-10 border border-[#0072C6]/10 group-hover:bg-[#0072C6] transition-all">
                  <Scan className="w-8 h-8 text-[#0072C6] group-hover:text-white" />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tighter">Scan & <br />Update</h3>
                <p className="text-slate-500 font-medium mb-10 leading-relaxed">Validate logistical handovers across the national network.</p>
                <Button className="w-full h-14 bg-slate-100 text-slate-400 group-hover:bg-[#0072C6] group-hover:text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-sm group-hover:shadow-xl transition-all">
                  Activate Optical Scanner
                </Button>
              </Card>
            </Link>

            <Link href="/traceability/verify" className="group">
              <Card className="p-10 border-none bg-white rounded-[3rem] shadow-2xl h-full relative overflow-hidden transition-transform hover:scale-[1.02] border border-slate-50 hover:border-indigo-500/20">
                <div className="bg-indigo-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-10 border border-indigo-100 group-hover:bg-indigo-600 transition-all">
                  <Eye className="w-8 h-8 text-indigo-600 group-hover:text-white" />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tighter">Verify <br />Product</h3>
                <p className="text-slate-500 font-medium mb-10 leading-relaxed">Examine the full verified history of any market commodity.</p>
                <Button variant="outline" className="w-full h-14 border-2 border-slate-100 hover:bg-[#0072C6] hover:text-white rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all">
                  Auth Terminal
                </Button>
              </Card>
            </Link>
          </section>

          {/* Elite Benefits Grid */}
          <section className="bg-slate-50 rounded-[4rem] p-16">
            <div className="text-center mb-20">
              <h2 className="text-[11px] font-black text-slate-300 uppercase tracking-[0.4em] mb-4">Strategic Advantages</h2>
              <div className="text-4xl font-black text-slate-900 uppercase tracking-tighter">Ecosystem optimization</div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {[
                { title: "Institutional Trust", icon: Shield, desc: "Building nationwide confidence through cryptographic transparency." },
                { title: "Premium Valuation", icon: TrendingUp, desc: "Traceable assets command higher rates in international capital markets." },
                { title: "Protocol Simplicity", icon: QrCode, desc: "Intuitive interaction via standard mobile optical sensors." },
                { title: "Immutable Integrity", icon: ShieldCheck, desc: "Blockchain protocols ensure records are tamper-proof and authentic." },
                { title: "Quality Surveillance", icon: Package, desc: "Rigorous monitoring of handling conditions across all nodes." },
                { title: "Global Access", icon: Globe, desc: "Meeting stringent export and premium market compliance mandates." }
              ].map((benefit, i) => (
                <div key={i} className="space-y-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-6 h-6 text-[#1EB53A]" />
                  </div>
                  <h4 className="text-lg font-black text-slate-900 uppercase tracking-tight">{benefit.title}</h4>
                  <p className="text-slate-500 font-medium text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* National Mandate CTA */}
          <Card className="p-16 bg-gradient-to-br from-[#1EB53A] to-[#0072C6] text-white rounded-[4rem] shadow-3xl text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-10"></div>
            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic">Ready to Integrate?</h2>
              <p className="text-white/80 font-medium text-lg leading-relaxed">
                Join the <span className="text-white font-bold underline decoration-white/30">Transparency Revolution</span>. Secure your harvest assets within the national supply chain grid today.
              </p>
              <Button asChild className="h-20 px-12 bg-white text-slate-900 hover:bg-[#0072C6] hover:text-white rounded-[1.5rem] font-black uppercase tracking-[0.2em] text-xs shadow-2xl transition-all active:scale-95">
                <Link href="/traceability/register" className="flex items-center gap-4">
                  Initialize First Batch <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
