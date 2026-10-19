import React from 'react';
import { TimerOutlined, SchoolOutlined, HistoryEduOutlined } from '@mui/icons-material';
import ServicesSection, { ServiceItem } from '@/container/home/service_section/service_section';

const services: ServiceItem[] = [
  {
    icon: <TimerOutlined />,
    title: "Online Exam",
    desc: "We offer reliable online exam support where your privacy remains a priority. Our expert tutors help you prepare for exams with affordable guidance aimed at better results."
  },
  {
    icon: <SchoolOutlined />,
    title: "Online Class",
    desc: "Looking for a reliable online class solution? Connect with a skilled tutor who helps you with classwork, discussions, and weekly tasks to ensure you stay on track throughout the semester."
  },
  {
    icon: <HistoryEduOutlined />,
    title: "Online Assignment",
    desc: "Unable to complete the assignment within the given time? Contact us, as we have a professional tutor who completes the assignment with proper reserch that can surely produce better-quality work."
  }
];

const PageServicesSection = () => (
  <ServicesSection title={"Online Class Service Key Features"} services={services} />
);

export default PageServicesSection;
