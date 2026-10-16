import React from 'react';
import { TimerOutlined, SchoolOutlined, HistoryEduOutlined } from '@mui/icons-material';
import ServicesSection, { ServiceItem } from '@/container/home/service_section/service_section';

const services: ServiceItem[] = [
  {
    icon: <TimerOutlined />,
    title: "Online Exam",
    desc: "We aim to provide comprehensive exam support, which is why our tutor goes through every single practice test, topic review, and quick explanations of everything to show up on your exam."
  },
  {
    icon: <SchoolOutlined />,
    title: "Online Class",
    desc: "Biology class can get confusing fast, especially when one topic builds on another. Our skilled tutor takes care of your problem with having step by step solutions behind each one. This way, you can easily understand the method, not just the answer, and the next set of questions becomes easier to handle."
  },
  {
    icon: <HistoryEduOutlined />,
    title: "Online Assignment",
    desc: "Our biology tutor assists you with drafting, providing clear feedback on the structure, your data analysis, and your scientific writing. This way, you can submit it yourself, so the report stays completely yours."
  }
];

const PageServicesSection = () => (
  <ServicesSection title={"What We Offer"} services={services} />
);

export default PageServicesSection;
