import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'John Soliz | Information Technology',
  description: 'John Soliz, Information Technology student at Liberty University focused on Data Networking & Security. Resume, project repositories, education, and experience.',
  openGraph: {
    title: 'John Soliz | Information Technology',
    description: 'Resume, selected projects, and experience. B.S. Information Technology, Liberty University, expected 2027.',
    type: 'website',
    locale: 'en_US',
  },
  icons: { icon: '/icon.svg' },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
