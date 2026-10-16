import React from 'react'
import StatsSection from '@/container/All-props-comp/stats_section/stats_section'

const Stats_section = () => {
  return (
    <div>
      <StatsSection
        heading={<>{"Feeling Lost? Talk to a Math Tutor "}<span>{"for Free"}</span></>}
        description={"Sometimes the hardest part is figuring out where to start. Book a free 30-minute call with one of our math tutors. Share your syllabus, your upcoming deadlines, and the topics you’re dreading. Our professional tutor will look at everything and give you an honest plan for the next few weeks: what to focus on, what can wait, and how much help you actually need. There’s no pressure to sign up for anything afterward."}
      />
    </div>
  )
}

export default Stats_section
