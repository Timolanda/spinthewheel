import { Inter } from 'next/font/google'
import { Toaster } from "@/components/ui/toaster"
import { SessionProvider } from "next-auth/react"

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Spin the Wheel Betting App',
  description: 'A fun and exciting betting game',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          {children}
          <Toaster />
        </SessionProvider>
      </body>
    </html>
  )
}

