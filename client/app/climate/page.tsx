import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CloudRain, Sun, Droplets, Sprout, Wind, Thermometer, Calendar, BookOpen } from 'lucide-react'

export default function ClimateResiliencePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-primary/5 py-12 border-b border-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="outline" className="border-primary/50 text-primary bg-primary/10">Sustainability</Badge>
              <span className="text-sm font-medium text-muted-foreground">Feed Salone Strategy</span>
            </div>
            <h1 className="text-4xl font-bold mb-4 text-foreground">Climate Resilience Tools</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Adapt to changing weather patterns with climate-smart agriculture.
              Access tools for water management, soil conservation, and resilient farming practices.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/climate/forecast">
                <Button className="bg-primary hover:bg-primary/90">
                  <CloudRain className="w-4 h-4 mr-2" />
                  Weather Forecast
                </Button>
              </Link>
              <Button variant="outline">
                <BookOpen className="w-4 h-4 mr-2" />
                Best Practices Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Current Conditions */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Agro-Climatic Conditions</h2>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="p-6 bg-secondary/5 dark:bg-secondary/10 border-secondary/20">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-secondary">Rainfall</h3>
                <CloudRain className="w-5 h-5 text-secondary/80" />
              </div>
              <div className="text-3xl font-bold mb-1">120mm</div>
              <p className="text-xs text-muted-foreground">Last 30 days (Above Average)</p>
            </Card>

            <Card className="p-6 bg-amber-50 dark:bg-amber-950/20 border-amber-100 dark:border-amber-900">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-amber-700 dark:text-amber-400">Temperature</h3>
                <Thermometer className="w-5 h-5 text-amber-500" />
              </div>
              <div className="text-3xl font-bold mb-1">28°C</div>
              <p className="text-xs text-muted-foreground">Daily Average (Normal)</p>
            </Card>

            <Card className="p-6 bg-secondary/5 dark:bg-secondary/10 border-secondary/20">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-secondary">Humidity</h3>
                <Droplets className="w-5 h-5 text-secondary/80" />
              </div>
              <div className="text-3xl font-bold mb-1">75%</div>
              <p className="text-xs text-muted-foreground">High Moisture Levels</p>
            </Card>

            <Card className="p-6 bg-muted border-border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-foreground">Wind Speed</h3>
                <Wind className="w-5 h-5 text-muted-foreground" />
              </div>
              <div className="text-3xl font-bold mb-1">12 km/h</div>
              <p className="text-xs text-muted-foreground">Moderate Breeze</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Climate-Smart Practices */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Climate-Smart Agriculture (CSA)</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-all">
              <div className="h-48 bg-primary/10 flex items-center justify-center">
                <Sprout className="w-16 h-16 text-primary" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">Conservation Agriculture</h3>
                <p className="text-muted-foreground mb-4">
                  Techniques to minimize soil disturbance, maintain soil cover, and diversify crop species.
                </p>
                <ul className="space-y-2 text-sm mb-4">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Zero Tillage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Mulching</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Crop Rotation</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Learn More</Button>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-all">
              <div className="h-48 bg-secondary/10 flex items-center justify-center">
                <Droplets className="w-16 h-16 text-secondary" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">Water Management</h3>
                <p className="text-muted-foreground mb-4">
                  Efficient water use strategies to cope with irregular rainfall and dry spells.
                </p>
                <ul className="space-y-2 text-sm mb-4">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Rainwater Harvesting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Drip Irrigation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Zai Pits</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Learn More</Button>
              </div>
            </Card>

            <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-all">
              <div className="h-48 bg-warning/10 flex items-center justify-center">
                <Sun className="w-16 h-16 text-warning" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">Agroforestry</h3>
                <p className="text-muted-foreground mb-4">
                  Integrating trees with crops to improve microclimate and soil fertility.
                </p>
                <ul className="space-y-2 text-sm mb-4">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Alley Cropping</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Shade Trees (Cocoa/Coffee)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>Windbreaks</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Learn More</Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Seasonal Calendar */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="w-8 h-8 text-primary" />
            <h2 className="text-2xl font-bold">Adaptive Planting Calendar</h2>
          </div>

          <Card className="p-6">
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">Rice (Swamp)</h3>
                  <Badge>Planting Season</Badge>
                </div>
                <div className="h-4 bg-muted rounded-full overflow-hidden relative">
                  <div className="absolute left-[33%] w-[25%] h-full bg-primary/50 rounded-full" title="Optimal Planting Window"></div>
                  <div className="absolute left-[40%] w-1 h-full bg-primary z-10"></div> {/* Current Time Indicator */}
                </div>
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>Jan</span>
                  <span>May</span>
                  <span>Sep</span>
                  <span>Dec</span>
                </div>
                <p className="text-sm mt-2 text-muted-foreground">
                  <span className="font-medium text-foreground">Recommendation:</span> Start nursery preparation now. Transplanting expected in late June due to delayed rains.
                </p>
              </div>

              <div className="border-t pt-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">Cassava</h3>
                  <Badge variant="secondary">Harvesting Season</Badge>
                </div>
                <div className="h-4 bg-muted rounded-full overflow-hidden relative">
                  <div className="absolute left-[0%] w-[100%] h-full bg-secondary/30 rounded-full" title="Year-round"></div>
                  <div className="absolute left-[40%] w-1 h-full bg-primary z-10"></div>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>Jan</span>
                  <span>May</span>
                  <span>Sep</span>
                  <span>Dec</span>
                </div>
                <p className="text-sm mt-2 text-muted-foreground">
                  <span className="font-medium text-foreground">Recommendation:</span> Ideal time for harvesting. Ensure proper drying if processing into chips.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
