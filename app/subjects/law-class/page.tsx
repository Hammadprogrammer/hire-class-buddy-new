import React from 'react'
import type { Metadata } from 'next'
import OnlineClassHero from '@/container/all-subject/law/hero_section/page'
import UniSection from '@/container/home/uni_section/uni_section'
import Features from '@/container/all-subject/law/feature_section/feature_section'
import ContentSectionOne from '@/container/all-subject/law/Content_section_one/Content_section_one'
import CallActionSection from '@/container/all-subject/law/call_action/call_acition'
import Stats_section from '@/container/all-subject/law/stats_section/stats_section'
import Content_section_two from '@/container/all-subject/law/content_section_two/content_section_two'
import ProcessSection from '@/container/home/process_section/process_section'
import ServicesSection from '@/container/home/service_section/service_section'
import ContentSectionThree from '@/container/all-subject/law/content_section_three/content_section_three'
import { TimerOutlined, SchoolOutlined, HistoryEduOutlined } from '@mui/icons-material'

// Meta Data Configuration
export const metadata: Metadata = {
  title: "Pay Someone to Take Your Online Law Class and Ace Your Grades",
  description: "Online law classes are difficult to manage. That's why we have multiple professionals to help you with your coursework while helping you achieve better grades.",
  alternates: {
    canonical: "/subjects/law-class",
  }
}

const lawServices = [
  {
    icon: <TimerOutlined />,
    title: "Online Exam",
    desc: "Our professionals provide expert assistance with all your law assessments to ensure you meet the required academic standards and work toward achieving your desired results."
  },
  {
    icon: <SchoolOutlined />,
    title: "Online Class",
    desc: "From complex subjects to general law classes, we provide help in taking these subject accurate and timely manner, ensuring that you never miss any important lessons."
  },
  {
    icon: <HistoryEduOutlined />,
    title: "Online Assignment",
    desc: "Don't stress over online assignments in your law subject, since our professionals will sit with you, note every parameter, and help you prepare work that is original, well-researched, and aligned with your professor's guidelines."
  }
]

const page = () => {
  return (
    <>
      <OnlineClassHero />
      <UniSection heading="Complete Online Exam Solutions for All Your Needs in One Place"/>
      <Features />
      <ContentSectionOne />
      <CallActionSection/>
      <Stats_section/>
      <Content_section_two/>
      <ProcessSection/>
      <ServicesSection title="Service We Offer" services={lawServices}/>
      <ContentSectionThree/>
    </>
  )
}

export default page
