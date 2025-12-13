'use client'

import { Navigation } from '@/components/navigation'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'
import { Scan, Camera, Package, MapPin, Clock, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function ScanUpdatePage() {
  const [scanned, setScanned] = useState(false)
  const [updated, setUpdated] = useState(false)
  const [batchData, setBatchData] = useState({
    id: 'BC12345678',
    crop: 'Rice (NERICA)',
    quantity: '500 kg',
    farmer: 'John Kamara',
    origin: 'Bo District, Sierra Leone',
    harvestDate: '2025-01-10',
    currentHandlers: 2
  })

  const handleScan = () => {
    // Simulate QR scan
    setScanned(true)
  }

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault()
    setUpdated(true)
  }

  if (updated) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-12 max-w-2xl">
          <Card className="p-8 text-center">
            <div className="bg-success/10 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-success" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Chain Updated Successfully!</h1>
            <p className="text-muted-foreground mb-6">
              Your verification has been added to the blockchain. The supply chain now has {batchData.currentHandlers + 1} verified handlers.
            </p>

            <div className="bg-muted/50 p-6 rounded-lg mb-6">
              <p className="text-sm text-muted-foreground mb-2">Batch ID</p>
              <p className="font-mono text-xl font-bold mb-4">{batchData.id}</p>
              <p className="text-sm text-muted-foreground">
                Block added at: {new Date().toLocaleString()}
              </p>
            </div>

            <div className="flex gap-3">
              <Button asChild variant="outline" className="flex-1">
                <Link href="/traceability">Back to Hub</Link>
              </Button>
              <Button className="flex-1" onClick={() => { setScanned(false); setUpdated(false); }}>
                Scan Another
              </Button>
            </div>
          </Card>
        </div>
      </div>
    )
  }

  if (!scanned) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <div className="container mx-auto px-4 py-12 max-w-2xl">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold mb-2">Scan QR Code</h1>
            <p className="text-muted-foreground">
              Add your link to the supply chain
            </p>
          </div>

          <Card className="p-8">
            <div className="text-center mb-6">
              <div className="bg-primary/10 p-8 rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center">
                <Scan className="w-16 h-16 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold mb-2">Ready to Scan</h2>
              <p className="text-muted-foreground">
                Point your camera at the QR code or enter the batch ID manually
              </p>
            </div>

            <div className="space-y-4">
              <Button className="w-full" size="lg" onClick={handleScan}>
                <Camera className="w-5 h-5 mr-2" />
                Open Camera to Scan
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
                <Label htmlFor="batch-id">Enter Batch ID Manually</Label>
                <div className="flex gap-2">
                  <Input 
                    id="batch-id" 
                    placeholder="BC12345678" 
                    className="font-mono"
                  />
                  <Button onClick={handleScan}>
                    <Scan className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t">
              <Button variant="outline" className="w-full" asChild>
                <Link href="/traceability">Back to Hub</Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12 max-w-2xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Add Your Verification</h1>
          <p className="text-muted-foreground">
            Update the blockchain with your handling information
          </p>
        </div>

        {/* Batch Info */}
        <Card className="p-6 mb-6 bg-muted/30">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <Package className="w-5 h-5 text-primary" />
            Batch Information
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">Batch ID</p>
              <p className="font-mono font-semibold">{batchData.id}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Crop</p>
              <p className="font-semibold">{batchData.crop}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Quantity</p>
              <p className="font-semibold">{batchData.quantity}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Harvest Date</p>
              <p className="font-semibold">{batchData.harvestDate}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Origin</p>
              <p className="font-semibold">{batchData.origin}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Chain Links</p>
              <p className="font-semibold">{batchData.currentHandlers} handlers</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <form onSubmit={handleUpdate} className="space-y-6">
            {/* Handler Type */}
            <div>
              <Label htmlFor="handler-type">Handler Type *</Label>
              <select 
                id="handler-type" 
                className="w-full p-2 border rounded-md bg-background"
                required
              >
                <option value="">Select your role...</option>
                <option value="aggregator">Aggregator</option>
                <option value="processor">Processor</option>
                <option value="transporter">Transporter</option>
                <option value="wholesaler">Wholesaler</option>
                <option value="retailer">Retailer</option>
              </select>
            </div>

            {/* Business Info */}
            <div>
              <Label htmlFor="business-name">Business/Organization Name *</Label>
              <Input id="business-name" placeholder="e.g., Bo District Aggregation Center" required />
            </div>

            <div>
              <Label htmlFor="contact-person">Contact Person *</Label>
              <Input id="contact-person" placeholder="Full name" required />
            </div>

            <div>
              <Label htmlFor="contact-number">Contact Number *</Label>
              <Input id="contact-number" type="tel" placeholder="+232 XX XXX XXX" required />
            </div>

            {/* Location */}
            <div>
              <Label htmlFor="current-location">Current Location *</Label>
              <Input id="current-location" placeholder="City, District" required />
            </div>

            {/* Handling Details */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="received-date">Date Received *</Label>
                <Input id="received-date" type="date" required />
              </div>
              <div>
                <Label htmlFor="condition">Condition *</Label>
                <select 
                  id="condition" 
                  className="w-full p-2 border rounded-md bg-background"
                  required
                >
                  <option value="excellent">Excellent</option>
                  <option value="good">Good</option>
                  <option value="fair">Fair</option>
                  <option value="poor">Poor</option>
                </select>
              </div>
            </div>

            {/* Actions Taken */}
            <div>
              <Label htmlFor="actions">Actions Taken</Label>
              <Textarea 
                id="actions" 
                placeholder="e.g., Cleaned, sorted, stored in cool facility, quality tested..."
                rows={3}
              />
            </div>

            {/* Temperature/Storage */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="storage-temp">Storage Temperature (°C)</Label>
                <Input id="storage-temp" type="number" placeholder="25" />
              </div>
              <div>
                <Label htmlFor="storage-conditions">Storage Type</Label>
                <select 
                  id="storage-conditions" 
                  className="w-full p-2 border rounded-md bg-background"
                >
                  <option value="">Select...</option>
                  <option value="ambient">Ambient</option>
                  <option value="refrigerated">Refrigerated</option>
                  <option value="cold-chain">Cold Chain</option>
                  <option value="warehouse">Warehouse</option>
                </select>
              </div>
            </div>

            {/* Submit */}
            <div className="flex gap-3 pt-4">
              <Button type="button" variant="outline" className="flex-1" onClick={() => setScanned(false)}>
                Cancel
              </Button>
              <Button type="submit" className="flex-1 bg-primary">
                <CheckCircle className="w-4 h-4 mr-2" />
                Add to Blockchain
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  )
}
