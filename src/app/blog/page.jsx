import { getAllPostsData } from '@/lib/posts'
import Link from 'next/link'
import React from 'react'
import styles from "./blog.module.css";
import {Inknut_Antiqua, Open_Sans} from 'next/font/google'
const inknut = Inknut_Antiqua({display:"swap",subsets:["latin"],weight:["500"]})
const opensans = Open_Sans({display:"swap",subsets:["latin"],weight:["500","700"]})
let data = getAllPostsData()
const Blog = () => {
  return (
    <>
    <div className={styles.container}>


    {data.map((post)=>{
      return(
        //id, title, date
        <div className={styles.post}>
        <Link href={`/blog/${post.id}`} className={styles.link}>
          <div className={styles.top}>
            <p className={inknut.className}>{ post.title }</p>
            <p className={opensans.className}> {post.date}</p>
          </div>
      <p className={[styles.shortdescription,opensans.className].join(" ")}>
        {post.shortdescription}
        </p>
        </Link>
          </div>
      )
    })
    }
    </div>
    </>
  )
}

export default Blog