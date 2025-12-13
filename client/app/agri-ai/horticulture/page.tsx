'use client'

import { Navigation } from '@/components/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Sprout, Sun, Droplets, Scissors } from 'lucide-react'

export default function HorticulturePage() {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            <div className="container mx-auto px-4 py-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-2">Horticulture & Gardening</h1>
                    <p className="text-muted-foreground">Expert tools for landscaping, urban gardening, and plant care.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-lg">
                                <Sprout className="w-5 h-5 text-success" />
                                Plant Database
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-4">Access care guides for over 5,000 ornamental and edible plants.</p>
                            <Button variant="outline" className="w-full">Search Plants</Button>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-lg">
                                <Sun className="w-5 h-5 text-warning" />
                                Garden Planner
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-4">Design your garden layout based on sunlight and soil conditions.</p>
                            <Button variant="outline" className="w-full">Start Design</Button>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-lg">
                                <Scissors className="w-5 h-5 text-primary" />
                                Landscaping
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-4">Connect with professional landscapers for your projects.</p>
                            <Button variant="outline" className="w-full">Find Pros</Button>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-lg">
                                <Droplets className="w-5 h-5 text-info" />
                                Irrigation
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-4">Smart watering schedules for your specific plants.</p>
                            <Button variant="outline" className="w-full">Setup Schedule</Button>
                        </CardContent>
                    </Card>
                </div>

                <div className="bg-muted/30 p-6 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4">Seasonal Gardening Tips</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-background p-4 rounded shadow-sm">
                            <h3 className="font-semibold mb-2">Pruning Time</h3>
                            <p className="text-sm text-muted-foreground">Now is the best time to prune your rose bushes for better blooming next season.</p>
                        </div>
                        <div className="bg-background p-4 rounded shadow-sm">
                            <h3 className="font-semibold mb-2">Soil Preparation</h3>
                            <p className="text-sm text-muted-foreground">Add compost to your vegetable beds to prepare for planting.</p>
                        </div>
                        <div className="bg-background p-4 rounded shadow-sm">
                            <h3 className="font-semibold mb-2">Pest Control</h3>
                            <p className="text-sm text-muted-foreground">Watch out for aphids on new growth. Use neem oil for organic control.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
