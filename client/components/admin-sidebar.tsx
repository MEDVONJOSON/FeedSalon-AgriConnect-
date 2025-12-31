'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
    LayoutDashboard,
    Users,
    FileText,
    Settings,
    LogOut,
    ShieldCheck,
    Building2,
    Database,
    Sprout,
    Menu,
    X,
    ShoppingBag,
    GraduationCap,
    TrendingUp,
    AlertTriangle
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { auth } from '@/lib/auth'
import { cn } from '@/lib/utils'
import { useState } from 'react'

const adminLinks = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Applications', href: '/admin/applications', icon: FileText },
    { name: 'User Management', href: '/admin/users', icon: Users },
    { name: 'Schemes & Grants', href: '/admin/schemes', icon: Building2 },
    { name: 'Marketplace Ops', href: '/admin/marketplace', icon: ShoppingBag },
    { name: 'Agri-Opp Portal', href: '/admin/portal', icon: TrendingUp },
    { name: 'Education & Content', href: '/admin/content', icon: GraduationCap },
    { name: 'Alerts & Weather', href: '/admin/alerts', icon: AlertTriangle },
    { name: 'System Logs', href: '/admin/logs', icon: Database },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
]

export function AdminSidebar() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false) // For mobile

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-md text-slate-700"
            >
                {isOpen ? <X /> : <Menu />}
            </button>

            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            <aside
                className={cn(
                    "fixed top-0 left-0 z-40 w-64 h-screen transition-transform bg-[#0072C6] text-white lg:translate-x-0 border-r border-white/5",
                    isOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                {/* Branding Glimmer */}
                <div className="absolute top-0 right-0 w-full h-64 bg-[#1EB53A]/5 blur-[80px] rounded-full pointer-events-none"></div>

                <div className="flex flex-col h-full relative z-10">
                    {/* Brand */}
                    <div className="h-24 flex items-center gap-3 px-6 border-b border-white/10">
                        <div className="bg-white p-1.5 rounded-xl w-12 h-12 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
                        </div>
                        <div>
                            <h1 className="text-xl font-black tracking-tight leading-none">Agri-Connect</h1>
                            <p className="text-[10px] text-[#1EB53A] font-bold uppercase tracking-[0.2em] mt-1">Admin Command</p>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 px-4 py-8 space-y-1.5 overflow-y-auto custom-scrollbar">
                        {adminLinks.map((link) => {
                            const Icon = link.icon
                            const isActive = pathname === link.href

                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group relative overflow-hidden",
                                        isActive
                                            ? "bg-branded text-white font-black shadow-lg shadow-green-900/20"
                                            : "text-slate-400 hover:text-white hover:bg-white/5"
                                    )}
                                >
                                    <Icon className={cn("w-5 h-5", isActive ? "text-white" : "text-slate-500 group-hover:text-[#1EB53A] transition-colors")} />
                                    <span className="text-sm tracking-wide">{link.name}</span>
                                    {isActive && (
                                        <div className="absolute right-0 top-0 h-full w-1 bg-white opacity-30 shadow-[0_0_10px_white]"></div>
                                    )}
                                </Link>
                            )
                        })}
                    </nav>

                    {/* User & Logout */}
                    <div className="p-6 border-t border-white/10 bg-black/20">
                        <div className="flex items-center gap-3 mb-6 px-1">
                            <div className="w-11 h-11 rounded-full bg-branded p-0.5 shadow-lg">
                                <div className="w-full h-full rounded-full bg-[#0072C6] flex items-center justify-center text-white font-black text-sm">
                                    A
                                </div>
                            </div>
                            <div className="overflow-hidden">
                                <p className="font-bold text-sm truncate">Admin User</p>
                                <p className="text-[10px] text-slate-500 truncate font-medium">admin@feedsalone.sl</p>
                            </div>
                        </div>
                        <Button
                            variant="destructive"
                            className="w-full justify-center bg-red-500/10 border border-red-500/20 text-red-500 hover:bg-red-500 hover:text-white font-black uppercase tracking-widest text-[10px] h-11 transition-all"
                            onClick={() => {
                                auth.logout()
                                window.location.href = '/'
                            }}
                        >
                            <LogOut className="w-4 h-4 mr-2" />
                            Sign Out System
                        </Button>
                    </div>
                </div>
            </aside>
        </>
    )
}
