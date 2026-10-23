import React from 'react'
import type { Metadata } from 'next'
import OnlineClassHero from '@/container/all-subject/computer/hero_section/page'
import UniSection from '@/container/home/uni_section/uni_section'
import Features from '@/container/all-subject/computer/feature_section/feature_section'
import ContentSectionOne from '@/container/all-subject/computer/Content_section_one/Content_section_one'
import CallActionSection from '@/container/all-subject/computer/call_action/call_acition'
import Stats_section from '@/container/all-subject/computer/stats_section/stats_section'
import Content_section_two from '@/container/all-subject/computer/content_section_two/content_section_two'
import ProcessSection from '@/container/home/process_section/process_section'
import ServicesSection from '@/container/home/service_section/service_section'
import { TimerOutlined, SchoolOutlined, HistoryEduOutlined } from '@mui/icons-material'

// Meta Data Configuration
export const metadata: Metadata = {
  title: "Hire Someone to Take My Computer Class Online and Boost Grades",
  description: "Whenever you need help with your online computer class, contact us. We help you find a professional tutor who makes computer classes easier for you.",
  alternates: {
    canonical: "/subjects/computer-class",
  }
}

const page = () => {
  return (
    <>
      <OnlineClassHero />
      <UniSection heading="Complete Online Exam Solution Across All Major Exam Portals"/>
      <Features />
      <ContentSectionOne />
      <CallActionSection/>
      <Stats_section/>
      <Content_section_two/>
      <ProcessSection/>
      <ServicesSection
        title="What Services Does a Computer Class Helper Offer You?"
        services={[
          {
            icon: <TimerOutlined />,
            title: "Online Exam",
            desc: "Our computer exam helpers are always available to assist you. So, share your course information with our expert professionals. They will help you prepare for your exams and work toward achieving your desired A or B grades."
          },
          {
            icon: <SchoolOutlined />,
            title: "Online Class",
            desc: "When you hire someone to help with your online computer class, your computer tutor takes full responsibility for guiding you through every lesson while keeping you updated on your coursework."
          },
          {
            icon: <HistoryEduOutlined />,
            title: "Online Assignment",
            desc: "Assignments are part of academic requirements, and they carry significant weight in your overall grades. So, don't hesitate to hire our professionals. They help you manage your assignments with accuracy, precision, and care."
          }
        ]}
      />
    </>
  )
}

export default page
