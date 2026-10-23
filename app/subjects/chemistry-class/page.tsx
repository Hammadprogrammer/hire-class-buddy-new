import React from 'react'
import type { Metadata } from 'next'
import OnlineClassHero from '@/container/all-subject/chemistry/hero_section/page'
import UniSection from '@/container/home/uni_section/uni_section'
import Features from '@/container/all-subject/chemistry/feature_section/feature_section'
import ContentSectionOne from '@/container/all-subject/chemistry/Content_section_one/Content_section_one'
import CallActionSection from '@/container/all-subject/chemistry/call_action/call_acition'
import Stats_section from '@/container/all-subject/chemistry/stats_section/stats_section'
import Content_section_two from '@/container/all-subject/chemistry/content_section_two/content_section_two'
import ProcessSection from '@/container/home/process_section/process_section'
import ServicesSection from '@/container/home/service_section/service_section'
import ContentSectionThree from '@/container/all-subject/chemistry/content_section_three/content_section_three'
import { TimerOutlined, SchoolOutlined, HistoryEduOutlined } from '@mui/icons-material'

// Meta Data Configuration
export const metadata: Metadata = {
  title: "Can Someone Take My Chemistry Class for Me?",
  description: "If you are looking to pay someone to take your online chemistry class, Hire Class Buddy provides secure and reliable support at affordable rates.",
  alternates: {
    canonical: "/subjects/chemistry-class",
  }
}

const chemistryServices = [
  {
    icon: <TimerOutlined />,
    title: "Online Exam",
    desc: "Our expert professionals look at your past quizzes and syllabus to figure out which problems keep coming up. Then you practice those, timed, until they feel easy. That's how our chemistry exam prep works."
  },
  {
    icon: <SchoolOutlined />,
    title: "Online Class",
    desc: "Every week, our tutor goes over what's coming in your course and explains anything the lecture didn't make clear. Kind of like a lab partner who actually knows the answers."
  },
  {
    icon: <HistoryEduOutlined />,
    title: "Online Assignment",
    desc: "Well, assignments are difficult to handle, especially when it comes to chemistry. Our tutor makes it simple for you, then lets you try the next few. You finish it yourself, and you learn the method along the way."
  }
]

const page = () => {
  return (
    <>
      <OnlineClassHero />
      <UniSection heading="Ultimate Online Exam Solution Across Major Exam Portals"/>
      <Features />
      <ContentSectionOne />
      <CallActionSection/>
      <Stats_section/>
      <Content_section_two/>
      <ProcessSection/>
      <ServicesSection title="Have a Look At Our Service Features" services={chemistryServices}/>
      <ContentSectionThree/>
    </>
  )
}

export default page
