import React from 'react'
import CallAction from "@/container/All-props-comp/call_action/call_acition";

const CallActionSection = () => {
  return (
    <div>
      <CallAction
        heading={<>{"Get Philosophy Class Help From the World's No. 1 Class Taker and Avail 50% Off Your "}<span>{"First Session"}</span></>}
        description={"Most of the students want help with their philosophy class but are confused about one thing: Are these reliable? Well, with us, you don’t need to stress anymore; we have an expert professional ready to handle you everything while offering 50% off your first session. So, let's get started. Share your requirements, credentials, and course details. We will handle everything with immense care."}
        btnText={"Get a Free Quote"}
        btnLink="/contact-us"
      />
    </div>
  )
}

export default CallActionSection
