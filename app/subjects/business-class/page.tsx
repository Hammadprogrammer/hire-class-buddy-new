import React from 'react'
import type { Metadata } from 'next'
import OnlineClassHero from '@/container/all-subject/Business/hero_section/page'
import UniSection from '@/container/home/uni_section/uni_section'
import Features from '@/container/all-subject/Business/feature_section/feature_section'
import ContentSectionOne from '@/container/all-subject/Business/Content_section_one/Content_section_one'
import CallActionSection from '@/container/all-subject/Business/call_action/call_acition'
import Stats_section from '@/container/all-subject/Business/stats_section/stats_section'
import Content_section_two from '@/container/all-subject/Business/content_section_two/content_section_two'
import ProcessSection from '@/container/home/process_section/process_section'
import ServicesSection from '@/container/home/service_section/service_section'
import ContentSectionThree from '@/container/all-subject/Business/content_section_three/content_section_three'
import { TimerOutlined, SchoolOutlined, HistoryEduOutlined } from '@mui/icons-material'

// Meta Data Configuration
export const metadata: Metadata = {
  title: "Pay Someone to Take My Business Class With Reliable Expert Assistance",
  description: "Looking for the perfect online business class tutor? Visit Hire Class Buddy, the ultimate site to help you with your entire coursework.",
  alternates: {
    canonical: "/subjects/business-class",
  }
}

const page = () => {
  return (
    <>
      <OnlineClassHero />
      <UniSection heading="Complete Exam Preparation Across All Major Exam Portals"/>
      <Features />
      <ContentSectionOne />
      <CallActionSection/>
      <Stats_section/>
      <Content_section_two/>
      <ProcessSection/>
      <ServicesSection
        title="What We Do For You"
        services={[
          {
            icon: <TimerOutlined />,
            title: "Online Exam",
            desc: "Exams have a huge weightage in your course, and worrying about them is natural. We recommend getting professional help with your online exam preparation. With our take my online business law class service, you can prepare for your exams with expert guidance and less stress."
          },
          {
            icon: <SchoolOutlined />,
            title: "Online Class",
            desc: "Hire Class Buddy offers its service at pocket-friendly rates, and we make sure our students are satisfied with the support they receive. That is why we have onboarded subject specialists to help with your business class anytime."
          },
          {
            icon: <HistoryEduOutlined />,
            title: "Online Assignment",
            desc: "Business class assignments can be tiring and take a lot of time due to other classes and test obligations. Consider us, knowing there is a professional tutor who may help complete assignment work while making it original and well-researched."
          }
        ]}
      />
      <ContentSectionThree/>
    </>
  )
}

export default page
