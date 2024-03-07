import './globals.css'
import '@fortawesome/fontawesome-free/css/all.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import AuthProvider  from './../app/auth/Provider'
import LeftBar from './components/layouts/LeftBar'
import LayoutFooter from './components/layouts/Footer'
import TopBar from './components/layouts/TopBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <main className="flex h-screen">
            <LeftBar />
            <div className='grow flex flex-col h-screen'>
              <TopBar />
              <div className='grow overflow-y-scrol bg-slate-100'>
                {children}
              </div>
              <LayoutFooter />
            </div>
          </main>
        </AuthProvider>
      </body>
    </html>
  )
}
