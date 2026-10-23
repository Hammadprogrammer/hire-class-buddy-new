import React from 'react'
import CallAction from "@/container/All-props-comp/call_action/call_acition";


const CallActionSection = () => {
  return (
    <div>
          <CallAction 
      heading={<>Consult Today & Get 50% Off on Your Order</>}
      description="Most students want help with their CS class but have one big question: Is this reliable? Well, with us, you don’t need to worry. We have experienced tutors ready to help, and your first session is 50% off. So let’s book your order, share your course details and what’s due, and we’ll match you with the right tutor."
      btnText="Get a FREE Quote"
      btnLink="/contact-us"
    />
    </div>
  )
}

export default CallActionSection
