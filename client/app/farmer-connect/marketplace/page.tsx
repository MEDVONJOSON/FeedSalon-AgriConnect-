'use client'

import { useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ShoppingBag, Sprout, Tractor, Apple, TestTube, Plus, User, MapPin, Phone } from 'lucide-react'

export default function MarketplacePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Premium Gradient Header */}
      <div className="bg-gradient-to-r from-[#1EB53A] to-[#0072C6] pt-32 pb-20 relative overflow-hidden">
        {/* Dynamic Accents */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/10 blur-[100px] rounded-full translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-white/5 blur-[80px] rounded-full -translate-x-1/4"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-md px-4 py-1 flex items-center gap-2">
                <ShoppingBag className="w-3 h-3" />
                NATIONAL TRADE HUB
              </Badge>
            </div>
            <h1 className="text-6xl font-black text-white mb-6 leading-tight select-none">Agricultural Marketplace</h1>
            <p className="text-xl text-white/80 font-medium max-w-2xl mb-12">
              Connect directly with farmers. Buy fresh produce, livestock, and equipment at the <span className="text-white font-black underline decoration-2 underline-offset-4">best national prices</span>.
            </p>

            {/* Premium Search Bar */}
            <div className="max-w-4xl bg-white/95 backdrop-blur-md p-2 rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row gap-2 border border-white/20">
              <div className="flex-1 relative flex items-center">
                <div className="absolute left-6 text-slate-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <Input
                  placeholder="Search for fresh cassava, tools, fertilizer..."
                  className="h-16 border-none shadow-none focus-visible:ring-0 px-16 text-lg font-bold text-slate-800 placeholder:text-slate-400 placeholder:font-bold"
                />
              </div>
              <Button className="h-16 px-12 bg-[#1EB53A] hover:bg-[#1EB53A]/90 text-white rounded-[2rem] font-black uppercase tracking-widest text-sm shadow-xl shadow-green-900/20 active:scale-95 transition-all">
                Search Marketplace
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Category Quick Access */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 -mt-32 relative z-20">
            <Card className="p-8 text-center hover:shadow-2xl transition-all border-none bg-white shadow-xl group cursor-pointer hover:-translate-y-2">
              <div className="bg-[#1EB53A]/10 p-5 rounded-3xl w-fit mx-auto mb-6 group-hover:bg-[#1EB53A] group-hover:text-white transition-all">
                <Sprout className="w-10 h-10 text-[#1EB53A] group-hover:text-white" />
              </div>
              <h3 className="text-xl font-black text-slate-800 mb-2">Seeds & Plants</h3>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Premium Stock</p>
            </Card>

            <Card className="p-8 text-center hover:shadow-2xl transition-all border-none bg-white shadow-xl group cursor-pointer hover:-translate-y-2">
              <div className="bg-amber-100 p-5 rounded-3xl w-fit mx-auto mb-6 group-hover:bg-amber-500 group-hover:text-white transition-all">
                <Tractor className="w-10 h-10 text-amber-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-black text-slate-800 mb-2">Equipment</h3>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Modern Machines</p>
            </Card>

            <Card className="p-8 text-center hover:shadow-2xl transition-all border-none bg-white shadow-xl group cursor-pointer hover:-translate-y-2">
              <div className="bg-[#0072C6]/10 p-5 rounded-3xl w-fit mx-auto mb-6 group-hover:bg-[#0072C6] group-hover:text-white transition-all">
                <Apple className="w-10 h-10 text-[#0072C6] group-hover:text-white" />
              </div>
              <h3 className="text-xl font-black text-slate-800 mb-2">Fresh Produce</h3>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Farm to Table</p>
            </Card>

            <Card className="p-8 text-center hover:shadow-2xl transition-all border-none bg-white shadow-xl group cursor-pointer hover:-translate-y-2">
              <div className="bg-slate-100 p-5 rounded-3xl w-fit mx-auto mb-6 group-hover:bg-[#0072C6] group-hover:text-white transition-all">
                <TestTube className="w-10 h-10 text-slate-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-black text-slate-800 mb-2">Chemicals</h3>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Soil Nutrition</p>
            </Card>
          </div>

          {/* Post New Listing Form */}
          <Card className="mb-12 overflow-hidden">
            <div className="bg-secondary text-secondary-foreground p-4">
              <h2 className="text-2xl font-semibold text-center">Post New Listing</h2>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label htmlFor="seller-name">Your Name *</Label>
                  <Input id="seller-name" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="contact">Contact Number *</Label>
                  <Input id="contact" type="tel" className="mt-2" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label htmlFor="listing-location">Location *</Label>
                  <Input id="listing-location" placeholder="District, Sierra Leone" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="listing-type">Listing Type *</Label>
                  <Select>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sale">For Sale</SelectItem>
                      <SelectItem value="rent">For Rent</SelectItem>
                      <SelectItem value="buy">Looking to Buy</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label htmlFor="item-name">Item/Product Name *</Label>
                  <Input id="item-name" placeholder="e.g., Wheat Seeds, Tractor" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="quantity">Quantity</Label>
                  <Input id="quantity" placeholder="e.g., 50 kg, 1 unit" className="mt-2" />
                </div>
              </div>

              <div className="mb-6">
                <Label htmlFor="price">Price</Label>
                <Input id="price" placeholder="e.g., Le 10,000/kg, Le 1,000,000" className="mt-2" />
              </div>

              <div className="mb-6">
                <Label htmlFor="description">Description *</Label>
                <textarea
                  id="description"
                  className="w-full mt-2 min-h-32 px-3 py-2 rounded-md border border-input bg-background"
                  placeholder="Provide details about the item..."
                />
              </div>

              <div className="text-center">
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  <Plus className="w-5 h-5 mr-2" />
                  Post Listing
                </Button>
              </div>
            </div>
          </Card>

          {/* Recent Listings */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-6">Recent Listings</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Listing 1 */}
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-primary text-primary-foreground">For Sale</Badge>
                  <span className="text-xs text-muted-foreground">2 hours ago</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Organic Wheat Seeds</h3>
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>Mohamed Kamara</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Freetown, Western Area</span>
                  </div>
                </div>
                <p className="text-sm mb-4 text-muted-foreground">
                  High quality certified organic wheat seeds. Yield: 45-50 qtl/acre
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">Le 700/kg</span>
                  <Button size="sm" variant="outline" className="border-secondary text-secondary">Contact</Button>
                </div>
              </Card>

              {/* Listing 2 */}
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-warning text-warning-foreground">For Rent</Badge>
                  <span className="text-xs text-muted-foreground">5 hours ago</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Harvester Combine</h3>
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>Ibrahim Sesay</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Bo, Southern Province</span>
                  </div>
                </div>
                <p className="text-sm mb-4 text-muted-foreground">
                  Well maintained New Holland combine harvester available for rent
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-success">Le 24,000/hour</span>
                  <Button size="sm" variant="outline" className="border-secondary text-secondary">Contact</Button>
                </div>
              </Card>

              {/* Listing 3 */}
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-secondary text-secondary-foreground">Looking to Buy</Badge>
                  <span className="text-xs text-muted-foreground">1 day ago</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">Fresh Tomatoes</h3>
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>Vendor Company</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Makeni, Northern Province</span>
                  </div>
                </div>
                <p className="text-sm mb-4 text-muted-foreground">
                  Looking for bulk supply of fresh tomatoes for wholesale market
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-success">Le 300-400/kg</span>
                  <Button size="sm" variant="outline" className="border-secondary text-secondary">Contact</Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
