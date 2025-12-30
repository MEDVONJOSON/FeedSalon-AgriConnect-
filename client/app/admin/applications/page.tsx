'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Briefcase, Building2, Calendar, Mail, Phone, MapPin, User, FileText } from 'lucide-react'

export default function AdminApplicationsPage() {
    const [jobApplications, setJobApplications] = useState<any[]>([])
    const [govtApplications, setGovtApplications] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [selectedApplication, setSelectedApplication] = useState<any>(null)
    const [showDetailsModal, setShowDetailsModal] = useState(false)

    useEffect(() => {
        fetchApplications()
    }, [])

    const fetchApplications = async () => {
        setLoading(true)
        try {
            const [jobRes, govtRes] = await Promise.all([
                fetch('http://localhost:5000/api/admin/job-applications'),
                fetch('http://localhost:5000/api/admin/govt-applications')
            ])

            if (jobRes.ok) {
                const jobData = await jobRes.json()
                setJobApplications(jobData)
            } else {
                throw new Error('Backend unreachable')
            }

            if (govtRes.ok) {
                const govtData = await govtRes.json()
                setGovtApplications(govtData)
            }
        } catch (error) {
            console.warn('Simulation Mode: Using local fallback data')
            // Mock Fallback Data
            setJobApplications([
                { id: 101, applicant_name: "Isatu Kamara", job_title: "Drone Operator (Agri-Sky)", email: "isatu.k@example.com", phone: "+232 77 125 456", applied_date: new Date().toISOString(), status: "pending" },
                { id: 102, applicant_name: "Abu Jalloh", job_title: "Soil Microbiologist", email: "abu.j@forest.sl", phone: "+232 33 987 654", applied_date: new Date(Date.now() - 86400000).toISOString(), status: "approved" }
            ])
            setGovtApplications([
                { id: 201, applicant_name: "Fatima Koroma", program_name: "Women in Palm Oil", program_type: "Subsidy", location: "Bo District", applied_date: new Date().toISOString(), status: "pending", farm_size: 15, crops: "Palm, Cassava", is_registered_farmer: "yes", additional_info: "Looking to expand irrigation across 10 hectares." },
                { id: 202, applicant_name: "Samuel Bangura", program_name: "Youth Mechanization", program_type: "Grant", location: "Makeni", applied_date: new Date(Date.now() - 172800000).toISOString(), status: "reviewed", farm_size: 5, crops: "Rice", is_registered_farmer: "no" }
            ])
        } finally {
            setLoading(false)
        }
    }

    const updateStatus = async (type: string, id: number, newStatus: string) => {
        try {
            const res = await fetch(`http://localhost:5000/api/admin/applications/${type}/${id}/status`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: newStatus })
            })

            if (res.ok) {
                fetchApplications() // Refresh data
                alert(`✅ Status updated to: ${newStatus}`)
            } else {
                // Simulation Alert
                if (type === 'job') {
                    setJobApplications(prev => prev.map(a => a.id === id ? { ...a, status: newStatus } : a))
                } else {
                    setGovtApplications(prev => prev.map(a => a.id === id ? { ...a, status: newStatus } : a))
                }
                console.log(`Simulation: Status updated to ${newStatus}`)
            }
        } catch (error) {
            // Simulation Alert
            if (type === 'job') {
                setJobApplications(prev => prev.map(a => a.id === id ? { ...a, status: newStatus } : a))
            } else {
                setGovtApplications(prev => prev.map(a => a.id === id ? { ...a, status: newStatus } : a))
            }
            console.log(`Simulation: Status updated to ${newStatus}`)
        }
    }

    const viewDetails = (application: any, type: string) => {
        setSelectedApplication({ ...application, type })
        setShowDetailsModal(true)
    }

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'pending': return 'bg-amber-500/10 text-amber-600 border-amber-200 uppercase font-black text-[10px]'
            case 'reviewed': return 'bg-[#0072C6]/10 text-[#0072C6] border-[#0072C6]/20 uppercase font-black text-[10px]'
            case 'approved': return 'bg-[#1EB53A]/10 text-[#1EB53A] border-[#1EB53A]/20 uppercase font-black text-[10px]'
            case 'rejected': return 'bg-red-500/10 text-red-600 border-red-200 uppercase font-black text-[10px]'
            default: return 'bg-muted text-muted-foreground'
        }
    }
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
    }

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-4xl font-black heading-flagship">Applications Intelligence</h1>
                    <p className="text-slate-500 font-medium mt-1">Vetting national candidates for the <span className="text-branded font-bold">Feed Salone</span> programs.</p>
                </div>
                <div className="flex gap-4">
                    <Button onClick={fetchApplications} variant="outline" className="border-slate-200 font-bold uppercase tracking-widest text-[10px] h-10 px-6 rounded-xl">Refresh Feed</Button>
                </div>
            </div>

            {/* Statistics Cards */}
            <div className="grid md:grid-cols-4 gap-4">
                <Card>
                    <CardHeader className="pb-3">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Total Applications</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{jobApplications.length + govtApplications.length}</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-3">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Job Applications</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-primary">{jobApplications.length}</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-3">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Govt Programs</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-secondary">{govtApplications.length}</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-3">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Pending Review</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-warning">
                            {[...jobApplications, ...govtApplications].filter(a => a.status === 'pending').length}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Applications Tables */}
            <Tabs defaultValue="jobs" className="space-y-4">
                <TabsList>
                    <TabsTrigger value="jobs">Job Applications ({jobApplications.length})</TabsTrigger>
                    <TabsTrigger value="govt">Government Programs ({govtApplications.length})</TabsTrigger>
                </TabsList>

                <TabsContent value="jobs">
                    <Card>
                        <CardHeader>
                            <CardTitle>Job Applications</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {loading ? (
                                <p className="text-center py-8 text-muted-foreground">Loading...</p>
                            ) : jobApplications.length === 0 ? (
                                <p className="text-center py-8 text-muted-foreground">No job applications yet</p>
                            ) : (
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Applicant</TableHead>
                                            <TableHead>Job Title</TableHead>
                                            <TableHead>Contact</TableHead>
                                            <TableHead>Applied Date</TableHead>
                                            <TableHead>Status</TableHead>
                                            <TableHead>Actions</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {jobApplications.map((app) => (
                                            <TableRow key={app.id}>
                                                <TableCell className="font-medium">{app.applicant_name}</TableCell>
                                                <TableCell>{app.job_title}</TableCell>
                                                <TableCell>
                                                    <div className="text-sm">
                                                        <div className="text-foreground">{app.email}</div>
                                                        <div className="text-muted-foreground">{app.phone}</div>
                                                    </div>
                                                </TableCell>
                                                <TableCell className="text-sm text-muted-foreground">
                                                    {formatDate(app.applied_date)}
                                                </TableCell>
                                                <TableCell>
                                                    <Badge className={getStatusColor(app.status)}>
                                                        {app.status}
                                                    </Badge>
                                                </TableCell>
                                                <TableCell>
                                                    <div className="flex gap-2">
                                                        <Button
                                                            size="sm"
                                                            variant="outline"
                                                            onClick={() => viewDetails(app, 'job')}
                                                        >
                                                            View
                                                        </Button>
                                                        {app.status === 'pending' && (
                                                            <>
                                                                <Button
                                                                    size="sm"
                                                                    className="bg-primary hover:bg-primary/90"
                                                                    onClick={() => updateStatus('job', app.id, 'approved')}
                                                                >
                                                                    Approve
                                                                </Button>
                                                                <Button
                                                                    size="sm"
                                                                    variant="destructive"
                                                                    onClick={() => updateStatus('job', app.id, 'rejected')}
                                                                >
                                                                    Reject
                                                                </Button>
                                                            </>
                                                        )}
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            )}
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="govt">
                    <Card>
                        <CardHeader>
                            <CardTitle>Government Program Applications</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {loading ? (
                                <p className="text-center py-8 text-muted-foreground">Loading...</p>
                            ) : govtApplications.length === 0 ? (
                                <p className="text-center py-8 text-muted-foreground">No government program applications yet</p>
                            ) : (
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Applicant</TableHead>
                                            <TableHead>Program</TableHead>
                                            <TableHead>Location</TableHead>
                                            <TableHead>Applied Date</TableHead>
                                            <TableHead>Status</TableHead>
                                            <TableHead>Actions</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {govtApplications.map((app) => (
                                            <TableRow key={app.id}>
                                                <TableCell className="font-medium">{app.applicant_name}</TableCell>
                                                <TableCell>
                                                    <div>
                                                        <div className="font-medium text-foreground">{app.program_name}</div>
                                                        <div className="text-sm text-muted-foreground">{app.program_type}</div>
                                                    </div>
                                                </TableCell>
                                                <TableCell>{app.location || 'N/A'}</TableCell>
                                                <TableCell className="text-sm text-muted-foreground">
                                                    {formatDate(app.applied_date)}
                                                </TableCell>
                                                <TableCell>
                                                    <Badge className={getStatusColor(app.status)}>
                                                        {app.status}
                                                    </Badge>
                                                </TableCell>
                                                <TableCell>
                                                    <div className="flex gap-2">
                                                        <Button
                                                            size="sm"
                                                            variant="outline"
                                                            onClick={() => viewDetails(app, 'govt')}
                                                        >
                                                            View
                                                        </Button>
                                                        {app.status === 'pending' && (
                                                            <>
                                                                <Button
                                                                    size="sm"
                                                                    className="bg-primary hover:bg-primary/90"
                                                                    onClick={() => updateStatus('govt', app.id, 'approved')}
                                                                >
                                                                    Approve
                                                                </Button>
                                                                <Button
                                                                    size="sm"
                                                                    variant="destructive"
                                                                    onClick={() => updateStatus('govt', app.id, 'rejected')}
                                                                >
                                                                    Reject
                                                                </Button>
                                                            </>
                                                        )}
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            )}
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>

            {/* Application Details Modal */}
            <Dialog open={showDetailsModal} onOpenChange={setShowDetailsModal}>
                <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle>Application Details</DialogTitle>
                        <DialogDescription>
                            {selectedApplication?.type === 'job' ? 'Job Application' : 'Government Program Application'}
                        </DialogDescription>
                    </DialogHeader>
                    {selectedApplication && (
                        <div className="space-y-4 mt-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <User className="w-4 h-4" />
                                        <span className="font-medium">Name:</span>
                                    </div>
                                    <p className="pl-6 text-foreground">{selectedApplication.applicant_name}</p>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <Mail className="w-4 h-4" />
                                        <span className="font-medium">Email:</span>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-sm text-slate-600">
                                        <Phone className="w-4 h-4" />
                                        <span className="font-medium">Phone:</span>
                                    </div>
                                    <p className="pl-6">{selectedApplication.phone}</p>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-sm text-slate-600">
                                        <Calendar className="w-4 h-4" />
                                        <span className="font-medium">Applied:</span>
                                    </div>
                                    <p className="pl-6">{formatDate(selectedApplication.applied_date)}</p>
                                </div>
                            </div>

                            {selectedApplication.type === 'job' ? (
                                <>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-sm text-slate-600">
                                            <Briefcase className="w-4 h-4" />
                                            <span className="font-medium">Job Title:</span>
                                        </div>
                                        <p className="pl-6 font-semibold">{selectedApplication.job_title}</p>
                                    </div>
                                    {selectedApplication.cover_letter && (
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-sm text-slate-600">
                                                <FileText className="w-4 h-4" />
                                                <span className="font-medium">Cover Letter:</span>
                                            </div>
                                            <p className="pl-6 text-sm bg-slate-50 p-3 rounded">
                                                {selectedApplication.cover_letter}
                                            </p>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-sm text-slate-600">
                                            <Building2 className="w-4 h-4" />
                                            <span className="font-medium">Program:</span>
                                        </div>
                                        <p className="pl-6 font-semibold">{selectedApplication.program_name}</p>
                                        <p className="pl-6 text-sm text-slate-600">Type: {selectedApplication.program_type}</p>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {selectedApplication.location && (
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-2 text-sm text-slate-600">
                                                    <MapPin className="w-4 h-4" />
                                                    <span className="font-medium">Location:</span>
                                                </div>
                                                <p className="pl-6">{selectedApplication.location}</p>
                                            </div>
                                        )}
                                        {selectedApplication.farm_size && (
                                            <div className="space-y-2">
                                                <p className="text-sm text-slate-600 font-medium">Farm Size:</p>
                                                <p className="pl-6">{selectedApplication.farm_size} hectares</p>
                                            </div>
                                        )}
                                        {selectedApplication.crops && (
                                            <div className="space-y-2">
                                                <p className="text-sm text-slate-600 font-medium">Crops:</p>
                                                <p className="pl-6">{selectedApplication.crops}</p>
                                            </div>
                                        )}
                                        {selectedApplication.is_registered_farmer && (
                                            <div className="space-y-2">
                                                <p className="text-sm text-slate-600 font-medium">Registered Farmer:</p>
                                                <p className="pl-6 capitalize">{selectedApplication.is_registered_farmer}</p>
                                            </div>
                                        )}
                                    </div>
                                    {selectedApplication.additional_info && (
                                        <div className="space-y-2">
                                            <p className="text-sm text-slate-600 font-medium">Additional Information:</p>
                                            <p className="pl-6 text-sm bg-slate-50 p-3 rounded">
                                                {selectedApplication.additional_info}
                                            </p>
                                        </div>
                                    )}
                                </>
                            )}

                            <div className="pt-4 border-t">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-slate-600">Current Status:</p>
                                        <Badge className={`${getStatusColor(selectedApplication.status)} mt-1`}>
                                            {selectedApplication.status}
                                        </Badge>
                                    </div>
                                    {selectedApplication.status === 'pending' && (
                                        <div className="flex gap-2">
                                            <Button
                                                className="bg-primary hover:bg-primary/90"
                                                onClick={() => {
                                                    updateStatus(selectedApplication.type, selectedApplication.id, 'approved')
                                                    setShowDetailsModal(false)
                                                }}
                                            >
                                                Approve
                                            </Button>
                                            <Button
                                                variant="destructive"
                                                onClick={() => {
                                                    updateStatus(selectedApplication.type, selectedApplication.id, 'rejected')
                                                    setShowDetailsModal(false)
                                                }}
                                            >
                                                Reject
                                            </Button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    )
}
