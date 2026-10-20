import React from 'react'
import type { Metadata } from 'next'
import OnlineClassHero from '@/container/services/online-proctored-exam/hero_section/page'
import UniSection from '@/container/home/uni_section/uni_section'
import Features from '@/container/services/online-proctored-exam/feature_section/feature_section'
import ContentSectionOne from '@/container/services/online-proctored-exam/Content_section_one/Content_section_one'
import CallActionSection from '@/container/services/online-proctored-exam/call_action/call_acition'
import Stats_section from '@/container/services/online-proctored-exam/stats_section/stats_section'
import Content_section_two from '@/container/services/online-proctored-exam/content_section_two/content_section_two'
import ProcessSection from '@/container/home/process_section/process_section'
import ServicesSection from '@/container/home/service_section/service_section'
import ContentSectionThree from '@/container/services/online-proctored-exam/content_section_three/content_section_three'
import TestimonialSection from '@/container/services/online-proctored-exam/testimonial/testimonial'

// Meta Data Configuration
export const metadata: Metadata = {
  title: "Take My Proctored Exam For Me With 100% Confidentiality",
  description: "Are you looking to pay someone to take my proctored exam? Pay to HireClassBuddy and we will make sure your proctored exams are secure and smooth.",
  alternates: {
    canonical: "/services/online-proctored-exam",
  }
}

const page = () => {
  return (
    <>
      <OnlineClassHero />
      <UniSection/>
      <Features />
      <ContentSectionOne />
      <CallActionSection/>
      <Stats_section/>
      <Content_section_two/>
      <ProcessSection/>
      <ServicesSection/>
      <ContentSectionThree/>
      <TestimonialSection/>
    </>
  )
}

export default page
