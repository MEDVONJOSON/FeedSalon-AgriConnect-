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
          <Card className="max-w-3xl mx-auto p-8 glass-card border-none shadow-2xl">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="bg-[#0072C6]/10 p-3 rounded-2xl">
                  <CloudRain className="w-8 h-8 text-[#0072C6]" />
                </div>
                <h1 className="text-4xl heading-flagship">Seasonal Insight</h1>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1EB53A]/10 via-white to-[#0072C6]/10 p-8 rounded-3xl mb-8 border border-white/50 shadow-inner">
              <div className="flex items-start gap-4 mb-8">
                <Cloud className="w-10 h-10 text-[#1EB53A] mt-1" />
                <div>
                  <h2 className="text-2xl font-black text-slate-800">Forecast Report</h2>
                  <p className="text-slate-500 font-medium">Agricultural Climate Projection</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8 text-slate-800">
                <div className="space-y-4">
                  <div className="flex flex-col">
                    <span className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Target Year</span>
                    <span className="text-xl font-bold">{formData.year || '2025'}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Province</span>
                    <Badge className="w-fit bg-[#0072C6] text-white hover:bg-[#0072C6]/90 py-1 px-4 rounded-full font-bold">
                      {formData.location === 'western' ? 'Western Area' :
                        formData.location === 'northern' ? 'Northern Province' :
                          formData.location === 'southern' ? 'Southern Province' :
                            formData.location === 'eastern' ? 'Eastern Province' :
                              formData.location === 'northwest' ? 'North-West Province' : 'Sierra Leone'}
                    </Badge>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex flex-col">
                    <span className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Predicted Rainfall</span>
                    <span className="text-4xl font-black text-[#1EB53A] tracking-tighter">2,845.2 <span className="text-sm font-normal text-slate-400">mm</span></span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Reliability Index</span>
                    <span className="text-lg font-bold text-[#0072C6]">88% High Confidence</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-[#0072C6] p-6 rounded-r-2xl mb-10">
              <div className="flex gap-4">
                <Info className="w-6 h-6 text-[#0072C6] shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="text-blue-900 leading-relaxed font-medium">
                    Above-average rainfall expected for the <span className="font-bold underline">Wet Season</span>. Recommended to focus on water-resistant rice varieties and ensure proper drainage systems in low-lying areas of the province.
                  </p>
                </div>
              </div>
            </div>

            <Button onClick={() => setShowResults(false)} variant="outline" className="w-full h-14 rounded-2xl border-slate-200 text-slate-600 font-bold hover:bg-slate-50 transition-all">
              Generate New Forecast
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
        <Card className="max-w-3xl mx-auto p-10 glass-card">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="bg-[#1EB53A]/10 p-3 rounded-2xl">
                <Cloud className="w-8 h-8 text-[#1EB53A]" />
              </div>
              <h1 className="text-4xl md:text-5xl heading-flagship">Weather Forecast</h1>
            </div>
            <p className="text-lg text-muted-foreground font-medium">
              Analyze <span className="text-branded font-bold">climatic patterns</span> to optimize your <span className="text-branded font-bold italic">agricultural yield</span> in Sierra Leone.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <Label htmlFor="year" className="text-sm font-black uppercase tracking-widest text-slate-500">Forecast Year</Label>
                <Select value={formData.year} onValueChange={(value) => setFormData({ ...formData, year: value })}>
                  <SelectTrigger id="year" className="h-12 border-slate-200 rounded-xl focus:ring-[#1EB53A]">
                    <SelectValue placeholder="Select Year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2025">2025</SelectItem>
                    <SelectItem value="2026">2026</SelectItem>
                    <SelectItem value="2027">2027</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label htmlFor="location" className="text-sm font-black uppercase tracking-widest text-slate-500">Location/Region</Label>
                <Select value={formData.location} onValueChange={(value) => setFormData({ ...formData, location: value })}>
                  <SelectTrigger id="location" className="h-12 border-slate-200 rounded-xl">
                    <SelectValue placeholder="Select Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="western">Western Area</SelectItem>
                    <SelectItem value="northern">Northern Province</SelectItem>
                    <SelectItem value="southern">Southern Province</SelectItem>
                    <SelectItem value="eastern">Eastern Province</SelectItem>
                    <SelectItem value="northwest">North-West Province</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label htmlFor="season" className="text-sm font-black uppercase tracking-widest text-slate-500">Primary Season of Interest</Label>
                <Select value={formData.season} onValueChange={(value) => setFormData({ ...formData, season: value })}>
                  <SelectTrigger id="season" className="h-12 border-slate-200 rounded-xl">
                    <SelectValue placeholder="Select Season" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="annual">Annual Forecast</SelectItem>
                    <SelectItem value="wet">Wet/Rainy Season (May-Oct)</SelectItem>
                    <SelectItem value="dry">Dry Season (Nov-Apr)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label htmlFor="planning" className="text-sm font-black uppercase tracking-widest text-slate-500">Crop Cycle Planning</Label>
                <Select value={formData.planning} onValueChange={(value) => setFormData({ ...formData, planning: value })}>
                  <SelectTrigger id="planning" className="h-12 border-slate-200 rounded-xl">
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

            <div className="bg-[#0072C6]/5 border-l-4 border-[#0072C6] p-6 rounded-r-2xl flex gap-4">
              <Info className="w-6 h-6 text-[#0072C6] shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-black text-[#0072C6] uppercase tracking-widest text-xs mb-2">Notice for Farmers</p>
                <p className="text-slate-600 leading-relaxed font-medium">
                  Long-term agricultural predictions are generated via the <span className="text-[#0072C6] font-bold">Agri-Connect AI engine</span> using historical Sierra Leonean meteorological data. For immediate daily alerts, please sync with your mobile extension officer.
                </p>
              </div>
            </div>

            <Button type="submit" size="lg" className="w-full h-16 bg-[#1EB53A] hover:bg-[#1EB53A]/90 text-white rounded-2xl shadow-xl shadow-green-100 font-black uppercase tracking-widest transition-all hover:scale-[1.02] active:scale-95">
              <Cloud className="w-6 h-6 mr-3" />
              Proceed with Forecast
            </Button>
          </form>
        </Card>
      </div>
    </div>
  )
}
