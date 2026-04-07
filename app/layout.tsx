import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ 
  subsets: ["latin"],
  variable: "--font-geist-sans"
});
const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-geist-mono"
});

export const metadata: Metadata = {
  title: 'Parth Shah | Full Stack Developer',
  description: 'Full Stack MERN Developer & Problem Solver from Surat, Gujarat. Specializing in React, Node.js, MongoDB, and modern web technologies.',
  keywords: ['Full Stack Developer', 'MERN Stack', 'React Developer', 'Node.js', 'Web Developer', 'Parth Shah'],
  authors: [{ name: 'Parth Shah' }],
  creator: 'Parth Shah',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Parth Shah | Full Stack Developer',
    description: 'Full Stack MERN Developer & Problem Solver from Surat, Gujarat.',
    siteName: 'Parth Shah Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Parth Shah | Full Stack Developer',
    description: 'Full Stack MERN Developer & Problem Solver from Surat, Gujarat.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#00e5c3',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
