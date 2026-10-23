import React from 'react'
import type { Metadata } from 'next'
import OnlineHero from '@/container/services/online-exam/hero_section/page'
import UniSection from '@/container/home/uni_section/uni_section'
import Features from '@/container/services/online-exam/feature_section/feature_section'
import ContentSectionOne from '@/container/services/online-exam/Content_section_one/Content_section_one'
import CallActionSection from '@/container/services/online-exam/call_action/call_acition'
import Stats_section from '@/container/services/online-exam/stats_section/stats_section'
import Content_section_two from '@/container/services/online-exam/content_section_two/content_section_two'
import ProcessSection from '@/container/home/process_section/process_section'
import ServicesSection from '@/container/home/service_section/service_section'
import ContentSectionThree from '@/container/services/online-exam/content_section_three/content_section_three'
import TestimonialSection from '@/container/services/online-exam/testimonial/testimonial'
import { TimerOutlined, SchoolOutlined, HistoryEduOutlined } from '@mui/icons-material'

// Meta Data Configuration
export const metadata: Metadata = {
  title: "Hire Someone to Take My Online Exam With Expert Support",
  description: "Looking to hire someone to help with your online exam? Visit Hire Class Buddy and connect with an expert tutor for professional exam preparation today.",
  alternates: {
    canonical: "/services/online-exam-help",
  }
}

const page = () => {
  return (
    <>
      <OnlineHero />
      <UniSection heading='Expert-Led Help for Students Searching "Hire Someone To Do My Exam"'/>
      <Features />
      <ContentSectionOne />
      <CallActionSection/>
      <Stats_section/>
      <Content_section_two/>
      <ProcessSection/>
      <ServicesSection
        title="Online Class Service We Offer"
        services={[
          {
            icon: <TimerOutlined />,
            title: "Online Exam",
            desc: "Before your exam, we sit down with your notes and figure out what's actually going to be on it. Then we practice. A lot. Students usually tell us the real test felt easier than our mock ones."
          },
          {
            icon: <SchoolOutlined />,
            title: "Online Class",
            desc: "If you hire us to take my class for you today or early in the morning. Our tutor helps you catch up, then checks in every week, so you stay caught up."
          },
          {
            icon: <HistoryEduOutlined />,
            title: "Online Assignment",
            desc: "Our tutor helps you plan your assignment directly from scratch, helps you plan it out, and reads your draft before it goes in."
          }
        ]}
      />
      <ContentSectionThree/>
      <TestimonialSection/>
    </>
  )
}

export default page
