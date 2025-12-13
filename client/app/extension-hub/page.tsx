import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { BookOpen, Video, GraduationCap, Users, Award, Calendar, Search, TrendingUp, Leaf, Droplets, Bug } from 'lucide-react'

export default function ExtensionHubPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/95 to-secondary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-8 h-8" />
              <Badge variant="secondary" className="bg-accent text-accent-foreground">
                Education & Training
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Agricultural Extension Hub
            </h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              Access comprehensive training programs, expert resources, and educational content to enhance your agricultural knowledge and skills.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 border-b bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search for courses, tutorials, or topics..."
                className="pl-10 h-12 text-base"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Learning Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/extension-hub/courses">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-3 group-hover:bg-primary/20 transition-colors">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">Online Courses</h3>
                <p className="text-sm text-muted-foreground">Structured learning paths</p>
              </Card>
            </Link>

            <Link href="/extension-hub/tutorials">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="bg-success/10 p-3 rounded-lg w-fit mb-3 group-hover:bg-success/20 transition-colors">
                  <Video className="w-6 h-6 text-success" />
                </div>
                <h3 className="font-semibold mb-1">Video Tutorials</h3>
                <p className="text-sm text-muted-foreground">Step-by-step guides</p>
              </Card>
            </Link>

            <Link href="/extension-hub/webinars">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="bg-info/10 p-3 rounded-lg w-fit mb-3 group-hover:bg-info/20 transition-colors">
                  <Users className="w-6 h-6 text-info" />
                </div>
                <h3 className="font-semibold mb-1">Live Webinars</h3>
                <p className="text-sm text-muted-foreground">Expert-led sessions</p>
              </Card>
            </Link>

            <Link href="/extension-hub/certifications">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="bg-secondary/20 p-3 rounded-lg w-fit mb-3 group-hover:bg-secondary/30 transition-colors">
                  <Award className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold mb-1">Certifications</h3>
                <p className="text-sm text-muted-foreground">Earn credentials</p>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Featured Courses</h2>
            <Button variant="outline" asChild>
              <Link href="/extension-hub/courses">View All Courses</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-success/20 to-success/5 p-8 flex items-center justify-center">
                <Leaf className="w-16 h-16 text-success" />
              </div>
              <div className="p-6">
                <Badge className="mb-3 bg-success/10 text-success hover:bg-success/20">
                  Beginner
                </Badge>
                <h3 className="text-lg font-semibold mb-2">Modern Crop Management</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Learn the fundamentals of sustainable crop management practices and precision agriculture techniques.
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Video className="w-4 h-4" />
                    24 lessons
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    1,234 enrolled
                  </span>
                </div>
                <Button className="w-full" asChild>
                  <Link href="/extension-hub/courses/crop-management">Enroll Now</Link>
                </Button>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-info/20 to-info/5 p-8 flex items-center justify-center">
                <Droplets className="w-16 h-16 text-info" />
              </div>
              <div className="p-6">
                <Badge className="mb-3 bg-info/10 text-info hover:bg-info/20">
                  Intermediate
                </Badge>
                <h3 className="text-lg font-semibold mb-2">Smart Irrigation Systems</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Master water management with IoT-enabled irrigation systems and moisture monitoring technologies.
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Video className="w-4 h-4" />
                    18 lessons
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    892 enrolled
                  </span>
                </div>
                <Button className="w-full" asChild>
                  <Link href="/extension-hub/courses/irrigation">Enroll Now</Link>
                </Button>
              </div>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-destructive/20 to-destructive/5 p-8 flex items-center justify-center">
                <Bug className="w-16 h-16 text-destructive" />
              </div>
              <div className="p-6">
                <Badge className="mb-3 bg-destructive/10 text-destructive hover:bg-destructive/20">
                  Advanced
                </Badge>
                <h3 className="text-lg font-semibold mb-2">Integrated Pest Management</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Advanced strategies for pest control using biological, cultural, and chemical methods.
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Video className="w-4 h-4" />
                    32 lessons
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    567 enrolled
                  </span>
                </div>
                <Button className="w-full" asChild>
                  <Link href="/extension-hub/courses/pest-management">Enroll Now</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Upcoming Webinars</h2>
            <Button variant="outline" asChild>
              <Link href="/extension-hub/webinars">View Schedule</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <Badge className="mb-2 bg-accent/10 text-accent">Live Session</Badge>
                  <h3 className="text-lg font-semibold mb-2">Climate-Smart Agriculture Practices</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Learn how to adapt your farming practices to changing climate conditions and reduce environmental impact.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span>June 15, 2024</span>
                    <span>2:00 PM - 4:00 PM</span>
                  </div>
                  <Button size="sm">Register Now</Button>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-success/10 p-3 rounded-lg">
                  <Calendar className="w-6 h-6 text-success" />
                </div>
                <div className="flex-1">
                  <Badge className="mb-2 bg-success/10 text-success">Workshop</Badge>
                  <h3 className="text-lg font-semibold mb-2">Organic Farming Certification Workshop</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Step-by-step guidance on obtaining organic certification for your farm and accessing premium markets.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span>June 22, 2024</span>
                    <span>10:00 AM - 12:00 PM</span>
                  </div>
                  <Button size="sm">Register Now</Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Learning Resources */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Free Learning Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <BookOpen className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold mb-2">Knowledge Base</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Access our comprehensive library of articles, guides, and best practices.
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link href="/extension-hub/knowledge-base">Browse Articles</Link>
              </Button>
            </Card>

            <Card className="p-6">
              <TrendingUp className="w-8 h-8 text-success mb-3" />
              <h3 className="font-semibold mb-2">Case Studies</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Learn from successful farmers and real-world agricultural innovations.
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link href="/extension-hub/case-studies">Read Stories</Link>
              </Button>
            </Card>

            <Card className="p-6">
              <Award className="w-8 h-8 text-info mb-3" />
              <h3 className="font-semibold mb-2">Downloadable Guides</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Free PDF guides, checklists, and templates for your farming operations.
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link href="/extension-hub/downloads">Get Resources</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <GraduationCap className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Start Learning Today</h2>
          <p className="text-lg text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            Join thousands of farmers improving their knowledge and skills through our educational programs.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
              <Link href="/auth/signup">Create Free Account</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link href="/extension-hub/courses">Browse Courses</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
