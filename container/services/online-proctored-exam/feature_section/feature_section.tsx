import React from 'react';
import FeaturesSection from '@/container/All-props-comp/feature_section/feature_sectio';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';

const Features = () => {
  const myFeatures = [
    {
      title: "100% Secure & Safe",
      desc: "Not only because we use a local IP and a completely secure system, but we have our very own built-in system that makes sure that your identity, login details, and during exam things remain secure.",
      icon: <LockOutlinedIcon />,
    },
    {
      title: "Personalized Academic Guidance",
      desc: "With all the pride, we offer 24/7 academic guidance, with the help of our esteemed tutors who are mostly PhDs in their respective subjects. Now you can receive support based on your subject and learning preferences.",
      icon: <PsychologyOutlinedIcon />,
    },
    {
      title: "Convenient Online Sessions",
      desc: "According to our internal surveys and communication with students, we found that 24/7 access to tutors is an area where they face many challenges. But with us, you can access tutoring remotely whenever you want.",
      icon: <CheckCircleOutlineIcon />,
    },
    {
      title: "Practical Learning Resources",
      desc: "If you wish to use practice questions, we arrange sessions with tutors and online professionals who help you prepare for your proctored exam through revision materials and structured exercises.",
      icon: <CheckCircleOutlineIcon />,
    },
    {
      title: "Affordable Prices & Discounts",
      desc: "It is not very easy for students to manage finances and pay someone to take my proctored exam a huge amount. So we offer promotional discounts on our already affordable prices so it does not burden your pocket.",
      icon: <SavingsOutlinedIcon />,
    },
    {
      title: "Confidence-Building Strategies",
      desc: "Not only can you hire someone to do my proctored exam on our platform, but you can also develop better study habits, improve your approach to challenging questions, get 24/7 tutoring services, and become more comfortable with online examination procedures.",
      icon: <LockOutlinedIcon />,
    }
  ];

  return (
    <FeaturesSection
      mainHeading={<>{"6 Reasons Students Ask HireClassBuddy To Take My Online Proctored Exam "}<span>{"For Me"}</span></>}
      subText={
        <p>
          {"We have been serving students for quite a long time and our continuous efforts and services for students have resulted in their utmost trust in us. There are six major reasons they love to get in touch with us as they seek help regarding proctored exams."}
        </p>
      }
      features={myFeatures}
    />
  );
};

export default Features;
