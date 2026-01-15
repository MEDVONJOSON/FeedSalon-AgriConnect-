import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Agri Connect - Smart Agriculture with AI',
  description: 'Revolutionize your farming with Agri Connect. Get accurate crop yield predictions, disease alerts, fertilizer recommendations, and weather forecasts.',
  generator: 'v0.app',
  manifest: '/manifest.json',
  themeColor: '#1EB53A',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Agri Connect',
    startupImage: [
      {
        url: '/logo.png',
        media: '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)',
      },
      {
        url: '/logo.png',
        media: '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)',
      },
      {
        url: '/logo.png',
        media: '(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3)',
      },
      {
        url: '/logo.png',
        media: '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)',
      },
    ],
  },
}

import { AuthGuard } from '@/components/auth-guard'
import { PWARegistration } from '@/components/pwa-registration'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} font-sans antialiased`}>
        <PWARegistration />
        <AuthGuard>
          {children}
        </AuthGuard>
      </body>
    </html>
  )
}
