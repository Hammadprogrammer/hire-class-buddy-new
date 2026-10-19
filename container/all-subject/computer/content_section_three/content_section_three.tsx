import React from 'react'
import ContentThree from '@/container/All-props-comp/content_section_three/content_section_three';

const ContentSectionThree = () => {
  const pageData = {
    topHeading: "What Services Does a Computer Class Helper Offer You?",
    topDescription: "Our computer exam helpers are always available to assist you. So, share your course information with our expert professionals. They will help you prepare for your exams and work toward achieving your desired A or B grades.",
    features: [
      {
        title: "Online Exam",
        text: "Our computer exam helpers are always available to assist you. So, share your course information with our expert professionals. They will help you prepare for your exams and work toward achieving your desired A or B grades."
      },
      {
        title: "Online Class",
        text: "When you hire someone to help with your online computer class, your computer tutor takes full responsibility for guiding you through every lesson while keeping you updated on your coursework."
      },
      {
        title: "Online Assignment",
        text: "Assignments are part of academic requirements, and they carry significant weight in your overall grades. So, don't hesitate to hire our professionals. They help you manage your assignments with accuracy, precision, and care."
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