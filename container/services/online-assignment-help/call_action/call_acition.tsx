import React from 'react'
import CallAction from "@/container/All-props-comp/call_action/call_acition";


const CallActionSection = () => {
  return (
    <div>
      <CallAction 
        heading={<>Expert Assignment Help Online Houston, Texas is Here to Bring <span>50% Off</span> Your First Session</>}
        description="Visit Hire Class Buddy not simply to get help. But because it may have become difficult to manage on your own. So, why wait? Book your first session today and get a free originality check, along with feedback, on half off your first session."
        btnText="Request a Free Quote Today!"
        btnLink="/contact-us"
      />
    </div>
  )
}

export default CallActionSection
