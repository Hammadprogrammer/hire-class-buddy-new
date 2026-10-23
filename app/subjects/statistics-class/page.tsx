import React from 'react'
import type { Metadata } from 'next'
import OnlineClassHero from '@/container/all-subject/statistics/hero_section/page'
import UniSection from '@/container/home/uni_section/uni_section'
import Features from '@/container/all-subject/statistics/feature_section/feature_section'
import ContentSectionOne from '@/container/all-subject/statistics/Content_section_one/Content_section_one'
import CallActionSection from '@/container/all-subject/statistics/call_action/call_acition'
import Stats_section from '@/container/all-subject/statistics/stats_section/stats_section'
import Content_section_two from '@/container/all-subject/statistics/content_section_two/content_section_two'
import ProcessSection from '@/container/home/process_section/process_section'
import ServicesSection from '@/container/home/service_section/service_section'
import ContentSectionThree from '@/container/all-subject/statistics/content_section_three/content_section_three'
import { TimerOutlined, SchoolOutlined, HistoryEduOutlined } from '@mui/icons-material'

// Meta Data Configuration
export const metadata: Metadata = {
  title: "Hire the Best Statistics Expert for Your Online Class",
  description: "Are you looking for someone to help with your online statistics class? Connect with us, and we'll help you find the right tutor based on your needs.",
  alternates: {
    canonical: "/subjects/statistics-class",
  }
}

const statisticsServices = [
  {
    icon: <TimerOutlined />,
    title: "Online Exam",
    desc: "This might be difficult to prepare for an exam, particularly if you have to deal with everything on your own. Here we deliver all exam assistance while ensuring all your credentials remain safe and secure."
  },
  {
    icon: <SchoolOutlined />,
    title: "Online Class",
    desc: "It can be very complex to keep up with a whole online statistics course, especially if you have to deal with quizzes, assignments, and tests at a time. We can help you do your online statistics class for you, taking care of your particular difficulties and eventually promoting your success."
  },
  {
    icon: <HistoryEduOutlined />,
    title: "Online Assignment",
    desc: "We know every student is unique in their own terms; for this reason, we deliver customized assignment writing services. We are here to help you achieve A grades with well-researched assignment services."
  }
]

const page = () => {
  return (
    <>
      <OnlineClassHero />
      <UniSection heading="Statistics Exam Preparation Across All Major Online Portals"/>
      <Features />
      <ContentSectionOne />
      <CallActionSection/>
      <Stats_section/>
      <Content_section_two/>
      <ProcessSection/>
      <ServicesSection title="Services We Offer In Our Online Class" services={statisticsServices}/>
      <ContentSectionThree/>
    </>
  )
}

export default page
