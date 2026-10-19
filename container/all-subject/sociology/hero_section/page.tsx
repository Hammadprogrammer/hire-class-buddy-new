import Hero from "@/container/All-props-comp/hero-setion/hero_section";

export default function OnlineClassHero() {
  const points = [
    "Sociology Experts: Years of studying and teaching the subject",
    "Always Available: Evenings, weekends, late nights",
    "Kept Private: Your details and coursework stay with us"
  ];

  return (
    <main>
      <Hero
        heading={
          <>{"Hire Someone to Take My Online Sociology Class With 100% "}<span>{"Guaranteed Support"}</span></>
        }
        subText={
          <>
          <p>
            {"Read the same chapter three times and still can’t explain it? Hire Class Buddy has professional class tutors who are experts in the field of sociology and help you manage your full course without any hassle. Our experts are committed to helping you achieve outstanding results. Well, it's not too late to get help. Contact us today, and we will be there to help you."}
          </p>
          <p>
            {"Check what else we have:"}
          </p>
          </>
        }
        bullets={points}
      />
    </main>
  );
}
