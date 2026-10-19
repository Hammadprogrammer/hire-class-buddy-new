import React from 'react';
import { TimerOutlined, SchoolOutlined, HistoryEduOutlined } from '@mui/icons-material';
import ServicesSection, { ServiceItem } from '@/container/home/service_section/service_section';

const services: ServiceItem[] = [
  {
    icon: <TimerOutlined />,
    title: "Online Exam",
    desc: "Our professional tutors offer reliable online exam preparation and support you while keeping your privacy protected. We follow your exam guidelines and provide step-by-step guidance to help you feel confident and perform your best."
  },
  {
    icon: <SchoolOutlined />,
    title: "Online Class",
    desc: "If you are looking for professional online help, we are here to support you whenever you need us. Our experienced tutor can help with your coursework, explain difficult topics, and deliver strong results."
  },
  {
    icon: <HistoryEduOutlined />,
    title: "Online Assignment",
    desc: "It’s getting harder to find the right academic support when it comes to assignment writing. With schools and universities introducing stricter rules around AI-generated content, students need reliable guidance. As an assignment help service provider, we connect you with tutors who understand your requirements and can help you develop original, well-researched assignments."
  }
];

const PageServicesSection = () => (
  <ServicesSection title={"Key Service Features We Cover"} services={services} />
);

export default PageServicesSection;
