import Hero from "@/container/All-props-comp/hero-setion/hero_section";

export default function OnlineClassHero() {
  const points = [
    "PhD-level Tutors: Years of studying and teaching physics",
    "24/7 Availability: Evenings, weekends, and late-night help",
    "Complete Privacy: Your details and coursework stay with us"
  ];

  return (
    <main>
      <Hero
        heading={
          <>{"Aim For A Grades: Get Expert Help With Your Online "}<span>{"Physics Class"}</span></>
        }
        subText={
          <>
          <p>
            {"If \"hire someone to take my online physics test\" is the query you are searching for, and you are waiting for the right website to come along. Now, you have found the right place. No doubt! It's tough to balance the equations, diagrams, units, and the problems that seem to change every time, which is why many students lose interest. At the same time, that can affect their CGPA."}
          </p>
          <p>
            {"But here's the good news: physics follows rules, and once someone shows you those rules clearly, the problems stop feeling random. That’s exactly what our tutors do. They specialize in each topic, helping you make it simple enough that you can actually follow."}
          </p>
          </>
        }
        bullets={points}
      />
    </main>
  );
}
