'use client'

import { Navigation } from '@/components/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Users, Handshake, Globe, TrendingUp } from 'lucide-react'

export default function CooperationPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            <div className="container mx-auto px-4 py-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-2">Agricultural Cooperation & Rural Development</h1>
                    <p className="text-muted-foreground">Join forces with other farmers and participate in development projects.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold">Active Cooperatives</h2>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Users className="w-5 h-5 text-primary" />
                                    Rice Farmers Union
                                </CardTitle>
                                <CardDescription>250+ Members • Northern Region</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground mb-4">
                                    Collective purchasing of seeds and fertilizers, shared harvesting equipment, and bulk selling to processors.
                                </p>
                                <div className="flex gap-2">
                                    <Button size="sm">Join Cooperative</Button>
                                    <Button size="sm" variant="outline">Learn More</Button>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Users className="w-5 h-5 text-primary" />
                                    Women in Agriculture
                                </CardTitle>
                                <CardDescription>120+ Members • Nationwide</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground mb-4">
                                    Empowering women farmers through training, micro-finance access, and market linkages.
                                </p>
                                <div className="flex gap-2">
                                    <Button size="sm">Join Cooperative</Button>
                                    <Button size="sm" variant="outline">Learn More</Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold">Development Projects</h2>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Globe className="w-5 h-5 text-success" />
                                    Sustainable Irrigation Project
                                </CardTitle>
                                <CardDescription>Funded by World Bank • Status: Recruiting</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground mb-4">
                                    Implementing solar-powered irrigation systems in 50 rural communities. Looking for pilot farms.
                                </p>
                                <Button size="sm" className="w-full">Apply for Project</Button>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <TrendingUp className="w-5 h-5 text-success" />
                                    Youth Agri-Entrepreneurship
                                </CardTitle>
                                <CardDescription>Government Initiative • Status: Open</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground mb-4">
                                    Grants and mentorship for young people starting agricultural businesses.
                                </p>
                                <Button size="sm" className="w-full">View Eligibility</Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
