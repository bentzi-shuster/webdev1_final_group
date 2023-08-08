import BlogPostComponent from '@/components/BlogPostComponent/BlogPostComponent'
import React from 'react'

const ViewBlog = ({params }) => {
  return (
    <BlogPostComponent slug={params.slug} />
  )
}

export default ViewBlog