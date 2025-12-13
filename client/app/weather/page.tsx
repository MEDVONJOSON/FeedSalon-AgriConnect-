"use client"

import { useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Cloud, CloudRain, Sun, Wind, Droplets, Search } from 'lucide-react'

export default function WeatherPage() {
    const [location, setLocation] = useState('New Delhi')
    const [weatherData, setWeatherData] = useState({
        current: {
            city: 'New Delhi',
            temp: 27,
            condition: 'Smoke',
            icon: 'sun-cloud',
            humidity: 51,
            windSpeed: 6
        },
        forecast: [
            { day: 'Today', temp: 27, condition: 'Clear', icon: 'sun' },
            { day: 'Tomorrow', temp: 27, condition: 'Clear', icon: 'sun' },
            { day: 'Day 2', temp: 28, condition: 'Clear', icon: 'sun' }
        ]
    })

    const getWeatherIcon = (iconType: string) => {
        switch (iconType) {
            case 'sun':
                return <Sun className="w-16 h-16 text-yellow-500" />
            case 'sun-cloud':
                return (
                    <div className="relative">
                        <Sun className="w-16 h-16 text-yellow-500" />
                        <Cloud className="w-10 h-10 text-yellow-600 absolute bottom-0 right-0" />
                    </div>
                )
            case 'cloud':
                return <Cloud className="w-16 h-16 text-slate-400" />
            case 'rain':
                return <CloudRain className="w-16 h-16 text-blue-500" />
            default:
                return <Sun className="w-16 h-16 text-yellow-500" />
        }
    }

    return (
        <div className="min-h-screen">
            <Navigation />

            <div className="container mx-auto px-4 py-12 max-w-6xl">
                {/* Header */}
                <div className="flex items-center gap-3 mb-8">
                    <Cloud className="w-8 h-8 text-primary" />
                    <h1 className="text-4xl font-bold text-slate-900">Weather Information</h1>
                </div>

                {/* Location Search */}
                <div className="flex gap-3 mb-8 max-w-md">
                    <Input
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Enter location"
                        className="glass-card"
                    />
                    <Button className="bg-primary hover:bg-primary/90 text-white">
                        <Search className="w-4 h-4 mr-2" />
                        Get Weather
                    </Button>
                </div>

                <div className="grid lg:grid-cols-[350px_1fr] gap-6">
                    {/* Current Weather */}
                    <Card className="glass-card p-6">
                        <div className="bg-secondary text-white px-4 py-3 -mx-6 -mt-6 mb-6 rounded-t-lg">
                            <h2 className="text-lg font-semibold">Current Weather</h2>
                        </div>

                        <div className="text-center">
                            <h3 className="text-3xl font-bold text-slate-900 mb-6">{weatherData.current.city}</h3>

                            <div className="flex justify-center mb-6">
                                {getWeatherIcon(weatherData.current.icon)}
                            </div>

                            <div className="text-6xl font-bold text-slate-900 mb-2">
                                {weatherData.current.temp}°C
                            </div>
                            <p className="text-slate-600 text-lg mb-8">{weatherData.current.condition}</p>

                            <div className="space-y-3 text-left">
                                <div className="flex items-center gap-3 text-slate-700">
                                    <Droplets className="w-5 h-5 text-secondary" />
                                    <span className="font-medium">Humidity:</span>
                                    <span>{weatherData.current.humidity}%</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-700">
                                    <Wind className="w-5 h-5 text-secondary" />
                                    <span className="font-medium">Wind Speed:</span>
                                    <span>{weatherData.current.windSpeed} km/h</span>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* 5-Day Forecast */}
                    <Card className="glass-card p-6">
                        <div className="bg-primary text-white px-4 py-3 -mx-6 -mt-6 mb-6 rounded-t-lg">
                            <h2 className="text-lg font-semibold">5-Day Forecast</h2>
                        </div>

                        <div className="grid grid-cols-3 gap-6">
                            {weatherData.forecast.map((day, index) => (
                                <Card key={index} className="bg-white/50 p-6 text-center border border-slate-200">
                                    <h3 className="font-semibold text-slate-700 mb-4">{day.day}</h3>
                                    <div className="flex justify-center mb-4">
                                        {getWeatherIcon(day.icon)}
                                    </div>
                                    <div className="text-3xl font-bold text-slate-900 mb-1">
                                        {day.temp}°C
                                    </div>
                                    <p className="text-slate-600">{day.condition}</p>
                                </Card>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}
