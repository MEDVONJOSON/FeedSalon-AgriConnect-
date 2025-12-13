'use client'

import { Navigation } from '@/components/navigation'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Field, FieldLabel } from '@/components/ui/field'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Sprout, Mail, Lock } from 'lucide-react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { auth, User } from '@/lib/auth'

export default function LoginPage() {
  const router = useRouter()
  const [role, setRole] = useState<User['role']>('farmer')
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Authenticate via mock auth with selected role
    auth.login(formData.email, formData.password, role)
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
            <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
            <p className="text-muted-foreground">
              Login to access your {role} dashboard
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
                <FieldLabel htmlFor="email">Email Address</FieldLabel>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder={`Enter your ${role} email`}
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
                    placeholder="Enter your password"
                    className="pl-10"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    required
                  />
                </div>
              </Field>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" className="rounded border-input" />
                  <span className="text-muted-foreground">Remember me</span>
                </label>
                <Link
                  href="/auth/forgot-password"
                  className="text-sm text-primary hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              <Button type="submit" className="w-full" size="lg">
                Login as {role.charAt(0).toUpperCase() + role.slice(1)}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{' '}
                <Link
                  href="/auth/signup"
                  className="text-primary font-medium hover:underline"
                >
                  Create one now
                </Link>
              </p>
            </div>
          </Card>

          <div className="mt-8 p-4 bg-success/10 border border-success/20 rounded-lg">
            <p className="text-sm text-center text-foreground">
              <strong>Demo Access:</strong> Use any email and password to explore the {role} dashboard
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
