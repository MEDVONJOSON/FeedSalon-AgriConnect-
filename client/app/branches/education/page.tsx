'use client'

import { Navigation } from '@/components/navigation'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { GraduationCap, MapPin, Briefcase, Calendar, Search, Filter } from 'lucide-react'

export default function EducationPage() {
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
                <GraduationCap className="w-3 h-3" />
                ACADEMIC & FIELD PORTAL
              </Badge>
            </div>
            <h1 className="text-6xl font-black text-white mb-6 leading-tight select-none">Agri-Education Portal</h1>
            <p className="text-xl text-white/80 font-medium max-w-2xl mb-12">
              Connect with leading farms and agribusinesses for <span className="text-white font-black underline decoration-2 underline-offset-4">hands-on training</span>, professional internships, and national research opportunities.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button className="h-14 px-8 bg-white text-[#0072C6] hover:bg-white/90 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl active:scale-95 transition-all">
                Browse Internships
              </Button>
              <Button className="h-14 px-8 bg-[#1EB53A] border border-white/20 text-white hover:bg-[#1EB53A]/90 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl active:scale-95 transition-all">
                Post Opportunity
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Filter Sidebar */}
            <div className="w-full lg:w-1/3 space-y-8">
              <Card className="p-8 border-none shadow-2xl rounded-[2rem] bg-white sticky top-24">
                <div className="flex items-center gap-2 mb-8">
                  <Filter className="w-5 h-5 text-[#1EB53A]" />
                  <h3 className="font-black text-slate-900 uppercase tracking-widest text-xs">Refine Listings</h3>
                </div>

                <div className="space-y-8">
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 px-1">Regional District</label>
                    <select className="w-full h-14 px-4 bg-slate-50 border border-slate-100 rounded-xl font-bold text-slate-600 focus:ring-2 focus:ring-[#1EB53A] outline-none transition-all">
                      <option>All Districts</option>
                      <option>Bo District</option>
                      <option>Kenema District</option>
                      <option>Western Area</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 px-1">Opportunity Type</label>
                    <div className="space-y-3 px-1">
                      {[
                        { label: 'Farm Internship', color: '#1EB53A' },
                        { label: 'Research Assistant', color: '#0072C6' },
                        { label: 'Agri-Business Admin', color: '#F59E0B' }
                      ].map((type) => (
                        <label key={type.label} className="flex items-center gap-3 cursor-pointer group">
                          <input type="checkbox" className="w-5 h-5 rounded-lg border-slate-200 text-[#1EB53A] focus:ring-[#1EB53A]" />
                          <span className="text-sm font-bold text-slate-500 group-hover:text-slate-900 transition-colors">{type.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <Button className="w-full h-14 mt-8 bg-[#0072C6] text-white rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-slate-800 shadow-lg">
                  Reset Filters
                </Button>
              </Card>
            </div>

            {/* Opportunities Feed */}
            <div className="w-full lg:w-2/3 space-y-6">
              {[
                { title: 'Organic Farming Intern', farm: 'Green Valley Farms', loc: 'Bo District', dur: '3 Months', type: 'Paid', icon: '🌱' },
                { title: 'Livestock Management', farm: 'Salone Cattle Ranch', loc: 'Koinadugu', dur: '6 Months', type: 'Stipend', icon: '🐄' },
                { title: 'Rice Value Chain Research', farm: 'SLARI', loc: 'Rokupr', dur: '2 Months', type: 'Academic', icon: '🌾' },
                { title: 'Agro-Processing Asst', farm: 'Tropical Foods Ltd', loc: 'Freetown', dur: '4 Months', type: 'Paid', icon: '🏭' },
              ].map((job, i) => (
                <Card key={i} className="group p-8 border-none shadow-xl hover:shadow-2xl transition-all rounded-[2rem] bg-white border-l-8 border-l-[#1base-3A] hover:-translate-x-2" style={{ borderLeftColor: i % 2 === 0 ? '#1EB53A' : '#0072C6' }}>
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div className="text-3xl bg-slate-50 p-4 rounded-2xl group-hover:scale-110 transition-transform">{job.icon}</div>
                      <div>
                        <h3 className="text-2xl font-black text-slate-900 mb-1">{job.title}</h3>
                        <p className="font-bold text-[#1base-3A] flex items-center gap-2" style={{ color: i % 2 === 0 ? '#1EB53A' : '#0072C6' }}>
                          <Briefcase className="w-4 h-4" />
                          {job.farm}
                        </p>
                      </div>
                    </div>
                    <Badge className="bg-slate-100 text-slate-600 border-none font-black px-4 py-2 rounded-full text-[10px] uppercase tracking-widest">
                      {job.type}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pb-8 border-b border-slate-50">
                    <div className="flex items-center gap-3 text-sm font-bold text-slate-500">
                      <MapPin className="w-4 h-4 text-slate-300" />
                      {job.loc}
                    </div>
                    <div className="flex items-center gap-3 text-sm font-bold text-slate-500">
                      <Calendar className="w-4 h-4 text-slate-300" />
                      {job.dur}
                    </div>
                    <div className="flex items-center gap-3 text-sm font-bold text-slate-500">
                      <Briefcase className="w-4 h-4 text-slate-300" />
                      Full-time
                    </div>
                  </div>

                  <div className="mt-8 flex justify-end">
                    <Button className="h-12 px-8 bg-[#0072C6] hover:bg-[#1EB53A] text-white rounded-xl font-black uppercase tracking-widest text-[10px] transition-all group-hover:px-12">
                      Apply Now
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
