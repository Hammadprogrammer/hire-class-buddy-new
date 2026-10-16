import React from 'react';
import FeaturesSection from '@/container/All-props-comp/feature_section/feature_sectio';

// Icons Import
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined'; 
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined'; 
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined'; 
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined'; 
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined'; 
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined'; 

const Features = () => {
  // Updated Features Data Array for Online Test Service
  const myFeatures = [
    {
      title: "Expert Test Prep Tutors",
      desc: "Our tutors know their subjects well, even the tricky ones like finance, stats, and organic chem. They'll help you get ready for any test before the deadline.",
      icon: <FactCheckOutlinedIcon />,
    },
    {
      title: "24/7 Help",
      desc: "Studying at 2 a.m.? We're up too. Send a message any hour of the day or night, and someone will get back to you, usually within minutes.",
      icon: <SupportAgentOutlinedIcon />,
    },
    {
      title: "On-Time Sessions",
      desc: "Your test date is our deadline too. We plan your preparation around it and make sure every session happens before you need it, never after.",
      icon: <AccessTimeOutlinedIcon />,
    },
    {
      title: "Track Record of Success",
      desc: "Lots of students have prepped with us and come back the next semester. That says more than any promise we could make.",
      icon: <ReplayOutlinedIcon />,
    },
    {
      title: "Your Details Stay Private",
      desc: "Your name, course, and contact info are kept safe and never shared with anyone. Privacy isn't optional for us. It's how we work.",
      icon: <SecurityOutlinedIcon />,
    },
    {
      title: "Competitive Price",
      desc: "Good test preparation shouldn't cost a fortune. Our prices are clear, flexible, and made for students, and your first session is half off.",
      icon: <AccountBalanceWalletOutlinedIcon />,
    },
  ];

  return (
    <>
      <FeaturesSection
        mainHeading={<>What Do Our Take My Online Test Service <span>Features Cover</span></>}
        subText={
          <p>
            We employ highly skilled experts who have the experience and knowledge to provide professional test help. This is why students rate us 4.5/5 in the USA. We guide in everystep and provide some useful tools on how to pass your test successfully and tell you how to deal with the required tasks, even when you have a strict scedule.
          </p>
        }
        features={myFeatures}
      />
    </>
  );
};

export default Features;