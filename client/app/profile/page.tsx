'use client'

import { useState, useEffect } from 'react'
import { Navigation } from '@/components/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { auth, type User } from '@/lib/auth'
import { User as UserIcon, MapPin, Phone, Mail, Sprout, Briefcase, Plus, Save, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function ProfilePage() {
    const router = useRouter()
    const [user, setUser] = useState<User | null>(null)
    const [isEditing, setIsEditing] = useState(false)
    const [formData, setFormData] = useState<Partial<User>>({})
    const [farmData, setFarmData] = useState({
        name: '',
        size: '',
        location: '',
        crops: ''
    })

    useEffect(() => {
        const currentUser = auth.getUser()
        if (!currentUser) {
            router.push('/auth/login')
            return
        }
        setUser(currentUser)
        setFormData(currentUser)
        if (currentUser.farmDetails) {
            setFarmData({
                ...currentUser.farmDetails,
                crops: currentUser.farmDetails.crops.join(', ')
            })
        }
    }, [router])

    const handleSave = () => {
        const updatedFarm = farmData.name ? {
            name: farmData.name,
            size: farmData.size,
            location: farmData.location,
            crops: farmData.crops.split(',').map(c => c.trim()).filter(c => c !== '')
        } : undefined

        auth.updateProfile({
            ...formData,
            farmDetails: updatedFarm
        })

        setUser(auth.getUser())
        setIsEditing(false)
        alert('Profile updated successfully!')
    }

    if (!user) return null

    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            <div className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row items-center gap-6 mb-8 bg-card p-8 rounded-2xl shadow-sm border border-border">
                        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <UserIcon className="w-12 h-12" />
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
                                <h1 className="text-3xl font-bold text-foreground">{user.name}</h1>
                                <Badge className="w-fit mx-auto md:mx-0 bg-primary text-primary-foreground">
                                    {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                                </Badge>
                            </div>
                            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-muted-foreground">
                                <div className="flex items-center gap-1">
                                    <Mail className="w-4 h-4" />
                                    <span>{user.email}</span>
                                </div>
                                {user.phone && (
                                    <div className="flex items-center gap-1">
                                        <Phone className="w-4 h-4" />
                                        <span>{user.phone}</span>
                                    </div>
                                )}
                                {user.location && (
                                    <div className="flex items-center gap-1">
                                        <MapPin className="w-4 h-4" />
                                        <span>{user.location}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                        <Button
                            onClick={() => setIsEditing(!isEditing)}
                            variant={isEditing ? "ghost" : "outline"}
                        >
                            {isEditing ? 'Cancel' : 'Edit Profile'}
                        </Button>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Sidebar */}
                        <div className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">Quick Access</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <Button variant="ghost" className="w-full justify-start gap-2" asChild>
                                        <Link href="/dashboard">
                                            <Briefcase className="w-4 h-4" /> Dashboard
                                        </Link>
                                    </Button>
                                    <Button variant="ghost" className="w-full justify-start gap-2 text-primary hover:text-primary hover:bg-primary/10" asChild>
                                        <Link href="/government-schemes">
                                            <ExternalLink className="w-4 h-4" /> Agri-Opp Portal
                                        </Link>
                                    </Button>
                                    <Button variant="ghost" className="w-full justify-start gap-2" asChild>
                                        <Link href="/marketplace">
                                            <ExternalLink className="w-4 h-4" /> Marketplace
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>

                            {user.role === 'farmer' && (
                                <Card className="bg-primary/5 border-primary/20">
                                    <CardContent className="p-4">
                                        <h3 className="font-bold text-primary mb-2">Farmer Status</h3>
                                        <p className="text-xs text-muted-foreground mb-4">
                                            Your profile is 80% complete. Add your farm details to qualify for more government schemes.
                                        </p>
                                        <div className="w-full bg-muted rounded-full h-1.5">
                                            <div className="bg-primary h-1.5 rounded-full w-[80%]"></div>
                                        </div>
                                    </CardContent>
                                </Card>
                            )}
                        </div>

                        {/* Main Content */}
                        <div className="md:col-span-2 space-y-8">
                            {isEditing ? (
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Edit Account Information</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="name">Full Name</Label>
                                                <Input
                                                    id="name"
                                                    value={formData.name || ''}
                                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="email">Email</Label>
                                                <Input
                                                    id="email"
                                                    value={formData.email || ''}
                                                    disabled
                                                />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="phone">Phone Number</Label>
                                                <Input
                                                    id="phone"
                                                    value={formData.phone || ''}
                                                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                                    placeholder="+232..."
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="location">General Location</Label>
                                                <Input
                                                    id="location"
                                                    value={formData.location || ''}
                                                    onChange={e => setFormData({ ...formData, location: e.target.value })}
                                                    placeholder="e.g. Freetown"
                                                />
                                            </div>
                                        </div>

                                        {user.role === 'farmer' && (
                                            <div className="pt-6 border-t border-border mt-6">
                                                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                                                    <Sprout className="w-5 h-5 text-primary" />
                                                    Farm Details
                                                </h3>
                                                <div className="space-y-4">
                                                    <div className="space-y-2">
                                                        <Label htmlFor="farm_name">Farm Name</Label>
                                                        <Input
                                                            id="farm_name"
                                                            value={farmData.name}
                                                            onChange={e => setFarmData({ ...farmData, name: e.target.value })}
                                                            placeholder="Green Valley Farm"
                                                        />
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div className="space-y-2">
                                                            <Label htmlFor="farm_size">Farm Size (Acres)</Label>
                                                            <Input
                                                                id="farm_size"
                                                                value={farmData.size}
                                                                onChange={e => setFarmData({ ...farmData, size: e.target.value })}
                                                                placeholder="e.g. 25"
                                                            />
                                                        </div>
                                                        <div className="space-y-2">
                                                            <Label htmlFor="farm_location">Farm Location</Label>
                                                            <Input
                                                                id="farm_location"
                                                                value={farmData.location}
                                                                onChange={e => setFarmData({ ...farmData, location: e.target.value })}
                                                                placeholder="e.g. Bo District"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <Label htmlFor="crops">Crops Grown (comma separated)</Label>
                                                        <Input
                                                            id="crops"
                                                            value={farmData.crops}
                                                            onChange={e => setFarmData({ ...farmData, crops: e.target.value })}
                                                            placeholder="Rice, Maize, Cassava"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        <div className="pt-6">
                                            <Button onClick={handleSave} className="w-full gap-2">
                                                <Save className="w-4 h-4" /> Save Changes
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            ) : (
                                <>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="flex justify-between items-center">
                                                <span>Account Overview</span>
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div className="grid grid-cols-2 gap-y-4">
                                                <div>
                                                    <p className="text-sm text-muted-foreground">Full Name</p>
                                                    <p className="font-medium">{user.name}</p>
                                                </div>
                                                <div>
                                                    <p className="text-sm text-muted-foreground">Account Status</p>
                                                    <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50">Verified</Badge>
                                                </div>
                                                <div>
                                                    <p className="text-sm text-muted-foreground">Join Date</p>
                                                    <p className="font-medium">December 2024</p>
                                                </div>
                                                <div>
                                                    <p className="text-sm text-muted-foreground">Member Since</p>
                                                    <p className="font-medium">1 year</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    {user.role === 'farmer' && (
                                        <Card>
                                            <CardHeader className="flex flex-row items-center justify-between">
                                                <CardTitle className="flex items-center gap-2">
                                                    <Sprout className="w-5 h-5 text-primary" />
                                                    Farm Information
                                                </CardTitle>
                                                {!user.farmDetails && (
                                                    <Button variant="ghost" size="sm" onClick={() => setIsEditing(true)}>
                                                        <Plus className="w-4 h-4 mr-2" /> Add Farm
                                                    </Button>
                                                )}
                                            </CardHeader>
                                            <CardContent>
                                                {user.farmDetails ? (
                                                    <div className="space-y-6">
                                                        <div className="grid grid-cols-2 gap-4">
                                                            <div className="bg-muted/30 p-4 rounded-lg">
                                                                <p className="text-sm text-muted-foreground mb-1">Farm Name</p>
                                                                <p className="font-bold">{user.farmDetails.name}</p>
                                                            </div>
                                                            <div className="bg-muted/30 p-4 rounded-lg">
                                                                <p className="text-sm text-muted-foreground mb-1">Size</p>
                                                                <p className="font-bold">{user.farmDetails.size} Acres</p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p className="text-sm text-muted-foreground mb-2">Primary Crops</p>
                                                            <div className="flex flex-wrap gap-2">
                                                                {user.farmDetails.crops.map((crop, i) => (
                                                                    <Badge key={i} variant="secondary">{crop}</Badge>
                                                                ))}
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                            <MapPin className="w-4 h-4" />
                                                            {user.farmDetails.location}
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="text-center py-8">
                                                        <p className="text-muted-foreground mb-4">No farm details added yet.</p>
                                                        <Button onClick={() => setIsEditing(true)} size="sm" variant="outline">
                                                            Register Your Farm
                                                        </Button>
                                                    </div>
                                                )}
                                            </CardContent>
                                        </Card>
                                    )}

                                    {user.role === 'buyer' && (
                                        <Card>
                                            <CardHeader>
                                                <CardTitle>Buyer Preferences</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-muted-foreground italic text-sm">
                                                    You are currently following 5 farms and have 2 active inquiries in the marketplace.
                                                </p>
                                                <Button className="mt-4" asChild>
                                                    <Link href="/marketplace">Browse Marketplace</Link>
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
