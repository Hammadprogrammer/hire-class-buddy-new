import Hero from "@/container/All-props-comp/hero-setion/hero_section";

export default function OnlineClassHero() {
  
  const points = [
    "5000+ Subject expert who knows your course inside out.",
    "Personalized assignment writing that exactly matches your requirements.",
    "On-Time Support that helps you stay organized and prepared for important deadlines"
  ];

  return (
    <main>
      <Hero 
        heading={
          <>Pay for Assignment Help and Rescue Your <span>Dropping GPA</span></>
        }
        subText={
          <>
            <p>
              Busy scedule, unable to manage? Not a problem here. Simply hire someone to do your coursework who can help you manage tasks, plan your answers, and review your draft before submission. Or if you are thinking it must be costly, then think again: it&apos;s affordable, quick, and tailored to your requirements.
            </p>
            <p>
              This is how we keep you supported and updated!
            </p>
          </>
        }
        bullets={points}
      />
    </main>
  );
}