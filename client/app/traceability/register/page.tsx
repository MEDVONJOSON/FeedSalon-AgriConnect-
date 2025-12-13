'use client'

import { Navigation } from '@/components/navigation'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'
import { Package, MapPin, Calendar, Loader2 } from 'lucide-react'
import Link from 'next/link'

export default function RegisterProducePage() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [qrGenerated, setQrGenerated] = useState(false)
  const [batchId, setBatchId] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsGenerating(true)
    
    // Simulate QR generation
    setTimeout(() => {
      const id = 'BC' + Date.now().toString().slice(-8)
      setBatchId(id)
      setIsGenerating(false)
      setQrGenerated(true)
    }, 2000)
  }

  if (qrGenerated) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-12 max-w-2xl">
          <Card className="p-8 text-center">
            <div className="bg-success/10 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <Package className="w-10 h-10 text-success" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Batch Registered Successfully!</h1>
            <p className="text-muted-foreground mb-6">
              Your produce has been added to the blockchain. Here's your unique QR code:
            </p>

            {/* QR Code Display */}
            <div className="bg-white p-8 rounded-lg border-2 border-dashed border-primary/20 mb-6">
              <img 
                src={`/qr-code-.jpg?height=200&width=200&query=QR+Code+${batchId}`}
                alt="QR Code"
                className="w-48 h-48 mx-auto"
              />
              <p className="font-mono text-lg font-bold mt-4">{batchId}</p>
            </div>

            <div className="space-y-3 mb-6">
              <Button className="w-full bg-primary">
                Download QR Code
              </Button>
              <Button variant="outline" className="w-full">
                Print Labels
              </Button>
            </div>

            <div className="text-sm text-muted-foreground">
              <p className="mb-2">
                Attach this QR code to your produce. Handlers will scan it to add their verification at each step.
              </p>
            </div>

            <div className="flex gap-3 mt-6">
              <Button asChild variant="outline" className="flex-1">
                <Link href="/traceability">Back to Hub</Link>
              </Button>
              <Button asChild className="flex-1" onClick={() => setQrGenerated(false)}>
                <Link href="/traceability/register">Register Another</Link>
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
          <h1 className="text-4xl font-bold mb-2">Register Produce Batch</h1>
          <p className="text-muted-foreground">
            Create a blockchain-verified record for your harvest
          </p>
        </div>

        <Card className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Farmer Information */}
            <div>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Package className="w-5 h-5 text-primary" />
                Farmer Information
              </h2>
              <div className="grid gap-4">
                <div>
                  <Label htmlFor="farmer-name">Farmer Name *</Label>
                  <Input id="farmer-name" placeholder="John Kamara" required />
                </div>
                <div>
                  <Label htmlFor="farm-name">Farm Name</Label>
                  <Input id="farm-name" placeholder="Kamara Family Farm" />
                </div>
                <div>
                  <Label htmlFor="contact">Contact Number *</Label>
                  <Input id="contact" type="tel" placeholder="+232 XX XXX XXX" required />
                </div>
              </div>
            </div>

            {/* Produce Details */}
            <div>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Package className="w-5 h-5 text-success" />
                Produce Details
              </h2>
              <div className="grid gap-4">
                <div>
                  <Label htmlFor="crop-type">Crop Type *</Label>
                  <Input id="crop-type" placeholder="e.g., Rice, Cassava, Vegetables" required />
                </div>
                <div>
                  <Label htmlFor="variety">Variety</Label>
                  <Input id="variety" placeholder="e.g., NERICA, Local White Cassava" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="quantity">Quantity *</Label>
                    <Input id="quantity" type="number" placeholder="100" required />
                  </div>
                  <div>
                    <Label htmlFor="unit">Unit *</Label>
                    <Input id="unit" placeholder="kg, bags, boxes" required />
                  </div>
                </div>
              </div>
            </div>

            {/* Location & Date */}
            <div>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-info" />
                Location & Harvest Date
              </h2>
              <div className="grid gap-4">
                <div>
                  <Label htmlFor="location">Farm Location *</Label>
                  <Input id="location" placeholder="District, Chiefdom, Village" required />
                </div>
                <div>
                  <Label htmlFor="harvest-date">Harvest Date *</Label>
                  <Input id="harvest-date" type="date" required />
                </div>
                <div>
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea 
                    id="notes" 
                    placeholder="Organic certified, Rainfed cultivation, etc."
                    rows={3}
                  />
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Certifications (Optional)</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="organic" className="rounded border-gray-300" />
                  <Label htmlFor="organic" className="font-normal">Organic Certified</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="fairtrade" className="rounded border-gray-300" />
                  <Label htmlFor="fairtrade" className="font-normal">Fair Trade</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="gmp" className="rounded border-gray-300" />
                  <Label htmlFor="gmp" className="font-normal">GMP Compliant</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="pesticide-free" className="rounded border-gray-300" />
                  <Label htmlFor="pesticide-free" className="font-normal">Pesticide Free</Label>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex gap-3 pt-4">
              <Button type="button" variant="outline" className="flex-1" asChild>
                <Link href="/traceability">Cancel</Link>
              </Button>
              <Button type="submit" className="flex-1 bg-success hover:bg-success/90" disabled={isGenerating}>
                {isGenerating ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Generating QR Code...
                  </>
                ) : (
                  <>
                    <Package className="w-4 h-4 mr-2" />
                    Register & Generate QR
                  </>
                )}
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  )
}
