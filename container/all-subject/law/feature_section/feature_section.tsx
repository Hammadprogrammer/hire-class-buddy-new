import React from 'react';
import FeaturesSection from '@/container/All-props-comp/feature_section/feature_sectio';

// Icons Import
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import PriceCheckOutlinedIcon from '@mui/icons-material/PriceCheckOutlined';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';

const Features = () => {
  // Updated Features Data Array for Online Law Class Help
  const myFeatures = [
    {
      title: "American Tutor",
      desc: "Our expert tutor will help you understand the course, answer your questions, and complete your assignment after clearing your doubts.",
      icon: <GavelOutlinedIcon />,
    },
    {
      title: "Affordable Price",
      desc: "We have set the price so that students can easily afford it, which is why there is no upfront cost.",
      icon: <PriceCheckOutlinedIcon />,
    },
    {
      title: "Guaranteed Result",
      desc: "No one can promise grades, but Hire Class Buddy helps you achieve your desired result without unnecessary stress.",
      icon: <VerifiedOutlinedIcon />,
    },
    {
      title: "On-Time Support",
      desc: "We are here to answer you anytime. We provide quick replies and answers to all your queries without any additional charges.",
      icon: <ChatOutlinedIcon />,
    },
    {
      title: "Orginal Work",
      desc: "Our expert tutor offers plagiarism-free work checked by Turnitin. Each piece of assignment includes a full plagiarism report to ensure absolute authenticity.",
      icon: <SavingsOutlinedIcon />,
    },
    {
      title: "Advance Your Online Studies",
      desc: "Is one law course harder than the rest? Or maybe they're all the same. Worry not, we're here to explain you each. Besides general online law class help, Hire Class Buddy has tutors for nearly every area of law.",
      icon: <Diversity3OutlinedIcon />,
    },
  ];

  return (
    <>
      <FeaturesSection
        mainHeading={<>Struggling With Law Class? <span>Here's Why Students Reach Out To Us</span></>}
        subText={
          <p>
            Getting online help has never been simpler. We help you understand how legal rules apply to real situations, brief cases step by step, and build strong arguments.
          </p>
        }
        features={myFeatures}
      />
    </>
  );
};

export default Features;
