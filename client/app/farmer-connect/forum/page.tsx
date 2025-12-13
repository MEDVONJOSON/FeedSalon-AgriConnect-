'use client'

import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MessageCircle, Bug, Droplets, Heart, Clock, User, Plus } from 'lucide-react'
import { Flag as Flask } from 'lucide-react'

export default function CommunityForumPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="bg-primary/10 p-2 rounded-lg">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl font-bold">Community Forum</h1>
            </div>
            <p className="text-muted-foreground text-lg">Join the conversation with fellow farmers</p>
          </div>

          {/* Discussion Categories */}
          <Card className="mb-8 overflow-hidden">
            <div className="bg-success text-success-foreground p-4">
              <h2 className="text-xl font-semibold">Discussion Categories</h2>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <Bug className="w-6 h-6 text-destructive mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Pest & Disease</h3>
                    <p className="text-sm text-muted-foreground">1,245 discussions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Flask className="w-6 h-6 text-warning mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Fertilizers & Nutrition</h3>
                    <p className="text-sm text-muted-foreground">892 discussions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Droplets className="w-6 h-6 text-info mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Irrigation & Water</h3>
                    <p className="text-sm text-muted-foreground">567 discussions</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Recent Discussions */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Recent Discussions</h2>
            <Button className="bg-accent hover:bg-accent/90">
              <Plus className="w-4 h-4 mr-2" />
              Ask Question
            </Button>
          </div>

          <div className="space-y-4">
            {/* Discussion 1 */}
            <Card className="p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold flex-1 text-balance">
                  My wheat crop is showing yellow rust symptoms. What immediate action should I take?
                </h3>
                <Badge className="bg-success text-success-foreground ml-4">answered</Badge>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>Rajesh Kumar</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>📍 Punjab</span>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <Badge variant="secondary" className="bg-muted">Wheat</Badge>
                <Badge variant="secondary" className="bg-info/10 text-info">Disease Management</Badge>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>02/09/2025</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" />
                  <span>3 responses</span>
                </div>
                <div className="flex items-center gap-1">
                  <Heart className="w-4 h-4" />
                  <span>12 helpful</span>
                </div>
              </div>
            </Card>

            {/* Discussion 2 */}
            <Card className="p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold flex-1 text-balance">
                  How to control bollworm attack in cotton without using excessive pesticides?
                </h3>
                <Badge className="bg-success text-success-foreground ml-4">answered</Badge>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>Priya Sharma</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>📍 Gujarat</span>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <Badge variant="secondary" className="bg-muted">Cotton</Badge>
                <Badge variant="secondary" className="bg-destructive/10 text-destructive">Pest Control</Badge>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>01/09/2025</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" />
                  <span>7 responses</span>
                </div>
                <div className="flex items-center gap-1">
                  <Heart className="w-4 h-4" />
                  <span>24 helpful</span>
                </div>
              </div>
            </Card>

            {/* Discussion 3 */}
            <Card className="p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold flex-1 text-balance">
                  Best organic fertilizers for tomato cultivation in summer season?
                </h3>
                <Badge variant="outline" className="ml-4">open</Badge>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>Amit Patel</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>📍 Maharashtra</span>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <Badge variant="secondary" className="bg-muted">Tomato</Badge>
                <Badge variant="secondary" className="bg-warning/10 text-warning">Fertilizers</Badge>
                <Badge variant="secondary" className="bg-accent/10 text-accent">Organic Farming</Badge>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>31/08/2025</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" />
                  <span>2 responses</span>
                </div>
                <div className="flex items-center gap-1">
                  <Heart className="w-4 h-4" />
                  <span>8 helpful</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
