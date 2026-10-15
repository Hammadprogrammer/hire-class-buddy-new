import Testimonial from "@/container/All-props-comp/testimonial/testimonial";

export default function TestimonialSection() {
  const testimonialsData = [
    {
      text: "I was always behind in my online class. My tutor made a simple weekly plan, and now I'm finally on top.",
      author: "Jane L"
    },
    {
      text: "It was a pleasure to hire such a tutor that help mme in understanding the stats that never made sense to me. But they explained me slowly, and I passed my final on my own.",
      author: "Tom H."
    },
    {
      text: "I work full-time, so I only had evenings. They found me a tutor who worked around my schedule. Really helpful.",
      author: "Sarah L."
    },
    {
      text: "I literally had a panic attack when I read the case briefs in business law. After a few sessions, they actually made sense.",
      author: "Michael B."
    },
    {
      text: "Getting help with my online class here was the best decision I made this semester. My grade went from a D to a B.",
      author: "Emily R"
    }
  ];

  const faqsData = [
    { 
      q: "Do you have tutors for online business law classes?", 
      a: "We have, and honestly it's one of the subjects we get asked about most. Case briefs and contracts get a lot easier once someone walks you through them." 
    },
    { 
      q: "How much does online class tutoring cost?", 
      a: "Depends on the subject and how much help you want. Either way, your first session is half off." 
    },
    { 
      q: "Can my online class tutor work around my job?", 
      a: "Sure. Just tell us when you're free- early morning, late night, weekends, whatever works- and we'll find someone who matches you." 
    },
    { 
      q: "Can I pay someone to take a class for me?", 
      a: "You could find people who'd say yes, but it's risky. You could fail or get kicked out. A tutor is the safer bet." 
    },
    { 
      q: "Can I hire someone to take my online business law class?", 
      a: "Not here, sorry. What we can do is help you understand it, so the exam doesn't catch you off guard." 
    }
  ];

  return (
    <main>
      <Testimonial
        testimonials={testimonialsData}
        faqs={faqsData}
        title="Listen to the Testimonials and Feedback from Our Valued Customers"
        subtitle="Read custom feedback and learn how effective their positive interactions were."
      />
    </main>
  );
}