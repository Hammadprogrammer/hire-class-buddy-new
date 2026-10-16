import Hero from "@/container/All-props-comp/hero-setion/hero_section";

export default function OnlineClassHero() {
  const points = [
    "Expert Tutors: People who’ve studied and taught economics for years",
    "24/7 Support: Evenings, weekends, late nights, whenever you need it",
    "100% Confidentiality: Your details and coursework stay private"
  ];

  return (
    <main>
      <Hero
        heading={
          <>{"Pay Someone To Do My Online Economics Class To Get "}<span>{"Excellent Grades"}</span></>
        }
        subText={
          <>
          <p>
            {"Ever look at a supply and demand graph and wonder how to make sense of it? Worry not, you are not the only one struggling with it. There is no doubt, economics is the subject that mixes math, theory, and real-world stuff all at once, and with online classes, it’s easy to get lost. That's why our expert tutors make things easier with everyday examples, so the concepts make sense, stick with you, and help you achieve guaranteed results."}
          </p>
          </>
        }
        bullets={points}
      />
    </main>
  );
}
