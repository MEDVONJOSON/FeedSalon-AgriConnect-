'use client'

import { Navigation } from '@/components/navigation'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ShieldCheck, Umbrella, CloudRain, Sun, AlertTriangle, CheckCircle, ArrowRight, Zap } from 'lucide-react'

export default function CropInsurancePage() {
    const plans = [
        {
            name: 'Drought Shield',
            icon: Sun,
            coverage: '80% of Yield Value',
            premium: 'Le 250,000 / ha',
            features: ['Rainfall Index triggers', 'Automatic payout', 'No field inspection'],
            color: '#F59E0B',
            bg: 'bg-amber-50'
        },
        {
            name: 'Flood Guard',
            icon: CloudRain,
            coverage: '100% of Input Costs',
            premium: 'Le 300,000 / ha',
            features: ['Satellite verification', 'Covers seed & fertilizer', 'Fast claim processing'],
            color: '#0072C6',
            bg: 'bg-blue-50'
        },
        {
            name: 'Multi-Peril Protection',
            icon: ShieldCheck,
            coverage: '90% of Total Value',
            premium: 'Le 550,000 / ha',
            features: ['Drought, Flood, Pest & Disease', 'Full season coverage', 'Price protection'],
            color: '#1EB53A',
            bg: 'bg-green-50'
        }
    ]

    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Premium Gradient Header */}
            <div className="bg-gradient-to-r from-[#1EB53A] to-[#0072C6] pt-32 pb-24 relative overflow-hidden">
                {/* Dynamic Accents */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-white/10 blur-[100px] rounded-full translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-white/5 blur-[80px] rounded-full -translate-x-1/4"></div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-md px-4 py-1 flex items-center gap-2">
                                <ShieldCheck className="w-3 h-3" />
                                NATIONAL SECURITY FUND
                            </Badge>
                        </div>
                        <h1 className="text-6xl md:text-7xl font-black text-white mb-8 leading-tight">National Crop Insurance</h1>
                        <p className="text-xl text-white/80 font-medium max-w-2xl mx-auto mb-12">
                            Secure your livelihood against <span className="text-white font-black underline decoration-2 underline-offset-4">climate risks</span> with affordable, government-backed institutional coverage.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <Button className="h-16 px-12 bg-white text-[#0072C6] hover:bg-white/90 rounded-[2rem] font-black uppercase tracking-widest text-sm shadow-2xl active:scale-95 transition-all">
                                Get Personal Quote
                            </Button>
                            <Button className="h-16 px-12 bg-[#0072C6] border border-white/10 text-white hover:bg-slate-800 rounded-[2rem] font-black uppercase tracking-widest text-sm shadow-2xl active:scale-95 transition-all">
                                File New Claim
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <main className="container mx-auto px-4 py-20 -mt-12 relative z-20">
                <div className="max-w-6xl mx-auto">
                    {/* Featured Action Cards */}
                    <div className="grid md:grid-cols-3 gap-12 mb-20">
                        <Card className="p-12 border-none shadow-2xl rounded-[3rem] bg-[#0072C6] text-white md:col-span-2 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#1EB53A]/20 to-transparent opacity-50"></div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-8">
                                    <Badge className="bg-[#1EB53A] text-white border-none font-black px-4 py-1.5 rounded-full text-[10px] uppercase tracking-widest">Active Season 2025</Badge>
                                    <div className="flex items-center gap-2 text-[#1EB53A] font-black text-xs uppercase tracking-widest">
                                        <Zap className="w-4 h-4 fill-current" /> Instant Verification
                                    </div>
                                </div>
                                <h2 className="text-4xl font-black mb-6 leading-tight">Protect Your Harvest. <br />Protect the Nation.</h2>
                                <p className="text-white/50 text-xl font-medium mb-10 max-w-lg leading-relaxed">
                                    Don't let unpredictable weather destroy your hard work. Get institutional coverage starting from <span className="text-white font-black underline decoration-[#1base-3A]">Le 25,000</span> per month.
                                </p>
                                <div className="flex gap-4">
                                    <Button className="h-14 px-10 bg-[#1EB53A] hover:bg-[#1EB53A]/90 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl transition-all">
                                        Activate Protection
                                    </Button>
                                    <Button variant="outline" className="h-14 px-10 border-white/10 text-white hover:bg-white/10 rounded-2xl font-black uppercase tracking-widest text-xs transition-all">
                                        Policy Details
                                    </Button>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-10 border-none shadow-2xl rounded-[2.5rem] bg-white border-t-8 border-amber-500">
                            <div className="flex items-center gap-3 mb-8">
                                <AlertTriangle className="w-6 h-6 text-amber-500" />
                                <h3 className="text-xl font-black text-slate-900 uppercase tracking-widest text-xs">Live Risk Alert</h3>
                            </div>
                            <div className="space-y-6">
                                <div className="p-6 bg-amber-50 rounded-2xl border border-amber-100">
                                    <p className="text-sm font-black text-amber-900 leading-relaxed">
                                        High probability of dry spell expected in Northern Region (Koinadugu) in late August.
                                    </p>
                                </div>
                                <div className="space-y-4 px-1">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Mandatory Protocols:</p>
                                    <ul className="space-y-3">
                                        {['Activate Drought Shield', 'Ready Irrigation Systems', 'Daily Soil Monitoring'].map((protocol, i) => (
                                            <li key={i} className="flex items-center gap-3 text-xs font-bold text-slate-600">
                                                <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                                                {protocol}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <Button className="w-full h-12 bg-slate-50 text-slate-500 hover:bg-slate-100 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all">
                                    Full Weather Analytics
                                </Button>
                            </div>
                        </Card>
                    </div>

                    {/* Insurance Plans */}
                    <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <p className="text-[10px] font-black text-[#1EB53A] uppercase tracking-[0.3em] mb-3">Institutional Tiers</p>
                            <h2 className="text-4xl font-black text-slate-900">Available Insurance Plans</h2>
                        </div>
                        <Button variant="link" className="text-slate-400 font-black uppercase tracking-widest text-[10px] hover:text-[#0072C6]">Compare All Benefits &rarr;</Button>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {plans.map((plan, i) => {
                            const Icon = plan.icon
                            return (
                                <Card key={i} className="group hover:-translate-y-2 transition-all border-none shadow-xl hover:shadow-2xl rounded-[2.5rem] bg-white overflow-hidden">
                                    <div className={`${plan.bg} p-10 border-b border-slate-50`}>
                                        <div className="w-16 h-16 rounded-[1.5rem] bg-white flex items-center justify-center mb-8 shadow-xl" style={{ color: plan.color }}>
                                            <Icon className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-2xl font-black text-slate-900 mb-2">{plan.name}</h3>
                                        <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                                            Premium: <span className="text-slate-900 font-black">{plan.premium}</span>
                                        </div>
                                    </div>
                                    <div className="p-10">
                                        <div className="mb-10">
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Max Coverage</p>
                                            <p className="text-3xl font-black text-slate-900" style={{ color: plan.color }}>{plan.coverage}</p>
                                        </div>
                                        <ul className="space-y-4 mb-10">
                                            {plan.features.map((feature, j) => (
                                                <li key={j} className="flex items-start gap-3 text-sm font-bold text-slate-500">
                                                    <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: plan.color }} />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                        <Button className="w-full h-14 bg-[#0072C6] hover:bg-slate-800 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-lg group-hover:scale-[1.02] transition-transform">
                                            Secure This Plan
                                        </Button>
                                    </div>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </main>
        </div>
    )
}
