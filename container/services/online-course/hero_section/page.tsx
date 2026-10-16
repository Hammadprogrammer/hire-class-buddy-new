import Hero from "@/container/All-props-comp/hero-setion/hero_section";

export default function OnlineClassHero() {
  const points = [
    "PHD Level Tutors: Specialists in 70+ subjects",
    "24/7 Support: Mornings, nights, and weekends",
    "Private and Secure: Your details stay with us"
  ];

  return (
    <main>
      <Hero
        heading={
          <>{"Say Do My Online Course For Me and Hire Professionals "}<span>{"From Us"}</span></>
        }
        subText={
          <>
          <p>
            {"We have a course helper that can provide you with a secure, human-friendly solution. When you request our expert online course support, we connect you with expert professionals to ensure our specialists can access your portal while keeping your credentials secure."}
          </p>
          </>
        }
        bullets={points}
      />
    </main>
  );
}
