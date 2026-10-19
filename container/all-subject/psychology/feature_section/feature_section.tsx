import React from 'react';
import FeaturesSection from '@/container/All-props-comp/feature_section/feature_sectio';

import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';

const Features = () => {
  const myFeatures = [
    {
      title: "Expert Assistance",
      desc: "Professional assistance makes a difference in your academic performance. Hire Class Buddy to connect with an experienced professional willing to help you excel in your online course.",
      icon: <SupportAgentOutlinedIcon />,
    },
    {
      title: "Safe & Secure",
      desc: "We always consider the student's privacy. Your online class credentials and course details are kept confidential and are never informed to the thrid party, including your school.",
      icon: <LockOutlinedIcon />,
    },
    {
      title: "Flexible Experience",
      desc: "We offer flexible and dependable assistance, where you and your tutor meet every week and discuss the course details to make things more transparent and understandable for both of you.",
      icon: <CheckCircleOutlineIcon />,
    },
    {
      title: "Guaranteed Result",
      desc: "We work hard to deliver guaranteed results that you expect. At Take My Psychology Class, we serve our students diligently and work hard to help them achieve their desired results.",
      icon: <EmojiEventsOutlinedIcon />,
    },
    {
      title: "Satisfaction Promise",
      desc: "We have onbarded experinced pschology tutor who handle your every class with precision and security while keeping your requiremnts in top of our consideration.",
      icon: <CheckCircleOutlineIcon />,
    },
    {
      title: "Customised Support",
      desc: "Your tutor guides you through each assignment, so the work stays original, properly cited, and in line with your professor’s guidelines.",
      icon: <SupportAgentOutlinedIcon />,
    }
  ];

  return (
    <FeaturesSection
      mainHeading={<>{"Professional Online Psychology Class Help, Across Assignments, Discussions, "}<span>{"and Beyond"}</span></>}
      subText={
        <p>
          {"Most students register for psychology expecting an interesting discussion course filled with discussion about human behavior. But later they find it is more about memorizing definitions. For this reason, they need a reliable source of support that can help them understand how theories apply to human behavior, interpret research findings, compare psychological perspectives, and more. So if you’re looking for help with your online psychology class, we’re always here for you."}
        </p>
      }
      features={myFeatures}
    />
  );
};

export default Features;
