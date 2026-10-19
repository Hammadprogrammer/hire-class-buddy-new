import React from 'react';
import { TimerOutlined, SchoolOutlined, HistoryEduOutlined } from '@mui/icons-material';
import ServicesSection, { ServiceItem } from '@/container/home/service_section/service_section';

const services: ServiceItem[] = [
  {
    icon: <TimerOutlined />,
    title: "Online Exam",
    desc: "Worried about your history exam? Hire us for exam preparation support, including quizzes and written exams. Our expert tutor helps you identify important topics and practice short answers and essay questions until you can explain them confidently."
  },
  {
    icon: <SchoolOutlined />,
    title: "Online Class",
    desc: "Having trouble balancing your coursework? Our professional history tutor helps you keep up with your online history class. Weekly sessions keep you on top of the readings and give you a place to ask everything you didn’t get to ask in class."
  },
  {
    icon: <HistoryEduOutlined />,
    title: "Online Assignment",
    desc: "Old assignment, want to get rid of these problems? No doubt, choosing a topic from scratch and preparing a final draft with proper citations can be a complicated task. That's where our tutors step in, offering guidance throughout the process at an affordable rate."
  }
];

const PageServicesSection = () => (
  <ServicesSection title={"Service We Offer"} services={services} />
);

export default PageServicesSection;
