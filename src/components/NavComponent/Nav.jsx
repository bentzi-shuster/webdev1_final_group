"use client"  // this needs to be a client side component because it uses onClick and the router to get the current path and next does client side routing
import React from 'react'
import styles from './Nav.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
const Nav = () => {
let router = useRouter()
let [path,setPath] = React.useState(router.pathname) //useState allows us to update the state of the path and setPath allows us to change the state of the path (reactive)
  let navLinks=[  // set up an array of objects with the name of the link, the link itself, and the title for the link so we can loop over it and create the links
    {"name":"Home","link":"/","title":"Home page for Cats and Coffee"},
    {"name":"About","link":"/about","title":"About page for Cats and Coffee"},
    {"name":"Blog","link":"/blog","title":"Blog page for Cats and Coffee"},
    {"name":"Contact","link":"/#connect","title":"Contact page for Cats and Coffee"},
  ]
  return (
   <nav>
    <Link href="/"><Image height={80} width={80} src="./logo.svg" alt="Logo for cats and coffee" /><h2>Cats and Coffee</h2></Link> {/* the logo and title*/ }
      <ul className={styles.nav}>
        {navLinks.map((link,index)=>{//map through  (loop over) the links and create a list item with a link (same as an a tag but better) for each
          return <li key={index} title={link.title}><Link onClick={(e)=>{
            e.preventDefault()
            router.push(link.link) //change the path to the link
            setPath(link.link)}} //set the path to the link in state
          className={[
            styles.linkelm, link.link===path?styles.active:"" //add the active class if the link is the current path
          ].join(" ")} href={link.link} aria-label={link.title} >{link.name}</Link></li>
        })}
        </ul>
   </nav>
  )
}

export default Nav