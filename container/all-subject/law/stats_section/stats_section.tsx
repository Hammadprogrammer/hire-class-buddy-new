import React from 'react'
import StatsSection from '@/container/All-props-comp/stats_section/stats_section'

const Stats_section = () => {
  return (
    <div>
      <StatsSection
        heading={<>{"Hire a Law Tutor and Remove Your Stress. We Are Available For A "}<span>{"Free Call"}</span></>}
        description={"When you work with our law tutor, you’re guided by someone who knows legal reasoning, case analysis, and the IRAC method professors expect. So don’t wait any longer. Book a free 30-minute call and share your syllabus, difficult topics, and any pending assignments. Our tutor will sit down with you and explain exactly where to start."}
      />
    </div>
  )
}

export default Stats_section
