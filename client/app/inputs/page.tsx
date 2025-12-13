import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Sprout, Search, MapPin, CheckCircle, FlaskConical, Leaf, ShoppingCart, Phone, Calculator } from 'lucide-react'

export default function SeedsInputsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-success/10 py-12 border-b border-success/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="outline" className="border-success text-success bg-success/10">Pillar 1</Badge>
                <span className="text-sm font-medium text-muted-foreground">Feed Salone Strategy</span>
              </div>
              <h1 className="text-4xl font-bold mb-4 text-foreground">Seeds & Inputs System</h1>
              <p className="text-lg text-muted-foreground mb-6">
                Access high-quality, certified seeds and fertilizers to boost your farm's productivity. 
                Connect directly with authorized agro-dealers and research institutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-success hover:bg-success/90">
                  <Search className="w-4 h-4 mr-2" />
                  Find Inputs
                </Button>
                <Link href="/inputs/calculator">
                  <Button variant="outline">
                    <Calculator className="w-4 h-4 mr-2" />
                    Fertilizer Calculator
                  </Button>
                </Link>
              </div>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-sm border w-full md:w-96">
              <h3 className="font-semibold mb-4">Quick Input Search</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">Crop Type</label>
                  <select className="w-full p-2 rounded-md border bg-background">
                    <option>Select Crop...</option>
                    <option>Rice (NERICA)</option>
                    <option>Cassava</option>
                    <option>Maize</option>
                    <option>Cocoa</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-2 top-2.5 w-4 h-4 text-muted-foreground" />
                    <Input placeholder="Enter District..." className="pl-8" />
                  </div>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">Search Dealers</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certified Seed Varieties */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Certified Seed Varieties</h2>
            <Link href="#" className="text-primary hover:underline font-medium">View All Catalog</Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-40 bg-amber-100 flex items-center justify-center">
                <Sprout className="w-16 h-16 text-amber-600" />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg">NERICA Rice L-19</h3>
                  <Badge className="bg-success hover:bg-success/90">High Yield</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Early maturing variety (90-100 days). Resistant to drought and blast disease.
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold">Le 450,000 / 50kg</span>
                  <Button size="sm" variant="outline">Details</Button>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-40 bg-green-100 flex items-center justify-center">
                <Leaf className="w-16 h-16 text-green-600" />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg">SLICASS 6</h3>
                  <Badge className="bg-info hover:bg-info/90">Disease Resistant</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  High starch content cassava. Resistant to mosaic disease. Excellent for gari.
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold">Le 150,000 / bundle</span>
                  <Button size="sm" variant="outline">Details</Button>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-40 bg-yellow-100 flex items-center justify-center">
                <Sprout className="w-16 h-16 text-yellow-600" />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg">Hybrid Maize</h3>
                  <Badge className="bg-primary hover:bg-primary/90">Protein Rich</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Quality Protein Maize (QPM). Ideal for poultry feed and human consumption.
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold">Le 300,000 / 50kg</span>
                  <Button size="sm" variant="outline">Details</Button>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-40 bg-orange-100 flex items-center justify-center">
                <Leaf className="w-16 h-16 text-orange-600" />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg">Cocoa Seedlings</h3>
                  <Badge className="bg-secondary hover:bg-secondary/90">Export Grade</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  High-quality clonal seedlings. Fast growing with premium bean quality.
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold">Le 15,000 / seedling</span>
                  <Button size="sm" variant="outline">Details</Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Agro-Dealer Network */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Authorized Agro-Dealer Network</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <ShoppingCart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Bo Agricultural Supplies</h3>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    Bo District, Southern Province
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="secondary" className="text-xs">Fertilizers</Badge>
                    <Badge variant="secondary" className="text-xs">Seeds</Badge>
                    <Badge variant="secondary" className="text-xs">Tools</Badge>
                  </div>
                  <Button size="sm" className="w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    Contact Dealer
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <ShoppingCart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Makeni Farm Center</h3>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    Makeni, Northern Province
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="secondary" className="text-xs">Machinery</Badge>
                    <Badge variant="secondary" className="text-xs">Seeds</Badge>
                    <Badge variant="secondary" className="text-xs">Pesticides</Badge>
                  </div>
                  <Button size="sm" className="w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    Contact Dealer
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <ShoppingCart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Kenema Agro Hub</h3>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    Kenema, Eastern Province
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="secondary" className="text-xs">Cocoa/Coffee</Badge>
                    <Badge variant="secondary" className="text-xs">Tools</Badge>
                  </div>
                  <Button size="sm" className="w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    Contact Dealer
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Research & Development */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4 text-primary-foreground/80">
                  <FlaskConical className="w-5 h-5" />
                  <span className="font-semibold tracking-wide">POWERED BY SLARI</span>
                </div>
                <h2 className="text-3xl font-bold mb-4">Research-Backed Agriculture</h2>
                <p className="text-lg text-primary-foreground/90 mb-6">
                  Our seeds and inputs are validated by the Sierra Leone Agricultural Research Institute (SLARI). 
                  We ensure that every variety is tested for local soil conditions and climate resilience.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Soil-specific fertilizer recommendations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Climate-smart crop varieties</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Continuous field trials and improvements</span>
                  </div>
                </div>
              </div>
              <div className="flex-1 w-full">
                <Card className="bg-background text-foreground p-6">
                  <h3 className="font-bold text-xl mb-4">Request Soil Analysis</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get a detailed report of your farm's soil composition to choose the right inputs.
                  </p>
                  <div className="space-y-3">
                    <Input placeholder="Farm Location / District" />
                    <Input placeholder="Farm Size (Acres)" />
                    <Input placeholder="Phone Number" />
                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                      Schedule Visit
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
