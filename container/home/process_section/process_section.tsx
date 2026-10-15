import React from 'react';
import { Container } from '@mui/material';
import { 
  DescriptionOutlined, 
  ShoppingCartCheckoutOutlined, 
  TaskAltOutlined
} from '@mui/icons-material';
import styles from './process_section.module.scss';

const WorkProcess = () => {
  const steps = [
    {
      id: 1,
      icon: <DescriptionOutlined />,
      title: "Share Your Requirement",
      desc: "You can easily reach out to us through live chat, WhatsApp, or phone and tell us what kind of academic support you are looking for. The more you share your requirements, the better it will be a chance to get a right tutor."
    },
    {
      id: 2,
      icon: <ShoppingCartCheckoutOutlined />,
      title: "Confirm Your Order",
      desc: "After understanding your requirements, the next step is to send the plan and quote based on your subject, deadline, and complexity of subjects. Review your order thoroughly before the payment process and get a chance to connect with a subject expert."
    },
    {
      id: 3,
      icon: <TaskAltOutlined />,
      title: "Update & Delivery",
      desc: "The work will start according to your agreed requirements and deadlines that will always keep you updated on the things that are progressing. If you have a question, need clarification, or want to share additional instructions, our support team will be available to assist you."
    }
  ];

  return (
    <section className={styles.processSection}>
      <Container maxWidth="lg">
        {/* Requirement: Main Heading H3 */}
        <div className={styles.header}>
          <h3 className={styles.mainTitle}>3 Quick Steps To Hire Someone to Complete an Online Class</h3>
          <p className={styles.subTitle}>
            Experience a heart-pounding class-taking journey with an easy, fast, and smooth process that doesn&apos;t take much time. So follow these three steps to get started with your online class support.
          </p>
        </div>

        <div className={styles.flexContainer}>
          {steps.map((step, index) => (
            <div className={styles.stepCard} key={step.id}>
              <div className={styles.iconWrapper}>
                {step.icon}
              </div>
              <div className={styles.content}>
                {/* Requirement: Step Heading H5 */}
                <h5 className={styles.stepTitle}>{step.id}. {step.title}</h5>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
              {/* Vertical Divider Logic for Desktop */}
              {index < steps.length - 1 && <div className={styles.divider} />}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WorkProcess;