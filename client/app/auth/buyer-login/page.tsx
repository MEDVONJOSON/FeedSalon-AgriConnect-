'use client'

import { auth } from '@/lib/auth'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
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
    auth.login(email, password, 'buyer')

    // Redirect to main dashboard
    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <Navigation />

      {/* Patriotic Branding Accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1EB53A]/5 blur-[120px] rounded-full translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-[#0072C6]/10 blur-[100px] rounded-full -translate-x-1/4"></div>

      <div className="container relative z-10 mx-auto px-4 py-24 flex items-center justify-center min-h-[calc(100vh-80px)]">
        <div className="max-w-xl w-full">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="bg-white p-6 rounded-[2rem] w-fit mx-auto mb-8 shadow-2xl border border-slate-50 relative group">
              <div className="absolute inset-0 bg-[#0072C6]/10 blur-xl group-hover:opacity-20 transition-opacity rounded-full"></div>
              <ShoppingCart className="w-16 h-16 text-[#0072C6] animate-float relative z-10" />
            </div>
            <h1 className="text-5xl font-black heading-flagship mb-4 leading-none">Buyer Portal</h1>
            <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-xs">
              Direct Access to the <span className="text-[#0072C6] underline decoration-2 underline-offset-4">National Harvest</span>
            </p>
          </div>

          {/* Login Form */}
          <Card className="p-10 border-none shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] rounded-[2.5rem] bg-white/80 backdrop-blur-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="email" className="font-black uppercase tracking-widest text-[10px] text-slate-400 mb-2 block px-1">Institutional Identifier</Label>
                <div className="relative group">
                  <Mail className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#0072C6] transition-colors" />
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Ex: procurement@salone-grain.sl"
                    required
                    className="pl-12 h-14 bg-slate-50/50 border-slate-200 rounded-2xl focus:ring-[#0072C6] focus:border-[#0072C6] font-medium"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="password" className="font-black uppercase tracking-widest text-[10px] text-slate-400 mb-2 block px-1">Secret Access Key</Label>
                <div className="relative group">
                  <Lock className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#0072C6] transition-colors" />
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="pl-12 h-14 bg-slate-50/50 border-slate-200 rounded-2xl focus:ring-[#0072C6] focus:border-[#0072C6] font-medium"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between px-1">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-5 h-5 rounded-lg border-slate-300 text-[#0072C6] focus:ring-[#0072C6]" />
                  <span className="text-xs font-bold text-slate-500 group-hover:text-slate-900 transition-colors">Remember Session</span>
                </label>
                <Link href="/auth/forgot-password" size="sm" className="text-[10px] font-black text-[#0072C6] uppercase tracking-widest hover:underline">
                  Key Recovery?
                </Link>
              </div>

              <Button type="submit" className="w-full h-16 bg-[#0072C6] hover:scale-[1.02] active:scale-[0.98] transition-all rounded-2xl font-black uppercase tracking-[0.2em] text-sm shadow-xl shadow-blue-900/10">
                <ShoppingCart className="w-5 h-5 mr-3" />
                Authorize Terminal
              </Button>

              <div className="mt-8 pt-8 border-t border-slate-100 text-center">
                <p className="text-sm font-bold text-slate-500">
                  New Institutional Buyer?{' '}
                  <Link
                    href="/auth/buyer-signup"
                    className="text-[#0072C6] hover:underline px-1"
                  >
                    Register Organization
                  </Link>
                </p>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </div>
  )
}
