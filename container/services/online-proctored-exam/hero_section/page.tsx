import Hero from "@/container/All-props-comp/hero-setion/hero_section";

export default function OnlineClassHero() {
  const points = [
    "Affordable tutoring plans designed for every student.",
    "PhD-qualified experts offering specialized subject guidance.",
    "24/7 professional customer support whenever you need assistance."
  ];

  return (
    <main>
      <Hero
        heading={
          <>{"Take My Proctored Exam For Me & Make Sure It "}<span>{"Is Secure"}</span></>
        }
        subText={
          <>
          <p>
            {"Dear students, getting reliable proctored exam preparation support with personalized tutoring is often a dream of many students. This is where Hire Class Buddy comes in and offers proctored exams with expert guidance and customized study material. This is the right time to benefit from flexible support and guidance, especially tailored to you based on your subject."}
          </p>
          </>
        }
        bullets={points}
      />
    </main>
  );
}
