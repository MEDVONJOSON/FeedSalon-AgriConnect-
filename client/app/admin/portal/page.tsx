'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import { Plus, Trash2, RefreshCw, Briefcase, GraduationCap, DollarSign, Building2 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function AdminPortalPage() {
    const [activeTab, setActiveTab] = useState('jobs')
    const [data, setData] = useState<any[]>([])
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState<any>({})

    const fetchData = async () => {
        setLoading(true)
        try {
            const res = await fetch(`http://localhost:5000/api/agri-opp-portal/${activeTab}`)
            if (res.ok) {
                const result = await res.json()
                // Handle govt special case
                if (activeTab === 'govt') {
                    // For now just show subsidies to keep it simple, or flatten?
                    setData([...(result.subsidies || []), ...(result.infrastructure || [])])
                } else {
                    setData(Array.isArray(result) ? result : [])
                }
            } else {
                throw new Error('Backend unreachable')
            }
        } catch (error) {
            console.warn(`Simulation Mode: Falling back for ${activeTab}`)
            // Fallback Data
            if (activeTab === 'jobs') {
                setData([
                    { id: 1, title: 'Senior Agronomist', location: 'Bo District', type: 'Full Time' },
                    { id: 2, title: 'Farm Manager', location: 'Lungi', type: 'Contract' }
                ])
            } else if (activeTab === 'grants') {
                setData([
                    { id: 1, title: 'Youth Agri-Fund 2025', amount: 'Le 50,000,000', description: 'National fund for young farmers.' },
                    { id: 2, title: 'Women in Ag Grant', amount: 'Le 25,000,000', description: 'Empowering female entrepreneurs.' }
                ])
            } else if (activeTab === 'training') {
                setData([
                    { id: 1, title: 'Sustainable Soil Mgmt', provider: 'Ministry of Ag', type: 'Workshop' },
                    { id: 2, title: 'Drip Irrigation Tech', provider: 'Agri-Sky Labs', type: 'Certification' }
                ])
            } else if (activeTab === 'govt') {
                setData([
                    { id: 1, title: 'Free Seed Distribution', description: 'Quality rice seeds for northern province.' },
                    { id: 2, title: 'Tractor Subsidy 60%', description: 'Subsidy for purchasing mechanized equipment.' }
                ])
            }
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
        setFormData({})
    }, [activeTab])

    const handleDelete = async (id: number) => {
        if (!confirm('Are you sure you want to delete this item?')) return

        try {
            const res = await fetch(`http://localhost:5000/api/agri-opp-portal/${activeTab}/${id}`, {
                method: 'DELETE'
            })
            if (res.ok) {
                fetchData() // Refresh
            } else {
                setData(prev => prev.filter(i => i.id !== id))
            }
        } catch (error) {
            setData(prev => prev.filter(i => i.id !== id))
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const res = await fetch(`http://localhost:5000/api/agri-opp-portal/${activeTab}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })
            if (res.ok) {
                setFormData({})
                fetchData()
                alert('Item created successfully')
            } else {
                // Simulation alert
                const newItem = { id: Date.now(), ...formData }
                setData(prev => [newItem, ...prev])
                setFormData({})
                alert('Simulation: Record added locally')
            }
        } catch (error) {
            // Simulation alert
            const newItem = { id: Date.now(), ...formData }
            setData(prev => [newItem, ...prev])
            setFormData({})
            alert('Simulation: Record added locally')
        }
    }

    const handleInputChange = (field: string, value: string) => {
        setFormData({ ...formData, [field]: value })
    }

    return (
        <div className="space-y-10">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-4xl font-black heading-flagship">Portal Intelligence</h1>
                    <p className="text-slate-500 font-medium mt-1">Directing the flow of <span className="text-branded font-bold">National Opportunities</span>.</p>
                </div>
                <Button onClick={fetchData} variant="outline" className="border-slate-200 font-bold uppercase tracking-widest text-[10px] h-10 px-6 rounded-xl">
                    <RefreshCw className="w-3 h-3 mr-2" /> Synch Database
                </Button>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
                <TabsList className="bg-muted p-1 border border-border rounded-lg grid grid-cols-4 w-full max-w-2xl">
                    <TabsTrigger value="jobs" className="gap-2"><Briefcase className="w-4 h-4" /> Jobs</TabsTrigger>
                    <TabsTrigger value="grants" className="gap-2"><DollarSign className="w-4 h-4" /> Grants</TabsTrigger>
                    <TabsTrigger value="training" className="gap-2"><GraduationCap className="w-4 h-4" /> Training</TabsTrigger>
                    <TabsTrigger value="govt" className="gap-2"><Building2 className="w-4 h-4" /> Govt</TabsTrigger>
                </TabsList>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* List Section */}
                    <Card className="lg:col-span-2">
                        <CardHeader>
                            <CardTitle>Existing Records</CardTitle>
                            <CardDescription>All active items visible to users.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Title / Name</TableHead>
                                        <TableHead>Details</TableHead>
                                        <TableHead className="text-right">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {loading ? (
                                        <TableRow>
                                            <TableCell colSpan={3} className="text-center py-8">Loading...</TableCell>
                                        </TableRow>
                                    ) : data.length === 0 ? (
                                        <TableRow>
                                            <TableCell colSpan={3} className="text-center py-8 text-muted-foreground">No records found</TableCell>
                                        </TableRow>
                                    ) : (
                                        data.map((item: any) => (
                                            <TableRow key={item.id || Math.random()}>
                                                <TableCell className="font-medium text-foreground">{item.title || item.name || 'Untitled'}</TableCell>
                                                <TableCell className="text-muted-foreground text-sm">
                                                    {item.location || item.amount || item.provider || item.description?.substring(0, 30) + '...'}
                                                </TableCell>
                                                <TableCell className="text-right">
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        className="text-destructive hover:text-destructive hover:bg-destructive/10"
                                                        onClick={() => handleDelete(item.id)}
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    )}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>

                    {/* Add Form Section */}
                    <Card>
                        <CardHeader className="bg-muted/50 border-b border-border">
                            <CardTitle className="text-lg flex items-center gap-2">
                                <Plus className="w-5 h-5 text-primary" />
                                Add New {activeTab === 'jobs' ? 'Job' : activeTab === 'grants' ? 'Grant' : 'Item'}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {activeTab === 'jobs' && (
                                    <>
                                        <div className="space-y-2">
                                            <Label>Job Title</Label>
                                            <Input required placeholder="Ex: Farm Supervisor" value={formData.title || ''} onChange={e => handleInputChange('title', e.target.value)} />
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Type</Label>
                                            <Input required placeholder="Ex: Full Time" value={formData.type || ''} onChange={e => handleInputChange('type', e.target.value)} />
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Location</Label>
                                            <Input required placeholder="Ex: Bo District" value={formData.location || ''} onChange={e => handleInputChange('location', e.target.value)} />
                                        </div>
                                    </>
                                )}

                                {activeTab === 'grants' && (
                                    <>
                                        <div className="space-y-2">
                                            <Label>Grant Title</Label>
                                            <Input required placeholder="Ex: Youth Fund 2025" value={formData.title || ''} onChange={e => handleInputChange('title', e.target.value)} />
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Description</Label>
                                            <Input required placeholder="Short summary..." value={formData.description || ''} onChange={e => handleInputChange('description', e.target.value)} />
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Amount</Label>
                                            <Input required placeholder="Ex: Up to $5,000" value={formData.amount || ''} onChange={e => handleInputChange('amount', e.target.value)} />
                                        </div>
                                    </>
                                )}

                                {activeTab === 'training' && (
                                    <>
                                        <div className="space-y-2">
                                            <Label>Course Title</Label>
                                            <Input required placeholder="Ex: Soil Health 101" value={formData.title || ''} onChange={e => handleInputChange('title', e.target.value)} />
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Provider</Label>
                                            <Input required placeholder="Ex: Ministry of Ag" value={formData.provider || ''} onChange={e => handleInputChange('provider', e.target.value)} />
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Type</Label>
                                            <Input required placeholder="Ex: Workshop / Online" value={formData.type || ''} onChange={e => handleInputChange('type', e.target.value)} />
                                        </div>
                                    </>
                                )}

                                {activeTab === 'govt' && (
                                    <>
                                        <div className="space-y-2">
                                            <Label>Category Type</Label>
                                            <select
                                                className="w-full p-2 border rounded-md text-sm"
                                                onChange={e => handleInputChange('tableType', e.target.value)}
                                                value={formData.tableType || 'subsidy'}
                                            >
                                                <option value="subsidy">Subsidy</option>
                                                <option value="infrastructure">Infrastructure</option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Title</Label>
                                            <Input required placeholder="Ex: Free Seeds" value={formData.title || ''} onChange={e => handleInputChange('title', e.target.value)} />
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Description</Label>
                                            <Input required placeholder="Details..." value={formData.description || ''} onChange={e => handleInputChange('description', e.target.value)} />
                                        </div>
                                    </>
                                )}

                                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-4">Create Record</Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </Tabs>
        </div>
    )
}
