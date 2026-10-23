import React from 'react'
import type { Metadata } from 'next'
import OnlineClassHero from '@/container/all-subject/history/hero_section/page'
import UniSection from '@/container/home/uni_section/uni_section'
import Features from '@/container/all-subject/history/feature_section/feature_section'
import ContentSectionOne from '@/container/all-subject/history/Content_section_one/Content_section_one'
import CallActionSection from '@/container/all-subject/history/call_action/call_acition'
import Stats_section from '@/container/all-subject/history/stats_section/stats_section'
import Content_section_two from '@/container/all-subject/history/content_section_two/content_section_two'
import ProcessSection from '@/container/home/process_section/process_section'
import ServicesSection from '@/container/home/service_section/service_section'
import ContentSectionThree from '@/container/all-subject/history/content_section_three/content_section_three'
import { TimerOutlined, SchoolOutlined, HistoryEduOutlined } from '@mui/icons-material'

// Meta Data Configuration
export const metadata: Metadata = {
  title: "Pay Someone to Take My Online History Class | 50% Off",
  description: "Looking to hire someone to take your online history class? Get expert tutoring support from Hire Class Buddy and enjoy 50% off your first session.",
  alternates: {
    canonical: "/subjects/history-class",
  }
}

const historyServices = [
  {
    icon: <TimerOutlined />,
    title: "Online Exam",
    desc: "Worried about your history exam? Hire us for exam preparation support, including quizzes and written exams. Our expert tutor helps you identify important topics and practice short answers and essay questions until you can explain them confidently."
  },
  {
    icon: <SchoolOutlined />,
    title: "Online Class",
    desc: "Having trouble balancing your coursework? Our professional history tutor helps you keep up with your online history class. Weekly sessions keep you on top of the readings and give you a place to ask everything you didn't get to ask in class."
  },
  {
    icon: <HistoryEduOutlined />,
    title: "Online Assignment",
    desc: "Old assignment, want to get rid of these problems? No doubt, choosing a topic from scratch and preparing a final draft with proper citations can be a complicated task. That's where our tutors step in, offering guidance throughout the process at an affordable rate."
  }
]

const page = () => {
  return (
    <>
      <OnlineClassHero />
      <UniSection heading="All-in-One Exam Solution Across Major Exam Portal"/>
      <Features />
      <ContentSectionOne />
      <CallActionSection/>
      <Stats_section/>
      <Content_section_two/>
      <ProcessSection/>
      <ServicesSection title="Service We Offer" services={historyServices}/>
      <ContentSectionThree/>
    </>
  )
}

export default page
