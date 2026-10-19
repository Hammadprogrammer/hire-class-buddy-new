import React from 'react'
import CallAction from "@/container/All-props-comp/call_action/call_acition";

const CallActionSection = () => {
  return (
    <div>
      <CallAction
        heading={<>{"Limited Time Offer, Avail 50% Off Your First "}<span>{"Sociology Session"}</span></>}
        description={"You know 10000+ students have improved their sociology grades with us, and they rate us 4.5/5. Our expert tutor is available to answer their question 24/7 and put in every single effort to bring the original, well-researched support that helps students achieve better results. So, sign up today and get your first session at half the price."}
        btnText={"Request a FREE Quote Today!"}
        btnLink="/contact-us"
      />
    </div>
  )
}

export default CallActionSection
