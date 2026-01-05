'use client'

import { API_URL } from '@/lib/api-config'

// Imports moved to top
import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
    Users,
    Building2,
    FileText,
    Activity,
    AlertCircle,
    Shield
} from 'lucide-react'

export default function AdminDashboard() {
    const [statsData, setStatsData] = useState({
        totalUsers: '1,248',
        activeListings: '0',
        pendingReports: '0',
        systemHealth: '98%',
        recentActivities: []
    })

    useEffect(() => {
        fetch(`${API_URL}/api/admin/stats`)
            .then(res => res.json())
            .then(data => {
                setStatsData({
                    totalUsers: data.totalUsers.toLocaleString(),
                    activeListings: data.activeListings.toString(),
                    pendingReports: data.pendingReports.toString(),
                    systemHealth: data.systemHealth,
                    recentActivities: data.recentActivities || []
                })
            })
            .catch(err => console.error("Failed to fetch system stats", err))
    }, [])

    const stats = [
        {
            label: 'Total Users',
            value: statsData.totalUsers,
            change: '+12%',
            icon: Users,
            color: 'text-[#0072C6]',
            bg: 'bg-[#0072C6]/10'
        },
        {
            label: 'Active Listings',
            value: statsData.activeListings,
            change: '+5%',
            icon: Building2,
            color: 'text-[#1EB53A]',
            bg: 'bg-[#1EB53A]/10'
        },
        {
            label: 'Pending Reports',
            value: statsData.pendingReports,
            change: '-2%',
            icon: FileText,
            color: 'text-amber-500',
            bg: 'bg-amber-500/10'
        },
        {
            label: 'System Health',
            value: statsData.systemHealth,
            change: 'Stable',
            icon: Activity,
            color: 'text-slate-900',
            bg: 'bg-slate-100'
        }
    ]

    return (
        <div className="space-y-12 pb-24">

            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <Badge className="bg-[#1EB53A]/10 text-[#1EB53A] border-none font-black uppercase tracking-widest text-[9px] px-3 py-1 mb-2">
                        <Shield className="w-3 h-3 mr-1" /> Authorized Access
                    </Badge>
                    <h1 className="text-4xl font-black text-slate-900 leading-none">Admin <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1EB53A] to-[#0072C6]">Dashboard</span></h1>
                    <p className="text-slate-500 font-medium text-sm mt-2">Monitoring the <span className="text-slate-900 font-black italic">Digital Green Revolution</span> across Sierra Leone.</p>
                </div>
                <div className="bg-white px-5 py-3 rounded-2xl border border-slate-100 shadow-xl flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#1EB53A] animate-pulse"></div>
                        <span className="text-[10px] font-black text-slate-700 uppercase tracking-widest">System Live</span>
                    </div>
                    <div className="h-4 w-px bg-slate-200"></div>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">v2.4.0</span>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat) => {
                    const Icon = stat.icon
                    return (
                        <Card key={stat.label} className="p-8 border-none shadow-2xl hover:shadow-3xl transition-all group overflow-hidden relative rounded-[2.5rem] bg-white">
                            <div className="flex items-center justify-between relative z-10 transition-transform group-hover:-translate-y-1">
                                <div>
                                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">{stat.label}</p>
                                    <h3 className="text-4xl font-black text-slate-900 tracking-tighter">{stat.value}</h3>
                                </div>
                                <div className={`p-4 rounded-2xl ${stat.bg} shadow-sm group-hover:shadow-md transition-all group-hover:scale-110 group-hover:rotate-6`}>
                                    <Icon className={`w-6 h-6 ${stat.color}`} />
                                </div>
                            </div>
                            <div className="mt-8 flex items-center text-[10px] font-black uppercase tracking-widest relative z-10">
                                <span className={stat.change.startsWith('+') ? 'text-[#1EB53A]' : (stat.change === 'Stable' ? 'text-[#0072C6]' : 'text-slate-400')}>
                                    {stat.change}
                                </span>
                                <span className="text-slate-300 ml-2 font-bold tracking-normal">vs last cycle</span>
                            </div>

                            {/* Decorative Elements */}
                            <div className={`absolute bottom-0 left-0 w-full h-1.5 opacity-40 ${stat.change.startsWith('+') ? 'bg-[#1EB53A]' : (stat.change === 'Stable' ? 'bg-[#0072C6]' : 'bg-slate-300')}`}></div>
                        </Card>
                    )
                })}
            </div>

            {/* Recent Activity Section */}
            <div className="grid lg:grid-cols-2 gap-10">
                <Card className="p-10 border-none shadow-2xl bg-white rounded-[3rem]">
                    <div className="flex items-center justify-between mb-10">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center border border-amber-100">
                                <AlertCircle className="w-6 h-6 text-amber-500" />
                            </div>
                            <div>
                                <h2 className="text-lg font-black text-slate-900 uppercase tracking-tight">System Intelligence</h2>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Real-time Diagnostics</p>
                            </div>
                        </div>
                        <Badge variant="outline" className="font-black text-[9px] uppercase tracking-widest border-slate-200 text-slate-400 px-3 py-1">{statsData.recentActivities.length || 2} Updates</Badge>
                    </div>
                    <div className="space-y-6">
                        {statsData.recentActivities.length > 0 ? (
                            statsData.recentActivities.map((activity: any, idx: number) => (
                                <div key={idx} className={`flex w-full gap-6 p-6 border-l-4 ${activity.type === 'success' ? 'border-[#1EB53A] bg-[#1EB53A]/5' : 'border-amber-400 bg-amber-50/50'} rounded-r-3xl hover:bg-opacity-80 transition-colors cursor-default`}>
                                    <div className="mt-1">
                                        <div className={`w-3 h-3 rounded-full ${activity.type === 'success' ? 'bg-[#1EB53A]' : 'bg-amber-500'} shadow-[0_0_10px_rgba(30,181,58,0.5)]`} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start mb-1">
                                            <p className="font-black text-slate-900 text-sm uppercase tracking-tight">{activity.title}</p>
                                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{activity.time}</span>
                                        </div>
                                        <p className="text-xs text-slate-500 font-medium leading-relaxed">{activity.message}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <>
                                <div className="flex w-full gap-6 p-6 border-l-4 border-amber-400 rounded-r-3xl bg-amber-50/50 hover:bg-amber-50 transition-colors cursor-default">
                                    <div className="mt-1">
                                        <div className="w-3 h-3 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)] animate-pulse" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start mb-1">
                                            <p className="font-black text-slate-900 text-sm uppercase tracking-tight">Warning: Server Load</p>
                                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">2h ago</span>
                                        </div>
                                        <p className="text-xs text-slate-500 font-medium leading-relaxed">Freetown primary node approaching capacity threshold (88%). Load balancer engaged.</p>
                                    </div>
                                </div>
                                <div className="flex w-full gap-6 p-6 border-l-4 border-[#1EB53A] rounded-r-3xl bg-[#1EB53A]/5 hover:bg-[#1EB53A]/10 transition-colors cursor-default">
                                    <div className="mt-1">
                                        <div className="w-3 h-3 rounded-full bg-[#1EB53A] shadow-[0_0_10px_rgba(30,181,58,0.5)]" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start mb-1">
                                            <p className="font-black text-slate-900 text-sm uppercase tracking-tight">Success: Backup Sync</p>
                                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">5h ago</span>
                                        </div>
                                        <p className="text-xs text-slate-500 font-medium leading-relaxed">National agricultural database integrity verification complete. All shards synchronized.</p>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </Card>

                <Card className="p-10 border-none shadow-2xl bg-white rounded-[3rem] overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#0072C6]/5 blur-[80px] rounded-full pointing-events-none"></div>

                    <div className="flex items-center justify-between mb-10 relative z-10">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-[#0072C6]/5 rounded-2xl flex items-center justify-center border border-[#0072C6]/10">
                                <Users className="w-6 h-6 text-[#0072C6]" />
                            </div>
                            <div>
                                <h2 className="text-lg font-black text-slate-900 uppercase tracking-tight">User Registrations</h2>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Recent Onboarding</p>
                            </div>
                        </div>
                        <button className="text-[9px] font-black text-[#0072C6] uppercase tracking-widest hover:underline hover:text-[#1EB53A] transition-colors">View All Users</button>
                    </div>

                    <div className="space-y-4 relative z-10">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center justify-between group cursor-pointer p-4 rounded-2xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-xs font-black text-slate-300 group-hover:bg-[#1EB53A]/10 group-hover:text-[#1EB53A] group-hover:border-[#1EB53A]/20 transition-all">
                                        F{i}
                                    </div>
                                    <div>
                                        <p className="text-sm font-black text-slate-900 mb-0.5 group-hover:text-[#1EB53A] transition-colors">Farmer#{i + 1240}</p>
                                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Bo District • Unit {i * 3}</p>
                                    </div>
                                </div>
                                <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest bg-slate-50 px-2 py-1 rounded-md group-hover:bg-white group-hover:shadow-sm transition-all">Just now</span>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </div>
    )
}
