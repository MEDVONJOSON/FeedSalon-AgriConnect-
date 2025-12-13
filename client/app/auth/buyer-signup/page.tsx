'use client'

import { auth } from '@/lib/auth'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Navigation } from '@/components/navigation'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ShoppingCart, User, Mail, Phone, MapPin, Building, Lock } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function BuyerSignupPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    businessName: '',
    ownerName: '',
    email: '',
    phone: '',
    businessType: '',
    location: '',
    city: '',
    state: '',
    password: '',
    pincode: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Save user to mock auth
    auth.signup({
      name: formData.ownerName, // Use owner's name for display
      email: formData.email
    })

    // Redirect to main dashboard immediately after signup
    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="bg-info/10 p-3 rounded-lg">
                <ShoppingCart className="w-8 h-8 text-info" />
              </div>
              <h1 className="text-3xl font-bold">Create Buyer Account</h1>
            </div>
            <p className="text-muted-foreground text-lg">
              Join AgriPredict marketplace and access quality agricultural products
            </p>
          </div>

          {/* Signup Form */}
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Business Information */}
              <div>
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Building className="w-5 h-5 text-info" />
                  Business Information
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="businessName">Business/Company Name *</Label>
                    <Input
                      id="businessName"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="Enter your business name"
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="businessType">Business Type *</Label>
                    <Select
                      value={formData.businessType}
                      onValueChange={(value) => setFormData({ ...formData, businessType: value })}
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="wholesaler">Wholesaler</SelectItem>
                        <SelectItem value="retailer">Retailer</SelectItem>
                        <SelectItem value="restaurant">Restaurant/Hotel</SelectItem>
                        <SelectItem value="food-processor">Food Processor</SelectItem>
                        <SelectItem value="exporter">Exporter</SelectItem>
                        <SelectItem value="individual">Individual Buyer</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Personal Information */}
              <div>
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-success" />
                  Personal Information
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="ownerName">Full Name *</Label>
                    <Input
                      id="ownerName"
                      value={formData.ownerName}
                      onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                      placeholder="Enter your full name"
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+232 76 123 456"
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="password">Password *</Label>
                    <Input
                      id="password"
                      type="password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      placeholder="Create a strong password"
                      required
                      className="mt-2"
                    />
                  </div>
                </div>
              </div>

              {/* Location */}
              <div>
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-warning" />
                  Location
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="md:col-span-3">
                    <Label htmlFor="location">Business Address *</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="Street address"
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="City"
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="state">District *</Label>
                    <Input
                      id="state"
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      placeholder="District"
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="pincode">Postal Code</Label>
                    <Input
                      id="pincode"
                      placeholder="Optional"
                      className="mt-2"
                    />
                  </div>
                </div>
              </div>

              {/* Benefits Section */}
              <Card className="p-6 bg-primary/5 border-primary/20">
                <h3 className="font-semibold mb-3">What You'll Get:</h3>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-success"></div>
                    <span>Access to verified farmers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-success"></div>
                    <span>Quality agricultural products</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-success"></div>
                    <span>Direct sourcing, better prices</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-success"></div>
                    <span>Order tracking & management</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-success"></div>
                    <span>Secure payment system</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-success"></div>
                    <span>24/7 customer support</span>
                  </div>
                </div>
              </Card>

              {/* Submit Button */}
              <div className="flex flex-col gap-4">
                <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Create Account & Access Dashboard
                </Button>
                <p className="text-sm text-center text-muted-foreground">
                  Already have an account?{' '}
                  <Button
                    type="button"
                    variant="link"
                    className="p-0 h-auto text-info"
                    onClick={() => router.push('/auth/buyer-login')}
                  >
                    Login here
                  </Button>
                </p>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </div>
  )
}
