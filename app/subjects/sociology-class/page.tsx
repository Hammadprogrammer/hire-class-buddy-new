import React from 'react'
import type { Metadata } from 'next'
import OnlineClassHero from '@/container/all-subject/sociology/hero_section/page'
import UniSection from '@/container/home/uni_section/uni_section'
import Features from '@/container/all-subject/sociology/feature_section/feature_section'
import ContentSectionOne from '@/container/all-subject/sociology/Content_section_one/Content_section_one'
import CallActionSection from '@/container/all-subject/sociology/call_action/call_acition'
import Stats_section from '@/container/all-subject/sociology/stats_section/stats_section'
import Content_section_two from '@/container/all-subject/sociology/content_section_two/content_section_two'
import ProcessSection from '@/container/home/process_section/process_section'
import ServicesSection from '@/container/home/service_section/service_section'
import ContentSectionThree from '@/container/all-subject/sociology/content_section_three/content_section_three'
import { TimerOutlined, SchoolOutlined, HistoryEduOutlined } from '@mui/icons-material'

// Meta Data Configuration
export const metadata: Metadata = {
  title: "Take Online Sociology Class Help Without Any Stress",
  description: "Get 100% professional assistance from Hire Class Buddy, which helps you handle every task on time while keeping your wallet stable.",
  alternates: {
    canonical: "/subjects/sociology-class",
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
            desc: "Exams are difficult to handle, especially if it comes with sociology. Our tutor goes over the theories, terms, and thinkers likely to come up, then practices short answers and essay questions with you until they feel easy."
          },
          {
            icon: <SchoolOutlined />,
            title: "Online Class",
            desc: "Sociology class requires critical thinking and the ability to write analytical responses to different questions. Which is why our tutor takes every single class without missing any of them. Helping you understand each one can bring you high grades."
          },
          {
            icon: <HistoryEduOutlined />,
            title: "Online Assignment",
            desc: "Can someone take my sociology assignment? Hire Class Buddy has made it possible by offering you a professional tutor who can help you make an original and well-researched assignment based on your required guidelines and due dates."
          }
        ]}
      />
      <ContentSectionThree/>
    </>
  )
}

export default page
