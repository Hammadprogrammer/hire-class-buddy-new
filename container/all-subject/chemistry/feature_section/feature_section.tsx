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
      title: "Customized Assignment Guidance",
      desc: "Your tutor reads your actual brief first. What level you're at, what your professor wants, where you're stuck. Then you work on it together, your way.",
      icon: <AssignmentOutlinedIcon />,
    },
    {
      title: "All Chemistry Branches Covered",
      desc: "Orgo? Yep. P-chem? That too. Gen chem, inorganic, biochem- we've got someone for each one.",
      icon: <ScienceOutlinedIcon />,
    },
    {
      title: "Plagiarism-Free Work",
      desc: "You do the writing, so it's yours. We'll help with citations, and if you want, we'll run it through a plagiarism checker before it goes in.",
      icon: <FactCheckOutlinedIcon />,
    },
    {
      title: "Original Work, On-Time Help",
      desc: "Send us your draft a few days early, and you'll get notes back with time to spare. Way better than fixing things at 11:58 p.m.",
      icon: <AccessTimeOutlinedIcon />,
    },
    {
      title: "Fair & Affordable Pricing",
      desc: "Prices set according to the student. No weird fees at checkout. What you see is what you pay.",
      icon: <PaymentsOutlinedIcon />,
    },
    {
      title: "Free Follow-Up Reviews",
      desc: "Fixed it up and want another look? Send it again. And again, if you need to. We'll keep checking it against your professor's instructions until you're happy with it.",
      icon: <ReplayOutlinedIcon />,
    },
  ];

  return (
    <>
      <FeaturesSection
        mainHeading={<>Get Expert Chemistry Class Help Services – Handle Assignments <span>Without the Hassle</span></>}
        subText={
          <p>
            A single chemistry assignment can somehow take up your entire weekend. It doesn't have to. Bring us the project, the problem set, or the classwork you've been avoiding. A tutor will sit down with you, sort out the hard parts, and make sure you get why the answer is the answer. Here's what else comes with it.
          </p>
        }
        features={myFeatures}
      />
    </>
  );
};

export default Features;
