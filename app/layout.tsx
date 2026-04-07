import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space-grotesk"
});
const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-jetbrains-mono"
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
  themeColor: '#a855f7',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased`} suppressHydrationWarning>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
