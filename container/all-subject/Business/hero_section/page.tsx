import Hero from "@/container/All-props-comp/hero-setion/hero_section";

export default function OnlineClassHero() {
  
  // New content: Business Class Bullets array
  const points = [
    "Expert Tutors: Business degrees and real industry experience",
    "24/7 Support: Evenings, weekends, late nights",
    "100% Confidentiality: Your details and coursework stay private"
  ];

  return (
    <main>
      <Hero 
        // New Heading
        heading={
          <>Hire Someone to Take My Business Class and <span>Earn Better Grades</span></>
        }
        // New Subtext
        subText={
          <p>
            Many students enroll themselves in a business course, and later they regret it. There is a lot of work and time required for this course, which students may not be able to provide easily. For these reasons, students may regret their decision. Now you can get structured online business class help from us, as we provide help with weekly coursework, assignments, discussions, and difficult subjects while keeping your course requirements organized.
          </p>
        }
        // Updated Bullets array
        bullets={points}
      />
    </main>
  );
}