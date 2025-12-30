"use client"

import { useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, ChevronLeft, ChevronRight, Sprout, CloudRain, Sun, Leaf, Clock, CloudDrizzle, AlignLeft } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function CropCalendarPage() {
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth())

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ]

    // Sierra Leone crop calendar data
    const cropActivities = {
        0: { // January - Dry Season
            season: 'Dry Season',
            icon: Sun,
            activities: [
                { crop: 'Rice', activity: 'Land Preparation', type: 'prep' },
                { crop: 'Cassava', activity: 'Harvesting', type: 'harvest' },
                { crop: 'Groundnut', activity: 'Harvesting', type: 'harvest' },
            ]
        },
        1: { // February
            season: 'Dry Season',
            icon: Sun,
            activities: [
                { crop: 'Vegetables', activity: 'Planting (Irrigated)', type: 'plant' },
                { crop: 'Sweet Potato', activity: 'Harvesting', type: 'harvest' },
            ]
        },
        2: { // March
            season: 'Dry Season',
            icon: Sun,
            activities: [
                { crop: 'Maize', activity: 'Land Preparation', type: 'prep' },
                { crop: 'Cassava', activity: 'Planting', type: 'plant' },
            ]
        },
        3: { // April
            season: 'Early Rainy Season',
            icon: CloudRain,
            activities: [
                { crop: 'Rice', activity: 'Planting (Upland)', type: 'plant' },
                { crop: 'Maize', activity: 'Planting', type: 'plant' },
                { crop: 'Groundnut', activity: 'Planting', type: 'plant' },
            ]
        },
        4: { // May - Rainy Season Begins
            season: 'Rainy Season',
            icon: CloudRain,
            activities: [
                { crop: 'Rice', activity: 'Planting (Lowland)', type: 'plant' },
                { crop: 'Sweet Potato', activity: 'Planting', type: 'plant' },
                { crop: 'Vegetables', activity: 'Planting', type: 'plant' },
            ]
        },
        5: { // June
            season: 'Rainy Season',
            icon: CloudRain,
            activities: [
                { crop: 'Rice', activity: 'Weeding & Fertilizing', type: 'care' },
                { crop: 'Maize', activity: 'Weeding', type: 'care' },
                { crop: 'Cassava', activity: 'Weeding', type: 'care' },
            ]
        },
        6: { // July
            season: 'Rainy Season',
            icon: CloudRain,
            activities: [
                { crop: 'Maize', activity: 'Harvesting (Early)', type: 'harvest' },
                { crop: 'Vegetables', activity: 'Harvesting', type: 'harvest' },
                { crop: 'Rice', activity: 'Pest Control', type: 'care' },
            ]
        },
        7: { // August
            season: 'Rainy Season',
            icon: CloudRain,
            activities: [
                { crop: 'Maize', activity: 'Harvesting', type: 'harvest' },
                { crop: 'Groundnut', activity: 'Harvesting', type: 'harvest' },
                { crop: 'Rice', activity: 'Flowering Stage', type: 'care' },
            ]
        },
        8: { // September
            season: 'Late Rainy Season',
            icon: CloudRain,
            activities: [
                { crop: 'Rice', activity: 'Harvesting (Upland)', type: 'harvest' },
                { crop: 'Sweet Potato', activity: 'Harvesting', type: 'harvest' },
            ]
        },
        9: { // October
            season: 'Late Rainy Season',
            icon: CloudRain,
            activities: [
                { crop: 'Rice', activity: 'Harvesting (Lowland)', type: 'harvest' },
                { crop: 'Cassava', activity: 'Harvesting (Early)', type: 'harvest' },
            ]
        },
        10: { // November - Dry Season Begins
            season: 'Early Dry Season',
            icon: Sun,
            activities: [
                { crop: 'Rice', activity: 'Post-Harvest Processing', type: 'care' },
                { crop: 'Vegetables', activity: 'Planting (Dry Season)', type: 'plant' },
            ]
        },
        11: { // December
            season: 'Dry Season',
            icon: Sun,
            activities: [
                { crop: 'Cassava', activity: 'Harvesting', type: 'harvest' },
                { crop: 'Groundnut', activity: 'Land Preparation', type: 'prep' },
            ]
        },
    }

    const currentMonth = cropActivities[selectedMonth as keyof typeof cropActivities]
    const SeasonIcon = currentMonth.icon

    const getActivityStyles = (type: string) => {
        switch (type) {
            case 'plant':
                return { color: 'text-[#1EB53A]', bg: 'bg-[#1EB53A]/10', border: 'border-[#1EB53A]/20', label: 'Planting Phase' }
            case 'harvest':
                return { color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-100', label: 'Harvest Cycle' }
            case 'care':
                return { color: 'text-[#0072C6]', bg: 'bg-[#0072C6]/10', border: 'border-[#0072C6]/20', label: 'Crop Care' }
            case 'prep':
                return { color: 'text-slate-600', bg: 'bg-slate-100', border: 'border-slate-200', label: 'Land Prep' }
            default:
                return { color: 'text-slate-500', bg: 'bg-slate-50', border: 'border-slate-100', label: 'General' }
        }
    }

    const nextMonth = () => {
        setSelectedMonth((prev) => (prev + 1) % 12)
    }

    const prevMonth = () => {
        setSelectedMonth((prev) => (prev - 1 + 12) % 12)
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
                            <Calendar className="w-3 h-3" />
                            NATIONAL AGRICULTURAL TIMELINE
                        </Badge>
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tighter">
                            Seasonal <br />
                            <span className="text-white underline decoration-4 underline-offset-8 decoration-white/30">Planner</span>
                        </h1>
                        <p className="text-xl text-white/80 max-w-2xl font-medium leading-relaxed">
                            Optimize your <span className="text-white font-bold italic underline decoration-white/20">Operational Cycles</span> with the official Sierra Leonean agricultural schedule. Align activities with climate patterns for maximum yield.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 -mt-12 relative z-20 pb-24">
                <div className="max-w-5xl mx-auto">

                    {/* Month Selector Terminal */}
                    <Card className="border-none bg-white rounded-[3rem] shadow-3xl overflow-hidden mb-12 relative">
                        <div className="bg-[#0072C6] p-8 flex items-center justify-between text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#1EB53A]/20 blur-[80px] rounded-full"></div>

                            <Button
                                onClick={prevMonth}
                                variant="outline"
                                className="h-14 w-14 rounded-2xl border-white/10 bg-white/5 hover:bg-white/20 text-white hover:border-white/30 transition-all z-10"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </Button>

                            <div className="text-center z-10">
                                <div className="text-sm font-black text-[#1EB53A] uppercase tracking-[0.3em] mb-2">CURRENT PERIOD</div>
                                <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">{months[selectedMonth]}</h2>
                                <div className="flex items-center justify-center gap-3 mt-4">
                                    <div className="bg-white/10 px-4 py-1.5 rounded-full flex items-center gap-2 border border-white/10">
                                        <SeasonIcon className="w-4 h-4 text-white/70" />
                                        <p className="text-sm font-bold text-white/90 uppercase tracking-widest">{currentMonth.season}</p>
                                    </div>
                                </div>
                            </div>

                            <Button
                                onClick={nextMonth}
                                variant="outline"
                                className="h-14 w-14 rounded-2xl border-white/10 bg-white/5 hover:bg-white/20 text-white hover:border-white/30 transition-all z-10"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </Button>
                        </div>

                        {/* Activities Grid */}
                        <div className="p-12">
                            <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.4em] mb-8">Scheduled Operations</h3>

                            {currentMonth.activities.length > 0 ? (
                                <div className="grid md:grid-cols-3 gap-6">
                                    {currentMonth.activities.map((activity, index) => {
                                        const styles = getActivityStyles(activity.type)
                                        return (
                                            <div
                                                key={index}
                                                className={`p-8 rounded-[2rem] border-2 transition-all hover:scale-[1.02] ${styles.bg} ${styles.border} group`}
                                            >
                                                <div className="flex justify-between items-start mb-6">
                                                    <div className={`w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center ${styles.color}`}>
                                                        <Sprout className="w-6 h-6" />
                                                    </div>
                                                    <Badge className={`${styles.bg} ${styles.color} border-none font-black text-[9px] uppercase tracking-widest px-3 py-1`}>
                                                        {styles.label}
                                                    </Badge>
                                                </div>

                                                <h4 className="font-black text-2xl text-slate-900 mb-2 uppercase tracking-tight group-hover:text-[#1EB53A] transition-colors">{activity.crop}</h4>
                                                <p className="text-slate-600 font-bold uppercase tracking-wide text-sm">{activity.activity}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            ) : (
                                <div className="text-center py-12 border-2 border-dashed border-slate-200 rounded-[2rem]">
                                    <Clock className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                                    <p className="text-slate-400 font-medium">No major strategic activities scheduled for this cycle.</p>
                                </div>
                            )}
                        </div>
                    </Card>

                    {/* Elite Legend & Notes */}
                    <div className="grid lg:grid-cols-3 gap-8">
                        <Card className="col-span-2 p-10 border-none bg-slate-50 rounded-[3rem]">
                            <h3 className="text-[11px] font-black text-slate-900 uppercase tracking-[0.4em] mb-8 flex items-center gap-3">
                                <AlignLeft className="w-4 h-4 text-slate-400" />
                                Operational Key
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {[
                                    { label: 'Land Prep', color: 'bg-slate-400' },
                                    { label: 'Planting', color: 'bg-[#1EB53A]' },
                                    { label: 'Maintenance', color: 'bg-[#0072C6]' },
                                    { label: 'Harvesting', color: 'bg-amber-500' }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                                        <div className={`w-3 h-3 ${item.color} rounded-full`}></div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </Card>

                        <Card className="p-10 border-none bg-[#0072C6] text-white rounded-[3rem] shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-[40px] rounded-full"></div>
                            <h3 className="text-[11px] font-black text-white/60 uppercase tracking-[0.4em] mb-4 flex items-center gap-3">
                                <CloudDrizzle className="w-4 h-4 text-white" />
                                Climate Note
                            </h3>
                            <p className="text-white/90 font-medium leading-relaxed text-sm">
                                <strong className="text-white font-black uppercase tracking-widest block mb-2">Seasonal Dualism</strong>
                                Sierra Leone operates on a distinct wet/dry dichotomy. The <span className="text-white font-bold underline decoration-white/30">Rainy Season (May-Oct)</span> drives planting, while the <span className="text-white font-bold underline decoration-white/30">Dry Season (Nov-Apr)</span> focuses on harvest and land prep.
                            </p>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
