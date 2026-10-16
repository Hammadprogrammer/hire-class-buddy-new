import React from 'react';
import { TimerOutlined, SchoolOutlined, HistoryEduOutlined } from '@mui/icons-material';
import ServicesSection, { ServiceItem } from '@/container/home/service_section/service_section';

const services: ServiceItem[] = [
  {
    icon: <TimerOutlined />,
    title: "Online Exam",
    desc: "Our expert professionals look at your past quizzes and syllabus to figure out which problems keep coming up. Then you practice those, timed, until they feel easy. That’s how our chemistry exam prep works."
  },
  {
    icon: <SchoolOutlined />,
    title: "Online Class",
    desc: "Every week, our tutor goes over what’s coming in your course and explains anything the lecture didn’t make clear. Kind of like a lab partner who actually knows the answers."
  },
  {
    icon: <HistoryEduOutlined />,
    title: "Online Assignment",
    desc: "Well, assignments are difficult to handle, especially when it comes to chemistry. Our tutor makes it simple for you, then lets you try the next few. You finish it yourself, and you learn the method along the way."
  }
];

const PageServicesSection = () => (
  <ServicesSection title={"Have a Look At Our Service Features"} services={services} />
);

export default PageServicesSection;
