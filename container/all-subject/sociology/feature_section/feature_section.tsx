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
  // Updated Features Data Array for Sociology Class Help Services
  const myFeatures = [
    {
      title: "Weekly Follow-Ups",
      desc: "If you think we are limited to sociology class help, you're mistaken. We have designed our system in a way that allows tutors to sit down with the students every week, discuss their problems, giving them the right solution.",
      icon: <TrackChangesOutlinedIcon />,
    },
    {
      title: "Payment Plans & Flexibility",
      desc: "All our services are designed to fit the students' budget, so you can get affordable service without paying more in upfront charges.",
      icon: <PaymentsOutlinedIcon />,
    },
    {
      title: "On-Time Support",
      desc: "We have a highly qualified team who support you 24/7. So just send a message; someone is usually available to answer your questions.",
      icon: <SupportAgentOutlinedIcon />,
    },
    {
      title: "American Expert",
      desc: "We have onbarded the PHD tutors to offer you exceptional service with your online classes. They help you understand the subject, assignments, tests, or the discussion clearly and accurately.",
      icon: <PublicOutlinedIcon />,
    },
    {
      title: "Moneyback guarantee",
      desc: "When considering someone to take your sociology class, it's crucial to choose a reliable service. With us yu dont have worry, we offer the money back guarrntee while offeirng the full peace of mind.",
      icon: <CurrencyExchangeOutlinedIcon />,
    },
    {
      title: "Customized Support",
      desc: "Get personalized support from us. We have real people who take your sociology classes and guide you through the assignment while keeping it original, with full citation and required guidelines.",
      icon: <AutoFixOffOutlinedIcon />,
    },
  ];

  return (
    <>
      <FeaturesSection 
        mainHeading={<>Why Should You Choose Hire Class Buddy For Your <span>Online Sociology Class</span></>}
        subText={
          <p>
            We have always been the first choice for students struggling to complete their online sociology course. Our professional coursework support and timely assistance make us rated 4.5/5 among the thousands of students in the USA. So if you are looking to pay someone to take your online sociology class, you should know we are always at your service.
          </p>
        }
        features={myFeatures}
      />
    </>
  );
};

export default Features;
