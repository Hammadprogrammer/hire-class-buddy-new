import React from 'react';
import { TimerOutlined, SchoolOutlined, HistoryEduOutlined } from '@mui/icons-material';
import ServicesSection, { ServiceItem } from '@/container/home/service_section/service_section';

const services: ServiceItem[] = [
  {
    icon: <TimerOutlined />,
    title: "Online Exam",
    desc: "You must be thinking, who will help me prepare for my exam smoothly? The answer is simple: we have onboarded expert tutors who specialize in teaching difficult concepts and providing accurate and timely explanations to problems that you are unable to solve on your own."
  },
  {
    icon: <SchoolOutlined />,
    title: "Online Class",
    desc: "With so many classes, quizzes, and assignments, it can be impossible to manage them all at once. And that's why students start looking for someone to help with their online algebra class. That’s why we have personalized online class support, where a real tutor guides you through lessons and helps you stay on top of your coursework."
  },
  {
    icon: <HistoryEduOutlined />,
    title: "Online Assignment",
    desc: "A well-written assignment can easily increase your grades from B to A. That's why thousands of students search for phrases like “pay someone to do my online math class for me”. And we are also one of those service providers who can easily skyrocket your grades with a customized and well-researched solution."
  }
];

const PageServicesSection = () => (
  <ServicesSection title={"Service We Offer"} services={services} />
);

export default PageServicesSection;
