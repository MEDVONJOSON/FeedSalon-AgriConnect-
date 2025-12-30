'use client'

import { Navigation } from '@/components/navigation'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Field, FieldLabel } from '@/components/ui/field'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Sprout, Mail, Lock, ShieldCheck, ArrowRight, ScanFace } from 'lucide-react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { auth, User } from '@/lib/auth'
import { Badge } from '@/components/ui/badge'

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
    } else if (role === 'buyer') {
      router.push('/buyer-dashboard')
    } else {
      router.push('/dashboard')
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Premium National Gradient Header */}
      <div className="bg-gradient-to-r from-[#1EB53A] to-[#0072C6] pt-32 pb-48 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/10 blur-[100px] rounded-full translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-white/5 blur-[80px] rounded-full -translate-x-1/4"></div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-[2.5rem] flex items-center justify-center mx-auto mb-8 border border-white/10 shadow-2xl relative group">
            <div className="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></div>
            <img
              src="/rubot-icon.png"
              alt="Rubot"
              className="w-12 h-12 object-contain relative z-10"
            />
          </div>
          <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-md px-6 py-2 mb-6 inline-flex items-center gap-2 font-black uppercase tracking-widest text-[10px]">
            <ShieldCheck className="w-3 h-3" />
            SECURE NATIONAL GATEWAY
          </Badge>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4 leading-[1.1] tracking-tighter">
            Access <span className="text-white/50">Portal</span>
          </h1>
        </div>
      </div>

      <div className="container relative z-20 mx-auto px-4 -mt-32 pb-24 flex justify-center">
        <div className="max-w-xl w-full">

          <Card className="p-12 border-none shadow-3xl rounded-[3rem] bg-white relative overflow-hidden">

            {/* Role Selector */}
            <div className="mb-10">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 text-center">Select Authorized Profile</p>
              <Tabs defaultValue="farmer" className="w-full" onValueChange={(val) => setRole(val as User['role'])}>
                <TabsList className="grid w-full grid-cols-3 h-16 p-2 bg-slate-50 rounded-[2rem] border border-slate-100">
                  <TabsTrigger value="farmer" className="rounded-[1.5rem] font-black uppercase tracking-widest text-[10px] h-full data-[state=active]:bg-[#1EB53A] data-[state=active]:text-white data-[state=active]:shadow-lg transition-all">Farmer</TabsTrigger>
                  <TabsTrigger value="buyer" className="rounded-[1.5rem] font-black uppercase tracking-widest text-[10px] h-full data-[state=active]:bg-[#0072C6] data-[state=active]:text-white data-[state=active]:shadow-lg transition-all">Buyer</TabsTrigger>
                  <TabsTrigger value="admin" className="rounded-[1.5rem] font-black uppercase tracking-widest text-[10px] h-full data-[state=active]:bg-[#0072C6] data-[state=active]:text-white data-[state=active]:shadow-lg transition-all">Admin</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <Field>
                <div className="flex justify-between items-center mb-3 px-2">
                  <FieldLabel htmlFor="email" className="font-black uppercase tracking-widest text-[10px] text-slate-400">Identity Identifier</FieldLabel>
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none transition-colors group-focus-within:text-[#1EB53A]">
                    <Mail className="w-5 h-5 text-slate-300 transition-colors group-focus-within:text-[#1EB53A]" />
                  </div>
                  <Input
                    id="email"
                    type="email"
                    placeholder={`yourname@example.sl`}
                    className="pl-14 h-16 bg-slate-50 border-slate-100 rounded-[2rem] focus:ring-[#1EB53A] focus:border-[#1EB53A] font-bold text-slate-900 text-lg transition-all hover:bg-slate-100 focus:bg-white"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>
              </Field>

              <Field>
                <div className="flex justify-between items-center mb-3 px-2">
                  <FieldLabel htmlFor="password" className="font-black uppercase tracking-widest text-[10px] text-slate-400">Secure Pin</FieldLabel>
                  <Link
                    href="/auth/forgot-password"
                    className="text-[10px] font-black text-[#0072C6] uppercase tracking-widest hover:text-[#1EB53A] transition-colors"
                  >
                    Lost Credentials?
                  </Link>
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none transition-colors group-focus-within:text-[#1EB53A]">
                    <Lock className="w-5 h-5 text-slate-300 transition-colors group-focus-within:text-[#1EB53A]" />
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="pl-14 h-16 bg-slate-50 border-slate-100 rounded-[2rem] focus:ring-[#1EB53A] focus:border-[#1EB53A] font-bold text-slate-900 text-lg transition-all hover:bg-slate-100 focus:bg-white"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    required
                  />
                </div>
              </Field>

              <div className="flex items-center px-2">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative">
                    <input type="checkbox" className="peer sr-only" />
                    <div className="w-6 h-6 border-2 border-slate-200 rounded-lg peer-checked:bg-[#1EB53A] peer-checked:border-[#1EB53A] transition-all"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 peer-checked:opacity-100 pointer-events-none">
                      <ShieldCheck className="w-3 h-3" />
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider group-hover:text-slate-900 transition-colors">Maintain Secure Session</span>
                </label>
              </div>

              <Button type="submit" className="w-full h-20 bg-[#0072C6] text-white hover:bg-[#1EB53A] rounded-[2rem] font-black uppercase tracking-[0.2em] text-xs shadow-2xl transition-all active:scale-95 group relative overflow-hidden">
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <span className="relative z-10 flex items-center gap-4">
                  Authorize {role} Login <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </form>

            <div className="mt-12 text-center">
              <p className="text-xs font-bold text-slate-400">
                Unregistered Entity?{' '}
                <Link
                  href="/auth/signup"
                  className="text-[#0072C6] font-black uppercase tracking-wider hover:text-[#1EB53A] ml-2 underline decoration-2 underline-offset-4 decoration-[#0072C6]/30"
                >
                  Request Credentials
                </Link>
              </p>
            </div>
          </Card>

          <div className="mt-8 flex items-center justify-center gap-2 text-[10px] font-black text-slate-300 uppercase tracking-[0.3em]">
            <ScanFace className="w-4 h-4" />
            Biometric Ready
          </div>
        </div>
      </div>
    </div>
  )
}
