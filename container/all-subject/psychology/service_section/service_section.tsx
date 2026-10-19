import React from 'react';
import { TimerOutlined, SchoolOutlined, HistoryEduOutlined } from '@mui/icons-material';
import ServicesSection, { ServiceItem } from '@/container/home/service_section/service_section';

const services: ServiceItem[] = [
  {
    icon: <TimerOutlined />,
    title: "Online Exam",
    desc: "Psychology exams require more attention to the famous theories and applied questions. Our tutor goes over the important theories and terms, and practices them with you until you fully understand each concept and feel  prepared for your exam"
  },
  {
    icon: <SchoolOutlined />,
    title: "Online Class",
    desc: "Psychology class requires someone who can help you understand theories with real-world examples, evaluate competing perspectives, and engage critically with classmates. Our expert tutor takes this online course without missing any important lessons, while keeping you updated on class activities."
  },
  {
    icon: <HistoryEduOutlined />,
    title: "Online Assignment",
    desc: "Our psychologist expert help you write papers with proper citations and actual peer-reviewed reviews, construct logical arguments, and ensure your work remains original and aligned with your professor's guidelines."
  }
];

const PageServicesSection = () => (
  <ServicesSection title={"Service We Offer"} services={services} />
);

export default PageServicesSection;
