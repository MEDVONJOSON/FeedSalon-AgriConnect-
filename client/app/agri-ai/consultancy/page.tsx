'use client'

import { Navigation } from '@/components/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { GraduationCap, Video, Calendar, MessageSquare } from 'lucide-react'

export default function ConsultancyPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            <div className="container mx-auto px-4 py-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-2">Agriculture Consultancy & Farming Services</h1>
                    <p className="text-muted-foreground">Get expert advice from certified agronomists and veterinary specialists.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Video className="w-5 h-5 text-primary" />
                                Video Consultation
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-4">Live video calls with experts to diagnose crop issues or discuss farm strategy.</p>
                            <Button className="w-full">Book Video Call</Button>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Calendar className="w-5 h-5 text-primary" />
                                On-Site Visit
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-4">Request an expert to visit your farm for a comprehensive assessment.</p>
                            <Button className="w-full" variant="outline">Schedule Visit</Button>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <MessageSquare className="w-5 h-5 text-primary" />
                                Ask an Expert
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-4">Send photos and questions to our team and get a response within 24 hours.</p>
                            <Button className="w-full" variant="outline">Submit Question</Button>
                        </CardContent>
                    </Card>
                </div>

                <h2 className="text-2xl font-bold mb-6">Featured Experts</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[1, 2, 3, 4].map((i) => (
                        <Card key={i}>
                            <div className="h-48 bg-muted rounded-t-lg flex items-center justify-center">
                                <GraduationCap className="w-16 h-16 text-muted-foreground/50" />
                            </div>
                            <CardContent className="pt-4">
                                <h3 className="font-bold text-lg">Dr. Sarah Johnson</h3>
                                <p className="text-sm text-primary font-medium mb-2">Soil Scientist</p>
                                <p className="text-sm text-muted-foreground mb-4">15 years experience in tropical soil management and fertility.</p>
                                <Button size="sm" className="w-full" variant="secondary">View Profile</Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}
