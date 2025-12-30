'use client'

import { useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogDescription } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { CreditCard, Landmark, ShieldCheck, BarChart3, Bell, Wallet, ArrowRight, Globe, TrendingUp, Zap, Banknote, ShieldAlert } from 'lucide-react'

export default function FinancialServicesPage() {
    const [isMobileMoneyOpen, setIsMobileMoneyOpen] = useState(false)
    const [isPriceAlertOpen, setIsPriceAlertOpen] = useState(false)

    const handleLinkMobileMoney = (e: React.FormEvent) => {
        e.preventDefault()
        setIsMobileMoneyOpen(false)
        alert('✅ Financial terminal linked successfully!')
    }

    const handleSetPriceAlert = (e: React.FormEvent) => {
        e.preventDefault()
        setIsPriceAlertOpen(false)
        alert('✅ Market surveillance active. You will receive SMS alerts.')
    }

    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Premium National Gradient Header */}
            <div className="bg-gradient-to-r from-[#1EB53A] to-[#0072C6] pt-32 pb-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-white/10 blur-[100px] rounded-full translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-white/5 blur-[80px] rounded-full -translate-x-1/4"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center md:text-left">
                        <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-md px-4 py-1.5 mb-6 flex items-center gap-2 w-fit mx-auto md:mx-0 font-black uppercase tracking-widest text-[10px]">
                            <Banknote className="w-3 h-3" />
                            NATIONAL FINANCIAL ARCHITECTURE
                        </Badge>
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tighter">
                            Financial <br />
                            <span className="text-white underline decoration-4 underline-offset-8 decoration-white/30">Services</span>
                        </h1>
                        <p className="text-xl text-white/80 max-w-2xl font-medium leading-relaxed">
                            Securing the prosperity of Sierra Leonean agriculture through <span className="text-white font-bold italic underline decoration-white/20">Institutional Capital</span>, <span className="text-white font-bold">Risk Management</span>, and <span className="text-white font-bold">Digital Liquidity</span>.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-20 -mt-12 relative z-20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* Mobile Money Integration */}
                        <Card className="p-8 border-none bg-white rounded-[2.5rem] shadow-2xl hover:shadow-3xl transition-all group border border-slate-50 hover:border-[#1EB53A]/20">
                            <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                <Wallet className="w-8 h-8 text-amber-500" />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-2 uppercase tracking-tight">National Mobile Wallet</h3>
                            <p className="text-slate-500 font-medium mb-8 leading-relaxed">Securely integrate Orange Money or Africell Money for instant commodity transactions.</p>

                            <Dialog open={isMobileMoneyOpen} onOpenChange={setIsMobileMoneyOpen}>
                                <DialogTrigger asChild>
                                    <Button className="w-full h-14 bg-[#0072C6] text-white hover:bg-slate-800 rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl group-hover:scale-105 transition-all">
                                        Link Secure Terminal
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="rounded-[3rem] border-none shadow-2xl p-10 bg-white">
                                    <DialogHeader className="mb-8">
                                        <div className="w-16 h-16 rounded-[1.5rem] bg-amber-50 flex items-center justify-center mb-6">
                                            <Wallet className="w-8 h-8 text-amber-600" />
                                        </div>
                                        <DialogTitle className="text-3xl font-black text-slate-900 uppercase tracking-tighter">Link Mobile Asset</DialogTitle>
                                        <DialogDescription className="text-slate-500 font-medium text-lg leading-relaxed">Secure your financial node via national telecommunications providers.</DialogDescription>
                                    </DialogHeader>
                                    <form onSubmit={handleLinkMobileMoney} className="space-y-6">
                                        <div className="space-y-2">
                                            <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Authorized Provider</Label>
                                            <Select required>
                                                <SelectTrigger className="h-14 rounded-2xl border-slate-100 bg-slate-50 font-bold px-6">
                                                    <SelectValue placeholder="Select Network" />
                                                </SelectTrigger>
                                                <SelectContent className="rounded-2xl border-none shadow-xl">
                                                    <SelectItem value="orange">Orange Money (SL)</SelectItem>
                                                    <SelectItem value="africell">Africell Money (SL)</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Terminal Identifier (Phone)</Label>
                                            <Input type="tel" placeholder="076/077/078 XXX XXXX" required className="h-14 rounded-2xl border-slate-100 bg-slate-50 font-bold px-6" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Secure PIN Code</Label>
                                            <Input type="password" maxLength={4} required className="h-14 rounded-2xl border-slate-100 bg-slate-50 font-bold px-6" />
                                        </div>
                                        <Button type="submit" className="w-full h-16 bg-[#1EB53A] text-white hover:bg-[#1base-3A]/90 rounded-2xl font-black uppercase tracking-widest text-xs shadow-2xl active:scale-95 transition-all">
                                            Finalize Integration
                                        </Button>
                                    </form>
                                </DialogContent>
                            </Dialog>
                        </Card>

                        {/* Agricultural Loans */}
                        <Card className="p-8 border-none bg-white rounded-[2.5rem] shadow-2xl hover:shadow-3xl transition-all group border border-slate-50 hover:border-[#1EB53A]/20">
                            <div className="w-16 h-16 bg-[#1EB53A]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                <Landmark className="w-8 h-8 text-[#1EB53A]" />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-2 uppercase tracking-tight">Institutional Credit</h3>
                            <p className="text-slate-500 font-medium mb-8 leading-relaxed">Access loans up to <span className="text-slate-900 font-bold">Le 50,000,000</span> with subsidized interest frameworks.</p>
                            <Button className="w-full h-14 bg-[#1EB53A] text-white hover:bg-[#1base-3A]/90 rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl group-hover:scale-105 transition-all">
                                Request Credit Line
                            </Button>
                        </Card>

                        {/* Crop Insurance */}
                        <Card className="p-8 border-none bg-white rounded-[2.5rem] shadow-2xl hover:shadow-3xl transition-all group border border-slate-50 hover:border-[#0072C6]/20">
                            <div className="w-16 h-16 bg-[#0072C6]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                <ShieldCheck className="w-8 h-8 text-[#0072C6]" />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-2 uppercase tracking-tight">Yield Insurance</h3>
                            <p className="text-slate-500 font-medium mb-8 leading-relaxed">Bespoke protection against climate disruptions, pest outbreaks, and drought risks.</p>
                            <Button className="w-full h-14 bg-[#0072C6] text-white hover:bg-[#007276]/90 rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl group-hover:scale-105 transition-all">
                                Secure Yield Assets
                            </Button>
                        </Card>

                        {/* Financial Dashboard */}
                        <Card className="p-8 border-none bg-[#0072C6] text-white rounded-[2.5rem] shadow-2xl hover:shadow-3xl transition-all group overflow-hidden relative">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#1EB53A]/10 blur-[60px] rounded-full"></div>
                            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 relative z-10">
                                <BarChart3 className="w-8 h-8 text-[#1EB53A]" />
                            </div>
                            <h3 className="text-2xl font-black mb-2 uppercase tracking-tight relative z-10">Revenue Intelligence</h3>
                            <p className="text-white/60 font-medium mb-8 leading-relaxed relative z-10">Proprietary analytics for tracking farm profitability and market trends.</p>
                            <Button className="w-full h-14 bg-white text-slate-900 hover:bg-white/90 rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl group-hover:scale-105 transition-all relative z-10">
                                Launch Performance Hub
                            </Button>
                        </Card>

                        {/* Price Alerts */}
                        <Card className="p-8 border-none bg-white rounded-[2.5rem] shadow-2xl hover:shadow-3xl transition-all group border border-slate-50 hover:border-amber-500/20">
                            <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                <Bell className="w-8 h-8 text-amber-500" />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-2 uppercase tracking-tight">Market Surveillance</h3>
                            <p className="text-slate-500 font-medium mb-8 leading-relaxed">Real-time alerts for local and international commodity price fluctuations.</p>

                            <Dialog open={isPriceAlertOpen} onOpenChange={setIsPriceAlertOpen}>
                                <DialogTrigger asChild>
                                    <Button className="w-full h-14 bg-amber-500 text-white hover:bg-amber-600 rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl group-hover:scale-105 transition-all">
                                        Configure Alerts
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="rounded-[3rem] border-none shadow-2xl p-10 bg-white">
                                    <DialogHeader className="mb-8">
                                        <div className="w-16 h-16 rounded-[1.5rem] bg-amber-50 flex items-center justify-center mb-6">
                                            <TrendingUp className="w-8 h-8 text-amber-600" />
                                        </div>
                                        <DialogTitle className="text-3xl font-black text-slate-900 uppercase tracking-tighter">Market Monitoring</DialogTitle>
                                        <DialogDescription className="text-slate-500 font-medium text-lg leading-relaxed">Establish surveillance threshold for specific commodities.</DialogDescription>
                                    </DialogHeader>
                                    <form onSubmit={handleSetPriceAlert} className="space-y-6">
                                        <div className="space-y-2">
                                            <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Target Commodity</Label>
                                            <Select required>
                                                <SelectTrigger className="h-14 rounded-2xl border-slate-100 bg-slate-50 font-bold px-6">
                                                    <SelectValue placeholder="Select Crop" />
                                                </SelectTrigger>
                                                <SelectContent className="rounded-2xl border-none shadow-xl">
                                                    <SelectItem value="rice">Domestic Rice</SelectItem>
                                                    <SelectItem value="cassava">Cassava Root</SelectItem>
                                                    <SelectItem value="cocoa">Export Cocoa</SelectItem>
                                                    <SelectItem value="palm_oil">Refined Palm Oil</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Alert Trigger Price (Le/kg)</Label>
                                            <Input type="number" placeholder="e.g., 15000" required className="h-14 rounded-2xl border-slate-100 bg-slate-50 font-bold px-6" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Surveillance Condition</Label>
                                            <Select required>
                                                <SelectTrigger className="h-14 rounded-2xl border-slate-100 bg-slate-50 font-bold px-6">
                                                    <SelectValue placeholder="Select Trigger" />
                                                </SelectTrigger>
                                                <SelectContent className="rounded-2xl border-none shadow-xl">
                                                    <SelectItem value="above">Value exceeds target</SelectItem>
                                                    <SelectItem value="below">Value drops below target</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <Button type="submit" className="w-full h-16 bg-[#0072C6] text-white hover:bg-slate-800 rounded-2xl font-black uppercase tracking-widest text-xs shadow-2xl active:scale-95 transition-all">
                                            Activate Surveillance
                                        </Button>
                                    </form>
                                </DialogContent>
                            </Dialog>
                        </Card>

                        {/* Global Investment Opportunities */}
                        <Card className="p-8 border-none bg-white rounded-[2.5rem] shadow-2xl hover:shadow-3xl transition-all group border border-slate-50 hover:border-[#1EB53A]/20">
                            <div className="w-16 h-16 bg-[#1EB53A]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                <Globe className="w-8 h-8 text-[#1EB53A]" />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-2 uppercase tracking-tight">Global Investment</h3>
                            <p className="text-slate-500 font-medium mb-8 leading-relaxed">Connect with international venture capital specializing in West African agriculture.</p>
                            <Button className="w-full h-14 bg-[#0072C6] text-white hover:bg-slate-800 rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl group-hover:scale-105 transition-all">
                                Explore Capital Markets
                            </Button>
                        </Card>

                    </div>
                </div>
            </div>

            {/* National Trust Indicator */}
            <div className="container mx-auto px-4 pb-24">
                <Card className="max-w-7xl mx-auto p-12 bg-slate-50 border-none rounded-[3rem] text-center">
                    <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.4em] mb-6">Secured by National Financial Protocols</h4>
                    <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
                        <img src="/coat-of-arms.png" alt="Institutional Seal" className="h-16 w-auto object-contain" />
                        <div className="flex items-center gap-3">
                            <ShieldAlert className="w-8 h-8 text-slate-900" />
                            <span className="font-black text-xl text-slate-900 tracking-tighter">BANK OF SIERRA LEONE</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Globe className="w-8 h-8 text-slate-900" />
                            <span className="font-black text-xl text-slate-900 tracking-tighter">WORLD BANK GROUP</span>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}
