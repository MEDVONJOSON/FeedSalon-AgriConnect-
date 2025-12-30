'use client'

import { Navigation } from '@/components/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Factory, Truck, Users, Activity, MapPin, TrendingUp, ArrowRight, Zap, Settings, Sprout } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export default function AgriIndustryPage() {
    const stats = [
        { label: 'Processing Plants', value: '42', icon: Factory, color: 'text-secondary', trend: '+3 this month' },
        { label: 'Jobs Created', value: '1,250+', icon: Users, color: 'text-primary', trend: '+12% growth' },
        { label: 'Processing Capacity', value: '150T', icon: Activity, color: 'text-warning', trend: 'Daily output' },
        { label: 'Active Projects', value: '18', icon: Zap, color: 'text-accent', trend: 'In development' },
    ]

    const industries = [
        {
            id: 1,
            name: 'Lion Mountain Rice Mill',
            type: 'Rice Processing',
            location: 'Bo District',
            capacity: '50 Tons/Day',
            status: 'Operational',
            image: '/industry-rice.jpg'
        },
        {
            id: 2,
            name: 'Salone Cassava Factory',
            type: 'Cassava Flour (HQCF)',
            location: 'Makeni',
            capacity: '20 Tons/Day',
            status: 'Maintenance',
            image: '/industry-cassava.jpg'
        },
        {
            id: 3,
            name: 'Eastern Palm Oil Refinery',
            type: 'Oil Processing',
            location: 'Kenema',
            capacity: '35 Tons/Day',
            status: 'Operational',
            image: '/industry-palm.jpg'
        },
        {
            id: 4,
            name: 'Freetown Juice Cannery',
            type: 'Fruit Processing',
            location: 'Western Area',
            capacity: '15 Tons/Day',
            status: 'Expansion',
            image: '/industry-juice.jpg'
        }
    ]

    const productionData = [
        { month: 'Jan', output: 120 },
        { month: 'Feb', output: 140 },
        { month: 'Mar', output: 180 },
        { month: 'Apr', output: 160 },
        { month: 'May', output: 210 },
        { month: 'Jun', output: 250 },
    ]

    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            <main className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
                            <Factory className="w-8 h-8 text-primary" />
                            Agri-Industry Hub
                        </h1>
                        <p className="text-muted-foreground mt-2 max-w-2xl">
                            Driving Sierra Leone's agricultural transformation through industrial processing and value addition.
                        </p>                   </div>
                    <Button className="bg-primary hover:bg-primary/90">
                        <Settings className="w-4 h-4 mr-2" />
                        Register New Facility
                    </Button>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon
                        return (
                            <Card key={index} className="shadow-sm hover:shadow-md transition-shadow">
                                <CardContent className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className={`p-3 rounded-full bg-muted ${stat.color}`}>
                                            <Icon className="w-6 h-6" />
                                        </div>                                       <Badge variant="outline" className="text-xs font-normal">
                                            {stat.trend}
                                        </Badge>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-foreground">{stat.value}</h3>
                                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>

                <Tabs defaultValue="overview" className="space-y-6">
                    <TabsList className="bg-card border p-1 rounded-lg">                       <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="industries">Active Industries</TabsTrigger>
                        <TabsTrigger value="investment">Investment Opportunities</TabsTrigger>
                        <TabsTrigger value="analytics">Production Analytics</TabsTrigger>
                    </TabsList>

                    {/* Overview Content */}
                    <TabsContent value="overview" className="space-y-6">
                        <div className="grid md:grid-cols-3 gap-6">
                            {/* Featured Facility */}
                            <Card className="md:col-span-2 overflow-hidden">
                                <div className="h-48 bg-gradient-to-r from-primary to-info/20 relative p-8 text-white">
                                    <Badge className="bg-white/20 hover:bg-white/30 text-white mb-4">Featured Facility</Badge>
                                    <h2 className="text-2xl font-bold mb-2">Lion Mountain Rice Mill</h2>
                                    <p className="max-w-md opacity-90">State-of-the-art rice processing facility serving 5,000+ local farmers in the Bo District.</p>
                                </div>
                                <CardContent className="p-6">
                                    <div className="grid grid-cols-3 gap-4 text-center">
                                        <div className="p-4 border rounded-lg">
                                            <p className="text-2xl font-bold text-primary">95%</p>
                                            <p className="text-xs text-muted-foreground uppercase tracking-wide">Efficiency</p>
                                        </div>
                                        <div className="p-4 border rounded-lg">
                                            <p className="text-2xl font-bold text-secondary">24/7</p>
                                            <p className="text-xs text-muted-foreground uppercase tracking-wide">Operation</p>
                                        </div>
                                        <div className="p-4 border rounded-lg">
                                            <p className="text-2xl font-bold text-warning">ISO</p>
                                            <p className="text-xs text-muted-foreground uppercase tracking-wide">Certified</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Recent Activity */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">Recent Updates</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    {[1, 2, 3].map((_, i) => (
                                        <div key={i} className="flex gap-3 pb-3 border-b last:border-0 last:pb-0">
                                            <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                                            <div>
                                                <p className="text-sm font-medium">New machinery arrived at Makeni Hub</p>
                                                <p className="text-xs text-muted-foreground">2 hours ago</p>
                                            </div>
                                        </div>
                                    ))}
                                    <Button variant="ghost" className="w-full text-primary hover:text-primary/90 text-sm">
                                        View All Updates
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Value Chains */}
                        <h2 className="text-xl font-bold text-foreground mt-8 mb-4">Priority Value Chains</h2>                       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {['Rice', 'Cassava', 'Cocoa', 'Palm Oil'].map((crop) => (
                                <Card key={crop} className="hover:border-primary transition-colors cursor-pointer group">
                                    <CardContent className="p-6 flex flex-col items-center text-center">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                                            <Sprout className="w-6 h-6 text-primary" />
                                        </div>
                                        <h3 className="font-semibold">{crop}</h3>
                                        <p className="text-xs text-muted-foreground mt-1">12 Facilities</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>

                    {/* Active Industries List */}
                    <TabsContent value="industries">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {industries.map((ind) => (
                                <Card key={ind.id} className="overflow-hidden">
                                    <div className="h-40 bg-muted relative">
                                        {/* Placeholder for real image */}
                                        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                                            <Factory className="w-12 h-12" />
                                        </div>                                       <Badge
                                            className={`absolute top-4 right-4 ${ind.status === 'Operational' ? 'bg-primary' :
                                                ind.status === 'Maintenance' ? 'bg-warning' : 'bg-secondary'
                                                }`}
                                        >
                                            {ind.status}
                                        </Badge>
                                    </div>
                                    <CardContent className="p-6">
                                        <h3 className="font-bold text-lg mb-1">{ind.name}</h3>
                                        <p className="text-sm text-muted-foreground mb-4">{ind.type}</p>

                                        <div className="space-y-2 text-sm">
                                            <div className="flex items-center gap-2 text-muted-foreground">
                                                <MapPin className="w-4 h-4" />
                                                {ind.location}
                                            </div>
                                            <div className="flex items-center gap-2 text-muted-foreground">
                                                <Activity className="w-4 h-4" />
                                                Capacity: {ind.capacity}
                                            </div>
                                        </div>                                   </CardContent>
                                    <CardFooter className="bg-muted/50 p-4">
                                        <Button variant="outline" className="w-full">View Details</Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>

                    {/* Analytics (Mock Chart) */}
                    <TabsContent value="analytics">
                        <Card>
                            <CardHeader>
                                <CardTitle>Industrial Output Trend (2024)</CardTitle>
                                <CardDescription>Monthly processing output in tons across all facilities</CardDescription>
                            </CardHeader>
                            <CardContent className="h-[400px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={productionData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="month" />
                                        <YAxis />
                                        <Tooltip />
                                        <Bar dataKey="output" fill="var(--primary)" radius={[4, 4, 0, 0]} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>
                    </TabsContent>

                </Tabs>
            </main>
        </div>
    )
}
