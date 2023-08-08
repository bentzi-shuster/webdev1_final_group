import React from 'react'
import styles from './Footer.module.css'
import {Inknut_Antiqua, Open_Sans} from 'next/font/google'
import Image from 'next/image'
const inknut = Inknut_Antiqua({display:"swap",subsets:["latin"],weight:["500"]})
const opensans = Open_Sans({display:"swap",subsets:["latin"],weight:["500","700"]})
const Footer = () => {
  return (
    <footer className={[styles.footer].join(" ")} id="Contact">
    <span>
<Image className="logo" src="/logo.svg" alt="cats and coffee logo" width={100} height={100} />
    <h3 className={inknut.className} >Cats and Coffee</h3>
    </span>

    <div className={[styles.location,opensans.className].join(" ")}>
        <h4>Locations</h4>
        <p className={opensans.className}>Rutgers - address</p>
        <p className={opensans.className}>NJIT - address</p>
        <p className={opensans.className}>Seton Hall - address</p>
    </div>
    <div className="contact">
        <h4 className={opensans.className}>Contact</h4>
        <a className={opensans.className} href="#">12345667891</a>
        <a className={opensans.className} href="#">cats@njit.edu</a>
    </div>
    <div className="hours">
   <h4 className={opensans.className}>Hours</h4>     
   <p className={opensans.className} >  Mon -Fri 10:00 am - 8:00 pm</p>
   <p className={opensans.className} >Sat  12:00 pm - 5:00 pm</p>
    </div>


</footer>
  )
}

export default Footer