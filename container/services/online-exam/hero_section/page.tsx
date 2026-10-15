
import Hero from "@/container/All-props-comp/hero-setion/hero_section";

export default function OnlineHero() {
  
  // Bullets array
  const points = [
    "Study smarter and go for the A grade",
    "Matched with a specialist for your course",
    "Proctored exam prep that builds confidence"
  ];

  return (
    <main>
      <Hero 
        heading={
          <>Professional Online Support for Taking My Online Exam: <span>Get Ready, Not Stressed!</span></>
        }
        subText={
          <p>
            What do you think? Can a high grade really be achieved easily? Not always; you need the right preparation, guidance, expert execution, and a clear exam strategy. That&apos;s what Hire Class Buddy does. Here, we provide professional academic support that helps you achieve better results, understand difficult concepts, and improve your overall performance. So, don&apos;t worry; our professional experts will help you.
          </p>
        }
        bullets={points}
      />
    </main>
  );
}