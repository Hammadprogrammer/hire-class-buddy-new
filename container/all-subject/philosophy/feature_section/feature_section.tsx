import React from 'react';
import FeaturesSection from '@/container/All-props-comp/feature_section/feature_sectio';

import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';

const Features = () => {
  const myFeatures = [
    {
      title: "Professional Tutor",
      desc: "We have professional tutors who are dedicated philosophy experts and fully understand the subject. So, if you have any questions about metaphysics, ontology, or ethics and moral philosophy, they will help you manage your online class.",
      icon: <SchoolOutlinedIcon />,
    },
    {
      title: "24/7 Help",
      desc: "Are you looking for anytime support? Yes, we do. Our round-the-clock online philosophy class assistance is always available whenever you need it.",
      icon: <SupportAgentOutlinedIcon />,
    },
    {
      title: "Student-Friendly Prices",
      desc: "Here, our prices don't push your budget. We design our philosophy tutoring programs at reasonable prices without sacrificing outcomes.",
      icon: <SavingsOutlinedIcon />,
    },
    {
      title: "100% Confidential",
      desc: "We are committed to handling every philosophy class with complete discretion while ensuring your personal information and course details are kept secure and confidential.",
      icon: <LockOutlinedIcon />,
    },
    {
      title: "Weekly sessions",
      desc: "Our services are built for students who need regular assistance. Our tutors can meet with you every week to go over readings and course materials, so nothing becomes heavy for you.",
      icon: <EventNoteOutlinedIcon />,
    }
  ];

  return (
    <FeaturesSection
      mainHeading={<>{"Choose Us as Your Academic Partner and See What Else We Do "}<span>{"For You"}</span></>}
      subText={
        <p>
          {"We have specialized tutors with years of experience teaching students across multiple subjects. We do our best to make philosophy class stress-free, while ensuring your academic target is accomplished with confidence, precision, and reliable support."}
        </p>
      }
      features={myFeatures}
    />
  );
};

export default Features;
