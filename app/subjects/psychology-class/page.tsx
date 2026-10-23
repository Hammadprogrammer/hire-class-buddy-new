import React from 'react'
import type { Metadata } from 'next'
import OnlineClassHero from '@/container/all-subject/psychology/hero_section/page'
import UniSection from '@/container/home/uni_section/uni_section'
import Features from '@/container/all-subject/psychology/feature_section/feature_section'
import ContentSectionOne from '@/container/all-subject/psychology/Content_section_one/Content_section_one'
import CallActionSection from '@/container/all-subject/psychology/call_action/call_acition'
import Stats_section from '@/container/all-subject/psychology/stats_section/stats_section'
import Content_section_two from '@/container/all-subject/psychology/content_section_two/content_section_two'
import ProcessSection from '@/container/home/process_section/process_section'
import ServicesSection from '@/container/home/service_section/service_section'
import { TimerOutlined, SchoolOutlined, HistoryEduOutlined } from '@mui/icons-material'

// Meta Data Configuration
export const metadata: Metadata = {
  title: "Hire Someone to Take My Psychology Class With Expert Tutors",
  description: "Looking for the best psychology class tutor? Hire Class Buddy provides expert professional help to support you in achieving your dream grades.",
  alternates: {
    canonical: "/subjects/psychology-class",
  }
}

const page = () => {
  return (
    <>
      <OnlineClassHero />
      <UniSection heading="Exam Preparation Support for Every Major Online Platform"/>
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
            desc: "Psychology exams require more attention to the famous theories and applied questions. Our tutor goes over the important theories and terms, and practices them with you until you fully understand each concept and feel prepared for your exam"
          },
          {
            icon: <SchoolOutlined />,
            title: "Online Class",
            desc: "Psychology class requires someone who can help you understand theories with real-world examples, evaluate competing perspectives, and engage critically with classmates. Our expert tutor takes this online course without missing any important lessons, while keeping you updated on class activities."
          },
          {
            icon: <HistoryEduOutlined />,
            title: "Online Assignment",
            desc: "Our psychologist expert help you write papers with proper citations and actual peer-reviewed reviews, construct logical arguments, and ensure your work remains original and aligned with your professor's guidelines."
          }
        ]}
      />
    </>
  )
}

export default page
