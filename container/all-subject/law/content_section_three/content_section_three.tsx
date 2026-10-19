import React from 'react'
import ContentThree from '@/container/All-props-comp/content_section_three/content_section_three';

const ContentSectionThree = () => {
  const pageData = {
    topHeading: "Service We Offer",
    topDescription: "We provide comprehensive law class help services to ensure your academic success.",
    features: [
      {
        title: "Online Exam",
        text: "Our professionals provide expert assistance with all your law assessments to ensure you meet the required academic standards and work toward achieving your desired results."
      },
      {
        title: "Online Class",
        text: "From complex subjects to general law classes, we provide help in taking these subject accurate and timely manner, ensuring that you never miss any important lessons."
      },
      {
        title: "Online Assignment",
        text: "Don't stress over online assignments in your law subject, since our professionals will sit with you, note every parameter, and help you prepare work that is original, well-researched, and aligned with your professor's guidelines."
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