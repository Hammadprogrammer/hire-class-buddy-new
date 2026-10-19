import React from 'react'
import StatsSection from '@/container/All-props-comp/stats_section/stats_section'

const Stats_section = () => {
  return (
    <div>
      <StatsSection
        heading={<>{"Philosophy Class Help, Ready to Guide You "}<span>{"to Success"}</span></>}
        description={"Have you ever read a page of Kant and realized you have no idea what you just read? Well, you’re not alone. That’s exactly where an online philosophy tutor helps. We know how to break down those heavy texts, find the main point, and explain it in simple words. So, why not start with a free 30-minute call? Just send us your syllabus, the readings you’re stuck on, and any essays that are due soon. Your tutor will go through it all with you and tell you where to begin."}
      />
    </div>
  )
}

export default Stats_section
