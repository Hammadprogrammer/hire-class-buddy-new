import Hero from "@/container/All-props-comp/hero-setion/hero_section";

export default function OnlineClassHero() {
  const points = [
    "Statistics Specialists: Tutors who’ve used and taught statistics for years",
    "24/7 Availability: Help in the evenings, on weekends, and late at night",
    "Complete Privacy: Your details and coursework stay with us"
  ];

  return (
    <main>
      <Hero
        heading={
          <>{"Get Online Statistics Class Assistance With "}<span>{"Expert Professionals"}</span></>
        }
        subText={
          <>
          <p>
            {"When it comes to taking an online statistics class, students frequently inquire, \" Can I hire someone to take my online statistics class?\" The response is straightforward: you need a helping hand, not someone to handle everything for you, but someone who makes it easier to understand while you manage your ongoing job, kids, and much more."}
          </p>
          <p>
            {"We at Hire Class Buddy offer professional academic support that handles all the challenging assignments, quizzes, and test preparation. Our expert tutor will make sure you get the grades you need without unnecessary stress."}
          </p>
          <p>
            {"That’s exactly what our tutors do."}
          </p>
          </>
        }
        bullets={points}
      />
    </main>
  );
}
