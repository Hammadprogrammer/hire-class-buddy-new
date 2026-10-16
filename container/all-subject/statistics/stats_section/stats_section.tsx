import React from 'react'
import StatsSection from '@/container/All-props-comp/stats_section/stats_section'

const Stats_section = () => {
  return (
    <div>
      <StatsSection
        heading={<>{"Don’t Let Statistics Drag Down Your GPA. Talk to a "}<span>{"Tutor Free!"}</span></>}
        description={"Almost every student is confuse on where to start with a statistics course. Don't worry, we are here to support you throughout your coursework. Book a free 30-minute call. Show your syllabus and upcoming deadlines, and our expert tutor will help you figure out what to focus on first. You’ll walk away with a clear plan. No commitment, no pressure."}
      />
    </div>
  )
}

export default Stats_section
