"use client"

import { useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Building2, Search, DollarSign, GraduationCap, Sprout, ExternalLink } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function GovernmentSchemesPage() {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('all')

    // Sierra Leone government agricultural schemes
    const schemes = [
        {
            id: 1,
            title: 'Feed Salone Agricultural Loan Scheme',
            category: 'loan',
            description: 'Low-interest loans for smallholder farmers to purchase seeds, fertilizers, and equipment.',
            eligibility: 'Registered farmers with valid ID and land ownership documents',
            amount: 'Le 5,000,000 - Le 50,000,000',
            interest: '5% per annum',
            duration: '12-36 months',
            provider: 'Ministry of Agriculture & Food Security',
            contact: 'loans@agriculture.gov.sl'
        },
        {
            id: 2,
            title: 'Smallholder Commercialization Programme',
            category: 'subsidy',
            description: 'Subsidized inputs including improved seeds, fertilizers, and agricultural tools for small-scale farmers.',
            eligibility: 'Farmers cultivating 1-5 hectares',
            amount: '50% subsidy on inputs',
            interest: 'N/A',
            duration: 'Per season',
            provider: 'Ministry of Agriculture & Food Security',
            contact: 'scp@agriculture.gov.sl'
        },
        {
            id: 3,
            title: 'Youth in Agriculture Training Program',
            category: 'training',
            description: 'Free training and startup support for young farmers (18-35 years) in modern farming techniques.',
            eligibility: 'Sierra Leonean youth aged 18-35 with interest in agriculture',
            amount: 'Free training + Le 2,000,000 startup grant',
            interest: 'N/A',
            duration: '3 months training',
            provider: 'National Youth Commission',
            contact: 'youth@agriculture.gov.sl'
        },
        {
            id: 4,
            title: 'Women Farmers Empowerment Fund',
            category: 'loan',
            description: 'Special financing for women-led agricultural businesses and cooperatives.',
            eligibility: 'Women farmers or women-led cooperatives',
            amount: 'Le 3,000,000 - Le 30,000,000',
            interest: '3% per annum',
            duration: '12-24 months',
            provider: 'Ministry of Gender & Children Affairs',
            contact: 'women@agriculture.gov.sl'
        },
        {
            id: 5,
            title: 'Rice Development Programme',
            category: 'subsidy',
            description: 'Support for rice farmers including subsidized seeds, fertilizers, and mechanization services.',
            eligibility: 'Rice farmers with minimum 2 hectares',
            amount: '60% subsidy on rice inputs',
            interest: 'N/A',
            duration: 'Per season',
            provider: 'Sierra Leone Agricultural Research Institute',
            contact: 'rice@slari.gov.sl'
        },
        {
            id: 6,
            title: 'Cooperative Development Grant',
            category: 'grant',
            description: 'Grants for registered farmer cooperatives to improve infrastructure and processing facilities.',
            eligibility: 'Registered cooperatives with minimum 20 members',
            amount: 'Le 10,000,000 - Le 100,000,000',
            interest: 'N/A',
            duration: 'One-time grant',
            provider: 'Cooperative Development Agency',
            contact: 'grants@cda.gov.sl'
        },
        {
            id: 7,
            title: 'Agricultural Extension Services',
            category: 'training',
            description: 'Free advisory services, training, and technical support from agricultural extension officers.',
            eligibility: 'All farmers',
            amount: 'Free service',
            interest: 'N/A',
            duration: 'Ongoing',
            provider: 'Ministry of Agriculture & Food Security',
            contact: 'extension@agriculture.gov.sl'
        },
        {
            id: 8,
            title: 'Cassava Value Chain Support',
            category: 'subsidy',
            description: 'Support for cassava farmers including improved varieties, processing equipment, and market linkages.',
            eligibility: 'Cassava farmers and processors',
            amount: '40% subsidy on equipment',
            interest: 'N/A',
            duration: 'Per season',
            provider: 'Ministry of Trade & Industry',
            contact: 'cassava@trade.gov.sl'
        },
    ]

    const categories = [
        { value: 'all', label: 'All Schemes', icon: Building2 },
        { value: 'loan', label: 'Loans', icon: DollarSign },
        { value: 'subsidy', label: 'Subsidies', icon: Sprout },
        { value: 'grant', label: 'Grants', icon: DollarSign },
        { value: 'training', label: 'Training', icon: GraduationCap },
    ]

    const filteredSchemes = schemes.filter(scheme => {
        const matchesSearch = scheme.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            scheme.description.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesCategory = selectedCategory === 'all' || scheme.category === selectedCategory
        return matchesSearch && matchesCategory
    })

    const getCategoryColor = (category: string) => {
        switch (category) {
            case 'loan':
                return 'bg-blue-100 text-blue-800'
            case 'subsidy':
                return 'bg-green-100 text-green-800'
            case 'grant':
                return 'bg-purple-100 text-purple-800'
            case 'training':
                return 'bg-yellow-100 text-yellow-800'
            default:
                return 'bg-gray-100 text-gray-800'
        }
    }

    return (
        <div className="min-h-screen">
            <Navigation />

            <div className="container mx-auto px-4 py-12 max-w-7xl">
                {/* Header */}
                <div className="flex items-center gap-3 mb-8">
                    <Building2 className="w-8 h-8 text-primary" />
                    <h1 className="text-4xl font-bold text-slate-900">Government Schemes</h1>
                </div>

                <p className="text-lg text-muted-foreground mb-8">
                    Browse agricultural government schemes and subsidies available for farmers in Sierra Leone
                </p>

                {/* Search and Filter */}
                <Card className="glass-card p-6 mb-8">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <Input
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search schemes..."
                                className="pl-10 bg-white/50"
                            />
                        </div>
                        <div className="flex gap-2 flex-wrap">
                            {categories.map((cat) => {
                                const Icon = cat.icon
                                return (
                                    <Button
                                        key={cat.value}
                                        onClick={() => setSelectedCategory(cat.value)}
                                        variant={selectedCategory === cat.value ? 'default' : 'outline'}
                                        className={selectedCategory === cat.value ? 'bg-primary text-white' : ''}
                                    >
                                        <Icon className="w-4 h-4 mr-2" />
                                        {cat.label}
                                    </Button>
                                )
                            })}
                        </div>
                    </div>
                </Card>

                {/* Schemes Grid */}
                <div className="grid gap-6">
                    {filteredSchemes.length > 0 ? (
                        filteredSchemes.map((scheme) => (
                            <Card key={scheme.id} className="glass-card p-6 hover:shadow-xl transition-shadow">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="text-xl font-semibold text-slate-900">{scheme.title}</h3>
                                            <Badge className={getCategoryColor(scheme.category)}>
                                                {scheme.category.toUpperCase()}
                                            </Badge>
                                        </div>
                                        <p className="text-muted-foreground mb-4">{scheme.description}</p>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <h4 className="text-sm font-semibold text-slate-700 mb-1">Eligibility</h4>
                                        <p className="text-sm text-slate-600">{scheme.eligibility}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-slate-700 mb-1">Amount/Benefit</h4>
                                        <p className="text-sm text-primary font-semibold">{scheme.amount}</p>
                                    </div>
                                    {scheme.interest !== 'N/A' && (
                                        <div>
                                            <h4 className="text-sm font-semibold text-slate-700 mb-1">Interest Rate</h4>
                                            <p className="text-sm text-slate-600">{scheme.interest}</p>
                                        </div>
                                    )}
                                    <div>
                                        <h4 className="text-sm font-semibold text-slate-700 mb-1">Duration</h4>
                                        <p className="text-sm text-slate-600">{scheme.duration}</p>
                                    </div>
                                </div>

                                <div className="border-t border-slate-200 pt-4 mt-4">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm text-slate-700">
                                                <strong>Provider:</strong> {scheme.provider}
                                            </p>
                                            <p className="text-sm text-slate-600">
                                                <strong>Contact:</strong> {scheme.contact}
                                            </p>
                                        </div>
                                        <Button className="bg-primary hover:bg-primary/90 text-white">
                                            Apply Now
                                            <ExternalLink className="w-4 h-4 ml-2" />
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        ))
                    ) : (
                        <Card className="glass-card p-12 text-center">
                            <p className="text-lg text-muted-foreground">
                                No schemes found matching your search criteria
                            </p>
                        </Card>
                    )}
                </div>

                {/* Info Box */}
                <Card className="glass-card p-6 mt-8 bg-blue-50 border-blue-200">
                    <p className="text-sm text-slate-700">
                        <strong>Note:</strong> These schemes are provided by various government agencies and ministries
                        in Sierra Leone. Requirements and availability may change. Please contact the respective provider
                        for the most up-to-date information and application procedures.
                    </p>
                </Card>
            </div>
        </div>
    )
}
