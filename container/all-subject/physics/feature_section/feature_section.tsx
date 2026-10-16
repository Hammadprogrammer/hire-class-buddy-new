import React from 'react';
import FeaturesSection from '@/container/All-props-comp/feature_section/feature_sectio';

// Icons Import
import StarsOutlinedIcon from '@mui/icons-material/StarsOutlined'; 
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined'; 
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined'; 
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined'; 
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined'; 
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined'; 
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined'; 

const Features = () => {
  // Updated Features Data Array for Physics Class Help Services
  const myFeatures = [
    {
      title: "Clear Explanations",
      desc: "Our tutor sketches each problem first, so you can see what's going on before touching the math.",
      icon: <StarsOutlinedIcon />,
    },
    {
      title: "Weekly Progress",
      desc: "Regular follow-up that helps keep lectures and problem sets from stacking up.",
      icon: <ShieldOutlinedIcon />,
    },
    {
      title: "Lab Report Feedback",
      desc: "Send your draft and get notes on your data, graphs, and conclusions before you submit.",
      icon: <PaymentOutlinedIcon />,
    },
    {
      title: "Exam Practice",
      desc: "Timed practice built from your past quizzes, so the real test feels familiar.",
      icon: <AccessTimeOutlinedIcon />,
    },
    {
      title: "24/7 Support",
      desc: "Message us after midnight. Someone is usually awake to help.",
      icon: <TaskAltOutlinedIcon />,
    },
    {
      title: "Quality Work",
      desc: "You solve and write everything from the beginning. Give it to your tutor; they will help you understand it, so it's original and yours.",
      icon: <GroupOutlinedIcon />,
    },
  ];

  return (
    <>
      <FeaturesSection
        mainHeading={<>How We Can Help You With Your Online <span>Physics Class</span></>}
        subText={
          <p>
            We offer you the full flexibility to choose an assignment expert that suits your requirements and quality parameters. We have almost 100+ certified tutors available to support you in your physics coursework.
          </p>
        }
        features={myFeatures}
      />
    </>
  );
};

export default Features;