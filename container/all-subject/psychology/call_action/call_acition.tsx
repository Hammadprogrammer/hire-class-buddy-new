import React from 'react'
import CallAction from "@/container/All-props-comp/call_action/call_acition";

const CallActionSection = () => {
  return (
    <div>
      <CallAction
        heading={<>{"Limited Time Offer: Get 50% Off Your First "}<span>{"Psychology Session"}</span></>}
        description={"Did you know 1000+ students have improved their psychology grades with us and rate us 4.5/5? Our tutors are available 24/7 and put real effort into helping you produce original, well-researched work. So sign up today and get your first session at half the price."}
        btnText={"Request a FREE Quote Today!"}
        btnLink="/contact-us"
      />
    </div>
  )
}

export default CallActionSection
