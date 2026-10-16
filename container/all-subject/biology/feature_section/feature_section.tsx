import React from 'react';
import FeaturesSection from '@/container/All-props-comp/feature_section/feature_sectio';

import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';

const Features = () => {
  const myFeatures = [
    {
      title: "Certified Tutor",
      desc: "Our biology tutors are subject specialists who have studied it, taught it, and explained it a hundred times. They know where students usually get stuck, and they'll make sure you get it right.",
      icon: <SchoolOutlinedIcon />,
    },
    {
      title: "24/7 Assistance",
      desc: "There is no fixed time when biology questions stop coming. Whether it is a late night, early morning, or Sunday afternoon, just message us; our customer support will help you out.",
      icon: <SupportAgentOutlinedIcon />,
    },
    {
      title: "Custom Guidance",
      desc: "Every student has a different learning style, and our tutor understands this, whether it is by drawing or talking it through. They figure out what works for you and build every session around your course and your weak spots.",
      icon: <PsychologyOutlinedIcon />,
    },
    {
      title: "Online Class Help",
      desc: "Need help with homework, lab reports, projects, and weekly tasks. Your tutor helps you understand and plan each task so you can finish it yourself and hand it in on time.",
      icon: <CheckCircleOutlineIcon />,
    },
    {
      title: "Focus on Concept",
      desc: "It's hard to memorise terms without understanding them, so that's why our tutor helps you understand how things like cell processes and genetics actually work, so it sticks past the next test.",
      icon: <LightbulbOutlinedIcon />,
    },
    {
      title: "Cost Efficient",
      desc: "Good help shouldn't cost a fortune. Our prices are made for students, and you only pay for the sessions you need.",
      icon: <SavingsOutlinedIcon />,
    }
  ];

  return (
    <FeaturesSection
      mainHeading={<>{"Explore How Our Biology Class Assistance Supports You at "}<span>{"Every Step"}</span></>}
      subText={
        <p>
          {"Biology can feel like a lot, especially when you're learning it online on your own. Here's how our tutors make it easier, from the first chapter to the final exam."}
        </p>
      }
      features={myFeatures}
    />
  );
};

export default Features;
