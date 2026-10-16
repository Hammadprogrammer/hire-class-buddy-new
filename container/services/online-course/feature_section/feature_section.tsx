import React from 'react';
import FeaturesSection from '@/container/All-props-comp/feature_section/feature_sectio';

import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import HistoryEduOutlinedIcon from '@mui/icons-material/HistoryEduOutlined';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';

const Features = () => {
  const myFeatures = [
    {
      title: "Weekly Follow-Ups",
      desc: "Our tutor conducts a short session every week, helping you stay on track and preventing your coursework from piling up.",
      icon: <EventNoteOutlinedIcon />,
    },
    {
      title: "Coursework Feedback",
      desc: "Our online coursework help means honest notes on your drafts, so you can fix them before you submit.",
      icon: <HistoryEduOutlinedIcon />,
    },
    {
      title: "Study Planning",
      desc: "Our tutor maps out the rest of your semester with you, deadline by deadline. So you can never miss anything.",
      icon: <EventNoteOutlinedIcon />,
    },
    {
      title: "Quiz & Exam Prep",
      desc: "Timed practice built from your course material, so tests feel familiar.",
      icon: <QuizOutlinedIcon />,
    },
    {
      title: "Quick Replies",
      desc: "Message us anytime. Someone usually answers in minutes.",
      icon: <SupportAgentOutlinedIcon />,
    },
    {
      title: "Customized Coursework",
      desc: "You do the assignments yourself, so everything you submit is original and yours.",
      icon: <HistoryEduOutlinedIcon />,
    }
  ];

  return (
    <FeaturesSection
      mainHeading={<>{"What You Get With Our Online "}<span>{"Course Support"}</span></>}
      subText={
        <p>
          {"Are you struggling with your coursework and midterms are just around the corner? It happens. Here’s how our online course support helps you get it back together."}
        </p>
      }
      features={myFeatures}
    />
  );
};

export default Features;
