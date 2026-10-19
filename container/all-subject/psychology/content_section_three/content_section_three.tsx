import React from 'react'
import ContentThree from '@/container/All-props-comp/content_section_three/content_section_three';

const ContentSectionThree = () => {
  const pageData = {
    topHeading: "Service We Offer",
    topDescription: "We offer comprehensive psychology class help services to ensure your academic success.",
    features: [
      {
        title: "Online Exam",
        text: "Psychology exams require more attention to the famous theories and applied questions. Our tutor goes over the important theories and terms, and practices them with you until you fully understand each concept and feel prepared for your exam"
      },
      {
        title: "Online Class",
        text: "Psychology class requires someone who can help you understand theories with real-world examples, evaluate competing perspectives, and engage critically with classmates. Our expert tutor takes this online course without missing any important lessons, while keeping you updated on class activities."
      },
      {
        title: "Online Assignment",
        text: "Our psychologist expert help you write papers with proper citations and actual peer-reviewed reviews, construct logical arguments, and ensure your work remains original and aligned with your professor's guidelines."
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