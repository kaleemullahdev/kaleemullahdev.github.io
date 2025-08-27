import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { Header } from '~/components/header'
import { Footer } from '~/components/footer'

const fontPoppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['500', '700'],
})

export const metadata: Metadata = {
  title: { default: 'Kaleem Ullah - Full Stack Developer', template: '%s - Kaleem Ullah' },
  description: 'Engineering digital perfection. We specialize in crafting seamless user experiences and building powerful frontend solutions that are a perfect 10/10.',
  keywords: ['Full Stack Developer', 'Frontend Developer', 'React', 'Next.js', 'TypeScript', 'Web Development', 'UI/UX', 'Software Engineer'],
  authors: [{ name: 'Kaleem Ullah' }],
  creator: 'Kaleem Ullah',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kaleemullahdev.github.io',
    title: 'Kaleem Ullah - Full Stack Developer',
    description: 'Engineering digital perfection. Specializing in crafting seamless user experiences and building powerful frontend solutions.',
    siteName: 'Kaleem Ullah Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kaleem Ullah - Full Stack Developer',
    description: 'Engineering digital perfection. Specializing in crafting seamless user experiences and building powerful frontend solutions.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ff7e00' },
    { media: '(prefers-color-scheme: dark)', color: '#ff7e00' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${fontPoppins.variable} font-poppins`}>
      <body>
        <main className="relative">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                'radial-gradient(circle at 20% 30%, rgba(255, 126, 0, 0.5) 0%, transparent 35%), radial-gradient(circle at 80% 70%, rgba(255, 126, 0, 0.3) 0%, transparent 40%)',
              filter: 'blur(60px)',
            }}
          ></div>

          <div className="absolute inset-0 opacity-20">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="neural-net"
                  x="0"
                  y="0"
                  width="100"
                  height="100"
                  patternUnits="userSpaceOnUse"
                >
                  <g fill="#ff7e00" r="2">
                    <circle cx="50" cy="50" r="2" />
                    <circle cx="15" cy="15" r="2" />
                    <circle cx="85" cy="15" r="2" />
                    <circle cx="15" cy="85" r="2" />
                    <circle cx="85" cy="85" r="2" />
                  </g>

                  <g stroke="#ff7e00" strokeWidth="0.5">
                    <g opacity="0.6">
                      <line x1="50" y1="50" x2="15" y2="15" />
                      <line x1="50" y1="50" x2="85" y2="15" />
                      <line x1="50" y1="50" x2="15" y2="85" />
                      <line x1="50" y1="50" x2="85" y2="85" />
                    </g>
                  </g>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#neural-net)" />
            </svg>
          </div>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}