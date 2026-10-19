import React from 'react';
import { TimerOutlined, SchoolOutlined, HistoryEduOutlined } from '@mui/icons-material';
import ServicesSection, { ServiceItem } from '@/container/home/service_section/service_section';

const services: ServiceItem[] = [
  {
    icon: <TimerOutlined />,
    title: "Online Exam",
    desc: "Our professionals provide expert assistance with all your law assessments to ensure you meet the required academic standards and work toward achieving your desired results."
  },
  {
    icon: <SchoolOutlined />,
    title: "Online Class",
    desc: "From complex subjects to general law classes, we provide help in taking these subject accurate and timely manner, ensuring that you never miss any important lessons."
  },
  {
    icon: <HistoryEduOutlined />,
    title: "Online Assignment",
    desc: "Don't stress over online assignments in your law subject, since our professionals will sit with you, note every parameter, and help you prepare work that is original, well-researched, and aligned with your professor's guidelines."
  }
];

const PageServicesSection = () => (
  <ServicesSection title={"Service We Offer"} services={services} />
);

export default PageServicesSection;
