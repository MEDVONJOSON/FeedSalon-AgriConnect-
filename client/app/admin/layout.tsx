import { AdminSidebar } from '@/components/admin-sidebar'

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen bg-[#F8FAFC]">
            <AdminSidebar />
            <main className="flex-1 lg:ml-64 p-10 transition-all duration-300 ease-in-out">
                <div className="max-w-7xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    )
}
