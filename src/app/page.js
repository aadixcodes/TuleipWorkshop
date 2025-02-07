import Image from "next/image";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import LearnAITools from "@/components/LearnAITools";
import WhatULearn from "@/components/WhatULearn";
import BonusWorth from "@/components/BonusSection";
import YourMentor from "@/components/YourMentors";
import Convinced from "@/components/Convinced";
import AboutBharatAi from "@/components/AboutBharatAi";
import Registration from "@/components/Registration";


export default function Home() {
  return (
    <>
    <Hero />
    <Benefits />
    <LearnAITools />
    <WhatULearn />
    <BonusWorth />
    <YourMentor />
    <AboutBharatAi />
    <Convinced />
    <Registration />
    </>
  );
}
