'use client'

import { Navigation } from '@/components/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Slider } from '@/components/ui/slider'
import { Globe, TrendingUp, ShieldCheck, PieChart, ArrowRight, DollarSign } from 'lucide-react'
import { useState } from 'react'

export default function DiasporaInvestPage() {
    const [investmentAmount, setInvestmentAmount] = useState([5000])

    const opportunities = [
        {
            title: 'Commercial Rice Farm Expansion',
            location: 'Torma Bum',
            type: 'Equity',
            minInvest: '$1,000',
            targetReturn: '12-15%',
            duration: '18 Months',
            status: 'Open',
            funded: 65
        },
        {
            title: 'Solar-Powered Irrigation Scheme',
            location: 'Koinadugu',
            type: 'Debt',
            minInvest: '$500',
            targetReturn: '8% Fixed',
            duration: '12 Months',
            status: 'Closing Soon',
            funded: 88
        },
        {
            title: 'Organic Cashew Export Hub',
            location: 'Bombali',
            type: 'Equity',
            minInvest: '$2,500',
            targetReturn: '18-22%',
            duration: '3 Years',
            status: 'Open',
            funded: 32
        }
    ]

    const calculateReturn = (amount: number) => {
        return Math.round(amount * 1.15).toLocaleString()
    }

    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            <main className="container mx-auto px-4 py-8">
                {/* Hero */}
                <div className="bg-secondary rounded-2xl p-8 md:p-12 text-secondary-foreground mb-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />                   <div className="relative z-10 max-w-2xl">
                        <div className="flex items-center gap-2 text-primary mb-4 font-semibold uppercase tracking-wider text-sm">
                            <Globe className="w-4 h-4" />
                            Diaspora Investment Unit
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Invest in Home Soil. <br />Grow Sierra Leone.</h1>
                        <p className="text-secondary-foreground/80 text-lg mb-8">
                            Secure, transparent, and high-impact agricultural investments vetted by the Ministry of Agriculture. Monitor your portfolio in real-time.
                        </p>                       <div className="flex flex-wrap gap-4">
                            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
                                View Open Opportunities
                            </Button>
                            <Button size="lg" variant="outline" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10">
                                How It Works
                            </Button>                       </div>
                    </div>
                </div>

                {/* ROI Calculator */}
                <Card className="mb-12 border-border shadow-lg bg-card/50 backdrop-blur-sm">                   <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <CalculatorIcon /> Investment Simulator
                    </CardTitle>
                </CardHeader>
                    <CardContent>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <label className="text-sm font-medium">Investment Amount</label>
                                        <span className="font-bold text-primary">${investmentAmount[0].toLocaleString()}</span>
                                    </div>
                                    <Slider
                                        value={investmentAmount}
                                        onValueChange={setInvestmentAmount}
                                        max={50000}
                                        step={500}
                                        className="py-4"
                                    />
                                    <div className="flex justify-between text-xs text-muted-foreground">
                                        <span>$500</span>
                                        <span>$50,000</span>
                                    </div>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Based on average historical returns of 15% p.a. from vetted rice value chain projects.
                                </p>                           </div>

                            <div className="bg-primary/5 rounded-xl p-6 text-center">
                                <p className="text-sm font-medium text-muted-foreground mb-2">Estimated Returns (18 Months)</p>
                                <div className="text-4xl font-bold text-primary mb-1">
                                    ${calculateReturn(investmentAmount[0])}
                                </div>
                                <p className="text-xs text-primary font-medium bg-primary/10 inline-block px-2 py-1 rounded">
                                    +${(Math.round(investmentAmount[0] * 1.15) - investmentAmount[0]).toLocaleString()} Net Profit
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Opportunities Grid */}
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">Featured Opportunities</h2>
                    <Button variant="link" className="text-primary">View All &rarr;</Button>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {opportunities.map((opp, i) => (
                        <Card key={i} className="group hover:shadow-lg transition-all border-border">
                            <div className="h-48 bg-muted relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <Badge className="absolute top-4 right-4 bg-background text-foreground hover:bg-background">{opp.type}</Badge>                               <div className="absolute bottom-4 left-4 text-white">
                                    <h3 className="font-bold text-lg leading-tight">{opp.title}</h3>
                                    <p className="text-sm opacity-90 flex items-center gap-1 mt-1">
                                        <MapPinIcon className="w-3 h-3" /> {opp.location}
                                    </p>
                                </div>
                            </div>
                            <CardContent className="p-6">
                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div>
                                        <p className="text-xs text-muted-foreground">Target Return</p>
                                        <p className="font-bold text-primary">{opp.targetReturn}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground">Min. Investment</p>
                                        <p className="font-bold">{opp.minInvest}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground">Duration</p>
                                        <p className="font-medium">{opp.duration}</p>
                                    </div>                                   <div>
                                        <p className="text-xs text-muted-foreground">Risk Rating</p>
                                        <Badge variant="outline" className="text-xs font-normal border-primary/20 text-primary bg-primary/10">Low-Medium</Badge>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between text-xs font-medium">
                                        <span>{opp.funded}% Funded</span>
                                        <span>{opp.status}</span>
                                    </div>
                                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-primary rounded-full transition-all duration-1000"
                                            style={{ width: `${opp.funded}%` }}
                                        />
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="border-t p-4 bg-muted/50">
                                <Button className="w-full bg-secondary hover:bg-primary text-secondary-foreground hover:text-primary-foreground transition-colors">Invest Now</Button>
                            </CardFooter>                       </Card>
                    ))}
                </div>

                {/* Trust Signals */}
                <div className="grid md:grid-cols-3 gap-8 text-center py-8 border-t">
                    <div>
                        <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                            <ShieldCheck className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold mb-2">Govt Backed</h3>
                        <p className="text-sm text-muted-foreground">All projects vetted by Ministry of Agriculture and Food Security</p>
                    </div>
                    <div>
                        <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                            <TrendingUp className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold mb-2">High Impact</h3>
                        <p className="text-sm text-muted-foreground">Directly contribute to national food security and job creation</p>
                    </div>
                    <div>
                        <div className="w-12 h-12 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-4">
                            <PieChart className="w-6 h-6" />
                        </div>
                        <h3 className="font-bold mb-2">Transparent</h3>
                        <p className="text-sm text-muted-foreground">Real-time reporting and digital dashboards for all investors</p>
                    </div>               </div>

            </main>
        </div>
    )
}

function CalculatorIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="16" height="20" x="4" y="2" rx="2" />
            <line x1="8" x2="16" y1="6" y2="6" />
            <line x1="16" x2="16" y1="14" y2="18" />
            <path d="M16 10h.01" />
            <path d="M12 10h.01" />
            <path d="M8 10h.01" />
            <path d="M12 14h.01" />
            <path d="M8 14h.01" />
            <path d="M12 18h.01" />
            <path d="M8 18h.01" />
        </svg>
    )
}

function MapPinIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    )
}
