import { AdminSidebar } from '@/components/admin-sidebar'

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen bg-slate-50">
            <AdminSidebar />
            <main className="flex-1 lg:ml-64 p-8 transition-all duration-300 ease-in-out">
                {children}
            </main>
        </div>
    )
}
