'use client'

import { Navigation } from '@/components/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ShoppingBag, Truck, Users, MapPin } from 'lucide-react'

export default function FarmToTablePage() {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            <div className="container mx-auto px-4 py-8">
                <div className="mb-8 text-center max-w-2xl mx-auto">
                    <h1 className="text-3xl font-bold mb-2">Farm to Table Business</h1>
                    <p className="text-muted-foreground">Connect directly with consumers, restaurants, and local markets.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    <Card className="bg-primary/5 border-primary/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <ShoppingBag className="w-5 h-5 text-primary" />
                                Direct Sales
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-4">Sell your fresh produce directly to consumers through our digital marketplace.</p>
                            <Button className="w-full">List Products</Button>
                        </CardContent>
                    </Card>

                    <Card className="bg-primary/5 border-primary/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Truck className="w-5 h-5 text-primary" />
                                Logistics Support
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-4">Get help with packaging, cold storage, and delivery to your customers.</p>
                            <Button className="w-full" variant="outline">Find Logistics Partners</Button>
                        </CardContent>
                    </Card>

                    <Card className="bg-primary/5 border-primary/20">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Users className="w-5 h-5 text-primary" />
                                B2B Connections
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-4">Supply local restaurants, hotels, and schools with regular orders.</p>
                            <Button className="w-full" variant="outline">Browse B2B Requests</Button>
                        </CardContent>
                    </Card>
                </div>

                <div className="space-y-6">
                    <h2 className="text-2xl font-bold">Active Requests Nearby</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[1, 2, 3].map((i) => (
                            <Card key={i}>
                                <CardContent className="p-4">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-semibold">Fresh Tomatoes Needed</h3>
                                        <span className="bg-secondary/20 text-secondary text-xs px-2 py-1 rounded">Urgent</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                                        <MapPin className="w-4 h-4" />
                                        <span>Freetown Central Market</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="font-bold">500 kg</span>
                                        <Button size="sm">Accept Order</Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
