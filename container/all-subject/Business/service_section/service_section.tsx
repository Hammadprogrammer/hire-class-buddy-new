import React from 'react';
import { TimerOutlined, SchoolOutlined, HistoryEduOutlined } from '@mui/icons-material';
import ServicesSection, { ServiceItem } from '@/container/home/service_section/service_section';

const services: ServiceItem[] = [
  {
    icon: <TimerOutlined />,
    title: "Online Exam",
    desc: "Exams have a huge weightage in your course, and worrying about them is natural. We recommend getting professional help with your online exam preparation. With our take my online business law class service, you can prepare for your exams with expert guidance and less stress."
  },
  {
    icon: <SchoolOutlined />,
    title: "Online Class",
    desc: "Hire Class Buddy offers its service at pocket-friendly rates, and we make sure our students are satisfied with the support they receive. That is why we have onboarded subject specialists to help with your business class anytime."
  },
  {
    icon: <HistoryEduOutlined />,
    title: "Online Assignment",
    desc: "Business class assignments can be tiring and take a lot of time due to other classes and test obligations. Consider us, knowing there is a professional tutor who may help complete assignment work while making it original and well-researched."
  }
];

const PageServicesSection = () => (
  <ServicesSection title={"What We Do For You"} services={services} />
);

export default PageServicesSection;
