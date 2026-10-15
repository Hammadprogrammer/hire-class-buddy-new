import React from 'react'
import Hero from '@/container/All-props-comp/hero-setion/hero_section';


const HeroSection = () => {
  // Bullets Data
  const heroBullets = [
    "Timely support that never misses tasks and deadlines",
    "Qualified subject expert with 100% original and tailored work",
    "Round-the-clock support that helps you every time."
  ];

  return (
    <>
      <Hero 
        heading={
          <>Hire Someone To Take My Online Class With <span>Expert Support</span></>
        }
        subText={
          <>
            <p>
              Are you ready to pay someone to take a class for you? If work, family, deadlines, and other unfinished coursework are making it difficult to keep up, find the right academic support that helps you manage overdue tasks instantly. Then visit <strong>Hire Class Buddy</strong>; you are in the right place!
            </p>
            <p>
              With a strong academic background and course knowledge, our tutor helps you figure out difficult courses, stay organised, and keep up with your coursework. Then why let everything pile up? When you need support, <strong>“Hire someone to take your online class”</strong>. Here&apos;s what you can expect from our support:
            </p>
          </>
        }
        bullets={heroBullets}
      />
      
   
    </>
  )
}

export default HeroSection