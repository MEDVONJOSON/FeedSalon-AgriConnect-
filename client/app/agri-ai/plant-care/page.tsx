'use client'

import { Navigation } from '@/components/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Leaf, Recycle, Wind, Droplets } from 'lucide-react'

export default function PlantCarePage() {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            <div className="container mx-auto px-4 py-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-2">Plant Care & Eco-Friendly Farming</h1>
                    <p className="text-muted-foreground">Sustainable practices for a healthier planet and better yields.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold">Eco-Farming Practices</h2>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Recycle className="w-5 h-5 text-success" />
                                    Organic Composting
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground mb-4">
                                    Learn how to turn farm waste into nutrient-rich fertilizer. Step-by-step guide to building compost piles.
                                </p>
                                <Button variant="outline">View Guide</Button>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Wind className="w-5 h-5 text-info" />
                                    Integrated Pest Management
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground mb-4">
                                    Natural ways to control pests without harmful chemicals. Using beneficial insects and trap crops.
                                </p>
                                <Button variant="outline">Learn More</Button>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold">Resource Conservation</h2>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Droplets className="w-5 h-5 text-primary" />
                                    Water Smart Farming
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground mb-4">
                                    Techniques for drip irrigation, rainwater harvesting, and mulching to reduce water usage by up to 50%.
                                </p>
                                <Button variant="outline">Explore Techniques</Button>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Leaf className="w-5 h-5 text-success" />
                                    Soil Regeneration
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground mb-4">
                                    Cover cropping and no-till farming methods to restore soil health and sequester carbon.
                                </p>
                                <Button variant="outline">Read Article</Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
