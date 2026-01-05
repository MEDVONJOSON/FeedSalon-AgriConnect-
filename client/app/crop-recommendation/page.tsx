'use client'

import { API_URL } from '@/lib/api-config'

import { useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Sprout, Info, Loader2, TrendingUp, Calendar, Award } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function CropRecommendationPage() {
  const [formData, setFormData] = useState({
    nitrogen: '',
    phosphorus: '',
    potassium: '',
    temperature: '',
    humidity: '',
    ph: '6.5',
    rainfall: ''
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
      const response = await fetch(`${API_URL}/api/ai/crop-recommendation`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nitrogen: parseFloat(formData.nitrogen),
          phosphorus: parseFloat(formData.phosphorus),
          potassium: parseFloat(formData.potassium),
          temperature: parseFloat(formData.temperature),
          humidity: parseFloat(formData.humidity),
          ph: parseFloat(formData.ph),
          rainfall: parseFloat(formData.rainfall)
        })
      })

      if (!response.ok) {
        throw new Error('Failed to get recommendations')
      }

      const data = await response.json()
      setResults(data)
    } catch (err) {
      setError('Failed to get recommendations. Please try again.')
      console.error(err)
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
              <div className="bg-primary/10 p-3 rounded-lg">
                <Sprout className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-3xl font-bold">AI Crop Recommendation</h1>
            </div>
            <p className="text-muted-foreground">
              Get personalized crop suggestions based on soil analysis and climate data
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 mb-8">
            <div className="grid md:grid-cols-3 gap-6">
              {/* NPK Values */}
              <div className="space-y-2">
                <Label htmlFor="nitrogen">
                  Nitrogen (N) <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="nitrogen"
                  type="number"
                  placeholder="0-150"
                  value={formData.nitrogen}
                  onChange={(e) => setFormData({ ...formData, nitrogen: e.target.value })}
                  required
                />
                <p className="text-xs text-muted-foreground">Soil nitrogen content (kg/ha)</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phosphorus">
                  Phosphorus (P) <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="phosphorus"
                  type="number"
                  placeholder="0-150"
                  value={formData.phosphorus}
                  onChange={(e) => setFormData({ ...formData, phosphorus: e.target.value })}
                  required
                />
                <p className="text-xs text-muted-foreground">Soil phosphorus content (kg/ha)</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="potassium">
                  Potassium (K) <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="potassium"
                  type="number"
                  placeholder="0-150"
                  value={formData.potassium}
                  onChange={(e) => setFormData({ ...formData, potassium: e.target.value })}
                  required
                />
                <p className="text-xs text-muted-foreground">Soil potassium content (kg/ha)</p>
              </div>

              {/* Climate Data */}
              <div className="space-y-2">
                <Label htmlFor="temperature">
                  Temperature (°C) <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="temperature"
                  type="number"
                  placeholder="e.g., 25"
                  value={formData.temperature}
                  onChange={(e) => setFormData({ ...formData, temperature: e.target.value })}
                  required
                />
                <p className="text-xs text-muted-foreground">Average temperature</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="humidity">
                  Humidity (%) <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="humidity"
                  type="number"
                  placeholder="e.g., 70"
                  value={formData.humidity}
                  onChange={(e) => setFormData({ ...formData, humidity: e.target.value })}
                  required
                />
                <p className="text-xs text-muted-foreground">Relative humidity</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="ph">
                  Soil pH <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="ph"
                  type="number"
                  step="0.1"
                  placeholder="6.5"
                  value={formData.ph}
                  onChange={(e) => setFormData({ ...formData, ph: e.target.value })}
                  required
                />
                <p className="text-xs text-muted-foreground">pH level (4.0-9.0)</p>
              </div>

              <div className="space-y-2 md:col-span-3">
                <Label htmlFor="rainfall">
                  Annual Rainfall (mm) <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="rainfall"
                  type="number"
                  placeholder="e.g., 1200"
                  value={formData.rainfall}
                  onChange={(e) => setFormData({ ...formData, rainfall: e.target.value })}
                  required
                />
                <p className="text-xs text-muted-foreground">Expected annual rainfall</p>
              </div>
            </div>

            <div className="bg-secondary/10 border-l-4 border-secondary p-4 rounded-lg flex gap-3">
              <Info className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold text-foreground/80 mb-1">Knowledge-Based AI:</p>
                <p className="text-muted-foreground">
                  Our system analyzes soil nutrients, climate conditions, and agricultural best practices to recommend the most suitable crops for your farm.
                </p>
              </div>
            </div>

            {error && (
              <div className="bg-destructive/10 border-l-4 border-destructive p-4 rounded-lg">
                <p className="text-destructive">{error}</p>
              </div>
            )}

            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary hover:bg-primary/90"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Sprout className="w-5 h-5 mr-2" />
                  Get Crop Recommendations
                </>
              )}
            </Button>
          </form>

          {/* Results Section */}
          {results && (
            <div className="space-y-6 border-t pt-8">
              <h2 className="text-2xl font-bold text-center mb-6">Recommended Crops for Your Farm</h2>

              {/* Soil Analysis */}
              <Card className="p-6 bg-muted/30">
                <h3 className="font-bold text-lg mb-4">Soil Analysis</h3>
                <div className="grid md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Nitrogen</p>
                    <p className="font-bold text-lg capitalize">{results.soilAnalysis.nitrogen}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phosphorus</p>
                    <p className="font-bold text-lg capitalize">{results.soilAnalysis.phosphorus}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Potassium</p>
                    <p className="font-bold text-lg capitalize">{results.soilAnalysis.potassium}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">pH Level</p>
                    <p className="font-bold text-lg">{results.soilAnalysis.ph}</p>
                    <p className="text-xs text-muted-foreground">{results.soilAnalysis.interpretation}</p>
                  </div>
                </div>
              </Card>

              {/* Crop Recommendations */}
              <div className="grid gap-4">
                {results.recommendations.map((crop: any, index: number) => (
                  <Card key={index} className={`p-6 ${index === 0 ? 'border-2 border-primary bg-primary/10' : ''}`}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold">{crop.crop}</h3>
                          {index === 0 && (
                            <Badge className="bg-primary">Best Match</Badge>
                          )}
                          <Badge variant="outline" className="ml-auto">
                            {crop.suitability}% Match
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-4">{crop.reason}</p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-primary" />
                            <span className="text-sm">
                              <strong>Expected Yield:</strong> {crop.expectedYield}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-secondary" />
                            <span className="text-sm">
                              <strong>Growth Period:</strong> {crop.growthPeriod}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  )
}
