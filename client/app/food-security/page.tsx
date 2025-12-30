'use client'

import { Navigation } from '@/components/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { PieChart, TrendingUp, AlertTriangle, Map, ShoppingCart, BarChart2 } from 'lucide-react'
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
    Legend
} from 'recharts'

export default function FoodSecurityPage() {
    const priceData = [
        { month: 'Jan', rice: 850, cassava: 400 },
        { month: 'Feb', rice: 860, cassava: 390 },
        { month: 'Mar', rice: 870, cassava: 410 },
        { month: 'Apr', rice: 890, cassava: 420 },
        { month: 'May', rice: 880, cassava: 400 },
        { month: 'Jun', rice: 850, cassava: 380 },
    ]

    const stockData = [
        { region: 'West', stock: 85 },
        { region: 'North', stock: 65 },
        { region: 'South', stock: 90 },
        { region: 'East', stock: 70 },
    ]

    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            <main className="container mx-auto px-4 py-8">
                <div className="mb-8">
                    <h1 className="text-3xl md:text-5xl heading-flagship flex items-center gap-4">
                        <PieChart className="w-10 h-10 text-[#0072C6]" />
                        National Food Security Dashboard
                    </h1>
                    <p className="text-muted-foreground mt-4 text-lg font-medium">
                        <span className="text-branded font-bold">Real-time monitoring</span> of food availability, market prices, and supply chain stability across <span className="text-branded font-bold">Sierra Leone</span>.
                    </p>
                </div>

                {/* Key Indicators */}
                <div className="grid md:grid-cols-4 gap-6 mb-8">
                    <Card className="border-l-4 border-l-primary">
                        <CardContent className="p-6">
                            <div className="text-sm text-muted-foreground mb-1">National Rice Stock</div>
                            <div className="text-3xl font-bold text-foreground">45 Days</div>
                            <Badge className="mt-2 bg-primary/10 text-primary hover:bg-primary/20 border-none">Stable</Badge>
                        </CardContent>
                    </Card>
                    <Card className="border-l-4 border-l-primary">
                        <CardContent className="p-6">
                            <div className="text-sm text-muted-foreground mb-1">Inflation Level (CPI)</div>
                            <div className="text-3xl font-bold text-foreground">12.4%</div>
                            <Badge className="mt-2 bg-warning/10 text-warning hover:bg-warning/20 border-none">Caution</Badge>
                        </CardContent>
                    </Card>
                    <Card className="border-l-4 border-l-primary">
                        <CardContent className="p-6">
                            <div className="text-sm text-muted-foreground mb-1">Production Forecast</div>
                            <div className="text-3xl font-bold text-foreground">+5.2%</div>
                            <Badge className="mt-2 bg-primary/10 text-primary hover:bg-primary/20 border-none">Year-over-Year</Badge>
                        </CardContent>
                    </Card>
                    <Card className="border-l-4 border-l-destructive bg-destructive/10">
                        <CardContent className="p-6">
                            <div className="text-sm text-destructive mb-1 flex items-center gap-2">
                                <AlertTriangle className="w-4 h-4" /> Active Alerts
                            </div>
                            <div className="text-3xl font-bold text-foreground">3 Regions</div>
                            <p className="text-xs text-destructive/80 mt-2">Flooding Risk in South</p>
                        </CardContent>
                    </Card>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">

                    {/* Price Trends Chart */}
                    <Card className="lg:col-span-2">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <TrendingUp className="w-5 h-5 text-primary" />
                                Commodity Price Trends (Le/unit)
                            </CardTitle>
                            <CardDescription>Monthly average retail prices for key staples</CardDescription>
                        </CardHeader>
                        <CardContent className="h-[400px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={priceData}>
                                    <defs>
                                        <linearGradient id="colorRice" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="var(--sl-green)" stopOpacity={0.8} />
                                            <stop offset="95%" stopColor="var(--sl-green)" stopOpacity={0} />
                                        </linearGradient>
                                        <linearGradient id="colorCassava" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="var(--warning)" stopOpacity={0.8} />
                                            <stop offset="95%" stopColor="var(--warning)" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <XAxis dataKey="month" />
                                    <YAxis />
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <Tooltip />
                                    <Legend />
                                    <Area type="monotone" dataKey="rice" stroke="var(--sl-green)" fillOpacity={1} fill="url(#colorRice)" name="Imported Rice (50kg)" />
                                    <Area type="monotone" dataKey="cassava" stroke="var(--warning)" fillOpacity={1} fill="url(#colorCassava)" name="Cassava Flour (50kg)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>

                    {/* Regional Stock Levels */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Map className="w-5 h-5 text-primary" />
                                Regional Supply Levels
                            </CardTitle>
                            <CardDescription>Estimated stock sufficiency (%)</CardDescription>
                        </CardHeader>
                        <CardContent className="h-[400px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={stockData} layout="vertical">
                                    <XAxis type="number" domain={[0, 100]} />
                                    <YAxis dataKey="region" type="category" width={50} />
                                    <Tooltip cursor={{ fill: 'transparent' }} />
                                    <Bar dataKey="stock" fill="var(--sl-green)" radius={[0, 4, 4, 0]} barSize={40}>
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                            <div className="mt-4 text-sm text-center text-muted-foreground">
                                <p>Threshold: below 50% triggers supply intervention.</p>
                            </div>
                        </CardContent>
                    </Card>

                </div>

                {/* Global Market Ticker */}
                <Card className="mt-8 bg-secondary text-secondary-foreground border-none">
                    <CardContent className="p-4 flex items-center justify-between overflow-x-auto whitespace-nowrap gap-8">
                        <div className="flex items-center gap-2 font-bold text-primary">
                            <ShoppingCart className="w-4 h-4" /> GLOBAL MARKETS
                        </div>
                        <div className="flex gap-8 text-sm">
                            <span className="flex items-center gap-2">Wheat: $240/t <span className="text-destructive">▼ 1.2%</span></span>
                            <span className="flex items-center gap-2">Cocoa: $2,800/t <span className="text-primary">▲ 0.5%</span></span>
                            <span className="flex items-center gap-2">Coffee (Robusta): $2,100/t <span className="text-primary">▲ 2.1%</span></span>
                            <span className="flex items-center gap-2">Palm Oil: $980/t <span className="text-muted-foreground">- 0.0%</span></span>
                        </div>
                    </CardContent>
                </Card>

            </main>
        </div>
    )
}
