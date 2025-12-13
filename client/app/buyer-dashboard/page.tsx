'use client'

import { Navigation } from '@/components/navigation'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ShoppingCart, Heart, Package, TrendingUp, Search, Star, MapPin, Phone, Mail, Filter, Bell, User, Settings, Clock, CheckCircle2, XCircle, Truck, Sprout, CloudRain, BarChart3, ShieldCheck, Factory, Globe, GraduationCap, MessageSquare, DollarSign, ClipboardList, ArrowRight } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { useEffect, useState } from 'react'
import { auth, User as AuthUser } from '@/lib/auth'

export default function BuyerDashboard() {
  const [user, setUser] = useState<AuthUser | null>(null)

  useEffect(() => {
    setUser(auth.getUser())
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome back, {user ? user.name : 'Buyer'}!</h1>
              <p className="text-muted-foreground">Manage your purchases and discover quality agricultural products</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Bell className="w-4 h-4 mr-2" />
                Notifications
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 bg-gradient-to-br from-info/10 to-info/5 border-info/20">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-info/10 p-3 rounded-lg">
                <ShoppingCart className="w-6 h-6 text-info" />
              </div>
              <Badge className="bg-info text-info-foreground">Active</Badge>
            </div>
            <h3 className="text-2xl font-bold mb-1">12</h3>
            <p className="text-sm text-muted-foreground">Active Orders</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-success/10 to-success/5 border-success/20">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-success/10 p-3 rounded-lg">
                <Package className="w-6 h-6 text-success" />
              </div>
              <Badge className="bg-success text-success-foreground">Complete</Badge>
            </div>
            <h3 className="text-2xl font-bold mb-1">45</h3>
            <p className="text-sm text-muted-foreground">Completed Orders</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-warning/10 to-warning/5 border-warning/20">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-warning/10 p-3 rounded-lg">
                <Heart className="w-6 h-6 text-warning" />
              </div>
              <Badge className="bg-warning text-warning-foreground">Saved</Badge>
            </div>
            <h3 className="text-2xl font-bold mb-1">28</h3>
            <p className="text-sm text-muted-foreground">Saved Items</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-accent/10 p-3 rounded-lg">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <Badge className="bg-accent text-accent-foreground">Month</Badge>
            </div>
            <h3 className="text-2xl font-bold mb-1">Le 2.4M</h3>
            <p className="text-sm text-muted-foreground">Total Spending</p>
          </Card>
        </div>

        {/* AI-Powered Market Intelligence */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">AI-Powered Market Intelligence</h2>
              <p className="text-gray-600">Data-driven insights for smarter procurement</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 border-l-4 border-l-green-500 hover:shadow-lg transition-all cursor-pointer group">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-green-100 p-3 rounded-lg group-hover:bg-green-200 transition-colors">
                  <TrendingUp className="w-6 h-6 text-green-700" />
                </div>
                <Badge variant="secondary" className="bg-green-50 text-green-700">AI Forecast</Badge>
              </div>
              <h3 className="font-bold text-lg mb-2">Yield Prediction</h3>
              <p className="text-sm text-gray-600 mb-4">Forecast supply availability and price trends for key crops.</p>
              <div className="flex items-center text-green-600 text-sm font-medium">
                View Forecasts <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-l-blue-500 hover:shadow-lg transition-all cursor-pointer group">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-200 transition-colors">
                  <CloudRain className="w-6 h-6 text-blue-700" />
                </div>
                <Badge variant="secondary" className="bg-blue-50 text-blue-700">Risk Analysis</Badge>
              </div>
              <h3 className="font-bold text-lg mb-2">Climate Risk</h3>
              <p className="text-sm text-gray-600 mb-4">Assess climate impact on supply chains and delivery routes.</p>
              <div className="flex items-center text-blue-600 text-sm font-medium">
                Check Risks <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-l-purple-500 hover:shadow-lg transition-all cursor-pointer group">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-purple-100 p-3 rounded-lg group-hover:bg-purple-200 transition-colors">
                  <BarChart3 className="w-6 h-6 text-purple-700" />
                </div>
                <Badge variant="secondary" className="bg-purple-50 text-purple-700">Real-time</Badge>
              </div>
              <h3 className="font-bold text-lg mb-2">Price Analytics</h3>
              <p className="text-sm text-gray-600 mb-4">Track market prices and get alerts on significant changes.</p>
              <div className="flex items-center text-purple-600 text-sm font-medium">
                Analyze Prices <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-l-orange-500 hover:shadow-lg transition-all cursor-pointer group">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-orange-100 p-3 rounded-lg group-hover:bg-orange-200 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-orange-700" />
                </div>
                <Badge variant="secondary" className="bg-orange-50 text-orange-700">AI Grading</Badge>
              </div>
              <h3 className="font-bold text-lg mb-2">Quality Grading</h3>
              <p className="text-sm text-gray-600 mb-4">Verify produce quality with AI-powered image analysis.</p>
              <div className="flex items-center text-orange-600 text-sm font-medium">
                Verify Quality <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Card>
          </div>
        </div>

        {/* Agri Platform Tools */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Agri Platform Tools</h2>
              <p className="text-gray-600">Essential tools for sourcing and logistics</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <Card className="p-4 hover:shadow-md transition-all cursor-pointer h-full border hover:border-green-200">
              <div className="bg-green-100 p-3 rounded-lg w-fit mb-3">
                <Truck className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Smart Logistics</h4>
              <p className="text-xs text-gray-500 line-clamp-2">Track shipments & optimize routes</p>
            </Card>

            <Card className="p-4 hover:shadow-md transition-all cursor-pointer h-full border hover:border-blue-200">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mb-3">
                <ShieldCheck className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Traceability</h4>
              <p className="text-xs text-gray-500 line-clamp-2">Verify source & origin</p>
            </Card>

            <Card className="p-4 hover:shadow-md transition-all cursor-pointer h-full border hover:border-orange-200">
              <div className="bg-orange-100 p-3 rounded-lg w-fit mb-3">
                <CheckCircle2 className="w-6 h-6 text-orange-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Quality Standards</h4>
              <p className="text-xs text-gray-500 line-clamp-2">Export grade compliance</p>
            </Card>

            <Card className="p-4 hover:shadow-md transition-all cursor-pointer h-full border hover:border-purple-200">
              <div className="bg-purple-100 p-3 rounded-lg w-fit mb-3">
                <DollarSign className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Financial Services</h4>
              <p className="text-xs text-gray-500 line-clamp-2">Payments & financing</p>
            </Card>

            <Card className="p-4 hover:shadow-md transition-all cursor-pointer h-full border hover:border-yellow-200">
              <div className="bg-yellow-100 p-3 rounded-lg w-fit mb-3">
                <Factory className="w-6 h-6 text-yellow-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Agri Industry</h4>
              <p className="text-xs text-gray-500 line-clamp-2">Processing partners</p>
            </Card>

            <Card className="p-4 hover:shadow-md transition-all cursor-pointer h-full border hover:border-red-200">
              <div className="bg-red-100 p-3 rounded-lg w-fit mb-3">
                <ShieldCheck className="w-6 h-6 text-red-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Food Security</h4>
              <p className="text-xs text-gray-500 line-clamp-2">Supply stability alerts</p>
            </Card>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Search & Filters */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Browse Products</h2>
              <div className="flex gap-3 mb-4">
                <div className="flex-1 relative">
                  <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <Input placeholder="Search for products, seeds, equipment..." className="pl-10" />
                </div>
                <Button variant="outline">
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </Button>
              </div>

              <div className="flex gap-2">
                <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">All</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">Seeds</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">Equipment</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">Produce</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">Fertilizers</Badge>
              </div>
            </Card>

            {/* Available Products */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-6">Available Products</h2>
              <div className="space-y-4">
                {/* Product 1 */}
                <Card className="p-4 hover:shadow-md transition-shadow">
                  <div className="flex gap-4">
                    <div className="bg-success/10 p-6 rounded-lg flex items-center justify-center min-w-24">
                      <span className="text-4xl">🌾</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-lg font-semibold">Organic Wheat Seeds</h3>
                            <Badge className="bg-success text-success-foreground text-xs">For Sale</Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <User className="w-4 h-4" />
                              Mohamed Kamara
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              Freetown, Western Area
                            </span>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Heart className="w-5 h-5" />
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        High quality certified organic wheat seeds. Yield: 45-50 qtl/acre. Perfect for sustainable farming.
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold text-success">Le 700/kg</span>
                          <span className="text-sm text-muted-foreground">Min. order: 50 kg</span>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Phone className="w-4 h-4 mr-2" />
                            Contact
                          </Button>
                          <Button size="sm" className="bg-accent hover:bg-accent/90">
                            <ShoppingCart className="w-4 h-4 mr-2" />
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Product 2 */}
                <Card className="p-4 hover:shadow-md transition-shadow">
                  <div className="flex gap-4">
                    <div className="bg-info/10 p-6 rounded-lg flex items-center justify-center min-w-24">
                      <span className="text-4xl">🚜</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-lg font-semibold">Harvester Combine</h3>
                            <Badge className="bg-warning text-warning-foreground text-xs">For Rent</Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <User className="w-4 h-4" />
                              Ibrahim Sesay
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              Bo, Southern Province
                            </span>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Heart className="w-5 h-5" />
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        Well maintained New Holland combine harvester. Includes operator. Available immediately.
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold text-success">Le 24,000/hour</span>
                          <span className="text-sm text-muted-foreground">Min. booking: 4 hours</span>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Phone className="w-4 h-4 mr-2" />
                            Contact
                          </Button>
                          <Button size="sm" className="bg-accent hover:bg-accent/90">
                            <ShoppingCart className="w-4 h-4 mr-2" />
                            Book Now
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Product 3 */}
                <Card className="p-4 hover:shadow-md transition-shadow">
                  <div className="flex gap-4">
                    <div className="bg-warning/10 p-6 rounded-lg flex items-center justify-center min-w-24">
                      <span className="text-4xl">🍅</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-lg font-semibold">Fresh Organic Tomatoes</h3>
                            <Badge className="bg-success text-success-foreground text-xs">For Sale</Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <User className="w-4 h-4" />
                              Green Valley Farms
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              Kenema, Eastern Province
                            </span>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Heart className="w-5 h-5 text-warning fill-warning" />
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        Farm-fresh organic tomatoes. Pesticide-free. Bulk orders welcome. Daily harvest available.
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-bold text-success">Le 500/kg</span>
                          <span className="text-sm text-muted-foreground">Min. order: 100 kg</span>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Phone className="w-4 h-4 mr-2" />
                            Contact
                          </Button>
                          <Button size="sm" className="bg-accent hover:bg-accent/90">
                            <ShoppingCart className="w-4 h-4 mr-2" />
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </Card>

            {/* Recent Orders */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-6">Recent Orders</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 border rounded-lg hover:bg-accent/5 transition-colors">
                  <div className="bg-success/10 p-3 rounded-lg">
                    <Package className="w-6 h-6 text-success" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold">Wheat Seeds - 200 kg</h3>
                      <Badge className="bg-success text-success-foreground">
                        <Truck className="w-3 h-3 mr-1" />
                        Delivered
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Order #ORD-12453 • Delivered on Nov 10, 2025</p>
                  </div>
                  <span className="text-lg font-bold">Le 140,000</span>
                </div>

                <div className="flex items-center gap-4 p-4 border rounded-lg hover:bg-accent/5 transition-colors">
                  <div className="bg-info/10 p-3 rounded-lg">
                    <Package className="w-6 h-6 text-info" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold">Fertilizer - NPK Mix</h3>
                      <Badge className="bg-info text-info-foreground">
                        <Clock className="w-3 h-3 mr-1" />
                        In Transit
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Order #ORD-12452 • Expected delivery: Nov 18, 2025</p>
                  </div>
                  <span className="text-lg font-bold">Le 70,000</span>
                </div>

                <div className="flex items-center gap-4 p-4 border rounded-lg hover:bg-accent/5 transition-colors">
                  <div className="bg-warning/10 p-3 rounded-lg">
                    <Package className="w-6 h-6 text-warning" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold">Tractor Rental - 8 hours</h3>
                      <Badge className="bg-warning text-warning-foreground">
                        <Clock className="w-3 h-3 mr-1" />
                        Pending
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Order #ORD-12451 • Scheduled for Nov 20, 2025</p>
                  </div>
                  <span className="text-lg font-bold">Le 192,000</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  View Cart (3)
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Heart className="w-4 h-4 mr-2" />
                  Saved Items (28)
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Package className="w-4 h-4 mr-2" />
                  All Orders
                </Button>
                <Button className="w-full justify-start bg-accent hover:bg-accent/90">
                  <Search className="w-4 h-4 mr-2" />
                  Browse Marketplace
                </Button>
              </div>
            </Card>

            {/* Saved Sellers */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Trusted Sellers</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-success/10 p-2 rounded-full">
                    <User className="w-5 h-5 text-success" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm">Mohamed Kamara</p>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-warning text-warning" />
                      <span className="text-xs text-muted-foreground">4.8 rating</span>
                    </div>
                  </div>
                  <Button size="sm" variant="ghost">
                    <Phone className="w-4 h-4" />
                  </Button>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-info/10 p-2 rounded-full">
                    <User className="w-5 h-5 text-info" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm">Green Valley Farms</p>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-warning text-warning" />
                      <span className="text-xs text-muted-foreground">4.9 rating</span>
                    </div>
                  </div>
                  <Button size="sm" variant="ghost">
                    <Phone className="w-4 h-4" />
                  </Button>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-warning/10 p-2 rounded-full">
                    <User className="w-5 h-5 text-warning" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm">Ibrahim Sesay</p>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-warning text-warning" />
                      <span className="text-xs text-muted-foreground">4.7 rating</span>
                    </div>
                  </div>
                  <Button size="sm" variant="ghost">
                    <Phone className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>

            {/* Account Overview */}
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5">
              <h3 className="text-lg font-semibold mb-4">Account Overview</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Member Since</span>
                  <span className="font-semibold">Nov 2025</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Total Orders</span>
                  <span className="font-semibold">57</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Success Rate</span>
                  <span className="font-semibold text-success">98%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Buyer Rating</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-warning text-warning" />
                    <span className="font-semibold">4.9</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Contact Support */}
            <Card className="p-6 bg-accent/10 border-accent">
              <h3 className="text-lg font-semibold mb-2">Need Help?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Our support team is available 24/7 to assist you
              </p>
              <Button className="w-full bg-accent hover:bg-accent/90">
                <Mail className="w-4 h-4 mr-2" />
                Contact Support
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
