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
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="bg-info/10 p-2 rounded-lg">
                <ShoppingBag className="w-8 h-8 text-info" />
              </div>
              <h1 className="text-4xl font-bold">Farmer Marketplace</h1>
            </div>
            <p className="text-muted-foreground text-lg">Buy and sell directly with fellow farmers</p>
          </div>

          {/* Category Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow bg-success/5">
              <div className="bg-success/10 p-4 rounded-full w-fit mx-auto mb-4">
                <Sprout className="w-10 h-10 text-success" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Seeds & Plants</h3>
              <p className="text-sm text-muted-foreground">Quality seeds and saplings</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow bg-warning/5">
              <div className="bg-warning/10 p-4 rounded-full w-fit mx-auto mb-4">
                <Tractor className="w-10 h-10 text-warning" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Equipment</h3>
              <p className="text-sm text-muted-foreground">Farming tools and machinery</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow bg-info/5">
              <div className="bg-info/10 p-4 rounded-full w-fit mx-auto mb-4">
                <Apple className="w-10 h-10 text-info" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Fresh Produce</h3>
              <p className="text-sm text-muted-foreground">Fruits and vegetables</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow bg-accent/5">
              <div className="bg-accent/10 p-4 rounded-full w-fit mx-auto mb-4">
                <TestTube className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Fertilizers</h3>
              <p className="text-sm text-muted-foreground">Organic and chemical fertilizers</p>
            </Card>
          </div>

          {/* Post New Listing Form */}
          <Card className="mb-12 overflow-hidden">
            <div className="bg-info text-info-foreground p-4">
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
                  <Badge className="bg-success text-success-foreground">For Sale</Badge>
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
                  <span className="text-lg font-bold text-success">Le 700/kg</span>
                  <Button size="sm" variant="outline" className="border-info text-info">Contact</Button>
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
                  <Button size="sm" variant="outline" className="border-info text-info">Contact</Button>
                </div>
              </Card>

              {/* Listing 3 */}
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-info text-info-foreground">Looking to Buy</Badge>
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
                  <Button size="sm" variant="outline" className="border-info text-info">Contact</Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
