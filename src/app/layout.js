import './globals.css'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cats and Coffee',
  description: 'A blog about cats and coffee.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={""}>{children}</body>
    </html>
  )
}
