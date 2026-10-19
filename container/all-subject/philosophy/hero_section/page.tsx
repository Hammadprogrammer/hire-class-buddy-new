import Hero from "@/container/All-props-comp/hero-setion/hero_section";

export default function OnlineClassHero() {
  
  // New content: Philosophy Class Bullets array
  const points = [
    "Philosophy Experts: Tutors with law degrees and years of teaching experience",
    "Always Available: Evenings, weekends, or late nights",
    "Kept Private: Your details and coursework stay with us"
  ];

  return (
    <main>
      <Hero
        // New Heading
        heading={
          <>Hire Someone to Take My Online Philosophy and <span>Bye-Bye Stress and Deadlines</span></>
        }
        // New Subtext
        subText={
          <p>
            When handling a hectic timeline, it's smart to hire someone who can help with my philosophy class and relieve pressure. Philosophy focuses on ideas like morality and existence and builds thinking skills through responsiveness, reflection, and reasoning. And many students choose this subject to score high, but find it more challenging than expected. As a result, students often search: Can I pay someone to take my online philosophy class? Hire Class Buddy is one of the platform is USA that provides professional assistance with your online philosophy class, offering secure and confident support. Here, we help you with assignments, discussions, essays, and coursework so you can stay focused without stress.
          </p>
        }
        // Updated Bullets array
        bullets={points}
      />
    </main>
  );
}