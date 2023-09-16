import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MovieBoxx',
  description: 'A movie discovery web application that allows users to search for movies, view details about them, and save their favorite movieS. Consumed data from the TMDB API',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
