import React from 'react'
import type { Metadata } from 'next'
import OnlineClassHero from '@/container/all-subject/economics/hero_section/page'
import UniSection from '@/container/home/uni_section/uni_section'
import Features from '@/container/all-subject/economics/feature_section/feature_section'
import ContentSectionOne from '@/container/all-subject/economics/Content_section_one/Content_section_one'
import CallActionSection from '@/container/all-subject/economics/call_action/call_acition'
import Stats_section from '@/container/all-subject/economics/stats_section/stats_section'
import Content_section_two from '@/container/all-subject/economics/content_section_two/content_section_two'
import ProcessSection from '@/container/home/process_section/process_section'
import ServicesSection from '@/container/home/service_section/service_section'
import ContentSectionThree from '@/container/all-subject/economics/content_section_three/content_section_three'
import { TimerOutlined, SchoolOutlined, HistoryEduOutlined } from '@mui/icons-material'

// Meta Data Configuration
export const metadata: Metadata = {
  title: "Hire Someone to Do Online Econimics Class For You",
  description: "Find the right academic support for your online economics class with Hire Class Buddy and enjoy 50% off your first tutoring session. Get expert help today!",
  alternates: {
    canonical: "/subjects/economics-class",
  }
}

const page = () => {
  return (
    <>
      <OnlineClassHero />
      <UniSection heading="Complete Exam Solution Across All Major Exam Portals"/>
      <Features />
      <ContentSectionOne />
      <CallActionSection/>
      <Stats_section/>
      <Content_section_two/>
      <ProcessSection/>
      <ServicesSection
        title="Online Class Service Key Features"
        services={[
          {
            icon: <TimerOutlined />,
            title: "Online Exam",
            desc: "We offer reliable online exam support where your privacy remains a priority. Our expert tutors help you prepare for exams with affordable guidance aimed at better results."
          },
          {
            icon: <SchoolOutlined />,
            title: "Online Class",
            desc: "Looking for a reliable online class solution? Connect with a skilled tutor who helps you with classwork, discussions, and weekly tasks to ensure you stay on track throughout the semester."
          },
          {
            icon: <HistoryEduOutlined />,
            title: "Online Assignment",
            desc: "Unable to complete the assignment within the given time? Contact us, as we have a professional tutor who completes the assignment with proper reserch that can surely produce better-quality work."
          }
        ]}
      />
      <ContentSectionThree/>
    </>
  )
}

export default page
