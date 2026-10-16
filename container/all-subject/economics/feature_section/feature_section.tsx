import React from 'react';
import FeaturesSection from '@/container/All-props-comp/feature_section/feature_sectio';

// Icons Import
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined'; 
import RecordVoiceOverOutlinedIcon from '@mui/icons-material/RecordVoiceOverOutlined'; 
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined'; 
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined'; 
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined'; 
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined'; 

const Features = () => {
  // Updated Features Data Array for Economics Class Help
  const myFeatures = [
    {
      title: "Affordable Pricing",
      desc: "Easy! You won't need to empty your wallet. Book one session or grab a package. Either way, the price is clear from the start, and your first session is half off.",
      icon: <LocalOfferOutlinedIcon />,
    },
    {
      title: "One-on-One Interaction",
      desc: "It's just you and your tutor, no crowded class. Ask whatever you want, as many times as you want, and go at your own speed.",
      icon: <RecordVoiceOverOutlinedIcon />,
    },
    {
      title: "24/7 Support",
      desc: "Stuck on a graph at midnight? Send a message. Someone's usually online, even on weekends.",
      icon: <SupportAgentOutlinedIcon />,
    },
    {
      title: "Hassle-Free Process",
      desc: "Tell us your course and what's due, and we'll match you with a tutor. Booking and rescheduling take a couple of clicks. That's it.",
      icon: <VerifiedUserOutlinedIcon />,
    },
    {
      title: "Qualified Experts",
      desc: "Our tutors have studied economics for years, and many have taught it too. Micro, macro, econometrics- there's someone who knows your topic well.",
      icon: <WorkspacePremiumOutlinedIcon />,
    },
    {
      title: "Plagiarism-Free Work",
      desc: "You write your own work, so it stays original. Your tutor helps with research and citations, and we'll run a plagiarism check before you submit if you want.",
      icon: <FactCheckOutlinedIcon />,
    },
  ];

  return (
    <>
      <FeaturesSection
        mainHeading={<>Why Is It So Great to Get Economic Class Help From the <span>Hire Class Buddy</span></>}
        subText={
          <p>
            We offer extensive online class support, from personalized support to timely assistance. We have some experienced tutors available to answer you anytime. And for assignments and exams, we provide customised service that is original and well-researched while ensuring all your information remains secure and private.
          </p>
        }
        features={myFeatures}
      />
    </>
  );
};

export default Features;