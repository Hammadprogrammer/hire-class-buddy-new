import React from 'react'
import CallAction from "@/container/All-props-comp/call_action/call_acition";

const CallActionSection = () => {
  return (
    <div>
      <CallAction
        heading={<>{"Get 50% Off Your First Law "}<span>{"Class Help!"}</span></>}
        description={"Overwhelmed by handling a detailed case brief? We recognise the massive pressure that your online class places on your schedule. Our dedicated tutor will expertly help you manage a single course or an entire semester.  So sign up today and get 50% off your first session. Hurry, book now as this is a limited-time offer."}
        btnText={"Request a Free Quote"}
        btnLink="/contact-us"
      />
    </div>
  )
}

export default CallActionSection
