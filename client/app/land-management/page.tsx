"use client"

import { useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select } from '@/components/ui/select'
import { MapPin } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function LandManagementPage() {
    const [parcels, setParcels] = useState([
        {
            id: 1,
            name: 'asoid',
            location: 'banglore',
            area: 150.0,
            soilType: 'Clay',
            currentCrop: 'wheat',
            addedOn: '2025-10-27'
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
                addedOn: new Date().toISOString().split('T')[0]
            }
            setParcels([...parcels, newParcel])
            setFormData({ name: '', location: '', area: '', soilType: '', currentCrop: '' })
        }
    }

    const totalLand = parcels.reduce((sum, parcel) => sum + parcel.area, 0)

    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            <div className="container mx-auto px-4 py-12 max-w-7xl">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                    <div className="bg-[#1EB53A]/10 p-3 rounded-2xl">
                        <MapPin className="w-8 h-8 text-[#1EB53A]" />
                    </div>
                    <h1 className="text-4xl md:text-5xl heading-flagship">Land Management</h1>
                </div>

                <div className="grid lg:grid-cols-[380px_1fr] gap-8">
                    {/* Left Panel - Add New Land */}
                    <Card className="glass-card p-6 h-fit border-none shadow-xl">
                        <div className="bg-branded text-white px-6 py-4 -mx-6 -mt-6 mb-8 rounded-t-xl shadow-lg border-b border-white/10">
                            <h2 className="text-xl font-black uppercase tracking-tight">Add New Land Parcel</h2>
                        </div>
                        <div className="space-y-5">
                            <div>
                                <Label htmlFor="landName" className="text-sm font-medium text-slate-700 mb-2 block">
                                    Land Name
                                </Label>
                                <Input
                                    id="landName"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="bg-white/50"
                                    placeholder="Enter land name"
                                />
                            </div>

                            <div>
                                <Label htmlFor="location" className="text-sm font-medium text-slate-700 mb-2 block">
                                    Location
                                </Label>
                                <Input
                                    id="location"
                                    value={formData.location}
                                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                    className="bg-white/50"
                                    placeholder="Enter location"
                                />
                            </div>

                            <div>
                                <Label htmlFor="area" className="text-sm font-medium text-slate-700 mb-2 block">
                                    Area (acres)
                                </Label>
                                <Input
                                    id="area"
                                    type="number"
                                    value={formData.area}
                                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                                    className="bg-white/50"
                                    placeholder="Enter area in acres"
                                />
                            </div>

                            <div>
                                <Label htmlFor="soilType" className="text-sm font-medium text-slate-700 mb-2 block">
                                    Soil Type
                                </Label>
                                <select
                                    id="soilType"
                                    value={formData.soilType}
                                    onChange={(e) => setFormData({ ...formData, soilType: e.target.value })}
                                    className="w-full px-3 py-2 bg-white/50 border border-input rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                                >
                                    <option value="">Select soil type</option>
                                    <option value="Clay">Clay</option>
                                    <option value="Sandy">Sandy</option>
                                    <option value="Loamy">Loamy</option>
                                    <option value="Silt">Silt</option>
                                    <option value="Peat">Peat</option>
                                    <option value="Chalky">Chalky</option>
                                </select>
                            </div>

                            <div>
                                <Label htmlFor="currentCrop" className="text-sm font-medium text-muted-foreground mb-2 block">
                                    Current Crop
                                </Label>
                                <Input
                                    id="currentCrop"
                                    value={formData.currentCrop}
                                    onChange={(e) => setFormData({ ...formData, currentCrop: e.target.value })}
                                    className="bg-white/50"
                                    placeholder="Enter current crop"
                                />
                            </div>

                            <Button
                                onClick={handleAddLand}
                                className="w-full bg-primary hover:bg-primary/90"
                            >
                                Add Land
                            </Button>
                        </div>
                    </Card>

                    {/* Right Panel - Your Land Parcels */}
                    <Card className="glass-card p-6 border-none shadow-xl">
                        <div className="bg-branded text-white px-6 py-4 -mx-6 -mt-6 mb-8 rounded-t-xl shadow-lg border-b border-white/10">
                            <h2 className="text-xl font-black uppercase tracking-tight">Your Land Parcels</h2>
                        </div>
                        {/* Table */}
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-border">
                                        <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Name</th>
                                        <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Location</th>
                                        <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Area (acres)</th>
                                        <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Soil Type</th>
                                        <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Current Crop</th>
                                        <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Added On</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {parcels.map((parcel) => (
                                        <tr key={parcel.id} className="border-b border-border hover:bg-muted/50">
                                            <td className="py-3 px-4 text-foreground">{parcel.name}</td>
                                            <td className="py-3 px-4 text-slate-700">{parcel.location}</td>
                                            <td className="py-3 px-4 text-slate-700">{parcel.area}</td>
                                            <td className="py-3 px-4">
                                                <Badge variant="secondary" className="bg-secondary/20 text-secondary border-none text-xs">
                                                    {parcel.soilType}
                                                </Badge>
                                            </td>
                                            <td className="py-3 px-4 text-slate-700">{parcel.currentCrop}</td>
                                            <td className="py-3 px-4 text-slate-700">{parcel.addedOn}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Total Land Summary */}
                        <div className="mt-6 bg-secondary/10 border border-secondary/20 rounded-lg px-4 py-3">
                            <p className="text-foreground/80 font-medium">
                                Total Land: <span className="font-bold">{totalLand.toFixed(1)} acres</span> across{' '}
                                <span className="font-bold">{parcels.length}</span> parcel{parcels.length !== 1 ? 's' : ''}
                            </p>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}
