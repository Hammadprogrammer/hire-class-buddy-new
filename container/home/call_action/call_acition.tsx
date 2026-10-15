import React from 'react'
import CallAction from "@/container/All-props-comp/call_action/call_acition";


const CallActionSection = () => {
  return (
    <div>
      <CallAction 
        heading={<>Pay Someone To Take My Class for Me With <span>Half Off the Price</span> on Your First Session</>}
        description="There is no doubt! Not everyone is sure about tutoring. That's completely understandable! But here you can start with a free consultation, where you can tell us about the class, exams, or assignments. If you decide to continue with a tutoring session, you'll get 50% off on your first session."
        btnText="Get A FREE Quote Now"
        btnLink="/contact-us"
      />
    </div>
  )
}

export default CallActionSection
