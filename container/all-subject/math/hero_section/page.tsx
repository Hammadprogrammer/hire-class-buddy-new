import Hero from "@/container/All-props-comp/hero-setion/hero_section";

export default function OnlineClassHero() {
  const points = [
    "Algorithmic Pattern Matching: We look at the question patterns in your course and create practice problems that match them, so questions on your quiz or exam feel more familiar.",
    "Secure & Private Sessions: All sessions take place on encrypted platforms, and we never ask for your school login details.",
    "Safety and Security: Your tutor learns how you approach problems and builds on that, so you get faster and more confident in your own way of working."
  ];

  return (
    <main>
      <Hero
        heading={
          <>{"Want An Easy Solution? Pay Someone To Take My "}<span>{"Online Class"}</span></>
        }
        subText={
          <>
          <p>
            {"There is no subject that can be both easier and more overwhelming than math. So, if you are struggling with tricky formulas, algebra, or calculus, you might need some extra help. And I don't think you can find better help than Hire Class Buddy. We offer affordable rates and PhD-level tutors who help make the lesson easier to understand than you might imagine."}
          </p>
          </>
        }
        bullets={points}
      />
    </main>
  );
}
