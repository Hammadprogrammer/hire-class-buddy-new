import Testimonial from "@/container/All-props-comp/testimonial/testimonial";

export default function TestimonialSection() {
  const testimonialsData = [
    {
      text: "HireClassBuddy preparation guidance helped me understand difficult concepts and organize my study schedule. The practice questions were useful, and I felt much more confident going into my proctored exam. The step-by-step explanations made revision easier and helped me focus on the areas that needed the most attention.",
      author: "Order # 58607"
    },
    {
      text: "The tutoring sessions were well organized and easy to follow. I received clear explanations of topics I had been struggling with, which made revision much easier.",
      author: "Order # 62642"
    },
    {
      text: "Getting academic support online was convenient for my schedule. I needed someone to appear for me for my proctored exam, and the professionals on this platform did it for me wonderfully well.",
      author: "Order # 26050"
    },
    {
      text: "They wonderfully did my proctored exam for me!",
      author: "Order # 51804"
    },
    {
      text: "The guidance on time management and online exam requirements helped me feel more prepared. The overall experience made my revision process more structured and less stressful.",
      author: "Order # 48204"
    }
  ];

  const faqsData = [
    { q: "Can someone take my proctored exam for me?", a: "Yes, definitely! Proctored exams are designed to verify a student's identity and independent work.. You can get professional support, subject-specific tutoring, practice questions, and study guidance to help you prepare for your exam with confidence." },
    { q: "Will the university's IT department detect the remote software?", a: "No, our custom software is entirely invisible to Task Manager, Honorlock, and Respondus algorithms. If you pay someone to take proctored exam tests using cheap commercial software (like TeamViewer), you will get caught. Our proprietary system guarantees 100% stealth and complete academic safety." },
    { q: "Can I pay someone for help with my online proctored exam?", a: "Yes, you can seek paid academic support, including personalized tutoring, exam preparation, mock tests, and explanations of difficult topics. Choose a service that follows your institution's academic integrity policies." },
    { q: "How can I prepare for an online proctored exam?", a: "Start by reviewing your syllabus, creating a study schedule, practicing sample questions, and revising challenging concepts. You should also check your internet connection, webcam, microphone, and testing software before exam day." },
    { q: "What subjects can I get proctored exam preparation help with?", a: "Preparation support may be available for subjects such as mathematics, business, accounting, computer science, psychology, nursing theory, and other academic disciplines, depending on tutor availability and expertise." }
  ];

  return (
    <main>
      <Testimonial
        testimonials={testimonialsData}
        faqs={faqsData}
        title={"We Value Our Clients; They Value Us In Return"}
      />
    </main>
  );
}
