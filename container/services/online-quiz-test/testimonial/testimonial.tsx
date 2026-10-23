import Testimonial from "@/container/All-props-comp/testimonial/testimonial";

export default function TestimonialSection() {
  const testimonialsData = [
    {
      text: "Literally, I was so worried about how I was going to handle everything. My tutor helped me much more than I expected and made the difficult parts feel a lot easier.",
      author: "Emily R."

    },
    {
      text: "The practice questions came really close to my deadline, and some of them were honestly complicated to understand. With my tutor's help, I finally got a B+ for the first time this semester.",
      author: "Daniel M."
    },
    {
      text: "I was drowning between working double shifts and raising a toddler, and I really needed a helping hand. Hire Class Buddy connected me with a tutor who helped me prepare properly, and I was able to secure a B grade.",
      author: "Sarah T."
    },
    {
      text: "I was falling behind and needed to speed things up before my test. My tutor helped me understand the important topics, practice the questions, and feel much more confident about getting a higher grade.",
      author: "Michael J."
    }
  ];

  const faqsData = [
    { q: "Can I hire someone to take my online MBA test safely?", a: "Our experts provide secure, personalized support to help you understand difficult topics, practice important questions, and feel more confident before test day. Your personal information is handled with care, and our support is designed to help you prepare while keeping your academic work your own." },
    { q: "Can you help if my test is due tomorrow?", a: "Usually, yes. Message us as soon as you can, and we'll try to set up a session the same day." },
    { q: "Do you help with MBA and business studies tests?", a: "Yes. We cover finance, accounting, marketing, management, and strategy, plus case-study style questions." },
    { q: "Will someone take my test or quiz for me?", a: "No. That breaks school rules and can get you expelled. We help you connect with an expert tutor who helps you and takes your test while keeping connect with you." },
    { q: "How much does test prep cost?", a: "It depends on your subject and how many sessions you need. You can pay per session or choose a package, and your first session is 50% off." }
  ];

  return (
    <main>
      <Testimonial
        testimonials={testimonialsData}
        faqs={faqsData}
        title="1000+ Students Succeeded With Us"
        subtitle="Read What Our Students Say About Their Journey"
      />
    </main>
  );
}