import React from 'react'
import CallAction from "@/container/All-props-comp/call_action/call_acition";

const CallActionSection = () => {
  return (
    <div>
      <CallAction
        heading={<>{"Hire Someone Today and Get 50% Off on Your "}<span>{"First Session"}</span></>}
        description={"Our professional tutors are ready to support you. We have a number of tutors who can help you with your online class, quizzes, and even assignments. Good news: there is 50% off your first session, so you can get the support you need at a better price. Share your requirements and coursework details with us, and we will connect you with the expert professionals on the same day or the following day."}
        btnText={"Request a Free Quote"}
        btnLink="/contact-us"
      />
    </div>
  )
}

export default CallActionSection
