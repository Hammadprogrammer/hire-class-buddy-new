import React from 'react';
import { TimerOutlined, SchoolOutlined, HistoryEduOutlined } from '@mui/icons-material';
import ServicesSection, { ServiceItem } from '@/container/home/service_section/service_section';

const services: ServiceItem[] = [
  {
    icon: <TimerOutlined />,
    title: "Online Exam",
    desc: "Send us your syllabus and past quizzes. Our tutor picks out the topics that keep showing up and builds a couple of timed practice tests from them. By the time the real exam opens, the questions won't look new."
  },
  {
    icon: <SchoolOutlined />,
    title: "Online Class",
    desc: "Have you missed weeks 3 and 4? Our expert tutor goes over those lectures with you in one or two sessions, then you meet once a week after that. Fifteen minutes on a Sunday can save you a lot of stress on a Friday."
  },
  {
    icon: <HistoryEduOutlined />,
    title: "Online Assignment",
    desc: "Paste the prompt, and your tutor explains what it's really asking for. Then you outline it together, you write the draft, and they mark it up with notes before you submit."
  }
];

const PageServicesSection = () => (
  <ServicesSection title={"Take a Look at Our Services"} services={services} />
);

export default PageServicesSection;
