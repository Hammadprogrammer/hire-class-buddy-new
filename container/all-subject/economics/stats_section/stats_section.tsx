import React from 'react'
import StatsSection from '@/container/All-props-comp/stats_section/stats_section'

const Stats_section = () => {
  return (
    <div>
      <StatsSection
        heading={<>{"Call Our Expert Economist to Help Your Coursework. Talk to Our "}<span>{"Tutor Now!"}</span></>}
        description={"Sometimes you just need someone to look at your syllabus and say, “Start here.” That’s what this call is for. Share your deadlines and the topics giving you trouble, and your tutor will help you make a simple plan. It’s free, and there’s no pressure to sign up afterward."}
      />
    </div>
  )
}

export default Stats_section
