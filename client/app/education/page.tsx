'use client'

import { Navigation } from '@/components/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { GraduationCap, BookOpen, Video, FileText, Calendar, PlayCircle, Download } from 'lucide-react'

export default function EducationPage() {
    const courses = [
        {
            title: 'Modern Rice Cultivation',
            level: 'Intermediate',
            modules: 8,
            duration: '4 Weeks',
            image: '/edu-rice.jpg',
            tags: ['Crop Management', 'Best Practices']
        },
        {
            title: 'Soil Health & Fertility',
            level: 'Beginner',
            modules: 5,
            duration: '2 Weeks',
            image: '/edu-soil.jpg',
            tags: ['Soil Science', 'Fertilizer']
        },
        {
            title: 'Agri-Business Basics',
            level: 'Advanced',
            modules: 12,
            duration: '6 Weeks',
            image: '/edu-business.jpg',
            tags: ['Finance', 'Marketing']
        }
    ]

    const resources = [
        { title: 'Sierra Leone Crop Calendar 2025', type: 'PDF', size: '2.4 MB' },
        { title: 'Pest Identification Guide', type: 'PDF', size: '5.1 MB' },
        { title: 'Fertilizer Application Chart', type: 'Excel', size: '1.2 MB' },
    ]

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navigation />

            <main className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
                            <GraduationCap className="w-8 h-8 text-primary" />
                            Agri-Education Hub
                        </h1>
                        <p className="text-muted-foreground mt-2">
                            Master modern farming techniques with our comprehensive library of courses and resources.
                        </p>
                    </div>
                    <Button className="bg-primary hover:bg-primary/90">
                        <Video className="w-4 h-4 mr-2" />
                        Join Live Webinar
                    </Button>
                </div>

                <Tabs defaultValue="courses" className="space-y-6">
                    <TabsList className="bg-muted p-1 border border-border rounded-lg">
                        <TabsTrigger value="courses">Online Courses</TabsTrigger>
                        <TabsTrigger value="resources">Digital Library</TabsTrigger>
                        <TabsTrigger value="workshops">Workshops & Events</TabsTrigger>
                    </TabsList>

                    {/* Courses Tab */}
                    <TabsContent value="courses">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {courses.map((course, i) => (
                                <Card key={i} className="group hover:shadow-lg transition-shadow overflow-hidden">
                                    <div className="h-48 bg-muted relative group-hover:scale-105 transition-transform duration-500">
                                        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/40">
                                            <BookOpen className="w-12 h-12" />
                                        </div>
                                        <Badge className="absolute top-4 left-4 bg-background/90 text-foreground hover:bg-background border-border">
                                            {course.level}
                                        </Badge>
                                    </div>
                                    <CardContent className="p-6 relative bg-card">
                                        <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{course.title}</h3>
                                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                                            <span className="flex items-center gap-1"><BookOpen className="w-3 h-3" /> {course.modules} Modules</span>
                                            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {course.duration}</span>
                                        </div>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {course.tags.map(tag => (
                                                <Badge key={tag} variant="secondary" className="text-xs font-normal bg-secondary/10 text-secondary">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                        <Button className="w-full gap-2">
                                            <PlayCircle className="w-4 h-4" /> Start Learning
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>

                    {/* Resources Tab */}
                    <TabsContent value="resources">
                        <Card>
                            <CardHeader>
                                <CardTitle>Downloadable Materials</CardTitle>
                                <CardDescription>Official guides, manuals, and charts for offline use.</CardDescription>
                            </CardHeader>
                            <CardContent className="grid gap-4">
                                {resources.map((res, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted transition-colors bg-card">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 bg-red-50 text-red-600 rounded-lg flex items-center justify-center">
                                                <FileText className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-foreground">{res.title}</h4>
                                                <p className="text-xs text-slate-500">{res.type} • {res.size}</p>
                                            </div>
                                        </div>
                                        <Button variant="outline" size="sm" className="gap-2">
                                            <Download className="w-4 h-4" /> Download
                                        </Button>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Workshops Tab */}
                    <TabsContent value="workshops">
                        <Card className="border-border">
                            <CardContent className="p-12 text-center text-muted-foreground">
                                <Calendar className="w-12 h-12 mx-auto mb-4 opacity-50" />
                                <h3 className="text-lg font-semibold mb-2 text-foreground">Upcoming Workshops</h3>
                                <p>No offline workshops scheduled in your district (Bo) this month.</p>
                                <Button variant="link" className="mt-2 text-primary">Check National Calendar</Button>
                            </CardContent>
                        </Card>
                    </TabsContent>

                </Tabs>
            </main>
        </div>
    )
}
