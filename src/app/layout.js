import Nav from '@/components/NavComponent/Nav'
import './globals.css'
import Footer from '@/components/FooterComponent/Footer'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cats and Coffee',
  description: 'This is a cat cafe with that has coffee.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={""}>
        <Nav />
        {children}
        <Footer />
        </body>
    </html>
  )
}
