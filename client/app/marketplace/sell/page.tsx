'use client'

import { useState, useEffect } from 'react'
import { Navigation } from '@/components/navigation'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ArrowLeft, CheckCircle2, Upload, Globe, ShieldCheck, Zap, Package, Tag, Plus, Loader2 } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { auth } from '@/lib/auth'
import { Badge } from '@/components/ui/badge'

export default function SellProductPage() {
    const router = useRouter()
    const [submitting, setSubmitting] = useState(false)
    const [formData, setFormData] = useState({
        seller_name: '',
        seller_phone: '',
        seller_location: '',
        product_name: '',
        category: '',
        description: '',
        price: '',
        unit: '',
        quantity_available: ''
    })

    useEffect(() => {
        const user = auth.getUser()
        if (!user) {
            router.push('/auth/login')
            return
        }
        if (user.role !== 'farmer') {
            alert('Only farmers can list products for sale.')
            router.push('/marketplace')
            return
        }

        setFormData(prev => ({
            ...prev,
            seller_name: user.name || '',
            seller_phone: user.phone || '',
            seller_location: user.farmDetails?.location || user.location || ''
        }))
    }, [router])

    const categories = ['Crops', 'Livestock', 'Equipment', 'Processed']
    const units = ['kg', 'bag (50kg)', 'bag (25kg)', 'basket', 'piece', 'liter', 'gallon', 'set', 'animal', 'jar', 'bottle', 'bundle']

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitting(true)
        try {
            const res = await fetch('http://localhost:5000/api/marketplace/products', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })
            if (res.ok) {
                alert('✅ Product listed successfully! It is now visible to buyers.')
                router.push('/marketplace')
            } else {
                alert('❌ Failed to list product. Please fill all required fields.')
            }
        } catch (error) {
            console.error('Error listing product:', error)
        } finally {
            setSubmitting(false)
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
                            <Plus className="w-3 h-3" />
                            COMMODITY LISTING TERMINAL
                        </Badge>
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tighter">
                            Execute <br />
                            <span className="text-white underline decoration-4 underline-offset-8 decoration-white/30">Sell Order</span>
                        </h1>
                        <p className="text-xl text-white/80 max-w-2xl font-medium leading-relaxed">
                            Integrate your agricultural assets into the <span className="text-white font-bold italic underline decoration-white/20">National Trade Grid</span>. Provide accurate technical specifications for verified buyers.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 -mt-12 relative z-20">
                <div className="max-w-4xl mx-auto">
                    <Link href="/marketplace" className="inline-flex items-center gap-2 text-white font-black uppercase tracking-widest text-[10px] mb-8 bg-[#0072C6]/50 backdrop-blur-md px-6 py-3 rounded-xl hover:bg-[#0072C6] transition-all">
                        <ArrowLeft className="w-4 h-4" /> Back to Market Grid
                    </Link>

                    <Card className="p-10 border-none bg-white rounded-[3rem] shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#1EB53A]/5 blur-[100px] rounded-full"></div>

                        <div className="mb-12">
                            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-2">Technical Dossier</h2>
                            <p className="text-slate-500 font-medium">Specify the parameters of your commodity for listing in the national registry.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
                            {/* Seller Registry Section */}
                            <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 space-y-6">
                                <h3 className="text-[11px] font-black text-slate-900 uppercase tracking-[0.3em] flex items-center gap-3">
                                    <ShieldCheck className="w-5 h-5 text-[#1EB53A]" />
                                    ORIGIN RECOGNITION
                                </h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Producer / Legal Name</Label>
                                        <Input required className="h-14 rounded-2xl border-slate-100 bg-white font-bold px-6" value={formData.seller_name} onChange={e => setFormData({ ...formData, seller_name: e.target.value })} />
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Terminal Identifier (Phone)</Label>
                                        <Input required className="h-14 rounded-2xl border-slate-100 bg-white font-bold px-6" value={formData.seller_phone} onChange={e => setFormData({ ...formData, seller_phone: e.target.value })} />
                                    </div>
                                    <div className="md:col-span-2 space-y-2">
                                        <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Geographical Origin (Location)</Label>
                                        <Input required className="h-14 rounded-2xl border-slate-100 bg-white font-bold px-6" value={formData.seller_location} onChange={e => setFormData({ ...formData, seller_location: e.target.value })} />
                                    </div>
                                </div>
                            </div>

                            {/* Product Specification Section */}
                            <div className="space-y-8">
                                <h3 className="text-[11px] font-black text-slate-900 uppercase tracking-[0.3em] flex items-center gap-3">
                                    <Package className="w-5 h-5 text-[#0072C6]" />
                                    COMMODITY PARAMETERS
                                </h3>

                                <div className="space-y-2">
                                    <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Product Nomenclature</Label>
                                    <Input required className="h-14 rounded-2xl border-slate-100 bg-slate-50 font-bold px-6" placeholder="e.g. Premium Grade Cocoa, Local Rice (Bonthe)" value={formData.product_name} onChange={e => setFormData({ ...formData, product_name: e.target.value })} />
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Sector Classification</Label>
                                        <select
                                            className="w-full h-14 rounded-2xl border-slate-100 bg-slate-50 font-bold px-6 text-sm"
                                            required
                                            value={formData.category}
                                            onChange={e => setFormData({ ...formData, category: e.target.value })}
                                        >
                                            <option value="">Select Category</option>
                                            {categories.map(c => <option key={c} value={c}>{c}</option>)}
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Inventory Volume</Label>
                                        <Input required type="number" className="h-14 rounded-2xl border-slate-100 bg-slate-50 font-bold px-6" value={formData.quantity_available} onChange={e => setFormData({ ...formData, quantity_available: e.target.value })} />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">valuation (Le)</Label>
                                        <Input required className="h-14 rounded-2xl border-slate-100 bg-slate-50 font-bold px-6" value={formData.price} onChange={e => setFormData({ ...formData, price: e.target.value })} />
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Standard Unit</Label>
                                        <select
                                            className="w-full h-14 rounded-2xl border-slate-100 bg-slate-50 font-bold px-6 text-sm"
                                            required
                                            value={formData.unit}
                                            onChange={e => setFormData({ ...formData, unit: e.target.value })}
                                        >
                                            <option value="">Select Unit</option>
                                            {units.map(u => <option key={u} value={u}>{u}</option>)}
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Qualitative Analysis (Description)</Label>
                                    <Textarea rows={4} className="rounded-[1.5rem] border-slate-100 bg-slate-50 font-medium p-6" value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} />
                                </div>

                                {/* Asset Visualization Terminal */}
                                <div className="border-2 border-dashed border-slate-200 rounded-[2rem] p-10 text-center hover:bg-slate-50 transition-all cursor-pointer group">
                                    <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                        <Upload className="w-8 h-8 text-slate-400 group-hover:text-[#1EB53A]" />
                                    </div>
                                    <p className="text-sm font-black text-slate-900 uppercase tracking-widest">Asset Visualization</p>
                                    <p className="text-xs text-slate-400 mt-1">Upload JPG/PNG imagery (Max 5MB)</p>
                                </div>
                            </div>

                            <div className="pt-8 flex flex-col md:flex-row gap-4">
                                <Button type="submit" disabled={submitting} className="flex-1 h-16 bg-[#1EB53A] text-white hover:bg-[#1base-3A]/90 rounded-2xl font-black uppercase tracking-widest text-[11px] shadow-2xl active:scale-95 transition-all order-2 md:order-1">
                                    {submitting ? <Loader2 className="w-6 h-6 animate-spin" /> : 'Execute National Listing'}
                                </Button>
                                <Link href="/marketplace" className="flex-1 order-1 md:order-2">
                                    <Button variant="ghost" className="w-full h-16 rounded-2xl font-black uppercase tracking-widest text-[11px] text-slate-400 hover:text-slate-900 hover:bg-slate-50 transition-all">
                                        Abort Listing
                                    </Button>
                                </Link>
                            </div>
                        </form>
                    </Card>
                </div>
            </div>
        </div>
    )
}
