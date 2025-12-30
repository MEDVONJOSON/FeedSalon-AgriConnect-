'use client'

import { useState } from 'react'
import { Navigation } from '@/components/navigation'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Sprout, Activity, Calendar, TrendingUp, AlertTriangle, ClipboardList, ArrowLeft, BarChart3, Wind, Droplets } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function CropLivestockPage() {
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
                            <Activity className="w-3 h-3" />
                            INTEGRATED MANAGEMENT SYSTEMS
                        </Badge>
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tighter">
                            Farm <br />
                            <span className="text-white underline decoration-4 underline-offset-8 decoration-white/30">Intelligence</span>
                        </h1>
                        <p className="text-xl text-white/80 max-w-2xl font-medium leading-relaxed">
                            Comprehensive <span className="text-white font-bold italic underline decoration-white/20">technical workflows</span> for integrated crop and livestock optimization. Monitor health metrics, forecast yields, and manage herd dynamics.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 -mt-12 relative z-20 pb-24">
                <div className="max-w-6xl mx-auto">
                    <Link href="/agri-ai" className="inline-flex items-center gap-2 text-white font-black uppercase tracking-widest text-[10px] mb-8 bg-[#0072C6]/50 backdrop-blur-md px-6 py-3 rounded-xl hover:bg-[#0072C6] transition-all">
                        <ArrowLeft className="w-4 h-4" /> Back to AI Hub
                    </Link>

                    <Tabs defaultValue="herd-tracking" className="space-y-12">
                        <div className="bg-white p-2 rounded-[2rem] shadow-2xl inline-flex w-full overflow-x-auto">
                            <TabsList className="flex w-full h-auto bg-slate-50 rounded-[1.5rem] p-2 gap-2">
                                {[
                                    { id: "herd-tracking", label: "Herd Dynamics" },
                                    { id: "feed-optimization", label: "Feed formulation" },
                                    { id: "crop-rotation", label: "Rotation Cycle" },
                                    { id: "disease-prediction", label: "Pathogen Models" },
                                    { id: "analytics", label: "Growth Analytics" }
                                ].map((tab) => (
                                    <TabsTrigger
                                        key={tab.id}
                                        value={tab.id}
                                        className="flex-1 py-4 px-6 rounded-xl font-black uppercase tracking-widest text-[10px] data-[state=active]:bg-[#1EB53A] data-[state=active]:text-white data-[state=active]:shadow-lg transition-all"
                                    >
                                        {tab.label}
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                        </div>

                        <TabsContent value="herd-tracking">
                            <Card className="p-12 border-none bg-white rounded-[3rem] shadow-3xl">
                                <div className="flex items-center gap-6 mb-10 pb-10 border-b border-slate-50">
                                    <div className="w-16 h-16 bg-[#1EB53A]/10 rounded-2xl flex items-center justify-center">
                                        <Activity className="w-8 h-8 text-[#1EB53A]" />
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Active Herd Surveillance</h2>
                                        <p className="text-slate-400 font-medium">Real-time health telemetry & breeding cycle tracking</p>
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-3 gap-8 mb-10">
                                    <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 relative group overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#1EB53A]/5 blur-[40px] rounded-full group-hover:bg-[#1EB53A]/10 transition-colors"></div>
                                        <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Total Asset Count</h3>
                                        <p className="text-5xl font-black text-slate-900 tracking-tighter mb-2">1,245</p>
                                        <Badge className="bg-[#1EB53A]/10 text-[#1EB53A] border-none font-bold">+12 this cycle</Badge>
                                    </div>
                                    <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 relative group overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#0072C6]/5 blur-[40px] rounded-full group-hover:bg-[#0072C6]/10 transition-colors"></div>
                                        <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Health Index</h3>
                                        <p className="text-5xl font-black text-[#0072C6] tracking-tighter mb-2">98%</p>
                                        <p className="text-xs font-bold text-slate-500">24 requiring vet attention</p>
                                    </div>
                                    <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 relative group overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-[40px] rounded-full group-hover:bg-amber-500/10 transition-colors"></div>
                                        <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Breeding Active</h3>
                                        <p className="text-5xl font-black text-slate-900 tracking-tighter mb-2">45</p>
                                        <p className="text-xs font-bold text-slate-500">12 due this week</p>
                                    </div>
                                </div>
                                <Button className="w-full h-16 bg-[#0072C6] text-white hover:bg-[#1EB53A] rounded-[2rem] font-black uppercase tracking-widest text-xs shadow-xl transition-all active:scale-95 group">
                                    <ClipboardList className="w-5 h-5 mr-3 group-hover:text-yellow-300 transition-colors" />
                                    Log New Veterinary Record
                                </Button>
                            </Card>
                        </TabsContent>

                        <TabsContent value="feed-optimization">
                            <Card className="p-12 border-none bg-white rounded-[3rem] shadow-3xl">
                                <div className="flex items-center gap-6 mb-10 pb-10 border-b border-slate-50">
                                    <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center">
                                        <ClipboardList className="w-8 h-8 text-amber-500" />
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Feed Efficiency Models</h2>
                                        <p className="text-slate-400 font-medium">AI-driven nutritional formulation for maximum yield</p>
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-12">
                                    <div className="space-y-6">
                                        <h3 className="text-[11px] font-black text-slate-900 uppercase tracking-[0.3em]">Current Formulas</h3>
                                        <div className="space-y-4">
                                            {[
                                                { label: "Dairy Cattle (Lactating)", value: "Mix A-24" },
                                                { label: "Poultry (Layers)", value: "Layer Mash Pro" }
                                            ].map((item, i) => (
                                                <div key={i} className="flex justify-between items-center p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                                    <span className="font-bold text-slate-700">{item.label}</span>
                                                    <Badge variant="outline" className="font-mono bg-white text-slate-900 border-slate-200">{item.value}</Badge>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="space-y-6">
                                        <h3 className="text-[11px] font-black text-slate-900 uppercase tracking-[0.3em]">AI Optimization</h3>
                                        <div className="p-8 border-2 border-dashed border-[#1EB53A] bg-[#1EB53A]/5 rounded-[2rem]">
                                            <p className="text-sm font-medium text-slate-700 mb-6 leading-relaxed">
                                                <span className="font-black text-[#1EB53A] uppercase tracking-wider block mb-2">Algorithm Suggestion:</span>
                                                Increase protein content in Mix A-24 by <strong className="text-slate-900">2.4%</strong> to counteract predicted thermal stress effects on milk yield.
                                            </p>
                                            <Button size="lg" className="w-full bg-[#1EB53A] text-white hover:bg-[#1base-3A]/90 hover:shadow-lg rounded-xl font-black uppercase tracking-widest text-[10px]">Execute Formulation Change</Button>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </TabsContent>

                        <TabsContent value="crop-rotation">
                            <Card className="p-12 border-none bg-white rounded-[3rem] shadow-3xl">
                                <div className="flex items-center gap-6 mb-10 pb-10 border-b border-slate-50">
                                    <div className="w-16 h-16 bg-[#0072C6]/10 rounded-2xl flex items-center justify-center">
                                        <Calendar className="w-8 h-8 text-[#0072C6]" />
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Rotation Logic</h2>
                                        <p className="text-slate-400 font-medium">Strategic nitrogen fixation planning</p>
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-4 gap-4 items-center">
                                    <div className="p-8 border border-slate-100 bg-slate-50 rounded-[2.5rem] text-center aspect-square flex flex-col justify-center">
                                        <h4 className="font-black text-slate-400 text-xs uppercase tracking-widest mb-2">Sector A (Current)</h4>
                                        <p className="font-black text-2xl text-slate-900">Maize</p>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase mt-2">Days Remaining: 14</p>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <div className="w-12 h-1 border-t-4 border-slate-100 border-dashed"></div>
                                    </div>
                                    <div className="p-8 border-2 border-[#1EB53A] bg-[#1EB53A]/5 rounded-[2.5rem] text-center aspect-square flex flex-col justify-center shadow-lg relative overflow-hidden">
                                        <div className="absolute top-0 left-0 w-full h-1 bg-[#1EB53A]"></div>
                                        <h4 className="font-black text-[#1EB53A] text-xs uppercase tracking-widest mb-2">Sector A (Next)</h4>
                                        <p className="font-black text-2xl text-slate-900">Legumes</p>
                                        <p className="text-[10px] font-bold text-[#1EB53A] uppercase mt-2">Optimal: Nitrogen Fix</p>
                                    </div>
                                    <div className="flex items-center justify-center pl-8">
                                        <Button variant="outline" className="h-16 w-full border-2 border-slate-100 hover:bg-slate-50 rounded-2xl font-black uppercase tracking-widest text-[10px] text-slate-500" asChild>
                                            <Link href="/disease-detection">View Disease Risks</Link>
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        </TabsContent>

                        <TabsContent value="disease-prediction">
                            <Card className="p-12 border-none bg-white rounded-[3rem] shadow-3xl">
                                <div className="flex items-center gap-6 mb-10 pb-10 border-b border-slate-50">
                                    <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center">
                                        <AlertTriangle className="w-8 h-8 text-red-500" />
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Pathogen Forecasting</h2>
                                        <p className="text-slate-400 font-medium">Early warning system based on environmental telemetry</p>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-6 p-8 border-l-4 border-red-500 bg-red-50/50 rounded-r-[2rem]">
                                        <div className="p-3 bg-white rounded-xl shadow-sm">
                                            <AlertTriangle className="w-6 h-6 text-red-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-black text-red-600 text-lg uppercase tracking-tight mb-2">CRITICAL ALERT: Late Blight</h4>
                                            <p className="text-slate-600 font-medium text-sm leading-relaxed mb-4">High humidity (88%) and precipitation forecasts have created optimal vectors for Phytophthora infestans.</p>
                                            <Button size="sm" className="bg-red-600 text-white hover:bg-red-700 rounded-lg font-bold text-[10px] uppercase tracking-widest">Deploy Prevention Protocol</Button>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-6 p-8 border-l-4 border-[#1EB53A] bg-[#1EB53A]/5 rounded-r-[2rem]">
                                        <div className="p-3 bg-white rounded-xl shadow-sm">
                                            <Activity className="w-6 h-6 text-[#1EB53A]" />
                                        </div>
                                        <div>
                                            <h4 className="font-black text-[#1EB53A] text-lg uppercase tracking-tight mb-2">STABLE: Rust Pathogens</h4>
                                            <p className="text-slate-600 font-medium text-sm">Current aridity index inhibits rapid fungal sporulation.</p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </TabsContent>

                        <TabsContent value="analytics">
                            <Card className="p-12 border-none bg-white rounded-[3rem] shadow-3xl">
                                <div className="flex items-center gap-6 mb-10 pb-10 border-b border-slate-50">
                                    <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center">
                                        <TrendingUp className="w-8 h-8 text-indigo-600" />
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Farm Productivity Metrics</h2>
                                        <p className="text-slate-400 font-medium">Integrated data visualization for yield optimization</p>
                                    </div>
                                </div>
                                <div className="h-80 flex items-center justify-center border-2 border-dashed border-slate-200 rounded-[2.5rem] bg-slate-50 mb-10 relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-[url('/chart-pattern.svg')] opacity-5"></div>
                                    <div className="text-center z-10">
                                        <BarChart3 className="w-16 h-16 text-slate-300 mx-auto mb-4 group-hover:scale-110 transition-transform duration-500" />
                                        <p className="text-slate-400 font-black uppercase tracking-widest text-sm">Interactive Data Canvas</p>
                                        <p className="text-slate-300 text-xs mt-2">Connecting to Analytics Engine...</p>
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-3 gap-6">
                                    {[
                                        { label: "Yield Efficiency", value: "+15%", color: "text-[#1EB53A]" },
                                        { label: "Resource Usage", value: "-8.4%", color: "text-[#0072C6]" },
                                        { label: "Net Margin", value: "+12.2%", color: "text-slate-900" }
                                    ].map((metric, i) => (
                                        <div key={i} className="p-6 bg-slate-50 rounded-[2rem] text-center border border-slate-100 hover:shadow-lg transition-all">
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">{metric.label}</p>
                                            <p className={`text-4xl font-black tracking-tighter ${metric.color}`}>{metric.value}</p>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}
