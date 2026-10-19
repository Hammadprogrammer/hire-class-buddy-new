import React from 'react'
import CallAction from "@/container/All-props-comp/call_action/call_acition";

const CallActionSection = () => {
  return (
    <div>
      <CallAction
        heading={<>{"Get A+ Grades By Simply Asking: Can You Do My Online Course For Me? 50% Off "}<span>{"First Session"}</span></>}
        description={"If you are thinking, you can only get half off on your first session. Wait, there is more! You can get your first assignment done when you book full course help with us. So, if you’ve been meaning to hire online class help, this is an easy way to start."}
        btnText={"Request a Free Quote"}
        btnLink="/contact-us"
      />
    </div>
  )
}

export default CallActionSection
