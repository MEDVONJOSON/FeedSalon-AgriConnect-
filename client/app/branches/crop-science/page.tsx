'use client'

import { Navigation } from '@/components/navigation'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Microscope, ClipboardList, BarChart2, Sprout, Database, Activity } from 'lucide-react'

export default function CropSciencePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Premium Gradient Header */}
      <div className="bg-gradient-to-r from-[#1EB53A] to-[#0072C6] pt-32 pb-20 relative overflow-hidden">
        {/* Dynamic Accents */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/10 blur-[100px] rounded-full translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-white/5 blur-[80px] rounded-full -translate-x-1/4"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-md px-4 py-1 flex items-center gap-2">
                <Microscope className="w-3 h-3" />
                NATIONAL CROP REGISTRY
              </Badge>
            </div>
            <h1 className="text-6xl font-black text-white mb-6 leading-tight select-none">Variety Trial Tracker</h1>
            <p className="text-xl text-white/80 font-medium max-w-2xl mb-12">
              Participate in <span className="text-white font-black italic underline decoration-2 underline-offset-4">Citizen Science</span> by logging the performance of new crop variants on your farm and accessing verified national trial data.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button className="h-14 px-8 bg-white text-[#1EB53A] hover:bg-white/90 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl active:scale-95 transition-all">
                Access Trial Database
              </Button>
              <Button className="h-14 px-8 bg-[#0072C6] border border-white/10 text-white hover:bg-slate-800 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl active:scale-95 transition-all">
                Register New Trial
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <Card className="p-10 border-none shadow-2xl rounded-[2.5rem] bg-white border-t-8 border-[#1EB53A]">
                <div className="flex items-center gap-3 mb-10">
                  <div className="bg-[#1EB53A]/10 p-3 rounded-xl">
                    <ClipboardList className="w-6 h-6 text-[#1EB53A]" />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900">Log New Observation</h2>
                </div>

                <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 px-1">Crop Variety TRIAL</label>
                      <select className="w-full h-14 px-4 bg-slate-50 border border-slate-100 rounded-xl font-bold text-slate-600 focus:ring-2 focus:ring-[#1EB53A] outline-none">
                        <option>NERICA Rice L-19</option>
                        <option>Cassava SLICASS-4</option>
                        <option>Maize DMR-ESR-W</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 px-1">Current Growth Stage</label>
                      <select className="w-full h-14 px-4 bg-slate-50 border border-slate-100 rounded-xl font-bold text-slate-600 focus:ring-2 focus:ring-[#1EB53A] outline-none">
                        <option>Germination</option>
                        <option>Vegetative</option>
                        <option>Flowering</option>
                        <option>Maturity</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 px-1">Performance Index (1-5)</label>
                    <div className="flex gap-4">
                      {[1, 2, 3, 4, 5].map((num) => (
                        <label key={num} className="flex-1 flex items-center justify-center h-14 border border-slate-100 rounded-xl cursor-pointer hover:bg-[#1EB53A]/5 transition-all font-black text-slate-400 has-[:checked]:bg-[#1EB53A] has-[:checked]:text-white">
                          <input type="radio" name="rating" className="hidden" />
                          <span>{num}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 px-1">Science Field Notes</label>
                    <textarea
                      className="w-full h-32 p-4 bg-slate-50 border border-slate-100 rounded-xl font-bold text-slate-600 focus:ring-2 focus:ring-[#1EB53A] outline-none"
                      placeholder="e.g. Observed high resistance to stem borers in heavy rain conditions..."
                    />
                  </div>

                  <Button className="w-full h-16 bg-[#1EB53A] hover:bg-[#1base-3A]/90 text-white rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl shadow-green-900/20 active:scale-95 transition-all">
                    Submit Scientific Log
                  </Button>
                </form>
              </Card>

              <Card className="p-10 border-none shadow-2xl rounded-[2.5rem] bg-slate-50 border-t-8 border-[#0072C6]">
                <div className="flex items-center justify-between mb-10">
                  <h2 className="text-2xl font-black text-slate-900">Community Trial Feed</h2>
                  <Database className="w-6 h-6 text-[#0072C6]" />
                </div>
                <div className="space-y-6">
                  {[
                    { variety: 'NERICA Rice L-19', location: 'Bo', yield: 'High', res: 'Good', rep: 'Mohamed K.', color: '#1EB53A' },
                    { variety: 'Cassava SLICASS-4', location: 'Kenema', yield: 'Very High', res: 'Critical', rep: 'Salone Co-op', color: '#0072C6' },
                    { variety: 'Maize DMR-ESR-W', location: 'Makeni', yield: 'Moderate', res: 'Fair', rep: 'Farm Tech', color: '#F59E0B' },
                  ].map((result, i) => (
                    <div key={i} className="p-6 bg-white border border-slate-100 rounded-[1.5rem] shadow-sm hover:shadow-md transition-all">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-black text-slate-900 text-lg mb-1">{result.variety}</h3>
                          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{result.location} Province</p>
                        </div>
                        <Badge className="bg-slate-50 text-slate-400 border-none font-black px-3 py-1 rounded-full text-[8px] uppercase tracking-widest">
                          Verified Log
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                        <div className="p-3 bg-slate-50/50 rounded-xl">
                          <p className="text-[9px] font-black text-slate-400 uppercase mb-1">Yield Index</p>
                          <span className="font-bold text-slate-700">{result.yield}</span>
                        </div>
                        <div className="p-3 bg-slate-50/50 rounded-xl">
                          <p className="text-[9px] font-black text-slate-400 uppercase mb-1">Resistance</p>
                          <span className="font-bold text-slate-700">{result.res}</span>
                        </div>
                      </div>
                      <div className="text-[10px] font-bold text-slate-400 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: result.color }}></div>
                        Logged by <span className="text-slate-900 font-black">{result.rep}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="p-8 border-none shadow-2xl rounded-[2rem] bg-[#0072C6] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#0072C6]/20 blur-2xl rounded-full"></div>
                <h3 className="font-black text-white mb-8 flex items-center gap-3">
                  <BarChart2 className="w-5 h-5 text-[#0072C6]" />
                  STATISTICAL LEADERS
                </h3>
                <div className="space-y-8">
                  {[
                    { label: 'SLICASS-4', val: '92%', color: '#1EB53A' },
                    { label: 'IP-12 Potato', val: '88%', color: '#0072C6' },
                    { label: 'NERICA L-19', val: '75%', color: '#F59E0B' }
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div className="flex justify-between text-xs font-black uppercase tracking-widest mb-3">
                        <span className="text-white/60">{stat.label}</span>
                        <span style={{ color: stat.color }}>{stat.val} Stability</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2.5 overflow-hidden">
                        <div className="h-full rounded-full transition-all duration-1000" style={{ width: stat.val, backgroundColor: stat.color }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-8 border-none shadow-2xl rounded-[2rem] bg-white group cursor-pointer hover:bg-[#1EB53A] transition-all duration-500">
                <div className="bg-[#1EB53A]/10 p-4 rounded-2xl w-fit mb-6 group-hover:bg-white group-hover:text-[#1EB53A] transition-all">
                  <Sprout className="w-8 h-8 text-[#1EB53A]" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-white transition-colors">Active Field Trials</h3>
                <p className="text-sm font-bold text-slate-500 mb-8 group-hover:text-white/80 transition-colors leading-relaxed">
                  Join ongoing national research trials to receive certified seed samples and technical institutional support.
                </p>
                <Button className="w-full h-14 bg-white border border-slate-100 text-[#1base-3A] group-hover:bg-[#0072C6] group-hover:text-white group-hover:border-slate-800 rounded-xl font-black uppercase tracking-widest text-[10px] shadow-lg">
                  View Trial Opps
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
