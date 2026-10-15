import Testimonial from "@/container/All-props-comp/testimonial/testimonial";

export default function TestimonialSection() {
  const testimonialsData = [
    {
      text: "First time using a tutor for an assignment, and I wish I'd done it sooner. She caught so many small mistakes I would never have noticed.",
      author: "Sarah K"
    },
    {
      text: "My accounting assignment had numbers all over the place. My tutor walked me through each step, and now I actually get how journal entries work.",
      author: "Mark T"
    },
    {
      text: "Messaged them at 11 pm, panicking about a deadline. Someone replied in 10 mins and I had a session the next morning. Lifesaver.",
      author: "Jennifer L"
    },
    {
      text: "I was struggling to keep up with my English class and quizzes. However, this website helped me a lot in finding the right fit for me.",
      author: "Emily R"
    },
    {
      text: "Value for the money. Clear feedback, no fluff, and they actually explained why things needed changing instead of just marking them wrong.",
      author: "Zayn R"
    }
  ];

  const faqsData = [
    { 
      q: "Is it Legal to pay for assignment help?", 
      a: "Yeah, totally. It's basically paying a tutor. We help, you write it, you submit it. Nothing shady." 
    },
    { 
      q: "How do you check for plagiarism?", 
      a: "We run your final draft through a checker and send you the report. If anything pops up, your tutor sorts it out with you." 
    },
    { 
      q: "Do you help with every subject?", 
      a: "70+ of them, so probably yours too. Nursing, business, stats, English, IT... ask us if you're not sure." 
    },
    { 
      q: "How fast can I get feedback?", 
      a: "Usually same day or next day. If it's due tomorrow, tell us and we'll bump you up." 
    },
    { 
      q: "Is my personal information safe?", 
      a: "100%. We don't share your info with your school or anyone else. Period." 
    }
  ];

  return (
    <main>
      <Testimonial
        testimonials={testimonialsData}
        faqs={faqsData}
        title="5000+ Students Got Through Their Assignments, Hear From Them!"
        subtitle="Read reviews from students who improved their grades with our assignment help."
      />
    </main>
  );
}