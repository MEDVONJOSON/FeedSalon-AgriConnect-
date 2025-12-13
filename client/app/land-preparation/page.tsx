"use client"

import { useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Card } from '@/components/ui/card'
import { Settings } from 'lucide-react'

export default function LandPreparationPage() {
    const [soilType, setSoilType] = useState('Loamy Soil')
    const [targetCrop, setTargetCrop] = useState('Wheat')

    const preparationSteps = [
        'Plow to 6-8 inches depth to loosen soil',
        'Add 1-2 inches of compost for nutrient boost',
        'Remove weeds and crop residues',
        'Level the field properly',
        'Create appropriate irrigation channels',
        'Test and adjust pH if needed (6.0-7.0 optimal)',
        'Apply basal fertilizers based on crop requirements'
    ]

    return (
        <div className="min-h-screen">
            <Navigation />

            <div className="container mx-auto px-4 py-12 max-w-6xl">
                {/* Header */}
                <div className="flex items-center gap-3 mb-8">
                    <Settings className="w-8 h-8 text-primary" />
                    <h1 className="text-4xl font-bold text-slate-900">Land Preparation Guide</h1>
                </div>

                <div className="grid lg:grid-cols-[350px_1fr] gap-6">
                    {/* Left Panel - Select Parameters */}
                    <Card className="glass-card p-6 h-fit">
                        <div className="bg-primary text-white px-4 py-3 -mx-6 -mt-6 mb-6 rounded-t-lg">
                            <h2 className="text-lg font-semibold">Select Parameters</h2>
                        </div>

                        <div className="space-y-5">
                            <div>
                                <label className="text-sm font-medium text-slate-700 mb-2 block">
                                    Soil Type
                                </label>
                                <select
                                    value={soilType}
                                    onChange={(e) => setSoilType(e.target.value)}
                                    className="w-full px-3 py-2 bg-white/50 border border-input rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                                >
                                    <option value="Loamy Soil">Loamy Soil</option>
                                    <option value="Clay Soil">Clay Soil</option>
                                    <option value="Sandy Soil">Sandy Soil</option>
                                    <option value="Silt Soil">Silt Soil</option>
                                    <option value="Peat Soil">Peat Soil</option>
                                    <option value="Chalky Soil">Chalky Soil</option>
                                </select>
                            </div>

                            <div>
                                <label className="text-sm font-medium text-slate-700 mb-2 block">
                                    Target Crop
                                </label>
                                <select
                                    value={targetCrop}
                                    onChange={(e) => setTargetCrop(e.target.value)}
                                    className="w-full px-3 py-2 bg-white/50 border border-input rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                                >
                                    <option value="Wheat">Wheat</option>
                                    <option value="Rice">Rice</option>
                                    <option value="Maize">Maize</option>
                                    <option value="Cotton">Cotton</option>
                                    <option value="Sugarcane">Sugarcane</option>
                                    <option value="Vegetables">Vegetables</option>
                                </select>
                            </div>
                        </div>
                    </Card>

                    {/* Right Panel - Preparation Steps */}
                    <Card className="glass-card p-6">
                        <div className="bg-primary text-white px-4 py-3 -mx-6 -mt-6 mb-6 rounded-t-lg">
                            <h2 className="text-lg font-semibold">Preparation Steps</h2>
                        </div>

                        {/* Title Banner */}
                        <div className="bg-cyan-100 border border-cyan-200 rounded-lg px-4 py-3 mb-6">
                            <h3 className="font-semibold text-slate-800">
                                Land Preparation for {targetCrop} on {soilType}
                            </h3>
                        </div>

                        {/* Steps List */}
                        <div className="space-y-4">
                            {preparationSteps.map((step, index) => (
                                <div key={index} className="flex gap-4 items-start">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                                        {index + 1}
                                    </div>
                                    <p className="text-slate-700 pt-2 leading-relaxed">{step}</p>
                                </div>
                            ))}
                        </div>

                        {/* Additional Info */}
                        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                            <p className="text-sm text-slate-700">
                                <strong>Note:</strong> These steps are general guidelines for {targetCrop} cultivation on {soilType}.
                                Adjust based on local climate conditions and specific crop variety requirements.
                            </p>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}
