import type { Metadata } from 'next'
import { DM_Sans, Fraunces } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  preload: true,
})

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['300', '400'],
  style: ['italic', 'normal'],
  variable: '--font-fraunces',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: 'Tripin — Travel your way',
  description: 'Discover the world through real traveler experiences. Rate places, build trips, and share your journey.',
  metadataBase: new URL('https://tripintravelapp.com'),
  openGraph: {
    title: 'Tripin — Travel your way',
    description: 'Discover the world through real traveler experiences.',
    siteName: 'Tripin',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${fraunces.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
