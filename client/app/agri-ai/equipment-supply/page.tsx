'use client'

import { Navigation } from '@/components/navigation'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tractor, Search, ShoppingCart, Wrench } from 'lucide-react'

export default function EquipmentSupplyPage() {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">Farm Equipment & Agri Supply</h1>
                        <p className="text-muted-foreground">Marketplace for equipment, tools, and agricultural supplies.</p>
                    </div>
                    <div className="flex gap-2 w-full md:w-auto">
                        <div className="relative w-full md:w-64">
                            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input placeholder="Search equipment..." className="pl-8" />
                        </div>
                        <Button>
                            <ShoppingCart className="w-4 h-4 mr-2" />
                            Cart
                        </Button>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {/* Equipment Card 1 */}
                    <Card>
                        <CardHeader>
                            <div className="h-40 bg-muted rounded-md mb-4 flex items-center justify-center">
                                <Tractor className="w-16 h-16 text-muted-foreground/50" />
                            </div>
                            <CardTitle>Compact Tractor 45HP</CardTitle>
                            <CardDescription>Versatile tractor for small to medium farms.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-2xl font-bold text-primary">Le 15,000</p>
                            <p className="text-sm text-muted-foreground mt-1">Available for Rent or Buy</p>
                        </CardContent>
                        <CardFooter className="flex gap-2">
                            <Button className="w-full">Buy Now</Button>
                            <Button variant="outline" className="w-full">Rent</Button>
                        </CardFooter>
                    </Card>

                    {/* Equipment Card 2 */}
                    <Card>
                        <CardHeader>
                            <div className="h-40 bg-muted rounded-md mb-4 flex items-center justify-center">
                                <Wrench className="w-16 h-16 text-muted-foreground/50" />
                            </div>
                            <CardTitle>Irrigation Pump System</CardTitle>
                            <CardDescription>High-efficiency solar water pump.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-2xl font-bold text-primary">Le 850</p>
                            <p className="text-sm text-muted-foreground mt-1">In Stock</p>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full">Add to Cart</Button>
                        </CardFooter>
                    </Card>

                    {/* Equipment Card 3 */}
                    <Card>
                        <CardHeader>
                            <div className="h-40 bg-muted rounded-md mb-4 flex items-center justify-center">
                                <Tractor className="w-16 h-16 text-muted-foreground/50" />
                            </div>
                            <CardTitle>Harvester Attachment</CardTitle>
                            <CardDescription>Compatible with most standard tractors.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-2xl font-bold text-primary">Le 3,200</p>
                            <p className="text-sm text-muted-foreground mt-1">Pre-order</p>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full">Pre-order</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
}
