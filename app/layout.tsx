import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// @ts-ignore: CSS module declarations may be missing in this environment
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ivan Lisovenko | Full Stack Developer',
  description: 'Portfolio of Full Stack Developer Ivan Lisovenko',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,#1f2937,transparent_60%)]" />
        {children}
      </body>
    </html>
  )
}
