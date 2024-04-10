import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My First Next.js',
  description: 'This my personal first next.js website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Analytics/>
        <SpeedInsights/>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
