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
import { Beaker as Flask, Leaf, Droplets, Zap, Info, Lightbulb, Calendar, AlertTriangle, ShieldCheck, Download, RefreshCw, BarChart3 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

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
      <div className="min-h-screen bg-slate-50/50">
        <Navigation />

        <div className="bg-[#0072C6] pt-32 pb-24 relative overflow-hidden border-b-4 border-[#1EB53A]">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 blur-[120px] rounded-full translate-x-1/2"></div>
          <div className="container mx-auto px-4 relative z-10">
            <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-md px-6 py-1.5 mb-6 font-black uppercase tracking-widest text-[10px]">
              Technical Diagnostic Result
            </Badge>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase whitespace-pre-line">
              Nutrient <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 underline decoration-[#1EB53A] underline-offset-8">Mandate</span>
            </h1>
            <div className="flex items-center gap-3 text-blue-100 font-bold">
              <Flask className="w-5 h-5 text-[#1EB53A]" />
              <span className="uppercase tracking-widest text-[11px]">Calculated for: {formData.cropType || 'Maize'}</span>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16 -mt-12 relative z-20">
          <Card className="max-w-5xl mx-auto p-12 border-none bg-white rounded-[3.5rem] shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 p-12 opacity-10">
              <BarChart3 className="w-32 h-32" />
            </div>

            <div className="grid lg:grid-cols-3 gap-10 mb-12">
              {[
                { label: 'NITROGEN (N)', val: '120', sub: 'Growth Accelerator', icon: Leaf, color: 'text-[#1EB53A]', bg: 'bg-[#1EB53A]/10' },
                { label: 'PHOSPHORUS (P)', val: '46', sub: 'Root Integrity', icon: Zap, color: 'text-amber-500', bg: 'bg-amber-500/10' },
                { label: 'POTASSIUM (K)', val: '39', sub: 'Stress Resistance', icon: Droplets, color: 'text-[#0072C6]', bg: 'bg-[#0072C6]/10' },
              ].map((nut, i) => (
                <div key={i} className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 text-center space-y-4">
                  <div className={`w-16 h-16 rounded-2xl ${nut.bg} ${nut.color} flex items-center justify-center mx-auto transition-transform hover:scale-110`}>
                    <nut.icon className="w-8 h-8" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{nut.label}</p>
                    <p className="text-5xl font-black text-slate-900 tracking-tighter">{nut.val}<span className="text-sm ml-1 text-slate-400">KG/Ha</span></p>
                    <p className="text-[10px] font-bold text-slate-400 italic">{nut.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 bg-slate-900 text-white rounded-[2.5rem] shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="w-5 h-5 text-[#1EB53A]" />
                  <h3 className="text-lg font-black uppercase tracking-tight">Application Protocol</h3>
                </div>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">BASAL PHASE</p>
                    <p className="text-sm font-medium">40% Nitrogen & Potassium. 100% Phosphorus at planting.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">MID PHASE (25 DAYS)</p>
                    <p className="text-sm font-medium">40% Top-dress application for vegetative mass.</p>
                  </div>
                </div>
              </Card>

              <div className="space-y-6">
                <div className="p-8 bg-amber-50 rounded-[2.5rem] border border-amber-100">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0" />
                    <div className="space-y-4">
                      <h4 className="text-sm font-black text-amber-900 uppercase tracking-widest">Scientific Advisory</h4>
                      <ul className="space-y-2 text-xs text-amber-800/80 font-bold leading-relaxed">
                        <li className="flex items-start gap-2">• Avoid application during high-velocity rainfall.</li>
                        <li className="flex items-start gap-2">• Ensure soil moisture is above 15% for optimal uptake.</li>
                        <li className="flex items-start gap-2">• Digital recommendation pending field verification.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button onClick={() => setShowResults(false)} variant="outline" className="flex-1 h-16 rounded-2xl border-slate-200 font-black uppercase tracking-widest text-[10px] hover:bg-slate-50 transition-all">
                    <RefreshCw className="w-4 h-4 mr-2" /> Recalculate
                  </Button>
                  <Button className="flex-1 h-16 bg-[#1EB53A] text-white hover:bg-slate-800 rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl transition-all">
                    <Download className="w-4 h-4 mr-2" /> Export Audit
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50/50">
      <Navigation />

      <div className="bg-[#0072C6] pt-32 pb-24 relative overflow-hidden border-b-4 border-[#1EB53A]">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 blur-[120px] rounded-full translate-x-1/2"></div>
        <div className="container mx-auto px-4 relative z-10">
          <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-md px-6 py-1.5 mb-6 font-black uppercase tracking-widest text-[10px]">
            precision agricultural standard
          </Badge>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter leading-none">
            Inputs <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 underline decoration-[#1EB53A] underline-offset-8">Calculator</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl font-medium leading-relaxed">
            Strategic nutrient auditing for <span className="text-white font-bold italic underline decoration-white/20">Feed Salone</span> directives. Optimized for Sierra Leone's climatic zones.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 -mt-12 relative z-20">
        <Card className="max-w-4xl mx-auto p-12 border-none bg-white rounded-[3.5rem] shadow-2xl relative overflow-hidden">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center">
              <Flask className="w-7 h-7 text-[#0072C6]" />
            </div>
            <div>
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">Diagnostic Panel</h2>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Mandatory Field Entry</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-2">
                <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Target Commodity</Label>
                <Select value={formData.cropType} onValueChange={(value) => setFormData({ ...formData, cropType: value })}>
                  <SelectTrigger className="h-14 border-slate-100 bg-slate-50/50 rounded-xl font-bold focus:ring-[#0072C6]">
                    <SelectValue placeholder="Select Crop Type" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl border-slate-100">
                    <SelectItem value="Onion">Onion</SelectItem>
                    <SelectItem value="Maize">Maize</SelectItem>
                    <SelectItem value="Rice">Rice</SelectItem>
                    <SelectItem value="Wheat">Wheat</SelectItem>
                    <SelectItem value="Tomato">Tomato</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Rainfall Threshold (MM)</Label>
                <Input
                  type="number"
                  placeholder="e.g. 1200"
                  value={formData.rainfall}
                  onChange={(e) => setFormData({ ...formData, rainfall: e.target.value })}
                  className="h-14 border-slate-100 bg-slate-50/50 rounded-xl font-bold focus:ring-[#0072C6]"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Climatic Soil Type</Label>
                <Select value={formData.soilType} onValueChange={(value) => setFormData({ ...formData, soilType: value })}>
                  <SelectTrigger className="h-14 border-slate-100 bg-slate-50/50 rounded-xl font-bold focus:ring-[#0072C6]">
                    <SelectValue placeholder="Select Soil Type" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl border-slate-100">
                    <SelectItem value="sandy">Sandy Soil</SelectItem>
                    <SelectItem value="loamy">Loamy Soil</SelectItem>
                    <SelectItem value="clay">Clay Soil</SelectItem>
                    <SelectItem value="silt">Silt Soil</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Operational Area (Ha)</Label>
                <Input
                  type="number"
                  step="0.1"
                  placeholder="1.0"
                  value={formData.fieldSize}
                  onChange={(e) => setFormData({ ...formData, fieldSize: e.target.value })}
                  className="h-14 border-slate-100 bg-slate-50/50 rounded-xl font-bold focus:ring-[#0072C6]"
                />
              </div>
            </div>

            <div className="p-8 bg-[#1EB53A]/5 rounded-[2.5rem] border border-[#1EB53A]/10 flex gap-6 items-center">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0">
                <ShieldCheck className="w-8 h-8 text-[#1EB53A]" />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">DATA VERIFICATION</p>
                <p className="text-sm font-bold text-slate-600 leading-relaxed">
                  Algorithm calibrated against <span className="text-[#0072C6] font-black italic">SLARI Database 2024</span>. For baseline production mandates only.
                </p>
              </div>
            </div>

            <Button type="submit" size="lg" className="h-20 w-full bg-[#0072C6] text-white hover:bg-slate-800 rounded-[2rem] font-black uppercase tracking-widest text-[13px] shadow-2xl transition-all group overflow-hidden">
              <div className="relative z-10 flex items-center justify-center gap-3">
                <BarChart3 className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Initiate Recommendation Sequence
              </div>
              <div className="absolute top-0 left-0 w-1/3 h-full bg-white/5 skew-x-12 -translate-x-full group-hover:translate-x-[400%] transition-transform duration-1000"></div>
            </Button>
          </form>
        </Card>
      </div>
    </div>
  )
}

