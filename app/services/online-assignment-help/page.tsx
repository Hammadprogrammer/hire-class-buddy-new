import React from 'react'
import type { Metadata } from 'next'
import OnlineClassHero from '@/container/services/online-assignment-help/hero_section/page'
import UniSection from '@/container/home/uni_section/uni_section'
import Features from '@/container/services/online-assignment-help/feature_section/feature_section'
import ContentSectionOne from '@/container/services/online-assignment-help/Content_section_one/Content_section_one'
import CallActionSection from '@/container/services/online-assignment-help/call_action/call_acition'
import Stats_section from '@/container/services/online-assignment-help/stats_section/stats_section'
import Content_section_two from '@/container/services/online-assignment-help/content_section_two/content_section_two'
import ProcessSection from '@/container/home/process_section/process_section'
import ServicesSection from '@/container/home/service_section/service_section'
import ContentSectionThree from '@/container/services/online-assignment-help/content_section_three/content_section_three'
import TestimonialSection from '@/container/services/online-assignment-help/testimonial/testimonial'
import { TimerOutlined, SchoolOutlined, HistoryEduOutlined } from '@mui/icons-material'

// Meta Data Configuration
export const metadata: Metadata = {
  title: "Hire Someone to Do Your Coursework With Expert Support",
  description: "Find an expert online tutor who can help you with your coursework and enjoy 50% off your first session at Hire Class Buddy.",
  alternates: {
    canonical: "/services/online-assignment-help",
  }
}

const page = () => {
  return (
    <>
      <OnlineClassHero />
      <UniSection heading="A Complete Online Class Support Across All Major Exam Platforms"/>
      <Features />
      <ContentSectionOne />
      <CallActionSection/>
      <Stats_section/>
      <Content_section_two/>
      <ProcessSection/>
      <ServicesSection
        title="Explore Our All Class Assitance Services"
        services={[
          {
            icon: <TimerOutlined />,
            title: "Online Exam Prep",
            desc: "Most exams repeat the same kinds of questions in every term. Our tutors know which ones, and they'll walk you through them until the logic makes sense to you. We also do a few timed practice runs, so the real test doesn't feel like a surprise."
          },
          {
            icon: <SchoolOutlined />,
            title: "Online Class Tutoring",
            desc: "One busy week can push you behind in an online class. When that happens, your tutor meets with you once a week, looks at what's due, and goes over the parts you didn't get. It's a lot easier to keep up when someone's checking in."
          },
          {
            icon: <HistoryEduOutlined />,
            title: "Online Assignment Help",
            desc: "Send us your draft, even if it's messy. A tutor who knows the subject will read it and leave honest notes on what works and what doesn't. Then you fix it up and submit it yourself."
          }
        ]}
      />
      <ContentSectionThree/>
      <TestimonialSection/>
    </>
  )
}

export default page
