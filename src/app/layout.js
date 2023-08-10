import Nav from '@/components/NavComponent/Nav'
import './globals.css'
import Footer from '@/components/FooterComponent/Footer'
import Script from 'next/script'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cats and Coffee',
  description: 'Cats and Coffee is a cat cafe based in Newark NJ',
  openGraph: {
    title: 'Cats and Coffee',
    description: 'Cats and Coffee is a cat cafe based in Newark NJ',
    image: 'https://webdev1-final-group.vercel.app/cat1.png',
    url: 'https://webdev1-final-group.vercel.app/',
    type: 'website',
  },
  authors: [{ name: 'Benjamin Shuster'}, {name: 'Nelson Zhou'},{name:"Ian Santucci"}],
  applicationName: 'Cats and Coffee',
  keywords: ['Cats and Coffee', 'Cats', 'Coffee', 'Cat Cafe', 'Newark', 'NJ'],
  twitter: {
    card: 'summary_large_image',
    url: 'https://webdev1-final-group.vercel.app/',
    title: 'Cats and Coffee',
    description: 'Cats and Coffee is a cat cafe based in Newark NJ',
    image: 'https://webdev1-final-group.vercel.app/cat1.png',
  },
  themeColor: '#ebe1d6',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={""}>
        {/* <!-- Google tag (gtag.js) --> */}
<Script strategy='afterInteractive' src="https://www.googletagmanager.com/gtag/js?id=G-TJTHF7S3Q7"></Script>
<Script strategy='afterInteractive' dangerouslySetInnerHTML={{__html:`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-TJTHF7S3Q7');

`}} id="gtag"></Script>
        <Nav />
        <div style={{minHeight: "60vh"}}>
        {children}          
        </div>
        <Footer />
        </body>
    </html>
  )
}
