import React from 'react';
import { TimerOutlined, SchoolOutlined, HistoryEduOutlined } from '@mui/icons-material';
import ServicesSection, { ServiceItem } from '@/container/home/service_section/service_section';

const services: ServiceItem[] = [
  {
    icon: <TimerOutlined />,
    title: "Online Exam",
    desc: "Exams are difficult to handle, especially if it comes with sociology. Our tutor goes over the theories, terms, and thinkers likely to come up, then practices short answers and essay questions with you until they feel easy."
  },
  {
    icon: <SchoolOutlined />,
    title: "Online Class",
    desc: "Sociology class requires critical thinking and the ability to write analytical responses to different questions. Which is why our tutor takes every single class without missing any of them. Helping you understand each one can bring you high grades."
  },
  {
    icon: <HistoryEduOutlined />,
    title: "Online Assignment",
    desc: "Can someone take my sociology assignment? Hire Class Buddy has made it possible by offering you a professional tutor who can help you make an original and well-researched assignment based on your required guidelines and due dates."
  }
];

const PageServicesSection = () => (
  <ServicesSection title={"Service We Offer"} services={services} />
);

export default PageServicesSection;
