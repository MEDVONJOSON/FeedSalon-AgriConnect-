'use client'

import { useState, useEffect } from 'react'
import { Navigation } from '@/components/navigation'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Package, Truck, Clock, CheckCircle2, ChevronRight, ShoppingBag } from 'lucide-react'
import { auth } from '@/lib/auth'
import { API_URL } from '@/lib/api-config'
import Link from 'next/link'

export default function OrdersPage() {
    const [orders, setOrders] = useState<any[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const user = auth.getUser()
        if (user) {
            fetchOrders(user.email)
        }
    }, [])

    const fetchOrders = async (userEmail: string) => {
        try {
            // In a real app, we'd fetch from /api/marketplace/orders?buyer_email=...
            // For now, let's fetch all (or simulate)
            const res = await fetch(`${API_URL}/api/marketplace/products`) // Mock fetch since we don't have a get orders endpoint yet
            if (res.ok) {
                const data = await res.json()
                // Simulate some orders from the products
                const mockOrders = data.slice(0, 2).map((p: any, i: number) => ({
                    id: `ORD-100${i}`,
                    product_name: p.product_name,
                    price: p.price,
                    status: i === 0 ? 'processing' : 'completed',
                    created_at: new Date().toISOString(),
                    quantity: 1,
                    total_price: p.price
                }))
                setOrders(mockOrders)
            }
        } catch (error) {
            console.error('Error fetching orders:', error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            <div className="bg-gradient-to-r from-[#1EB53A] to-[#0072C6] pt-32 pb-24 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10 text-white">
                    <h1 className="text-5xl font-black uppercase tracking-tighter mb-4">My Acquisitions</h1>
                    <p className="text-xl text-white/80 max-w-2xl font-medium">Tracking your agricultural trade assets through the national logistics network.</p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 -mt-12 relative z-20">
                <Card className="p-8 border-none bg-white rounded-[2.5rem] shadow-2xl overflow-hidden">
                    {loading ? (
                        <div className="space-y-4 animate-pulse">
                            <div className="h-20 bg-slate-50 rounded-2xl w-full"></div>
                            <div className="h-20 bg-slate-50 rounded-2xl w-full"></div>
                        </div>
                    ) : orders.length === 0 ? (
                        <div className="text-center py-20">
                            <ShoppingBag className="w-16 h-16 text-slate-200 mx-auto mb-6" />
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">No active orders</h3>
                            <p className="text-slate-500 mb-8">You haven't made any acquisitions yet.</p>
                            <Link href="/marketplace" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-2xl font-bold uppercase tracking-widest text-xs hover:scale-105 transition-all">
                                Go to Marketplace
                            </Link>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {orders.map((order) => (
                                <div key={order.id} className="group flex flex-col md:flex-row items-center gap-8 p-6 bg-slate-50 hover:bg-white hover:shadow-xl rounded-[2rem] transition-all border border-transparent hover:border-slate-100">
                                    <div className="w-20 h-20 bg-[#1EB53A]/10 rounded-2xl flex items-center justify-center shrink-0">
                                        <Package className="w-10 h-10 text-[#1EB53A]" />
                                    </div>
                                    <div className="flex-1 space-y-1">
                                        <div className="flex items-center gap-3">
                                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{order.id}</span>
                                            <Badge className={`border-none font-black text-[8px] uppercase tracking-widest px-3 py-1 ${order.status === 'completed' ? 'bg-[#1EB53A]/10 text-[#1EB53A]' : 'bg-amber-100 text-amber-600'
                                                }`}>
                                                {order.status}
                                            </Badge>
                                        </div>
                                        <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">{order.product_name}</h3>
                                        <p className="text-xs font-bold text-slate-400">Acquired on {new Date(order.created_at).toLocaleDateString()}</p>
                                    </div>
                                    <div className="flex flex-col items-end gap-2">
                                        <p className="text-2xl font-black text-[#0072C6]">Le {parseFloat(order.total_price).toLocaleString()}</p>
                                        <Button variant="ghost" className="text-[10px] font-black uppercase tracking-widest text-[#1EB53A] group-hover:gap-2 transition-all">
                                            Logistics Details <ChevronRight className="w-3 h-3" />
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </Card>
            </div>
        </div>
    )
}
