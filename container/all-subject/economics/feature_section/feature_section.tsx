import React from 'react';
import FeaturesSection from '@/container/All-props-comp/feature_section/feature_sectio';

import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import ChecklistOutlinedIcon from '@mui/icons-material/ChecklistOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import HistoryEduOutlinedIcon from '@mui/icons-material/HistoryEduOutlined';

const Features = () => {
  const myFeatures = [
    {
      title: "Affordable Pricing",
      desc: "Easy! You won’t need to empty your wallet. Book one session or grab a package. Either way, the price is clear from the start, and your first session is half off.",
      icon: <SavingsOutlinedIcon />,
    },
    {
      title: "One-on-One Interaction",
      desc: "It’s just you and your tutor, no crowded class. Ask whatever you want, as many times as you want, and go at your own speed.",
      icon: <PsychologyOutlinedIcon />,
    },
    {
      title: "24/7 Support",
      desc: "Stuck on a graph at midnight? Send a message. Someone’s usually online, even on weekends.",
      icon: <SupportAgentOutlinedIcon />,
    },
    {
      title: "Hassle-Free Process",
      desc: "Tell us your course and what’s due, and we’ll match you with a tutor. Booking and rescheduling take a couple of clicks. That’s it.",
      icon: <ChecklistOutlinedIcon />,
    },
    {
      title: "Qualified Experts",
      desc: "Our tutors have studied economics for years, and many have taught it too. Micro, macro, econometrics- there’s someone who knows your topic well.",
      icon: <SchoolOutlinedIcon />,
    },
    {
      title: "Plagiarism-Free Work",
      desc: "You write your own work, so it stays original. Your tutor helps with research and citations, and we’ll run a plagiarism check before you submit if you want.",
      icon: <HistoryEduOutlinedIcon />,
    }
  ];

  return (
    <FeaturesSection
      mainHeading={<>{"Why Is It So Great to Get Economic Class Help From the Hire "}<span>{"Class Buddy?"}</span></>}
      subText={
        <p>
          {"We offer extensive online class support, from personalized support to timely assistance. We have some experienced tutors available to answer you anytime. And for assignments and exams, we provide customised service that is original and well-researched while ensuring all your information remains secure and private."}
        </p>
      }
      features={myFeatures}
    />
  );
};

export default Features;
