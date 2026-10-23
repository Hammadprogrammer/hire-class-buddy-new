import React from 'react'
import CallAction from "@/container/All-props-comp/call_action/call_acition";


const CallActionSection = () => {
  return (
    <div>
          <CallAction
      heading={<>Get 50% Off Your First Biology <span>Tutoring Session</span></>}
      description={"Tell us where you're studying, what's due, and where you are stuck. If you are searching for \"hire someone to take my online biology class,\" Message us today, either on WhatsApp or through a live chat, and stop worrying about low grades. Our students are often happy and satisfied after getting the biology class service from us."}
      btnText="Contact Us"
      btnLink="/contact-us"
    />
    </div>
  )
}

export default CallActionSection
