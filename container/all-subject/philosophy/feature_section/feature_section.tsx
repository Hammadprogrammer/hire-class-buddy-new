import React from 'react';
import FeaturesSection from '@/container/All-props-comp/feature_section/feature_sectio';

// Icons Import
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';

const Features = () => {
  // Updated Features Data Array for Philosophy Class Help
  const myFeatures = [
    {
      title: "Professional Tutor",
      desc: "We have professional tutors who are dedicated philosophy experts and fully understand the subject. So, if you have any questions about metaphysics, ontology, or ethics and moral philosophy, they will help you manage your online class.",
      icon: <SchoolOutlinedIcon />,
    },
    {
      title: "24/7 Help",
      desc: "Are you looking for anytime support? Yes, we do. Our round-the-clock online philosophy class assistance is always available whenever you need it.",
      icon: <AccessTimeOutlinedIcon />,
    },
    {
      title: "Student-Friendly Prices",
      desc: "Here, our prices don't push your budget. We design our philosophy tutoring programs at reasonable prices without sacrificing outcomes.",
      icon: <PeopleAltOutlinedIcon />,
    },
    {
      title: "100% Confidential",
      desc: "We are committed to handling every philosophy class with complete discretion while ensuring your personal information and course details are kept secure and confidential.",
      icon: <DoneAllOutlinedIcon />,
    },
    {
      title: "Weekly sessions",
      desc: "Our services are built for students who need regular assistance. Our tutors can meet with you every week to go over readings and course materials, so nothing becomes heavy for you.",
      icon: <AutoStoriesOutlinedIcon />,
    },
    {
      title: "Will You Take My Online Philosophy Class for Me at Affordable Rates?",
      desc: "At Hire Class Buddy, we work alongside you as a trusted partner supporting your online philosophy class with professionalism and care. So, if you have any concerns about pricing, then yes, we offer our service at an affordable price.",
      icon: <EmojiEventsOutlinedIcon />,
    },
  ];

  return (
    <>
      <FeaturesSection
        mainHeading={<>Choose Us as Your Academic Partner and <span>See What Else We Do For You</span></>}
        subText={
          <p>
            We have specialized tutors with years of experience teaching students across multiple subjects. We do our best to make philosophy class stress-free, while ensuring your academic target is accomplished with confidence, precision, and reliable support.
          </p>
        }
        features={myFeatures}
      />
    </>
  );
};

export default Features;
