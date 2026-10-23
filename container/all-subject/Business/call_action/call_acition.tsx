import React from 'react'
import CallAction from "@/container/All-props-comp/call_action/call_acition";


const CallActionSection = () => {
  return (
    <div>
          <CallAction 
      heading={<>Stuck With Your Online Class? Take My Online Business Class For Me and Enjoy 50% Off Your First Session</>}
      description="Try amazing business class service with an expert tutor and improve your grades. In the past few years, we have assisted thousands of students in the process of sucessfullly completely their online classes in a variety of subjects in an effective and efficient manner. So, sign up today as we have limited slots available!"
      btnText="Request a Free Quote"
      btnLink="/contact-us"
    />
    </div>
  )
}

export default CallActionSection
