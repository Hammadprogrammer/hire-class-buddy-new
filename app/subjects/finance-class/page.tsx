import React from 'react'
import type { Metadata } from 'next'
import OnlineClassHero from '@/container/all-subject/finance/hero_section/page'
import UniSection from '@/container/home/uni_section/uni_section'
import Features from '@/container/all-subject/finance/feature_section/feature_section'
import ContentSectionOne from '@/container/all-subject/finance/Content_section_one/Content_section_one'
import CallActionSection from '@/container/all-subject/finance/call_action/call_acition'
import Stats_section from '@/container/all-subject/finance/stats_section/stats_section'
import Content_section_two from '@/container/all-subject/finance/content_section_two/content_section_two'
import ProcessSection from '@/container/home/process_section/process_section'
import ServicesSection from '@/container/home/service_section/service_section'
import ContentSectionThree from '@/container/all-subject/finance/content_section_three/content_section_three'
import { TimerOutlined, SchoolOutlined, HistoryEduOutlined } from '@mui/icons-material'

// Meta Data Configuration
export const metadata: Metadata = {
  title: "Get Expert Help By Taking My Finance Class For Me",
  description: "We have expert tutors helping you get the right support as per your required needs. Limited time offer, get 50% off on your first session.",
  alternates: {
    canonical: "/subjects/finance-class",
  }
}

const page = () => {
  return (
    <>
      <OnlineClassHero />
      <UniSection heading="Finance Exam Preparation Solution for Every Major Online Platform"/>
      <Features />
      <ContentSectionOne />
      <CallActionSection/>
      <Stats_section/>
      <Content_section_two/>
      <ProcessSection/>
      <ServicesSection
        title="Service We Offer"
        services={[
          {
            icon: <TimerOutlined />,
            title: "Online Exam",
            desc: "We have expert finance tutors who've seen just about every kind of exam question out there. They'll look at your old quizzes, figure out which problems your professor likes to repeat, and practice in a timely manner."
          },
          {
            icon: <SchoolOutlined />,
            title: "Online Class",
            desc: "At Hire Class Buddy, our tutor meets with you once a week to go over what's coming up in your class. If a lecture didn't make sense, they'll explain it a different way. If you're behind on any topic, they help you get a sense of it."
          },
          {
            icon: <HistoryEduOutlined />,
            title: "Online Assignment",
            desc: "We have expert tutors who can help with valuation projects, case studies, and long problem sets. They'll help you plan your approach, clear up the confusing parts, and look over your draft before you submit."
          }
        ]}
      />
      <ContentSectionThree/>
    </>
  )
}

export default page
