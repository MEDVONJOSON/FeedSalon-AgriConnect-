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
                    "fixed top-0 left-0 z-40 w-64 h-screen transition-transform bg-gradient-to-b from-green-800 to-green-900 text-white lg:translate-x-0",
                    isOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <div className="flex flex-col h-full">
                    {/* Brand */}
                    <div className="h-16 flex items-center gap-3 px-6 border-b border-green-700/50">
                        <div className="bg-white p-1 rounded-lg w-10 h-10 flex items-center justify-center shrink-0">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold whitespace-nowrap">Agri Connect</h1>
                            <p className="text-xs text-green-300 uppercase tracking-wider">Admin Panel</p>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
                        {adminLinks.map((link) => {
                            const Icon = link.icon
                            const isActive = pathname === link.href

                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group",
                                        isActive
                                            ? "bg-white text-green-900 font-semibold shadow-md"
                                            : "text-green-100 hover:bg-white/10 hover:text-white"
                                    )}
                                >
                                    <Icon className={cn("w-5 h-5", isActive ? "text-green-700" : "text-green-300 group-hover:text-white")} />
                                    <span>{link.name}</span>
                                </Link>
                            )
                        })}
                    </nav>

                    {/* User & Logout */}
                    <div className="p-4 border-t border-green-700/50">
                        <div className="flex items-center gap-3 mb-4 px-2">
                            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                                A
                            </div>
                            <div>
                                <p className="font-medium text-sm">Admin User</p>
                                <p className="text-xs text-green-300">admin@feedsalone.sl</p>
                            </div>
                        </div>
                        <Button
                            variant="destructive"
                            className="w-full justify-start text-white/90 hover:text-white hover:bg-red-600/90"
                            onClick={() => {
                                auth.logout()
                                window.location.href = '/'
                            }}
                        >
                            <LogOut className="w-4 h-4 mr-2" />
                            Sign Out
                        </Button>
                    </div>
                </div>
            </aside>
        </>
    )
}
