import React from 'react';
import { TimerOutlined, SchoolOutlined, HistoryEduOutlined } from '@mui/icons-material';
import ServicesSection, { ServiceItem } from '@/container/home/service_section/service_section';

const services: ServiceItem[] = [
  {
    icon: <TimerOutlined />,
    title: "Online Exam",
    desc: "We can safely handle every aspect of your online physics exam. We have expert tutors who sit down with you and note everything from the beginning to the end; this way, your grades improve with our online class service."
  },
  {
    icon: <SchoolOutlined />,
    title: "Online Class",
    desc: "We have highly skilled physics class takers with many years of experience in both academic and real-world settings. They handle all of your coursework, making sure you will meet your deadlines and achieve your desired grades."
  },
  {
    icon: <HistoryEduOutlined />,
    title: "Online Assignment",
    desc: "Since every student has different challenges, and between them, making a well-researched and unique assignment is really difficult. Here, our tutor generates an assignment that mainly works for you. Whether you require assistance with a single assignment or continuous support during your online physics course."
  }
];

const PageServicesSection = () => (
  <ServicesSection title={"Key Services We Cover"} services={services} />
);

export default PageServicesSection;
