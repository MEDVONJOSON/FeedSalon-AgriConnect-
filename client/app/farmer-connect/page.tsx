'use client'

import { useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Users, MessageCircle, GraduationCap, Handshake, ShoppingBag, ArrowRight, Plus, Info, Search, User, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function FarmerConnectPage() {
  const [location, setLocation] = useState('')
  const [cropInterest, setCropInterest] = useState('all')

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 text-balance">Farmer Connect</h1>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto text-balance">
            Join thousands of farmers sharing knowledge, experiences, and growing together
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" variant="secondary" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Users className="w-5 h-5 mr-2" />
              JOIN COMMUNITY
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
              <Info className="w-5 h-5 mr-2" />
              ASK QUESTION
            </Button>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-success mb-2">25,000+</p>
              <p className="text-muted-foreground">Active Farmers</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-info mb-2">15,000+</p>
              <p className="text-muted-foreground">Questions Answered</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-warning mb-2">500+</p>
              <p className="text-muted-foreground">Expert Advisors</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-accent mb-2">50+</p>
              <p className="text-muted-foreground">States Covered</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto overflow-hidden">
            <div className="bg-info text-info-foreground p-4">
              <div className="flex items-center justify-center gap-2">
                <Users className="w-6 h-6" />
                <h2 className="text-2xl font-semibold">Connect with Local Farmers</h2>
              </div>
            </div>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="location" className="text-base mb-2 block">Your Location *</Label>
                  <Input
                    id="location"
                    placeholder="District, Sierra Leone"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="h-12"
                  />
                </div>
                <div>
                  <Label htmlFor="crop-interest" className="text-base mb-2 block">Crop Interest</Label>
                  <Select value={cropInterest} onValueChange={setCropInterest}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="All Crops" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Crops</SelectItem>
                      <SelectItem value="rice">Rice</SelectItem>
                      <SelectItem value="wheat">Wheat</SelectItem>
                      <SelectItem value="cotton">Cotton</SelectItem>
                      <SelectItem value="sugarcane">Sugarcane</SelectItem>
                      <SelectItem value="vegetables">Vegetables</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="text-center mt-6">
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  <Search className="w-5 h-5 mr-2" />
                  Find Farmers Nearby
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="py-12 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Recent Community Activity</h2>
            <p className="text-muted-foreground">See what farmers are discussing</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-3 text-balance leading-snug">
                My wheat crop is showing yellow rust symptoms. What immediat...
              </h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <User className="w-4 h-4" />
                <span>Mohamed Kamara</span>
                <span>•</span>
                <MapPin className="w-4 h-4" />
                <span>Bo District</span>
              </div>
              <div className="flex items-center justify-between">
                <Badge className="bg-success text-success-foreground">answered</Badge>
                <span className="text-sm text-muted-foreground">3 responses</span>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-3 text-balance leading-snug">
                How to control bollworm attack in cotton without using exces...
              </h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <User className="w-4 h-4" />
                <span>Fatmata Bangura</span>
                <span>•</span>
                <MapPin className="w-4 h-4" />
                <span>Kenema District</span>
              </div>
              <div className="flex items-center justify-between">
                <Badge className="bg-success text-success-foreground">answered</Badge>
                <span className="text-sm text-muted-foreground">7 responses</span>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-3 text-balance leading-snug">
                Best organic fertilizers for groundnut cultivation in sandy ...
              </h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <User className="w-4 h-4" />
                <span>Ibrahim Sesay</span>
                <span>•</span>
                <MapPin className="w-4 h-4" />
                <span>Makeni District</span>
              </div>
              <div className="flex items-center justify-between">
                <Badge className="bg-success text-success-foreground">answered</Badge>
                <span className="text-sm text-muted-foreground">5 responses</span>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Community Features */}
      <div className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Community Features</h2>
            <p className="text-muted-foreground">Connect, learn, and grow with fellow farmers</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Discussion Forum */}
            <Card className="p-6 text-center hover:shadow-lg transition-shadow border-2">
              <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                <MessageCircle className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Discussion Forum</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Ask questions, share experiences, and get advice from experienced farmers.
              </p>
              <Link href="/farmer-connect/forum">
                <Button className="bg-primary hover:bg-primary/90">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Join Discussion
                </Button>
              </Link>
            </Card>

            {/* Expert Advice */}
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-success/10 p-4 rounded-full w-fit mx-auto mb-4">
                <GraduationCap className="w-12 h-12 text-success" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Advice</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Get professional guidance from agricultural experts and extension officers.
              </p>
              <Link href="/farmer-connect/experts">
                <Button variant="outline" className="border-success/30 text-success hover:bg-success/10">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Consult Expert
                </Button>
              </Link>
            </Card>

            {/* Local Connections */}
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-warning/10 p-4 rounded-full w-fit mx-auto mb-4">
                <Handshake className="w-12 h-12 text-warning" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Local Connections</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Connect with farmers in your area for knowledge sharing and collaboration.
              </p>
              <Button variant="outline" className="border-warning/30 text-warning hover:bg-warning/10">
                <ArrowRight className="w-4 h-4 mr-2" />
                Find Farmers
              </Button>
            </Card>

            {/* Marketplace */}
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="bg-info/10 p-4 rounded-full w-fit mx-auto mb-4">
                <ShoppingBag className="w-12 h-12 text-info" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Marketplace</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Buy and sell farming equipment, seeds, and produce directly with other farmers.
              </p>
              <Link href="/farmer-connect/marketplace">
                <Button variant="outline" className="border-info/30 text-info hover:bg-info/10">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Visit Market
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </div>

      <div className="py-16 bg-success/10">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto overflow-hidden">
            <div className="bg-success text-success-foreground p-4">
              <div className="flex items-center justify-center gap-2">
                <Info className="w-6 h-6" />
                <h2 className="text-2xl font-semibold">Ask the Community</h2>
              </div>
              <p className="text-center mt-1 text-success-foreground/90">Get answers from experienced farmers and experts</p>
            </div>
            <div className="p-8 bg-background">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label htmlFor="name">Your Name *</Label>
                  <Input id="name" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="ask-location">Location *</Label>
                  <Input id="ask-location" placeholder="e.g., Freetown, Western Area" className="mt-2" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label htmlFor="related-crop">Related Crop</Label>
                  <Select>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="General Farming" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Farming</SelectItem>
                      <SelectItem value="rice">Rice</SelectItem>
                      <SelectItem value="wheat">Wheat</SelectItem>
                      <SelectItem value="cotton">Cotton</SelectItem>
                      <SelectItem value="vegetables">Vegetables</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="category">Question Category *</Label>
                  <Select>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pest">Pest & Disease</SelectItem>
                      <SelectItem value="fertilizer">Fertilizers</SelectItem>
                      <SelectItem value="irrigation">Irrigation</SelectItem>
                      <SelectItem value="general">General Farming</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="mb-6">
                <Label htmlFor="question">Your Question *</Label>
                <textarea
                  id="question"
                  className="w-full mt-2 min-h-32 px-3 py-2 rounded-md border border-input bg-background"
                  placeholder="Describe your problem or question in detail..."
                />
              </div>
              <div className="text-center">
                <Button size="lg" className="bg-success hover:bg-success/90 text-success-foreground">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Submit for Expert Review
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
