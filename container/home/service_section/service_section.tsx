import React from 'react';
import { Container } from '@mui/material';
import { 
  TimerOutlined,         
  SchoolOutlined,         
  HistoryEduOutlined
} from '@mui/icons-material';
import styles from './service_section.module.scss';

export interface ServiceItem {
  icon?: React.ReactNode;
  title: string;
  desc: string;
}

interface ServicesSectionProps {
  title?: string;
  services?: ServiceItem[];
}

const defaultServices: ServiceItem[] = [
  {
    icon: <TimerOutlined />,
    title: "Online Exam Prep",
    desc: "Your exam is coming up soon, and you are worried about how to start? Our tutors go through the topics that usually show up, explain the \"why\" behind each answer, and give you timed practice. So when exam day comes, it feels like something you've already done. That's online exam prep done right."
  },
  {
    icon: <SchoolOutlined />,
    title: "Online Class Tutoring",
    desc: "Need help keeping up with your online class? Your online class tutor checks in weekly, walks you through classwork and discussion topics, and clears up anything confusing. Little by little, you catch up and stay there."
  },
  {
    icon: <HistoryEduOutlined />,
    title: "Online Assignment Help",
    desc: "If you're unsure about your assignment, then hold on! Send it over. A subject expert reads it and tells you what's working, what's missing, and how to fix the structure, sources, and formatting."
  }
];

const ServicesSection: React.FC<ServicesSectionProps> = ({
  title = "What We Can Do For You",
  services = defaultServices
}) => {
  return (
    <section className={styles.servicesSection}>
      <Container maxWidth="lg">
        {/* Requirement: Main Heading H2 */}
        <div className={styles.header}>
          <h2 className={styles.mainTitle}>{title}</h2>
        </div>

        <div className={styles.flexWrapper}>
          {services.map((service, index) => (
            <div className={styles.serviceCard} key={index}>
              <div className={styles.cardInner}>
                
                {/* Background Fill Overlay */}
                <div className={styles.hoverOverlay} />
                
                <div className={styles.cardContent}>
                  {/* Icon with spinning border animation */}
                  <div className={styles.iconContainer}>
                    <div className={styles.spinningBorder}></div>
                    <div className={styles.iconCircle}>
                      {service.icon}
                    </div>
                  </div>

                  {/* Requirement: Icon Box Heading H4 */}
                  <h4 className={styles.cardHeading}>{service.title}</h4>
                  <p className={styles.cardDesc}>{service.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;