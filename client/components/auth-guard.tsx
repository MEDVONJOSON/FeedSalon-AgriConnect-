'use client'

import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { auth } from '@/lib/auth'

const PUBLIC_PATHS = ['/', '/about', '/contact', '/privacy', '/terms']

export function AuthGuard({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const router = useRouter()
    const [authorized, setAuthorized] = useState(false)

    useEffect(() => {
        // Function to check auth state
        const checkAuth = () => {
            // 1. Always allow public paths
            const isPublic = PUBLIC_PATHS.includes(pathname) || pathname.startsWith('/auth')

            if (isPublic) {
                setAuthorized(true)
                return
            }

            // 2. Check if user is logged in
            if (!auth.isAuthenticated()) {
                setAuthorized(false)
                router.push('/auth/login')
            } else {
                setAuthorized(true)
            }
        }

        // Initial check
        checkAuth()

        // Subscribe to auth changes (login/logout events)
        const handleAuthChange = () => {
            checkAuth()
        }

        window.addEventListener('auth-change', handleAuthChange)
        return () => {
            window.removeEventListener('auth-change', handleAuthChange)
        }
    }, [pathname, router])

    // If we are on a protected route and not authorized yet, show nothing (or a loader)
    // But if the path is actually public, we can just render. 
    // However, we need to wait for the useEffect to confirm except for the naive check.

    // Safe SSR check for public path (imperfect but helps initial render)
    const isLikelyPublic = PUBLIC_PATHS.includes(pathname) || pathname.startsWith('/auth')

    if (isLikelyPublic) {
        return <>{children}</>
    }

    // For protected routes, show a loading state or nothing until confirmed
    if (!authorized) {
        return null
    }

    return <>{children}</>
}
