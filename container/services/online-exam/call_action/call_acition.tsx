import React from 'react'
import CallAction from "@/container/All-props-comp/call_action/call_acition";


const CallActionSection = () => {
  return (
    <div>
      <CallAction 
        heading={<>Don&apos;t Worry: Hire Someone To Take My Exam Today and Get <span>50% Off</span></>}
        description="Talk to us through live chat, call, or message us on WhatsApp to avail this opportunity. We welcome you to get 50% off your first session and start getting the support you need today. So, book with us now before you regret waiting too long. Many of our students have witnessed higher grades after getting academic support from us."
        btnText="Get a quote, no pressure, no obligation!"
        btnLink="/contact-us"
      />
    </div>
  )
}

export default CallActionSection
