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
