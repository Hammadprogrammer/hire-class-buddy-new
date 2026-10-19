import React from 'react'
import StatsSection from '@/container/All-props-comp/stats_section/stats_section'

const Stats_section = () => {
  return (
    <div>
      <StatsSection
        heading={<>{"Request Us To Take My Proctored Exam For Me & Be "}<span>{"At Ease!"}</span></>}
        description={"We are operational 24/7, guaranteeing 100% confidentiality and security when it comes to taking your proctored exam. Do not worry; our tutors and online proctored exam takers make sure they get you through it all the way."}
      />
    </div>
  )
}

export default Stats_section
