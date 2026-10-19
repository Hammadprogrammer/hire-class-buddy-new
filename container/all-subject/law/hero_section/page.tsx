import Hero from "@/container/All-props-comp/hero-setion/hero_section";

export default function OnlineClassHero() {
  const points = [
    "Expert Professionals: Tutors with law degrees and years of teaching experience",
    "24/7 Available: Evenings, weekends, or late nights",
    "100% Confidential: Your details and coursework stay with us"
  ];

  return (
    <main>
      <Hero
        heading={
          <>{"Take My Law Class Online With "}<span>{"Top-Notch Experts"}</span></>
        }
        subText={
          <>
          <p>
            {"Most law students find it challenging to keep up with missed online classes while managing job, kids, and family responsibilities. So, we are here to provide you with online law class help; our platform connects you with verified PhD legal scholars who manage your full course case, including briefs, essays, and final exams. Don't hesitate to reach out to Hire Class Buddy for take my law class help and take your grades to a whole new level."}
          </p>
          </>
        }
        bullets={points}
      />
    </main>
  );
}
