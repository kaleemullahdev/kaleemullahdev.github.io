import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'
import { Header } from '~/components/header'
import { Footer } from '~/components/footer'
import { Cursor } from '~/components/Cursor'

const rubik = Rubik({
  variable: '--font-rubik',
  subsets: ['latin'],
  display: 'swap',
  fallback: ['serif'],
  preload: false,
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: 'Kaleem Ullah - Full Stack Developer',
  description: 'Full Stack Developer specializing in creating exceptional digital experiences',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Cursor />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
