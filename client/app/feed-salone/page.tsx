import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Sprout, Package, Factory, TrendingUp, Shield, CloudRain, Users, Target, ArrowRight } from 'lucide-react'

export default function FeedSalonePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-success via-success/95 to-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">Sierra Leone Agricultural Transformation</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Feed Salone Initiative
            </h1>
            <p className="text-lg text-white/90 mb-6 leading-relaxed">
              Comprehensive digital platform supporting Sierra Leone's agricultural transformation strategy.
              Empowering farmers with tools for seeds & inputs, processing, export readiness, food security, and climate resilience.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-success hover:bg-white/90">
                <Target className="w-5 h-5 mr-2" />
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Learn About Feed Salone
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Objectives */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Feed Salone Strategic Objectives</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            <Card className="p-4 text-center">
              <div className="text-3xl font-bold text-success mb-1">-50%</div>
              <p className="text-sm text-muted-foreground">Import Reduction</p>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-3xl font-bold text-primary mb-1">+200%</div>
              <p className="text-sm text-muted-foreground">Export Growth</p>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-3xl font-bold text-info mb-1">500K+</div>
              <p className="text-sm text-muted-foreground">Jobs Created</p>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-3xl font-bold text-secondary mb-1">Zero</div>
              <p className="text-sm text-muted-foreground">Hunger Goal</p>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-3xl font-bold text-success mb-1">100%</div>
              <p className="text-sm text-muted-foreground">Climate Ready</p>
            </Card>
            <Card className="p-4 text-center">
              <div className="text-3xl font-bold text-primary mb-1">#1</div>
              <p className="text-sm text-muted-foreground">Economic Driver</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Pillars */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Feed Salone Program Pillars</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Six integrated pillars working together to transform Sierra Leone's agricultural sector
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Seeds & Inputs System */}
            <Link href="/inputs" className="group cursor-pointer block">
              <div className="aspect-[4/3] overflow-hidden rounded-lg mb-6 shadow-md">
                <img
                  src="/feed-seeds.jpg"
                  alt="Seeds & Inputs"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Seeds & Inputs System</h3>
              <p className="text-muted-foreground mb-4">
                Access high-quality seeds, fertilizers, and agricultural inputs. Connect with certified agro-dealers and SLARI seed production programs.
              </p>
              <div className="flex items-center text-success font-medium group-hover:gap-2 transition-all">
                <span>Explore System</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>

            {/* Aggregation & Processing */}
            <Link href="/processing" className="group cursor-pointer block">
              <div className="aspect-[4/3] overflow-hidden rounded-lg mb-6 shadow-md">
                <img
                  src="/feed-processing.jpg"
                  alt="Aggregation & Processing"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Aggregation & Processing</h3>
              <p className="text-muted-foreground mb-4">
                Connect with aggregation centers and processing facilities. Improve product quality and access better markets for your produce.
              </p>
              <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                <span>View Centers</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>

            {/* Export Readiness */}
            <Link href="/feed-salone/export-readiness" className="group cursor-pointer block">
              <div className="aspect-[4/3] overflow-hidden rounded-lg mb-6 shadow-md">
                <img
                  src="/feed-export.jpg"
                  alt="Export Readiness"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Export Readiness Program</h3>
              <p className="text-muted-foreground mb-4">
                Prepare your products for international markets. Learn quality standards, certifications, and connect with export buyers.
              </p>
              <div className="flex items-center text-info font-medium group-hover:gap-2 transition-all">
                <span>Start Program</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>

            {/* Food Security Dashboard */}
            <Link href="/feed-salone/food-security">
              <Card className="p-6 hover:shadow-lg transition-all cursor-pointer group h-full">
                <div className="bg-secondary/20 p-3 rounded-lg w-fit mb-4 group-hover:bg-secondary/30 transition-colors">
                  <Shield className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Food Security Dashboard</h3>
                <p className="text-muted-foreground mb-4">
                  Track production metrics, nutrition impact, and contribution to national food security goals. Monitor import reduction progress.
                </p>
                <div className="flex items-center text-secondary font-medium group-hover:gap-2 transition-all">
                  <span>View Dashboard</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Card>
            </Link>

            {/* Climate Resilience */}
            <Link href="/climate">
              <Card className="p-6 hover:shadow-lg transition-all cursor-pointer group h-full">
                <div className="bg-success/10 p-3 rounded-lg w-fit mb-4 group-hover:bg-success/20 transition-colors">
                  <CloudRain className="w-8 h-8 text-success" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Climate Resilience Tools</h3>
                <p className="text-muted-foreground mb-4">
                  Access climate-smart agriculture practices, weather adaptation strategies, and resilient crop varieties for changing conditions.
                </p>
                <div className="flex items-center text-success font-medium group-hover:gap-2 transition-all">
                  <span>Access Tools</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Card>
            </Link>

            {/* Income Generation */}
            <Link href="/farmer-connect">
              <Card className="p-6 hover:shadow-lg transition-all cursor-pointer group h-full">
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Income Generation Programs</h3>
                <p className="text-muted-foreground mb-4">
                  Learn value addition techniques, form cooperatives, access financial literacy training, and increase farm profitability.
                </p>
                <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                  <span>Join Programs</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-success/10 p-2 rounded-full">
                  <Sprout className="w-5 h-5 text-success" />
                </div>
                <div>
                  <p className="font-semibold">Mariama Kamara</p>
                  <p className="text-sm text-muted-foreground">Rice Farmer, Bombali</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "Access to certified seeds through Feed Salone increased my rice yield by 60%. I can now feed my family and sell surplus to local markets."
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Factory className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Mohamed Sesay</p>
                  <p className="text-sm text-muted-foreground">Cassava Processor, Kenema</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "The aggregation center connected me with 50+ farmers. My processing facility now runs at full capacity, creating 20 jobs in my community."
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-info/10 p-2 rounded-full">
                  <TrendingUp className="w-5 h-5 text-info" />
                </div>
                <div>
                  <p className="font-semibold">Fatmata Koroma</p>
                  <p className="text-sm text-muted-foreground">Cocoa Exporter, Bo</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "Export readiness training helped me meet international standards. I now export cocoa to Europe, tripling my income in one year."
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-success to-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Feed Salone Movement</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Be part of Sierra Leone's agricultural transformation. Access resources, connect with markets, and build a sustainable farming future.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-white text-success hover:bg-white/90">
              Register as Farmer
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
              Partner with Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
