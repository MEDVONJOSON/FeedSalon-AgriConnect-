'use client'

import { useState, useEffect } from 'react'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
    Search, Plus, MapPin, Heart, Star, User, Phone, Tag,
    Package, Scale, Banknote, AlignLeft, Send, Loader2,
    Wheat, Settings, Filter, ChevronDown
} from 'lucide-react'
import { auth, User as AuthUser } from '@/lib/auth'
import Link from 'next/link'

interface Listing {
    id: number
    title: string
    type: 'sale' | 'rent' | 'buy'
    price: string
    unit: string
    quantity: string
    location: string
    seller: string
    rating: number
    image: string
    time: string
    description: string
    isFavorite: boolean
}

export default function MarketplacePage() {
    const [user, setUser] = useState<AuthUser | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [listings, setListings] = useState<Listing[]>([
        {
            id: 1,
            title: 'Organic Wheat Seeds',
            type: 'sale',
            price: 'Le 35,000',
            unit: '/kg',
            quantity: '500 kg',
            location: 'Freetown, Western Area',
            seller: 'Ramesh Sharma',
            rating: 4.5,
            image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            time: '2h ago',
            description: 'High quality certified organic wheat seeds. Yield: 45-50 qtl/acre. Drought resistant variety.',
            isFavorite: false
        },
        {
            id: 2,
            title: 'Harvester Combine',
            type: 'rent',
            price: 'Le 120k',
            unit: '/hr',
            quantity: '1 unit',
            location: 'Bo District, Southern Province',
            seller: 'Sunil Patel',
            rating: 5,
            image: 'https://images.unsplash.com/photo-1592982537447-6f2a6a0c7c18?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            time: '5h ago',
            description: 'Well maintained New Holland combine harvester available for rent. Includes operator.',
            isFavorite: false
        },
        {
            id: 3,
            title: 'Fresh Tomatoes',
            type: 'buy',
            price: 'Le 20k',
            unit: '/kg',
            quantity: '500 kg',
            location: 'Makeni, Northern Province',
            seller: 'Vendor Company',
            rating: 4,
            image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            time: '1d ago',
            description: 'Looking for bulk supply of fresh tomatoes for wholesale market. Need 500kg weekly.',
            isFavorite: false
        }
    ])

    useEffect(() => {
        setUser(auth.getUser())
    }, [])

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    }

    const filteredListings = listings.filter(listing =>
        listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        listing.description.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)

        const formData = new FormData(e.currentTarget)
        const newListing: Listing = {
            id: Date.now(),
            title: formData.get('title') as string,
            type: formData.get('type') as 'sale' | 'rent' | 'buy',
            price: formData.get('price') as string,
            unit: '', // Parsed from price or separate field in real app
            quantity: formData.get('quantity') as string,
            location: formData.get('location') as string,
            seller: formData.get('seller') as string,
            rating: 5, // New users start with 5 stars or 0
            image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', // Placeholder image
            time: 'Just now',
            description: formData.get('description') as string,
            isFavorite: false
        }

        const form = e.currentTarget

        // Simulate API call
        setTimeout(() => {
            setListings([newListing, ...listings])
            setIsLoading(false)
            alert('Listing posted successfully!')
            form.reset()
            document.getElementById('listingsContainer')?.scrollIntoView({ behavior: 'smooth' })
        }, 1500)
    }

    const toggleFavorite = (id: number) => {
        setListings(listings.map(l =>
            l.id === id ? { ...l, isFavorite: !l.isFavorite } : l
        ))
    }

    const scrollToPost = () => {
        document.getElementById('postListing')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Navigation />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-green-800 via-green-700 to-green-600 text-white py-20 overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-5xl font-bold mb-6">🏪 Farmer Marketplace</h1>
                    <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                        Buy and sell directly with fellow farmers across Sierra Leone. No middlemen, better prices.
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto bg-white rounded-full p-2 shadow-xl flex items-center transform hover:scale-[1.02] transition-transform duration-300">
                        <Search className="text-gray-400 ml-4 w-6 h-6" />
                        <input
                            type="text"
                            placeholder="Search for seeds, equipment, produce..."
                            className="flex-1 px-4 py-3 outline-none text-gray-700 rounded-full"
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                        <Button className="rounded-full px-8 py-6 bg-green-600 hover:bg-green-700">
                            Search
                        </Button>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="py-12 bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Browse Categories</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { icon: '🌱', name: 'Seeds & Plants', desc: 'Quality seeds and saplings', color: 'green' },
                            { icon: '⚙️', name: 'Equipment', desc: 'Farming tools and machinery', color: 'yellow' },
                            { icon: '🍎', name: 'Fresh Produce', desc: 'Fruits and vegetables', color: 'blue' },
                            { icon: '🧪', name: 'Fertilizers', desc: 'Organic and chemical', color: 'purple' }
                        ].map((cat, idx) => (
                            <button key={idx} className={`group bg-${cat.color}-50 p-6 rounded-xl hover:bg-${cat.color}-100 transition-all duration-300 text-center border border-${cat.color}-100 hover:border-${cat.color}-300 hover:shadow-lg transform hover:-translate-y-1`}>
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-3xl">{cat.icon}</span>
                                </div>
                                <div className="font-bold text-gray-900 text-lg mb-1">{cat.name}</div>
                                <div className="text-sm text-gray-600">{cat.desc}</div>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recent Listings */}
            <section className="py-16 bg-gray-50" id="listingsContainer">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-end mb-8">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">Recent Listings</h2>
                            <p className="text-gray-600">Fresh opportunities from farmers near you</p>
                        </div>
                        <div className="flex gap-2">
                            <Button variant="outline" className="bg-white" onClick={scrollToPost}>
                                <Plus className="w-4 h-4 mr-2" /> Post Listing
                            </Button>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {filteredListings.map((listing) => (
                            <div key={listing.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
                                <div className="relative h-48 bg-gray-200 overflow-hidden">
                                    <img src={listing.image} alt={listing.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    <div className="absolute top-4 left-4">
                                        <Badge className={`${listing.type === 'sale' ? 'bg-green-600' :
                                            listing.type === 'rent' ? 'bg-yellow-500' : 'bg-blue-600'
                                            } text-white border-none`}>
                                            {listing.type === 'sale' ? 'For Sale' :
                                                listing.type === 'rent' ? 'For Rent' : 'Looking to Buy'}
                                        </Badge>
                                    </div>
                                    <div className="absolute top-4 right-4">
                                        <button
                                            onClick={() => toggleFavorite(listing.id)}
                                            className="bg-white p-2 rounded-full shadow-md hover:bg-red-50 transition-colors"
                                        >
                                            <Heart className={`w-4 h-4 ${listing.isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
                                        </button>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors">{listing.title}</h3>
                                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{listing.time}</span>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{listing.description}</p>

                                    <div className="flex items-center gap-2 mb-4 text-sm text-gray-500">
                                        <MapPin className="w-4 h-4 text-green-600" /> {listing.location}
                                    </div>

                                    <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-100">
                                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-700 font-bold text-xs">
                                            {listing.seller.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <span className="text-sm font-medium text-gray-700">{listing.seller}</span>
                                        <div className="flex text-yellow-400">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className={`w-3 h-3 ${i < Math.floor(listing.rating) ? 'fill-current' : ''}`} />
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span className="text-2xl font-bold text-green-700">{listing.price}<span className="text-sm text-gray-500 font-normal">{listing.unit}</span></span>
                                        <Button variant="outline" className="border-green-200 text-green-700 hover:bg-green-50 hover:text-green-800 hover:border-green-600">
                                            Contact
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Button variant="outline" className="rounded-full px-8 py-6">
                            Load More Listings <ChevronDown className="ml-2 w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* Post New Listing Section */}
            <section id="postListing" className="py-16 bg-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')]"></div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                        <div className="bg-gradient-to-r from-green-700 to-green-600 text-white px-8 py-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                                    <Plus className="w-6 h-6" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold">Post New Listing</h2>
                                    <p className="text-green-100 text-sm">Reach thousands of farmers and buyers instantly</p>
                                </div>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="p-8 grid md:grid-cols-2 gap-6">
                            <div className="group space-y-2">
                                <label className="text-sm font-medium text-gray-700">Your Name <span className="text-red-500">*</span></label>
                                <div className="relative">
                                    <User className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
                                    <Input name="seller" required className="pl-10" defaultValue={user?.name || ''} placeholder="Enter your name" />
                                </div>
                            </div>

                            <div className="group space-y-2">
                                <label className="text-sm font-medium text-gray-700">Contact Number <span className="text-red-500">*</span></label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
                                    <Input name="phone" type="tel" required className="pl-10" placeholder="Enter phone number" />
                                </div>
                            </div>

                            <div className="group space-y-2">
                                <label className="text-sm font-medium text-gray-700">Location <span className="text-red-500">*</span></label>
                                <div className="relative">
                                    <MapPin className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
                                    <Input name="location" required className="pl-10" placeholder="City, District" />
                                </div>
                            </div>

                            <div className="group space-y-2">
                                <label className="text-sm font-medium text-gray-700">Listing Type <span className="text-red-500">*</span></label>
                                <div className="relative">
                                    <Tag className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
                                    <select name="type" required className="w-full pl-10 pr-4 py-2 border border-input rounded-md bg-background text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                                        <option value="">Select Type</option>
                                        <option value="sale">For Sale</option>
                                        <option value="rent">For Rent</option>
                                        <option value="buy">Looking to Buy</option>
                                    </select>
                                </div>
                            </div>

                            <div className="group space-y-2">
                                <label className="text-sm font-medium text-gray-700">Item/Product Name <span className="text-red-500">*</span></label>
                                <div className="relative">
                                    <Package className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
                                    <Input name="title" required className="pl-10" placeholder="e.g., Wheat Seeds, Tractor" />
                                </div>
                            </div>

                            <div className="group space-y-2">
                                <label className="text-sm font-medium text-gray-700">Quantity</label>
                                <div className="relative">
                                    <Scale className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
                                    <Input name="quantity" className="pl-10" placeholder="e.g., 50 kg, 1 unit" />
                                </div>
                            </div>

                            <div className="md:col-span-2 group space-y-2">
                                <label className="text-sm font-medium text-gray-700">Price</label>
                                <div className="relative">
                                    <Banknote className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
                                    <Input name="price" className="pl-10" placeholder="e.g., Le 35,000/kg, Le 500,000" />
                                </div>
                            </div>

                            <div className="md:col-span-2 group space-y-2">
                                <label className="text-sm font-medium text-gray-700">Description <span className="text-red-500">*</span></label>
                                <div className="relative">
                                    <AlignLeft className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
                                    <textarea name="description" required rows={4} className="w-full pl-10 pr-4 py-2 border border-input rounded-md bg-background text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" placeholder="Provide details about the item..."></textarea>
                                </div>
                            </div>

                            <div className="md:col-span-2 pt-4">
                                <Button type="submit" className="w-full h-14 text-lg bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800" disabled={isLoading}>
                                    {isLoading ? (
                                        <>
                                            <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Posting...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="mr-2 h-5 w-5" /> Post Listing Now
                                        </>
                                    )}
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}
