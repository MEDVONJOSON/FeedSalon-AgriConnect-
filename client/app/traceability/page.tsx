import { Navigation } from '@/components/navigation'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { QrCode, Package, Users, Eye, Shield, Scan, TrendingUp } from 'lucide-react'

export default function TraceabilityPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Shield className="w-4 h-4" />
            Blockchain-Powered Traceability
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Farm-to-Table Supply Chain
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Build trust through transparency. Track every step of your produce journey from harvest to consumer using QR codes and blockchain verification.
          </p>
        </div>

        {/* How It Works */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <div className="bg-success/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Package className="w-8 h-8 text-success" />
              </div>
              <h3 className="font-bold text-lg mb-2">1. Register Produce</h3>
              <p className="text-sm text-muted-foreground">
                Farmers register their harvest with details like crop type, quantity, and location
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <QrCode className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">2. Generate QR Code</h3>
              <p className="text-sm text-muted-foreground">
                System creates a unique QR code that's attached to the produce batch
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="bg-info/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-info" />
              </div>
              <h3 className="font-bold text-lg mb-2">3. Handlers Scan</h3>
              <p className="text-sm text-muted-foreground">
                Each handler scans and adds their verified link to the blockchain
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="bg-secondary/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Eye className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-bold text-lg mb-2">4. Consumer Verifies</h3>
              <p className="text-sm text-muted-foreground">
                End consumers scan to see the complete, verified journey
              </p>
            </Card>
          </div>
        </section>

        {/* Action Cards */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/traceability/register">
              <Card className="p-8 hover:shadow-lg transition-all cursor-pointer border-2 border-transparent hover:border-success h-full">
                <div className="bg-success/10 p-4 rounded-lg w-fit mb-4">
                  <Package className="w-8 h-8 text-success" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Register Produce</h3>
                <p className="text-muted-foreground mb-4">
                  Start the blockchain journey by registering your harvest
                </p>
                <Button className="w-full bg-success hover:bg-success/90">
                  Register Now
                </Button>
              </Card>
            </Link>

            <Link href="/traceability/scan">
              <Card className="p-8 hover:shadow-lg transition-all cursor-pointer border-2 border-transparent hover:border-primary h-full">
                <div className="bg-primary/10 p-4 rounded-lg w-fit mb-4">
                  <Scan className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Scan & Update</h3>
                <p className="text-muted-foreground mb-4">
                  Handlers: Add your link to the supply chain
                </p>
                <Button className="w-full">
                  Scan QR Code
                </Button>
              </Card>
            </Link>

            <Link href="/traceability/verify">
              <Card className="p-8 hover:shadow-lg transition-all cursor-pointer border-2 border-transparent hover:border-info h-full">
                <div className="bg-info/10 p-4 rounded-lg w-fit mb-4">
                  <Eye className="w-8 h-8 text-info" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Verify Product</h3>
                <p className="text-muted-foreground mb-4">
                  Consumers: See the complete verified history
                </p>
                <Button variant="outline" className="w-full">
                  Verify Now
                </Button>
              </Card>
            </Link>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Benefits of Blockchain Traceability</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6">
              <Shield className="w-8 h-8 text-success mb-3" />
              <h3 className="font-bold mb-2">Build Trust</h3>
              <p className="text-sm text-muted-foreground">
                Transparent supply chain builds consumer confidence in your produce
              </p>
            </Card>

            <Card className="p-6">
              <TrendingUp className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-bold mb-2">Premium Pricing</h3>
              <p className="text-sm text-muted-foreground">
                Verified, traceable products command higher market prices
              </p>
            </Card>

            <Card className="p-6">
              <QrCode className="w-8 h-8 text-info mb-3" />
              <h3 className="font-bold mb-2">Easy to Use</h3>
              <p className="text-sm text-muted-foreground">
                Simple QR code scanning - no complex technology needed
              </p>
            </Card>

            <Card className="p-6">
              <Shield className="w-8 h-8 text-secondary mb-3" />
              <h3 className="font-bold mb-2">Tamper-Proof</h3>
              <p className="text-sm text-muted-foreground">
                Blockchain ensures records cannot be altered or faked
              </p>
            </Card>

            <Card className="p-6">
              <Package className="w-8 h-8 text-success mb-3" />
              <h3 className="font-bold mb-2">Quality Control</h3>
              <p className="text-sm text-muted-foreground">
                Track handling conditions and identify problem points
              </p>
            </Card>

            <Card className="p-6">
              <Users className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-bold mb-2">Market Access</h3>
              <p className="text-sm text-muted-foreground">
                Meet export and premium market traceability requirements
              </p>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Tracking?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join the transparency revolution. Start building consumer trust with blockchain-verified supply chain tracking.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/traceability/register">
                <Package className="w-5 h-5 mr-2" />
                Register Your First Batch
              </Link>
            </Button>
          </Card>
        </section>
      </div>
    </div>
  )
}
