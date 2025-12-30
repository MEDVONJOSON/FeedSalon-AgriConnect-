import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Factory, MapPin, Truck, PackageCheck, Scale, Clock, Calendar, Search } from 'lucide-react'

export default function AggregationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-primary/5 py-12 border-b border-primary/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="outline" className="border-primary text-primary bg-primary/10">Pillar 3</Badge>
                <span className="text-sm font-medium text-muted-foreground">Feed Salone Strategy</span>
              </div>
              <h1 className="text-4xl font-bold mb-4 text-foreground">Aggregation & Processing</h1>
              <p className="text-lg text-muted-foreground mb-6">
                Connect with certified aggregation centers and processing facilities.
                Reduce post-harvest losses and add value to your produce for better market prices.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-primary hover:bg-primary/90">
                  <Search className="w-4 h-4 mr-2" />
                  Find Facilities
                </Button>
                <Button variant="outline">
                  <Truck className="w-4 h-4 mr-2" />
                  Logistics Support
                </Button>
              </div>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-sm border w-full md:w-96">
              <h3 className="font-semibold mb-4">Locate Center</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">Service Type</label>
                  <select className="w-full p-2 rounded-md border bg-background">
                    <option>Select Service...</option>
                    <option>Rice Milling</option>
                    <option>Cassava Processing</option>
                    <option>Cold Storage</option>
                    <option>Grain Drying</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">District</label>
                  <div className="relative">
                    <MapPin className="absolute left-2 top-2.5 w-4 h-4 text-muted-foreground" />
                    <Input placeholder="Enter District..." className="pl-8" />
                  </div>
                </div>
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Search Map</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Processing Facilities */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Featured Processing Hubs</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="overflow-hidden flex flex-col">
              <div className="h-48 bg-muted flex items-center justify-center relative">
                <Factory className="w-16 h-16 text-muted-foreground/50" />
                <Badge className="absolute top-4 right-4 bg-success">Operational</Badge>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-4">
                  <h3 className="font-bold text-xl mb-1">Torma Bum Rice Mill</h3>
                  <p className="text-sm text-muted-foreground flex items-center">
                    <MapPin className="w-3 h-3 mr-1" /> Bonthe District
                  </p>
                </div>
                <div className="space-y-2 mb-6 flex-1">
                  <div className="flex items-center text-sm">
                    <Scale className="w-4 h-4 mr-2 text-primary" />
                    <span>Capacity: 50 tons/day</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <PackageCheck className="w-4 h-4 mr-2 text-primary" />
                    <span>Services: Milling, Polishing, Bagging</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Clock className="w-4 h-4 mr-2 text-primary" />
                    <span>Open: Mon - Sat, 8AM - 6PM</span>
                  </div>
                </div>
                <Button className="w-full">Book Slot</Button>
              </div>
            </Card>

            <Card className="overflow-hidden flex flex-col">
              <div className="h-48 bg-muted flex items-center justify-center relative">
                <Factory className="w-16 h-16 text-muted-foreground/50" />
                <Badge className="absolute top-4 right-4 bg-success">Operational</Badge>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-4">
                  <h3 className="font-bold text-xl mb-1">Bo Cassava Factory</h3>
                  <p className="text-sm text-muted-foreground flex items-center">
                    <MapPin className="w-3 h-3 mr-1" /> Bo District
                  </p>
                </div>
                <div className="space-y-2 mb-6 flex-1">
                  <div className="flex items-center text-sm">
                    <Scale className="w-4 h-4 mr-2 text-primary" />
                    <span>Capacity: 20 tons/day</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <PackageCheck className="w-4 h-4 mr-2 text-primary" />
                    <span>Services: Grating, Pressing, Drying (Gari)</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Clock className="w-4 h-4 mr-2 text-primary" />
                    <span>Open: Mon - Fri, 7AM - 5PM</span>
                  </div>
                </div>
                <Button className="w-full">Book Slot</Button>
              </div>
            </Card>

            <Card className="overflow-hidden flex flex-col">
              <div className="h-48 bg-muted flex items-center justify-center relative">
                <Factory className="w-16 h-16 text-muted-foreground/50" />
                <Badge className="absolute top-4 right-4 bg-warning text-warning-foreground">Maintenance</Badge>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-4">
                  <h3 className="font-bold text-xl mb-1">Kambia Grain Store</h3>
                  <p className="text-sm text-muted-foreground flex items-center">
                    <MapPin className="w-3 h-3 mr-1" /> Kambia District
                  </p>
                </div>
                <div className="space-y-2 mb-6 flex-1">
                  <div className="flex items-center text-sm">
                    <Scale className="w-4 h-4 mr-2 text-primary" />
                    <span>Capacity: 1000 tons</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <PackageCheck className="w-4 h-4 mr-2 text-primary" />
                    <span>Services: Drying, Storage, Fumigation</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Clock className="w-4 h-4 mr-2 text-primary" />
                    <span>Reopening: Next Week</span>
                  </div>
                </div>
                <Button className="w-full" disabled>Unavailable</Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Value Chain Services */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Integrated Value Chain Services</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Logistics</h3>
              <p className="text-sm text-muted-foreground">
                Book trucks for transporting produce from farm to aggregation centers.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <PackageCheck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Quality Control</h3>
              <p className="text-sm text-muted-foreground">
                Get your produce graded and certified for premium markets.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Scale className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Standardization</h3>
              <p className="text-sm text-muted-foreground">
                Access standard weights and measures to ensure fair trade.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Contract Farming</h3>
              <p className="text-sm text-muted-foreground">
                Secure agreements with processors before harvest season.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Own a Processing Facility?</h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Register your facility on the Feed Salone platform to connect with thousands of farmers and increase your utilization rates.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Register Facility
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
