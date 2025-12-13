'use client'

import { Navigation } from '@/components/navigation'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react'
import { Eye, Camera, Scan, Package, MapPin, Clock, CheckCircle, TrendingUp, Shield, User } from 'lucide-react'
import Link from 'next/link'

export default function VerifyProductPage() {
  const [verified, setVerified] = useState(false)
  
  const journeyData = {
    id: 'BC12345678',
    crop: 'Rice (NERICA)',
    quantity: '500 kg',
    farmer: 'John Kamara',
    farmName: 'Kamara Family Farm',
    origin: 'Bo District, Kakua Chiefdom, Ngomehun Village',
    harvestDate: '2025-01-10',
    certifications: ['Organic Certified', 'Pesticide Free'],
    chain: [
      {
        handler: 'Farmer',
        name: 'John Kamara',
        organization: 'Kamara Family Farm',
        location: 'Bo District',
        date: '2025-01-10',
        time: '08:00 AM',
        action: 'Harvested and registered',
        condition: 'Excellent',
        icon: <Package className="w-5 h-5" />
      },
      {
        handler: 'Aggregator',
        name: 'Mohamed Sesay',
        organization: 'Bo Aggregation Center',
        location: 'Bo City',
        date: '2025-01-11',
        time: '10:30 AM',
        action: 'Received, weighed, and quality checked',
        condition: 'Excellent',
        storage: 'Warehouse storage',
        icon: <TrendingUp className="w-5 h-5" />
      },
      {
        handler: 'Processor',
        name: 'Abdul Rahman',
        organization: 'Sierra Leone Rice Mill',
        location: 'Bo City',
        date: '2025-01-12',
        time: '09:00 AM',
        action: 'Milled, cleaned, and packaged',
        condition: 'Good',
        storage: 'Cool dry storage at 20°C',
        icon: <Shield className="w-5 h-5" />
      },
      {
        handler: 'Transporter',
        name: 'Aminata Koroma',
        organization: 'Swift Logistics SL',
        location: 'En route to Freetown',
        date: '2025-01-13',
        time: '06:00 AM',
        action: 'In transit to Freetown market',
        condition: 'Good',
        storage: 'Covered truck transport',
        icon: <TrendingUp className="w-5 h-5" />
      },
      {
        handler: 'Retailer',
        name: 'Fatmata Bangura',
        organization: 'Fresh Market Freetown',
        location: 'Freetown, Western Area',
        date: '2025-01-14',
        time: '02:00 PM',
        action: 'Received and displayed for sale',
        condition: 'Good',
        storage: 'Retail shelf',
        icon: <User className="w-5 h-5" />
      }
    ]
  }

  const handleVerify = () => {
    setVerified(true)
  }

  if (!verified) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <div className="container mx-auto px-4 py-12 max-w-2xl">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold mb-2">Verify Product</h1>
            <p className="text-muted-foreground">
              Scan the QR code to see the complete journey
            </p>
          </div>

          <Card className="p-8">
            <div className="text-center mb-6">
              <div className="bg-info/10 p-8 rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center">
                <Eye className="w-16 h-16 text-info" />
              </div>
              <h2 className="text-2xl font-semibold mb-2">Consumer Verification</h2>
              <p className="text-muted-foreground">
                See the complete, verified history of your product
              </p>
            </div>

            <div className="space-y-4">
              <Button className="w-full" size="lg" onClick={handleVerify}>
                <Camera className="w-5 h-5 mr-2" />
                Scan QR Code
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">Or</span>
                </div>
              </div>

              <div>
                <Label htmlFor="batch-id">Enter Batch ID</Label>
                <div className="flex gap-2">
                  <Input 
                    id="batch-id" 
                    placeholder="BC12345678" 
                    className="font-mono"
                  />
                  <Button onClick={handleVerify}>
                    <Scan className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t text-center text-sm text-muted-foreground">
              <p>
                This tool allows you to verify the authenticity and journey of your agricultural products.
              </p>
            </div>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Verification Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 text-success text-sm font-semibold mb-4">
            <CheckCircle className="w-5 h-5" />
            Verified & Authentic
          </div>
          <h1 className="text-4xl font-bold mb-2">Product Journey</h1>
          <p className="text-muted-foreground">Blockchain-verified supply chain</p>
        </div>

        {/* Product Summary */}
        <Card className="p-6 mb-8 bg-gradient-to-br from-success/5 to-primary/5 border-success/20">
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <div className="bg-white p-4 rounded-lg border">
              <img 
                src={`/qr-code-.jpg?height=150&width=150&query=QR+Code+${journeyData.id}`}
                alt="QR Code"
                className="w-32 h-32"
              />
            </div>
            
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-4">{journeyData.crop}</h2>
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Batch ID</p>
                  <p className="font-mono font-semibold">{journeyData.id}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Quantity</p>
                  <p className="font-semibold">{journeyData.quantity}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Farmer</p>
                  <p className="font-semibold">{journeyData.farmer}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Farm</p>
                  <p className="font-semibold">{journeyData.farmName}</p>
                </div>
                <div className="sm:col-span-2">
                  <p className="text-muted-foreground">Origin</p>
                  <p className="font-semibold">{journeyData.origin}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Harvest Date</p>
                  <p className="font-semibold">{journeyData.harvestDate}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Handlers</p>
                  <p className="font-semibold">{journeyData.chain.length} verified</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {journeyData.certifications.map((cert, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-full bg-success/10 text-success text-xs font-semibold border border-success/20">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Supply Chain Journey */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Supply Chain Journey</h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

            <div className="space-y-6">
              {journeyData.chain.map((step, idx) => (
                <Card key={idx} className="ml-16 relative">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[4.5rem] top-6 w-16 h-16 rounded-full bg-background border-4 border-primary flex items-center justify-center">
                    <div className="bg-primary/10 p-2 rounded-full">
                      {step.icon}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <span className="inline-block px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-semibold mb-2">
                          {step.handler}
                        </span>
                        <h3 className="text-lg font-bold">{step.organization}</h3>
                        <p className="text-sm text-muted-foreground">{step.name}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold">{step.date}</p>
                        <p className="text-xs text-muted-foreground">{step.time}</p>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3 text-sm">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-muted-foreground mt-0.5" />
                        <div>
                          <p className="text-muted-foreground text-xs">Location</p>
                          <p className="font-medium">{step.location}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                        <div>
                          <p className="text-muted-foreground text-xs">Condition</p>
                          <p className="font-medium text-success">{step.condition}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 pt-3 border-t">
                      <p className="text-sm"><span className="font-semibold">Action:</span> {step.action}</p>
                      {step.storage && (
                        <p className="text-sm text-muted-foreground mt-1">
                          <span className="font-semibold">Storage:</span> {step.storage}
                        </p>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <Card className="p-6 bg-muted/30">
          <h3 className="font-bold mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5 text-success" />
            Why Trust This?
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Blockchain Verified</p>
                <p className="text-muted-foreground">Each step is cryptographically secured and cannot be altered</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Multiple Handlers</p>
                <p className="text-muted-foreground">{journeyData.chain.length} independent parties verified this product</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Real-Time Tracking</p>
                <p className="text-muted-foreground">Updates added at each stage of the journey</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Certified Origin</p>
                <p className="text-muted-foreground">Traced back to the original farm and farmer</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-8">
          <Button variant="outline" className="flex-1" onClick={() => setVerified(false)}>
            Verify Another Product
          </Button>
          <Button className="flex-1 bg-success hover:bg-success/90">
            Share Journey
          </Button>
        </div>
      </div>
    </div>
  )
}
