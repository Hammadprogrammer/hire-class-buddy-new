import Hero from "@/container/All-props-comp/hero-setion/hero_section";

export default function OnlineClassHero() {
  
  // New content: History Class Bullets array
  const points = [
    "PHD History Tutor: Tutors who have spent years studying and teaching history.",
    "24/7 Support: Flexible times, including evenings and weekends",
    "100% Confidentiality: Personal information and coursework remain private."
  ];

  return (
    <main>
      <Hero
        heading={
          <>Take My Online History Class for Me: Aim For A Grades With <span>Expert Help</span></>
        }
        subText={
          <p>
            Are you dreaming of achieving A grades, but history seems to make it impossible? No doubt! History is known for being dry, but honestly it's one of the most interesting subjects out there once someone shows you the people and decisions behind the events. That's what our tutors do. They take the reading you've been dreading and turn it into something you can actually follow, remember, and write about. With the right guidance and consistent practice, those A grades may no longer feel out of reach.
          </p>
        }
        bullets={points}
      />
    </main>
  );
}