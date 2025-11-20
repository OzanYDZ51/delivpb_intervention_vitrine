import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'GlassUp - Connectez garages et techniciens du vitrage automobile',
  description: 'Connectez instantanément les garages et les techniciens partout en France. Inscription gratuite, sans engagement.',
  keywords: ['vitrage automobile', 'technicien vitrage', 'garage', 'pare-brise', 'réparation', 'remplacement'],
  authors: [{ name: 'GlassUp' }],
  openGraph: {
    title: 'GlassUp - Connectez garages et techniciens du vitrage automobile',
    description: 'Connectez instantanément les garages et les techniciens partout en France.',
    url: 'https://glassup.fr',
    siteName: 'GlassUp',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GlassUp - Connectez garages et techniciens du vitrage automobile',
    description: 'Connectez instantanément les garages et les techniciens partout en France.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="font-sans">
        {children}
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: '#1A2634',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#fff',
            },
          }}
        />
      </body>
    </html>
  )
}
