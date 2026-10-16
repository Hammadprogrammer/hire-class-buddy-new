import React from 'react'
import CallAction from "@/container/All-props-comp/call_action/call_acition";

const CallActionSection = () => {
  return (
    <div>
      <CallAction
        heading={<>{"Pay Someone to Take My Chemistry Class Today And Enjoy 25% Off Your "}<span>{"First Order"}</span></>}
        description={"Ready to stop dreading chemistry? Book your first session with one of our expert tutors and get half off. They’ll go through whatever’s giving you trouble, whether that’s a problem set, a lab report, or next week’s quiz, and explain it until it clicks. Now, it's time to take a good first step toward better grades, without the stress."}
        btnText={"Contact Us"}
        btnLink="/contact-us"
      />
    </div>
  )
}

export default CallActionSection
