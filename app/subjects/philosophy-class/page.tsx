import React from 'react'
import type { Metadata } from 'next'
import OnlineClassHero from '@/container/all-subject/philosophy/hero_section/page'
import UniSection from '@/container/home/uni_section/uni_section'
import Features from '@/container/all-subject/philosophy/feature_section/feature_section'
import ContentSectionOne from '@/container/all-subject/philosophy/Content_section_one/Content_section_one'
import CallActionSection from '@/container/all-subject/philosophy/call_action/call_acition'
import Stats_section from '@/container/all-subject/philosophy/stats_section/stats_section'
import Content_section_two from '@/container/all-subject/philosophy/content_section_two/content_section_two'
import ProcessSection from '@/container/home/process_section/process_section'
import ServicesSection from '@/container/home/service_section/service_section'
import { TimerOutlined, SchoolOutlined, HistoryEduOutlined } from '@mui/icons-material'

// Meta Data Configuration
export const metadata: Metadata = {
  title: "Take My Philosophy Class With Expert Professionals",
  description: "Find the right philosophy class help from the No. 1 online class taker at affordable rates. Get professional support from Hire Class Buddy.",
  alternates: {
    canonical: "/subjects/philosophy-class",
  }
}

const page = () => {
  return (
    <>
      <OnlineClassHero />
      <UniSection heading="All-in-one Exam Solution for All Majors Exam Portals"/>
      <Features />
      <ContentSectionOne />
      <CallActionSection/>
      <Stats_section/>
      <Content_section_two/>
      <ProcessSection/>
      <ServicesSection
        title="Key Services We Offer"
        services={[
          {
            icon: <TimerOutlined />,
            title: "Online Exam",
            desc: "Your exam is coming up, and you are not ready? You can take our physiology class service, where we have verified tutors who have studied and taught physiology to a number of students. Contact us, share your requirements, and get the support you need to achieve your grades."
          },
          {
            icon: <SchoolOutlined />,
            title: "Online Class",
            desc: "With a hectic schedule, these online classes can be difficult to handle. That's why we are committed to connecting you with a reliable and professional tutor in the USA who can help you manage your online class and explain the concepts to you easily."
          },
          {
            icon: <HistoryEduOutlined />,
            title: "Online Assignment",
            desc: "Nowadays, universities have set strict rules for assignments and use different AI checkers to evaluate them. For this reason, students face pressure to prepare original and well-researched assignments. Our expert professionals sit with you and make the assignment according to your requirements."
          }
        ]}
      />
    </>
  )
}

export default page
