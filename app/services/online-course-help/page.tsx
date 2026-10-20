import React from 'react'
import type { Metadata } from 'next'
import OnlineClassHero from '@/container/services/online-course/hero_section/page'
import UniSection from '@/container/home/uni_section/uni_section'
import Features from '@/container/services/online-course/feature_section/feature_section'
import ContentSectionOne from '@/container/services/online-course/Content_section_one/Content_section_one'
import CallActionSection from '@/container/services/online-course/call_action/call_acition'
import Stats_section from '@/container/services/online-course/stats_section/stats_section'
import Content_section_two from '@/container/services/online-course/content_section_two/content_section_two'
import ProcessSection from '@/container/home/process_section/process_section'
import ServicesSection from '@/container/home/service_section/service_section'
import ContentSectionThree from '@/container/services/online-course/content_section_three/content_section_three'
import TestimonialSection from '@/container/services/online-course/testimonial/testimonial'

// Meta Data Configuration
export const metadata: Metadata = {
  title: "Pay Someone to Do Your Online Course and Improve Your Results",
  description: "Find expert online course help with Hire Class Buddy, offering support across 5,000+ subjects with experienced tutors.",
  alternates: {
    canonical: "/services/online-course-help/",
  }
}

const page = () => {
  return (
    <>
      <OnlineClassHero />
      <UniSection/>
      <Features />
      <ContentSectionOne />
      <CallActionSection/>
      <Stats_section/>
      <Content_section_two/>
      <ProcessSection/>
      <ServicesSection/>
      <ContentSectionThree/>
      <TestimonialSection/>
    </>
  )
}

export default page
