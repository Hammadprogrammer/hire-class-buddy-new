import React from 'react';
import FeaturesSection from '@/container/All-props-comp/feature_section/feature_sectio';

// Icons Import
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';

const Features = () => {
  // Features Data Array updated with your text
  const myFeatures = [
    {
      title: "Weekly Follow-Ups",
      desc: "Our tutor conducts a short session every week, helping you stay on track and preventing your coursework from piling up.",
      icon: <GroupsOutlinedIcon />,
    },
    {
      title: "Coursework Feedback",
      desc: "Our online coursework help means honest notes on your drafts, so you can fix them before you submit.",
      icon: <LocalOfferOutlinedIcon />,
    },
    {
      title: "Study Planning",
      desc: "Our tutor maps out the rest of your semester with you, deadline by deadline. So you can never miss anything.",
      icon: <ChatOutlinedIcon />,
    },
    {
      title: "Quiz & Exam Prep",
      desc: "Timed practice built from your course material, so tests feel familiar.",
      icon: <HeadsetMicOutlinedIcon />,
    },
    {
      title: "Quick Replies",
      desc: "Message us anytime. Someone usually answers in minutes.",
      icon: <PaymentsOutlinedIcon />,
    },
    {
      title: "Customized Coursework",
      desc: "You do the assignments yourself, so everything you submit is original and yours.",
      icon: <AssignmentTurnedInOutlinedIcon />,
    },
  ];

  return (
    <>
      <FeaturesSection
        mainHeading={<>What You Get With Our Online <span>Course Support</span></>}
        subText={
          <p>
            Are you struggling with your coursework and midterms are just around the corner? It happens. Here's how our online course support helps you get it back together.
          </p>
        }
        features={myFeatures}
      />
    </>
  );
};

export default Features;