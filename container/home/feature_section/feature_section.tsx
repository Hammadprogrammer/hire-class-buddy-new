import React from 'react';
import FeaturesSection from '@/container/All-props-comp/feature_section/feature_sectio';

// Icons Import
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import EnhancedEncryptionOutlinedIcon from '@mui/icons-material/EnhancedEncryptionOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';

const Features = () => {
  // Features Data Array
  const myFeatures = [
    {
      title: "Timely Delivery",
      desc: "We understand the importance of time, which is why we set a deadline that ensures the work is completed on time.",
      icon: <SpeedOutlinedIcon />,
    },
    {
      title: "Affordable Pricing",
      desc: "We offer the best price that every student can easily afford.",
      icon: <LocalOfferOutlinedIcon />,
    },
    {
      title: "Guaranteed Privacy",
      desc: "When you hire someone to do your online class, we encrypt the data and don't sell it to others.",
      icon: <EnhancedEncryptionOutlinedIcon />,
    },
    {
      title: "Plagiarism-Free Courses",
      desc: "We provide personalized support for online classes, where we deliver every task and assignment on time while keeping the originality and tailored requirements.",
      icon: <AssignmentTurnedInOutlinedIcon />,
    },
    {
      title: "Experience Tutor",
      desc: "Our experienced online tutor covers 70+ subjects and teaches or studies the subject that exactly matches your course area.",
      icon: <SchoolOutlinedIcon />,
    },
    {
      title: "24/7 Availability",
      desc: "We are the real warriors! We don't say we are here for you; we actually are. In fact, we answer on weekends, holidays, and even during finals week.",
      icon: <HeadsetMicOutlinedIcon />,
    },
  ];

  return (
    <>
      <FeaturesSection 
        mainHeading={<>Get an Advantage From Take My Online Class Support and <span>Make an Impact</span></>}
        subText={
          <>
            <p>
              It is not as easy as it may seem. Many students feel overwhelmed and ask themselves, &ldquo;Can I pay someone to take a class for me?&rdquo; The biggest concern is usually the right academic support, then later the privacy, timely delivery, and so on.
            </p>
            <p>
              For all these reasons, we truly understand the need for dependable support throughout the semester. Our experienced tutor provides personalized guidance depending on the coursework and requirements and acts like a real person to lean on for the rest of the semester.
            </p>
          </>
        }
        features={myFeatures}
      />
    </>
  );
};

export default Features;