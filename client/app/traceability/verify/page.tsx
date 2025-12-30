'use client'

import { Navigation } from '@/components/navigation'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { useState } from 'react'
import { Eye, Camera, Scan, Package, MapPin, Clock, CheckCircle, TrendingUp, Shield, User, Search, Fingerprint, Share2 } from 'lucide-react'

export default function VerifyProductPage() {
  const [verified, setVerified] = useState(false)

  const journeyData = {
    id: 'BC-SL-12345678',
    crop: 'Rice (NERICA)',
    quantity: '500 kg',
    farmer: 'John Kamara',
    farmName: 'Kamara Family Farm',
    origin: 'Bo District, Kakua Chiefdom',
    harvestDate: '2025-01-10',
    certifications: ['Organic Certified', 'Blockchain Verified', 'National Standard'],
    chain: [
      {
        handler: 'Farmer',
        name: 'John Kamara',
        organization: 'Kamara Family Farm',
        location: 'Bo District',
        date: '2025-01-10',
        time: '08:00 AM',
        action: 'Harvested and registered',
        condition: 'Excellent',
        icon: <Package className="w-5 h-5" />
      },
      {
        handler: 'Aggregator',
        name: 'Mohamed Sesay',
        organization: 'Bo Aggregation Center',
        location: 'Bo City',
        date: '2025-01-11',
        time: '10:30 AM',
        action: 'Quality check and registration',
        condition: 'Excellent',
        icon: <TrendingUp className="w-5 h-5" />
      },
      {
        handler: 'Processor',
        name: 'Abdul Rahman',
        organization: 'Sierra Leone Rice Mill',
        location: 'Bo City',
        date: '2025-01-12',
        time: '09:00 AM',
        action: 'Milled and packaged',
        condition: 'Good',
        icon: <Shield className="w-5 h-5" />
      },
      {
        handler: 'Retailer',
        name: 'Fatmata Bangura',
        organization: 'Fresh Market Freetown',
        location: 'Freetown',
        date: '2025-01-14',
        time: '02:00 PM',
        action: 'Received for retail',
        condition: 'Good',
        icon: <User className="w-5 h-5" />
      }
    ]
  }

  const handleVerify = () => {
    setVerified(true)
  }

  if (!verified) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />

        {/* Premium Gradient Header */}
        <div className="bg-gradient-to-r from-[#1EB53A] to-[#0072C6] pt-32 pb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/10 blur-[100px] rounded-full translate-x-1/2 text-white"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-md px-4 py-1 flex items-center gap-2">
                  <Fingerprint className="w-3 h-3" />
                  SECURE TRACEABILITY NODE
                </Badge>
              </div>
              <h1 className="text-6xl md:text-7xl font-black text-white mb-8 leading-tight">Verify Product Journey</h1>
              <p className="text-xl text-white/80 font-medium max-w-2xl mx-auto">
                Institutional <span className="text-white font-black underline decoration-2 underline-offset-4">Blockchain Traceability</span> for every harvest. Know your food's origin, handler, and state.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-20 -mt-12 relative z-20 max-w-2xl">
          <Card className="p-10 border-none shadow-2xl rounded-[3rem] bg-white text-center">
            <div className="bg-slate-50 p-10 rounded-full w-40 h-40 mx-auto mb-10 flex items-center justify-center border border-slate-100 group hover:bg-[#1EB53A] transition-all duration-500">
              <Eye className="w-16 h-16 text-[#1EB53A] group-hover:text-white transition-colors" />
            </div>
            <h2 className="text-3xl font-black text-slate-900 mb-4">Consumer Verification</h2>
            <p className="text-slate-500 font-bold mb-12 uppercase tracking-widest text-xs">Scan or enter ID to unlock history</p>

            <div className="space-y-6">
              <Button className="w-full h-16 bg-[#1EB53A] hover:bg-[#1base-3A]/90 text-white rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl transition-all" onClick={handleVerify}>
                <Camera className="w-5 h-5 mr-3" /> Scan QR Code
              </Button>

              <div className="relative py-4">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-slate-100" />
                </div>
                <div className="relative flex justify-center text-[10px] uppercase font-black tracking-[0.3em]">
                  <span className="bg-white px-4 text-slate-300">Manual Entry</span>
                </div>
              </div>

              <div className="text-left space-y-4">
                <Label htmlFor="batch-id" className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Network Batch Identifier</Label>
                <div className="flex gap-3">
                  <Input id="batch-id" placeholder="BC-SL-12345678" className="h-14 font-mono font-bold bg-slate-50 border-slate-100 rounded-xl" />
                  <Button onClick={handleVerify} className="h-14 px-6 bg-[#0072C6] text-white rounded-xl">
                    <Search className="w-5 h-5" />
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
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="bg-gradient-to-r from-[#1EB53A] to-[#0072C6] pt-32 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/10 text-white border border-white/20 text-sm font-black uppercase tracking-widest mb-6 backdrop-blur-md">
            <CheckCircle className="w-5 h-5 text-[#1EB53A]" />
            SECURE & AUTHENTIC PRODUCE
          </div>
          <h1 className="text-6xl font-black mb-4">Product Genesis</h1>
          <p className="text-white/60 font-medium">Blockchain-Verified Institutional Supply Chain</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 -mt-12 relative z-20 max-w-5xl">
        {/* Product Summary */}
        <Card className="p-10 mb-16 border-none shadow-2xl rounded-[3rem] bg-white">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100 flex-shrink-0">
              <div className="w-40 h-40 bg-white rounded-2xl flex items-center justify-center p-4 shadow-sm">
                {/* Generated QR Placeholder */}
                <div className="w-full h-full bg-[#0072C6] rounded-lg flex items-center justify-center text-white font-mono text-[8px] text-center p-2 break-all opacity-80">
                  {journeyData.id}
                </div>
              </div>
            </div>

            <div className="flex-1">
              <h2 className="text-4xl font-black text-slate-900 mb-8">{journeyData.crop}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Batch ID</p>
                  <p className="font-mono font-black text-slate-700">{journeyData.id}</p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Quantity</p>
                  <p className="font-black text-slate-700">{journeyData.quantity}</p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Farmer</p>
                  <p className="font-black text-slate-700">{journeyData.farmer}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Regional Origin</p>
                  <p className="font-black text-slate-700">{journeyData.origin}</p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Handled By</p>
                  <p className="font-black text-slate-700">{journeyData.chain.length} Verified Nodes</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-10">
                {journeyData.certifications.map((cert, idx) => (
                  <Badge key={idx} className="bg-slate-50 text-slate-400 border-none font-black px-4 py-1.5 rounded-full text-[8px] uppercase tracking-widest">
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Supply Chain Timeline */}
        <div className="mb-20 px-4 md:px-12">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-1 w-12 bg-[#1EB53A]"></div>
            <h2 className="text-3xl font-black text-slate-900">Supply Chain Journey</h2>
          </div>

          <div className="relative space-y-12">
            <div className="absolute left-10 top-0 bottom-0 w-1 bg-slate-50" />

            {journeyData.chain.map((step, idx) => (
              <div key={idx} className="relative pl-24 group">
                <div className="absolute left-0 top-0 w-20 h-20 rounded-[1.5rem] bg-white shadow-xl border border-slate-50 flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-500">
                  <div className="text-[#1EB53A] group-hover:text-[#0072C6] transition-colors">{step.icon}</div>
                </div>

                <Card className="p-8 border-none shadow-xl rounded-[2.5rem] bg-white hover:shadow-2xl transition-all">
                  <div className="flex flex-col md:flex-row justify-between mb-8 pb-6 border-b border-slate-50">
                    <div>
                      <Badge className="bg-slate-50 text-slate-400 border-none font-black px-3 py-1 rounded-full text-[8px] uppercase tracking-widest mb-3">
                        {step.handler}
                      </Badge>
                      <h3 className="text-2xl font-black text-slate-900">{step.organization}</h3>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{step.name}</p>
                    </div>
                    <div className="text-left md:text-right mt-4 md:mt-0">
                      <p className="text-xl font-black text-slate-900">{step.date}</p>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{step.time}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-slate-400" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Location</p>
                        <p className="font-bold text-slate-700">{step.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-[#1EB53A]" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Condition</p>
                        <p className="font-bold text-[#1EB53A]">{step.condition}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <p className="text-sm font-bold text-slate-600"><span className="text-slate-400 font-black uppercase text-[10px] tracking-widest mr-3">Certified Action:</span> {step.action}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Global Security CTA */}
        <Card className="p-12 border-none shadow-2xl rounded-[3rem] bg-[#0072C6] text-white text-center relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#0072C6]/20 blur-[100px] rounded-full"></div>
          <div className="relative z-10">
            <Shield className="w-16 h-16 text-[#1EB53A] mx-auto mb-8" />
            <h2 className="text-4xl font-black mb-6">Institutional Grade Security</h2>
            <div className="grid md:grid-cols-4 gap-8 mb-12 text-center">
              {['Blockchain Verified', 'Timestamp Locked', 'Secure Handlers', 'Identity Matched'].map((t) => (
                <div key={t} className="space-y-2">
                  <div className="w-2 h-2 rounded-full bg-[#1EB53A] mx-auto mb-3"></div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-white/60">{t}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-4 justify-center">
              <Button className="h-16 px-12 bg-[#1EB53A] hover:bg-[#1base-3A]/90 text-white rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl transition-all" onClick={() => setVerified(false)}>
                Verify Another
              </Button>
              <Button variant="outline" className="h-16 px-12 border-white/20 text-white hover:bg-white/10 rounded-2xl font-black uppercase tracking-widest text-sm transition-all">
                <Share2 className="w-5 h-5 mr-3" /> Export Journey
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
