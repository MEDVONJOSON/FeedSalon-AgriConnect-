import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Shield, TrendingDown, TrendingUp, PieChart, Map, AlertTriangle, CheckCircle2, BarChart } from 'lucide-react'

export default function FoodSecurityPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-secondary/5 py-12 border-b border-secondary/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="outline" className="border-secondary text-secondary bg-secondary/10">Strategic Goal</Badge>
                <span className="text-sm font-medium text-muted-foreground">Feed Salone Strategy</span>
              </div>
              <h1 className="text-4xl font-bold mb-4 text-foreground">Food Security Dashboard</h1>
              <p className="text-lg text-muted-foreground mb-6">
                Monitoring Sierra Leone's progress towards food self-sufficiency. 
                Track production metrics, import reduction, and nutritional outcomes in real-time.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  <BarChart className="w-4 h-4 mr-2" />
                  View Full Report
                </Button>
                <Button variant="outline">
                  <Map className="w-4 h-4 mr-2" />
                  Regional Data
                </Button>
              </div>
            </div>
            
            {/* Key KPI Card */}
            <Card className="p-6 w-full md:w-80 border-l-4 border-l-secondary shadow-md">
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Rice Self-Sufficiency</h3>
              <div className="flex items-end gap-2 mb-2">
                <span className="text-4xl font-bold text-foreground">68%</span>
                <span className="text-sm text-success font-medium mb-1 flex items-center">
                  <TrendingUp className="w-3 h-3 mr-1" /> +12%
                </span>
              </div>
              <Progress value={68} className="h-2 mb-2" />
              <p className="text-xs text-muted-foreground">Target: 100% by 2028</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Metrics Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">National Performance Indicators</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-destructive/10 p-2 rounded-lg">
                  <TrendingDown className="w-6 h-6 text-destructive" />
                </div>
                <Badge variant="outline" className="text-destructive border-destructive">On Track</Badge>
              </div>
              <h3 className="text-sm font-medium text-muted-foreground">Rice Imports</h3>
              <div className="text-2xl font-bold mt-1 mb-2">$180M</div>
              <p className="text-xs text-muted-foreground">
                Reduced by 15% compared to last year (YoY)
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-success/10 p-2 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-success" />
                </div>
                <Badge variant="outline" className="text-success border-success">Exceeding</Badge>
              </div>
              <h3 className="text-sm font-medium text-muted-foreground">Local Production</h3>
              <div className="text-2xl font-bold mt-1 mb-2">1.2M Tons</div>
              <p className="text-xs text-muted-foreground">
                Total grain production across all districts
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <PieChart className="w-6 h-6 text-primary" />
                </div>
                <Badge variant="outline" className="text-primary border-primary">Stable</Badge>
              </div>
              <h3 className="text-sm font-medium text-muted-foreground">Food Inflation</h3>
              <div className="text-2xl font-bold mt-1 mb-2">12.4%</div>
              <p className="text-xs text-muted-foreground">
                Stabilizing after recent market interventions
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-info/10 p-2 rounded-lg">
                  <Shield className="w-6 h-6 text-info" />
                </div>
                <Badge variant="outline" className="text-info border-info">Improving</Badge>
              </div>
              <h3 className="text-sm font-medium text-muted-foreground">Strategic Reserves</h3>
              <div className="text-2xl font-bold mt-1 mb-2">45 Days</div>
              <p className="text-xs text-muted-foreground">
                National grain buffer stock coverage
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Regional Analysis */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Regional Food Security Status</h2>
            <div className="flex gap-2">
              <Badge variant="outline" className="bg-success/10 text-success border-success">Surplus</Badge>
              <Badge variant="outline" className="bg-warning/10 text-warning border-warning">Balanced</Badge>
              <Badge variant="outline" className="bg-destructive/10 text-destructive border-destructive">Deficit</Badge>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Map Placeholder */}
            <Card className="p-6 min-h-[400px] flex items-center justify-center bg-card border-2 border-dashed">
              <div className="text-center">
                <Map className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
                <h3 className="font-semibold text-lg">Interactive Food Security Map</h3>
                <p className="text-muted-foreground max-w-xs mx-auto mt-2">
                  Visualizing production surplus and deficit areas across Sierra Leone's 16 districts.
                </p>
                <Button variant="outline" className="mt-4">Load Map Data</Button>
              </div>
            </Card>

            {/* District List */}
            <div className="space-y-4">
              <Card className="p-4 flex items-center justify-between border-l-4 border-l-success">
                <div>
                  <h4 className="font-bold">Bombali District</h4>
                  <p className="text-xs text-muted-foreground">Major Rice Hub</p>
                </div>
                <div className="text-right">
                  <div className="font-bold text-success">Surplus</div>
                  <p className="text-xs text-muted-foreground">+15,000 Tons</p>
                </div>
              </Card>

              <Card className="p-4 flex items-center justify-between border-l-4 border-l-success">
                <div>
                  <h4 className="font-bold">Kambia District</h4>
                  <p className="text-xs text-muted-foreground">Rice & Cassava</p>
                </div>
                <div className="text-right">
                  <div className="font-bold text-success">Surplus</div>
                  <p className="text-xs text-muted-foreground">+12,500 Tons</p>
                </div>
              </Card>

              <Card className="p-4 flex items-center justify-between border-l-4 border-l-warning">
                <div>
                  <h4 className="font-bold">Bo District</h4>
                  <p className="text-xs text-muted-foreground">Mixed Cropping</p>
                </div>
                <div className="text-right">
                  <div className="font-bold text-warning">Balanced</div>
                  <p className="text-xs text-muted-foreground">Stable Supply</p>
                </div>
              </Card>

              <Card className="p-4 flex items-center justify-between border-l-4 border-l-destructive">
                <div>
                  <h4 className="font-bold">Western Area Urban</h4>
                  <p className="text-xs text-muted-foreground">Consumption Center</p>
                </div>
                <div className="text-right">
                  <div className="font-bold text-destructive">Deficit</div>
                  <p className="text-xs text-muted-foreground">High Import Need</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Nutrition & Alerts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Nutrition Monitoring</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Card className="p-5">
                  <h3 className="font-semibold mb-2">Dietary Diversity Score</h3>
                  <div className="flex items-end gap-2">
                    <span className="text-3xl font-bold">4.2</span>
                    <span className="text-sm text-muted-foreground mb-1">/ 10</span>
                  </div>
                  <Progress value={42} className="h-2 mt-2 mb-2" />
                  <p className="text-xs text-muted-foreground">Improving (Prev: 3.8)</p>
                </Card>
                <Card className="p-5">
                  <h3 className="font-semibold mb-2">School Feeding Reach</h3>
                  <div className="flex items-end gap-2">
                    <span className="text-3xl font-bold">450k</span>
                    <span className="text-sm text-muted-foreground mb-1">Students</span>
                  </div>
                  <Progress value={75} className="h-2 mt-2 mb-2" />
                  <p className="text-xs text-muted-foreground">Target: 600k Students</p>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Early Warning System</h2>
              <Card className="p-0 overflow-hidden border-destructive/50">
                <div className="bg-destructive/10 p-3 border-b border-destructive/20 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                  <span className="font-semibold text-destructive">Active Alerts</span>
                </div>
                <div className="divide-y">
                  <div className="p-4 hover:bg-muted/50 transition-colors">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-sm">Armyworm Outbreak</span>
                      <span className="text-xs text-muted-foreground">2 days ago</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Reported in Moyamba District. Rapid response team deployed.</p>
                  </div>
                  <div className="p-4 hover:bg-muted/50 transition-colors">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-sm">Flash Flood Risk</span>
                      <span className="text-xs text-muted-foreground">5 hours ago</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Heavy rains expected in Southern Province. Farmers advised to secure storage.</p>
                  </div>
                </div>
                <div className="p-3 bg-muted/30 text-center">
                  <Button variant="link" size="sm" className="text-destructive h-auto p-0">View All Alerts</Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
