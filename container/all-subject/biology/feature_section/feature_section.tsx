import React from 'react';
import FeaturesSection from '@/container/All-props-comp/feature_section/feature_sectio';

// Icons Import
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
import BiotechOutlinedIcon from '@mui/icons-material/BiotechOutlined';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';

const Features = () => {
  // Updated Features Data Array for Biology Class Help Services
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
      icon: <ComputerOutlinedIcon />,
    },
    {
      title: "Focus on Concept",
      desc: "It's hard to memorise terms without understanding them, so that's why our tutor helps you understand how things like cell processes and genetics actually work, so it sticks past the next test.",
      icon: <BiotechOutlinedIcon />,
    },
    {
      title: "Cost Efficient",
      desc: "Good help shouldn't cost a fortune. Our prices are made for students, and you only pay for the sessions you need.",
      icon: <SavingsOutlinedIcon />,
    },
  ];

  return (
    <>
      <FeaturesSection
        mainHeading={<>Affordable Biology Class Help That Actually <span>Makes a Difference</span></>}
        subText={
          <p>
            Let's be honest, a lot of biology help online feels a bit sketchy. We're different. At Hire Class Buddy, our tutor sits down with you and goes through whatever's giving you trouble. Maybe it's photosynthesis, maybe it's a lab report that's due Friday, or do you need any online biology homework help at 11 p.m.? Message us. Someone will get back to you. Our prices are made for students, not companies, and we don't leave you hanging when a deadline's close. You still do the work. We just make sure you're not stuck on your own.
          </p>
        }
        features={myFeatures}
      />
    </>
  );
};

export default Features;
