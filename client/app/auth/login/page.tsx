'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Sprout, Mail, Lock, ShoppingBag, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { auth } from '@/lib/auth'

export default function LoginPage() {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState<'farmer' | 'buyer' | 'admin'>('farmer')
    const [loading, setLoading] = useState(false)

    const roles = [
        { id: 'farmer', label: 'Farmer', icon: Sprout },
        { id: 'buyer', label: 'Buyer', icon: ShoppingBag },
        { id: 'admin', label: 'Admin', icon: ShieldCheck },
    ]

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        // Simulate login delay
        await new Promise(resolve => setTimeout(resolve, 1000))

        try {
            const user = await auth.login(email, password)
            if (user) {
                // Force role update if needed based on selection
                // In a real app the role comes from the backend user record
                router.push('/dashboard')
            } else {
                alert('Login failed. Check console for mock credentials.')
            }
        } catch (error) {
            console.error('Login error', error)
            alert('An error occurred')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#1EB53A] to-[#064e3b] flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="text-center mb-10">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-white/30">
                        <Sprout className="w-12 h-12 text-white" />
                    </div>
                    <h1 className="text-4xl font-black text-white mb-2 tracking-tight">Agri Connect</h1>
                    <p className="text-white/80 font-medium">Empowering Farmers, Connecting Markets</p>
                </div>

                <div className="bg-white rounded-[2rem] p-8 shadow-2xl">
                    <h2 className="text-2xl font-bold text-slate-800 text-center mb-8">Sign In</h2>

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

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2">
                                <Mail className="w-5 h-5 text-[#1EB53A]" />
                            </div>
                            <Input
                                type="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="pl-12 h-14 rounded-2xl bg-slate-50 border-slate-200 focus:ring-[#1EB53A]"
                                required
                            />
                        </div>

                        <div className="relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2">
                                <Lock className="w-5 h-5 text-[#1EB53A]" />
                            </div>
                            <Input
                                type="password"
                                placeholder="Password (Optional)"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="pl-12 h-14 rounded-2xl bg-slate-50 border-slate-200 focus:ring-[#1EB53A]"
                            />
                        </div>

                        <div className="flex justify-end">
                            <button type="button" className="text-[#1EB53A] text-sm font-bold hover:underline">
                                Forgot Password?
                            </button>
                        </div>

                        <Button
                            type="submit"
                            className="w-full h-14 rounded-2xl bg-[#1EB53A] hover:bg-[#15803d] text-white font-bold text-lg shadow-lg shadow-[#1EB53A]/20"
                            disabled={loading}
                        >
                            {loading ? 'Signing in...' : 'Welcome Back'}
                        </Button>
                    </form>

                    <div className="mt-8 text-center flex items-center justify-center gap-2">
                        <span className="text-slate-500 text-sm">New to Agri Connect?</span>
                        <Link href="/auth/signup" className="text-[#1EB53A] font-bold text-sm hover:underline">
                            Create Account
                        </Link>
                    </div>
                </div>

                <div className="mt-10 text-center text-white/60 text-xs">
                    © 2026 Agri Connect Sierra Leone
                </div>
            </div>
        </div>
    )
}
