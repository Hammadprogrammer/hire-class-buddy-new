import React from 'react';
import FeaturesSection from '@/container/All-props-comp/feature_section/feature_sectio';

// Icons Import
import TrackChangesOutlinedIcon from '@mui/icons-material/TrackChangesOutlined'; 
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined'; 
import AutoFixOffOutlinedIcon from '@mui/icons-material/AutoFixOffOutlined'; 
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined'; 
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined'; 
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined'; 

const Features = () => {
  // Updated Features Data Array for Statistics Class Help Services
  const myFeatures = [
    {
      title: "Progress Updates",
      desc: "After every session, your tutor sends a quick note by SMS, WhatsApp, or email about what you covered and what to review next. You'll always know where you stand.",
      icon: <TrackChangesOutlinedIcon />,
    },
    {
      title: "Payment Plans and Flexibility",
      desc: "Tight on cash this month? We'll work out a plan that fits your budget, and you can split the cost into smaller payments. No pressure.",
      icon: <PaymentsOutlinedIcon />,
    },
    {
      title: "Your Work, No AI Shortcuts",
      desc: "You write your own work, so it's original and sounds like you. Your tutor helps you understand the concepts, which means you won't need ChatGPT to get through the assignment.",
      icon: <AutoFixOffOutlinedIcon />,
    },
    {
      title: "World-Class Support",
      desc: "Just send us a message. Most of the time, someone replies within ten minutes. Answering your questions quickly is a big part of what we do.",
      icon: <SupportAgentOutlinedIcon />,
    },
    {
      title: "American Experts",
      desc: "Many of our tutors studied at US universities and know how American stats courses are taught. Every tutor goes through a careful screening before working with students.",
      icon: <PublicOutlinedIcon />,
    },
    {
      title: "Money-Back Guarantee",
      desc: "Not happy with a session? Let us know, and we'll refund it or match you with a different tutor. Your money's safe with us.",
      icon: <CurrencyExchangeOutlinedIcon />,
    },
  ];

  return (
    <>
      <FeaturesSection
        mainHeading={<>Key Features We Cover In Our Online Statistics Class <span>Help Service.</span></>}
        subText={
          <p>
            Statistics can feel like a lot, no doubt. That's why we've kept things simple, honest, and built around you. Here's what makes learning statistics with us a whole lot easier.
          </p>
        }
        features={myFeatures}
      />
    </>
  );
};

export default Features;