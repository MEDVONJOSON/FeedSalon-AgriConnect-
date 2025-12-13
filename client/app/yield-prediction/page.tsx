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
import { TrendingUp } from 'lucide-react'

export default function YieldPredictionPage() {
  const [formData, setFormData] = useState({
    cropType: '',
    rainfall: '',
    pesticide: '',
    temperature: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle prediction logic
    alert('Yield prediction feature coming soon!')
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-12">
        <Card className="max-w-3xl mx-auto p-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="bg-primary/10 p-2 rounded-lg">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-3xl font-bold">Crop Yield Prediction</h1>
            </div>
            <p className="text-muted-foreground">
              Enter your farm conditions to get accurate yield predictions
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="cropType">Crop Type</Label>
                <Select value={formData.cropType} onValueChange={(value) => setFormData({ ...formData, cropType: value })}>
                  <SelectTrigger id="cropType">
                    <SelectValue placeholder="Select Crop" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rice">Rice</SelectItem>
                    <SelectItem value="wheat">Wheat</SelectItem>
                    <SelectItem value="maize">Maize</SelectItem>
                    <SelectItem value="cotton">Cotton</SelectItem>
                    <SelectItem value="sugarcane">Sugarcane</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="rainfall">Annual Rainfall (mm)</Label>
                <Input
                  id="rainfall"
                  type="number"
                  placeholder="e.g., 800"
                  value={formData.rainfall}
                  onChange={(e) => setFormData({ ...formData, rainfall: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="pesticide">Pesticide Usage (kg/ha)</Label>
                <Input
                  id="pesticide"
                  type="number"
                  placeholder="e.g., 150"
                  value={formData.pesticide}
                  onChange={(e) => setFormData({ ...formData, pesticide: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="temperature">Average Temperature (°C)</Label>
                <Input
                  id="temperature"
                  type="number"
                  placeholder="e.g., 25"
                  value={formData.temperature}
                  onChange={(e) => setFormData({ ...formData, temperature: e.target.value })}
                />
              </div>
            </div>

            <Button type="submit" size="lg" className="w-full bg-success hover:bg-success/90 text-success-foreground">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              Predict Yield
            </Button>
          </form>
        </Card>
      </div>
    </div>
  )
}
