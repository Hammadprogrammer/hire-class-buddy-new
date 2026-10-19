import React from 'react';
import FeaturesSection from '@/container/All-props-comp/feature_section/feature_sectio';

import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const Features = () => {
  const myFeatures = [
    {
      title: "American Tutor",
      desc: "Our expert tutor will help you understand the course, answer your questions, and complete your assignment after clearing your doubts.",
      icon: <SchoolOutlinedIcon />,
    },
    {
      title: "Affordable Price",
      desc: "We have set the price so that students can easily afford it, which is why there is no upfront cost.",
      icon: <SavingsOutlinedIcon />,
    },
    {
      title: "Guaranteed Result",
      desc: "No one can promise grades, but Hire Class Buddy helps you achieve your desired result without unnecessary stress.",
      icon: <EmojiEventsOutlinedIcon />,
    },
    {
      title: "On-Time Support",
      desc: "We are here to answer you anytime. We provide quick replies and answers to all your queries without any additional charges.",
      icon: <SupportAgentOutlinedIcon />,
    },
    {
      title: "Orginal Work",
      desc: "Our expert tutor offers plagiarism-free work checked by Turnitin. Each piece of assignment includes a full plagiarism report to ensure absolute authenticity.",
      icon: <CheckCircleOutlineIcon />,
    }
  ];

  return (
    <FeaturesSection
      mainHeading={<>{"Struggling With Law Class? Here’s Why Students Reach Out "}<span>{"To Us"}</span></>}
      subText={
        <p>
          {"Getting online help has never been simpler. We help you understand how legal rules apply to real situations, brief cases step by step, and build strong arguments. So if you’re looking for online law class help, see exactly what happens after you reach out to us."}
        </p>
      }
      features={myFeatures}
    />
  );
};

export default Features;
