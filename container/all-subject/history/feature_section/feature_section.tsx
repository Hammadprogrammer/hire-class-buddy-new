import React from 'react';
import FeaturesSection from '@/container/All-props-comp/feature_section/feature_sectio';

// Icons Import
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined'; 
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined'; 
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined'; 
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined'; 
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined'; 
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined'; 

const Features = () => {
  // Updated Features Data Array for Top-Rated Online History Class Help
  const myFeatures = [
    {
      title: "On-Time Feedback",
      desc: "Send your draft a few days early. You'll get notes back with plenty of time to fix things, and you won't be up at midnight scrambling.",
      icon: <AccessTimeOutlinedIcon />,
    },
    {
      title: "Weekly Check-Ins",
      desc: "Once a week, you and your tutor go over what's due. It sounds small, but it keeps the readings from piling up.",
      icon: <AutoStoriesOutlinedIcon />,
    },
    {
      title: "Higher Scores",
      desc: "We can't promise you an A+. Nobody honestly can. What we've seen, though, is that grades usually go up once the material starts making sense.",
      icon: <VerifiedUserOutlinedIcon />,
    },
    {
      title: "Teamwork Guidance",
      desc: "Group project with people who never answer the group chat? Your tutor helps you sort out your part and make it good, whatever the rest of the group does.",
      icon: <GroupAddOutlinedIcon />,
    },
    {
      title: "Round-the-Clock Replies",
      desc: "Whether morning, evening, or any time of the night, our professional tutors are ready to teach on Sunday, holiday weekends. Don't worry! Just message us.",
      icon: <SupportAgentOutlinedIcon />,
    },
    {
      title: "Original Writing",
      desc: "You write it. Our tutor helps you shape the argument, track down decent sources, and get the citations right. So it's original, and it actually sounds like you.",
      icon: <CreateOutlinedIcon />,
    },
  ];

  return (
    <>
      <FeaturesSection
        mainHeading={<>Our Online Class Service <span>Prime Features</span></>}
        subText={
          <p>
            Every history class is different even the students. That's why our tutors help you anytime, even when it's late. They reply fast, tell you honestly what's working and what isn't, and help you actually get somewhere.
          </p>
        }
        features={myFeatures}
      />
    </>
  );
};

export default Features;