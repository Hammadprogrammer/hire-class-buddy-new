import Hero from "@/container/All-props-comp/hero-setion/hero_section";

export default function OnlineClassHero() {
  
  // New content: Nursing Class Bullets array
  const points = [
    "Nursing tutors with real clinical and teaching experience",
    "Help with care plans, case studies, and exam prep",
    "Sessions that fit around shifts and clinical"
  ];

  return (
    <main>
      <Hero
        heading={
          <>Hire Someone To Take My Online Nursing Class and Pass the Exam <span>Without Risk</span></>
        }
        subText={
          <p>
            No doubt, Nursing School is tough! Especially pharmacology, patho, care plans, and clinicals are at the top of it all. Nursing school is not easy, and an online class makes it difficult for students to manage everything at once. Our nursing experts help you prepare for your exams, and they'll explain difficult tasks in simple words so you can keep up and feel ready for every exam without having kind of feeling risk or stress for exams.
          </p>
        }
        bullets={points}
      />
    </main>
  );
}