'use client'

import { Navigation } from '@/components/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ClipboardList, Calendar, Users, Tractor, CheckSquare, Plus, AlertCircle, Clock } from 'lucide-react'
import { useState } from 'react'

export default function FarmManagementPage() {
    const [tasks, setTasks] = useState([
        { id: 1, title: 'Apply Fertilizer (NPK)', field: 'Field A (Rice)', due: 'Today', priority: 'High', status: 'Pending' },
        { id: 2, title: 'Weeding Service', field: 'Field B (Cassava)', due: 'Tomorrow', priority: 'Medium', status: 'Pending' },
        { id: 3, title: 'Machine Maintenance', field: 'Equipment Shed', due: 'Next Week', priority: 'Low', status: 'Scheduled' },
    ])

    const resources = [
        { name: 'Tractor (Massey Ferguson)', status: 'In Use', user: 'John Doe', return: '2:00 PM' },
        { name: 'Irrigation Pump A', status: 'Available', user: '-', return: '-' },
        { name: 'Storage Unit 1', status: 'Full', user: '-', return: '-' },
    ]

    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            <main className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
                            <ClipboardList className="w-8 h-8 text-primary" />
                            Farm Management
                        </h1>
                        <p className="text-muted-foreground mt-2">
                            Streamline your daily operations, track tasks, and manage resources efficiently.
                        </p>
                    </div>
                    <Button className="bg-primary hover:bg-primary/90">
                        <Plus className="w-4 h-4 mr-2" />
                        Create Task
                    </Button>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <Card className="bg-secondary text-secondary-foreground border-none shadow-md">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between opacity-80 mb-2">
                                <span className="text-sm font-medium">Pending Tasks</span>
                                <CheckSquare className="w-4 h-4" />
                            </div>
                            <div className="text-3xl font-bold">12</div>
                            <div className="mt-4 text-xs bg-secondary-foreground/20 inline-block px-2 py-1 rounded">
                                3 High Priority
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="bg-warning text-warning-foreground border-none shadow-md">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between opacity-80 mb-2">
                                <span className="text-sm font-medium">Active Workers</span>
                                <Users className="w-4 h-4" />
                            </div>
                            <div className="text-3xl font-bold">8</div>
                            <div className="mt-4 text-xs bg-warning-foreground/20 inline-block px-2 py-1 rounded">
                                2 Leave Requests
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="bg-accent text-accent-foreground border-none shadow-md">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between opacity-80 mb-2">
                                <span className="text-sm font-medium">Equipment Status</span>
                                <Tractor className="w-4 h-4" />
                            </div>
                            <div className="text-3xl font-bold">90%</div>
                            <div className="mt-4 text-xs bg-accent-foreground/20 inline-block px-2 py-1 rounded">
                                1 Machine Down
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <Tabs defaultValue="tasks" className="space-y-6">
                    <TabsList className="bg-white p-1 border rounded-lg">
                        <TabsTrigger value="tasks">Tasks & Schedule</TabsTrigger>
                        <TabsTrigger value="resources">Inventory & Tools</TabsTrigger>
                        <TabsTrigger value="workers">People</TabsTrigger>
                    </TabsList>

                    <TabsContent value="tasks">
                        <Card>
                            <CardHeader>
                                <CardTitle>Daily Tasks</CardTitle>
                                <CardDescription>Manage daily farming activities and assignments.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {tasks.map((task) => (
                                        <div key={task.id} className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                                            <div className="flex items-start gap-3 mb-3 md:mb-0">
                                                <div className={`mt-1 w-2 h-2 rounded-full ${task.priority === 'High' ? 'bg-destructive' :
                                                    task.priority === 'Medium' ? 'bg-warning' : 'bg-primary'
                                                    }`} />
                                                <div>
                                                    <h4 className="font-semibold text-slate-900">{task.title}</h4>
                                                    <p className="text-sm text-slate-500 flex items-center gap-2 mt-1">
                                                        <span>{task.field}</span> • <span>Due: {task.due}</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <Badge variant="outline">{task.status}</Badge>
                                                <Button size="sm" variant="ghost">Mark Complete</Button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button variant="outline" className="w-full">View Full Calendar</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>

                    <TabsContent value="resources">
                        <Card>
                            <CardHeader>
                                <CardTitle>Resource Allocation</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="border-b">
                                                <th className="text-left font-medium p-3 text-slate-500">Resource</th>
                                                <th className="text-left font-medium p-3 text-slate-500">Status</th>
                                                <th className="text-left font-medium p-3 text-slate-500">Assigned To</th>
                                                <th className="text-left font-medium p-3 text-slate-500">Return Time</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {resources.map((res, i) => (
                                                <tr key={i} className="border-b last:border-0 hover:bg-muted/50">
                                                    <td className="p-3 font-medium">{res.name}</td>
                                                    <td className="p-3">
                                                        <Badge variant={res.status === 'Available' ? 'outline' : 'secondary'} className={
                                                            res.status === 'Available' ? 'text-primary border-primary/20 bg-primary/10' : ''
                                                        }>
                                                            {res.status}
                                                        </Badge>
                                                    </td>
                                                    <td className="p-3 text-slate-600">{res.user}</td>
                                                    <td className="p-3 text-slate-600">{res.return}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>

            </main>
        </div>
    )
}
