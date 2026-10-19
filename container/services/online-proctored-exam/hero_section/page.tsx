import Hero from "@/container/All-props-comp/hero-setion/hero_section";

export default function OnlineClassHero() {

  // Updated Bullets array for Proctored Exams
  const points = [
    "Affordable tutoring plans designed for every student",
    "PhD-qualified experts offering specialized subject guidance",
    "24/7 professional customer support whenever you need assistance"
  ];

  return (
    <main>
      <Hero
        // Updated Heading
        heading={
          <>Take My Proctored Exam For Me & <span>Make Sure It Is Secure</span></>
        }
        // Updated Subtext
        subText={
          <p>
            Dear students, getting reliable proctored exam preparation support with personalized tutoring is often a dream of many students. This is where Hire Class Buddy comes in and offers proctored exams with expert guidance and customized study material. This is the right time to benefit from flexible support and guidance, especially tailored to you based on your subject.
          </p>
        }
        // Passing the updated array
        bullets={points}
      />
    </main>
  );
}
