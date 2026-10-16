import React from 'react';
import { TimerOutlined, SchoolOutlined, HistoryEduOutlined } from '@mui/icons-material';
import ServicesSection, { ServiceItem } from '@/container/home/service_section/service_section';

const services: ServiceItem[] = [
  {
    icon: <TimerOutlined />,
    title: "Online Exam",
    desc: "Before your exam, we sit down with your notes and figure out what's actually going to be on it. Then we practice. A lot. Students usually tell us the real test felt easier than our mock ones."
  },
  {
    icon: <SchoolOutlined />,
    title: "Online Class",
    desc: "If you hire us to take my class for you today or early in the morning. Our tutor helps you catch up, then checks in every week, so you stay caught up."
  },
  {
    icon: <HistoryEduOutlined />,
    title: "Online Assignment",
    desc: "Our tutor helps you plan your assignment directly from scratch, helps you plan it out, and reads your draft before it goes in."
  }
];

const PageServicesSection = () => (
  <ServicesSection title={"Online Class Service We Offer"} services={services} />
);

export default PageServicesSection;
