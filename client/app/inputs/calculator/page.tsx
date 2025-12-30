'use client'

import { useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Flag as Flask, Leaf, Droplets, Zap, Info, Lightbulb, Calendar, AlertTriangle } from 'lucide-react'

export default function FertilizerGuidePage() {
  const [formData, setFormData] = useState({
    cropType: '',
    rainfall: '',
    soilType: '',
    fieldSize: '',
    growthStage: '',
    soilPh: ''
  })
  const [showResults, setShowResults] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowResults(true)
  }

  if (showResults) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />

        <div className="container mx-auto px-4 py-12">
          <Card className="max-w-4xl mx-auto p-8">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Flask className="w-6 h-6 text-primary" />
                </div>
                <h1 className="text-3xl font-bold text-primary">Fertilizer Recommendation for {formData.cropType || 'Maize'}</h1>
              </div>
            </div>

            {/* NPK Values */}
            <div className="grid md:grid-cols-3 gap-6 mb-8 bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-lg">
              <div className="text-center">
                <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-3">
                  <Leaf className="w-8 h-8 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground mb-1">Nitrogen (N)</p>
                <p className="text-4xl font-bold text-primary mb-1">120</p>
                <p className="text-sm text-muted-foreground">kg/ha</p>
              </div>

              <div className="text-center">
                <div className="bg-warning/10 p-3 rounded-full w-fit mx-auto mb-3">
                  <Zap className="w-8 h-8 text-warning" />
                </div>
                <p className="text-sm text-muted-foreground mb-1">Phosphorus (P)</p>
                <p className="text-4xl font-bold text-warning mb-1">46</p>
                <p className="text-sm text-muted-foreground">kg/ha</p>
              </div>

              <div className="text-center">
                <div className="bg-secondary/10 p-3 rounded-full w-fit mx-auto mb-3">
                  <Droplets className="w-8 h-8 text-secondary" />
                </div>
                <p className="text-sm text-muted-foreground mb-1">Potassium (K)</p>
                <p className="text-4xl font-bold text-secondary mb-1">39</p>
                <p className="text-sm text-muted-foreground">kg/ha</p>
              </div>
            </div>

            {/* Application Schedule */}
            <div className="mb-6">
              <div className="bg-primary text-primary-foreground p-3 rounded-t-lg flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <h3 className="font-semibold">Application Schedule</h3>
              </div>
              <div className="bg-card border border-t-0 rounded-b-lg p-4">
                <p className="text-foreground">
                  40% N&K basal, 40% at 25 days, 20% at 45 days. All P basal.
                </p>
              </div>
            </div>

            {/* Important Notes */}
            <div className="bg-warning/10 border-l-4 border-warning p-4 rounded-lg">
              <div className="flex gap-3">
                <AlertTriangle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-semibold text-warning-foreground mb-2">Important Notes:</p>
                  <ul className="list-disc list-inside space-y-1 text-warning-foreground/80">
                    <li>These are general recommendations. Always conduct soil testing for precise nutrient levels.</li>
                    <li>Split application reduces nutrient loss and improves crop uptake efficiency.</li>
                    <li>Consider organic alternatives like compost (5-10 tons/ha) to improve soil health.</li>
                    <li>Weather conditions may affect application timing. Avoid applying before heavy rainfall.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-4">
              <Button onClick={() => setShowResults(false)} variant="outline" className="flex-1">
                New Recommendation
              </Button>
              <Button className="flex-1 bg-primary hover:bg-primary/90">
                Download Report
              </Button>
            </div>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-12">
        <Card className="max-w-3xl mx-auto p-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Flask className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-3xl font-bold">Fertilizer Recommendation</h1>
            </div>
            <p className="text-muted-foreground">
              Get personalized NPK recommendations for optimal crop nutrition
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="cropType">
                  Crop Type <span className="text-destructive">*</span>
                </Label>
                <Select value={formData.cropType} onValueChange={(value) => setFormData({ ...formData, cropType: value })}>
                  <SelectTrigger id="cropType" className="border-primary/30">
                    <SelectValue placeholder="Select Crop Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Onion">Onion</SelectItem>
                    <SelectItem value="Maize">Maize</SelectItem>
                    <SelectItem value="Rice">Rice</SelectItem>
                    <SelectItem value="Wheat">Wheat</SelectItem>
                    <SelectItem value="Tomato">Tomato</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="rainfall">
                  Expected Annual Rainfall (mm) <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="rainfall"
                  type="number"
                  placeholder="e.g., 1200"
                  value={formData.rainfall}
                  onChange={(e) => setFormData({ ...formData, rainfall: e.target.value })}
                  className="border-primary/30"
                />
                <p className="text-xs text-muted-foreground">Enter expected or historical average rainfall</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="soilType">
                  Soil Type <span className="text-destructive">*</span>
                </Label>
                <Select value={formData.soilType} onValueChange={(value) => setFormData({ ...formData, soilType: value })}>
                  <SelectTrigger id="soilType">
                    <SelectValue placeholder="Select Soil Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sandy">Sandy Soil</SelectItem>
                    <SelectItem value="loamy">Loamy Soil</SelectItem>
                    <SelectItem value="clay">Clay Soil</SelectItem>
                    <SelectItem value="silt">Silt Soil</SelectItem>
                    <SelectItem value="red">Red Soil</SelectItem>
                    <SelectItem value="black">Black Soil</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="fieldSize">Field Size (hectares)</Label>
                <Input
                  id="fieldSize"
                  type="number"
                  step="0.1"
                  placeholder="1.0"
                  value={formData.fieldSize}
                  onChange={(e) => setFormData({ ...formData, fieldSize: e.target.value })}
                />
                <p className="text-xs text-muted-foreground">Used to calculate total fertilizer quantities</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="growthStage">Current Growth Stage</Label>
                <Select value={formData.growthStage} onValueChange={(value) => setFormData({ ...formData, growthStage: value })}>
                  <SelectTrigger id="growthStage">
                    <SelectValue placeholder="Select Stage" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="vegetative">Vegetative Growth</SelectItem>
                    <SelectItem value="flowering">Flowering</SelectItem>
                    <SelectItem value="fruiting">Fruiting</SelectItem>
                    <SelectItem value="maturity">Maturity</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="soilPh">Soil pH (if known)</Label>
                <Select value={formData.soilPh} onValueChange={(value) => setFormData({ ...formData, soilPh: value })}>
                  <SelectTrigger id="soilPh">
                    <SelectValue placeholder="Unknown" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="unknown">Unknown</SelectItem>
                    <SelectItem value="acidic">Acidic (&lt; 6.5)</SelectItem>
                    <SelectItem value="neutral">Neutral (6.5-7.5)</SelectItem>
                    <SelectItem value="alkaline">Alkaline (&gt; 7.5)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="bg-secondary/10 border-l-4 border-secondary/20 p-4 rounded-lg flex gap-3">
              <Lightbulb className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold text-secondary/90 mb-1">Quick Tip:</p>
                <p className="text-secondary/80">
                  For best results, conduct a soil test to determine exact nutrient levels. These recommendations provide general guidelines based on crop requirements and environmental factors.
                </p>
              </div>
            </div>

            <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              <Flask className="w-5 h-5 mr-2" />
              Generate Recommendation
            </Button>
          </form>
        </Card>
      </div>
    </div>
  )
}
