import React from 'react';
import FeaturesSection from '@/container/All-props-comp/feature_section/feature_sectio';

// Icons Import
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';

const Features = () => {
  // Updated Features Data Array for Online Nursing Class Help
  const myFeatures = [
    {
      title: "24/7 Assistance",
      desc: "We understand how important it is for you to get rapid assistance. Choose Hire Class Buddy, where you can contact us at any time, even after 12 hours. If you need any last-minute changes, our online test experts are here to help you.",
      icon: <SupportAgentOutlinedIcon />,
    },
    {
      title: "Custom Guidance",
      desc: "We go above and beyond to help nursing students, whether they want flashcards or need case examples. Your tutor figures out what works for you and plans every session around it.",
      icon: <PersonOutlinedIcon />,
    },
    {
      title: "Online Nursing Class Help",
      desc: "Every nursing help, care plan, discussion post, and case study is properly researched and formatted. This helps you easily understand each one so you can finish it yourself and submit it on time.",
      icon: <AssignmentOutlinedIcon />,
    },
    {
      title: "Focus on Concepts",
      desc: "We take complete responsibility. That's why we plan the coursework that helps you understand how and why things work, so it sticks for exams and for real patients.",
      icon: <PsychologyOutlinedIcon />,
    },
    {
      title: "Cost Efficient",
      desc: "We never set high prices. We understand the student budget, which is why our prices are affordable and you only pay for the sessions you need.",
      icon: <SavingsOutlinedIcon />,
    },
  ];

  return (
    <>
      <FeaturesSection
        mainHeading={<>Nursing Precision: Conquering High Stakes Across <span>All Exam Portals</span></>}
        subText={
          <p>
            Your nursing licence is your future, so take it seriously! We have tutors who help students with a wide range of nursing subjects, including nursing and nurse education. They know the material, and they know what it's like to study it while working.
          </p>
        }
        features={myFeatures}
      />
    </>
  );
};

export default Features;
