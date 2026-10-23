import React from 'react';
import FeaturesSection from '@/container/All-props-comp/feature_section/feature_sectio';

// Icons Import
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined'; 
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined'; 
import PublishedWithChangesOutlinedIcon from '@mui/icons-material/PublishedWithChangesOutlined'; 
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined'; 
import RuleOutlinedIcon from '@mui/icons-material/RuleOutlined'; 
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined'; 

const Features = () => {
  // Updated Features Data Array for Online Business Class Help
  const myFeatures = [
    {
      title: "Affordable Pricing",
      desc: "We have set the pricing with students' budgets in mind. You can also get 50% off your first session, and even book a 30-minute free call to understand how the process works.",
      icon: <AssignmentOutlinedIcon />,
    },
    {
      title: "On-Time Submission",
      desc: "We have a professional tutor who helps you manage your online class completely and complete your business class effectively. They guide you through full business class assignments, help you plan around the deadlines, and make sure you understand what's expected before submitting your work,",
      icon: <BusinessCenterOutlinedIcon />,
    },
    {
      title: "24/7 Support",
      desc: "We understand that students have questions at any time of the day. That's why we have a dedicated team to answer queries even late at night.",
      icon: <PublishedWithChangesOutlinedIcon />,
    },
    {
      title: "Simple Process",
      desc: "We have designed a simple process that easily fits into students' schedules. Just tell us about your course and what's due, and we'll match you with a tutor in a few clicks.",
      icon: <SpeedOutlinedIcon />,
    },
    {
      title: "Qualified Experts",
      desc: "Our tutors are highly qualified and have years of experience teaching Marketing, management, HR, strategy, and business law.",
      icon: <RuleOutlinedIcon />,
    },
    {
      title: "Guaranteed Result",
      desc: "Every assignment, quiz, discussion post, and project comes with its own grading requirements. Our tutor helps you understand these requirements, identify what needs attention, and prepare your work with confidence.",
      icon: <VerifiedUserOutlinedIcon />,
    },
  ];

  return (
    <>
      <FeaturesSection 
        mainHeading={<>Online Business Class Support Built Around the Way <span>Students Actually Learn</span></>}
        subText={
          <p>
            Hire Class Buddy has supported more than 10,000 students across multiple subjects, with a 4.5/5 average rating from real customers. Most students start with the same question: Can I &quot;hire someone to take my business class&quot;? What matters is finding someone who can manage the course, deadlines, grading patterns, and keep your information private.
          </p>
        }
        features={myFeatures}
      />
    </>
  );
};

export default Features;