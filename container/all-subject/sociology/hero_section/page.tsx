import Hero from "@/container/All-props-comp/hero-setion/hero_section";

export default function OnlineClassHero() {
  
  // New content: Sociology Class Bullets array
  const points = [
    "Sociology Experts: Years of studying and teaching the subject",
    "Always Available: Evenings, weekends, late nights",
    "Kept Private: Your details and coursework stay with us"
  ];

  return (
    <main>
      <Hero 
        // New Heading
        heading={
          <>Hire Someone to Take My Online Sociology Class With <span>100% Guaranteed Support</span></>
        }
        // New Subtext
        subText={
          <>
            <p>
              Read the same chapter three times and still can&apos;t explain it? Hire Class Buddy has professional class tutors who are experts in the field of sociology and help you manage your full course without any hassle. Our experts are committed to helping you achieve outstanding results. Well, it&apos;s not too late to get help. Contact us today, and we will be there to help you.
            </p>
            <p>Check what else we have:</p>
          </>
        }
        // Updated Bullets array
        bullets={points}
      />
    </main>
  );
}
