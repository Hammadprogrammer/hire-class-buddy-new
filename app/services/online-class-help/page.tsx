import React from 'react'
import type { Metadata } from 'next'
import OnlineClassHero from '@/container/services/online-class/hero_section/page'
import UniSection from '@/container/home/uni_section/uni_section'
import Features from '@/container/services/online-class/feature_section/feature_section'
import ContentSectionOne from '@/container/services/online-class/Content_section_one/Content_section_one'
import CallActionSection from '@/container/services/online-class/call_action/call_acition'
import Stats_section from '@/container/services/online-class/stats_section/stats_section'
import Content_section_two from '@/container/services/online-class/content_section_two/content_section_two'
import ProcessSection from '@/container/home/process_section/process_section'
import ServicesSection from '@/container/home/service_section/service_section'
import ContentSectionThree from '@/container/services/online-class/content_section_three/content_section_three'
import TestimonialSection from '@/container/services/online-class/testimonial/testimonial'
import { TimerOutlined, SchoolOutlined, HistoryEduOutlined } from '@mui/icons-material'

// Meta Data Configuration
export const metadata: Metadata = {
  title: "Pay for Online Class Help With Expert Tutor Support",
  description: "Looking to hire someone to help with your online class? Explore Hire Class Buddy for reliable, affordable tutoring support. Connect with an expert today.",
  alternates: {
    canonical: "/services/online-class-help",
  }
}

const page = () => {
  return (
    <>
      <OnlineClassHero />
      <UniSection heading="Reduce Academic Stress and Hire a Class Expert For All Major Exam Solutions"/>
      <Features />
      <ContentSectionOne />
      <CallActionSection/>
      <Stats_section/>
      <Content_section_two/>
      <ProcessSection/>
      <ServicesSection
        title="Take a Look at Our Services"
        services={[
          {
            icon: <TimerOutlined />,
            title: "Online Exam",
            desc: "Send us your syllabus and past quizzes. Our tutor picks out the topics that keep showing up and builds a couple of timed practice tests from them. By the time the real exam opens, the questions won't look new."
          },
          {
            icon: <SchoolOutlined />,
            title: "Online Class",
            desc: "Have you missed weeks 3 and 4? Our expert tutor goes over those lectures with you in one or two sessions, then you meet once a week after that. Fifteen minutes on a Sunday can save you a lot of stress on a Friday."
          },
          {
            icon: <HistoryEduOutlined />,
            title: "Online Assignment",
            desc: "Paste the prompt, and your tutor explains what it's really asking for. Then you outline it together, you write the draft, and they mark it up with notes before you submit."
          }
        ]}
      />
      <ContentSectionThree/>
      <TestimonialSection/>
    </>
  )
}

export default page
