'use client'

import { useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Cloud, Info, CloudRain } from 'lucide-react'

export default function WeatherForecastPage() {
  const [formData, setFormData] = useState({
    year: '',
    location: '',
    season: '',
    planning: ''
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
          <Card className="max-w-3xl mx-auto p-8">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="bg-info/10 p-2 rounded-lg">
                  <CloudRain className="w-6 h-6 text-info" />
                </div>
                <h1 className="text-3xl font-bold">Weather Forecast</h1>
              </div>
            </div>

            <div className="bg-gradient-to-br from-success/10 to-success/20 p-8 rounded-lg mb-6">
              <div className="flex items-start gap-3 mb-6">
                <Cloud className="w-8 h-8 text-success mt-1" />
                <h2 className="text-2xl font-bold text-success">Weather Forecast</h2>
              </div>

              <div className="space-y-3 text-foreground">
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Year:</span>
                  <span>{formData.year || '2027'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Location:</span>
                  <Badge className="bg-info text-info-foreground">West India</Badge>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Predicted Rainfall:</span>
                  <span className="text-xl font-bold text-success">1122.4 mm</span>
                </div>
              </div>
            </div>

            <div className="bg-info/10 border-l-4 border-info p-4 rounded-lg mb-6">
              <div className="flex gap-3">
                <Info className="w-5 h-5 text-info flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="text-info-foreground">
                    Normal rainfall expected. Good conditions for most crops.
                  </p>
                </div>
              </div>
            </div>

            <Button onClick={() => setShowResults(false)} variant="outline" className="w-full">
              New Forecast
            </Button>
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
              <div className="bg-info/10 p-2 rounded-lg">
                <Cloud className="w-6 h-6 text-info" />
              </div>
              <h1 className="text-3xl font-bold">Agricultural Weather Forecast</h1>
            </div>
            <p className="text-muted-foreground">
              Get weather predictions to plan your farming activities
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="year">Forecast Year</Label>
                <Select value={formData.year} onValueChange={(value) => setFormData({ ...formData, year: value })}>
                  <SelectTrigger id="year" className="border-info/30">
                    <SelectValue placeholder="Select Year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2025">2025</SelectItem>
                    <SelectItem value="2026">2026</SelectItem>
                    <SelectItem value="2027">2027</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location/Region</Label>
                <Select value={formData.location} onValueChange={(value) => setFormData({ ...formData, location: value })}>
                  <SelectTrigger id="location">
                    <SelectValue placeholder="Select Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="north">North India</SelectItem>
                    <SelectItem value="south">South India</SelectItem>
                    <SelectItem value="east">East India</SelectItem>
                    <SelectItem value="west">West India</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="season">Primary Season of Interest</Label>
                <Select value={formData.season} onValueChange={(value) => setFormData({ ...formData, season: value })}>
                  <SelectTrigger id="season">
                    <SelectValue placeholder="Select Season" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="annual">Annual Forecast</SelectItem>
                    <SelectItem value="kharif">Kharif Season</SelectItem>
                    <SelectItem value="rabi">Rabi Season</SelectItem>
                    <SelectItem value="zaid">Zaid Season</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="planning">Crop Cycle Planning</Label>
                <Select value={formData.planning} onValueChange={(value) => setFormData({ ...formData, planning: value })}>
                  <SelectTrigger id="planning">
                    <SelectValue placeholder="Select Planning" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Planning</SelectItem>
                    <SelectItem value="sowing">Sowing Period</SelectItem>
                    <SelectItem value="harvest">Harvest Period</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="bg-info/10 border-l-4 border-info p-4 rounded-lg flex gap-3">
              <Info className="w-5 h-5 text-info flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold text-info-foreground mb-1">Note:</p>
                <p className="text-info-foreground/80">
                  Weather predictions are based on historical patterns and climate models. For short-term forecasts (1-7 days), please refer to local meteorological services.
                </p>
              </div>
            </div>

            <Button type="submit" size="lg" className="w-full bg-success hover:bg-success/90 text-success-foreground">
              <Cloud className="w-5 h-5 mr-2" />
              Get Weather Forecast
            </Button>
          </form>
        </Card>
      </div>
    </div>
  )
}
