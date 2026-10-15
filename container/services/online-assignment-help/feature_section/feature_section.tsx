import React from 'react';
import FeaturesSection from '@/container/All-props-comp/feature_section/feature_sectio';

// Icons Import
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined'; // For Free Revisions
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined'; // For 24/7 Service
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined'; // For Plagiarism Report
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined'; // For Pocket-Friendly
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined'; // For Confidentiality
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined'; // For On-Time Delivery

const Features = () => {
  // Updated Features Data Array
  const myFeatures = [
    {
      title: "Free Follow-Ups",
      desc: "Made changes or want a second look? We offer a multiple revision policy, where you can share your feedback and get your work reviewed without any additional charges for reasonable revisions.",
      icon: <ReplayOutlinedIcon />,
    },
    {
      title: "24/7 Academic Support",
      desc: "We offer 24/7 service as our commitment to the students. So you can message us anytime; our support team is always available to assist you.",
      icon: <SupportAgentOutlinedIcon />,
    },
    {
      title: "Plagirasim Free Report",
      desc: "Our expert tutors work carefully to deliver personalized and original academic support. With this professional help, you can submit your task with peace of mind.",
      icon: <FactCheckOutlinedIcon />,
    },
    {
      title: "Affordable Pricing",
      desc: "We know students often have a tight budget; that's why our assignment writing service helps you pay for what you need without compromising quality.",
      icon: <AccountBalanceWalletOutlinedIcon />,
    },
    {
      title: "100 % Confidential",
      desc: "With our focus on privacy, you can share your details with confidence, as we take responsibility for securing your personal details from third parties.",
      icon: <SecurityOutlinedIcon />,
    },
    {
      title: "Guaranteed Deadlines",
      desc: "Deadlines can be stressful, especially when several assignments are due at the same time. That's why, when you take assignment help from us, you will always receive the assignment at your desired time. For any revisions or additional changes, we recommend that you share the information before the deadline.",
      icon: <AccessTimeOutlinedIcon />,
    },
  ];

  return (
    <>
      <FeaturesSection 
        mainHeading={<>Want To Pay Someone To Do My Coursework? <span>Checkout How We Work</span></>}
        subText={
          <p>
            Not sure how to hire someone to do my assignment? You are not alone. Thousands of students feel stressed or overwhelmed when they start searching for the right academic support. That&apos;s where Hire Class Buddy helps you connect with the right tutor who helps you plan, research, and improve your work, so you can manage your coursework without any stress.
          </p>
        }
        features={myFeatures}
      />
    </>
  );
};

export default Features;