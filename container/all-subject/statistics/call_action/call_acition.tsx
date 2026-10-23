import React from 'react'
import CallAction from "@/container/All-props-comp/call_action/call_acition";


const CallActionSection = () => {
  return (
    <div>
          <CallAction 
      heading={<>Avail a Flat 50% Discount on Your First Statistics Session</>}
      description="Stuck on hypothesis testing or lost in your SPSS output? Most of the students are facing the same issue. So, talk to us through a live chat or call us directly. Share your course details and what’s confusing you. We’ll set you up with a statistics tutor this week, and your first session is 50% off."
      btnText='Request a FREE Quote'
      btnLink="/contact-us"
    />
    </div>
  )
}

export default CallActionSection
