import React from 'react';
import FeaturesSection from '@/container/All-props-comp/feature_section/feature_sectio';

// Icons Import
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';

const Features = () => {
  // Updated Features Data Array for Chemistry Class Help Services
  const myFeatures = [
    {
      title: "Online Exam",
      desc: "Our expert professionals look at your past quizzes and syllabus to figure out which problems keep coming up. Then you practice those, timed, until they feel easy. That's how our chemistry exam prep works.",
      icon: <AssignmentOutlinedIcon />,
    },
    {
      title: "Online Class",
      desc: "Every week, our tutor goes over what's coming in your course and explains anything the lecture didn't make clear. Kind of like a lab partner who actually knows the answers.",
      icon: <ScienceOutlinedIcon />,
    },
    {
      title: "Online Assignment",
      desc: "Well, assignments are difficult to handle, especially when it comes to chemistry. Our tutor makes it simple for you, then lets you try the next few. You finish it yourself, and you learn the method along the way.",
      icon: <FactCheckOutlinedIcon />,
    },
  ];

  return (
    <>
      <FeaturesSection
        mainHeading={<>Have a Look At Our <span>Service Features</span></>}
        subText={
          <p>
          </p>
        }
        features={myFeatures}
      />
    </>
  );
};

export default Features;
