import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.scss'
import { Toaster } from 'react-hot-toast'

const dmSans = DM_Sans({
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Landing Page',
  description: 'Create by Tran Chi Phuc'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={dmSans.className}>
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: '#333',
              color: '#fff'
            },
            duration: 3000
          }}
        />
        {children}
      </body>
    </html>
  )
}
