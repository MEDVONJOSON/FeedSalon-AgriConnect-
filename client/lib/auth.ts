export type User = {
    id: string
    name: string
    email: string
    role: 'farmer' | 'expert' | 'admin' | 'guest'
}

const MOCK_USER: User = {
    id: '1',
    name: 'Mohamed Kamara',
    email: 'mohamed@agriconnect.sl',
    role: 'farmer'
}

const GUEST_USER: User = {
    id: 'guest',
    name: 'Guest Farmer',
    email: 'guest@agriconnect.sl',
    role: 'guest'
}

export const auth = {
    getUser: (): User | null => {
        if (typeof window !== 'undefined') {
            const stored = localStorage.getItem('agri_user')
            if (stored) return JSON.parse(stored)
        }
        return MOCK_USER // Default to logged in for demo
    },

    login: (email: string) => {
        const user = email.includes('expert') ? { ...MOCK_USER, role: 'expert' as const, name: 'Dr. Samuel Coker' } : MOCK_USER
        localStorage.setItem('agri_user', JSON.stringify(user))
        window.dispatchEvent(new Event('auth-change'))
        return user
    },

    logout: () => {
        localStorage.removeItem('agri_user')
        window.dispatchEvent(new Event('auth-change'))
    }
}
