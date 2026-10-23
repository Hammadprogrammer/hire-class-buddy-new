import Hero from "@/container/All-props-comp/hero-setion/hero_section";

export default function OnlineClassHero() {
  
  // New content: Chemistry Class Bullets array
  const points = [
    "PhD tutors who've taught general and organic chemistry",
    "Problem sets, lab reports, and test prep in one place",
    "Book a session whenever your schedule allows"
  ];

  return (
    <main>
      <Hero
        heading={
          <>Make Chemistry Easier With Take My Chemistry Class For Me <span>Service</span></>
        }
        subText={
          <>
            <p>
              Don&apos;t let the difficult equations ruin your CGPA. We agree with this fact: complex chemical formulas and equations require help, and luckily our expert tutors are here to help. Here, we are pleased to offer secure and reliable online class help to students. So, our experienced tutor takes every single step with you, which gradually boosts your trust.
            </p>
            <p>Let&apos;s check in on what more you can get from us:</p>
          </>
        }
        bullets={points}
      />
    </main>
  );
}