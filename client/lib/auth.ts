
'use client'

const STORAGE_KEY = 'agri_user_session'
const DB_KEY = 'agri_users_db'

export interface User {
    name: string
    email: string
    role: 'farmer' | 'buyer' | 'admin'
    phone?: string
    location?: string
    farmDetails?: {
        name: string
        size: string
        location: string
        crops: string[]
    }
}

// Mock database to store users across sessions (in localStorage)
function getMockDb(): Record<string, User> {
    if (typeof window === 'undefined') return {}
    try {
        return JSON.parse(localStorage.getItem(DB_KEY) || '{}')
    } catch {
        return {}
    }
}

function saveToMockDb(user: User) {
    if (typeof window === 'undefined') return
    const db = getMockDb()
    db[user.email] = user
    localStorage.setItem(DB_KEY, JSON.stringify(db))
}

function getFromMockDb(email: string): User | null {
    const db = getMockDb()
    return db[email] || null
}

export const auth = {
    login: (email: string, password?: string, role: User['role'] = 'farmer'): boolean => {
        // For mock purposes, we accept any password if the user exists
        // If user doesn't exist, we create a mock one derived from email
        let user = getFromMockDb(email)

        if (!user) {
            // Fallback for demo login without signup
            user = {
                name: email.split('@')[0],
                email: email,
                role: role
            }
        } else if (user.role !== role) {
            // Update role if logging in with different role for demo purposes
            user.role = role
            saveToMockDb(user)
        }

        localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
        // Dispatch event for components to update
        window.dispatchEvent(new Event('auth-change'))
        return true
    },

    signup: (data: User) => {
        saveToMockDb(data)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
        window.dispatchEvent(new Event('auth-change'))
    },

    logout: () => {
        localStorage.removeItem(STORAGE_KEY)
        window.dispatchEvent(new Event('auth-change'))
    },

    getUser: (): User | null => {
        if (typeof window === 'undefined') return null
        try {
            const user = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null')
            if (user) return user

            // Return a default Guest user for "Public Access" mode
            return {
                name: 'Guest Farmer',
                email: 'guest@agriconnect.sl',
                role: 'farmer',
                location: 'Freetown, Sierra Leone'
            }
        } catch {
            return null
        }
    },

    updateProfile: (updates: Partial<User>) => {
        const user = auth.getUser()
        if (!user) return
        const updatedUser = { ...user, ...updates }
        saveToMockDb(updatedUser)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedUser))
        window.dispatchEvent(new Event('auth-change'))
    },

    isAuthenticated: (): boolean => {
        return !!auth.getUser()
    }
}
