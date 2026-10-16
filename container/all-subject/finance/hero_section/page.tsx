import Hero from "@/container/All-props-comp/hero-setion/hero_section";

export default function OnlineClassHero() {
  const points = [
    "Finance Specialists: Tutors with finance, accounting, and MBA backgrounds",
    "Help Any Hour: Late nights, weekends, the night before a test",
    "Private and Secure: Your details stay with us"
  ];

  return (
    <main>
      <Hero
        heading={
          <>{"Hire Someone to Take My Online Finance Class For Me and Secure "}<span>{"Your Future"}</span></>
        }
        subText={
          <>
          <p>
            {"You know, when you take finance class help from us, you meet with a professional assistant who ensures that your digital record stays private while you work on the other things. This approach is designed for finance as well, because finance isn’t hard. You’re bad with numbers. It’s hard because nobody slowed down and showed you how to fix it. That’s what our tutors do, one problem at a time."}
          </p>
          </>
        }
        bullets={points}
      />
    </main>
  );
}
