'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { User, Mail, Lock, Phone, MapPin, Sprout, ShoppingBag, ChevronLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input' // Assuming you have an input component
// import { auth } from '@/lib/auth' // You might want to implement signup in auth.ts

export default function SignupPage() {
    const router = useRouter()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        location: '',
        password: ''
    })
    const [role, setRole] = useState<'farmer' | 'buyer'>('farmer')
    const [loading, setLoading] = useState(false)

    const roles = [
        { id: 'farmer', label: 'Farmer', icon: Sprout },
        { id: 'buyer', label: 'Buyer', icon: ShoppingBag },
    ]

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        // Simulate signup
        await new Promise(resolve => setTimeout(resolve, 1000))

        // In a real app, call your auth.signup method
        // await auth.signup(...)

        setLoading(false)
        router.push('/dashboard')
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#1EB53A] to-[#064e3b] flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <Link
                    href="/"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 mb-6 text-white hover:bg-white/30 transition-colors"
                >
                    <ChevronLeft className="w-6 h-6" />
                </Link>

                <div className="mb-8">
                    <h1 className="text-4xl font-black text-white mb-2 tracking-tight">Join Us</h1>
                    <p className="text-white/80 font-medium">Start your smart farming journey today</p>
                </div>

                <div className="bg-white rounded-[2rem] p-8 shadow-2xl">
                    {/* Role Tabs */}
                    <div className="flex bg-slate-100 rounded-2xl p-1.5 mb-8">
                        {roles.map((r) => {
                            const Icon = r.icon
                            const isActive = role === r.id
                            return (
                                <button
                                    key={r.id}
                                    onClick={() => setRole(r.id as any)}
                                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all ${isActive ? 'bg-[#1EB53A] text-white shadow-md' : 'text-slate-500 hover:text-slate-700'
                                        }`}
                                >
                                    <Icon className="w-4 h-4" />
                                    {r.label}
                                </button>
                            )
                        })}
                    </div>

                    <form onSubmit={handleSignup} className="space-y-4">
                        <div className="relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2">
                                <User className="w-5 h-5 text-[#1EB53A]" />
                            </div>
                            <Input
                                name="name"
                                placeholder="Full Name *"
                                value={formData.name}
                                onChange={handleChange}
                                className="pl-12 h-14 rounded-2xl bg-slate-50 border-slate-200 focus:ring-[#1EB53A]"
                                required
                            />
                        </div>

                        <div className="relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2">
                                <Mail className="w-5 h-5 text-[#1EB53A]" />
                            </div>
                            <Input
                                name="email"
                                type="email"
                                placeholder="Email Address *"
                                value={formData.email}
                                onChange={handleChange}
                                className="pl-12 h-14 rounded-2xl bg-slate-50 border-slate-200 focus:ring-[#1EB53A]"
                                required
                            />
                        </div>

                        <div className="relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2">
                                <Phone className="w-5 h-5 text-[#1EB53A]" />
                            </div>
                            <Input
                                name="phone"
                                type="tel"
                                placeholder="Phone Number (Optional)"
                                value={formData.phone}
                                onChange={handleChange}
                                className="pl-12 h-14 rounded-2xl bg-slate-50 border-slate-200 focus:ring-[#1EB53A]"
                            />
                        </div>

                        <div className="relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2">
                                <MapPin className="w-5 h-5 text-[#1EB53A]" />
                            </div>
                            <Input
                                name="location"
                                placeholder="Location (Optional)"
                                value={formData.location}
                                onChange={handleChange}
                                className="pl-12 h-14 rounded-2xl bg-slate-50 border-slate-200 focus:ring-[#1EB53A]"
                            />
                        </div>

                        <div className="relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2">
                                <Lock className="w-5 h-5 text-[#1EB53A]" />
                            </div>
                            <Input
                                name="password"
                                type="password"
                                placeholder="Password (Optional)"
                                value={formData.password}
                                onChange={handleChange}
                                className="pl-12 h-14 rounded-2xl bg-slate-50 border-slate-200 focus:ring-[#1EB53A]"
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-full h-14 rounded-2xl bg-[#1EB53A] hover:bg-[#15803d] text-white font-bold text-lg shadow-lg shadow-[#1EB53A]/20 mt-4"
                            disabled={loading}
                        >
                            {loading ? 'Creating Account...' : 'Create Account'}
                        </Button>
                    </form>

                    <div className="mt-8 text-center flex items-center justify-center gap-2">
                        <span className="text-slate-500 text-sm">Already have an account?</span>
                        <Link href="/auth/login" className="text-[#1EB53A] font-bold text-sm hover:underline">
                            Sign In
                        </Link>
                    </div>
                </div>

                <div className="mt-8 px-8 text-center">
                    <p className="text-white/60 text-xs leading-relaxed">By signing up, you agree to our Terms of Service and Privacy Policy.</p>
                </div>
            </div>
        </div>
    )
}
