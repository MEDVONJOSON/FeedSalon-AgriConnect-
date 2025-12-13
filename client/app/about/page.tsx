import { Navigation } from '@/components/navigation'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, Bug, Droplets, BarChart3, Globe, Users, Sprout } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="bg-gradient-to-br from-success via-success/90 to-success/70 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-balance">About AgriPredict</h1>
          <p className="text-xl max-w-3xl mx-auto text-balance leading-relaxed">
            Empowering farmers with cutting-edge AI technology for smarter, more sustainable agriculture.
          </p>
        </div>
      </div>

      <div className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  To revolutionize agriculture through artificial intelligence, making farming more productive, sustainable, and profitable for farmers worldwide.
                </p>
                <p>
                  We believe that technology can solve the world's greatest agricultural challenges. Our platform combines machine learning, big data analytics, and agricultural expertise to provide farmers with actionable insights that drive better crop outcomes.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <Card className="p-6 text-center bg-success/5">
                  <p className="text-4xl font-bold text-success mb-2">10K+</p>
                  <p className="text-muted-foreground">Happy Farmers</p>
                </Card>
                <Card className="p-6 text-center bg-info/5">
                  <p className="text-4xl font-bold text-info mb-2">95%</p>
                  <p className="text-muted-foreground">Accuracy Rate</p>
                </Card>
                <Card className="p-6 text-center bg-warning/5">
                  <p className="text-4xl font-bold text-warning mb-2">50+</p>
                  <p className="text-muted-foreground">Crop Types</p>
                </Card>
                <Card className="p-6 text-center bg-accent/5">
                  <p className="text-4xl font-bold text-accent mb-2">24/7</p>
                  <p className="text-muted-foreground">Support</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3">What We Offer</h2>
              <p className="text-muted-foreground">Comprehensive agricultural intelligence solutions</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-success/10 p-3 rounded-lg">
                    <TrendingUp className="w-8 h-8 text-success" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Yield Prediction</h3>
                    <p className="text-muted-foreground">
                      Advanced machine learning models predict crop yields with 95% accuracy, helping farmers plan better and maximize profits.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-destructive/10 p-3 rounded-lg">
                    <Bug className="w-8 h-8 text-destructive" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Disease Detection</h3>
                    <p className="text-muted-foreground">
                      Early warning system for crop diseases based on environmental conditions, preventing significant crop losses.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-info/10 p-3 rounded-lg">
                    <Droplets className="w-8 h-8 text-info" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Water Management</h3>
                    <p className="text-muted-foreground">
                      Smart irrigation recommendations based on soil moisture, weather forecasts, and crop requirements.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-warning/10 p-3 rounded-lg">
                    <BarChart3 className="w-8 h-8 text-warning" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Market Analysis</h3>
                    <p className="text-muted-foreground">
                      Real-time market price trends and demand forecasting to help farmers make informed selling decisions.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3">Our Technology</h2>
              <p className="text-muted-foreground">Built with cutting-edge tools and frameworks</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 text-center bg-info/5">
                  <div className="text-info font-semibold">Python & Scikit-learn</div>
                </Card>
                <Card className="p-4 text-center bg-success/5">
                  <div className="text-success font-semibold">Big Data Analytics</div>
                </Card>
                <Card className="p-4 text-center bg-warning/5">
                  <div className="text-warning font-semibold">Machine Learning</div>
                </Card>
                <Card className="p-4 text-center bg-accent/5">
                  <div className="text-accent font-semibold">Cloud Computing</div>
                </Card>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <Card className="p-6 text-center bg-success/5">
                  <p className="text-3xl font-bold text-success mb-2">50+</p>
                  <p className="text-sm text-muted-foreground">Crop Varieties</p>
                </Card>
                <Card className="p-6 text-center bg-info/5">
                  <p className="text-3xl font-bold text-info mb-2">10+</p>
                  <p className="text-sm text-muted-foreground">Years of Data</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3">Our Impact</h2>
              <p className="text-muted-foreground">Making a difference in agricultural communities worldwide</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="bg-success/10 p-4 rounded-full w-fit mx-auto mb-4">
                  <Sprout className="w-12 h-12 text-success" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Sustainable Farming</h3>
                <p className="text-muted-foreground text-sm">
                  Promoting eco-friendly agricultural practices through optimized resource usage and reduced chemical dependency.
                </p>
              </Card>

              <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="bg-info/10 p-4 rounded-full w-fit mx-auto mb-4">
                  <Users className="w-12 h-12 text-info" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Farmer Empowerment</h3>
                <p className="text-muted-foreground text-sm">
                  Providing smallholder farmers with access to advanced agricultural intelligence and expert guidance.
                </p>
              </Card>

              <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="bg-warning/10 p-4 rounded-full w-fit mx-auto mb-4">
                  <Globe className="w-12 h-12 text-warning" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Food Security</h3>
                <p className="text-muted-foreground text-sm">
                  Contributing to global food security by helping farmers increase yields and reduce crop losses.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
