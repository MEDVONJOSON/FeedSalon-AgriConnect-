"use client"

import { useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Building2, Search, DollarSign, GraduationCap, Sprout, ExternalLink, Globe, ShieldCheck, Zap, ArrowRight, MapPin } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function GovernmentSchemesPage() {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('all')

    const schemes = [
        {
            id: 1,
            title: 'Feed Salone Agricultural Loan Scheme',
            category: 'loan',
            description: 'Low-interest loans for smallholder farmers to purchase seeds, fertilizers, and equipment.',
            eligibility: 'Registered farmers with valid ID and land ownership documents',
            amount: 'Le 5,000,000 - Le 50,000,000',
            interest: '5% per annum',
            duration: '12-36 months',
            provider: 'Ministry of Agriculture & Food Security',
            contact: 'loans@agriculture.gov.sl'
        },
        {
            id: 2,
            title: 'Smallholder Commercialization Programme',
            category: 'subsidy',
            description: 'Subsidized inputs including improved seeds, fertilizers, and agricultural tools for small-scale farmers.',
            eligibility: 'Farmers cultivating 1-5 hectares',
            amount: '50% subsidy on inputs',
            interest: 'N/A',
            duration: 'Per season',
            provider: 'Ministry of Agriculture & Food Security',
            contact: 'scp@agriculture.gov.sl'
        },
        {
            id: 3,
            title: 'Youth in Agriculture Training Program',
            category: 'training',
            description: 'Free training and startup support for young farmers (18-35 years) in modern farming techniques.',
            eligibility: 'Sierra Leonean youth aged 18-35 with interest in agriculture',
            amount: 'Free training + Le 2,000,000 startup grant',
            interest: 'N/A',
            duration: '3 months training',
            provider: 'National Youth Commission',
            contact: 'youth@agriculture.gov.sl'
        },
        {
            id: 4,
            title: 'Women Farmers Empowerment Fund',
            category: 'loan',
            description: 'Special financing for women-led agricultural businesses and cooperatives.',
            eligibility: 'Women farmers or women-led cooperatives',
            amount: 'Le 3,000,000 - Le 30,000,000',
            interest: '3% per annum',
            duration: '12-24 months',
            provider: 'Ministry of Gender & Children Affairs',
            contact: 'women@agriculture.gov.sl'
        },
        {
            id: 5,
            title: 'Rice Development Programme',
            category: 'subsidy',
            description: 'Support for rice farmers including subsidized seeds, fertilizers, and mechanization services.',
            eligibility: 'Rice farmers with minimum 2 hectares',
            amount: '60% subsidy on rice inputs',
            interest: 'N/A',
            duration: 'Per season',
            provider: 'Sierra Leone Agricultural Research Institute',
            contact: 'rice@slari.gov.sl'
        },
        {
            id: 6,
            title: 'Cooperative Development Grant',
            category: 'grant',
            description: 'Grants for registered farmer cooperatives to improve infrastructure and processing facilities.',
            eligibility: 'Registered cooperatives with minimum 20 members',
            amount: 'Le 10,000,000 - Le 100,000,000',
            interest: 'N/A',
            duration: 'One-time grant',
            provider: 'Cooperative Development Agency',
            contact: 'grants@cda.gov.sl'
        },
        {
            id: 7,
            title: 'Agricultural Extension Services',
            category: 'training',
            description: 'Free advisory services, training, and technical support from agricultural extension officers.',
            eligibility: 'All farmers',
            amount: 'Free service',
            interest: 'N/A',
            duration: 'Ongoing',
            provider: 'Ministry of Agriculture & Food Security',
            contact: 'extension@agriculture.gov.sl'
        },
        {
            id: 8,
            title: 'Cassava Value Chain Support',
            category: 'subsidy',
            description: 'Support for cassava farmers including improved varieties, processing equipment, and market linkages.',
            eligibility: 'Cassava farmers and processors',
            amount: '40% subsidy on equipment',
            interest: 'N/A',
            duration: 'Per season',
            provider: 'Ministry of Trade & Industry',
            contact: 'cassava@trade.gov.sl'
        },
    ]

    const categories = [
        { value: 'all', label: 'All Schemes', icon: Building2 },
        { value: 'loan', label: 'Loans', icon: DollarSign },
        { value: 'subsidy', label: 'Subsidies', icon: Sprout },
        { value: 'grant', label: 'Grants', icon: DollarSign },
        { value: 'training', label: 'Training', icon: GraduationCap },
    ]

    const filteredSchemes = schemes.filter(scheme => {
        const matchesSearch = scheme.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            scheme.description.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesCategory = selectedCategory === 'all' || scheme.category === selectedCategory
        return matchesSearch && matchesCategory
    })

    const getCategoryColor = (category: string) => {
        switch (category) {
            case 'loan':
                return 'bg-[#0072C6]/10 text-[#0072C6]'
            case 'subsidy':
                return 'bg-[#1EB53A]/10 text-[#1EB53A]'
            case 'grant':
                return 'bg-amber-500/10 text-amber-500'
            case 'training':
                return 'bg-indigo-500/10 text-indigo-500'
            default:
                return 'bg-slate-100 text-slate-500'
        }
    }

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
                            <Building2 className="w-3 h-3" />
                            OFFICIAL STATE DIRECTIVE
                        </Badge>
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tighter">
                            Government <br />
                            <span className="text-white underline decoration-4 underline-offset-8 decoration-white/30">Schemes</span>
                        </h1>
                        <p className="text-xl text-white/80 max-w-2xl font-medium leading-relaxed">
                            Access strategic <span className="text-white font-bold">National Mandates</span> and institutional support frameworks designed to empower the <span className="text-white font-bold italic underline decoration-white/20">Feed Salone</span> initiative.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 -mt-12 relative z-20">
                <div className="max-w-7xl mx-auto space-y-8">

                    {/* Prestigious Command Bar */}
                    <Card className="p-8 border-none bg-white rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                        <div className="flex flex-col lg:flex-row gap-6 items-center">
                            <div className="flex-1 relative w-full group">
                                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5 group-focus-within:text-[#1EB53A] transition-colors" />
                                <Input
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search the national registry for active schemes..."
                                    className="h-16 pl-16 pr-6 rounded-2xl border-slate-100 bg-slate-50 focus:bg-white focus:border-[#1EB53A] focus:ring-4 focus:ring-[#1base-3A]/10 transition-all font-bold text-slate-900"
                                />
                            </div>
                            <div className="flex gap-2 p-1.5 bg-slate-100 rounded-[1.5rem] overflow-x-auto w-full lg:w-auto scrollbar-hide">
                                {categories.map((cat) => {
                                    const Icon = cat.icon
                                    const isActive = selectedCategory === cat.value
                                    return (
                                        <button
                                            key={cat.value}
                                            onClick={() => setSelectedCategory(cat.value)}
                                            className={`flex items-center gap-2 px-6 h-12 rounded-xl transition-all font-black uppercase tracking-widest text-[10px] whitespace-nowrap
                                                ${isActive
                                                    ? 'bg-white text-slate-900 shadow-sm'
                                                    : 'text-slate-500 hover:text-slate-900'}`}
                                        >
                                            <Icon className={`w-4 h-4 ${isActive ? 'text-[#1EB53A]' : ''}`} />
                                            {cat.label}
                                        </button>
                                    )
                                })}
                            </div>
                        </div>
                    </Card>

                    {/* Elite Schemes Terminal */}
                    <div className="grid gap-8">
                        {filteredSchemes.length > 0 ? (
                            filteredSchemes.map((scheme) => (
                                <Card key={scheme.id} className="p-10 border-none bg-white rounded-[3rem] shadow-xl hover:shadow-2xl transition-all group border border-slate-50 hover:border-[#1EB53A]/20">
                                    <div className="flex flex-col xl:flex-row justify-between items-start gap-12">
                                        <div className="flex-1 space-y-6">
                                            <div className="flex flex-wrap items-center gap-4">
                                                <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter group-hover:text-branded transition-all">
                                                    {scheme.title}
                                                </h3>
                                                <Badge className={`${getCategoryColor(scheme.category)} border-none font-black px-4 py-1.5 rounded-full text-[9px] uppercase tracking-widest`}>
                                                    {scheme.category} DIRECTIVE
                                                </Badge>
                                            </div>
                                            <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-4xl">{scheme.description}</p>

                                            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 pt-6 border-t border-slate-50">
                                                <div className="space-y-1">
                                                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">ELIGIBILITY</h4>
                                                    <p className="text-sm text-slate-900 font-bold">{scheme.eligibility}</p>
                                                </div>
                                                <div className="space-y-1">
                                                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">ALLOCATION</h4>
                                                    <p className="text-lg text-[#1EB53A] font-black tracking-tight">{scheme.amount}</p>
                                                </div>
                                                <div className="space-y-1">
                                                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">DURATION</h4>
                                                    <p className="text-sm text-slate-900 font-bold">{scheme.duration}</p>
                                                </div>
                                                <div className="space-y-1">
                                                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">PROVIDER</h4>
                                                    <p className="text-sm text-slate-900 font-bold">{scheme.provider}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="w-full xl:w-80 space-y-4">
                                            <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center">
                                                        <Globe className="w-5 h-5 text-slate-400" />
                                                    </div>
                                                    <div className="space-y-0.5">
                                                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">REGISTRY CONTACT</p>
                                                        <p className="text-xs font-black text-slate-900 lowercase">{scheme.contact}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center">
                                                        <ShieldCheck className="w-5 h-5 text-[#1EB53A]" />
                                                    </div>
                                                    <div className="space-y-0.5">
                                                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">VERIFICATION</p>
                                                        <p className="text-[10px] font-bold text-slate-900">Official Gov Channel</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <Button className="h-16 w-full bg-[#0072C6] text-white hover:bg-slate-800 rounded-2xl font-black uppercase tracking-widest text-[11px] shadow-xl group-hover:scale-105 transition-all">
                                                Initiate Application <ExternalLink className="w-4 h-4 ml-3" />
                                            </Button>
                                        </div>
                                    </div>
                                </Card>
                            ))
                        ) : (
                            <Card className="p-24 text-center border-none bg-slate-50 rounded-[3rem]">
                                <Search className="w-16 h-16 text-slate-200 mx-auto mb-6" />
                                <p className="text-slate-400 font-black uppercase tracking-widest text-sm">
                                    No active mandates found matching your search parameters
                                </p>
                            </Card>
                        )}
                    </div>

                    {/* Elite Warning Section */}
                    <Card className="p-10 bg-[#0072C6] text-white rounded-[3rem] shadow-2xl border-none relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#1EB53A]/10 blur-[100px] rounded-full"></div>
                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                                <ShieldCheck className="w-10 h-10 text-[#1EB53A]" />
                            </div>
                            <div className="flex-1 space-y-2 text-center md:text-left">
                                <h4 className="text-xl font-black uppercase tracking-widest">Official Policy Advisory</h4>
                                <p className="text-white/60 font-medium leading-relaxed max-w-4xl">
                                    All schemes are subject to periodic review by the <span className="text-white font-black underline decoration-[#1EB53A]/50">National Agricultural Board</span>.
                                    Applicants should verify their farmer registration status before initiating formal requests.
                                </p>
                            </div>
                            <Button variant="outline" className="h-14 px-10 border-white/20 text-white hover:bg-white/10 rounded-2xl font-black uppercase tracking-widest text-[10px] shrink-0">
                                Technical Standards
                            </Button>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}
