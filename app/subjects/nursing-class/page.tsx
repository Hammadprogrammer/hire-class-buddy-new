import React from 'react'
import type { Metadata } from 'next'
import OnlineClassHero from '@/container/all-subject/nursing/hero_section/page'
import UniSection from '@/container/home/uni_section/uni_section'
import Features from '@/container/all-subject/nursing/feature_section/feature_section'
import ContentSectionOne from '@/container/all-subject/nursing/Content_section_one/Content_section_one'
import CallActionSection from '@/container/all-subject/nursing/call_action/call_acition'
import Stats_section from '@/container/all-subject/nursing/stats_section/stats_section'
import Content_section_two from '@/container/all-subject/nursing/content_section_two/content_section_two'
import ProcessSection from '@/container/home/process_section/process_section'
import ServicesSection from '@/container/home/service_section/service_section'
import ContentSectionThree from '@/container/all-subject/nursing/content_section_three/content_section_three'
import { TimerOutlined, SchoolOutlined, HistoryEduOutlined } from '@mui/icons-material'

// Meta Data Configuration
export const metadata: Metadata = {
  title: "Hire Someone to Take My Nursing Exam | Expert Help",
  description: "Searching for someone to help with your nursing exam? Connect with experienced nursing tutors at Hire Class Buddy for reliable, affordable exam preparation.",
  alternates: {
    canonical: "/subjects/nursing-class",
  }
}

const nursingServices = [
  {
    icon: <TimerOutlined />,
    title: "Online Exam",
    desc: "When you need support with an online nursing exam, our experienced tutor comes in handy. We have specialists who provide online exam assistance and ensure your privacy at every single step. We follow your guidelines and ensure accurate solutions are delivered within the exam time frame."
  },
  {
    icon: <SchoolOutlined />,
    title: "Online Class",
    desc: "Are you unable to manage everything, have you missed lectures, or are you stuck on a module? Hire Class Buddy is here with a complete solution. Our tutor catches you up and checks in weekly, so you don't fall behind again."
  },
  {
    icon: <HistoryEduOutlined />,
    title: "Online Assignment",
    desc: "We are here to help you prepare a customized and well-researched assignment with proper sources and nursing diagnoses. You can easily edit and submit your own work."
  }
]

const page = () => {
  return (
    <>
      <OnlineClassHero />
      <UniSection heading="Nursing Precision: Conquering High Stakes Across All Exam Portals"/>
      <Features />
      <ContentSectionOne />
      <CallActionSection/>
      <Stats_section/>
      <Content_section_two/>
      <ProcessSection/>
      <ServicesSection title="Services Included in Our Online Nursing Class" services={nursingServices}/>
      <ContentSectionThree/>
    </>
  )
}

export default page
