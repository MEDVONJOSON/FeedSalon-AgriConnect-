'use client'

import { Navigation } from '@/components/navigation'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'
import { Package, MapPin, Calendar, Loader2, ShieldCheck, QrCode, ArrowLeft, Download, Printer, Plus, Globe, Zap, Users } from 'lucide-react'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'

export default function RegisterProducePage() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [qrGenerated, setQrGenerated] = useState(false)
  const [batchId, setBatchId] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsGenerating(true)
    setTimeout(() => {
      const id = 'BC' + Date.now().toString().slice(-8)
      setBatchId(id)
      setIsGenerating(false)
      setQrGenerated(true)
    }, 2000)
  }

  if (qrGenerated) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />

        {/* Success Header */}
        <div className="bg-[#1EB53A] pt-32 pb-24 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-[2rem] flex items-center justify-center mx-auto mb-8 animate-bounce">
              <ShieldCheck className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4 uppercase tracking-tighter">Registration Confirmed</h1>
            <p className="text-xl text-white/80 font-medium">Batch asset has been permanently indexed on the national blockchain.</p>
          </div>
        </div>

        <div className="container mx-auto px-4 -mt-12 relative z-20 pb-24">
          <Card className="max-w-3xl mx-auto p-12 border-none bg-white rounded-[3rem] shadow-3xl text-center">
            <p className="text-xs font-black text-slate-400 uppercase tracking-[0.4em] mb-8">Generated Cryptographic Identifier</p>

            {/* Elite QR Terminal */}
            <div className="bg-slate-50 p-12 rounded-[2.5rem] border-2 border-dashed border-slate-200 mb-10 group transition-all hover:bg-white hover:border-[#1EB53A]/30">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1EB53A] to-[#0072C6] opacity-0 group-hover:opacity-10 transition-opacity blur-2xl rounded-full"></div>
                <img
                  src={`/qr-code-.jpg?height=200&width=200&query=QR+Code+${batchId}`}
                  alt="QR Code"
                  className="w-56 h-56 mx-auto relative z-10 shadow-xl rounded-2xl p-2 bg-white"
                />
              </div>
              <div className="mt-8 space-y-2">
                <p className="text-3xl font-black text-slate-900 tracking-[0.2em] font-mono">{batchId}</p>
                <Badge className="bg-[#1EB53A]/10 text-[#1EB53A] border-none font-black text-[9px] px-4 py-1.5 rounded-full uppercase tracking-widest">VERIFIED_SECURE_NODE</Badge>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-10">
              <Button className="h-16 bg-[#0072C6] text-white hover:bg-slate-800 rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl transition-all active:scale-95">
                <Download className="w-4 h-4 mr-3" /> Secure Download (.SVG)
              </Button>
              <Button variant="outline" className="h-16 border-2 border-slate-100 bg-white hover:bg-slate-50 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all">
                <Printer className="w-4 h-4 mr-3" /> Execute Batch Printing
              </Button>
            </div>

            <div className="p-8 bg-indigo-50/50 rounded-[2rem] border border-indigo-100 mb-12 text-left flex gap-6 items-start">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0">
                <Zap className="w-6 h-6 text-indigo-600" />
              </div>
              <p className="text-slate-600 font-medium text-sm leading-relaxed">
                <strong className="text-slate-900 font-black">Next Protocol Step:</strong> Affix this identifier to the physical produce batch. Supply chain nodes will perform validation scans at every transit coordinate.
              </p>
            </div>

            <div className="flex gap-4">
              <Button asChild variant="ghost" className="flex-1 h-14 rounded-2xl font-black uppercase tracking-widest text-[10px] text-slate-400">
                <Link href="/traceability">Return to Hub</Link>
              </Button>
              <Button asChild className="flex-1 h-16 bg-[#1EB53A] text-white hover:bg-[#1base-3A]/90 rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-2xl transition-all" onClick={() => setQrGenerated(false)}>
                <Link href="/traceability/register">Register New Asset</Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    )
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
              <Package className="w-3 h-3" />
              NEW ASSET REGISTRY
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tighter">
              Asset <br />
              <span className="text-white underline decoration-4 underline-offset-8 decoration-white/30">Registry</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl font-medium leading-relaxed">
              Synthesizing a blockchain-verified <span className="text-white font-bold italic underline decoration-white/20">Digital Twin</span> for your physical harvest batch. Ensure accurate metadata entry for national transparency compliance.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 -mt-12 relative z-20 pb-24">
        <div className="max-w-4xl mx-auto">
          <Link href="/traceability" className="inline-flex items-center gap-2 text-white font-black uppercase tracking-widest text-[10px] mb-8 bg-[#0072C6]/50 backdrop-blur-md px-6 py-3 rounded-xl hover:bg-[#0072C6] transition-all">
            <ArrowLeft className="w-4 h-4" /> Back to System Hub
          </Link>

          <Card className="p-12 border-none bg-white rounded-[3rem] shadow-3xl">
            <form onSubmit={handleSubmit} className="space-y-12">

              {/* Farmer Registry Node */}
              <div className="space-y-8">
                <h2 className="text-[11px] font-black text-slate-900 uppercase tracking-[0.4em] flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1EB53A]/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-[#1EB53A]" />
                  </div>
                  ORIGIN NODE (PRODUCER)
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Authorized Registrant Name</Label>
                    <Input className="h-14 rounded-2xl border-slate-100 bg-slate-50 font-bold px-6" required />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Entity Identifier (Farm Name)</Label>
                    <Input className="h-14 rounded-2xl border-slate-100 bg-slate-50 font-bold px-6" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Secure Contact Protocol (Phone)</Label>
                    <Input type="tel" className="h-14 rounded-2xl border-slate-100 bg-slate-50 font-bold px-6" required />
                  </div>
                </div>
              </div>

              {/* Produce Specification Node */}
              <div className="space-y-8 pt-12 border-t border-slate-50">
                <h2 className="text-[11px] font-black text-slate-900 uppercase tracking-[0.4em] flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0072C6]/10 flex items-center justify-center">
                    <Package className="w-5 h-5 text-[#0072C6]" />
                  </div>
                  COMMODITY PARAMETERS
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Sector Taxonomy (Crop)</Label>
                    <Input className="h-14 rounded-2xl border-slate-100 bg-slate-50 font-bold px-6" placeholder="e.g., Rice, Cassava" required />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Genetic Variety / Strain</Label>
                    <Input className="h-14 rounded-2xl border-slate-100 bg-slate-50 font-bold px-6" placeholder="e.g., NERICA-L2" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Total volume</Label>
                      <Input type="number" className="h-14 rounded-2xl border-slate-100 bg-slate-50 font-bold px-6" required />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Unit Measure</Label>
                      <Input className="h-14 rounded-2xl border-slate-100 bg-slate-50 font-bold px-6" placeholder="e.g. Bags" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Harvest Date Protocol</Label>
                    <Input type="date" className="h-14 rounded-2xl border-slate-100 bg-slate-50 font-bold px-6" required />
                  </div>
                </div>
              </div>

              {/* Geographical & Qualitative Data */}
              <div className="space-y-8 pt-12 border-t border-slate-50">
                <h2 className="text-[11px] font-black text-slate-900 uppercase tracking-[0.4em] flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-amber-500" />
                  </div>
                  SPATIAL & QUALITY DATA
                </h2>
                <div className="space-y-8">
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Origin Coordinates (District/Village)</Label>
                    <Input className="h-14 rounded-2xl border-slate-100 bg-slate-50 font-bold px-6" required />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Qualitative Analysis Notes</Label>
                    <Textarea
                      className="rounded-[2rem] border-slate-100 bg-slate-50 font-medium p-8"
                      placeholder="Specify cultivation methodology, organic status, or storage conditions..."
                      rows={4}
                    />
                  </div>

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      { id: 'organic', label: 'Organic' },
                      { id: 'fairtrade', label: 'Fair Trade' },
                      { id: 'gmp', label: 'GMP' },
                      { id: 'pesticide', label: 'Pesticide Free' }
                    ].map((cert) => (
                      <div key={cert.id} className="group relative">
                        <input type="checkbox" id={cert.id} className="peer hidden" />
                        <label htmlFor={cert.id} className="flex items-center justify-center gap-2 h-14 rounded-xl border-2 border-slate-50 bg-slate-50 text-[9px] font-black uppercase tracking-widest cursor-pointer transition-all peer-checked:bg-[#1base-3A]/10 peer-checked:border-[#1EB53A] peer-checked:text-[#1EB53A] hover:bg-white hover:border-slate-100">
                          {cert.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Execution Section */}
              <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row gap-4">
                <Button type="button" variant="ghost" className="flex-1 h-14 rounded-2xl font-black uppercase tracking-widest text-[10px] text-slate-400" asChild>
                  <Link href="/traceability">Abort Registration</Link>
                </Button>
                <Button type="submit" className="flex-1 h-20 bg-[#0072C6] text-white hover:bg-[#1base-3A] rounded-2xl font-black uppercase tracking-widest text-[11px] shadow-2xl transition-all active:scale-95 translate-y-[-10px]" disabled={isGenerating}>
                  {isGenerating ? (
                    <div className="flex items-center gap-3">
                      <Loader2 className="w-6 h-6 animate-spin" />
                      CRYPTO_SYNTHESIS
                    </div>
                  ) : (
                    <div className="flex items-center gap-4">
                      <Zap className="w-5 h-5 text-[#1EB53A]" />
                      GENERATE QR IDENTIFIER
                    </div>
                  )}
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </div>
  )
}
