import React from 'react'
import StatsSection from '@/container/All-props-comp/stats_section/stats_section'

const Stats_section = () => {
  return (
    <div>
      <StatsSection 
        heading={<>Trying to Hire Someone To Take My Class? Our <span>Expert Tutors</span> Are Just a Message Away</>}
        description="Now you might be worried about how to begin! Here, you just have to sign up and tell us your syllabus, stats, or homework you are stuck on. We'll match you with the best online class tutor who can help you understand pending coursework and the tests that are expected to come. Let's start a chat, and we'll provide a quote before committing to anything."
      />
    </div>
  )
}

export default Stats_section

