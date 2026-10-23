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
import { TimerOutlined, SchoolOutlined, HistoryEduOutlined } from '@mui/icons-material'

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
      <UniSection heading="Complete Exam Solution Across All Major Exam Portals"/>
      <Features />
      <ContentSectionOne />
      <CallActionSection/>
      <Stats_section/>
      <Content_section_two/>
      <ProcessSection/>
      <ServicesSection
        title="Key Service Features We Cover"
        services={[
          {
            icon: <TimerOutlined />,
            title: "Online Exam",
            desc: "Our professional tutors offer reliable online exam preparation and support you while keeping your privacy protected. We follow your exam guidelines and provide step-by-step guidance to help you feel confident and perform your best."
          },
          {
            icon: <SchoolOutlined />,
            title: "Online Class",
            desc: "If you are looking for professional online help, we are here to support you whenever you need us. Our experienced tutor can help with your coursework, explain difficult topics, and deliver strong results."
          },
          {
            icon: <HistoryEduOutlined />,
            title: "Online Assignment",
            desc: "It’s getting harder to find the right academic support when it comes to assignment writing. With schools and universities introducing stricter rules around AI-generated content, students need reliable guidance. As an assignment help service provider, we connect you with tutors who understand your requirements and can help you develop original, well-researched assignments."
          }
        ]}
      />
      <ContentSectionThree/>
      <TestimonialSection/>
    </>
  )
}

export default page
