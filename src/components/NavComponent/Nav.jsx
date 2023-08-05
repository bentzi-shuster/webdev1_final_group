"use client"  // this needs to be a client side component because it uses onClick and the router to get the current path and next does client side routing
import React from 'react'
import styles from './Nav.module.css'
import Link from 'next/link'
import Image from 'next/image'
import {usePathname} from 'next/navigation'
import {Inknut_Antiqua, Open_Sans} from 'next/font/google'
const inknut = Inknut_Antiqua({display:"swap",subsets:["latin"],weight:["500"]})
const opensans = Open_Sans({display:"swap",subsets:["latin"],weight:["500","700"]})



function makeListOfLinks(links,pathname,platform){
return  (
<ul className={[styles.nav,styles[platform]].join(" ")}>
{links.map((link,index)=>{//map through  (loop over) the links and create a list item with a link (same as an a tag but better) for each
  return <li key={index} title={link.title} className={styles.listItem}><Link   //set the path to the link in state
  className={[
    styles.linkelm, link.link===pathname?styles.active:"", //add the active class if the link is the current path
    opensans.className
  ].join(" ")} href={link.link} aria-label={link.title} >{link.name}</Link></li>
})}
</ul>
)
}






const Nav = () => {
const pathname = usePathname()//get the current path so like /blog or /about etc
  let navLinks=[  // set up an array of objects with the name of the link, the link itself, and the title for the link so we can loop over it and create the links
    {"name":"Home","link":"/","title":"Home page for Cats and Coffee"},
    {"name":"About","link":"/about","title":"About page for Cats and Coffee"},
    {"name":"Blog","link":"/blog","title":"Blog page for Cats and Coffee"},
  ]
  return (
   <nav className={styles.navbar}>
    <Link className={styles.logo} href="/"><Image height={80} width={80} src="./logo.svg" alt="Logo for cats and coffee" /><h2 className={inknut.className}>Cats and Coffee</h2></Link> {/* the logo and title*/ }
     {makeListOfLinks(navLinks,pathname,"desktop")}
        <details className={styles.mobileMenu}>
          <summary className={styles.menuButton} aria-label="Menu button">
  {/* https://icons.getbootstrap.com/icons/list/ */}
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>
</summary>
{makeListOfLinks(navLinks,pathname,"mobile")}
        </details>
   </nav>
  )
}

export default Nav