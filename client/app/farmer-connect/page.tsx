'use client'

import { useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Users, MessageCircle, GraduationCap, Handshake, ShoppingBag, ArrowRight, Plus, Info, Search, User, MapPin, Star, ShieldCheck } from 'lucide-react'
import Link from 'next/link'

export default function FarmerConnectPage() {
  const [location, setLocation] = useState('')
  const [cropInterest, setCropInterest] = useState('all')

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Premium Gradient Header */}
      <div className="bg-gradient-to-r from-[#1EB53A] to-[#0072C6] pt-32 pb-24 relative overflow-hidden">
        {/* Dynamic Accents */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/10 blur-[100px] rounded-full translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-white/5 blur-[80px] rounded-full -translate-x-1/4"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-md px-4 py-1 flex items-center gap-2">
                <Users className="w-3 h-3" />
                NATIONAL COOPERATIVE NETWORK
              </Badge>
            </div>
            <h1 className="text-6xl md:text-7xl font-black text-white mb-8 leading-tight">Farmer Connect</h1>
            <p className="text-xl text-white/80 font-medium max-w-2xl mx-auto mb-12">
              Join thousands of elite farmers sharing <span className="text-white font-black underline decoration-2 underline-offset-4">national expertise</span> and growing the future of Sierra Leone together.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button className="h-16 px-12 bg-white text-[#0072C6] hover:bg-white/90 rounded-[2rem] font-black uppercase tracking-widest text-sm shadow-2xl active:scale-95 transition-all">
                Join Community Hub
              </Button>
              <Button variant="outline" className="h-16 px-12 border-white/20 text-white hover:bg-white/10 rounded-[2rem] font-black uppercase tracking-widest text-sm backdrop-blur-md active:scale-95 transition-all">
                Ask Experts
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Institutional Statistics */}
      <div className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-6xl mx-auto text-center">
            <div>
              <p className="text-5xl font-black text-slate-900 mb-2">25K+</p>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Active Farmers</p>
            </div>
            <div>
              <p className="text-5xl font-black text-[#1EB53A] mb-2">15K+</p>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Solutions Verified</p>
            </div>
            <div>
              <p className="text-5xl font-black text-[#0072C6] mb-2">500+</p>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Certified Advisors</p>
            </div>
            <div>
              <p className="text-5xl font-black text-amber-500 mb-2">50+</p>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Chiefdoms Covered</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-24">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-none shadow-2xl rounded-[3rem] overflow-hidden bg-white">
            <div className="bg-[#0072C6] text-white p-10 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#1EB53A]/20 blur-[60px] rounded-full"></div>
              <div className="flex items-center justify-center gap-4 relative z-10">
                <MapPin className="w-8 h-8 text-[#1EB53A]" />
                <h2 className="text-3xl font-black">Regional Directory</h2>
              </div>
              <p className="text-white/40 text-xs font-bold uppercase tracking-widest mt-2">Find licensed specialists and local peers</p>
            </div>
            <div className="p-12">
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <Label htmlFor="location" className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Your Provincial District</Label>
                  <Input
                    id="location"
                    placeholder="Enter District (e.g., Bo, Kenema)"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="h-16 font-bold bg-slate-50 border-slate-100 rounded-2xl px-6"
                  />
                </div>
                <div className="space-y-4">
                  <Label htmlFor="crop-interest" className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Technical Specialization</Label>
                  <Select value={cropInterest} onValueChange={setCropInterest}>
                    <SelectTrigger className="h-16 font-bold bg-slate-50 border-slate-100 rounded-2xl px-6">
                      <SelectValue placeholder="All Commodities" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Commodities</SelectItem>
                      <SelectItem value="rice">Rice (NERICA)</SelectItem>
                      <SelectItem value="cassava">Cassava (High Yield)</SelectItem>
                      <SelectItem value="cocoa">Cocoa (Export Grade)</SelectItem>
                      <SelectItem value="palm">Oil Palm</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="text-center mt-12">
                <Button className="h-16 px-16 bg-[#1EB53A] hover:bg-[#1base-3A]/90 text-white rounded-[2rem] font-black uppercase tracking-widest text-sm shadow-xl active:scale-95 transition-all">
                  <Search className="w-5 h-5 mr-3" /> Execute Search
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[10px] font-black text-[#0072C6] uppercase tracking-[0.3em] mb-4">Latest Feed</p>
            <h2 className="text-5xl font-black text-slate-900 mb-4">Community Intelligence</h2>
            <p className="text-slate-500 font-medium">Real-time data sharing from the provincial fields</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              { title: "Wheat rust symptoms observed in Bo District...", author: "Mohamed K.", replies: 3, badge: "VERIFIED" },
              { title: "Organic bollworm control for cotton without...", author: "Fatmata B.", replies: 7, badge: "HOT TOPIC" },
              { title: "Groundnut fertilization strategies for sandy...", author: "Ibrahim S.", replies: 5, badge: "ADVICE" }
            ].map((post, i) => (
              <Card key={i} className="group p-10 border-none shadow-xl hover:shadow-2xl transition-all rounded-[2.5rem] bg-white hover:-translate-y-1">
                <Badge className="bg-slate-50 text-slate-400 border-none font-black px-3 py-1 rounded-full text-[8px] uppercase tracking-widest mb-6 group-hover:bg-[#1EB53A]/10 group-hover:text-[#1EB53A]">
                  {post.badge}
                </Badge>
                <h3 className="text-2xl font-black mb-6 text-slate-900 leading-tight group-hover:text-branded transition-colors">
                  {post.title}
                </h3>
                <div className="flex items-center gap-4 text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 px-1">
                  <div className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center">
                    <User className="w-3 h-3" />
                  </div>
                  {post.author}
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                  <span className="text-[10px] font-black text-[#1EB53A] uppercase tracking-widest">{post.replies} RESPONSES</span>
                  <ArrowRight className="w-5 h-5 text-slate-200 group-hover:text-slate-900 transition-colors" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Feature Ecosystem */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-slate-900 mb-6">Connective Ecosystem</h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-[#1EB53A] to-[#0072C6] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              { icon: MessageCircle, title: "Discussion Forum", desc: "Peer-to-peer knowledge transfer channel.", href: "/farmer-connect/forum", color: "#1EB53A" },
              { icon: GraduationCap, title: "Expert Academy", desc: "Direct access to research institutional leads.", href: "/farmer-connect/experts", color: "#0072C6" },
              { icon: Handshake, title: "Cooperatives", desc: "Unified regional farming clusters and unions.", href: "#", color: "#F59E0B" },
              { icon: ShoppingBag, title: "Trade Hub", desc: "B2B and direct consumer marketplace nodes.", href: "/farmer-connect/marketplace", color: "#1EB53A" }
            ].map((feat, i) => (
              <Card key={i} className="p-10 text-center hover:shadow-2xl transition-all border-none rounded-[2.5rem] bg-slate-50 group">
                <div className="p-6 rounded-[2rem] w-fit mx-auto mb-8 bg-white shadow-xl group-hover:scale-110 transition-transform" style={{ color: feat.color }}>
                  <feat.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-black mb-4 text-slate-900 uppercase tracking-wide">{feat.title}</h3>
                <p className="text-sm font-medium text-slate-500 mb-8 leading-relaxed">
                  {feat.desc}
                </p>
                <Link href={feat.href}>
                  <Button variant="link" className="text-slate-900 font-black uppercase tracking-widest text-[10px] flex items-center gap-2 group-hover:text-branded">
                    Access Portal <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Consultation Request */}
      <div className="py-24 bg-[#0072C6] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <Card className="max-w-4xl mx-auto border-none shadow-[0_40px_100px_-15px_rgba(0,0,0,0.5)] rounded-[3rem] overflow-hidden bg-white">
            <div className="bg-gradient-to-r from-[#1EB53A] to-[#0072C6] p-12 text-center text-white">
              <ShieldCheck className="w-16 h-16 mx-auto mb-6 text-white" />
              <h2 className="text-4xl font-black mb-4">Institutional Advisory</h2>
              <p className="text-white/70 font-medium">Request a dedicated formal review from Departmental Specialists</p>
            </div>
            <div className="p-12">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Full Identity</Label>
                  <Input className="h-14 font-bold bg-slate-50 border-slate-100 rounded-xl" />
                </div>
                <div className="space-y-4">
                  <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Province / District</Label>
                  <Input placeholder="Verification of location required" className="h-14 font-bold bg-slate-50 border-slate-100 rounded-xl" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Agricultural Sector</Label>
                  <Select>
                    <SelectTrigger className="h-14 font-bold bg-slate-50 border-slate-100 rounded-xl">
                      <SelectValue placeholder="Select Sector" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="crops">Crop Science</SelectItem>
                      <SelectItem value="livestock">Livestock</SelectItem>
                      <SelectItem value="aquaculture">Aquaculture</SelectItem>
                      <SelectItem value="forestry">Agro-Forestry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-4">
                  <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Subject Priority</Label>
                  <Select>
                    <SelectTrigger className="h-14 font-bold bg-slate-50 border-slate-100 rounded-xl">
                      <SelectValue placeholder="Standard Inquiry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="emergency">Emergency (Disease/Pest)</SelectItem>
                      <SelectItem value="standard">Technical Procedure</SelectItem>
                      <SelectItem value="funding">Grant & Subsidy</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-4 mb-12">
                <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Incident Report / Technical Query</Label>
                <textarea
                  className="w-full h-40 bg-slate-50 border-slate-100 rounded-[2rem] p-8 text-slate-700 font-medium outline-none focus:ring-2 ring-branded/20 transition-all"
                  placeholder="Provide comprehensive details for accurate specialist assessment..."
                />
              </div>
              <div className="text-center">
                <Button className="h-16 px-16 bg-[#0072C6] hover:bg-slate-800 text-white rounded-[2rem] font-black uppercase tracking-widest text-sm shadow-2xl active:scale-95 transition-all">
                  Submit Institutional Request
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
