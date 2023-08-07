import React from 'react'
import styles from "./BlogPost.module.css";
import { getPostData } from '@/lib/posts';
import Link from 'next/link';
import {Inknut_Antiqua, Open_Sans} from 'next/font/google'
const inknut = Inknut_Antiqua({display:"swap",subsets:["latin"],weight:["500"]})
const opensans = Open_Sans({display:"swap",subsets:["latin"],weight:["500","700"]})
const BlogPostComponent = async ({slug }) => {
  let postData =await getPostData(slug)
  return (
    <>
        <Link className={
          [styles.back,opensans.className].join(" ")
        } href={"./"}>Go Back</Link>
<h1 className={[styles.title,inknut.className].join(" ")}>
   {postData.title}
</h1>
    <div className={[opensans.className,styles.textbody].join(" ")} dangerouslySetInnerHTML={
      {__html: postData.contentHtml}
    }>
    </div>

    </>
  )
}

export default BlogPostComponent