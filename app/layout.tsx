import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'Welcome to my portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="icon" href="../public/favicon.ico" />
      </head>
      <body
        className={`${inter.className} flex flex-col min-h-screen bg-gray-900 text-gray-100`}
      >
        <header className="bg-gray-800 p-4">
          <nav className="flex justify-between items-center">
            <Link href="/" className="text-xl font-bold hover:text-gray-300">
              Portfolio
            </Link>
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="hover:text-gray-300">
                  About me
                </Link>
              </li>
              <li>
                <Link href="/personal-projects" className="hover:text-gray-300">
                  Personal Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/practical-projects"
                  className="hover:text-gray-300"
                >
                  Practical Projects
                </Link>
              </li>
              <li>
                <Link href="/team-projects" className="hover:text-gray-300">
                  Team Projects
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="flex-grow p-4">{children}</main>
        <footer className="bg-gray-800 p-4 text-center">
          <p>&copy; 2024 My Portfolio. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}
