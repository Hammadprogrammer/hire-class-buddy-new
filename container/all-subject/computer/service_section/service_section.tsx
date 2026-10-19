import React from 'react';
import { TimerOutlined, SchoolOutlined, HistoryEduOutlined } from '@mui/icons-material';
import ServicesSection, { ServiceItem } from '@/container/home/service_section/service_section';

const services: ServiceItem[] = [
  {
    icon: <TimerOutlined />,
    title: "Online Exam",
    desc: "Our computer exam helpers are always available to assist you. So, share your course information with our expert professionals. They will help you prepare for your exams and work toward achieving your desired A or B grades."
  },
  {
    icon: <SchoolOutlined />,
    title: "Online Class",
    desc: "When you hire someone to help with your online computer class, your computer tutor takes full responsibility for guiding you through every lesson while keeping you updated on your coursework."
  },
  {
    icon: <HistoryEduOutlined />,
    title: "Online Assignment",
    desc: "Assignments are part of academic requirements, and they carry significant weight in your overall grades. So, don't hesitate to hire our professionals. They help you manage your assignments with accuracy, precision, and care."
  }
];

const PageServicesSection = () => (
  <ServicesSection title={"What Services Does a Computer Class Helper Offer You?"} services={services} />
);

export default PageServicesSection;
