import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Globe, TrendingUp, Award, FileCheck, Ship, BarChart3, ArrowRight, CheckCircle } from 'lucide-react'

export default function ExportReadinessPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-info/5 py-12 border-b border-info/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="outline" className="border-info text-info bg-info/10">Pillar 4</Badge>
              <span className="text-sm font-medium text-muted-foreground">Feed Salone Strategy</span>
            </div>
            <h1 className="text-4xl font-bold mb-4 text-foreground">Export Readiness Program</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Unlock international markets for your agricultural products. 
              Get certified, understand global standards, and connect with international buyers to boost Sierra Leone's export earnings.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-info hover:bg-info/90">
                <Award className="w-4 h-4 mr-2" />
                Get Certified
              </Button>
              <Button variant="outline">
                <Globe className="w-4 h-4 mr-2" />
                Market Intelligence
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Export Commodities */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Priority Export Commodities</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 border-l-4 border-l-amber-600 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-xl">Cocoa</h3>
                <Badge variant="outline">High Demand</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Premium organic cocoa beans for European and American chocolate markets.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm">
                  <TrendingUp className="w-4 h-4 mr-2 text-success" />
                  <span>Price: $2,400 / ton (FOB)</span>
                </div>
                <div className="flex items-center text-sm">
                  <FileCheck className="w-4 h-4 mr-2 text-info" />
                  <span>Req: Organic, Fair Trade</span>
                </div>
              </div>
              <Button variant="outline" className="w-full">View Export Guide</Button>
            </Card>

            <Card className="p-6 border-l-4 border-l-orange-600 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-xl">Cashew</h3>
                <Badge variant="outline">Growing Market</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Raw cashew nuts and processed kernels for Asian and Western markets.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm">
                  <TrendingUp className="w-4 h-4 mr-2 text-success" />
                  <span>Price: $1,200 / ton (RCN)</span>
                </div>
                <div className="flex items-center text-sm">
                  <FileCheck className="w-4 h-4 mr-2 text-info" />
                  <span>Req: Moisture &lt; 10%</span>
                </div>
              </div>
              <Button variant="outline" className="w-full">View Export Guide</Button>
            </Card>

            <Card className="p-6 border-l-4 border-l-yellow-600 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-xl">Coffee</h3>
                <Badge variant="outline">Niche Market</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Robusta coffee beans with unique flavor profiles for specialty roasters.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm">
                  <TrendingUp className="w-4 h-4 mr-2 text-success" />
                  <span>Price: $1,800 / ton</span>
                </div>
                <div className="flex items-center text-sm">
                  <FileCheck className="w-4 h-4 mr-2 text-info" />
                  <span>Req: Grade 1 & 2</span>
                </div>
              </div>
              <Button variant="outline" className="w-full">View Export Guide</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Export Steps */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-12 text-center">Your Path to Export Success</h2>
          
          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-muted-foreground/20 -translate-y-1/2 z-0"></div>

            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              <div className="bg-background p-6 rounded-xl shadow-sm border text-center">
                <div className="w-12 h-12 bg-info/10 rounded-full flex items-center justify-center mx-auto mb-4 text-info font-bold text-xl">1</div>
                <h3 className="font-bold mb-2">Registration</h3>
                <p className="text-sm text-muted-foreground">
                  Register with SLEEPA (Sierra Leone Export Promotion Agency).
                </p>
              </div>

              <div className="bg-background p-6 rounded-xl shadow-sm border text-center">
                <div className="w-12 h-12 bg-info/10 rounded-full flex items-center justify-center mx-auto mb-4 text-info font-bold text-xl">2</div>
                <h3 className="font-bold mb-2">Quality Cert</h3>
                <p className="text-sm text-muted-foreground">
                  Obtain phytosanitary and quality certificates for your produce.
                </p>
              </div>

              <div className="bg-background p-6 rounded-xl shadow-sm border text-center">
                <div className="w-12 h-12 bg-info/10 rounded-full flex items-center justify-center mx-auto mb-4 text-info font-bold text-xl">3</div>
                <h3 className="font-bold mb-2">Buyer Match</h3>
                <p className="text-sm text-muted-foreground">
                  Connect with verified international buyers through our portal.
                </p>
              </div>

              <div className="bg-background p-6 rounded-xl shadow-sm border text-center">
                <div className="w-12 h-12 bg-info/10 rounded-full flex items-center justify-center mx-auto mb-4 text-info font-bold text-xl">4</div>
                <h3 className="font-bold mb-2">Logistics</h3>
                <p className="text-sm text-muted-foreground">
                  Arrange shipping and customs clearance for your cargo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Intelligence Dashboard Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">Global Market Intelligence</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Stay ahead of the curve with real-time data on international commodity prices, demand trends, and trade regulations.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                  <div>
                    <span className="font-semibold block">Live Price Tracking</span>
                    <span className="text-sm text-muted-foreground">Daily updates from London and New York exchanges.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                  <div>
                    <span className="font-semibold block">Buyer Requirements</span>
                    <span className="text-sm text-muted-foreground">Detailed specs for EU, US, and Asian markets.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5" />
                  <div>
                    <span className="font-semibold block">Trade Alerts</span>
                    <span className="text-sm text-muted-foreground">Notifications on tariff changes and new opportunities.</span>
                  </div>
                </li>
              </ul>
              <Button size="lg" className="bg-primary text-primary-foreground">
                Access Full Dashboard <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="flex-1 w-full">
              <Card className="p-6 bg-card shadow-lg border-muted">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold">Cocoa Price Trend (USD/Ton)</h3>
                  <Badge variant="outline" className="text-success border-success">+5.2%</Badge>
                </div>
                <div className="h-64 flex items-end justify-between gap-2 px-2">
                  {[40, 45, 35, 50, 55, 60, 58, 65, 70, 68, 75, 80].map((h, i) => (
                    <div key={i} className="w-full bg-info/20 hover:bg-info/40 transition-colors rounded-t-sm relative group" style={{ height: `${h}%` }}>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-popover text-popover-foreground text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                        ${2000 + (h * 10)}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>Jan</span>
                  <span>Jun</span>
                  <span>Dec</span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
