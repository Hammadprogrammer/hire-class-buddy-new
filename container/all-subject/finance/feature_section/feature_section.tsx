import React from 'react';
import FeaturesSection from '@/container/All-props-comp/feature_section/feature_sectio';

import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import HistoryEduOutlinedIcon from '@mui/icons-material/HistoryEduOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';

const Features = () => {
  const myFeatures = [
    {
      title: "On-Time Delivery",
      desc: "We know how much your time matters. That's why our tutors plan sessions and feedback around your deadlines, whether it's a quiz, an assignment, or an exam. You get what you need early, with enough time left to make changes and not panic the night before.",
      icon: <AccessTimeOutlinedIcon />,
    },
    {
      title: "Affordable Price",
      desc: "Online learning is growing fast, and its cost is also making students suffer a lot. That's why we keep our prices fair and simple. Pay for one session or pick a package, with no hidden charges on your first session.",
      icon: <SavingsOutlinedIcon />,
    },
    {
      title: "Confidentiality",
      desc: "Your details stay safe with us. We only ask for what we need to set up your sessions, and nothing gets shared with anyone, your school included. You can focus on learning without worrying about your privacy.",
      icon: <LockOutlinedIcon />,
    },
    {
      title: "Original Work",
      desc: "Every essay and project you get is wriiten by well reserched way. Our tutor helps you research, plan, and improve your draft, and runs a plagiarism check before you submit, just for peace of mind.",
      icon: <HistoryEduOutlinedIcon />,
    },
    {
      title: "Superb Guides",
      desc: "Our expert tutors are specialists in lots of subjects and exam formats. Whatever your course needs, you'll get guidance from someone who knows that subject well.",
      icon: <SchoolOutlinedIcon />,
    },
    {
      title: "Always Open",
      desc: "Any hour, any day, all year round. If you've got a question or something urgent comes up, just message us. Someone's always around to help.",
      icon: <SupportAgentOutlinedIcon />,
    }
  ];

  return (
    <FeaturesSection
      mainHeading={<>{"Prominent Features of Take My Finance Class "}<span>{"For Me"}</span></>}
      subText={
        <p>
          {"Get online finance class help from tutors across the USA. Meet a top-tier finance tutor who has spent years studying and teaching the subjects and understands what students need to stay on track."}
        </p>
      }
      features={myFeatures}
    />
  );
};

export default Features;
