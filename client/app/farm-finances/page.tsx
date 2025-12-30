'use client'

import { Navigation } from '@/components/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { DollarSign, PieChart, TrendingUp, CreditCard, Banknote, History, Download, PlusCircle } from 'lucide-react'
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

export default function FarmFinancesPage() {
    const earningsData = [
        { month: 'Jan', amount: 4500 },
        { month: 'Feb', amount: 5200 },
        { month: 'Mar', amount: 4800 },
        { month: 'Apr', amount: 6100 },
        { month: 'May', amount: 7500 },
        { month: 'Jun', amount: 8200 },
    ]

    const transactions = [
        { id: 1, desc: 'Sale of 50 Bags Rice', date: 'Today', amount: '+ Le 12,500,000', type: 'Credit' },
        { id: 2, desc: 'Fertilizer Purchase', date: 'Yesterday', amount: '- Le 2,400,000', type: 'Debit' },
        { id: 3, desc: 'Labor Payment (Weeding)', date: '2 days ago', amount: '- Le 850,000', type: 'Debit' },
    ]

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navigation />

            <main className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
                            <Banknote className="w-8 h-8 text-primary" />
                            Farm Finances
                        </h1>
                        <p className="text-muted-foreground mt-2">
                            Track your income, manage expenses, and access financial services.
                        </p>
                    </div>
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        <Download className="w-4 h-4 mr-2" />
                        Export Report
                    </Button>
                </div>

                {/* Balance Card Section */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <Card className="bg-gradient-to-r from-primary to-primary/80 text-white border-none shadow-lg col-span-2">
                        <CardContent className="p-8">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <p className="text-white/90 font-medium mb-1">Total Balance</p>
                                    <h2 className="text-4xl font-bold">Le 45,250,000</h2>
                                </div>
                                <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm">
                                    <CreditCard className="w-8 h-8 text-white" />
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <Button className="bg-background text-primary hover:bg-background/90">
                                    <PlusCircle className="w-4 h-4 mr-2" /> Add Income
                                </Button>
                                <Button variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                                    Record Expense
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-card">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-lg">Loan Eligibility</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-center py-4">
                                <div className="w-24 h-24 rounded-full border-8 border-primary flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold text-primary">85%</span>
                                </div>
                                <p className="font-semibold text-foreground">Excellent Score</p>
                                <p className="text-sm text-muted-foreground">You qualify for input loans up to Le 50M.</p>
                            </div>
                            <Button className="w-full mt-2" variant="outline">Apply Now</Button>
                        </CardContent>
                    </Card>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Earnings Chart */}
                    <Card className="lg:col-span-2">
                        <CardHeader>
                            <CardTitle>Income Overview (Last 6 Months)</CardTitle>
                        </CardHeader>
                        <CardContent className="h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={earningsData}>
                                    <defs>
                                        <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="var(--sl-green)" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="var(--sl-green)" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <XAxis dataKey="month" />
                                    <YAxis />
                                    <Tooltip />
                                    <Area type="monotone" dataKey="amount" stroke="var(--sl-green)" fillOpacity={1} fill="url(#colorIncome)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>

                    {/* Recent Transactions */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <History className="w-5 h-5 text-muted-foreground" />
                                Recent History
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {transactions.map((tx) => (
                                <div key={tx.id} className="flex items-center justify-between p-3 bg-muted rounded-lg border border-border">
                                    <div>
                                        <p className="font-medium text-foreground">{tx.desc}</p>
                                        <p className="text-xs text-muted-foreground">{tx.date}</p>
                                    </div>
                                    <span className={`font-bold ${tx.type === 'Credit' ? 'text-primary' : 'text-destructive'}`}>
                                        {tx.amount}
                                    </span>
                                </div>
                            ))}
                            <Button variant="ghost" className="w-full text-muted-foreground hover:text-foreground hover:bg-muted">View All</Button>
                        </CardContent>
                    </Card>
                </div>

            </main>
        </div>
    )
}
