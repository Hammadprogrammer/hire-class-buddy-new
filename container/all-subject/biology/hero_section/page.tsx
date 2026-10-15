import Hero from "@/container/All-props-comp/hero-setion/hero_section";

export default function OnlineClassHero() {
  
  // New content: Biology Class Bullets array
  const points = [
    "Expert tutors with real teaching experience",
    "Homework help, lab report feedback, and exam prep",
    "Sessions that fit around your work and life"
  ];

  return (
    <main>
      <Hero
        heading={
          <>Hire Someone to Take My Online Biology Class For <span>Better Grades</span></>
        }
        subText={
          <p>
            Stuck on respiration, genetics, or the Krebs cycle? Well, biology has many moving parts, and it's easy to fall behind. Our expert tutor explains difficult concepts in simple words, helping you through the chapters and topics of your exam. We support you throughout the whole process.
          </p>
        }
        bullets={points}
      />
    </main>
  );
}