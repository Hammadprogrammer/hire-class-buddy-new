import React from 'react'
import CallAction from "@/container/All-props-comp/call_action/call_acition";


const CallActionSection = () => {
  return (
    <div>
          <CallAction 
      heading={<>Confused By Exam Platform? Get 50% Off and Excel in Your Class Today</>}
      description="Many students struggle with online math platforms, making it difficult to decide whether to handle everything on their own or hire a tutor for help. Why not try out a tutoring service at half the price? Tell us which course you’re taking, what’s coming up, and which topics are giving you trouble. We’ll match you with a math tutor this week, and your first session is 50% off. If it helps, great. If not, you’ve only spent half the money."
      btnLink="/contact-us"
    />
    </div>
  )
}

export default CallActionSection
