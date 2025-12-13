'use client'

import { useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { CreditCard, Landmark, ShieldCheck, BarChart3, Bell, Wallet, ArrowRight } from 'lucide-react'

export default function FinancialServicesPage() {
    const [isMobileMoneyOpen, setIsMobileMoneyOpen] = useState(false)
    const [isPriceAlertOpen, setIsPriceAlertOpen] = useState(false)

    const handleLinkMobileMoney = (e: React.FormEvent) => {
        e.preventDefault()
        setIsMobileMoneyOpen(false)
        alert('Mobile money account linked successfully!')
    }

    const handleSetPriceAlert = (e: React.FormEvent) => {
        e.preventDefault()
        setIsPriceAlertOpen(false)
        alert('Price alert set successfully! You will be notified via SMS.')
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Navigation />

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Financial Services</h1>
                    <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                        Complete financial solutions for Sierra Leonean farmers. Access loans, insurance, and digital payments.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

                        {/* Mobile Money Integration */}
                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                                    <Wallet className="w-6 h-6 text-orange-600" />
                                </div>
                                <CardTitle>Mobile Money</CardTitle>
                                <CardDescription>Pay and receive payments via Orange Money & Africell Money</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Dialog open={isMobileMoneyOpen} onOpenChange={setIsMobileMoneyOpen}>
                                    <DialogTrigger asChild>
                                        <Button className="w-full bg-green-600 hover:bg-green-700">Link Account</Button>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Link Mobile Money Account</DialogTitle>
                                        </DialogHeader>
                                        <form onSubmit={handleLinkMobileMoney} className="space-y-4">
                                            <div className="space-y-2">
                                                <Label>Provider</Label>
                                                <Select required>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select Provider" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="orange">Orange Money</SelectItem>
                                                        <SelectItem value="africell">Africell Money</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="space-y-2">
                                                <Label>Phone Number</Label>
                                                <Input type="tel" placeholder="076/077/078 XXX XXXX" required />
                                            </div>
                                            <div className="space-y-2">
                                                <Label>PIN</Label>
                                                <Input type="password" maxLength={4} required />
                                            </div>
                                            <DialogFooter>
                                                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">Link Account</Button>
                                            </DialogFooter>
                                        </form>
                                    </DialogContent>
                                </Dialog>
                            </CardContent>
                        </Card>

                        {/* Agricultural Loans */}
                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                    <Landmark className="w-6 h-6 text-blue-600" />
                                </div>
                                <CardTitle>Agricultural Loans</CardTitle>
                                <CardDescription>Apply for loans up to Le 50,000,000 with low interest rates</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Button className="w-full bg-green-600 hover:bg-green-700">Apply for Loan</Button>
                            </CardContent>
                        </Card>

                        {/* Crop Insurance */}
                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                                    <ShieldCheck className="w-6 h-6 text-purple-600" />
                                </div>
                                <CardTitle>Crop Insurance</CardTitle>
                                <CardDescription>Protect your crops from natural disasters and pest outbreaks</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Button className="w-full bg-green-600 hover:bg-green-700">Get Insured</Button>
                            </CardContent>
                        </Card>

                        {/* Financial Dashboard */}
                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                    <BarChart3 className="w-6 h-6 text-green-600" />
                                </div>
                                <CardTitle>Financial Dashboard</CardTitle>
                                <CardDescription>Track your farm's income, expenses, and overall profitability</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Button className="w-full bg-green-600 hover:bg-green-700">View Dashboard</Button>
                            </CardContent>
                        </Card>

                        {/* Price Alerts */}
                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                                    <Bell className="w-6 h-6 text-yellow-600" />
                                </div>
                                <CardTitle>Price Alerts</CardTitle>
                                <CardDescription>Get notified instantly when crop prices reach your target</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Dialog open={isPriceAlertOpen} onOpenChange={setIsPriceAlertOpen}>
                                    <DialogTrigger asChild>
                                        <Button className="w-full bg-green-600 hover:bg-green-700">Set Alert</Button>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Set Price Alert</DialogTitle>
                                        </DialogHeader>
                                        <form onSubmit={handleSetPriceAlert} className="space-y-4">
                                            <div className="space-y-2">
                                                <Label>Crop Type</Label>
                                                <Select required>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select Crop" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="rice">Rice</SelectItem>
                                                        <SelectItem value="cassava">Cassava</SelectItem>
                                                        <SelectItem value="cocoa">Cocoa</SelectItem>
                                                        <SelectItem value="coffee">Coffee</SelectItem>
                                                        <SelectItem value="palm_oil">Palm Oil</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="space-y-2">
                                                <Label>Target Price (Le/kg)</Label>
                                                <Input type="number" placeholder="e.g., 15000" required />
                                            </div>
                                            <div className="space-y-2">
                                                <Label>Alert Type</Label>
                                                <Select required>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select Condition" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="above">When price goes above</SelectItem>
                                                        <SelectItem value="below">When price goes below</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <DialogFooter>
                                                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">Set Alert</Button>
                                            </DialogFooter>
                                        </form>
                                    </DialogContent>
                                </Dialog>
                            </CardContent>
                        </Card>

                        {/* Investment Opportunities */}
                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                                    <ArrowRight className="w-6 h-6 text-indigo-600" />
                                </div>
                                <CardTitle>Investments</CardTitle>
                                <CardDescription>Explore investment opportunities to grow your farming business</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Button className="w-full bg-green-600 hover:bg-green-700">Explore Options</Button>
                            </CardContent>
                        </Card>

                    </div>
                </div>
            </section>
        </div>
    )
}
