import React from 'react'
import type { Metadata } from 'next'
import OnlineClassHero from '@/container/all-subject/biology/hero_section/page'
import UniSection from '@/container/home/uni_section/uni_section'
import Features from '@/container/all-subject/biology/feature_section/feature_section'
import ContentSectionOne from '@/container/all-subject/biology/Content_section_one/Content_section_one'
import CallActionSection from '@/container/all-subject/biology/call_action/call_acition'
import Stats_section from '@/container/all-subject/biology/stats_section/stats_section'
import Content_section_two from '@/container/all-subject/biology/content_section_two/content_section_two'
import ProcessSection from '@/container/home/process_section/process_section'
import ServicesSection from '@/container/home/service_section/service_section'
import ContentSectionThree from '@/container/all-subject/biology/content_section_three/content_section_three'

// Meta Data Configuration
export const metadata: Metadata = {
  title: "Pay Someone to Do My Online Biology Class | Expert Help",
  description: "Looking for reliable online biology class help? Meet Hire Class Buddy, your affordable and secure platform for expert tutoring support. Get started today!",
  alternates: {
    canonical: "/subjects/biology-class",
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
    </>
  )
}

export default page
