'use client'

import { useState, useEffect } from 'react'
import { Navigation } from '@/components/navigation'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
    Building2, Briefcase, GraduationCap, DollarSign, TrendingUp,
    FileText, UserPlus, HeartHandshake, ChevronRight, Menu
} from 'lucide-react'

export default function AgriOppPortalPage() {
    const [activeTab, setActiveTab] = useState('govt')
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [data, setData] = useState<any>(null)
    const [loading, setLoading] = useState(false)

    // Fetch data when activeTab changes
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const res = await fetch(`http://localhost:5000/api/agri-opp-portal/${activeTab}`)
                if (res.ok) {
                    const result = await res.json()
                    setData(result)
                } else {
                    console.error('Failed to fetch data')
                    setData(null)
                }
            } catch (error) {
                console.error('Error fetching data:', error)
                setData(null)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [activeTab])

    const categories = [
        { id: 'govt', label: 'Government Support Programs', icon: Building2, color: 'text-blue-600', bg: 'bg-blue-50' },
        { id: 'jobs', label: 'Jobs in Agriculture', icon: Briefcase, color: 'text-green-600', bg: 'bg-green-50' },
        { id: 'training', label: 'Training & Capacity Building', icon: GraduationCap, color: 'text-yellow-600', bg: 'bg-yellow-50' },
        { id: 'grants', label: 'Grants & Funding', icon: DollarSign, color: 'text-purple-600', bg: 'bg-purple-50' },
        { id: 'market', label: 'Market Opportunities', icon: TrendingUp, color: 'text-orange-600', bg: 'bg-orange-50' },
        { id: 'tools', label: 'Business Tools & Resources', icon: FileText, color: 'text-slate-600', bg: 'bg-slate-50' },
        { id: 'youth', label: 'Youth Opportunities', icon: UserPlus, color: 'text-pink-600', bg: 'bg-pink-50' },
        { id: 'ngo', label: 'NGO & Partner Offers', icon: HeartHandshake, color: 'text-indigo-600', bg: 'bg-indigo-50' },
    ]

    const activeCategory = categories.find(c => c.id === activeTab)

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />

            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row gap-8">

                    {/* Mobile Sidebar Toggle */}
                    <button
                        className="md:hidden flex items-center gap-2 p-2 bg-white rounded-lg border shadow-sm"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                        <Menu className="w-5 h-5" />
                        <span className="font-semibold">Categories</span>
                    </button>

                    {/* Sidebar Navigation */}
                    <aside className={`md:w-72 bg-white rounded-xl shadow-sm border p-4 h-fit md:block ${sidebarOpen ? 'block' : 'hidden'}`}>
                        <h2 className="text-xl font-bold px-4 mb-4 text-slate-800">Agri-Opp Portal</h2>
                        <div className="space-y-2">
                            {categories.map((category) => {
                                const Icon = category.icon
                                return (
                                    <button
                                        key={category.id}
                                        onClick={() => {
                                            setActiveTab(category.id)
                                            setSidebarOpen(false)
                                        }}
                                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-left
                      ${activeTab === category.id
                                                ? 'bg-green-50 text-green-700 border-l-4 border-green-600 shadow-sm'
                                                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                            }`}
                                    >
                                        <Icon className={`w-5 h-5 ${activeTab === category.id ? 'text-green-600' : 'text-slate-400'}`} />
                                        <span className="font-medium">{category.label}</span>
                                        {activeTab === category.id && <ChevronRight className="w-4 h-4 ml-auto" />}
                                    </button>
                                )
                            })}
                        </div>
                    </aside>

                    {/* Main Content Area */}
                    <main className="flex-1">
                        <div className="bg-white rounded-xl shadow-sm border p-8 min-h-[600px]">

                            {/* Header */}
                            <div className="flex items-center gap-4 mb-8 pb-6 border-b">
                                <div className={`p-4 rounded-xl ${activeCategory?.bg}`}>
                                    {activeCategory && <activeCategory.icon className={`w-8 h-8 ${activeCategory.color}`} />}
                                </div>
                                <div>
                                    <h1 className="text-3xl font-bold text-slate-900">{activeCategory?.label}</h1>
                                    <p className="text-muted-foreground mt-1">Explore opportunities in this sector</p>
                                </div>
                            </div>

                            {/* Loading State */}
                            {loading && (
                                <div className="flex justify-center py-20">
                                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
                                </div>
                            )}

                            {/* Dynamic Content Sections */}
                            {!loading && data && (
                                <>
                                    {/* 1. Government Support */}
                                    {activeTab === 'govt' && (
                                        <div className="space-y-6">
                                            <div className="grid md:grid-cols-2 gap-6">
                                                <Card className="p-6 border-green-100 bg-green-50/50">
                                                    <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                                                        <Building2 className="w-5 h-5 text-green-600" />
                                                        Subsidies & Grants
                                                    </h3>
                                                    <ul className="space-y-3">
                                                        {data.subsidies?.map((item: any, i: number) => (
                                                            <li key={i} className="flex items-start gap-2">
                                                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2" />
                                                                <span><strong>{item.title}:</strong> {item.description}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    <Button className="mt-4 w-full" variant="outline">Check Eligibility</Button>
                                                </Card>

                                                <Card className="p-6 border-blue-100 bg-blue-50/50">
                                                    <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                                                        <Building2 className="w-5 h-5 text-blue-600" />
                                                        Infrastructure & Land
                                                    </h3>
                                                    <ul className="space-y-3">
                                                        {data.infrastructure?.map((item: any, i: number) => (
                                                            <li key={i} className="flex items-start gap-2">
                                                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                                                                <span><strong>{item.title}:</strong> {item.description}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    <Button className="mt-4 w-full" variant="outline">View Locations</Button>
                                                </Card>
                                            </div>
                                        </div>
                                    )}

                                    {/* 2. Jobs */}
                                    {activeTab === 'jobs' && (
                                        <div className="space-y-6">
                                            <div className="grid gap-4">
                                                {data.map((job: any, i: number) => (
                                                    <Card key={i} className="p-4 hover:shadow-md transition-all cursor-pointer group">
                                                        <div className="flex items-center justify-between">
                                                            <div>
                                                                <h3 className="font-bold text-lg group-hover:text-green-600">{job.title}</h3>
                                                                <div className="flex gap-4 text-sm text-muted-foreground mt-1">
                                                                    <span>{job.type}</span>
                                                                    <span>•</span>
                                                                    <span>{job.location}</span>
                                                                    <span>•</span>
                                                                    <span>Posted {job.posted}</span>
                                                                </div>
                                                            </div>
                                                            <Button size="sm">Apply Now</Button>
                                                        </div>
                                                    </Card>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* 3. Training */}
                                    {activeTab === 'training' && (
                                        <div className="grid md:grid-cols-2 gap-6">
                                            {data.map((train: any, i: number) => (
                                                <Card key={i} className="p-6">
                                                    <Badge className="mb-2">{train.type}</Badge>
                                                    <h3 className="font-bold text-lg mb-2">{train.title}</h3>
                                                    <p className="text-muted-foreground text-sm mb-4">Provided by {train.provider}</p>
                                                    <Button variant="secondary" className="w-full">Enroll Free</Button>
                                                </Card>
                                            ))}
                                        </div>
                                    )}

                                    {/* 4. Grants */}
                                    {activeTab === 'grants' && (
                                        <div className="space-y-6">
                                            <Card className="p-6 bg-gradient-to-r from-purple-50 to-white border-purple-100">
                                                <h3 className="font-bold text-xl mb-4 text-purple-900">Featured Opportunities</h3>
                                                <div className="space-y-4">
                                                    {data.map((grant: any, i: number) => (
                                                        <div key={i} className="flex justify-between items-start border-b pb-4 last:border-0 last:pb-0">
                                                            <div>
                                                                <h4 className="font-semibold text-lg">{grant.title}</h4>
                                                                <p className="text-sm text-gray-600">{grant.description}</p>
                                                                <Badge variant="outline" className="mt-2 text-purple-600 border-purple-200">{grant.amount}</Badge>
                                                            </div>
                                                            <Button>Apply</Button>
                                                        </div>
                                                    ))}
                                                </div>
                                            </Card>
                                        </div>
                                    )}

                                    {/* 5. Market */}
                                    {activeTab === 'market' && (
                                        <div className="space-y-6">
                                            <div className="grid md:grid-cols-3 gap-6">
                                                {data.stats?.map((stat: any, i: number) => (
                                                    <Card key={i} className="p-4 text-center">
                                                        <h3 className="font-semibold mb-2">{stat.label}</h3>
                                                        <p className={`text-2xl font-bold text-${stat.color}-600`}>{stat.value}</p>
                                                        <p className="text-xs text-muted-foreground">{stat.sub}</p>
                                                    </Card>
                                                ))}
                                            </div>
                                            <Card className="p-6">
                                                <h3 className="font-bold text-lg mb-4">Current Market Prices</h3>
                                                <div className="space-y-3">
                                                    {data.prices?.map((price: any, i: number) => (
                                                        <div key={i} className="flex justify-between p-3 bg-gray-50 rounded-lg">
                                                            <span>{price.item}</span>
                                                            <span className="font-semibold">{price.price}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </Card>
                                        </div>
                                    )}

                                    {/* 6. Business Tools */}
                                    {activeTab === 'tools' && (
                                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                            {Array.isArray(data) && data.map((tool: string, i: number) => (
                                                <Card key={i} className="p-6 flex flex-col items-center text-center hover:border-green-200 transition-colors cursor-pointer">
                                                    <FileText className="w-10 h-10 text-slate-400 mb-4" />
                                                    <h3 className="font-semibold mb-2">{tool}</h3>
                                                    <Button variant="link" className="text-green-600 decoration-green-600 p-0 h-auto">Download PDF</Button>
                                                </Card>
                                            ))}
                                        </div>
                                    )}

                                    {/* 7. Youth */}
                                    {activeTab === 'youth' && (
                                        <div className="space-y-6">
                                            <div className="bg-pink-50 p-6 rounded-xl border border-pink-100">
                                                <h3 className="font-bold text-xl text-pink-900 mb-4">Empowering the Next Generation</h3>
                                                <p className="text-pink-800 mb-6">Special programs designed exclusively for young agri-preneurs.</p>
                                                <div className="grid gap-4">
                                                    {data.map((opp: any, i: number) => (
                                                        <Card key={i} className="p-4 bg-white/60">
                                                            <h4 className="font-bold flex items-center gap-2">
                                                                {opp.icon === 'graduation' ? <GraduationCap className="w-4 h-4 text-pink-500" /> : <UserPlus className="w-4 h-4 text-pink-500" />}
                                                                {opp.title}
                                                            </h4>
                                                            <p className="text-sm text-gray-600 mt-1">{opp.description}</p>
                                                        </Card>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* 8. NGO */}
                                    {activeTab === 'ngo' && (
                                        <div className="grid gap-6">
                                            {data.map((ngo: any, i: number) => (
                                                <Card key={i} className="p-6">
                                                    <div className="flex justify-between items-start">
                                                        <div>
                                                            <h3 className="font-bold text-lg">{ngo.name}</h3>
                                                            <p className="text-sm text-muted-foreground mb-4">{ngo.type}</p>
                                                            <ul className="text-sm space-y-1 text-gray-600">
                                                                {ngo.offers?.map((offer: string, j: number) => (
                                                                    <li key={j}>• {offer}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                        <Button variant="outline">View Offers</Button>
                                                    </div>
                                                </Card>
                                            ))}
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}
