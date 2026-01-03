"use client"

import { Navigation } from '@/components/navigation'
import { Card } from '@/components/ui/card'
import { TrendingUp, TrendingDown, MapPin, Calendar, Search, ShieldCheck, Globe, DollarSign } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

export default function MarketAnalysisPage() {
    const [searchQuery, setSearchQuery] = useState('')

    // Sierra Leone market data
    const marketPrices = [
        {
            commodity: 'Rice (Local)',
            currentPrice: 4500,
            previousPrice: 4200,
            unit: 'Le/kg',
            trend: 'up',
            change: 7.1,
            market: 'Freetown Central',
            lastUpdated: '2 hours ago',
            status: 'Volatile'
        },
        {
            commodity: 'Rice (Imported)',
            currentPrice: 5200,
            previousPrice: 5300,
            unit: 'Le/kg',
            trend: 'down',
            change: 1.9,
            market: 'Freetown Central',
            lastUpdated: '2 hours ago',
            status: 'Stable'
        },
        {
            commodity: 'Cassava',
            currentPrice: 2800,
            previousPrice: 2600,
            unit: 'Le/kg',
            trend: 'up',
            change: 7.7,
            market: 'Bo Market',
            lastUpdated: '5 hours ago',
            status: 'Increasing'
        },
        {
            commodity: 'Sweet Potato',
            currentPrice: 3200,
            previousPrice: 3100,
            unit: 'Le/kg',
            trend: 'up',
            change: 3.2,
            market: 'Kenema Market',
            lastUpdated: '3 hours ago',
            status: 'Steady'
        },
        {
            commodity: 'Groundnut',
            currentPrice: 8500,
            previousPrice: 8800,
            unit: 'Le/kg',
            trend: 'down',
            change: 3.4,
            market: 'Makeni Market',
            lastUpdated: '4 hours ago',
            status: 'Deficit'
        },
        {
            commodity: 'Palm Oil',
            currentPrice: 12000,
            previousPrice: 11500,
            unit: 'Le/liter',
            trend: 'up',
            change: 4.3,
            market: 'Freetown Central',
            lastUpdated: '1 hour ago',
            status: 'High Demand'
        },
        {
            commodity: 'Cocoa Beans',
            currentPrice: 15000,
            previousPrice: 14800,
            unit: 'Le/kg',
            trend: 'up',
            change: 1.4,
            market: 'Kenema Market',
            lastUpdated: '6 hours ago',
            status: 'Export Grade'
        }
    ]

    const formatPrice = (price: number) => {
        return price.toLocaleString('en-SL')
    }

    const filteredPrices = marketPrices.filter(p =>
        p.commodity.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.market.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
        <div className="min-h-screen bg-slate-50/50">
            <Navigation />

            {/* Premium Header Container */}
            <div className="bg-[#0072C6] pt-32 pb-24 relative overflow-hidden border-b-4 border-[#1EB53A]">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 blur-[120px] rounded-full translate-x-1/2"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-md px-6 py-1.5 mb-6 font-black uppercase tracking-widest text-[10px]">
                        National Commodity Exchange
                    </Badge>
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter shadow-sm">
                        Market <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 underline decoration-[#1EB53A] underline-offset-8">Analysis</span>
                    </h1>
                    <p className="text-xl text-blue-100 max-w-3xl font-medium leading-relaxed">
                        Daily real-time auditing of agricultural prices across <span className="text-[#1EB53A] font-bold">Sierra Leone's</span> major trade centers.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16 -mt-12 relative z-20">
                <div className="max-w-7xl mx-auto space-y-8">

                    {/* Command Console */}
                    <Card className="p-8 border-none bg-white rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                        <div className="flex flex-col lg:flex-row gap-6 items-center">
                            <div className="flex-1 relative w-full group">
                                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5 group-focus-within:text-[#0072C6] transition-colors" />
                                <Input
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Query market registry for specific commodities..."
                                    className="h-16 pl-16 pr-6 rounded-2xl border-slate-100 bg-slate-50 focus:bg-white focus:border-[#0072C6] focus:ring-4 focus:ring-[#0072C6]/10 transition-all font-bold text-slate-900"
                                />
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full lg:w-auto">
                                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">MARKETS</p>
                                    <p className="text-xl font-black text-slate-900">12+</p>
                                </div>
                                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">ACCURACY</p>
                                    <p className="text-xl font-black text-[#1EB53A]">99%</p>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Elastic Market Grid */}
                    <div className="grid gap-6">
                        {filteredPrices.map((item, index) => (
                            <Card key={index} className="p-8 border-none bg-white rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all group overflow-hidden relative">
                                <div className={`absolute top-0 left-0 w-2 h-full ${item.trend === 'up' ? 'bg-[#1EB53A]' : 'bg-rose-500'}`}></div>

                                <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
                                    <div className="flex items-center gap-6 w-full lg:w-auto">
                                        <div className={`p-5 rounded-2xl ${item.trend === 'up' ? 'bg-[#1EB53A]/10 text-[#1EB53A]' : 'bg-rose-500/10 text-rose-500'} transition-transform group-hover:scale-110`}>
                                            {item.trend === 'up' ? <TrendingUp className="w-8 h-8" /> : <TrendingDown className="w-8 h-8" />}
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">{item.commodity}</h3>
                                            <div className="flex items-center gap-2 mt-1">
                                                <MapPin className="w-3 h-3 text-slate-400" />
                                                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{item.market}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 w-full lg:w-auto">
                                        <div className="space-y-1">
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">LIVE PRICE</p>
                                            <p className="text-2xl font-black text-[#0072C6] tracking-tight">{formatPrice(item.currentPrice)} <span className="text-xs text-slate-400">{item.unit}</span></p>
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">VARIANCE</p>
                                            <div className={`flex items-center gap-1 font-black ${item.trend === 'up' ? 'text-[#1EB53A]' : 'text-rose-500'}`}>
                                                {item.trend === 'up' ? '+' : '-'}{item.change}%
                                            </div>
                                        </div>
                                        <div className="hidden sm:block space-y-1">
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">STATUS</p>
                                            <Badge variant="outline" className="border-slate-100 text-slate-600 font-bold px-3 py-1 bg-slate-50 rounded-lg uppercase text-[9px] tracking-widest">
                                                {item.status}
                                            </Badge>
                                        </div>
                                    </div>

                                    <div className="w-full lg:w-auto pt-6 lg:pt-0 border-t lg:border-t-0 border-slate-50">
                                        <div className="flex items-center gap-3 text-slate-400 px-4 py-2 bg-slate-50 rounded-2xl">
                                            <Calendar className="w-4 h-4" />
                                            <span className="text-[10px] font-black uppercase tracking-widest">Update: {item.lastUpdated}</span>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>

                    {/* Strategy Hub */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="p-10 bg-[#0072C6] text-white rounded-[3rem] shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[100px] rounded-full translate-x-1/2"></div>
                            <div className="relative z-10 space-y-6">
                                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20">
                                    <TrendingUp className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-3xl font-black uppercase tracking-tighter">Export Dynamics</h3>
                                <p className="text-blue-100 font-medium leading-relaxed">
                                    Strategic tracking of global cash crop indices for <span className="text-[#1EB53A] font-bold">Cocoa & Coffee</span>. Optimize your harvest timeline based on international demand.
                                </p>
                                <Badge className="bg-[#1EB53A] text-white font-black px-6 py-2 rounded-xl text-[10px] uppercase tracking-widest">
                                    Strategic Analysis Ready
                                </Badge>
                            </div>
                        </Card>

                        <Card className="p-10 bg-white border-4 border-[#1EB53A] rounded-[3rem] shadow-xl relative overflow-hidden">
                            <div className="space-y-6">
                                <div className="w-16 h-16 rounded-2xl bg-[#1EB53A]/10 flex items-center justify-center">
                                    <ShieldCheck className="w-8 h-8 text-[#1EB53A]" />
                                </div>
                                <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">Market Protection</h3>
                                <p className="text-slate-500 font-medium leading-relaxed">
                                    Connecting smallholders to mandated minimum price points to ensure <span className="text-[#0072C6] font-bold">Zero-Exploitation</span> across the value chain.
                                </p>
                                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                                    <Globe className="w-4 h-4 text-slate-400" />
                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest underline underline-offset-4 decoration-[#0072C6]">Verified Official Market Data</span>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

