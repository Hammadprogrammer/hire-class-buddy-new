import React from 'react';
import { TimerOutlined, SchoolOutlined, HistoryEduOutlined } from '@mui/icons-material';
import ServicesSection, { ServiceItem } from '@/container/home/service_section/service_section';

const services: ServiceItem[] = [
  {
    icon: <TimerOutlined />,
    title: "Online Exam",
    desc: "We provide extensive professional support for your online exam. If you are looking to hire someone to take your online exam for you, this place is made for you. We have thousands of subject specialists who can help you understand difficult topics while ensuring all your information stays private."
  },
  {
    icon: <SchoolOutlined />,
    title: "Online Class",
    desc: "Our experts are ready to tackle your every class with equal precision and efficiency, regardless of how you choose to contact us. We provide personalized academic support, explain difficult topics, and give guidelines to help you stay on track with your classes."
  },
  {
    icon: <HistoryEduOutlined />,
    title: "Online Assignment",
    desc: "Assignments can be tough to handle, which is why we have a number of tutors available to help with your assignments, making sure they are original and well-researched to help you achieve better results."
  }
];

const PageServicesSection = () => (
  <ServicesSection title={"Service We Offer"} services={services} />
);

export default PageServicesSection;
