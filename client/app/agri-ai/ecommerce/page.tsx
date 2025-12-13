'use client'

import { Navigation } from '@/components/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ShoppingCart, Search, Tag, Truck } from 'lucide-react'

export default function EcommercePage() {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">Agri Ecommerce Platform</h1>
                        <p className="text-muted-foreground">One-stop shop for all agricultural products and services.</p>
                    </div>
                    <div className="flex gap-2 w-full md:w-auto">
                        <div className="relative w-full md:w-80">
                            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input placeholder="Search seeds, tools, fertilizers..." className="pl-8" />
                        </div>
                        <Button>
                            <ShoppingCart className="w-4 h-4 mr-2" />
                            Cart (0)
                        </Button>
                    </div>
                </div>

                <div className="grid md:grid-cols-4 gap-6 mb-8">
                    {['Seeds', 'Fertilizers', 'Tools', 'Machinery', 'Livestock Feed', 'Pesticides', 'Irrigation', 'Safety Gear'].map((category) => (
                        <Card key={category} className="hover:shadow-md transition-shadow cursor-pointer">
                            <CardContent className="p-4 flex items-center justify-center h-24">
                                <span className="font-semibold">{category}</span>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <h2 className="text-2xl font-bold mb-6">Featured Deals</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[1, 2, 3, 4].map((i) => (
                        <Card key={i}>
                            <div className="h-40 bg-muted rounded-t-lg flex items-center justify-center relative">
                                <Tag className="w-12 h-12 text-muted-foreground/50" />
                                <span className="absolute top-2 right-2 bg-destructive text-destructive-foreground text-xs px-2 py-1 rounded">-20%</span>
                            </div>
                            <CardContent className="pt-4">
                                <h3 className="font-semibold mb-1">Organic Fertilizer 50kg</h3>
                                <div className="flex items-baseline gap-2 mb-2">
                                    <span className="text-lg font-bold">$24.99</span>
                                    <span className="text-sm text-muted-foreground line-through">$32.00</span>
                                </div>
                                <p className="text-xs text-muted-foreground mb-4">High nitrogen content for leafy growth.</p>
                                <Button size="sm" className="w-full">Add to Cart</Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}
