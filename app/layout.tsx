import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'John Soliz — IT, Infrastructure & Creative Technology',
  description: 'John Soliz’s selected work in network diagnostics, machine learning, and interactive experiences. Explore NetScope, EPL Predictor, Resonant, Cage Atlas, Saturday Gridiron, and JMS Photo Gallery.',
  openGraph: {
    title: 'John Soliz — Curiosity, built into something real.',
    description: 'IT student at Liberty University. Projects in infrastructure, data, and creative technology. Explore my work, resume, and background.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'John Soliz — IT & Creative Technology',
    description: 'Network diagnostics, machine learning, and interactive experiences. Selected projects by John Soliz.',
  },
  icons: { icon: '/icon.svg', apple: '/apple-icon.png' },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#111311',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
