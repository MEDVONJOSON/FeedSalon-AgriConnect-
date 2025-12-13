'use client'

import { Navigation } from '@/components/navigation'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Field, FieldLabel } from '@/components/ui/field'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Sprout, User as UserIcon, Mail, Lock, MapPin, Phone, Building2, Briefcase } from 'lucide-react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { auth, User } from '@/lib/auth'

export default function SignupPage() {
  const router = useRouter()
  const [role, setRole] = useState<User['role']>('farmer')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    farmName: '',
    location: '',
    phone: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Save user to mock auth
    auth.signup({
      name: formData.name,
      email: formData.email,
      role: role
    })
    // Redirect based on role
    if (role === 'admin') {
      router.push('/admin')
    } else {
      router.push('/dashboard')
    }
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <Navigation />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
              <Sprout className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Create Your Account</h1>
            <p className="text-muted-foreground">
              Get instant access to your personalized {role} dashboard
            </p>
          </div>

          <Tabs defaultValue="farmer" className="w-full mb-6" onValueChange={(val) => setRole(val as User['role'])}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="farmer">Farmer</TabsTrigger>
              <TabsTrigger value="buyer">Buyer</TabsTrigger>
              <TabsTrigger value="admin">Admin</TabsTrigger>
            </TabsList>
          </Tabs>

          <Card className="p-6">
            <form onSubmit={handleSubmit} className="space-y-5">
              <Field>
                <FieldLabel htmlFor="name">Full Name</FieldLabel>
                <div className="relative">
                  <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    className="pl-10"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>
              </Field>

              <Field>
                <FieldLabel htmlFor="email">Email Address</FieldLabel>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="pl-10"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>
              </Field>

              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Create a password"
                    className="pl-10"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    required
                  />
                </div>
              </Field>

              {role === 'farmer' && (
                <Field>
                  <FieldLabel htmlFor="farmName">Farm Name</FieldLabel>
                  <div className="relative">
                    <Sprout className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="farmName"
                      type="text"
                      placeholder="Enter your farm name"
                      className="pl-10"
                      value={formData.farmName}
                      onChange={(e) =>
                        setFormData({ ...formData, farmName: e.target.value })
                      }
                      required
                    />
                  </div>
                </Field>
              )}

              {role === 'buyer' && (
                <Field>
                  <FieldLabel htmlFor="organization">Organization / Company</FieldLabel>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="organization"
                      type="text"
                      placeholder="Enter your organization"
                      className="pl-10"
                      // Reusing farmName field for simplicity in demo
                      value={formData.farmName}
                      onChange={(e) =>
                        setFormData({ ...formData, farmName: e.target.value })
                      }
                      required
                    />
                  </div>
                </Field>
              )}

              {role === 'admin' && (
                <Field>
                  <FieldLabel htmlFor="department">Department</FieldLabel>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="department"
                      type="text"
                      placeholder="Enter your department"
                      className="pl-10"
                      // Reusing farmName field for simplicity in demo
                      value={formData.farmName}
                      onChange={(e) =>
                        setFormData({ ...formData, farmName: e.target.value })
                      }
                      required
                    />
                  </div>
                </Field>
              )}

              <Field>
                <FieldLabel htmlFor="location">Location</FieldLabel>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="location"
                    type="text"
                    placeholder="District, Sierra Leone"
                    className="pl-10"
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                    required
                  />
                </div>
              </Field>

              <Field>
                <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="pl-10"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
              </Field>

              <Button type="submit" className="w-full" size="lg">
                Create {role.charAt(0).toUpperCase() + role.slice(1)} Account
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{' '}
                <Link
                  href="/auth/login"
                  className="text-primary font-medium hover:underline"
                >
                  Login here
                </Link>
              </p>
            </div>
          </Card>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              By creating an account, you agree to our Terms of Service and
              Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
