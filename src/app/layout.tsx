import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'John Fischelli',
  description: 'The personal blog and site of John Fischelli',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative bg-gradient-to-tr from-black to-zinc-800`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
