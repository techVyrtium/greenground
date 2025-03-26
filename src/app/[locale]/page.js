import Image from "next/image";
import TopNavHero from "@/app/components/topNav";
import WhatWeDo from "../components/whatWeDo";
export default function Home() {
  return (
    <div className="w-full items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <TopNavHero />
      <WhatWeDo />
    </div>
  );
}
