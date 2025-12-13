'use client'

import { Card } from '@/components/ui/card'
import {
    Users,
    Building2,
    FileText,
    TrendingUp,
    Activity,
    AlertCircle
} from 'lucide-react'

const stats = [
    {
        label: 'Total Users',
        value: '1,248',
        change: '+12%',
        icon: Users,
        color: 'text-blue-600',
        bg: 'bg-blue-100'
    },
    {
        label: 'Active Listings',
        value: '432',
        change: '+5%',
        icon: Building2,
        color: 'text-green-600',
        bg: 'bg-green-100'
    },
    {
        label: 'Pending Reports',
        value: '14',
        change: '-2%',
        icon: FileText,
        color: 'text-orange-600',
        bg: 'bg-orange-100'
    },
    {
        label: 'System Health',
        value: '98%',
        change: 'Stable',
        icon: Activity,
        color: 'text-purple-600',
        bg: 'bg-purple-100'
    }
]

export default function AdminDashboard() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-slate-800">Admin Dashboard</h1>
                <p className="text-slate-500">Overview of system performance and user activity.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => {
                    const Icon = stat.icon
                    return (
                        <Card key={stat.label} className="p-6">
                            <div className="flex items-center justify-between pointer-events-none">
                                <div>
                                    <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                                    <h3 className="text-2xl font-bold mt-1 text-slate-900">{stat.value}</h3>
                                </div>
                                <div className={`p-3 rounded-full ${stat.bg}`}>
                                    <Icon className={`w-6 h-6 ${stat.color}`} />
                                </div>
                            </div>
                            <div className="mt-4 flex items-center text-sm">
                                <span className={stat.change.startsWith('+') ? 'text-green-600' : 'text-slate-600'}>
                                    {stat.change}
                                </span>
                                <span className="text-slate-400 ml-2">from last month</span>
                            </div>
                        </Card>
                    )
                })}
            </div>

            {/* Recent Activity Section */}
            <div className="grid lg:grid-cols-2 gap-8">
                <Card className="p-6">
                    <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 text-slate-500" />
                        Recent System Alerts
                    </h2>
                    <div className="space-y-4">
                        <div className="flex w-full items-center justify-between p-4 border rounded-lg bg-yellow-50/50 border-yellow-100">
                            <div className="flex gap-3">
                                <div className="w-2 h-2 mt-2 rounded-full bg-yellow-500" />
                                <div>
                                    <p className="font-semibold text-sm">High Server Load</p>
                                    <p className="text-xs text-slate-500">CPU usage reached 85% at 2:00 PM</p>
                                </div>
                            </div>
                            <span className="text-xs text-slate-400">2h ago</span>
                        </div>
                        <div className="flex w-full items-center justify-between p-4 border rounded-lg bg-green-50/50 border-green-100">
                            <div className="flex gap-3">
                                <div className="w-2 h-2 mt-2 rounded-full bg-green-500" />
                                <div>
                                    <p className="font-semibold text-sm">Backup Completed</p>
                                    <p className="text-xs text-slate-500">Daily database backup successful</p>
                                </div>
                            </div>
                            <span className="text-xs text-slate-400">5h ago</span>
                        </div>
                    </div>
                </Card>

                <Card className="p-6">
                    <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                        <Users className="w-5 h-5 text-slate-500" />
                        New User Registrations
                    </h2>
                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">
                                        U{i}
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium">New Farmer Registered</p>
                                        <p className="text-xs text-slate-500">farmer{i}@example.com</p>
                                    </div>
                                </div>
                                <span className="text-xs text-slate-400">Just now</span>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </div>
    )
}
