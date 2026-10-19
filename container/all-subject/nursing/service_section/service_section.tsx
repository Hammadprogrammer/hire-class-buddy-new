import React from 'react';
import { TimerOutlined, SchoolOutlined, HistoryEduOutlined } from '@mui/icons-material';
import ServicesSection, { ServiceItem } from '@/container/home/service_section/service_section';

const services: ServiceItem[] = [
  {
    icon: <TimerOutlined />,
    title: "Online Exam",
    desc: "When you need support with an online nursing exam, our experienced tutor comes in handy. We have specialists who provide online exam assistance and ensure your privacy at every single step. We follow your guidelines and ensure accurate solutions are delivered within the exam time frame."
  },
  {
    icon: <SchoolOutlined />,
    title: "Online Class",
    desc: "Are you unable to manage everything, have you missed lectures, or are you stuck on a module? Hire Class Buddy is here with a complete solution. Our tutor catches you up and checks in weekly, so you don’t fall behind again."
  },
  {
    icon: <HistoryEduOutlined />,
    title: "Online Assignment",
    desc: "We are here to help you prepare a customized and well-researched assignment with proper sources and nursing diagnoses. You can easily edit and submit your own work."
  }
];

const PageServicesSection = () => (
  <ServicesSection title={"Services Included in Our Online Nursing Class"} services={services} />
);

export default PageServicesSection;
