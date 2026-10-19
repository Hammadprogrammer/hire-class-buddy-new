import React from 'react'
import StatsSection from '@/container/All-props-comp/stats_section/stats_section'

const Stats_section = () => {
  return (
    <div>
      <StatsSection
        heading={<>{"Talk to a Business Expert About Your Coursework. Book a Free "}<span>{"Call Now!"}</span></>}
        description={"Share coursework details, requirements, and deadlines. and the topics giving you trouble. Our expert tutor helps you make a plan that stays with you througout your coursework. Then why wait? Book a 30 mins free call and get a chance to upgrade your grades."}
      />
    </div>
  )
}

export default Stats_section
