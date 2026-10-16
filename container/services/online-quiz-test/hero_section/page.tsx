import Hero from "@/container/All-props-comp/hero-setion/hero_section";

export default function OnlineClassHero() {
  const points = [
    "Expert Test Prep Tutors: Specialists in 70+ subjects, including MBA and business",
    "24/7 Support: Help in the evenings, on weekends, and the night before a test",
    "100% Confidentiality: Your personal details and coursework stay private"
  ];

  return (
    <main>
      <Hero
        heading={
          <>{"Take My Online Test For Me, Hire an Expert to Help With "}<span>{"A Grades"}</span></>
        }
        subText={
          <>
          <p>
            {"Are your grades at stake because your test deadline is just around the corner, and you are not prepared for the test? For this reason, many students search \"Can I pay someone to take a test?\" Some online classes are manageable, while others are demanding and difficult to keep up with. Over time, endless online tests, assignments, and classes can become overwhelming, especially when everything needs to be completed on time."}
          </p>
          <p>
            {"So, is it worth getting test help? If you are not sure where to begin. Let a verified professional from our team help you prepare with confidence."}
          </p>
          </>
        }
        bullets={points}
      />
    </main>
  );
}
