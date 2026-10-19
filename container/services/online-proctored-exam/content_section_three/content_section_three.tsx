import React from 'react'
import ContentThree from '@/container/All-props-comp/content_section_three/content_section_three';

const ContentSectionThree = () => {
  const pageData = {
    topHeading: "Students Prefer To Work With Us",
    topDescription: "We provide comprehensive proctored exam help services to ensure your academic success.",
    features: [
      {
        title: "Online Exam Guide",
        text: "HireClassBuddy offers online exam help to students across the globe. We make sure students feel secure, and hence we have developed our very own software, which ensures 100% security while we offer exam assistance. Apart from that, our expert tutors associated with different institutes and subjects ensure top-grade material."
      },
      {
        title: "Online Tutoring Service",
        text: "What students love about our tutoring service is the preparation material we offer. Students who have worked with us are a testament to the quality of our services. Connect with us for the best tutoring service supervised by subject experts. We have PhDs guiding you through all the challenges you have related to any specific subject."
      },
      {
        title: "Online Assignment Help",
        text: "Be it a dissertation, essay, proposal, or just an assignment, our experts make sure to adhere to your university rules and citation guide, which matters most to your score. We ensure you get the best grade when it comes to submitting the assignment. With just a single click, you can get completely original work, ready for submission."
      }
    ]
  };

  return (
    <>
      <ContentThree
        topHeading={pageData.topHeading}
        topDescription={pageData.topDescription}
        features={pageData.features}
      />
    </>
  )
}

export default ContentSectionThree;
