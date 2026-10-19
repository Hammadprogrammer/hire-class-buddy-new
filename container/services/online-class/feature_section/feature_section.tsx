import React from 'react';
import FeaturesSection from '@/container/All-props-comp/feature_section/feature_sectio';

import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';

const Features = () => {
  const myFeatures = [
    {
      title: "Pool of Vetted Experts, Not Freelancers",
      desc: "When you hire class help from us, you get 4598+ tutors who are not just experienced tutors but part of our trusted academic support team. We conduct background checks to make sure they are trustworthy professionals who value academic integrity.",
      icon: <SchoolOutlinedIcon />,
    },
    {
      title: "Well Researched Practise Question",
      desc: "Our tutor creates comprehensive practice questions that align with your coursework. Not random material from the internet, but a real kind of question your professor asks.",
      icon: <CheckCircleOutlineIcon />,
    },
    {
      title: "Preps that Get A or B Grades",
      desc: "We are here to take some of the academic pressure off your shoulders. When taking online classes from us, our tutor helps you from beginning to end, making every session about your class and nobody else.",
      icon: <EmojiEventsOutlinedIcon />,
    },
    {
      title: "100% Confidential",
      desc: "We always take your privacy first. That's why we only ask for information needed to arrange your support, such as information about your course. Your personal information stays private and is not shared with your school or third parties.",
      icon: <LockOutlinedIcon />,
    },
    {
      title: "24/7 Availability",
      desc: "Most of the students think, what happens if they need any help at night? Don't worry! We have a proper crew to answer at any time. You just have to message us, and our support team will take your rest.",
      icon: <SupportAgentOutlinedIcon />,
    },
    {
      title: "Safe & Reliable",
      desc: "Our system is designed with the students in mind. That means no hidden fees, no fake tutors, just honest help.",
      icon: <LockOutlinedIcon />,
    }
  ];

  return (
    <FeaturesSection
      mainHeading={<>{"Why Students Order Last-Minute Online Class Assistance "}<span>{"From Us"}</span></>}
      subText={
        <p>
          {"The reason is simple: you have the flexibility to choose an assignment expert that suits your requirements. We have more than 4598+ experts ready to assist you, whether you need support with a full course or just a specific task. Let's see how we can help."}
        </p>
      }
      features={myFeatures}
    />
  );
};

export default Features;
