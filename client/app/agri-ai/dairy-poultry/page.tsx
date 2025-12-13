'use client'

import { Navigation } from '@/components/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Egg, Milk, Activity, Thermometer, Droplets } from 'lucide-react'

export default function DairyPoultryPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            <div className="container mx-auto px-4 py-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-2">Dairy & Poultry Farms</h1>
                    <p className="text-muted-foreground">Specialized management tools for dairy and poultry operations.</p>
                </div>

                <Tabs defaultValue="dairy" className="space-y-6">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="dairy" className="py-3">Dairy Farm Management</TabsTrigger>
                        <TabsTrigger value="poultry" className="py-3">Poultry Farm Management</TabsTrigger>
                    </TabsList>

                    <TabsContent value="dairy">
                        <div className="grid md:grid-cols-2 gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Milk className="w-6 h-6 text-primary" />
                                        Milk Production
                                    </CardTitle>
                                    <CardDescription>Daily yield tracking and quality analysis.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center p-3 border rounded bg-muted/10">
                                            <span>Today's Yield</span>
                                            <span className="font-bold text-xl">450 Liters</span>
                                        </div>
                                        <div className="flex justify-between items-center p-3 border rounded bg-muted/10">
                                            <span>Average Fat Content</span>
                                            <span className="font-bold text-xl">3.8%</span>
                                        </div>
                                        <Button className="w-full">Log Production</Button>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Activity className="w-6 h-6 text-primary" />
                                        Health Monitoring
                                    </CardTitle>
                                    <CardDescription>Automated health alerts and vaccination schedules.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 p-3 border border-warning/20 bg-warning/5 rounded">
                                            <div className="w-2 h-2 rounded-full bg-warning" />
                                            <div>
                                                <p className="font-semibold">Vaccination Due</p>
                                                <p className="text-sm text-muted-foreground">Herd B - FMD Vaccine due in 3 days</p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    <TabsContent value="poultry">
                        <div className="grid md:grid-cols-2 gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Egg className="w-6 h-6 text-primary" />
                                        Egg Production
                                    </CardTitle>
                                    <CardDescription>Layer performance and egg quality tracking.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center p-3 border rounded bg-muted/10">
                                            <span>Collection Rate</span>
                                            <span className="font-bold text-xl">94%</span>
                                        </div>
                                        <div className="flex justify-between items-center p-3 border rounded bg-muted/10">
                                            <span>Damaged Eggs</span>
                                            <span className="font-bold text-xl text-destructive">1.2%</span>
                                        </div>
                                        <Button className="w-full">Log Collection</Button>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Thermometer className="w-6 h-6 text-primary" />
                                        Environmental Control
                                    </CardTitle>
                                    <CardDescription>Coop temperature and humidity monitoring.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-3 border rounded text-center">
                                            <p className="text-sm text-muted-foreground">Temperature</p>
                                            <p className="text-2xl font-bold">24°C</p>
                                        </div>
                                        <div className="p-3 border rounded text-center">
                                            <p className="text-sm text-muted-foreground">Humidity</p>
                                            <p className="text-2xl font-bold">60%</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}
