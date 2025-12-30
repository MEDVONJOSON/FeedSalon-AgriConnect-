import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Agri Connect - Smart Agriculture with AI',
  description: 'Revolutionize your farming with Agri Connect. Get accurate crop yield predictions, disease alerts, fertilizer recommendations, and weather forecasts.',
  generator: 'v0.app',
}

import { AuthGuard } from '@/components/auth-guard'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <AuthGuard>
          {children}
        </AuthGuard>
      </body>
    </html>
  )
}
