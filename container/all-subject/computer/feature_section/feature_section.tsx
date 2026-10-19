import React from 'react';
import FeaturesSection from '@/container/All-props-comp/feature_section/feature_sectio';

import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';

const Features = () => {
  const myFeatures = [
    {
      title: "Expert Tutor",
      desc: "Our tutors have computer science degrees and real coding experience. They’ve been where you are and know exactly which topics trip students up.",
      icon: <SchoolOutlinedIcon />,
    },
    {
      title: "Personalized Service",
      desc: "No two students learn the same way. Your tutor adjusts every session to your level, your course, and the parts you find hardest.",
      icon: <PsychologyOutlinedIcon />,
    },
    {
      title: "Confidential and Secure",
      desc: "Your details stay with us. We never share your information with anyone, including your school.",
      icon: <LockOutlinedIcon />,
    },
    {
      title: "Timely Delivery",
      desc: "Your tutor delivers feedback, notes, and practice material well before your deadlines, so you have plenty of time to make changes.",
      icon: <AccessTimeOutlinedIcon />,
    },
    {
      title: "Affordable Rates",
      desc: "Prices made for students, with no hidden fees. Book one session or a package, and your first session is half off.",
      icon: <SavingsOutlinedIcon />,
    },
    {
      title: "Guaranteed Result",
      desc: "We guarantee one thing: you’ll get real, focused help every single session. Most students see their understanding and their grades improve once the concepts click.",
      icon: <EmojiEventsOutlinedIcon />,
    },
    {
      title: "Customized Assistance",
      desc: "Python project, Java lab, or SQL assignment- your tutor guides you through it step by step while you write the code yourself.",
      icon: <SupportAgentOutlinedIcon />,
    }
  ];

  return (
    <FeaturesSection
      mainHeading={<>{"What Makes Our Computer Class Help Different From "}<span>{"the Rest?"}</span></>}
      subText={
        <p>
          {"There are multiple websites that offer the same service as ours. So, what makes us different? Well, it’s our dedication to helping students enjoy stress-free online learning while achieving their desired grades."}
        </p>
      }
      features={myFeatures}
    />
  );
};

export default Features;
