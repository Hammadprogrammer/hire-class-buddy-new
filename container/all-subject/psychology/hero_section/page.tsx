import Hero from "@/container/All-props-comp/hero-setion/hero_section";

export default function OnlineClassHero() {
  const points = [
    "Psychology Experts: Years of experience in studying and teaching the subject",
    "Always Available: Available at any time, whether evenings, weekends, or late nights",
    "Kept Private: Your details and coursework stay with us"
  ];

  return (
    <main>
      <Hero
        heading={
          <>{"Find Expert Help With Taking My Psychology Class and "}<span>{"Score Better"}</span></>
        }
        subText={
          <>
          <p>
            {"Can someone take my psychology class for me? Yes! Hire Class Buddy has professional tutors who explain each concept with simple, real-life examples, so they can help you understand demanding psychology coursework more effectively."}
          </p>
          <p>
            {"So, whether you are looking for introductory psychology, developmental psychology, social psychology, or another specialized course, we have expert professional assistance for either one subject or the entire course. Well, it's not too late to get help. Contact us today, and we will be there for you."}
          </p>
          </>
        }
        bullets={points}
      />
    </main>
  );
}
