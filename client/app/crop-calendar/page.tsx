"use client"

import { useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, ChevronLeft, ChevronRight, Sprout, CloudRain, Sun } from 'lucide-react'

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

    const getActivityColor = (type: string) => {
        switch (type) {
            case 'plant':
                return 'bg-green-100 text-green-800 border-green-200'
            case 'harvest':
                return 'bg-yellow-100 text-yellow-800 border-yellow-200'
            case 'care':
                return 'bg-blue-100 text-blue-800 border-blue-200'
            case 'prep':
                return 'bg-purple-100 text-purple-800 border-purple-200'
            default:
                return 'bg-gray-100 text-gray-800 border-gray-200'
        }
    }

    const nextMonth = () => {
        setSelectedMonth((prev) => (prev + 1) % 12)
    }

    const prevMonth = () => {
        setSelectedMonth((prev) => (prev - 1 + 12) % 12)
    }

    return (
        <div className="min-h-screen">
            <Navigation />

            <div className="container mx-auto px-4 py-12 max-w-6xl">
                {/* Header */}
                <div className="flex items-center gap-3 mb-8">
                    <Calendar className="w-8 h-8 text-primary" />
                    <h1 className="text-4xl font-bold text-slate-900">Crop Calendar</h1>
                </div>

                <p className="text-lg text-muted-foreground mb-8">
                    Plan your agricultural activities throughout the year based on Sierra Leone's seasons
                </p>

                {/* Month Selector */}
                <Card className="glass-card p-6 mb-8">
                    <div className="flex items-center justify-between mb-6">
                        <Button
                            onClick={prevMonth}
                            variant="outline"
                            className="border-primary text-primary hover:bg-primary hover:text-white"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </Button>

                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-slate-900">{months[selectedMonth]}</h2>
                            <div className="flex items-center justify-center gap-2 mt-2">
                                <SeasonIcon className="w-5 h-5 text-primary" />
                                <p className="text-lg text-muted-foreground">{currentMonth.season}</p>
                            </div>
                        </div>

                        <Button
                            onClick={nextMonth}
                            variant="outline"
                            className="border-primary text-primary hover:bg-primary hover:text-white"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </Button>
                    </div>

                    {/* Activities List */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-slate-900 mb-4">Agricultural Activities</h3>

                        {currentMonth.activities.length > 0 ? (
                            <div className="grid gap-4">
                                {currentMonth.activities.map((activity, index) => (
                                    <div
                                        key={index}
                                        className={`p-4 rounded-lg border-2 ${getActivityColor(activity.type)}`}
                                    >
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <div className="flex items-center gap-2 mb-1">
                                                    <Sprout className="w-5 h-5" />
                                                    <h4 className="font-semibold text-lg">{activity.crop}</h4>
                                                </div>
                                                <p className="text-sm font-medium">{activity.activity}</p>
                                            </div>
                                            <span className="text-xs font-bold uppercase px-2 py-1 bg-white rounded">
                                                {activity.type}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-center text-muted-foreground py-8">
                                No major activities scheduled for this month
                            </p>
                        )}
                    </div>
                </Card>

                {/* Legend */}
                <Card className="glass-card p-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Activity Types</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-purple-500 rounded"></div>
                            <span className="text-sm">Land Preparation</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-green-500 rounded"></div>
                            <span className="text-sm">Planting</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-blue-500 rounded"></div>
                            <span className="text-sm">Care & Maintenance</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                            <span className="text-sm">Harvesting</span>
                        </div>
                    </div>

                    <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <p className="text-sm text-slate-700">
                            <strong>Note:</strong> Sierra Leone has two main seasons - the Rainy Season (May-October)
                            and the Dry Season (November-April). Plan your crops accordingly for optimal yields.
                        </p>
                    </div>
                </Card>
            </div>
        </div>
    )
}
