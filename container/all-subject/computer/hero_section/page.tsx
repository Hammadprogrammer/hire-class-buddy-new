import Hero from "@/container/All-props-comp/hero-setion/hero_section";

export default function OnlineClassHero() {
  const points = [
    "CS Experts: Tutors with computer science degrees and real coding experience",
    "Always Available: Evenings, weekends, or late nights",
    "Kept Private: Your details and coursework stay with us"
  ];

  return (
    <main>
      <Hero
        heading={
          <>{"Do My Computer Class for Me and Say Goodbye to "}<span>{"Coding Stress"}</span></>
        }
        subText={
          <>
          <p>
            {"Is it getting tough for you to manage your online computer class and other responsibilities together? If you are planning to hire someone to take my computer class online, you are literally making a smart move. Computer science is one of those subjects that looks exciting at first, but then come loops, recursion, data structures, and assignments that seem to take forever."}
          </p>
          <p>
            {"That's why choose Hire Class Buddy for online Computer Science class help. Our tutors help you understand the concepts, debug your code, plan your projects, and get ready for exams, so you can keep moving forward without the stress."}
          </p>
          </>
        }
        bullets={points}
      />
    </main>
  );
}
