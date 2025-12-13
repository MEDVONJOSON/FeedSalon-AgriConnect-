'use client'

import { useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Sprout, Loader2, Info, Calendar, DollarSign } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function FertilizerGuidePage() {
    const [formData, setFormData] = useState({
        crop: '',
        soilType: '',
        nitrogen: '',
        phosphorus: '',
        potassium: '',
        area: ''
    })

    const [loading, setLoading] = useState(false)
    const [results, setResults] = useState<any>(null)
    const [error, setError] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError('')
        setResults(null)

        try {
            const response = await fetch('http://localhost:5000/api/ai/fertilizer-guide', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    crop: formData.crop,
                    soilType: formData.soilType,
                    nitrogen: parseFloat(formData.nitrogen) || 50,
                    phosphorus: parseFloat(formData.phosphorus) || 50,
                    potassium: parseFloat(formData.potassium) || 50,
                    area: parseFloat(formData.area) || 1
                })
            })

            if (!response.ok) throw new Error('Failed to generate fertilizer guide')

            const data = await response.json()
            setResults(data)
        } catch (err) {
            setError('Failed to generate guide. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            <div className="container mx-auto px-4 py-12">
                <Card className="max-w-5xl mx-auto p-8">
                    <div className="text-center mb-8">
                        <div className="flex items-center justify-center gap-2 mb-3">
                            <div className="bg-emerald-100 p-3 rounded-lg">
                                <Sprout className="w-8 h-8 text-emerald-600" />
                            </div>
                            <h1 className="text-3xl font-bold">AI Fertilizer Guide</h1>
                        </div>
                        <p className="text-muted-foreground">
                            Get customized fertilizer recommendations based on your crop and soil analysis
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6 mb-8">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="crop">
                                    Crop Type <span className="text-red-500">*</span>
                                </Label>
                                <Select value={formData.crop} onValueChange={(value) => setFormData({ ...formData, crop: value })}>
                                    <SelectTrigger id="crop">
                                        <SelectValue placeholder="Select Crop" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="rice">Rice</SelectItem>
                                        <SelectItem value="cassava">Cassava</SelectItem>
                                        <SelectItem value="maize">Maize</SelectItem>
                                        <SelectItem value="cocoa">Cocoa</SelectItem>
                                        <SelectItem value="groundnut">Groundnut</SelectItem>
                                        <SelectItem value="palm-oil">Palm Oil</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="soilType">Soil Type</Label>
                                <Select value={formData.soilType} onValueChange={(value) => setFormData({ ...formData, soilType: value })}>
                                    <SelectTrigger id="soilType">
                                        <SelectValue placeholder="Select Soil Type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="sandy">Sandy</SelectItem>
                                        <SelectItem value="clay">Clay</SelectItem>
                                        <SelectItem value="loamy">Loamy</SelectItem>
                                        <SelectItem value="silt">Silt</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="nitrogen">Current Nitrogen (N) Level</Label>
                                <Input
                                    id="nitrogen"
                                    type="number"
                                    placeholder="e.g., 50 (kg/ha)"
                                    value={formData.nitrogen}
                                    onChange={(e) => setFormData({ ...formData, nitrogen: e.target.value })}
                                />
                                <p className="text-xs text-muted-foreground">Leave blank if unknown</p>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="phosphorus">Current Phosphorus (P) Level</Label>
                                <Input
                                    id="phosphorus"
                                    type="number"
                                    placeholder="e.g., 50 (kg/ha)"
                                    value={formData.phosphorus}
                                    onChange={(e) => setFormData({ ...formData, phosphorus: e.target.value })}
                                />
                                <p className="text-xs text-muted-foreground">Leave blank if unknown</p>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="potassium">Current Potassium (K) Level</Label>
                                <Input
                                    id="potassium"
                                    type="number"
                                    placeholder="e.g., 50 (kg/ha)"
                                    value={formData.potassium}
                                    onChange={(e) => setFormData({ ...formData, potassium: e.target.value })}
                                />
                                <p className="text-xs text-muted-foreground">Leave blank if unknown</p>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="area">Farm Area (hectares)</Label>
                                <Input
                                    id="area"
                                    type="number"
                                    step="0.1"
                                    placeholder="e.g., 2.0"
                                    value={formData.area}
                                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg flex gap-3">
                            <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <div className="text-sm">
                                <p className="font-semibold text-blue-900 mb-1">Smart Fertilizer Planning:</p>
                                <p className="text-blue-800">
                                    Our AI calculates optimal fertilizer amounts and timing based on your crop's specific nutrient requirements and current soil levels.
                                </p>
                            </div>
                        </div>

                        {error && (
                            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
                                <p className="text-red-800">{error}</p>
                            </div>
                        )}

                        <Button
                            type="submit"
                            size="lg"
                            className="w-full bg-emerald-600 hover:bg-emerald-700"
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                    Generating Guide...
                                </>
                            ) : (
                                <>
                                    <Sprout className="w-5 h-5 mr-2" />
                                    Generate Fertilizer Guide
                                </>
                            )}
                        </Button>
                    </form>

                    {/* Results Section */}
                    {results && (
                        <div className="space-y-6 border-t pt-8">
                            <h2 className="text-2xl font-bold text-center mb-6">Your Customized Fertilizer Plan</h2>

                            {/* Crop Requirements vs Soil Status */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <Card className="p-6 bg-green-50">
                                    <h3 className="font-bold text-lg mb-4">Crop Requirements</h3>
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <span>Nitrogen (N):</span>
                                            <Badge className="capitalize">{results.cropRequirements.nitrogen}</Badge>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Phosphorus (P):</span>
                                            <Badge className="capitalize">{results.cropRequirements.phosphorus}</Badge>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Potassium (K):</span>
                                            <Badge className="capitalize">{results.cropRequirements.potassium}</Badge>
                                        </div>
                                    </div>
                                </Card>

                                <Card className="p-6 bg-blue-50">
                                    <h3 className="font-bold text-lg mb-4">Your Soil Status</h3>
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <span>Nitrogen Need:</span>
                                            <Badge variant="outline" className={
                                                results.soilStatus.nitrogen === 'High' ? 'border-red-500 text-red-700' :
                                                    results.soilStatus.nitrogen === 'Medium' ? 'border-yellow-500 text-yellow-700' :
                                                        'border-green-500 text-green-700'
                                            }>{results.soilStatus.nitrogen}</Badge>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Phosphorus Need:</span>
                                            <Badge variant="outline" className={
                                                results.soilStatus.phosphorus === 'High' ? 'border-red-500 text-red-700' :
                                                    results.soilStatus.phosphorus === 'Medium' ? 'border-yellow-500 text-yellow-700' :
                                                        'border-green-500 text-green-700'
                                            }>{results.soilStatus.phosphorus}</Badge>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Potassium Need:</span>
                                            <Badge variant="outline" className={
                                                results.soilStatus.potassium === 'High' ? 'border-red-500 text-red-700' :
                                                    results.soilStatus.potassium === 'Medium' ? 'border-yellow-500 text-yellow-700' :
                                                        'border-green-500 text-green-700'
                                            }>{results.soilStatus.potassium}</Badge>
                                        </div>
                                    </div>
                                </Card>
                            </div>

                            {/* Fertilizer Schedule */}
                            <Card className="p-6">
                                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                                    <Calendar className="w-5 h-5 text-emerald-600" />
                                    Application Schedule
                                </h3>
                                <div className="space-y-4">
                                    {results.fertilizerSchedule.map((stage: any, i: number) => (
                                        <div key={i} className="border-l-4 border-emerald-500 pl-4 py-2">
                                            <div className="flex items-center justify-between mb-2">
                                                <h4 className="font-bold text-emerald-900">{stage.stage}</h4>
                                                <Badge>{stage.timing}</Badge>
                                            </div>
                                            <div className="grid md:grid-cols-3 gap-4 text-sm">
                                                <div>
                                                    <p className="text-muted-foreground">Fertilizer Type</p>
                                                    <p className="font-semibold">{stage.fertilizer}</p>
                                                </div>
                                                <div>
                                                    <p className="text-muted-foreground">Application Rate</p>
                                                    <p className="font-semibold">{stage.rate}</p>
                                                </div>
                                                <div>
                                                    <p className="text-muted-foreground">Method</p>
                                                    <p className="font-semibold">{stage.method}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Card>

                            {/* Recommendations */}
                            <Card className="p-6 bg-amber-50">
                                <h3 className="font-bold text-lg mb-3">Important Recommendations</h3>
                                <ul className="space-y-2">
                                    {results.recommendations.map((rec: string, i: number) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="text-amber-600 mt-1">⚠</span>
                                            <span className="text-slate-700">{rec}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Card>

                            {/* Organic Alternatives */}
                            <Card className="p-6 bg-green-50">
                                <h3 className="font-bold text-lg mb-3">Organic Alternatives</h3>
                                <ul className="space-y-2">
                                    {results.organicAlternatives.map((alt: string, i: number) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="text-green-600 mt-1">🌱</span>
                                            <span className="text-slate-700">{alt}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Card>

                            <Button
                                onClick={() => {
                                    setResults(null)
                                    setFormData({
                                        crop: '',
                                        soilType: '',
                                        nitrogen: '',
                                        phosphorus: '',
                                        potassium: '',
                                        area: ''
                                    })
                                }}
                                variant="outline"
                                className="w-full"
                            >
                                Create New Guide
                            </Button>
                        </div>
                    )}
                </Card>
            </div>
        </div>
    )
}
