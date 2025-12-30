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
import { TrendingUp, Calculator, CloudRain, Thermometer, Sprout, Droplets, Zap, ArrowLeft } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export default function YieldPredictionPage() {
  const [formData, setFormData] = useState({
    cropType: '',
    rainfall: '',
    pesticide: '',
    temperature: ''
  })

  // Simulated AI Logic
  const [prediction, setPrediction] = useState<number | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate complex calculation
    setTimeout(() => {
      const base = 2000
      const rand = Math.random() * 1000
      setPrediction(base + rand)
      setLoading(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Premium National Gradient Header */}
      <div className="bg-gradient-to-r from-[#1EB53A] to-[#0072C6] pt-32 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/10 blur-[100px] rounded-full translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-white/5 blur-[80px] rounded-full -translate-x-1/4"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-md px-4 py-1.5 mb-6 flex items-center gap-2 w-fit font-black uppercase tracking-widest text-[10px]">
              <TrendingUp className="w-3 h-3" />
              PREDICTIVE ANALYTICS ENGINE
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tighter">
              Yield <br />
              <span className="text-white underline decoration-4 underline-offset-8 decoration-white/30">Intelligence</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl font-medium leading-relaxed">
              Leverage <span className="text-white font-bold italic underline decoration-white/20">Algorithmic Forecasting</span> to estimate harvest output based on localized environmental variables.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 -mt-12 relative z-20 pb-24">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-8">

          {/* Input Terminal */}
          <div className="lg:w-2/3">
            <Link href="/agri-ai" className="inline-flex items-center gap-2 text-white font-black uppercase tracking-widest text-[10px] mb-8 bg-[#0072C6]/50 backdrop-blur-md px-6 py-3 rounded-xl hover:bg-[#0072C6] transition-all">
              <ArrowLeft className="w-4 h-4" /> Back to AI Hub
            </Link>

            <Card className="p-12 border-none bg-white rounded-[3rem] shadow-3xl">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center border border-amber-100">
                  <Calculator className="w-7 h-7 text-amber-500" />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Environmental Paramters</h2>
                  <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Input Local Data Points</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Target Commodity</Label>
                    <div className="relative">
                      <Select value={formData.cropType} onValueChange={(value) => setFormData({ ...formData, cropType: value })}>
                        <SelectTrigger className="h-16 rounded-2xl border-slate-100 bg-slate-50 font-bold px-6 text-base">
                          <SelectValue placeholder="Select Crop Classification" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="rice">Rice (NERICA/Local)</SelectItem>
                          <SelectItem value="wheat">Wheat</SelectItem>
                          <SelectItem value="maize">Maize (Corn)</SelectItem>
                          <SelectItem value="cotton">Cotton</SelectItem>
                          <SelectItem value="sugarcane">Sugarcane</SelectItem>
                          <SelectItem value="cassava">Cassava</SelectItem>
                        </SelectContent>
                      </Select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <Sprout className="w-5 h-5 text-slate-300" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Precipitation Index (mm)</Label>
                    <div className="relative">
                      <Input
                        type="number"
                        placeholder="e.g., 800"
                        value={formData.rainfall}
                        onChange={(e) => setFormData({ ...formData, rainfall: e.target.value })}
                        className="h-16 rounded-2xl border-slate-100 bg-slate-50 font-bold px-6 text-base"
                      />
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                        <CloudRain className="w-5 h-5 text-[#0072C6]" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Input Load (Pesticide kg/ha)</Label>
                    <div className="relative">
                      <Input
                        type="number"
                        placeholder="e.g., 150"
                        value={formData.pesticide}
                        onChange={(e) => setFormData({ ...formData, pesticide: e.target.value })}
                        className="h-16 rounded-2xl border-slate-100 bg-slate-50 font-bold px-6 text-base"
                      />
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                        <Droplets className="w-5 h-5 text-purple-400" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Thermal Average (°C)</Label>
                    <div className="relative">
                      <Input
                        type="number"
                        placeholder="e.g., 25"
                        value={formData.temperature}
                        onChange={(e) => setFormData({ ...formData, temperature: e.target.value })}
                        className="h-16 rounded-2xl border-slate-100 bg-slate-50 font-bold px-6 text-base"
                      />
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                        <Thermometer className="w-5 h-5 text-rose-400" />
                      </div>
                    </div>
                  </div>
                </div>

                <Button type="submit" className="w-full h-20 bg-[#1EB53A] hover:bg-[#1base-3A]/90 text-white rounded-[2rem] font-black uppercase tracking-widest text-xs shadow-2xl transition-all active:scale-95 group relative overflow-hidden" disabled={loading}>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  <span className="relative z-10 flex items-center justify-center gap-4">
                    {loading ? 'Computing Prediction Model...' : (
                      <>
                        <Zap className="w-6 h-6 group-hover:text-yellow-300 transition-colors" />
                        EXECUTE PREDICTION ALGORITHM
                      </>
                    )}
                  </span>
                </Button>
              </form>
            </Card>
          </div>

          {/* Results Sidebar */}
          <div className="lg:w-1/3">
            <Card className={`p-10 border-none rounded-[3rem] shadow-2xl h-full relative transition-all duration-500 ${prediction ? 'bg-[#0072C6] text-white' : 'bg-slate-50 text-slate-400'}`}>
              {!prediction ? (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-6 opacity-50">
                  <TrendingUp className="w-20 h-20" />
                  <p className="font-black uppercase tracking-widest text-sm">Awaiting Data Input...</p>
                </div>
              ) : (
                <div className="flex flex-col h-full animate-in fade-in zoom-in duration-500">
                  <div className="mb-auto">
                    <Badge className="bg-white/20 text-white border-none font-black text-[9px] uppercase tracking-widest px-4 py-1.5 mb-6">Algorithm Confidence: 94%</Badge>
                    <p className="text-[10px] font-black text-white/60 uppercase tracking-[0.3em] mb-2">Projected Output</p>
                    <div className="text-6xl font-black text-white tracking-tighter mb-2">{prediction.toFixed(0)}</div>
                    <p className="text-white/80 font-bold text-lg">Kilograms / Hectare</p>
                  </div>

                  <div className="space-y-6 pt-10 border-t border-white/10 mt-10">
                    <div className="p-4 bg-white/10 rounded-2xl">
                      <p className="text-[9px] font-black text-white/50 uppercase tracking-widest mb-1">Variance Analysis</p>
                      <p className="text-sm font-bold text-white">+12% vs National Average</p>
                    </div>
                    <Button className="w-full h-14 bg-white text-[#0072C6] hover:bg-white/90 rounded-2xl font-black uppercase tracking-widest text-[10px]">
                      Save to Farm Profile
                    </Button>
                  </div>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
