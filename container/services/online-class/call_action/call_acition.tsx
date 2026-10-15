import React from 'react'
import CallAction from "@/container/All-props-comp/call_action/call_acition";


const CallActionSection = () => {
  return (
    <div>
          <CallAction
      heading={<>Get Paid Online Class Help at Half the Price, Starting <span>This Week</span></>}
      description="Not sure if tutoring is your thing? That's completely normal, and it's why your first session is 50% off. Tell us a bit about your class, what's due, and where you're stuck, and we'll match you with a tutor this week. If it clicks, great. If not, you've only spent half."
      btnText="Contact Us"
      btnLink="/contact-us"
    />
    </div>
  )
}

export default CallActionSection
