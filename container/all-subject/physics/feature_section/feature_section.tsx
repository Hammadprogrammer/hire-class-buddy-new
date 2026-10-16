import React from 'react';
import FeaturesSection from '@/container/All-props-comp/feature_section/feature_sectio';

import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import HistoryEduOutlinedIcon from '@mui/icons-material/HistoryEduOutlined';

const Features = () => {
  const myFeatures = [
    {
      title: "Clear Explanations",
      desc: "Our tutor sketches each problem first, so you can see what’s going on before touching the math.",
      icon: <LightbulbOutlinedIcon />,
    },
    {
      title: "Weekly Progress",
      desc: "Regular follow-up that helps keep lectures and problem sets from stacking up.",
      icon: <EventNoteOutlinedIcon />,
    },
    {
      title: "Lab Report Feedback",
      desc: "Send your draft and get notes on your data, graphs, and conclusions before you submit.",
      icon: <LightbulbOutlinedIcon />,
    },
    {
      title: "Exam Practice",
      desc: "Timed practice built from your past quizzes, so the real test feels familiar.",
      icon: <QuizOutlinedIcon />,
    },
    {
      title: "24/7 Support",
      desc: "Message us after midnight. Someone is usually awake to help.",
      icon: <SupportAgentOutlinedIcon />,
    },
    {
      title: "Quality Work",
      desc: "You solve and write everything from the beginning. Give it to your tutor; they will help you understand it, so it’s original and yours.",
      icon: <HistoryEduOutlinedIcon />,
    }
  ];

  return (
    <FeaturesSection
      mainHeading={<>{"How We Can Help You With Your Online "}<span>{"Physics Class"}</span></>}
      subText={
        <p>
          {"We offer you the full flexibility to choose an assignment expert that suits your requirements and quality parameters. We have almost 100+ certified tutors available to support you in your physics coursework."}
        </p>
      }
      features={myFeatures}
    />
  );
};

export default Features;
