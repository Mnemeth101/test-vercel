"'use client'"

import Link from "'next/link'"
import { DollarSignIcon, CalendarIcon, BookOpenIcon } from "'lucide-react'"

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen bg-gray-100">
          <nav className="w-64 bg-white shadow-md">
            <div className="p-4">
              <h1 className="text-2xl font-bold mb-6">My Dashboard</h1>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
                    <DollarSignIcon className="mr-2" />
                    Finance Tracker
                  </Link>
                </li>
                <li>
                  <Link href="/calendar" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
                    <CalendarIcon className="mr-2" />
                    Calendar & Tasks
                  </Link>
                </li>
                <li>
                  <Link href="/reading" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
                    <BookOpenIcon className="mr-2" />
                    Reading List
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <main className="flex-1 p-8 overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}