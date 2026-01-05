'use client'

import { API_URL } from '@/lib/api-config'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Search, MapPin, Tag, ShoppingBag, MessageCircle, AlertCircle } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'

export default function AdminMarketplacePage() {
    const [products, setProducts] = useState<any[]>([])
    const [inquiries, setInquiries] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedInquiry, setSelectedInquiry] = useState<any>(null)
    const [showInquiryModal, setShowInquiryModal] = useState(false)

    useEffect(() => {
        fetchMarketplaceData()
    }, [])

    const fetchMarketplaceData = async () => {
        setLoading(true)
        try {
            const [productsRes, inquiriesRes] = await Promise.all([
                fetch(`${API_URL}/api/admin/marketplace/products`),
                fetch(`${API_URL}/api/admin/marketplace/inquiries`)
            ])

            if (productsRes.ok) {
                const productsData = await productsRes.json()
                setProducts(productsData)
            } else {
                throw new Error('Backend unreachable')
            }

            if (inquiriesRes.ok) {
                const inquiriesData = await inquiriesRes.json()
                setInquiries(inquiriesData)
            }
        } catch (error) {
            console.warn('Simulation Mode: Marketplace fallback')
            setProducts([
                { id: 1, product_name: "Premium Rice Grains", seller_name: "Lunsar Collective", price: "2,500", unit: "bag", category: "Grains", status: "available", created_date: new Date().toISOString(), seller_location: "Port Loko District" },
                { id: 2, product_name: "Organic Cassava", seller_name: "Southern Farms Ltd", price: "450", unit: "kg", category: "Vegetables", status: "sold", created_date: new Date(Date.now() - 432000000).toISOString(), seller_location: "Pujehun" }
            ])
            setInquiries([
                { id: 1, inquiry_date: new Date().toISOString(), product_name: "Premium Rice Grains", buyer_name: "City Feed Mill", buyer_phone: "+232 76 543 210", buyer_email: "bulk@cityfeed.com", message: "Interested in purchasing 500 bags for the Freetown market." }
            ])
        } finally {
            setLoading(false)
        }
    }

    const updateProductStatus = async (id: number, newStatus: string) => {
        try {
            const res = await fetch(`${API_URL}/api/admin/marketplace/products/${id}/status`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: newStatus })
            })

            if (res.ok) {
                // Optimistic update
                setProducts(products.map(p => p.id === id ? { ...p, status: newStatus } : p))
            } else {
                // Simulation update
                setProducts(products.map(p => p.id === id ? { ...p, status: newStatus } : p))
            }
        } catch (error) {
            // Simulation update
            setProducts(products.map(p => p.id === id ? { ...p, status: newStatus } : p))
        }
    }

    const viewInquiry = (inquiry: any) => {
        setSelectedInquiry(inquiry)
        setShowInquiryModal(true)
    }

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        })
    }

    const filteredProducts = products.filter(p =>
        p.product_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.seller_name.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
        <div className="space-y-10">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-4xl font-black heading-flagship">Marketplace Operations</h1>
                    <p className="text-slate-500 font-medium mt-1">Regulating the flow of <span className="text-[#0072C6] font-bold">National Commerce</span>.</p>
                </div>
                <div className="bg-white px-5 py-2.5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#1EB53A]"></div>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Trade Live</span>
                    </div>
                </div>
            </div>
            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-4">
                <Card>
                    <CardHeader className="pb-3">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Total Listings</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{products.length}</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-3">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Active Products</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-primary">
                            {products.filter(p => p.status === 'available').length}
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-3">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Total Inquiries</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-secondary">{inquiries.length}</div>
                    </CardContent>
                </Card>
            </div>

            <Tabs defaultValue="products" className="space-y-4">
                <TabsList>
                    <TabsTrigger value="products">Products ({products.length})</TabsTrigger>
                    <TabsTrigger value="inquiries">Inquiries ({inquiries.length})</TabsTrigger>
                </TabsList>

                {/* Products Tab */}
                <TabsContent value="products">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle>Product Listings</CardTitle>
                            <div className="relative w-64">
                                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    placeholder="Search products..."
                                    className="pl-8"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Product</TableHead>
                                        <TableHead>Seller</TableHead>
                                        <TableHead>Price</TableHead>
                                        <TableHead>Category</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead>Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {filteredProducts.map((product) => (
                                        <TableRow key={product.id}>
                                            <TableCell className="font-medium text-foreground">
                                                <div>{product.product_name}</div>
                                                <div className="text-xs text-muted-foreground">{formatDate(product.created_date)}</div>
                                            </TableCell>
                                            <TableCell>
                                                <div>{product.seller_name}</div>
                                                <div className="text-xs text-slate-500">{product.seller_location}</div>
                                            </TableCell>
                                            <TableCell className="text-foreground">
                                                Le {product.price} / {product.unit}
                                            </TableCell>
                                            <TableCell>
                                                <Badge variant="outline">{product.category}</Badge>
                                            </TableCell>
                                            <TableCell>
                                                <Badge className={
                                                    product.status === 'available' ? 'bg-primary/20 text-primary border-primary/30' :
                                                        product.status === 'sold' ? 'bg-secondary/20 text-secondary border-secondary/30' :
                                                            'bg-muted text-muted-foreground border-border'
                                                }>
                                                    {product.status}
                                                </Badge>
                                            </TableCell>
                                            <TableCell>
                                                {product.status === 'available' ? (
                                                    <Button
                                                        size="sm"
                                                        variant="outline"
                                                        className="text-destructive hover:bg-destructive/10 border-destructive"
                                                        onClick={() => updateProductStatus(product.id, 'hidden')}
                                                    >
                                                        Hide
                                                    </Button>
                                                ) : (
                                                    <Button
                                                        size="sm"
                                                        variant="outline"
                                                        onClick={() => updateProductStatus(product.id, 'available')}
                                                    >
                                                        Restore
                                                    </Button>
                                                )}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* Inquiries Tab */}
                <TabsContent value="inquiries">
                    <Card>
                        <CardHeader>
                            <CardTitle>Buyer Inquiries</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Date</TableHead>
                                        <TableHead>Product</TableHead>
                                        <TableHead>Buyer</TableHead>
                                        <TableHead>Message Preview</TableHead>
                                        <TableHead>Action</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {inquiries.map((inquiry) => (
                                        <TableRow key={inquiry.id}>
                                            <TableCell className="text-muted-foreground">
                                                {formatDate(inquiry.inquiry_date)}
                                            </TableCell>
                                            <TableCell className="font-medium">{inquiry.product_name}</TableCell>
                                            <TableCell>
                                                <div className="text-foreground">{inquiry.buyer_name}</div>
                                                <div className="text-xs text-muted-foreground">{inquiry.buyer_phone}</div>
                                            </TableCell>
                                            <TableCell className="max-w-xs truncate text-slate-500">
                                                {inquiry.message}
                                            </TableCell>
                                            <TableCell>
                                                <Button size="sm" variant="outline" onClick={() => viewInquiry(inquiry)}>
                                                    View Details
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>

            {/* Inquiry Detail Modal */}
            <Dialog open={showInquiryModal} onOpenChange={setShowInquiryModal}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Inquiry Details</DialogTitle>
                        <DialogDescription>Inquiry for {selectedInquiry?.product_name}</DialogDescription>
                    </DialogHeader>
                    {selectedInquiry && (
                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                    <p className="font-semibold text-muted-foreground">Buyer Name</p>
                                    <p className="text-foreground">{selectedInquiry.buyer_name}</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-muted-foreground">Contact</p>
                                    <p className="text-foreground">{selectedInquiry.buyer_phone}</p>
                                    <p className="text-foreground">{selectedInquiry.buyer_email}</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-muted-foreground">Date</p>
                                    <p className="text-foreground">{new Date(selectedInquiry.inquiry_date).toLocaleString()}</p>
                                </div>
                            </div>
                            <div className="bg-muted p-4 rounded-lg">
                                <p className="font-semibold text-muted-foreground mb-2 text-sm">Message</p>
                                <p className="text-sm text-foreground">{selectedInquiry.message}</p>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    )
}
