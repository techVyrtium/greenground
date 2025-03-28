import Image from "next/image";
import TopNavHero from "@/app/components/topNav";
import WhatWeDo from "../components/whatWeDo";
import ResponsibleCompany from "../components/responsibleCompany";
import Experience from "../components/experience";
export default function Home() {
  return (
    <div className="w-full max-w-[1920px] mx-auto items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <TopNavHero />
      <WhatWeDo />
      <ResponsibleCompany />
      <Experience />
    </div>
  );
}
