'use client'

import { Navigation } from '@/components/navigation'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'
import { Scan, Camera, Package, MapPin, CheckCircle, ArrowLeft, ShieldCheck, Truck, BarChart3, Clock, Zap } from 'lucide-react'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'

export default function ScanUpdatePage() {
  const [scanned, setScanned] = useState(false)
  const [updated, setUpdated] = useState(false)
  const [batchData, setBatchData] = useState({
    id: 'BC12345678',
    crop: 'Rice (NERICA)',
    quantity: '500 kg',
    farmer: 'John Kamara',
    origin: 'Bo District, Sierra Leone',
    harvestDate: '2025-01-10',
    currentHandlers: 2
  })

  const handleScan = () => {
    // Simulate QR scan
    setTimeout(() => {
      setScanned(true)
    }, 1500)
  }

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault()
    setUpdated(true)
  }

  if (updated) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />

        {/* Success Header */}
        <div className="bg-[#1EB53A] pt-32 pb-24 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-[2rem] flex items-center justify-center mx-auto mb-8 animate-bounce">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4 uppercase tracking-tighter">Chain Block Appended</h1>
            <p className="text-xl text-white/80 font-medium">Logistical verification successfully encrypted onto the master ledger.</p>
          </div>
        </div>

        <div className="container mx-auto px-4 -mt-12 relative z-20 pb-24">
          <Card className="max-w-2xl mx-auto p-12 border-none bg-white rounded-[3rem] shadow-3xl text-center">

            <div className="bg-slate-50 p-8 rounded-[2.5rem] mb-10 border border-slate-100">
              <p className="text-xs font-black text-slate-400 uppercase tracking-[0.4em] mb-4">BLOCKCHAIN HASH ID</p>
              <p className="text-2xl font-black text-slate-900 tracking-widest font-mono mb-2">{batchData.id}</p>
              <div className="flex items-center justify-center gap-2 text-[#1EB53A] font-bold text-sm">
                <Clock className="w-4 h-4" />
                Confirmed: {new Date().toLocaleString()}
              </div>
            </div>

            <p className="text-slate-500 font-medium mb-10 leading-relaxed px-4">
              The national supply chain network now reflects <strong className="text-slate-900">{batchData.currentHandlers + 1} verified node interactions</strong> for this commodity batch.
            </p>

            <div className="flex gap-4">
              <Button asChild variant="ghost" className="flex-1 h-16 rounded-2xl font-black uppercase tracking-widest text-[10px] text-slate-400 hover:bg-slate-50">
                <Link href="/traceability">Return to Hub</Link>
              </Button>
              <Button className="flex-1 h-16 bg-[#0072C6] text-white hover:bg-[#0072C6]/90 rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl transition-all active:scale-95" onClick={() => { setScanned(false); setUpdated(false); }}>
                Process Next Batch
              </Button>
            </div>
          </Card>
        </div>
      </div>
    )
  }

  if (!scanned) {
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
                <Scan className="w-3 h-3" />
                OPTICAL VALIDATION NODE
              </Badge>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tighter">
                Scan & <br />
                <span className="text-white underline decoration-4 underline-offset-8 decoration-white/30">Verify</span>
              </h1>
              <p className="text-xl text-white/80 max-w-2xl font-medium leading-relaxed">
                Initiate optical recognition protocol to link your logistical operations to the <span className="text-white font-bold italic underline decoration-white/20">National Traceability Grid</span>.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 -mt-12 relative z-20 pb-24">
          <div className="max-w-3xl mx-auto">
            <Link href="/traceability" className="inline-flex items-center gap-2 text-white font-black uppercase tracking-widest text-[10px] mb-8 bg-[#0072C6]/50 backdrop-blur-md px-6 py-3 rounded-xl hover:bg-[#0072C6] transition-all">
              <ArrowLeft className="w-4 h-4" /> Back to System Hub
            </Link>

            <Card className="p-12 border-none bg-white rounded-[3rem] shadow-3xl text-center relative overflow-hidden">
              <div className="bg-[#0072C6]/5 w-32 h-32 rounded-[2.5rem] flex items-center justify-center mx-auto mb-10 border border-[#0072C6]/10 animate-pulse">
                <Scan className="w-16 h-16 text-[#0072C6]" />
              </div>

              <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tighter">Engage Optical Sensor</h2>
              <p className="text-slate-500 font-medium mb-12 max-w-md mx-auto">Align the batch QR identifier within the scanning reticle or manually input the cryptographic hash.</p>

              <div className="space-y-6 max-w-md mx-auto">
                <Button className="w-full h-20 bg-[#0072C6] text-white hover:bg-[#0072C6] rounded-[2rem] font-black uppercase tracking-widest text-xs shadow-2xl transition-all active:scale-95 group" onClick={handleScan}>
                  <Camera className="w-6 h-6 mr-4 group-hover:animate-pulse" />
                  Activate Camera Feed
                </Button>

                <div className="relative py-4">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-slate-100" />
                  </div>
                  <div className="relative flex justify-center text-[10px] font-black uppercase tracking-widest">
                    <span className="bg-white px-4 text-slate-300">Alternate Input Method</span>
                  </div>
                </div>

                <div className="bg-slate-50 p-2 rounded-[2rem] border border-slate-100 flex gap-2">
                  <Input
                    id="batch-id"
                    placeholder="Enter Batch Hash ID (e.g. BC123...)"
                    className="h-14 border-none bg-transparent font-mono font-bold text-center text-lg placeholder:text-slate-300 focus-visible:ring-0"
                  />
                  <Button className="h-14 w-14 rounded-[1.5rem] bg-slate-200 text-slate-400 hover:bg-[#1EB53A] hover:text-white transition-all shadow-none" onClick={handleScan}>
                    <Scan className="w-6 h-6" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Premium National Gradient Header */}
      <div className="bg-gradient-to-r from-[#1EB53A] to-[#0072C6] pt-32 pb-48 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/10 blur-[100px] rounded-full translate-x-1/2"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-md px-4 py-1.5 mb-6 inline-flex items-center gap-2 font-black uppercase tracking-widest text-[10px]">
            <ShieldCheck className="w-3 h-3" />
            VERIFICATION PROTOCOL ACTIVE
          </Badge>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
            Logistical Update
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-32 relative z-20 pb-24">
        <div className="max-w-5xl mx-auto">

          {/* Batch Intelligence Card */}
          <Card className="p-8 border-none bg-[#0072C6] text-white rounded-[3rem] shadow-2xl mb-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#1EB53A]/20 blur-[80px] rounded-full"></div>
            <div className="w-24 h-24 rounded-[2rem] bg-white/10 flex items-center justify-center shrink-0 border border-white/5">
              <Package className="w-10 h-10 text-[#1EB53A]" />
            </div>
            <div className="flex-1 grid md:grid-cols-3 gap-8 relative z-10 w-full">
              <div>
                <p className="text-[9px] font-black text-white/40 uppercase tracking-widest mb-1">BATCH IDENTIFIER</p>
                <p className="text-xl font-black text-white tracking-widest font-mono">{batchData.id}</p>
              </div>
              <div>
                <p className="text-[9px] font-black text-white/40 uppercase tracking-widest mb-1">COMMODITY</p>
                <p className="text-xl font-bold text-white">{batchData.crop}</p>
              </div>
              <div>
                <p className="text-[9px] font-black text-white/40 uppercase tracking-widest mb-1">CURRENT VOLUME</p>
                <p className="text-xl font-bold text-[#1EB53A]">{batchData.quantity}</p>
              </div>
            </div>
          </Card>

          <Card className="p-12 border-none bg-white rounded-[3rem] shadow-3xl">
            <form onSubmit={handleUpdate} className="space-y-12">

              {/* Handler Identity Node */}
              <div className="space-y-8">
                <h2 className="text-[11px] font-black text-slate-900 uppercase tracking-[0.4em] flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0072C6]/10 flex items-center justify-center">
                    <Truck className="w-5 h-5 text-[#0072C6]" />
                  </div>
                  HANDLER IDENTITY
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Operational Role</Label>
                    <div className="relative">
                      <select className="w-full h-14 rounded-2xl border-slate-100 bg-slate-50 font-bold px-6 appearance-none" required>
                        <option value="">Select Role Classification...</option>
                        <option value="aggregator">Aggregator Hub</option>
                        <option value="processor">Processing Facility</option>
                        <option value="transporter">Logistics Provider</option>
                        <option value="wholesaler">Wholesale Distributor</option>
                        <option value="retailer">Retail Outlet</option>
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                        <ArrowLeft className="w-4 h-4 text-slate-400 -rotate-90" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Entity registered Name</Label>
                    <Input className="h-14 rounded-2xl border-slate-100 bg-slate-50 font-bold px-6" placeholder="e.g. Bo District Logistics Co." required />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Authorized Agent Name</Label>
                    <Input className="h-14 rounded-2xl border-slate-100 bg-slate-50 font-bold px-6" required />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Checkpoint Coordinates (Location)</Label>
                    <Input className="h-14 rounded-2xl border-slate-100 bg-slate-50 font-bold px-6" required />
                  </div>
                </div>
              </div>

              {/* Operational Data Node */}
              <div className="space-y-8 pt-12 border-t border-slate-50">
                <h2 className="text-[11px] font-black text-slate-900 uppercase tracking-[0.4em] flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-amber-500" />
                  </div>
                  OPERATIONAL METRICS
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Intake Timestamp</Label>
                    <Input type="date" className="h-14 rounded-2xl border-slate-100 bg-slate-50 font-bold px-6" required />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Asset Condition Index</Label>
                    <div className="relative">
                      <select className="w-full h-14 rounded-2xl border-slate-100 bg-slate-50 font-bold px-6 appearance-none" required>
                        <option value="excellent">Category A (Excellent)</option>
                        <option value="good">Category B (Good)</option>
                        <option value="fair">Category C (Fair)</option>
                        <option value="poor">Category D (Poor)</option>
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                        <ArrowLeft className="w-4 h-4 text-slate-400 -rotate-90" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Processing Actions Log</Label>
                    <Textarea
                      className="rounded-[2rem] border-slate-100 bg-slate-50 font-medium p-6"
                      placeholder="Detail any value-added processing, cleaning, or storage protocols applied..."
                      rows={3}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Storage Temp (°C)</Label>
                    <Input type="number" className="h-14 rounded-2xl border-slate-100 bg-slate-50 font-bold px-6" placeholder="25" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Storage Configuration</Label>
                    <div className="relative">
                      <select className="w-full h-14 rounded-2xl border-slate-100 bg-slate-50 font-bold px-6 appearance-none">
                        <option value="">Select Configuration...</option>
                        <option value="ambient">Ambient Warehouse</option>
                        <option value="refrigerated">Active Refrigeration</option>
                        <option value="cold-chain">Cold Chain Transit</option>
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                        <ArrowLeft className="w-4 h-4 text-slate-400 -rotate-90" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-12 border-t border-slate-100 flex gap-4">
                <Button type="button" variant="ghost" className="flex-1 h-16 rounded-2xl font-black uppercase tracking-widest text-[10px] text-slate-400 hover:bg-slate-50" onClick={() => setScanned(false)}>
                  Abort Protocol
                </Button>
                <Button type="submit" className="flex-[2] h-20 bg-[#1EB53A] text-white hover:bg-[#1base-3A]/90 rounded-[2rem] font-black uppercase tracking-widest text-xs shadow-2xl transition-all active:scale-95 translate-y-[-10px] group">
                  <Zap className="w-5 h-5 mr-3 group-hover:text-yellow-300 transition-colors" />
                  CONFIRM BLOCKCHAIN ENTRY
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </div>
  )
}
