'use client'

import { useState, useEffect } from 'react'
import { Navigation } from '@/components/navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import {
    Search, MapPin, Phone, User, Filter, Tag, ArrowRight, ShoppingCart,
    Wheat, Beef, Tractor, Sprout, Package, SlidersHorizontal, Star,
    Heart, MessageCircle, TrendingUp, Clock, Globe, ShieldCheck, Zap, Plus
} from 'lucide-react'
import Link from 'next/link'
import { API_URL } from '@/lib/api-config'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { auth, type User as AuthUser } from '@/lib/auth'

const CATEGORIES = {
    'All': { icon: Package, color: 'text-slate-600', subcategories: [] },
    'Crops': {
        icon: Wheat,
        color: 'text-[#1EB53A]',
        subcategories: ['Rice', 'Cassava', 'Palm Oil', 'Cocoa', 'Vegetables', 'Fruits', 'Grains']
    },
    'Livestock': {
        icon: Beef,
        color: 'text-amber-600',
        subcategories: ['Cattle', 'Goats', 'Sheep', 'Poultry', 'Fish', 'Pigs']
    },
    'Equipment': {
        icon: Tractor,
        color: 'text-[#0072C6]',
        subcategories: ['Tractors', 'Irrigation', 'Tools', 'Processing Machines', 'Storage']
    },
    'Inputs': {
        icon: Sprout,
        color: 'text-emerald-600',
        subcategories: ['Seeds', 'Fertilizers', 'Pesticides', 'Animal Feed', 'Veterinary']
    },
    'Processed': {
        icon: Package,
        color: 'text-indigo-600',
        subcategories: ['Packaged Foods', 'Dried Products', 'Oils', 'Beverages', 'Snacks']
    }
}

export default function MarketplacePage() {
    const [products, setProducts] = useState<any[]>([])
    const [filteredProducts, setFilteredProducts] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [selectedSubcategory, setSelectedSubcategory] = useState('All')
    const [priceRange, setPriceRange] = useState([0, 10000000])
    const [sortBy, setSortBy] = useState('newest')
    const [user, setUser] = useState<AuthUser | null>(null)
    const [showFilters, setShowFilters] = useState(false)
    const [favorites, setFavorites] = useState<number[]>([])

    // Inquiry Modal State
    const [showInquiryModal, setShowInquiryModal] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState<any>(null)
    const [inquiryForm, setInquiryForm] = useState({
        buyer_name: '',
        buyer_email: '',
        buyer_phone: '',
        message: ''
    })
    const [submitting, setSubmitting] = useState(false)

    useEffect(() => {
        setUser(auth.getUser())
        const savedFavorites = localStorage.getItem('marketplace_favorites')
        if (savedFavorites) {
            setFavorites(JSON.parse(savedFavorites))
        }
    }, [])

    useEffect(() => {
        fetchProducts()
    }, [])

    useEffect(() => {
        filterAndSortProducts()
    }, [searchQuery, selectedCategory, selectedSubcategory, priceRange, sortBy, products])

    const fetchProducts = async () => {
        try {
            const res = await fetch(`${API_URL}/api/marketplace/products`)
            if (res.ok) {
                const data = await res.json()
                setProducts(data)
                setFilteredProducts(data)
            }
        } catch (error) {
            console.error('Error fetching products:', error)
            // Fallback to minimal demo products if API is totally unreachable
            const demoProducts = [
                { id: 101, product_name: 'Premium Local Rice', price: '850000', category: 'Crops', unit: '50kg bag', quantity_available: '45', seller_name: 'Sierra Farms', seller_location: 'Bo', status: 'available', created_at: new Date().toISOString() },
                { id: 102, product_name: 'Organic Palm Oil', price: '600000', category: 'Processed', unit: '5 Gallon', quantity_available: '12', seller_name: 'Native Oils', seller_location: 'Kenema', status: 'available', created_at: new Date().toISOString() },
                { id: 103, product_name: 'Cassava Tubers', price: '450000', category: 'Crops', unit: '100kg', quantity_available: '80', seller_name: 'Mende Roots', seller_location: 'Makeni', status: 'available', created_at: new Date().toISOString() }
            ]
            setProducts(demoProducts)
            setFilteredProducts(demoProducts)
        } finally {
            setLoading(false)
        }
    }

    const filterAndSortProducts = () => {
        let filtered = [...products]
        if (selectedCategory !== 'All') {
            filtered = filtered.filter(p => p.category === selectedCategory)
        }
        if (selectedSubcategory !== 'All') {
            filtered = filtered.filter(p => p.subcategory === selectedSubcategory)
        }
        if (searchQuery) {
            const query = searchQuery.toLowerCase()
            filtered = filtered.filter(p =>
                p.product_name.toLowerCase().includes(query) ||
                p.description.toLowerCase().includes(query) ||
                p.seller_location.toLowerCase().includes(query)
            )
        }
        filtered = filtered.filter(p => {
            const price = parseFloat(p.price)
            return price >= priceRange[0] && price <= priceRange[1]
        })
        switch (sortBy) {
            case 'price_low':
                filtered.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
                break
            case 'price_high':
                filtered.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
                break
            case 'newest':
                filtered.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
                break
            case 'popular':
                filtered.sort((a, b) => (b.views || 0) - (a.views || 0))
                break
        }
        setFilteredProducts(filtered)
    }

    const toggleFavorite = (productId: number) => {
        const newFavorites = favorites.includes(productId)
            ? favorites.filter(id => id !== productId)
            : [...favorites, productId]
        setFavorites(newFavorites)
        localStorage.setItem('marketplace_favorites', JSON.stringify(newFavorites))
    }

    const handleContactClick = (product: any) => {
        setSelectedProduct(product)
        const currentUser = auth.getUser()
        setInquiryForm(prev => ({
            ...prev,
            buyer_name: currentUser?.name || '',
            buyer_email: currentUser?.email || '',
            buyer_phone: currentUser?.phone || '',
            message: `I'm interested in buying your ${product.product_name}. Is it still available?`
        }))
        setShowInquiryModal(true)
    }

    const handleSubmitInquiry = async (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitting(true)
        try {
            const res = await fetch(`${API_URL}/api/marketplace/inquiries`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    product_id: selectedProduct.id,
                    ...inquiryForm
                })
            })
            if (res.ok) {
                alert('✅ Trade inquiry transmitted successfully!')
                setShowInquiryModal(false)
                setInquiryForm({ buyer_name: '', buyer_email: '', buyer_phone: '', message: '' })
            } else {
                alert('Failed to send inquiry.')
            }
        } catch (error) {
            console.error('Error sending inquiry:', error)
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Premium National Gradient Header */}
            <div className="bg-gradient-to-r from-[#1EB53A] to-[#0072C6] pt-32 pb-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-white/10 blur-[100px] rounded-full translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-white/5 blur-[80px] rounded-full -translate-x-1/4"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl">
                        <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-md px-4 py-1.5 mb-6 flex items-center gap-2 w-fit font-black uppercase tracking-widest text-[10px]">
                            <Globe className="w-3 h-3" />
                            NATIONAL COMMODITY EXCHANGE
                        </Badge>
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tighter">
                            Agricultural <br />
                            <span className="text-white underline decoration-4 underline-offset-8 decoration-white/30">Marketplace</span>
                        </h1>
                        <p className="text-xl text-white/80 max-w-2xl font-medium leading-relaxed">
                            Connecting Sierra Leonean producers with the <span className="text-white font-bold italic underline decoration-white/20">Global Value Chain</span> through secure, direct-trade architecture.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 -mt-12 relative z-20">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Prestigious Sidebar Controls */}
                    <aside className={`lg:w-80 space-y-6 lg:block ${showFilters ? 'block' : 'hidden'}`}>
                        <Card className="p-8 border-none bg-white rounded-[2.5rem] shadow-2xl sticky top-28">
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] flex items-center gap-2">
                                    <SlidersHorizontal className="w-4 h-4 text-[#1EB53A]" />
                                    FILTRATION HUB
                                </h3>
                                <Button
                                    variant="ghost"
                                    className="h-8 text-[10px] font-black uppercase tracking-widest text-slate-400 p-0 hover:bg-transparent hover:text-slate-900"
                                    onClick={() => {
                                        setSelectedCategory('All')
                                        setSelectedSubcategory('All')
                                        setPriceRange([0, 10000000])
                                        setSearchQuery('')
                                    }}
                                >
                                    RESET ALL
                                </Button>
                            </div>

                            <div className="space-y-8">
                                {/* Categories Section */}
                                <div className="space-y-4">
                                    <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Sector Categories</h4>
                                    <div className="space-y-2">
                                        {Object.entries(CATEGORIES).map(([category, { icon: Icon, color }]) => (
                                            <button
                                                key={category}
                                                onClick={() => {
                                                    setSelectedCategory(category)
                                                    setSelectedSubcategory('All')
                                                }}
                                                className={`w-full group flex items-center gap-3 px-5 py-4 rounded-2xl transition-all text-left border-2
                                                    ${selectedCategory === category
                                                        ? 'bg-[#0072C6] border-slate-900 text-white shadow-xl'
                                                        : 'bg-white border-transparent text-slate-600 hover:bg-slate-50'
                                                    }`}
                                            >
                                                <div className={`p-2 rounded-xl transition-all ${selectedCategory === category ? 'bg-[#1EB53A] text-white' : 'bg-slate-100 text-slate-400 group-hover:bg-[#1EB53A]/10 group-hover:text-[#1EB53A]'}`}>
                                                    <Icon className="w-4 h-4" />
                                                </div>
                                                <span className={`font-black text-[10px] uppercase tracking-widest transition-all ${selectedCategory === category ? 'text-white' : 'text-slate-600'}`}>
                                                    {category}
                                                </span>
                                                {category !== 'All' && (
                                                    <Badge className={`ml-auto border-none ${selectedCategory === category ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'} font-bold text-[8px]`}>
                                                        {products.filter(p => p.category === category).length}
                                                    </Badge>
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Price Terminal */}
                                <div className="space-y-4 pt-8 border-t border-slate-50">
                                    <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Price Threshold (Le)</h4>
                                    <Slider
                                        value={priceRange}
                                        onValueChange={setPriceRange}
                                        max={10000000}
                                        step={50000}
                                        className="py-4"
                                    />
                                    <div className="flex justify-between font-black text-[10px] text-slate-400 uppercase tracking-widest">
                                        <span>min: {priceRange[0].toLocaleString()}</span>
                                        <span>max: {priceRange[1].toLocaleString()}</span>
                                    </div>
                                </div>

                                {/* Sort Parameter */}
                                <div className="space-y-4 pt-8 border-t border-slate-50">
                                    <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Prioritization</h4>
                                    <Select value={sortBy} onValueChange={setSortBy}>
                                        <SelectTrigger className="h-12 rounded-xl border-slate-100 bg-slate-50 font-bold px-4">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent className="rounded-xl border-none shadow-xl">
                                            <SelectItem value="newest">Fresh Listings</SelectItem>
                                            <SelectItem value="price_low">Value Assets (Low-High)</SelectItem>
                                            <SelectItem value="price_high">Premium Assets (High-Low)</SelectItem>
                                            <SelectItem value="popular">Market Liquidity</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </Card>
                    </aside>

                    {/* Elite Content Terminal */}
                    <main className="flex-1">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
                            <div className="relative flex-grow w-full md:max-w-xl group">
                                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5 group-focus-within:text-[#1EB53A] transition-colors" />
                                <Input
                                    placeholder="Execute search in the national trade grid..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="h-16 pl-16 pr-6 rounded-2xl border-none bg-white shadow-xl focus:ring-4 focus:ring-[#1base-3A]/10 transition-all font-bold text-slate-900"
                                />
                            </div>
                            <div className="flex gap-4 w-full md:w-auto">
                                <Button
                                    variant="outline"
                                    className="lg:hidden flex-1 h-14 rounded-2xl border-none bg-white shadow-xl font-black uppercase tracking-widest text-[10px]"
                                    onClick={() => setShowFilters(!showFilters)}
                                >
                                    <SlidersHorizontal className="w-4 h-4 mr-2" />
                                    Filter Grid
                                </Button>
                                {user?.role === 'farmer' && (
                                    <Button asChild className="flex-1 h-16 px-10 bg-[#1EB53A] text-white hover:bg-[#1base-3A]/90 rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl">
                                        <Link href="/marketplace/sell">
                                            <Plus className="w-5 h-5 mr-3" />
                                            Execute Sell Order
                                        </Link>
                                    </Button>
                                )}
                            </div>
                        </div>

                        {/* Inventory Grid */}
                        {loading ? (
                            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                                {[1, 2, 3, 4, 5, 6].map((i) => (
                                    <Card key={i} className="h-[450px] animate-pulse bg-slate-50 border-none rounded-[3rem]" />
                                ))}
                            </div>
                        ) : filteredProducts.length === 0 ? (
                            <div className="flex flex-col items-center justify-center py-40 bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-100">
                                <ShoppingCart className="w-24 h-24 text-slate-200 mb-8" />
                                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-2">No Active Trade Assets</h3>
                                <p className="text-slate-400 font-bold tracking-widest text-xs">The market registry is currently empty for this sector.</p>
                            </div>
                        ) : (
                            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                                {filteredProducts.map((product) => {
                                    const CategoryIcon = CATEGORIES[product.category as keyof typeof CATEGORIES]?.icon || Package
                                    const isFavorite = favorites.includes(product.id)
                                    return (
                                        <Card key={product.id} className="group hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 border-none bg-white rounded-[2.5rem] overflow-hidden flex flex-col shadow-sm">
                                            <div className="h-64 relative overflow-hidden bg-slate-100">
                                                <img
                                                    src={product.image_url || '/placeholder.jpg'}
                                                    alt={product.product_name}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000"
                                                />
                                                <button
                                                    onClick={(e) => { e.preventDefault(); toggleFavorite(product.id); }}
                                                    className="absolute top-6 right-6 w-12 h-12 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center hover:bg-white transition-all shadow-xl z-20"
                                                >
                                                    <Heart className={`w-6 h-6 ${isFavorite ? 'fill-rose-500 text-rose-500' : 'text-slate-400 group-hover:text-rose-500'}`} />
                                                </button>
                                                <Badge className="absolute top-6 left-6 bg-[#0072C6]/40 backdrop-blur-md text-white border-none font-black text-[9px] uppercase tracking-widest px-4 py-1.5 z-20">
                                                    <CategoryIcon className="w-3 h-3 mr-2" />
                                                    {product.category}
                                                </Badge>
                                            </div>

                                            <CardContent className="p-8 flex-1 flex flex-col">
                                                <div className="mb-6">
                                                    <h3 className="font-black text-xl text-slate-900 mb-2 uppercase tracking-tight line-clamp-1 group-hover:text-branded transition-all">{product.product_name}</h3>
                                                    <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                                        <MapPin className="h-3 w-3 text-[#1EB53A]" /> {product.seller_location}
                                                    </div>
                                                </div>

                                                <div className="flex justify-between items-end mb-8 mt-auto">
                                                    <div>
                                                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">NETWORK PRICE</p>
                                                        <p className="text-3xl font-black text-[#0072C6]">Le {parseFloat(product.price).toLocaleString()}</p>
                                                        <p className="text-[10px] font-bold text-slate-500 italic">per {product.unit}</p>
                                                    </div>
                                                    <Badge className="bg-[#1EB53A]/10 text-[#1EB53A] border-none font-bold text-[9px] px-3 py-1 rounded-full uppercase tracking-widest">
                                                        {product.quantity_available} UNITS LEFT
                                                    </Badge>
                                                </div>

                                                <div className="flex gap-3">
                                                    <Button asChild className="flex-1 h-14 bg-[#0072C6] text-white hover:bg-slate-800 rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl transition-all">
                                                        <Link href={`/marketplace/product/${product.id}`}>Analyze Logistics</Link>
                                                    </Button>
                                                    <Button
                                                        variant="outline"
                                                        className="w-14 h-14 rounded-2xl border-slate-100 hover:bg-slate-50 transition-all flex items-center justify-center p-0"
                                                        onClick={() => handleContactClick(product)}
                                                    >
                                                        <MessageCircle className="w-5 h-5 text-slate-400" />
                                                    </Button>
                                                </div>

                                                <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center">
                                                            <User className="w-4 h-4 text-slate-400" />
                                                        </div>
                                                        <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">{product.seller_name}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 bg-amber-50 px-3 py-1 rounded-lg">
                                                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                                                        <span className="text-[10px] font-black text-amber-600">4.8 TRUST LEVEL</span>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    )
                                })}
                            </div>
                        )}
                    </main>
                </div>
            </div>

            {/* Elite Inquiry Modal */}
            <Dialog open={showInquiryModal} onOpenChange={setShowInquiryModal}>
                <DialogContent className="sm:max-w-[500px] rounded-[3rem] border-none shadow-2xl p-10 bg-white">
                    <DialogHeader className="mb-8">
                        <div className="w-16 h-16 rounded-[1.5rem] bg-indigo-50 flex items-center justify-center mb-6">
                            <MessageCircle className="w-8 h-8 text-indigo-600" />
                        </div>
                        <DialogTitle className="text-3xl font-black text-slate-900 uppercase tracking-tighter">Secure Trade Inquiry</DialogTitle>
                        <DialogDescription className="text-slate-500 font-medium text-lg leading-relaxed">
                            Transmitting secure communication for <span className="text-slate-900 font-black">{selectedProduct?.product_name}</span>.
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmitInquiry} className="space-y-6">
                        <div className="space-y-2">
                            <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Terminal Identifier (Name)</Label>
                            <Input required className="h-14 rounded-2xl border-slate-100 bg-slate-50 font-bold px-6" value={inquiryForm.buyer_name} onChange={(e) => setInquiryForm({ ...inquiryForm, buyer_name: e.target.value })} />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Contact Protocol (Phone)</Label>
                            <Input required className="h-14 rounded-2xl border-slate-100 bg-slate-50 font-bold px-6" value={inquiryForm.buyer_phone} onChange={(e) => setInquiryForm({ ...inquiryForm, buyer_phone: e.target.value })} />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Trade Specification</Label>
                            <Textarea required rows={4} className="rounded-[1.5rem] border-slate-100 bg-slate-50 font-medium p-6" value={inquiryForm.message} onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })} />
                        </div>
                        <div className="flex gap-4 pt-4">
                            <Button type="button" variant="ghost" onClick={() => setShowInquiryModal(false)} className="flex-1 h-14 rounded-2xl font-black uppercase tracking-widest text-[10px] text-slate-400">Abort</Button>
                            <Button type="submit" disabled={submitting} className="flex-1 h-16 bg-[#0072C6] text-white hover:bg-[#007276]/90 rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl">
                                {submitting ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Transmit Order'}
                            </Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}
