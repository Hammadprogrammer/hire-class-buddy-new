import React from 'react'
import CallAction from "@/container/All-props-comp/call_action/call_acition";


const CallActionSection = () => {
  return (
    <div>
          <CallAction 
      heading={<>Hire Someone to Take My Online Economics Class And Save Big With Us!</>}
      description="Did you know? Thousands of students secure A grades by taking our online economics class and rate us 4.5/5. Our tutors are available to support you around 24/7, and sets the prices that suit the students' budget. So, sign up today and get 50% off your first session."
      btnText="Request a Free Quote Today!"
      btnLink="/contact-us"
    />
    </div>
  )
}

export default CallActionSection
