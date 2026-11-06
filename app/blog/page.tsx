import React from 'react'
import type { Metadata } from 'next'
import BlogList from '@/container/blog/blog_list/blog_list'

export const metadata: Metadata = {
  title: "Blog | Study Tips & Online Class Guides | Hire Class Buddy",
  description: "Explore the Hire Class Buddy blog for practical study tips, online class guides, and academic strategies to manage coursework and meet deadlines.",
  alternates: {
    canonical: "/blog",
  }
}

const page = () => {
  return (
   <>
      <BlogList/>
   </>
  )
}

export default page
