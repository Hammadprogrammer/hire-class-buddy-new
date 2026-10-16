import React from 'react';
import { TimerOutlined, SchoolOutlined, HistoryEduOutlined } from '@mui/icons-material';
import ServicesSection, { ServiceItem } from '@/container/home/service_section/service_section';

const services: ServiceItem[] = [
  {
    icon: <TimerOutlined />,
    title: "Online Exam",
    desc: "This might be difficult to prepare for an exam, particularly if you have to deal with everything on your own. Here we deliver all exam assistance while ensuring all your credentials remain safe and secure."
  },
  {
    icon: <SchoolOutlined />,
    title: "Online Class",
    desc: "It can be very complex to keep up with a whole online statistics course, especially if you have to deal with quizzes, assignments, and tests at a time. We can help you do your online statistics class for you, taking care of your particular difficulties and eventually promoting your success."
  },
  {
    icon: <HistoryEduOutlined />,
    title: "Online Assignment",
    desc: "We know every student is unique in their own terms; for this reason, we deliver customized assignment writing services. We are here to help you achieve A grades with well-researched assignment services."
  }
];

const PageServicesSection = () => (
  <ServicesSection title={"Services We Offer In Our Online Class"} services={services} />
);

export default PageServicesSection;
