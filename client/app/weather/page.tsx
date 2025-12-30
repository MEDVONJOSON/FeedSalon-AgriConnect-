"use client"

import { useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Cloud, CloudRain, Sun, Wind, Droplets, Search, Info } from 'lucide-react'

export default function WeatherPage() {
    const [location, setLocation] = useState('Freetown')
    const [weatherData, setWeatherData] = useState({
        current: {
            city: 'Freetown',
            temp: 31,
            condition: 'Partly Cloudy',
            icon: 'sun-cloud',
            humidity: 82,
            windSpeed: 12
        },
        forecast: [
            { day: 'Today', temp: 31, condition: 'Tropical Sun', icon: 'sun' },
            { day: 'Tomorrow', temp: 29, condition: 'Light Rain', icon: 'rain' },
            { day: 'Day 2', temp: 30, condition: 'Cloudy', icon: 'cloud' }
        ]
    })

    const getWeatherIcon = (iconType: string) => {
        switch (iconType) {
            case 'sun':
                return <Sun className="w-16 h-16 text-warning" />
            case 'sun-cloud':
                return (
                    <div className="relative">
                        <Sun className="w-16 h-16 text-warning" />
                        <Cloud className="w-10 h-10 text-[#0072C6]/80 absolute bottom-0 right-0" />
                    </div>
                )
            case 'cloud':
                return <Cloud className="w-16 h-16 text-muted-foreground" />
            case 'rain':
                return <CloudRain className="w-16 h-16 text-[#0072C6]" />
            default:
                return <Sun className="w-16 h-16 text-warning" />
        }
    }

    return (
        <div className="min-h-screen">
            <Navigation />

            <div className="container mx-auto px-4 py-12 max-w-6xl">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                    <Cloud className="w-10 h-10 text-[#0072C6]" />
                    <h1 className="text-4xl md:text-5xl heading-flagship">Weather Information</h1>
                </div>

                <p className="text-xl text-muted-foreground mb-8 font-medium">
                    Monitor <span className="text-branded font-bold">micro-climates</span> and plan your <span className="text-branded font-bold italic">agricultural activities</span> with precision in Sierra Leone.
                </p>

                {/* Location Search */}
                <div className="flex gap-3 mb-12 max-w-md">
                    <Input
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Enter location (e.g. Bo, Makeni, Kenema)..."
                        className="glass-card h-12"
                    />
                    <Button className="bg-[#1EB53A] hover:bg-[#1EB53A]/90 text-white h-12 px-6">
                        <Search className="w-4 h-4 mr-2" />
                        Search
                    </Button>
                </div>

                <div className="grid lg:grid-cols-[400px_1fr] gap-8">
                    {/* Current Weather */}
                    <Card className="glass-card p-8 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#1EB53A]/10 blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                        <div className="bg-[#0072C6] text-white px-6 py-3 -mx-8 -mt-8 mb-8 rounded-t-xl font-bold tracking-wider uppercase text-sm">
                            Real-time Atmosphere
                        </div>

                        <div className="text-center">
                            <h3 className="text-4xl font-black text-slate-800 mb-8 tracking-tight">{weatherData.current.city}</h3>

                            <div className="flex justify-center mb-8 transform group-hover:scale-110 transition-transform duration-500">
                                {getWeatherIcon(weatherData.current.icon)}
                            </div>

                            <div className="text-7xl font-black text-slate-900 mb-2 tracking-tighter">
                                {weatherData.current.temp}°C
                            </div>
                            <p className="text-muted-foreground text-xl mb-10 font-medium italic">{weatherData.current.condition}</p>

                            <div className="grid grid-cols-2 gap-4 text-left border-t border-slate-100 pt-8">
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2 text-slate-500 text-sm font-bold uppercase">
                                        <Droplets className="w-4 h-4 text-[#0072C6]" /> Humidity
                                    </div>
                                    <div className="text-2xl font-black text-slate-800">{weatherData.current.humidity}%</div>
                                </div>
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2 text-slate-500 text-sm font-bold uppercase">
                                        <Wind className="w-4 h-4 text-[#1EB53A]" /> Wind
                                    </div>
                                    <div className="text-2xl font-black text-slate-800">{weatherData.current.windSpeed} <span className="text-sm font-normal text-slate-400">km/h</span></div>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* 5-Day Forecast */}
                    <Card className="glass-card p-8">
                        <div className="bg-[#1EB53A] text-white px-6 py-3 -mx-8 -mt-8 mb-8 rounded-t-xl font-bold tracking-wider uppercase text-sm">
                            Agricultural Forecast (3-Day Precision)
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {weatherData.forecast.map((day, index) => (
                                <Card key={index} className="bg-white/50 p-8 text-center border-slate-100 hover:shadow-xl transition-all duration-300 group">
                                    <h3 className="font-black text-slate-400 uppercase tracking-widest text-xs mb-6">{day.day}</h3>
                                    <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform">
                                        {getWeatherIcon(day.icon)}
                                    </div>
                                    <div className="text-4xl font-black text-slate-800 mb-2">
                                        {day.temp}°C
                                    </div>
                                    <p className="text-slate-500 font-medium">{day.condition}</p>
                                </Card>
                            ))}
                        </div>

                        <div className="mt-12 p-6 bg-blue-50/50 rounded-2xl border border-blue-100 flex items-start gap-4">
                            <Info className="w-6 h-6 text-[#0072C6] shrink-0 mt-1" />
                            <div className="text-sm text-blue-900 leading-relaxed">
                                <strong className="block mb-1">Agronomist Note:</strong>
                                High humidity levels in <span className="italic">Freetown</span> and the <span className="italic">Western Area</span> suggest optimal moisture for young sprouts. Monitor for pests that thrive in humid tropical conditions.
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}
