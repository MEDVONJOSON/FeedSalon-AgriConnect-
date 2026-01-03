"use client"

import { useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { MapPin, ShieldCheck, Database, Layers, Plus, Search, Globe, Sprout } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function LandManagementPage() {
    const [parcels, setParcels] = useState([
        {
            id: 1,
            name: 'Elite North Sector',
            location: 'Makeni District',
            area: 15.0,
            soilType: 'Loamy',
            currentCrop: 'Rice (NERICA)',
            addedOn: '2025-10-27',
            status: 'Verified'
        }
    ])

    const [formData, setFormData] = useState({
        name: '',
        location: '',
        area: '',
        soilType: '',
        currentCrop: ''
    })

    const handleAddLand = () => {
        if (formData.name && formData.location && formData.area && formData.soilType && formData.currentCrop) {
            const newParcel = {
                id: parcels.length + 1,
                name: formData.name,
                location: formData.location,
                area: parseFloat(formData.area),
                soilType: formData.soilType,
                currentCrop: formData.currentCrop,
                addedOn: new Date().toISOString().split('T')[0],
                status: 'Pending Verification'
            }
            setParcels([...parcels, newParcel])
            setFormData({ name: '', location: '', area: '', soilType: '', currentCrop: '' })
        }
    }

    const totalLand = parcels.reduce((sum, parcel) => sum + parcel.area, 0)

    return (
        <div className="min-h-screen bg-slate-50/50">
            <Navigation />

            {/* Premium Header Container */}
            <div className="bg-[#0072C6] pt-32 pb-24 relative overflow-hidden border-b-4 border-[#1EB53A]">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 blur-[120px] rounded-full translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-[#1EB53A]/10 blur-[100px] rounded-full -translate-x-1/4"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl">
                        <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-md px-6 py-1.5 mb-6 font-black uppercase tracking-widest text-[10px]">
                            National Land Registry (NLR)
                        </Badge>
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter shadow-sm">
                            Land <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 underline decoration-[#1EB53A] underline-offset-8">Management</span>
                        </h1>
                        <p className="text-xl text-blue-100 max-w-3xl font-medium leading-relaxed">
                            Securing tenure and optimizing productivity across <span className="text-[#1EB53A] font-bold">Sierra Leone's</span> agricultural landscape through digital cadastral mapping.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16 -mt-12 relative z-20">
                <div className="grid lg:grid-cols-[420px_1fr] gap-10">

                    {/* Prestigious Add Land Panel */}
                    <Card className="p-8 border-none bg-white rounded-[2.5rem] shadow-2xl h-fit sticky top-28">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-2xl bg-[#0072C6]/10 flex items-center justify-center">
                                <Plus className="w-6 h-6 text-[#0072C6]" />
                            </div>
                            <div>
                                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Register Parcel</h3>
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Formal Tenure Entry</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="space-y-2">
                                <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Parcel Designation</Label>
                                <Input
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="h-14 bg-slate-50 border-slate-100 rounded-xl focus:bg-white focus:border-[#0072C6] transition-all font-bold"
                                    placeholder="e.g. Western Valley Farm"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Administrative District</Label>
                                <Input
                                    value={formData.location}
                                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                    className="h-14 bg-slate-50 border-slate-100 rounded-xl focus:bg-white focus:border-[#0072C6] transition-all font-bold"
                                    placeholder="e.g. Bo District"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Total Area (Ha)</Label>
                                    <Input
                                        type="number"
                                        value={formData.area}
                                        onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                                        className="h-14 bg-slate-50 border-slate-100 rounded-xl focus:bg-white focus:border-[#0072C6] transition-all font-bold"
                                        placeholder="0.0"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Soil Class</Label>
                                    <select
                                        value={formData.soilType}
                                        onChange={(e) => setFormData({ ...formData, soilType: e.target.value })}
                                        className="w-full h-14 px-4 bg-slate-50 border border-slate-100 rounded-xl text-sm font-bold focus:outline-none focus:border-[#0072C6] transition-all"
                                    >
                                        <option value="">Select...</option>
                                        <option value="Loamy">Loamy</option>
                                        <option value="Clay">Clay</option>
                                        <option value="Sandy">Sandy</option>
                                        <option value="Silt">Silt</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Active Commodity</Label>
                                <Input
                                    value={formData.currentCrop}
                                    onChange={(e) => setFormData({ ...formData, currentCrop: e.target.value })}
                                    className="h-14 bg-slate-50 border-slate-100 rounded-xl focus:bg-white focus:border-[#0072C6] transition-all font-bold"
                                    placeholder="e.g. Cassava"
                                />
                            </div>

                            <Button
                                onClick={handleAddLand}
                                className="w-full h-16 bg-[#0072C6] text-white hover:bg-slate-800 rounded-2xl font-black uppercase tracking-widest text-[11px] shadow-xl transition-all"
                            >
                                Submit to Registry
                            </Button>
                        </div>
                    </Card>

                    {/* Elite Registry Display */}
                    <div className="space-y-8">
                        {/* Status Summary */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <Card className="p-6 bg-white rounded-3xl border-none shadow-xl text-center border-b-4 border-b-[#0072C6]">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">TOTAL HOLDINGS</p>
                                <p className="text-3xl font-black text-slate-900">{totalLand.toFixed(2)}<span className="text-sm ml-1">Ha</span></p>
                            </Card>
                            <Card className="p-6 bg-white rounded-3xl border-none shadow-xl text-center border-b-4 border-b-[#1EB53A]">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">REGISTERED UNITS</p>
                                <p className="text-3xl font-black text-slate-900">{parcels.length}</p>
                            </Card>
                            <Card className="p-6 bg-white rounded-3xl border-none shadow-xl text-center border-b-4 border-b-amber-500">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">TENURE STATUS</p>
                                <p className="text-sm font-black text-amber-500 uppercase tracking-[0.1em] mt-2 flex items-center justify-center gap-1"><ShieldCheck className="w-4 h-4" /> Secure</p>
                            </Card>
                        </div>

                        {/* List Grid */}
                        <div className="grid gap-6">
                            {parcels.map((parcel) => (
                                <Card key={parcel.id} className="p-8 border-none bg-white rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all overflow-hidden relative">
                                    <div className="absolute top-0 right-0 p-8">
                                        <Badge className="bg-[#1EB53A]/10 text-[#1EB53A] border-none font-black px-4 py-1.5 rounded-full text-[9px] uppercase tracking-widest">
                                            {parcel.status}
                                        </Badge>
                                    </div>

                                    <div className="flex flex-col md:flex-row gap-8 items-center">
                                        <div className="p-5 rounded-2xl bg-slate-50 text-slate-400">
                                            <Layers className="w-8 h-8" />
                                        </div>
                                        <div className="flex-1 space-y-4">
                                            <div>
                                                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">{parcel.name}</h3>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <MapPin className="w-3 h-3 text-[#0072C6]" />
                                                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{parcel.location}</span>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-6 border-t border-slate-50">
                                                <div className="space-y-1">
                                                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">AREA</p>
                                                    <p className="text-sm font-black text-slate-900">{parcel.area} Ha</p>
                                                </div>
                                                <div className="space-y-1">
                                                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">SOIL</p>
                                                    <p className="text-sm font-black text-slate-900">{parcel.soilType}</p>
                                                </div>
                                                <div className="space-y-1">
                                                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">CROP</p>
                                                    <p className="text-sm font-bold text-[#1EB53A]">{parcel.currentCrop}</p>
                                                </div>
                                                <div className="space-y-1">
                                                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">ENTRY DATE</p>
                                                    <p className="text-sm font-black text-slate-900">{parcel.addedOn}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>

                        {/* Mandate Info */}
                        <Card className="p-10 bg-[#0072C6] text-white rounded-[3rem] shadow-2xl relative overflow-hidden">
                            <div className="flex flex-col md:flex-row items-center gap-8">
                                <div className="p-5 rounded-2xl bg-white/10 border border-white/20">
                                    <Database className="w-10 h-10 text-white" />
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-xl font-black uppercase tracking-widest underline decoration-[#1EB53A] decoration-4 underline-offset-8">Cadastral Integrity</h4>
                                    <p className="text-blue-100 font-medium leading-relaxed max-w-3xl">
                                        All registry entries are synchronized with the <span className="text-white font-bold italic">National Agricultural Mapping Protocol</span>. Digital boundaries ensure tenure security and climate-advisory precision for every farmer.
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

