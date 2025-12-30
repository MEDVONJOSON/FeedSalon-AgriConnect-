'use client'

import { useState, useEffect } from 'react'
import { Navigation } from '@/components/navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { MapPin, Phone, User, Tag, ArrowLeft, ShoppingCart, MessageSquare, ShieldCheck, Info } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function ProductDetailPage() {
    const params = useParams()
    const [product, setProduct] = useState<any>(null)
    const [similarProducts, setSimilarProducts] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [showInquiryModal, setShowInquiryModal] = useState(false)
    const [submitting, setSubmitting] = useState(false)
    const [inquiryForm, setInquiryForm] = useState({
        buyer_name: '',
        buyer_email: '',
        buyer_phone: '',
        message: ''
    })

    useEffect(() => {
        if (params.id) {
            fetchProductData()
        }
    }, [params.id])

    const fetchProductData = async () => {
        setLoading(true)
        try {
            // Fetch product details
            const res = await fetch(`http://localhost:5000/api/marketplace/products/${params.id}`)
            if (res.ok) {
                const data = await res.json()
                setProduct(data)

                // Fetch similar products (same category)
                const similarRes = await fetch(`http://localhost:5000/api/marketplace/products?category=${data.category}`)
                if (similarRes.ok) {
                    const similarData = await similarRes.json()
                    // Filter out the current product
                    setSimilarProducts(similarData.filter((p: any) => p.id !== parseInt(params.id as string)).slice(0, 4))
                }
            }
        } catch (error) {
            console.error('Error fetching product data:', error)
        } finally {
            setLoading(false)
        }
    }

    const handleSubmitInquiry = async (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitting(true)

        try {
            const res = await fetch('http://localhost:5000/api/marketplace/inquiries', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    product_id: product.id,
                    product_name: product.product_name,
                    ...inquiryForm
                })
            })

            if (res.ok) {
                alert('✅ Inquiry sent successfully! The seller will contact you soon.')
                setShowInquiryModal(false)
                setInquiryForm({ buyer_name: '', buyer_email: '', buyer_phone: '', message: '' })
            } else {
                alert('❌ Failed to send inquiry.')
            }
        } catch (error) {
            console.error('Error sending inquiry:', error)
        } finally {
            setSubmitting(false)
        }
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-50">
                <Navigation />
                <div className="container mx-auto px-4 py-20 text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                    <p className="mt-4 text-slate-500">Loading product details...</p>
                </div>
            </div>
        )
    }

    if (!product) {
        return (
            <div className="min-h-screen bg-slate-50">
                <Navigation />
                <div className="container mx-auto px-4 py-20 text-center">
                    <h2 className="text-2xl font-bold text-slate-800">Product Not Found</h2>
                    <p className="mt-2 text-slate-500">The product you are looking for might have been sold or removed.</p>
                    <Link href="/marketplace">
                        <Button className="mt-6 bg-primary hover:bg-primary/90">Back to Marketplace</Button>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />

            <div className="container mx-auto px-4 py-8">
                {/* Breadcrumbs / Back */}
                <div className="mb-6">
                    <Link href="/marketplace" className="text-slate-500 hover:text-primary flex items-center gap-2 transition-colors">
                        <ArrowLeft className="h-4 w-4" /> Back to All Products
                    </Link>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left & Middle: Product Info */}
                    <div className="lg:col-span-2 space-y-8">
                        <Card className="overflow-hidden border-slate-200">
                            <div className="grid md:grid-cols-2">
                                {/* Image Section */}
                                <div className={`h-[400px] relative flex items-center justify-center ${product.image_url ? 'bg-white' : 'bg-slate-100'}`}>
                                    {product.image_url ? (
                                        <img
                                            src={product.image_url}
                                            alt={product.product_name}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="text-center p-8">
                                            <Tag className="h-20 w-20 text-slate-300 mx-auto mb-4" />
                                            <p className="text-slate-400">No image available</p>
                                        </div>
                                    )}
                                    <Badge className="absolute top-4 left-4 bg-white/90 text-slate-900 backdrop-blur-sm border-none shadow-sm">
                                        {product.category}
                                    </Badge>
                                </div>

                                {/* Main Details */}
                                <div className="p-8 space-y-6">
                                    <div>
                                        <h1 className="text-3xl font-bold text-slate-900 mb-2">{product.product_name}</h1>
                                        <div className="flex items-center gap-2 text-slate-500">
                                            <MapPin className="h-4 w-4 text-primary" />
                                            <span>{product.seller_location}</span>
                                        </div>
                                    </div>

                                    <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
                                        <p className="text-sm text-primary font-medium uppercase tracking-wider mb-1">Price</p>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-4xl font-black text-primary">Le {product.price}</span>
                                            <span className="text-primary/80 font-medium">per {product.unit}</span>
                                        </div>
                                        <p className="text-xs text-primary/70 mt-2">Available Quantity: {product.quantity_available} {product.unit}s</p>
                                    </div>

                                    <div className="space-y-4">
                                        <Button
                                            onClick={() => setShowInquiryModal(true)}
                                            className="w-full h-14 text-lg bg-primary hover:bg-primary/90 text-white font-bold shadow-lg shadow-primary/20 transition-all hover:-translate-y-1"
                                        >
                                            <MessageSquare className="mr-2 h-5 w-5" /> Contact Seller
                                        </Button>

                                        <div className="flex items-center gap-3 p-4 bg-secondary/5 border border-secondary/20 rounded-lg">
                                            <ShieldCheck className="h-5 w-5 text-secondary shrink-0" />
                                            <p className="text-xs text-secondary/80">
                                                <strong>Buyer Protection:</strong> Always meet in a public place. Do not send money before verifying the product.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        {/* Description Section */}
                        <Card className="border-slate-200">
                            <CardContent className="p-8">
                                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <Info className="h-5 w-5 text-primary" /> Product Description
                                </h3>
                                <div className="prose prose-slate max-w-none text-slate-600 whitespace-pre-wrap">
                                    {product.description || "No detailed description provided for this product listing."}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Similar Products Section */}
                        {similarProducts.length > 0 && (
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-slate-800">Similar in {product.category}</h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {similarProducts.map((p: any) => (
                                        <Link key={p.id} href={`/marketplace/${p.id}`}>
                                            <Card className="group cursor-pointer hover:shadow-md transition-all border-slate-200 overflow-hidden h-full">
                                                <div className="h-32 bg-slate-100 flex items-center justify-center overflow-hidden">
                                                    {p.image_url ? (
                                                        <img src={p.image_url} alt={p.product_name} className="w-full h-full object-cover" />
                                                    ) : (
                                                        <Tag className="h-8 w-8 text-slate-300" />
                                                    )}
                                                </div>
                                                <div className="p-3">
                                                    <h4 className="font-bold text-sm text-slate-900 line-clamp-1 group-hover:text-green-600">{p.product_name}</h4>
                                                    <p className="text-green-700 font-bold text-xs mt-1">Le {p.price}</p>
                                                </div>
                                            </Card>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right Column: Seller Info & Safety */}
                    <div className="space-y-6">
                        <Card className="border-slate-200 shadow-sm">
                            <CardContent className="p-6">
                                <h3 className="font-bold text-lg mb-4">About the Seller</h3>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <User className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900">{product.seller_name}</p>
                                        <p className="text-xs text-slate-500">Farmer/Seller</p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-sm text-slate-600">
                                        <div className="h-8 w-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500">
                                            <MapPin className="h-4 w-4" />
                                        </div>
                                        <span>{product.seller_location}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-slate-600">
                                        <div className="h-8 w-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500">
                                            <Phone className="h-4 w-4" />
                                        </div>
                                        <span>{product.seller_phone || "Phone hidden"}</span>
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-slate-100">
                                    <p className="text-xs text-slate-400 italic">Member since {new Date(product.created_date).toLocaleDateString()}</p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-slate-900 text-white border-none overflow-hidden relative">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <ShieldCheck className="h-24 w-24 rotate-12" />
                            </div>
                            <CardContent className="p-6 relative z-10">
                                <h3 className="font-bold text-white mb-2">Safe Buying Tips</h3>
                                <ul className="text-xs text-slate-300 space-y-3">
                                    <li className="flex gap-2">• <span>Meet in a public, well-lit location.</span></li>
                                    <li className="flex gap-2">• <span>Inspect the product thoroughly before paying.</span></li>
                                    <li className="flex gap-2">• <span>Never send money in advance via mobile mobile.</span></li>
                                    <li className="flex gap-2">• <span>Trust your instincts. If it's too good to be true, it likely is.</span></li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

            {/* Contact Modal */}
            <Dialog open={showInquiryModal} onOpenChange={setShowInquiryModal}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Send Inquiry</DialogTitle>
                        <DialogDescription>
                            Your message will be sent to the seller who will contact you via phone or email.
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmitInquiry} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="buyer_name">Name</Label>
                                <Input
                                    id="buyer_name"
                                    required
                                    value={inquiryForm.buyer_name}
                                    onChange={e => setInquiryForm({ ...inquiryForm, buyer_name: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="buyer_phone">Phone</Label>
                                <Input
                                    id="buyer_phone"
                                    required
                                    value={inquiryForm.buyer_phone}
                                    onChange={e => setInquiryForm({ ...inquiryForm, buyer_phone: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="buyer_email">Email (Optional)</Label>
                            <Input
                                id="buyer_email"
                                type="email"
                                value={inquiryForm.buyer_email}
                                onChange={e => setInquiryForm({ ...inquiryForm, buyer_email: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="message">Message</Label>
                            <Textarea
                                id="message"
                                rows={4}
                                required
                                value={inquiryForm.message}
                                onChange={e => setInquiryForm({ ...inquiryForm, message: e.target.value })}
                            />
                        </div>
                        <DialogFooter>
                            <Button type="button" variant="outline" onClick={() => setShowInquiryModal(false)}>Cancel</Button>
                            <Button type="submit" disabled={submitting} className="bg-primary hover:bg-primary/90 text-white">
                                {submitting ? 'Sending...' : 'Send Message'}
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}
