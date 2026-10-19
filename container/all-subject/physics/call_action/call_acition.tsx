import React from 'react'
import CallAction from "@/container/All-props-comp/call_action/call_acition";

const CallActionSection = () => {
  return (
    <div>
      <CallAction
        heading={<>{"Consult Today & Take 50% Off On Your First "}<span>{"Order Now!"}</span></>}
        description={"Tired of your physics class? Many students feel stuck around the same point, usually when forces and motion turn into energy and momentum. Just tell us a little about your course and where it’s getting hard. We’ll introduce you to a physics tutor this week, and your first session is 50% off."}
        btnText={"Contact Us"}
        btnLink="/contact-us"
      />
    </div>
  )
}

export default CallActionSection
