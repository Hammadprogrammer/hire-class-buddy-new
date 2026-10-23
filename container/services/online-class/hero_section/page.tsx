
import Hero from "@/container/All-props-comp/hero-setion/hero_section";

export default function OnlineClassHero() {
  
  // Bullets array
  const points = [
    "4598+ tutors across 70+ subjects",
    "Weekly follow-ups, so nothing sneaks up on you",
    "Help 24/7 or whenever you need it"
  ];

  return (
    <main>
      <Hero
        heading={
          <>Take Online Class Assistance From an Expert Who <span>Actually Gets It</span></>
        }
        subText={
          <>
            <p>
              Stop letting your energy drain your brain! Our online class help service is designed to support you throughout the course. If you have missed a lecture, a quiz you forgot, or a discussion post due at midnight? Hire a professional class expert who can help you work through online class assignments and class-related questions on your mind!
            </p>
            <p>
              We have more than this;
            </p>
          </>
        }
        bullets={points}
      />
    </main>
  );
}