import Testimonial from "@/container/All-props-comp/testimonial/testimonial";

export default function TestimonialSection() {
  const testimonialsData = [
    {
      text: "I contacted you really late because my exam was only two days away. I thought I had left it too late, but the tutor helped me focus on the topics I was weakest in instead of trying to study everything at once. That made a huge difference.",
      author: "Daniel R."
    },
    {
      text: "This professional tutor provider service is incredible. I kept getting certain questions wrong, and my tutor actually explained why instead of just giving me the answer. By exam day, I felt much calmer and better prepared.",
      author: "Emily J."
    },
    {
      text: "I had been falling behind for weeks and was starting to feel completely lost. The sessions were straightforward to follow. We went through the difficult chapters, reviewed my notes, and built a study plan that actually felt manageable.",
      author: "Jason K."
    },
    {
      text: "What I liked most was that the tutor didn’t make me feel stupid for asking basic questions. We went over everything at my pace, and I came away understanding topics I had been avoiding for most of the semester.",
      author: "Olivia T."
    },
    {
      text: "Without a doubt, I had the best experience. They made a huge difference in my grades.",
      author: "Daniel R."
    }
  ];

  const faqsData = [
    { q: "Can I Hire Someone to Do My Exam?", a: "Short answer: It depends. Schools treat it as cheating, and people do get caught. We'd much rather get you ready to take it yourself." },
    { q: "Can I Pay Someone to Do My Online Exam?", a: "Someone messaged us last week asking exactly this, three days before her stats final. We set her up with a tutor, did two practice tests, and she passed on her own. That's the kind of help we sell." },
    { q: "Can I Hire Someone to Do My Online Exam at the Last Minute?", a: "Not to take it, no. But if it's tomorrow, message us tonight. Even one good session before the night can help you a lot." },
    { q: "What Does \"Hire Someone to Take a Test for You\" Usually Mean?", a: "In our experience? \"I'm overwhelmed, and I don't know where to start.\" Totally fixable. Start with a tutor, a few practice questions, and a plan that’s what it actually means." },
    { q: "Can You Help If I Search \"Take My Exam for Me\"?", a: "We can't take it for you. What we can do is sit with you, figure out what you don't get yet, and quiz you until you do." },
    { q: "Do You Keep My Information Confidential?", a: "Yes always. Even if you found us by searching \"hire someone to take my online exam,\" your details stay private, and we only use what we need to set up your sessions." }
  ];

  return (
    <main>
      <Testimonial
        testimonials={testimonialsData}
        faqs={faqsData}
        title={"Hear From Our Happy Clients"}
      />
    </main>
  );
}
