'use client'

import { auth } from '@/lib/auth'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
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
      email: formData.email,
      role: 'buyer'
    })

    // Redirect to main dashboard immediately after signup
    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <Navigation />

      {/* Patriotic Branding Accents */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-[#1EB53A]/5 blur-[120px] rounded-full -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-[#0072C6]/10 blur-[100px] rounded-full translate-x-1/4"></div>

      <div className="container relative z-10 mx-auto px-4 py-20 flex items-center justify-center min-h-[calc(100vh-80px)]">
        <div className="max-w-4xl w-full">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="bg-white p-6 rounded-[2rem] w-fit mx-auto mb-6 shadow-2xl border border-slate-50 relative group">
              <div className="absolute inset-0 bg-[#0072C6]/10 blur-xl group-hover:opacity-20 transition-opacity rounded-full"></div>
              <ShoppingCart className="w-16 h-16 text-[#0072C6] animate-float relative z-10" />
            </div>
            <h1 className="text-5xl font-black heading-flagship mb-4 leading-none">Register as Buyer</h1>
            <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-[10px]">
              Access the <span className="text-[#0072C6] underline decoration-2 underline-offset-4">Digital National Marketplace</span>
            </p>
          </div>

          {/* Signup Form */}
          <Card className="p-12 border-none shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] rounded-[2.5rem] bg-white/80 backdrop-blur-xl">
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Business Information */}
              <div className="space-y-6">
                <h2 className="text-xl font-black text-slate-900 flex items-center gap-3">
                  <div className="p-2 bg-slate-100 rounded-lg">
                    <Building className="w-5 h-5 text-slate-600" />
                  </div>
                  Business Information
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="businessName" className="font-black uppercase tracking-widest text-[10px] text-slate-400 mb-2 block px-1">Legal Business Name *</Label>
                    <Input
                      id="businessName"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="Ex: Freetown Food Group"
                      required
                      className="h-14 bg-slate-50/50 border-slate-200 rounded-2xl focus:ring-[#0072C6] focus:border-[#0072C6] font-medium"
                    />
                  </div>
                  <div>
                    <Label htmlFor="businessType" className="font-black uppercase tracking-widest text-[10px] text-slate-400 mb-2 block px-1">Nature of Business *</Label>
                    <Select
                      value={formData.businessType}
                      onValueChange={(value) => setFormData({ ...formData, businessType: value })}
                    >
                      <SelectTrigger className="h-14 bg-slate-50/50 border-slate-200 rounded-2xl font-medium px-4">
                        <SelectValue placeholder="Select Category" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl border-slate-100 shadow-xl font-medium">
                        <SelectItem value="wholesaler">Wholesaler</SelectItem>
                        <SelectItem value="retailer">Retailer</SelectItem>
                        <SelectItem value="restaurant">Restaurant/Hotel</SelectItem>
                        <SelectItem value="food-processor">Food Processor</SelectItem>
                        <SelectItem value="exporter">Exporter</SelectItem>
                        <SelectItem value="individual">Individual Buyer</SelectItem>
                        <SelectItem value="other">Other Entity</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Personal Information */}
              <div className="space-y-6">
                <h2 className="text-xl font-black text-slate-900 flex items-center gap-3">
                  <div className="p-2 bg-slate-100 rounded-lg">
                    <User className="w-5 h-5 text-slate-600" />
                  </div>
                  Primary Representative
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="ownerName" className="font-black uppercase tracking-widest text-[10px] text-slate-400 mb-2 block px-1">Officer Name *</Label>
                    <Input
                      id="ownerName"
                      value={formData.ownerName}
                      onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                      placeholder="Ex: Sorie Ibrahim"
                      required
                      className="h-14 bg-slate-50/50 border-slate-200 rounded-2xl focus:ring-[#0072C6] focus:border-[#0072C6] font-medium"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="font-black uppercase tracking-widest text-[10px] text-slate-400 mb-2 block px-1">Institutional Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Ex: procurement@salone.sl"
                      required
                      className="h-14 bg-slate-50/50 border-slate-200 rounded-2xl focus:ring-[#0072C6] focus:border-[#0072C6] font-medium"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="font-black uppercase tracking-widest text-[10px] text-slate-400 mb-2 block px-1">Direct Line *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+232 __ _____ ___"
                      required
                      className="h-14 bg-slate-50/50 border-slate-200 rounded-2xl focus:ring-[#0072C6] focus:border-[#0072C6] font-medium"
                    />
                  </div>
                  <div>
                    <Label htmlFor="password" className="font-black uppercase tracking-widest text-[10px] text-slate-400 mb-2 block px-1">Security Keyphrase *</Label>
                    <Input
                      id="password"
                      type="password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      placeholder="Create a strong key"
                      required
                      className="h-14 bg-slate-50/50 border-slate-200 rounded-2xl focus:ring-[#0072C6] focus:border-[#0072C6] font-medium"
                    />
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="space-y-6">
                <h2 className="text-xl font-black text-slate-900 flex items-center gap-3">
                  <div className="p-2 bg-slate-100 rounded-lg">
                    <MapPin className="w-5 h-5 text-slate-600" />
                  </div>
                  Operational Headquarters
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-3">
                    <Label htmlFor="location" className="font-black uppercase tracking-widest text-[10px] text-slate-400 mb-2 block px-1">Physical Business Address *</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="Ex: 56 Wilkinson Road"
                      required
                      className="h-14 bg-slate-50/50 border-slate-200 rounded-2xl focus:ring-[#0072C6] focus:border-[#0072C6] font-medium"
                    />
                  </div>
                  <div>
                    <Label htmlFor="city" className="font-black uppercase tracking-widest text-[10px] text-slate-400 mb-2 block px-1">City *</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="Ex: Freetown"
                      required
                      className="h-14 bg-slate-50/50 border-slate-200 rounded-2xl focus:ring-[#0072C6] focus:border-[#0072C6] font-medium"
                    />
                  </div>
                  <div>
                    <Label htmlFor="state" className="font-black uppercase tracking-widest text-[10px] text-slate-400 mb-2 block px-1">District *</Label>
                    <Input
                      id="state"
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      placeholder="Ex: Western Area"
                      required
                      className="h-14 bg-slate-50/50 border-slate-200 rounded-2xl focus:ring-[#0072C6] focus:border-[#0072C6] font-medium"
                    />
                  </div>
                  <div>
                    <Label htmlFor="pincode" className="font-black uppercase tracking-widest text-[10px] text-slate-400 mb-2 block px-1">Building/Suite</Label>
                    <Input
                      id="pincode"
                      placeholder="Ex: Floor 4"
                      className="h-14 bg-slate-50/50 border-slate-200 rounded-2xl font-medium"
                    />
                  </div>
                </div>
              </div>

              {/* Benefits Section */}
              <div className="p-8 bg-[#0072C6]/5 border border-[#0072C6]/10 rounded-[2rem] backdrop-blur-sm">
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-6 px-1">Institutional Benefits</h3>
                <div className="grid md:grid-cols-2 gap-y-4 gap-x-8">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#1EB53A]"></div>
                    <span className="text-xs font-bold text-slate-600">Direct Access to Verified Farmers</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#1EB53A]"></div>
                    <span className="text-xs font-bold text-slate-600">National Grade Fresh Produce</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#1EB53A]"></div>
                    <span className="text-xs font-bold text-slate-600">Wholesale Price Optimization</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#1EB53A]"></div>
                    <span className="text-xs font-bold text-slate-600">Digital Order Management</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#1EB53A]"></div>
                    <span className="text-xs font-bold text-slate-600">Secure National Payment Gateway</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#1EB53A]"></div>
                    <span className="text-xs font-bold text-slate-600">24/7 Logistics Coordination Support</span>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col gap-6">
                <Button type="submit" className="w-full h-16 bg-[#0072C6] hover:scale-[1.02] active:scale-[0.98] transition-all rounded-2xl font-black uppercase tracking-[0.2em] text-sm shadow-xl shadow-blue-900/10">
                  <ShoppingCart className="w-5 h-5 mr-3" />
                  Initialize Institutional Account
                </Button>
                <p className="text-sm font-bold text-slate-500 text-center">
                  Organization already registered?{' '}
                  <Link
                    href="/auth/buyer-login"
                    className="text-[#0072C6] hover:underline"
                  >
                    Authorize Terminal
                  </Link>
                </p>
              </div>
            </form>
          </Card>

          <p className="mt-8 text-center text-[10px] font-black text-slate-400 uppercase tracking-widest leading-relaxed">
            By creating an account, you agree to our Digital Sovereignty Terms and
            Privacy Protection Policy of Sierra Leone.
          </p>
        </div>
      </div>
    </div>
  )
}
