import React from 'react'
import type { Metadata } from 'next'
import OnlineClassHero from '@/container/all-subject/physics/hero_section/page'
import UniSection from '@/container/home/uni_section/uni_section'
import Features from '@/container/all-subject/physics/feature_section/feature_section'
import ContentSectionOne from '@/container/all-subject/physics/Content_section_one/Content_section_one'

import CallActionSection from '@/container/all-subject/physics/call_action/call_acition'

import Stats_section from '@/container/all-subject/physics/stats_section/stats_section'

import Content_section_two from '@/container/all-subject/physics/content_section_two/content_section_two'
import ProcessSection from '@/container/home/process_section/process_section'
import ServicesSection from '@/container/home/service_section/service_section'
import ContentSectionThree from '@/container/all-subject/physics/content_section_three/content_section_three'
import { TimerOutlined, SchoolOutlined, HistoryEduOutlined } from '@mui/icons-material'

// Meta Data Configuration
export const metadata: Metadata = {
  title: "Hire Someone to Help With My Online Physics Class",
  description: "Find expert physics class help at Hire Class Buddy and connect with a qualified tutor who fits your learning needs and course requirements.",
  alternates: {
    canonical: "/subjects/physics-class",
  }
}

const physicsServices = [
  {
    icon: <TimerOutlined />,
    title: "Online Exam",
    desc: "We can safely handle every aspect of your online physics exam. We have expert tutors who sit down with you and note everything from the beginning to the end; this way, your grades improve with our online class service."
  },
  {
    icon: <SchoolOutlined />,
    title: "Online Class",
    desc: "We have highly skilled physics class takers with many years of experience in both academic and real-world settings. They handle all of your coursework, making sure you will meet your deadlines and achieve your desired grades."
  },
  {
    icon: <HistoryEduOutlined />,
    title: "Online Assignment",
    desc: "Since every student has different challenges, and between them, making a well-researched and unique assignment is really difficult. Here, our tutor generates an assignment that mainly works for you. Whether you require assistance with a single assignment or continuous support during your online physics course."
  }
]

const page = () => {
  return (
    <>
      <OnlineClassHero />
      <UniSection heading="All-in-One Exam Solution for All Major Exam Portals"/>
      <Features />
      <ContentSectionOne />
      <CallActionSection/>
      <Stats_section/>
      <Content_section_two/>
      <ProcessSection/>
      <ServicesSection title="Key Services We Cover" services={physicsServices}/>
      <ContentSectionThree/>
    </>
  )
}

export default page
