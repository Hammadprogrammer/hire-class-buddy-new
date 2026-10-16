import Testimonial from "@/container/All-props-comp/testimonial/testimonial";

export default function TestimonialSection() {
  const testimonialsData = [
    {
      text: "Completely satisfied! The work was done perfectly. I’m happy that the writer considered every small detail and made it sound professional.",
      author: "Cameron T."
    },
    {
      text: "At first, I was scared to start. But Hire Class Buddy helped me a lot in securing the grades that I had always dreamed of.",
      author: "Polly W."
    },
    {
      text: "I was looking for an assignment writer but was unable to choose a service because of privacy concerns. But here, I found my information fully safe, and I felt there was no chance of any leakage.",
      author: "Bella W."
    },
    {
      text: "I was falling behind in my online class and honestly didn’t know how I was going to catch up. The tutor helped me understand the difficult topics, stay on top of weekly work, and feel much more confident about the class.",
      author: "Megan R."
    },
    {
      text: "Honestly, I was getting tired of trying to keep up with everything in my online class. Literally, the tutor helped me a lot.",
      author: "Ashley P."
    }
  ];

  const faqsData = [
    { q: "What's an online class help service?", a: "Basically, tutoring is built around your online course. Someone helps you understand lectures, plan your week, and prepare for tests. You still do the work." },
    { q: "How much does paid online class help cost?", a: "It totally depends on the subject and how much help you want. Pay per session or get a package. The first session is half off." },
    { q: "How fast can I hire online class help?", a: "Usually the same day. Something due tomorrow? Tell us, and we'll try to fit you in tonight." },
    { q: "Can I pick my own class expert?", a: "Yes, of course. Look through the profiles and choose, or let us match you." },
    { q: "Is my info private?", a: "Always. Nothing gets shared. Not with your school, not with anyone." }
  ];

  return (
    <main>
      <Testimonial
        testimonials={testimonialsData}
        faqs={faqsData}
        title={"Thousands of Reviews From Happy Students"}
      />
    </main>
  );
}
