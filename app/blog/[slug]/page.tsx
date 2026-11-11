import React from 'react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import BlogPostPage from '@/container/blog/blog_post/blog_post'
import { blogPosts, getPostBySlug } from '@/container/blog/posts'

export const dynamicParams = false

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  }
}

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: `https://hireclassbuddy.com${post.image}`,
    datePublished: "2026-11-04",
    dateModified: "2026-11-04",
    author: {
      "@type": "Organization",
      name: "Hire Class Buddy",
      url: "https://hireclassbuddy.com/",
    },
    publisher: {
      "@type": "Organization",
      name: "Hire Class Buddy",
      logo: {
        "@type": "ImageObject",
        url: "https://hireclassbuddy.com/logo1.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://hireclassbuddy.com/blog/${post.slug}/`,
    },
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: `${faq.answer} ${(faq.list ?? faq.numbered ?? []).join(" ")}`.trim(),
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />
      <BlogPostPage post={post} />
    </>
  )
}

export default page
