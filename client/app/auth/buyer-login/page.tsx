'use client'

import { auth } from '@/lib/auth'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Navigation } from '@/components/navigation'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ShoppingCart, Mail, Lock } from 'lucide-react'

export default function BuyerLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Attempt login with mock auth
    auth.login(email, password)

    // Redirect to main dashboard
    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="bg-info/10 p-3 rounded-lg">
                <ShoppingCart className="w-8 h-8 text-info" />
              </div>
              <h1 className="text-3xl font-bold">Buyer Login</h1>
            </div>
            <p className="text-muted-foreground">
              Access your buyer dashboard and manage orders
            </p>
          </div>

          {/* Login Form */}
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="email">Email Address</Label>
                <div className="relative mt-2">
                  <Mail className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="pl-10"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <div className="relative mt-2">
                  <Lock className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-input" />
                  <span>Remember me</span>
                </label>
                <Button type="button" variant="link" className="p-0 h-auto text-info">
                  Forgot password?
                </Button>
              </div>

              <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Login to Dashboard
              </Button>

              <p className="text-sm text-center text-muted-foreground">
                Don't have a buyer account?{' '}
                <Button
                  type="button"
                  variant="link"
                  className="p-0 h-auto text-info"
                  onClick={() => router.push('/auth/buyer-signup')}
                >
                  Create one now
                </Button>
              </p>
            </form>
          </Card>
        </div>
      </div>
    </div>
  )
}
