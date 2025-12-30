"use client"

import { Navigation } from '@/components/navigation'
import { Card } from '@/components/ui/card'
import { TrendingUp, TrendingDown, MapPin, Calendar } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function MarketAnalysisPage() {
    // Sierra Leone market data (mock data - would come from API in production)
    const marketPrices = [
        {
            commodity: 'Rice (Local)',
            currentPrice: 4500,
            previousPrice: 4200,
            unit: 'Le/kg',
            trend: 'up',
            change: 7.1,
            market: 'Freetown Central',
            lastUpdated: '2 hours ago'
        },
        {
            commodity: 'Rice (Imported)',
            currentPrice: 5200,
            previousPrice: 5300,
            unit: 'Le/kg',
            trend: 'down',
            change: -1.9,
            market: 'Freetown Central',
            lastUpdated: '2 hours ago'
        },
        {
            commodity: 'Cassava',
            currentPrice: 2800,
            previousPrice: 2600,
            unit: 'Le/kg',
            trend: 'up',
            change: 7.7,
            market: 'Bo Market',
            lastUpdated: '5 hours ago'
        },
        {
            commodity: 'Sweet Potato',
            currentPrice: 3200,
            previousPrice: 3100,
            unit: 'Le/kg',
            trend: 'up',
            change: 3.2,
            market: 'Kenema Market',
            lastUpdated: '3 hours ago'
        },
        {
            commodity: 'Groundnut',
            currentPrice: 8500,
            previousPrice: 8800,
            unit: 'Le/kg',
            trend: 'down',
            change: -3.4,
            market: 'Makeni Market',
            lastUpdated: '4 hours ago'
        },
        {
            commodity: 'Palm Oil',
            currentPrice: 12000,
            previousPrice: 11500,
            unit: 'Le/liter',
            trend: 'up',
            change: 4.3,
            market: 'Freetown Central',
            lastUpdated: '1 hour ago'
        },
        {
            commodity: 'Cocoa Beans',
            currentPrice: 15000,
            previousPrice: 14800,
            unit: 'Le/kg',
            trend: 'up',
            change: 1.4,
            market: 'Kenema Market',
            lastUpdated: '6 hours ago'
        },
        {
            commodity: 'Coffee Beans',
            currentPrice: 18000,
            previousPrice: 18500,
            unit: 'Le/kg',
            trend: 'down',
            change: -2.7,
            market: 'Bo Market',
            lastUpdated: '4 hours ago'
        },
    ]

    const formatPrice = (price: number) => {
        return price.toLocaleString('en-SL')
    }

    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            <div className="container mx-auto px-4 py-12 max-w-7xl">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                    <TrendingUp className="w-10 h-10 text-[#0072C6]" />
                    <h1 className="text-4xl md:text-5xl heading-flagship">Market Analysis</h1>
                </div>

                <p className="text-xl text-muted-foreground mb-12 font-medium">
                    Stay updated with <span className="text-branded font-bold">daily market prices</span> and trends for agricultural commodities across <span className="text-branded font-bold">Sierra Leone</span>.
                </p>

                {/* Summary Cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <Card className="glass-card p-6">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-sm font-medium text-muted-foreground">Markets Tracked</h3>
                            <MapPin className="w-5 h-5 text-primary" />
                        </div>
                        <p className="text-3xl font-bold text-foreground">4</p>
                        <p className="text-sm text-muted-foreground mt-1">Across Sierra Leone</p>
                    </Card>

                    <Card className="glass-card p-6">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-sm font-medium text-muted-foreground">Commodities</h3>
                            <TrendingUp className="w-5 h-5 text-primary" />
                        </div>
                        <p className="text-3xl font-bold text-foreground">8</p>
                        <p className="text-sm text-muted-foreground mt-1">Major crops tracked</p>
                    </Card>

                    <Card className="glass-card p-6">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-sm font-medium text-muted-foreground">Last Update</h3>
                            <Calendar className="w-5 h-5 text-secondary" />
                        </div>
                        <p className="text-3xl font-bold text-foreground">1h</p>
                        <p className="text-sm text-muted-foreground mt-1">Ago</p>
                    </Card>
                </div>

                {/* Market Prices Table */}
                <Card className="glass-card p-6">
                    <div className="bg-primary text-primary-foreground px-4 py-3 -mx-6 -mt-6 mb-6 rounded-t-lg">
                        <h2 className="text-lg font-semibold">Current Market Prices</h2>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b-2 border-border">
                                    <th className="text-left py-4 px-4 font-semibold text-foreground/70">Commodity</th>
                                    <th className="text-left py-4 px-4 font-semibold text-foreground/70">Current Price</th>
                                    <th className="text-left py-4 px-4 font-semibold text-foreground/70">Previous Price</th>
                                    <th className="text-left py-4 px-4 font-semibold text-foreground/70">Change</th>
                                    <th className="text-left py-4 px-4 font-semibold text-foreground/70">Market</th>
                                    <th className="text-left py-4 px-4 font-semibold text-foreground/70">Updated</th>
                                </tr>
                            </thead>
                            <tbody>
                                {marketPrices.map((item, index) => (
                                    <tr key={index} className="border-b border-border hover:bg-muted/50 transition-colors">
                                        <td className="py-4 px-4">
                                            <span className="font-medium text-foreground">{item.commodity}</span>
                                        </td>
                                        <td className="py-4 px-4">
                                            <span className="text-lg font-bold text-primary">
                                                {formatPrice(item.currentPrice)} {item.unit}
                                            </span>
                                        </td>
                                        <td className="py-4 px-4">
                                            <span className="text-muted-foreground">
                                                {formatPrice(item.previousPrice)} {item.unit}
                                            </span>
                                        </td>
                                        <td className="py-4 px-4">
                                            <div className="flex items-center gap-2">
                                                {item.trend === 'up' ? (
                                                    <>
                                                        <TrendingUp className="w-5 h-5 text-primary" />
                                                        <span className="font-semibold text-primary">+{item.change}%</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <TrendingDown className="w-5 h-5 text-destructive" />
                                                        <span className="font-semibold text-destructive">{item.change}%</span>
                                                    </>
                                                )}
                                            </div>
                                        </td>
                                        <td className="py-4 px-4">
                                            <Badge variant="secondary" className="bg-secondary/20 text-secondary">
                                                {item.market}
                                            </Badge>
                                        </td>
                                        <td className="py-4 px-4 text-sm text-muted-foreground">
                                            {item.lastUpdated}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Card>

                {/* Market Insights */}
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <Card className="glass-card p-6">
                        <h3 className="text-xl font-semibold text-foreground mb-4">Price Trends</h3>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg">
                                <span className="font-medium text-foreground/70">Rising Prices</span>
                                <span className="text-2xl font-bold text-primary">5</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-destructive/10 rounded-lg">
                                <span className="font-medium text-foreground/70">Falling Prices</span>
                                <span className="text-2xl font-bold text-destructive">3</span>
                            </div>
                        </div>
                    </Card>

                    <Card className="glass-card p-6">
                        <h3 className="text-xl font-semibold text-foreground mb-4">Best Time to Sell</h3>
                        <div className="space-y-3">
                            <div className="p-3 bg-warning/10 border border-warning/20 rounded-lg">
                                <div className="flex items-center gap-2 mb-1">
                                    <TrendingUp className="w-5 h-5 text-warning" />
                                    <span className="font-semibold text-warning-foreground">Palm Oil</span>
                                </div>
                                <p className="text-sm text-warning-foreground/80">Price increasing - Good time to sell</p>
                            </div>
                            <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                                <div className="flex items-center gap-2 mb-1">
                                    <TrendingUp className="w-5 h-5 text-yellow-700" />
                                    <span className="font-semibold text-warning-foreground">Cassava</span>
                                </div>
                                <p className="text-sm text-warning-foreground/80">High demand - Favorable prices</p>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Info Box */}
                <Card className="glass-card p-6 mt-8 bg-secondary/10 border-secondary/20">
                    <p className="text-sm text-foreground/80">
                        <strong>Note:</strong> Prices are updated regularly from major markets across Sierra Leone including
                        Freetown Central Market, Bo Market, Kenema Market, and Makeni Market. Prices may vary by location
                        and season. Use this information as a guide for making informed selling decisions.
                    </p>
                </Card>
            </div>
        </div>
    )
}
