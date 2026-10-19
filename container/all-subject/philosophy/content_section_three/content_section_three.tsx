import React from 'react'
import ContentThree from '@/container/All-props-comp/content_section_three/content_section_three';

const ContentSectionThree = () => {
  const pageData = {
    topHeading: "Key Services We Offer",
    topDescription: "We provide comprehensive philosophy class help services to ensure your academic success.",
    features: [
      {
        title: "Online Exam",
        text: "Your exam is coming up, and you are not ready? You can take our physiology class service, where we have verified tutors who have studied and taught physiology to a number of students. Contact us, share your requirements, and get the support you need to achieve your grades."
      },
      {
        title: "Online Class",
        text: "With a hectic schedule, these online classes can be difficult to handle. That's why we are committed to connecting you with a reliable and professional tutor in the USA who can help you manage your online class and explain the concepts to you easily."
      },
      {
        title: "Online Assignment",
        text: "Nowadays, universities have set strict rules for assignments and use different AI checkers to evaluate them. For this reason, students face pressure to prepare original and well-researched assignments. Our expert professionals sit with you and make the assignment according to your requirements."
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
