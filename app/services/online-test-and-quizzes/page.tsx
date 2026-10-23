import React from 'react'
import type { Metadata } from 'next'
import OnlineClassHero from '@/container/services/online-quiz-test/hero_section/page'
import UniSection from '@/container/home/uni_section/uni_section'
import Features from '@/container/services/online-quiz-test/feature_section/feature_section'

import ContentSectionOne from '@/container/services/online-quiz-test/Content_section_one/Content_section_one'

import CallActionSection from '@/container/services/online-quiz-test/call_action/call_acition'
import Stats_section from '@/container/services/online-quiz-test/stats_section/stats_section'
import Content_section_two from '@/container/services/online-quiz-test/content_section_two/content_section_two'
import ProcessSection from '@/container/home/process_section/process_section'
import ServicesSection from '@/container/home/service_section/service_section'
import ContentSectionThree from '@/container/services/online-quiz-test/content_section_three/content_section_three'
import TestimonialSection from '@/container/services/online-quiz-test/testimonial/testimonial'
import { TimerOutlined, SchoolOutlined, HistoryEduOutlined } from '@mui/icons-material'

export const metadata: Metadata = {
  title: "Hire Someone to Take a Test for You With Expert Support",
  description: "Looking for online test help? Get expert support from skilled tutors available when you need help with difficult topics, test preparation, and deadlines.",
  alternates: {
    canonical: "/services/online-test-and-quizzes",
  }
}

const services = [
  {
    icon: <TimerOutlined />,
    title: "Online Exam",
    desc: "We provide extensive professional support for your online exam. If you are looking to hire someone to take your online exam for you, this place is made for you. We have thousands of subject specialists who can help you understand difficult topics while ensuring all your information stays private."
  },
  {
    icon: <SchoolOutlined />,
    title: "Online Class",
    desc: "Our experts are ready to tackle your every class with equal precision and efficiency, regardless of how you choose to contact us. We provide personalized academic support, explain difficult topics, and give guidelines to help you stay on track with your classes."
  },
  {
    icon: <HistoryEduOutlined />,
    title: "Online Assignment",
    desc: "Assignments can be tough to handle, which is why we have a number of tutors available to help with your assignments, making sure they are original and well-researched to help you achieve better results."
  }
]

const page = () => {
  return (
    <>
      <OnlineClassHero />
      <UniSection heading="Looking for All-in-One Exam Support? Get Expert Test Help From Hire Class Buddy"/>
      <Features />
      <ContentSectionOne />
      <CallActionSection/>
      <Stats_section/>
      <Content_section_two/>
      <ProcessSection/>
      <ServicesSection title="Service We Offer" services={services}/>
      <ContentSectionThree/>
      <TestimonialSection/>
    </>
  )
}

export default page
