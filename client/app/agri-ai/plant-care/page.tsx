'use client'

import { Navigation } from '@/components/navigation'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Leaf, Recycle, Wind, Droplets, ArrowRight, ShieldCheck } from 'lucide-react'

export default function PlantCarePage() {
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
                                <Leaf className="w-3 h-3" />
                                SUSTAINABLE KNOWLEDGE BASE
                            </Badge>
                        </div>
                        <h1 className="text-6xl font-black text-white mb-6 leading-tight select-none">Plant Care & Eco-Farming</h1>
                        <p className="text-xl text-white/80 font-medium max-w-2xl mb-12">
                            Advanced methodologies for <span className="text-white font-black underline decoration-2 underline-offset-4">sustainable yields</span> and regenerative practices for the Sierra Leonean ecosystem.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Button className="h-14 px-8 bg-white text-[#1EB53A] hover:bg-white/90 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl active:scale-95 transition-all">
                                Download Field Guides
                            </Button>
                            <Button className="h-14 px-8 bg-[#0072C6] border border-white/10 text-white hover:bg-slate-800 rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl active:scale-95 transition-all">
                                Join Workshop
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-20">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 mb-20">
                        {/* Section 1: Eco-Farming Practices */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-3 px-1 mb-2">
                                <ShieldCheck className="w-6 h-6 text-[#1EB53A]" />
                                <h2 className="text-2xl font-black text-slate-900">National Eco-Strategies</h2>
                            </div>

                            <Card className="p-10 border-none shadow-2xl rounded-[2.5rem] bg-white group hover:-translate-y-1 transition-all">
                                <div className="bg-[#1EB53A]/10 p-4 rounded-2xl w-fit mb-6 group-hover:bg-[#1EB53A] group-hover:text-white transition-all">
                                    <Recycle className="w-8 h-8 text-[#1EB53A] group-hover:text-white" />
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4">Organic Composting</h3>
                                <p className="text-slate-600 font-medium mb-8 leading-relaxed">
                                    Convert institutional farm waste into premium nutrient-rich fertilizer using localized decomposition techniques.
                                </p>
                                <Button className="w-full h-12 bg-[#0072C6] hover:bg-[#1base-3A] text-white rounded-xl font-black uppercase tracking-widest text-[10px] transition-all">
                                    View Field Guide <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </Card>

                            <Card className="p-10 border-none shadow-2xl rounded-[2.5rem] bg-white group hover:-translate-y-1 transition-all">
                                <div className="bg-amber-100 p-4 rounded-2xl w-fit mb-6 group-hover:bg-amber-500 group-hover:text-white transition-all">
                                    <Wind className="w-8 h-8 text-amber-600 group-hover:text-white" />
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4">Integrated Pest Control</h3>
                                <p className="text-slate-600 font-medium mb-8 leading-relaxed">
                                    Utilize beneficial biological agents and barrier cropping to eliminate chemical pesticide dependency.
                                </p>
                                <Button className="w-full h-12 bg-[#0072C6] hover:bg-amber-500 text-white rounded-xl font-black uppercase tracking-widest text-[10px] transition-all">
                                    Learn Bio-Defense <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </Card>
                        </div>

                        {/* Section 2: Resource Conservation */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-3 px-1 mb-2">
                                <Droplets className="w-6 h-6 text-[#0072C6]" />
                                <h2 className="text-2xl font-black text-slate-900">Resource Stewardship</h2>
                            </div>

                            <Card className="p-10 border-none shadow-2xl rounded-[2.5rem] bg-white group hover:-translate-y-1 transition-all">
                                <div className="bg-[#0072C6]/10 p-4 rounded-2xl w-fit mb-6 group-hover:bg-[#0072C6] group-hover:text-white transition-all">
                                    <Droplets className="w-8 h-8 text-[#0072C6] group-hover:text-white" />
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4">Water-Smart Irrigation</h3>
                                <p className="text-slate-600 font-medium mb-8 leading-relaxed">
                                    Implement gravity-fed drip systems and rain harvesting to maximize hydration efficiency by 65%.
                                </p>
                                <Button className="w-full h-12 bg-[#0072C6] hover:bg-[#0072C6] text-white rounded-xl font-black uppercase tracking-widest text-[10px] transition-all">
                                    Explore Hydrology <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </Card>

                            <Card className="p-10 border-none shadow-2xl rounded-[2.5rem] bg-white group hover:-translate-y-1 transition-all">
                                <div className="bg-[#1EB53A]/10 p-4 rounded-2xl w-fit mb-6 group-hover:bg-[#1EB53A] group-hover:text-white transition-all">
                                    <Leaf className="w-8 h-8 text-[#1EB53A] group-hover:text-white" />
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-4">Soil Regeneration</h3>
                                <p className="text-slate-600 font-medium mb-8 leading-relaxed">
                                    Adopt zero-tillage and cover cropping to sequester carbon and restore provincial soil vitality.
                                </p>
                                <Button className="w-full h-12 bg-[#0072C6] hover:bg-[#1base-3A] text-white rounded-xl font-black uppercase tracking-widest text-[10px] transition-all">
                                    Restoration Manual <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </Card>
                        </div>
                    </div>

                    {/* Global Eco CTA */}
                    <Card className="p-12 border-none shadow-2xl rounded-[3rem] bg-[#0072C6] text-white relative overflow-hidden text-center">
                        <div className="absolute top-0 left-0 w-64 h-64 bg-[#1EB53A]/20 blur-[100px] rounded-full"></div>
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#0072C6]/20 blur-[100px] rounded-full"></div>
                        <div className="relative z-10">
                            <h2 className="text-4xl font-black mb-6">Join the Green Revolution</h2>
                            <p className="text-white/60 font-medium mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
                                Contribute to a sustainable Sierra Leone. Every regenerative practice helps secure our nation's food future.
                            </p>
                            <Button className="h-16 px-12 bg-[#1EB53A] hover:bg-[#1EB53A]/90 text-white rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl active:scale-95 transition-all">
                                Certification Enrollment
                            </Button>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}
