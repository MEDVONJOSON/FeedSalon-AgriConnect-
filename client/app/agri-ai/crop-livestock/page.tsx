'use client'

import { useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Sprout, Activity, Calendar, TrendingUp, AlertTriangle, ClipboardList } from 'lucide-react'

export default function CropLivestockPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            <div className="container mx-auto px-4 py-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-2">Crop & Livestock Management</h1>
                    <p className="text-muted-foreground">Comprehensive technical workflow for integrated farm management.</p>
                </div>

                <Tabs defaultValue="herd-tracking" className="space-y-6">
                    <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 h-auto">
                        <TabsTrigger value="herd-tracking" className="py-3">Herd Tracking</TabsTrigger>
                        <TabsTrigger value="feed-optimization" className="py-3">Feed Optimization</TabsTrigger>
                        <TabsTrigger value="crop-rotation" className="py-3">Crop Rotation</TabsTrigger>
                        <TabsTrigger value="disease-prediction" className="py-3">Disease Models</TabsTrigger>
                        <TabsTrigger value="analytics" className="py-3">Analytics</TabsTrigger>
                    </TabsList>

                    <TabsContent value="herd-tracking">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Activity className="w-6 h-6 text-primary" />
                                    Herd Tracking System
                                </CardTitle>
                                <CardDescription>Monitor livestock health, location, and breeding cycles.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid md:grid-cols-3 gap-4">
                                    <div className="p-4 border rounded-lg bg-muted/20">
                                        <h3 className="font-semibold mb-2">Total Head Count</h3>
                                        <p className="text-2xl font-bold">1,245</p>
                                        <p className="text-sm text-success">+12 this month</p>
                                    </div>
                                    <div className="p-4 border rounded-lg bg-muted/20">
                                        <h3 className="font-semibold mb-2">Health Status</h3>
                                        <p className="text-2xl font-bold text-success">98% Healthy</p>
                                        <p className="text-sm text-muted-foreground">24 requiring attention</p>
                                    </div>
                                    <div className="p-4 border rounded-lg bg-muted/20">
                                        <h3 className="font-semibold mb-2">Breeding Cycle</h3>
                                        <p className="text-2xl font-bold">45 Active</p>
                                        <p className="text-sm text-muted-foreground">12 due this week</p>
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <Button>Add New Record</Button>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="feed-optimization">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <ClipboardList className="w-6 h-6 text-primary" />
                                    Feed Optimization
                                </CardTitle>
                                <CardDescription>AI-driven feed formulation for optimal growth and cost efficiency.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <h3 className="font-semibold">Current Rations</h3>
                                        <div className="space-y-2">
                                            <div className="flex justify-between p-3 border rounded bg-muted/10">
                                                <span>Dairy Cattle (Lactating)</span>
                                                <span className="font-mono">Mix A-24</span>
                                            </div>
                                            <div className="flex justify-between p-3 border rounded bg-muted/10">
                                                <span>Poultry (Layers)</span>
                                                <span className="font-mono">Layer Mash Pro</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="font-semibold">Optimization Suggestions</h3>
                                        <div className="p-4 border border-success/20 bg-success/5 rounded-lg">
                                            <p className="text-sm mb-2"><span className="font-bold text-success">Suggestion:</span> Increase protein content in Mix A-24 by 2% to improve milk yield based on current weather.</p>
                                            <Button size="sm" variant="outline">Apply Change</Button>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="crop-rotation">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Calendar className="w-6 h-6 text-primary" />
                                    Crop Rotation Planning
                                </CardTitle>
                                <CardDescription>Strategic planting schedules to maintain soil health.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-6">
                                    <div className="grid md:grid-cols-4 gap-4">
                                        <div className="p-4 border rounded-lg text-center">
                                            <h4 className="font-semibold text-muted-foreground mb-1">Field A</h4>
                                            <p className="font-bold text-lg">Maize</p>
                                            <p className="text-xs text-muted-foreground">Current</p>
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <span className="text-2xl">→</span>
                                        </div>
                                        <div className="p-4 border rounded-lg text-center bg-primary/5 border-primary/20">
                                            <h4 className="font-semibold text-muted-foreground mb-1">Field A (Next)</h4>
                                            <p className="font-bold text-lg text-primary">Legumes</p>
                                            <p className="text-xs text-muted-foreground">Recommended</p>
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <Button variant="ghost" size="sm">View Full Plan</Button>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="disease-prediction">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <AlertTriangle className="w-6 h-6 text-destructive" />
                                    Disease Prediction Models
                                </CardTitle>
                                <CardDescription>Early warning system based on environmental conditions.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4 p-4 border border-destructive/20 bg-destructive/5 rounded-lg">
                                        <AlertTriangle className="w-5 h-5 text-destructive mt-0.5" />
                                        <div>
                                            <h4 className="font-bold text-destructive">High Risk Alert: Late Blight</h4>
                                            <p className="text-sm text-muted-foreground mb-2">High humidity and recent rainfall have created favorable conditions for Late Blight in potato crops.</p>
                                            <Button size="sm" variant="destructive">View Prevention Steps</Button>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 p-4 border rounded-lg">
                                        <Activity className="w-5 h-5 text-success mt-0.5" />
                                        <div>
                                            <h4 className="font-bold">Low Risk: Rust</h4>
                                            <p className="text-sm text-muted-foreground">Current dry conditions are unfavorable for Rust development.</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="analytics">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <TrendingUp className="w-6 h-6 text-primary" />
                                    Farm Productivity Analytics
                                </CardTitle>
                                <CardDescription>Integrated insights for data-driven decision making.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="h-64 flex items-center justify-center border rounded-lg bg-muted/10">
                                    <p className="text-muted-foreground">Analytics Dashboard Placeholder (Chart Integration)</p>
                                </div>
                                <div className="grid md:grid-cols-3 gap-4 mt-6">
                                    <div className="text-center">
                                        <p className="text-sm text-muted-foreground">Yield Efficiency</p>
                                        <p className="text-xl font-bold">+15%</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-sm text-muted-foreground">Resource Usage</p>
                                        <p className="text-xl font-bold text-success">-8%</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-sm text-muted-foreground">Profit Margin</p>
                                        <p className="text-xl font-bold">+12%</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}
