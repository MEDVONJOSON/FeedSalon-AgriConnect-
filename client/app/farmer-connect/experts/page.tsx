'use client'

import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { GraduationCap, TestTube, Leaf, Bug, Star, Info, Send } from 'lucide-react'

export default function ExpertsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="bg-primary/10 p-2 rounded-lg">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl font-bold">Agricultural Experts</h1>
            </div>
            <p className="text-muted-foreground text-lg">Get professional guidance from certified agricultural experts</p>
          </div>

          {/* Expert Categories */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-primary text-primary-foreground p-4">
                <div className="flex items-center justify-center">
                  <TestTube className="w-8 h-8" />
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-3">Crop Scientists</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Specialized in crop breeding, genetics, and variety development
                </p>
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  <Badge variant="secondary">Plant Breeding</Badge>
                  <Badge variant="secondary">Genetics</Badge>
                  <Badge variant="secondary">Varieties</Badge>
                </div>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
                  Consult Now
                </Button>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-secondary text-secondary-foreground p-4">
                <div className="flex items-center justify-center">
                  <Leaf className="w-8 h-8" />
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-3">Soil Experts</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Experts in soil health, nutrition management, and fertility
                </p>
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  <Badge variant="secondary">Soil Testing</Badge>
                  <Badge variant="secondary">Fertility</Badge>
                  <Badge variant="secondary">Nutrition</Badge>
                </div>
                <Button className="bg-accent hover:bg-accent/90 w-full">
                  Consult Now
                </Button>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-warning text-warning-foreground p-4">
                <div className="flex items-center justify-center">
                  <Bug className="w-8 h-8" />
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-3">Plant Protection</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Specialists in pest management and disease control
                </p>
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  <Badge variant="secondary">IPM</Badge>
                  <Badge variant="secondary">Disease Control</Badge>
                  <Badge variant="secondary">Pest Management</Badge>
                </div>
                <Button className="bg-warning hover:bg-warning/90 text-warning-foreground w-full">
                  Consult Now
                </Button>
              </div>
            </Card>
          </div>

          {/* Featured Experts */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Featured Experts</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Expert 1 */}
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-semibold mb-1">Dr. Rajesh Sharma</h3>
                  <p className="text-muted-foreground text-sm">Senior Agronomist</p>
                </div>
                <p className="text-sm text-center text-muted-foreground mb-4">
                  25+ years experience in sustainable agriculture and crop management
                </p>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  <Badge className="bg-primary text-primary-foreground">Rice Expert</Badge>
                  <Badge className="bg-secondary text-secondary-foreground">Organic Farming</Badge>
                </div>
                <div className="flex items-center justify-center gap-1 mb-4">
                  <Star className="w-5 h-5 fill-warning text-warning" />
                  <span className="font-semibold">4.9</span>
                  <span className="text-sm text-muted-foreground">(156 reviews)</span>
                </div>
                <Button variant="outline" className="w-full border-primary text-primary">
                  Book Session
                </Button>
              </Card>

              {/* Expert 2 */}
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-semibold mb-1">Dr. Priya Patel</h3>
                  <p className="text-muted-foreground text-sm">Plant Pathologist</p>
                </div>
                <p className="text-sm text-center text-muted-foreground mb-4">
                  Specialist in crop diseases and integrated pest management
                </p>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  <Badge className="bg-warning text-warning-foreground">Plant Protection</Badge>
                  <Badge className="bg-accent text-accent-foreground">IPM</Badge>
                </div>
                <div className="flex items-center justify-center gap-1 mb-4">
                  <Star className="w-5 h-5 fill-warning text-warning" />
                  <span className="font-semibold">4.8</span>
                  <span className="text-sm text-muted-foreground">(89 reviews)</span>
                </div>
                <Button variant="outline" className="w-full border-primary text-primary">
                  Book Session
                </Button>
              </Card>

              {/* Expert 3 */}
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-semibold mb-1">Dr. Suresh Kumar</h3>
                  <p className="text-muted-foreground text-sm">Soil Scientist</p>
                </div>
                <p className="text-sm text-center text-muted-foreground mb-4">
                  Expert in soil fertility management and precision agriculture
                </p>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  <Badge className="bg-info text-info-foreground">Soil Health</Badge>
                  <Badge className="bg-success text-success-foreground">Precision Farming</Badge>
                </div>
                <div className="flex items-center justify-center gap-1 mb-4">
                  <Star className="w-5 h-5 fill-warning text-warning" />
                  <span className="font-semibold">4.7</span>
                  <span className="text-sm text-muted-foreground">(134 reviews)</span>
                </div>
                <Button variant="outline" className="w-full border-primary text-primary">
                  Book Session
                </Button>
              </Card>
            </div>
          </div>

          {/* Quick Expert Consultation */}
          <Card className="overflow-hidden">
            <div className="bg-primary text-primary-foreground p-4">
              <h2 className="text-2xl font-semibold text-center">Quick Expert Consultation</h2>
              <p className="text-center text-sm mt-1 text-primary-foreground/90">Get answers to your urgent farming questions</p>
            </div>

            <div className="bg-secondary/10 p-4">
              <div className="flex items-center gap-2 justify-center">
                <Info className="w-5 h-5 text-secondary" />
                <p className="text-sm">
                  <span className="font-semibold">Response Time:</span> Experts typically respond within 4-6 hours
                </p>
              </div>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label htmlFor="expert-name">Your Name</Label>
                  <Input id="expert-name" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" className="mt-2" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label htmlFor="expertise">Expertise Required</Label>
                  <Select>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select Expert Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="crop">Crop Scientist</SelectItem>
                      <SelectItem value="soil">Soil Expert</SelectItem>
                      <SelectItem value="pest">Plant Protection</SelectItem>
                      <SelectItem value="general">General Agriculture</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="language">Preferred Language</Label>
                  <Select>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="English" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="hindi">Hindi</SelectItem>
                      <SelectItem value="marathi">Marathi</SelectItem>
                      <SelectItem value="tamil">Tamil</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mb-6">
                <Label htmlFor="problem">Describe Your Problem</Label>
                <textarea
                  id="problem"
                  className="w-full mt-2 min-h-32 px-3 py-2 rounded-md border border-input bg-background"
                  placeholder="Provide detailed information about your farming issue..."
                />
              </div>

              <div className="text-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Send className="w-5 h-5 mr-2" />
                  Submit for Expert Review
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
