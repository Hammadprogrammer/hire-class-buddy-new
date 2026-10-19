import React from 'react'
import StatsSection from '@/container/All-props-comp/stats_section/stats_section'

const Stats_section = () => {
  return (
    <div>
      <StatsSection
        heading={<>{"Did You Ask A Biologist to Do My Online Biology Class for Me? Talk to "}<span>{"Us Today!"}</span></>}
        description={"Are you having a hard time in your biology class and are confused about what to do? You are not alone in worrying; with a hectic schedule, it becomes difficult to handle everything by yourself. So connect with us through a live chat. Our expert will help you find an instant solution and guide you whenever you need help."}
      />
    </div>
  )
}

export default Stats_section
