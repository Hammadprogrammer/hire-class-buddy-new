import React from 'react';
import FeaturesSection from '@/container/All-props-comp/feature_section/feature_sectio';

// Icons Import
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined'; 
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined'; 
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined'; 
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined'; 
import FunctionsOutlinedIcon from '@mui/icons-material/FunctionsOutlined'; 
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined'; 

const Features = () => {
  // Updated Features Data Array for Math Class Help Services
  const myFeatures = [
    {
      title: "Tutors Who Know Algebra Inside Out",
      desc: "Every tutor on our team has a strong math background, and most have taught algebra in a classroom or one-on-one. They’ve seen every common mistake, and they know the quickest way to help you fix it.",
      icon: <FunctionsOutlinedIcon />,
    },
    {
      title: "Step-by-Step Explanations",
      desc: "We don’t just hand you the answer and move on. Your tutor shows you every step, explains why it works, and then lets you try a similar problem yourself. That’s how it actually sticks.",
      icon: <TaskAltOutlinedIcon />,
    },
    {
      title: "Help Whenever You Need It",
      desc: "Math homework has a way of getting hard right before bed. If you’re stuck at midnight, send us a message. Someone on our team is usually around, and you won’t have to wait until morning.",
      icon: <SupportAgentOutlinedIcon />,
    },
    {
      title: "Direct Tutor Support",
      desc: "Our algebra classwork help is about getting you unstuck. Your tutor walks you through the problems you can’t crack, checks the ones you’ve done, and points out where small errors are creeping in.",
      icon: <PersonSearchOutlinedIcon />,
    },
    {
      title: "Lessons Built Around You",
      desc: "Some students pick things up fast and just need a quick nudge. Others need it explained a few different ways. Your tutor figures out how you learn best and adjusts every session to match.",
      icon: <PaymentOutlinedIcon />,
    },
    {
      title: "Prices That Make Sense for Students",
      desc: "We know money is tight when you’re in school. You can book one session at a time or choose a package if you want regular help. Either way, there are no hidden fees.",
      icon: <LocalOfferOutlinedIcon />,
    },
  ];

  return (
    <>
      <FeaturesSection 
        mainHeading={<>Features We Offer At Take My <span>Math Class With Me</span></>}
        subText={
          <p>
            Mathematics requires zero errors; even one small calculation mistake ruins the entire problem. All of these errors need expert guidance. So, no matter the problem you have, get in touch with us and avail the services that focus on clear solutions, timely submission, and consistent performance.
          </p>
        }
        features={myFeatures}
      />
    </>
  );
};

export default Features;