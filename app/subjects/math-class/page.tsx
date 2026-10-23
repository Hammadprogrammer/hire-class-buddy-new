import React from 'react'
import type { Metadata } from 'next'
import OnlineClassHero from '@/container/all-subject/math/hero_section/page'
import UniSection from '@/container/home/uni_section/uni_section'
import Features from '@/container/all-subject/math/feature_section/feature_section'
import ContentSectionOne from '@/container/all-subject/math/Content_section_one/Content_section_one'
import CallActionSection from '@/container/all-subject/math/call_action/call_acition'
import Stats_section from '@/container/all-subject/math/stats_section/stats_section'
import Content_section_two from '@/container/all-subject/math/content_section_two/content_section_two'
import ProcessSection from '@/container/home/process_section/process_section'
import ServicesSection from '@/container/home/service_section/service_section'
import ContentSectionThree from '@/container/all-subject/math/content_section_three/content_section_three'
import { TimerOutlined, SchoolOutlined, HistoryEduOutlined } from '@mui/icons-material'

// Meta Data Configuration
export const metadata: Metadata = {
  title: "Affordable Online Algebra Class Help You Can Trust",
  description: "Get affordable online algebra class help from Hire Class Buddy. Our expert tutors provide reliable support with assignments, quizzes, and exams.",
  alternates: {
    canonical: "/subjects/math-class",
  }
}

const mathServices = [
  {
    icon: <TimerOutlined />,
    title: "Online Exam",
    desc: "You must be thinking, who will help me prepare for my exam smoothly? The answer is simple: we have onboarded expert tutors who specialize in teaching difficult concepts and providing accurate and timely explanations to problems that you are unable to solve on your own."
  },
  {
    icon: <SchoolOutlined />,
    title: "Online Class",
    desc: "With so many classes, quizzes, and assignments, it can be impossible to manage them all at once. And that's why students start looking for someone to help with their online algebra class. That’s why we have personalized online class support, where a real tutor guides you through lessons and helps you stay on top of your coursework."
  },
  {
    icon: <HistoryEduOutlined />,
    title: "Online Assignment",
    desc: "A well-written assignment can easily increase your grades from B to A. That's why thousands of students search for phrases like “pay someone to do my online math class for me”. And we are also one of those service providers who can easily skyrocket your grades with a customized and well-researched solution."
  }
]

const page = () => {
  return (
    <>
      <OnlineClassHero />
      <UniSection heading="Complete Online Exam Solution Across Major Exam Portals"/>
      <Features />
      <ContentSectionOne />
      <CallActionSection/>
      <Stats_section/>
      <Content_section_two/>
      <ProcessSection/>
      <ServicesSection title="Service We Offer" services={mathServices}/>
      <ContentSectionThree/>
    </>
  )
}

export default page
