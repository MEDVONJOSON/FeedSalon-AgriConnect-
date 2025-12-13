import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Search, Filter, Video, Users, Clock, Star, Leaf, Droplets, Bug, Tractor, Wheat, BarChart } from 'lucide-react'
import Link from 'next/link'

const courses = [
  {
    id: 'crop-management',
    title: 'Modern Crop Management',
    description: 'Learn the fundamentals of sustainable crop management practices and precision agriculture techniques.',
    level: 'Beginner',
    lessons: 24,
    duration: '6 weeks',
    enrolled: 1234,
    rating: 4.8,
    icon: Leaf,
    color: 'success'
  },
  {
    id: 'irrigation',
    title: 'Smart Irrigation Systems',
    description: 'Master water management with IoT-enabled irrigation systems and moisture monitoring technologies.',
    level: 'Intermediate',
    lessons: 18,
    duration: '4 weeks',
    enrolled: 892,
    rating: 4.9,
    icon: Droplets,
    color: 'info'
  },
  {
    id: 'pest-management',
    title: 'Integrated Pest Management',
    description: 'Advanced strategies for pest control using biological, cultural, and chemical methods.',
    level: 'Advanced',
    lessons: 32,
    duration: '8 weeks',
    enrolled: 567,
    rating: 4.7,
    icon: Bug,
    color: 'destructive'
  },
  {
    id: 'farm-mechanization',
    title: 'Farm Mechanization Basics',
    description: 'Introduction to agricultural machinery, maintenance, and optimization for different farm sizes.',
    level: 'Beginner',
    lessons: 20,
    duration: '5 weeks',
    enrolled: 1056,
    rating: 4.6,
    icon: Tractor,
    color: 'primary'
  },
  {
    id: 'soil-health',
    title: 'Soil Health Management',
    description: 'Understanding soil biology, nutrient management, and organic matter for improved productivity.',
    level: 'Intermediate',
    lessons: 16,
    duration: '4 weeks',
    enrolled: 743,
    rating: 4.8,
    icon: Wheat,
    color: 'secondary'
  },
  {
    id: 'farm-analytics',
    title: 'Data-Driven Farming',
    description: 'Learn to use farm management software, analytics, and data to make better decisions.',
    level: 'Intermediate',
    lessons: 22,
    duration: '6 weeks',
    enrolled: 621,
    rating: 4.9,
    icon: BarChart,
    color: 'primary'
  }
]

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-br from-primary via-primary/95 to-secondary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Online Courses</h1>
          <p className="text-lg text-primary-foreground/90">
            Comprehensive training programs designed for modern farmers
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-6 border-b bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search courses..."
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="md:w-auto">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => {
              const Icon = course.icon
              return (
                <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className={`bg-gradient-to-br from-${course.color}/20 to-${course.color}/5 p-8 flex items-center justify-center`}>
                    <Icon className={`w-16 h-16 text-${course.color}`} />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge className={`bg-${course.color}/10 text-${course.color} hover:bg-${course.color}/20`}>
                        {course.level}
                      </Badge>
                      <div className="flex items-center gap-1 text-sm">
                        <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                        <span className="font-medium">{course.rating}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {course.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4 pb-4 border-b">
                      <span className="flex items-center gap-1">
                        <Video className="w-4 h-4" />
                        {course.lessons} lessons
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {course.duration}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {course.enrolled.toLocaleString()} enrolled
                      </span>
                      <Button size="sm" asChild>
                        <Link href={`/extension-hub/courses/${course.id}`}>View Course</Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
