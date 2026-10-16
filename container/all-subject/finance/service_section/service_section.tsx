import React from 'react';
import { TimerOutlined, SchoolOutlined, HistoryEduOutlined } from '@mui/icons-material';
import ServicesSection, { ServiceItem } from '@/container/home/service_section/service_section';

const services: ServiceItem[] = [
  {
    icon: <TimerOutlined />,
    title: "Online Exam",
    desc: "We have expert finance tutors who’ve seen just about every kind of exam question out there. They’ll look at your old quizzes, figure out which problems your professor likes to repeat, and practice in a timely manner."
  },
  {
    icon: <SchoolOutlined />,
    title: "Online Class",
    desc: "At Hire Class Buddy, our tutor meets with you once a week to go over what’s coming up in your class. If a lecture didn’t make sense, they’ll explain it a different way. If you’re behind on any topic, they help you get a sense of it."
  },
  {
    icon: <HistoryEduOutlined />,
    title: "Online Assignment",
    desc: "We have expert tutors who can help with valuation projects, case studies, and long problem sets. They’ll help you plan your approach, clear up the confusing parts, and look over your draft before you submit."
  }
];

const PageServicesSection = () => (
  <ServicesSection title={"Service We Offer"} services={services} />
);

export default PageServicesSection;
