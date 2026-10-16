import React from 'react'
import CallAction from "@/container/All-props-comp/call_action/call_acition";

const CallActionSection = () => {
  return (
    <div>
      <CallAction
        heading={<>{"Consult Today & Get 50% Off on "}<span>{"Your Order"}</span></>}
        description={"Do you struggle to keep up with your coursework? Many students look to hire someone to do their online history class, and we're here to help with expert guidance. We offer extensive history class support at 50% off on the first session. So just tell little about your course and what’s on your mind, and we’ll introduce you to a history tutor this week."}
        btnText={"Request A Free Quote"}
        btnLink="/contact-us"
      />
    </div>
  )
}

export default CallActionSection
