'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Navigation } from '@/components/navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
    MapPin, Phone, User, Star, Heart, Share2, ShoppingCart,
    MessageCircle, Shield, Truck, CreditCard, Smartphone,
    Building, Check, ArrowLeft, Package, Calendar, TrendingUp, Globe, ShieldCheck, Zap, Loader2
} from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog'
import { auth, type User as AuthUser } from '@/lib/auth'
import Link from 'next/link'

export default function ProductDetailPage() {
    const params = useParams()
    const router = useRouter()
    const [product, setProduct] = useState<any>(null)
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState<AuthUser | null>(null)
    const [quantity, setQuantity] = useState(1)
    const [selectedImage, setSelectedImage] = useState(0)
    const [isFavorite, setIsFavorite] = useState(false)

    // Payment Modal
    const [showPaymentModal, setShowPaymentModal] = useState(false)
    const [paymentMethod, setPaymentMethod] = useState('mobile_money')
    const [paymentDetails, setPaymentDetails] = useState({
        phone: '',
        card_number: '',
        card_expiry: '',
        card_cvv: '',
        bank_name: '',
        account_number: '',
        delivery_address: '',
        delivery_notes: ''
    })

    // Chat Modal
    const [showChatModal, setShowChatModal] = useState(false)
    const [chatMessage, setChatMessage] = useState('')

    useEffect(() => {
        setUser(auth.getUser())
    }, [])

    useEffect(() => {
        if (params.id) {
            fetchProduct()
        }
    }, [params.id])

    const fetchProduct = async () => {
        try {
            const res = await fetch(`http://localhost:5000/api/marketplace/products/${params.id}`)
            if (res.ok) {
                const data = await res.json()
                setProduct(data)
                const favorites = JSON.parse(localStorage.getItem('marketplace_favorites') || '[]')
                setIsFavorite(favorites.includes(data.id))
            }
        } catch (error) {
            console.error('Error fetching product:', error)
        } finally {
            setLoading(false)
        }
    }

    const toggleFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem('marketplace_favorites') || '[]')
        const newFavorites = isFavorite
            ? favorites.filter((id: number) => id !== product.id)
            : [...favorites, product.id]
        localStorage.setItem('marketplace_favorites', JSON.stringify(newFavorites))
        setIsFavorite(!isFavorite)
    }

    const [showLoginModal, setShowLoginModal] = useState(false)
    const [loginForm, setLoginForm] = useState({ email: '', password: '' })

    const handleBuyNow = () => {
        if (!user) {
            setShowLoginModal(true)
            return
        }
        setShowPaymentModal(true)
    }

    const handleQuickLogin = (e: React.FormEvent) => {
        e.preventDefault()
        auth.login(loginForm.email, loginForm.password, 'buyer')
        setUser(auth.getUser())
        setShowLoginModal(false)
        setShowPaymentModal(true)
    }

    const [processingPayment, setProcessingPayment] = useState(false)

    const handleProcessPayment = async () => {
        if (!user) return
        setProcessingPayment(true)
        const orderData = {
            buyer_id: user.email,
            seller_id: product.seller_email,
            product_id: product.id,
            quantity,
            total_price: parseFloat(product.price) * quantity,
            payment_method: paymentMethod,
            payment_details: paymentDetails,
            delivery_address: paymentDetails.delivery_address,
            status: 'pending'
        }
        try {
            const res = await fetch('http://localhost:5000/api/marketplace/orders', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(orderData)
            })
            if (res.ok) {
                alert('✅ Order transmitted successfully! Monitoring logistics.')
                setShowPaymentModal(false)
                router.push('/marketplace/orders')
            } else {
                alert('Failed to place order.')
            }
        } catch (error) {
            console.error('Error placing order:', error)
        } finally {
            setProcessingPayment(false)
        }
    }

    const handleStartChat = () => {
        if (!user) {
            alert('Please login to chat with the seller')
            router.push('/auth/login')
            return
        }
        setShowChatModal(true)
    }

    const totalPrice = product ? parseFloat(product.price) * quantity : 0

    if (loading) {
        return (
            <div className="min-h-screen bg-white">
                <Navigation />
                <div className="container mx-auto px-4 py-32">
                    <div className="animate-pulse space-y-8">
                        <div className="h-[500px] bg-slate-50 rounded-[3rem]"></div>
                        <div className="h-20 bg-slate-50 rounded-2xl w-1/2"></div>
                    </div>
                </div>
            </div>
        )
    }

    if (!product) {
        return (
            <div className="min-h-screen bg-white">
                <Navigation />
                <div className="container mx-auto px-4 py-40 text-center">
                    <Package className="w-24 h-24 text-slate-100 mx-auto mb-8" />
                    <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-4">Asset Not Located</h2>
                    <Button asChild className="bg-slate-900 text-white rounded-2xl px-10 h-14 font-black uppercase tracking-widest text-[10px]">
                        <Link href="/marketplace">Back to Exchange</Link>
                    </Button>
                </div>
            </div>
        )
    }

    const productImages = product.images || [product.image_url || '/placeholder.jpg']

    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Premium National Gradient Header (Subtle for Detail) */}
            <div className="bg-gradient-to-r from-[#1EB53A] to-[#0072C6] pt-32 pb-16 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-wrap items-center gap-2 text-[10px] font-black text-white/60 uppercase tracking-widest">
                        <Link href="/marketplace" className="hover:text-white transition-colors">EXCHANGE</Link>
                        <span>/</span>
                        <Link href={`/marketplace?category=${product.category}`} className="hover:text-white transition-colors">{product.category}</Link>
                        <span>/</span>
                        <span className="text-white">{product.product_name}</span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 -mt-8 relative z-20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 mb-20">
                        {/* Elite Asset Visualization */}
                        <div className="space-y-6">
                            <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl relative group">
                                <img
                                    src={productImages[selectedImage]}
                                    alt={product.product_name}
                                    className="w-full h-[550px] object-cover transition-all duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute top-8 left-8">
                                    <Badge className="bg-slate-900/40 backdrop-blur-md text-white border-none font-black text-[10px] uppercase tracking-widest px-6 py-2">
                                        VERIFIED ASSET
                                    </Badge>
                                </div>
                            </div>
                            <div className="grid grid-cols-4 gap-4">
                                {productImages.map((img: string, idx: number) => (
                                    <button
                                        key={idx}
                                        onClick={() => setSelectedImage(idx)}
                                        className={`rounded-2xl overflow-hidden border-4 transition-all h-24 ${selectedImage === idx ? 'border-[#1EB53A] shadow-xl scale-95' : 'border-slate-50'}`}
                                    >
                                        <img src={img} alt={`${product.product_name} ${idx + 1}`} className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Elite Trade Specifications */}
                        <div className="flex flex-col">
                            <div className="mb-8">
                                <Badge className="bg-[#1EB53A]/10 text-[#1EB53A] border-none font-black text-[10px] uppercase tracking-widest px-4 py-1.5 mb-6">
                                    {product.category} SECTOR
                                </Badge>
                                <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tighter uppercase italic">{product.product_name}</h1>

                                <div className="flex items-center gap-6 mb-8">
                                    <div className="flex flex-col">
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">UNIT VALUATION</p>
                                        <div className="flex items-baseline gap-3">
                                            <span className="text-6xl font-black text-[#0072C6] tracking-tighter">Le {parseFloat(product.price).toLocaleString()}</span>
                                            <span className="text-lg font-bold text-slate-400 italic">per {product.unit}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center gap-8 py-6 border-y border-slate-50">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center">
                                            <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                                        </div>
                                        <div className="space-y-0.5">
                                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">TRUST RATING</p>
                                            <p className="text-sm font-black text-slate-900">4.8 <span className="text-slate-400 normal-case">(124)</span></p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 border-l border-slate-50 pl-8">
                                        <div className="w-10 h-10 rounded-xl bg-[#1EB53A]/10 flex items-center justify-center">
                                            <ShieldCheck className="w-5 h-5 text-[#1EB53A]" />
                                        </div>
                                        <div className="space-y-0.5">
                                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">STOCK STATUS</p>
                                            <p className="text-sm font-black text-[#1EB53A]">{product.quantity_available} {product.unit.toUpperCase()} AVAILABLE</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p className="text-lg text-slate-500 font-medium leading-relaxed mb-10 max-w-2xl italic">
                                "{product.description}"
                            </p>

                            {/* Trade Volume Selection */}
                            <div className="mb-10 p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                                <Label className="text-[10px] font-black text-slate-900 uppercase tracking-widest mb-4 block">Select Acquisition Volume</Label>
                                <div className="flex items-center gap-6">
                                    <div className="flex items-center bg-white rounded-2xl p-2 shadow-sm border border-slate-100">
                                        <Button
                                            variant="ghost"
                                            className="w-12 h-12 rounded-xl text-xl font-bold hover:bg-slate-50"
                                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                            disabled={quantity <= 1}
                                        >
                                            -
                                        </Button>
                                        <Input
                                            type="number"
                                            value={quantity}
                                            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                                            className="w-20 border-none text-center font-black text-lg focus-visible:ring-0"
                                            min="1"
                                            max={product.quantity_available}
                                        />
                                        <Button
                                            variant="ghost"
                                            className="w-12 h-12 rounded-xl text-xl font-bold hover:bg-slate-50"
                                            onClick={() => setQuantity(Math.min(product.quantity_available, quantity + 1))}
                                            disabled={quantity >= product.quantity_available}
                                        >
                                            +
                                        </Button>
                                    </div>
                                    <div className="flex-1 flex flex-col items-end">
                                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">TOTAL VALUATION</p>
                                        <div className="text-3xl font-black text-slate-900 tracking-tighter">
                                            Le {totalPrice.toLocaleString()}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Execution Terminal */}
                            <div className="flex gap-4 mb-10">
                                <Button
                                    onClick={handleBuyNow}
                                    className="flex-[2] h-20 text-xs font-black uppercase tracking-[0.2em] bg-slate-900 text-white hover:bg-[#0072C6] rounded-[1.5rem] shadow-2xl transition-all active:scale-95 group"
                                >
                                    <ShoppingCart className="w-5 h-5 mr-4 group-hover:rotate-12 transition-transform" />
                                    Add to Cart
                                </Button>
                                <Button
                                    onClick={handleStartChat}
                                    variant="outline"
                                    className="flex-1 h-20 text-xs font-black uppercase tracking-[0.2em] border-2 border-slate-100 hover:bg-slate-50 rounded-[1.5rem] transition-all"
                                >
                                    <MessageCircle className="w-5 h-5 mr-3" />
                                    NEGOTIATE
                                </Button>
                            </div>

                            {/* Trust Protocols Grid */}
                            <div className="grid grid-cols-3 gap-6">
                                <Card className="p-6 border-none bg-slate-50 rounded-[2rem] text-center space-y-3">
                                    <Shield className="w-8 h-8 text-[#1EB53A] mx-auto" />
                                    <div className="text-[9px] font-black uppercase tracking-widest text-slate-900 leading-tight">Secured <br />Escrow</div>
                                </Card>
                                <Card className="p-6 border-none bg-slate-50 rounded-[2rem] text-center space-y-3">
                                    <Truck className="w-8 h-8 text-[#0072C6] mx-auto" />
                                    <div className="text-[9px] font-black uppercase tracking-widest text-slate-900 leading-tight">National <br />Logistics</div>
                                </Card>
                                <Card className="p-6 border-none bg-slate-50 rounded-[2rem] text-center space-y-3">
                                    <Check className="w-8 h-8 text-amber-500 mx-auto" />
                                    <div className="text-[9px] font-black uppercase tracking-widest text-slate-900 leading-tight">Quality <br />Certified</div>
                                </Card>
                            </div>
                        </div>
                    </div>

                    {/* Elite Information Architecture */}
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Producer Dossier */}
                        <Card className="p-10 border-none bg-slate-900 text-white rounded-[3rem] shadow-2xl h-fit sticky top-28">
                            <h3 className="text-xs font-black text-white/40 uppercase tracking-[0.4em] mb-10">PRODUCER DOSSIER</h3>
                            <div className="flex items-center gap-6 mb-10">
                                <div className="w-20 h-20 bg-white/10 rounded-[1.5rem] border border-white/10 flex items-center justify-center">
                                    <User className="w-10 h-10 text-[#1EB53A]" />
                                </div>
                                <div className="space-y-1">
                                    <div className="font-black text-2xl uppercase tracking-tighter">{product.seller_name}</div>
                                    <Badge className="bg-[#1EB53A] text-white border-none font-black text-[8px] uppercase tracking-widest px-3 py-1">
                                        CERTIFIED PRODUCER
                                    </Badge>
                                </div>
                            </div>

                            <div className="space-y-6 pt-10 border-t border-white/5">
                                <div className="flex items-center gap-4">
                                    <MapPin className="w-5 h-5 text-white/30" />
                                    <span className="text-sm font-bold text-white/70">{product.seller_location}</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Phone className="w-5 h-5 text-white/30" />
                                    <span className="text-sm font-bold text-white/70">{product.seller_phone}</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Calendar className="w-5 h-5 text-white/30" />
                                    <span className="text-sm font-bold text-white/70">Registry Date: Nov 2023</span>
                                </div>
                            </div>

                            <Button className="w-full h-14 bg-white text-slate-900 hover:bg-[#1base-3A] hover:text-white rounded-2xl font-black uppercase tracking-widest text-[10px] mt-12 shadow-xl transition-all">
                                Examine Producer Portfolio
                            </Button>
                        </Card>

                        {/* Extended Specifications */}
                        <Card className="lg:col-span-2 p-12 border-none bg-white rounded-[3rem] shadow-sm border border-slate-50">
                            <Tabs defaultValue="details">
                                <TabsList className="flex gap-8 bg-transparent p-0 mb-12 border-b border-slate-50 w-full h-auto">
                                    <TabsTrigger value="details" className="bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-4 data-[state=active]:border-[#1EB53A] rounded-none px-0 pb-4 font-black uppercase tracking-widest text-xs text-slate-400 data-[state=active]:text-slate-900 h-auto">TECHNICAL SPECS</TabsTrigger>
                                    <TabsTrigger value="reviews" className="bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-4 data-[state=active]:border-[#1EB53A] rounded-none px-0 pb-4 font-black uppercase tracking-widest text-xs text-slate-400 data-[state=active]:text-slate-900 h-auto">MARKET FEEDBACK</TabsTrigger>
                                    <TabsTrigger value="logistics" className="bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-4 data-[state=active]:border-[#1EB53A] rounded-none px-0 pb-4 font-black uppercase tracking-widest text-xs text-slate-400 data-[state=active]:text-slate-900 h-auto">LOGISTICS PATH</TabsTrigger>
                                </TabsList>

                                <TabsContent value="details" className="m-0 space-y-10">
                                    <div className="grid md:grid-cols-2 gap-10">
                                        <div className="p-8 bg-slate-50 rounded-[2rem] space-y-2">
                                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest italic">SECTOR CLASSIFICATION</p>
                                            <p className="text-xl font-black text-slate-900 uppercase tracking-tight">{product.category}</p>
                                        </div>
                                        <div className="p-8 bg-slate-50 rounded-[2rem] space-y-2">
                                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest italic">STANDARD MEASURE</p>
                                            <p className="text-xl font-black text-slate-900 uppercase tracking-tight">{product.unit || 'Kilogram'}</p>
                                        </div>
                                        <div className="p-8 bg-slate-50 rounded-[2rem] space-y-2">
                                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest italic">LIQUIDITY STATUS</p>
                                            <p className="text-xl font-black text-[#1EB53A] uppercase tracking-tight">HIGH AVAILABILITY</p>
                                        </div>
                                        <div className="p-8 bg-slate-50 rounded-[2rem] space-y-2">
                                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest italic">CERTIFICATION</p>
                                            <p className="text-xl font-black text-[#0072C6] uppercase tracking-tight">GOVT VERIFIED</p>
                                        </div>
                                    </div>
                                </TabsContent>

                                <TabsContent value="reviews" className="m-0 space-y-8">
                                    {[1, 2].map((i) => (
                                        <div key={i} className="p-8 border border-slate-50 rounded-[2.5rem] bg-white hover:shadow-lg transition-all">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="w-12 h-12 rounded-full bg-slate-100 border border-slate-200"></div>
                                                <div>
                                                    <div className="font-black text-slate-900 uppercase text-xs tracking-widest">TRADER_00{i}X</div>
                                                    <div className="flex items-center gap-1">
                                                        {[...Array(5)].map((_, i) => (
                                                            <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-slate-500 font-medium italic">
                                                "Exceptional supply chain integrity. The {product.product_name} exceeded local quality benchmarks. Reliable logistics facilitation."
                                            </p>
                                        </div>
                                    ))}
                                </TabsContent>

                                <TabsContent value="logistics" className="m-0 space-y-8">
                                    <div className="flex items-start gap-6 p-8 bg-slate-900 text-white rounded-[2.5rem]">
                                        <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                                            <Truck className="w-6 h-6 text-[#1EB53A]" />
                                        </div>
                                        <div>
                                            <div className="font-black uppercase tracking-widest text-xs mb-2">NETWORK DELIVERY</div>
                                            <p className="text-white/60 font-medium text-sm leading-relaxed">
                                                Direct transmission via coordinated national logistics channels. Estimated arrival: <span className="text-white font-bold">24-72 Trade Hours</span>.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-6 p-8 bg-[#0072C6]/10 rounded-[2.5rem]">
                                        <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-sm">
                                            <MapPin className="w-6 h-6 text-[#0072C6]" />
                                        </div>
                                        <div>
                                            <div className="font-black uppercase tracking-widest text-xs mb-2 text-slate-900">NODE PROCUREMENT</div>
                                            <p className="text-slate-500 font-medium text-sm leading-relaxed">
                                                Direct pickup integration available at verified producer coordinates. Protocol clearance required.
                                            </p>
                                        </div>
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </Card>
                    </div>
                </div>
            </div>

            {/* Elite Procurement Terminal (Payment) */}
            <Dialog open={showPaymentModal} onOpenChange={setShowPaymentModal}>
                <DialogContent className="sm:max-w-lg rounded-[2.5rem] border-none shadow-2xl p-0 overflow-hidden bg-white">
                    <div className="bg-slate-900 px-8 py-6 text-white flex justify-between items-center">
                        <div>
                            <Badge className="bg-[#1EB53A] text-white border-none font-black text-[8px] uppercase tracking-widest px-2 py-0.5 mb-2">SECURE PAYMENT</Badge>
                            <h2 className="text-xl font-black uppercase tracking-tighter">Checkout</h2>
                        </div>
                        <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                            <Shield className="w-5 h-5 text-[#1EB53A]" />
                        </div>
                    </div>

                    <div className="p-8 space-y-6 max-h-[70vh] overflow-y-auto">
                        {/* Transaction Protocol Selection */}
                        <div>
                            <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 block ml-1">PAYMENT METHOD</Label>
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { id: 'mobile_money', label: 'Mobile Money', icon: Smartphone },
                                    { id: 'card', label: 'Credit Card', icon: CreditCard },
                                    { id: 'bank', label: 'Bank Transfer', icon: Building },
                                    { id: 'cash', label: 'Cash on Delivery', icon: Truck }
                                ].map((method) => (
                                    <button
                                        key={method.id}
                                        onClick={() => setPaymentMethod(method.id)}
                                        className={`flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border transition-all group
                                            ${paymentMethod === method.id ? 'border-[#1EB53A] bg-[#1EB53A]/5' : 'border-slate-100 hover:border-slate-200 hover:bg-slate-50'}`}
                                    >
                                        <method.icon className={`w-5 h-5 ${paymentMethod === method.id ? 'text-[#1EB53A]' : 'text-slate-300 group-hover:text-slate-500'}`} />
                                        <span className={`text-[10px] font-bold uppercase tracking-wide ${paymentMethod === method.id ? 'text-[#1EB53A]' : 'text-slate-400 group-hover:text-slate-700'}`}>{method.label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Protocol Detail Fields (Conditional) */}
                        <div className="space-y-4 bg-slate-50 p-6 rounded-[2rem] border border-slate-100/50">
                            {paymentMethod === 'mobile_money' && (
                                <div className="space-y-2">
                                    <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-3">Mobile Number</Label>
                                    <Input placeholder="07X XXXXXX" className="h-12 rounded-xl border-slate-200 bg-white font-bold px-4 shadow-sm" value={paymentDetails.phone} onChange={(e) => setPaymentDetails({ ...paymentDetails, phone: e.target.value })} />
                                </div>
                            )}

                            {paymentMethod === 'card' && (
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-3">Card Number</Label>
                                        <div className="relative">
                                            <CreditCard className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                                            <Input placeholder="0000 0000 0000 0000" className="h-12 pl-12 rounded-xl border-slate-200 bg-white font-bold shadow-sm" value={paymentDetails.card_number} onChange={(e) => setPaymentDetails({ ...paymentDetails, card_number: e.target.value })} />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-3">Expiry</Label>
                                            <Input placeholder="MM/YY" className="h-12 rounded-xl border-slate-200 bg-white font-bold px-4 shadow-sm" value={paymentDetails.card_expiry} onChange={(e) => setPaymentDetails({ ...paymentDetails, card_expiry: e.target.value })} />
                                        </div>
                                        <div className="space-y-2">
                                            <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-3">CVV</Label>
                                            <Input placeholder="123" className="h-12 rounded-xl border-slate-200 bg-white font-bold px-4 shadow-sm" value={paymentDetails.card_cvv} onChange={(e) => setPaymentDetails({ ...paymentDetails, card_cvv: e.target.value })} />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {paymentMethod === 'bank' && (
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-3">Select Bank</Label>
                                        <Select onValueChange={(val) => setPaymentDetails({ ...paymentDetails, bank_name: val })}>
                                            <SelectTrigger className="h-12 rounded-xl border-slate-200 bg-white font-bold px-4 shadow-sm">
                                                <SelectValue placeholder="Choose Bank" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="slcb">Sierra Leone Commercial Bank</SelectItem>
                                                <SelectItem value="rokel">Rokel Commercial Bank</SelectItem>
                                                <SelectItem value="ub">Union Trust Bank</SelectItem>
                                                <SelectItem value="gtb">Guaranty Trust Bank</SelectItem>
                                                <SelectItem value="ecobank">Ecobank</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-3">Account Number</Label>
                                        <Input placeholder="Enter Account Number" className="h-12 rounded-xl border-slate-200 bg-white font-bold px-4 shadow-sm" value={paymentDetails.account_number} onChange={(e) => setPaymentDetails({ ...paymentDetails, account_number: e.target.value })} />
                                    </div>
                                </div>
                            )}

                            <div className="space-y-2">
                                <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-3">Delivery Address</Label>
                                <Input placeholder="Street, City, District" className="h-12 rounded-xl border-slate-200 bg-white font-medium px-4 shadow-sm" value={paymentDetails.delivery_address} onChange={(e) => setPaymentDetails({ ...paymentDetails, delivery_address: e.target.value })} />
                            </div>
                        </div>

                        {/* Order Summary Terminal */}
                        <div className="space-y-3">
                            <div className="flex justify-between items-baseline pt-4 border-t border-slate-100">
                                <span className="text-xs font-black text-slate-900 uppercase tracking-[0.2em]">TOTAL TO PAY</span>
                                <span className="text-2xl font-black text-[#0072C6] tracking-tighter">Le {(totalPrice + 50000).toLocaleString()}</span>
                            </div>
                        </div>

                        <div className="flex gap-3 pt-2">
                            <Button variant="ghost" onClick={() => setShowPaymentModal(false)} className="flex-1 h-14 rounded-xl font-bold text-slate-500 hover:text-slate-900 hover:bg-slate-100">Cancel</Button>
                            <Button onClick={handleProcessPayment} className="flex-[2] h-14 bg-[#1EB53A] text-white hover:bg-[#1base-3A]/90 rounded-xl font-black uppercase tracking-widest text-[10px] shadow-xl transition-all active:scale-95" disabled={processingPayment}>
                                {processingPayment ? (
                                    <>
                                        <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Processing...
                                    </>
                                ) : (
                                    <>
                                        <Check className="w-4 h-4 mr-2" /> Confirm Payment
                                    </>
                                )}
                            </Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>

            {/* Quick Login Terminal */}
            <Dialog open={showLoginModal} onOpenChange={setShowLoginModal}>
                <DialogContent className="sm:max-w-md rounded-[3rem] border-none shadow-2xl p-10 bg-white">
                    <DialogHeader className="mb-8">
                        <div className="w-16 h-16 rounded-[1.5rem] bg-indigo-50 flex items-center justify-center mb-6">
                            <User className="w-8 h-8 text-indigo-600" />
                        </div>
                        <DialogTitle className="text-3xl font-black text-slate-900 uppercase tracking-tighter">Identity Verification</DialogTitle>
                        <DialogDescription className="text-slate-500 font-medium text-lg leading-relaxed">Please authenticate to continue with this acquisition.</DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleQuickLogin} className="space-y-6">
                        <div className="space-y-2">
                            <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Terminal ID (Email)</Label>
                            <Input type="email" required className="h-14 rounded-2xl border-slate-100 bg-slate-50 font-bold px-6" value={loginForm.email} onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })} />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Secure Password</Label>
                            <Input type="password" required className="h-14 rounded-2xl border-slate-100 bg-slate-50 font-bold px-6" value={loginForm.password} onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })} />
                        </div>
                        <Button type="submit" className="w-full h-16 bg-[#0072C6] text-white hover:bg-[#007276]/90 rounded-2xl font-black uppercase tracking-widest text-xs shadow-2xl transition-all">Authenticate & Continue</Button>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}
