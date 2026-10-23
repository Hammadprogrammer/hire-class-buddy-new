import Testimonial from "@/container/All-props-comp/testimonial/testimonial";

export default function TestimonialSection() {
  const testimonialsData = [
    {
      text: "Honestly, I had no hope of completing this course. But my tutor helped me make a plan and checked in every Sunday, and I finished it on time.",
      author: "Sarah. k"

    },
    {
      text: "I definitely recommend them! As a working mom, I had maybe two hours a week for my class. My tutor made those two hours count. They organize, teach, and help me very patiently.",
      author: "Emily R."
    },
    {
      text: "Good service. Fast replies, fair price. My tutor explained the stats stuff way better than my professor did.",
      author: "Jessica M."
    },
    {
      text: "I was skeptical at first because I’ve tried other sites before. This felt different. They sit with you and make every assignment with proper details and citations. Truly love them!",
      author: "Rachel T."
    }, {
      text: "10/10. Booked a session the night before my midterm and still got help.",
      author: "Amanda P."
    }
  ];

  const faqsData = [
    { q: "What does online course help include?", a: "A lot, wherever you are stuck. Some students just want a weekly check-in to stay on track. Others need help planning a big project, feedback on a draft, or a few practice quizzes before an exam. Your tutor helps, and you do the actual work." },
    { q: "Will someone complete my online course for me?", a: "Nope, we don’t do that. It’s against school rules, and people do get caught. We’d rather help you get through it yourself, so the grade is actually yours." },
    { q: "Can I get help for just one part of my course?", a: "Sure. One essay, one tricky module, one test, whatever it is. Book a single session. You don’t have to sign up for a package." },
    { q: "How fast can I get online course support?", a: "It depends a bit on the subject. For most courses, though, you’ll be talking to a tutor the same day you reach out." },
    { q: "Does all my information stay private?", a: "Yes. Your name, your course, your messages- none of it goes anywhere. Not to your school, not to anyone." }
  ];

  return (
    <main>
      <Testimonial
        testimonials={testimonialsData}
        faqs={faqsData}
        title="Real Words From Our Successful Students"
        subtitle="1000+ students secure A grades with us; see their feedback!"
      />
    </main>
  );
}