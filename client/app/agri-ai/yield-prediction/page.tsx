'use client'

import { useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { TrendingUp, Loader2, Info, Calendar, BarChart3 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function YieldPredictionPage() {
    const [formData, setFormData] = useState({
        crop: '',
        area: '',
        rainfall: '',
        temperature: '',
        soilQuality: '',
        fertilizer: ''
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
            const response = await fetch('http://localhost:5000/api/ai/yield-prediction', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    crop: formData.crop,
                    area: parseFloat(formData.area),
                    rainfall: parseFloat(formData.rainfall),
                    temperature: parseFloat(formData.temperature),
                    soilQuality: formData.soilQuality,
                    fertilizer: formData.fertilizer
                })
            })

            if (!response.ok) throw new Error('Failed to predict yield')

            const data = await response.json()
            setResults(data)
        } catch (err) {
            setError('Failed to predict yield. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            <div className="container mx-auto px-4 py-12">
                <Card className="max-w-4xl mx-auto p-8">
                    <div className="text-center mb-8">
                        <div className="flex items-center justify-center gap-2 mb-3">
                            <div className="bg-blue-100 p-3 rounded-lg">
                                <TrendingUp className="w-8 h-8 text-blue-600" />
                            </div>
                            <h1 className="text-3xl font-bold">AI Yield Prediction</h1>
                        </div>
                        <p className="text-muted-foreground">
                            Predict your crop yield based on environmental conditions and farming practices
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
                                <Label htmlFor="area">
                                    Farm Area (hectares) <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    id="area"
                                    type="number"
                                    step="0.1"
                                    placeholder="e.g., 2.5"
                                    value={formData.area}
                                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="rainfall">Expected Rainfall (mm)</Label>
                                <Input
                                    id="rainfall"
                                    type="number"
                                    placeholder="e.g., 1200"
                                    value={formData.rainfall}
                                    onChange={(e) => setFormData({ ...formData, rainfall: e.target.value })}
                                />
                                <p className="text-xs text-muted-foreground">Annual rainfall forecast</p>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="temperature">Average Temperature (°C)</Label>
                                <Input
                                    id="temperature"
                                    type="number"
                                    placeholder="e.g., 27"
                                    value={formData.temperature}
                                    onChange={(e) => setFormData({ ...formData, temperature: e.target.value })}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="soilQuality">Soil Quality</Label>
                                <Select value={formData.soilQuality} onValueChange={(value) => setFormData({ ...formData, soilQuality: value })}>
                                    <SelectTrigger id="soilQuality">
                                        <SelectValue placeholder="Select Soil Quality" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="poor">Poor</SelectItem>
                                        <SelectItem value="average">Average</SelectItem>
                                        <SelectItem value="good">Good</SelectItem>
                                        <SelectItem value="excellent">Excellent</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="fertilizer">Fertilizer Application</Label>
                                <Select value={formData.fertilizer} onValueChange={(value) => setFormData({ ...formData, fertilizer: value })}>
                                    <SelectTrigger id="fertilizer">
                                        <SelectValue placeholder="Will you use fertilizer?" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="yes">Yes</SelectItem>
                                        <SelectItem value="no">No</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg flex gap-3">
                            <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <div className="text-sm">
                                <p className="font-semibold text-blue-900 mb-1">Prediction Accuracy:</p>
                                <p className="text-blue-800">
                                    Our AI considers multiple factors including weather patterns, soil conditions, and farming practices to provide accurate yield estimates.
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
                            className="w-full bg-blue-600 hover:bg-blue-700"
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                    Calculating...
                                </>
                            ) : (
                                <>
                                    <TrendingUp className="w-5 h-5 mr-2" />
                                    Predict Yield
                                </>
                            )}
                        </Button>
                    </form>

                    {/* Results Section */}
                    {results && (
                        <div className="space-y-6 border-t pt-8">
                            <h2 className="text-2xl font-bold text-center mb-6">Yield Prediction Results</h2>

                            {/* Main Prediction */}
                            <Card className="p-8 bg-gradient-to-br from-blue-50 to-green-50 border-2 border-blue-200">
                                <div className="text-center">
                                    <BarChart3 className="w-16 h-16 mx-auto mb-4 text-blue-600" />
                                    <h3 className="text-4xl font-bold text-blue-900 mb-2">
                                        {results.prediction.totalYield}
                                    </h3>
                                    <p className="text-lg text-muted-foreground mb-4">Estimated Total Yield</p>
                                    <div className="flex justify-center gap-4">
                                        <Badge variant="outline" className="text-base px-4 py-2">
                                            {results.prediction.yieldPerHectare} per hectare
                                        </Badge>
                                        <Badge className="bg-green-600 text-base px-4 py-2">
                                            {results.prediction.confidence} Confidence
                                        </Badge>
                                    </div>
                                </div>
                            </Card>

                            {/* Harvest Date */}
                            <Card className="p-6 bg-amber-50">
                                <div className="flex items-center gap-3">
                                    <Calendar className="w-8 h-8 text-amber-600" />
                                    <div>
                                        <p className="font-semibold text-amber-900">Expected Harvest</p>
                                        <p className="text-amber-800">{results.prediction.harvestDate}</p>
                                    </div>
                                </div>
                            </Card>

                            {/* Factors Affecting Yield */}
                            <Card className="p-6">
                                <h3 className="font-bold text-lg mb-4">Factors Affecting Your Yield</h3>
                                <div className="space-y-3">
                                    {results.factors.map((factor: any, i: number) => (
                                        <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                                            <span className="font-medium">{factor.factor}</span>
                                            <Badge className={factor.impact >= 0 ? 'bg-green-600' : 'bg-red-600'}>
                                                {factor.impact > 0 ? '+' : ''}{factor.impact}%
                                            </Badge>
                                        </div>
                                    ))}
                                </div>
                            </Card>

                            {/* Recommendations */}
                            <Card className="p-6 bg-green-50">
                                <h3 className="font-bold text-lg mb-3">Recommendations to Maximize Yield</h3>
                                <ul className="space-y-2">
                                    {results.recommendations.map((rec: string, i: number) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="text-green-600 mt-1">✓</span>
                                            <span className="text-slate-700">{rec}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Card>

                            <Button
                                onClick={() => {
                                    setResults(null)
                                    setFormData({
                                        crop: '',
                                        area: '',
                                        rainfall: '',
                                        temperature: '',
                                        soilQuality: '',
                                        fertilizer: ''
                                    })
                                }}
                                variant="outline"
                                className="w-full"
                            >
                                New Prediction
                            </Button>
                        </div>
                    )}
                </Card>
            </div>
        </div>
    )
}
