import React from 'react'
import CallAction from "@/container/All-props-comp/call_action/call_acition";


const CallActionSection = () => {
  return (
    <div>
          <CallAction 
      heading={<>Limited Time Offer: Get 50% Off Your First Session</>}
      description="There is no good reason to wait any longer. Get started today and let our expert tutor handle all your online test problems. Just tell us your subject and your test date. We'll introduce you to a test preparation tutor this week, where you can avail 50% off on your first session."
      btnText="Request a Free Quote Today!"
      btnLink="/contact-us"
    />
    </div>
  )
}

export default CallActionSection
