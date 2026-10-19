import React from 'react';
import { TimerOutlined, SchoolOutlined, HistoryEduOutlined } from '@mui/icons-material';
import ServicesSection, { ServiceItem } from '@/container/home/service_section/service_section';

const services: ServiceItem[] = [
  {
    icon: <TimerOutlined />,
    title: "Online Exam Guide",
    desc: "HireClassBuddy offers online exam help to students across the globe. We make sure students feel secure, and hence we have developed our very own software, which ensures 100% security while we offer exam assistance. Apart from that, our expert tutors associated with different institutes and subjects ensure top-grade material."
  },
  {
    icon: <SchoolOutlined />,
    title: "Online Tutoring Service",
    desc: "What students love about our tutoring service is the preparation material we offer. Students who have worked with us are a testament to the quality of our services. Connect with us for the best tutoring service supervised by subject experts. We have PhDs guiding you through all the challenges you have related to any specific subject."
  },
  {
    icon: <HistoryEduOutlined />,
    title: "Online Assignment Help",
    desc: "Be it a dissertation, essay, proposal, or just an assignment, our experts make sure to adhere to your university rules and citation guide, which matters most to your score. We ensure you get the best grade when it comes to submitting the assignment. With just a single click, you can get completely original work, ready for submission."
  }
];

const PageServicesSection = () => (
  <ServicesSection title={"Students Prefer To Work With Us"} services={services} />
);

export default PageServicesSection;
