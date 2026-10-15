import React from 'react';
import FeaturesSection from '@/container/All-props-comp/feature_section/feature_sectio';

// Updated Icons for better relevance
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';

const Features = () => {
  const myFeatures = [
    {
      title: "Pool of 4598+ Tutors",
      desc: "With 4598+ tutors on our team, there's someone who knows your subject well. Pick your tutor yourself, or let us match you, and start prepping right away.",
      icon: <GroupsOutlinedIcon />,
    },
    {
      title: "Well-Researched Practice Questions",
      desc: "Our tutors spend hours building practice questions around your course material. Over time, we've built up a big question bank, so you get plenty of practice that looks like the real thing.",
      icon: <MenuBookOutlinedIcon />,
    },
    {
      title: "Result-Focused Preparation",
      desc: "Our tutor follows your syllabus, your exam format, and the way your professor tends to ask questions. You practice for the exam you're actually taking, not some generic one.",
      icon: <WorkspacePremiumOutlinedIcon />,
    },
    {
      title: "Confidentiality",
      desc: "Your privacy matters to us. Your name, your course details, and anything you share stay with us. We don't hand it over to anyone, not even your school.",
      icon: <LockOutlinedIcon />,
    },
    {
      title: "24/7 Hours Availability",
      desc: "Questions don't wait for business hours, so neither do we. Message us any time of day or night, and someone will get back to you, usually within minutes.",
      icon: <SupportAgentOutlinedIcon />,
    },
    {
      title: "Safe & Reliable",
      desc: "Students come back to us semester after semester because we do what we say. Clear prices, real tutors, and honest help getting ready for your exam.",
      icon: <VerifiedUserOutlinedIcon />,
    },
  ];

  return (
    <>
      <FeaturesSection 
        mainHeading={<>Hire Someone For Online Exam Help and Forget Your <span>Workload</span></>}
        subText={
          <p>
            Are you still struggling with your exam preparation? Pay someone to take your online exam and see how they handle overwhelming tasks and time limits. By getting us involved, you get comprehensive support from research-backed questions to 24/7 support, instead of having someone handle the exam on your behalf.
          </p>
        }
        features={myFeatures}
      />
    </>
  );
};

export default Features;