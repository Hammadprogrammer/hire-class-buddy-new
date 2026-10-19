import React from 'react';
import { TimerOutlined, SchoolOutlined, HistoryEduOutlined } from '@mui/icons-material';
import ServicesSection, { ServiceItem } from '@/container/home/service_section/service_section';

const services: ServiceItem[] = [
  {
    icon: <TimerOutlined />,
    title: "Online Exam Prep",
    desc: "Most exams repeat the same kinds of questions in every term. Our tutors know which ones, and they'll walk you through them until the logic makes sense to you. We also do a few timed practice runs, so the real test doesn't feel like a surprise."
  },
  {
    icon: <SchoolOutlined />,
    title: "Online Class Tutoring",
    desc: "One busy week can push you behind in an online class. When that happens, your tutor meets with you once a week, looks at what's due, and goes over the parts you didn't get. It's a lot easier to keep up when someone's checking in."
  },
  {
    icon: <HistoryEduOutlined />,
    title: "Online Assignment Help",
    desc: "Send us your draft, even if it's messy. A tutor who knows the subject will read it and leave honest notes on what works and what doesn't. Then you fix it up and submit it yourself."
  }
];

const PageServicesSection = () => (
  <ServicesSection title={"Explore Our All Class Assitance Services"} services={services} />
);

export default PageServicesSection;
