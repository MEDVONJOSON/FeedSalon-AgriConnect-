
'use client'

import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { auth } from '@/lib/auth'

export function AuthGuard({ children }: { children: React.ReactNode }) {
    const router = useRouter()
    const pathname = usePathname()
    const [authorized, setAuthorized] = useState(false)

    useEffect(() => {
        // For demo purposes, we are checking if user exists.
        // In a real app, we might redirect to login.
        const user = auth.getUser()

        // Allow public access to auth pages if we had them, 
        // but for now we just verify user is present (mock user always is)
        if (!user) {
            // router.push('/login') // Uncomment when we have login
        }

        setAuthorized(true)
    }, [router, pathname])

    if (!authorized) {
        return null // Or a loading spinner
    }

    return <>{children}</>
}
