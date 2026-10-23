import React from 'react'
import CallAction from "@/container/All-props-comp/call_action/call_acition";


const CallActionSection = () => {
  return (
    <div>
          <CallAction 
      heading={<>Want to Avail 25% OFF? This Is the Right Time to Register for Your Proctored Exam Help. Do Not Miss This Opportunity.</>}
      description="Are you worried about how you are going to tackle your proctored exam? Just give us a shot at it. We offer exclusive discounts for students purchasing for the first time with us."
      btnText="Request a FREE quote today!"
      btnLink="/contact-us"
    />
    </div>
  )
}

export default CallActionSection
