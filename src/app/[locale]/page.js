import Image from "next/image";
import TopNavHero from "@/app/components/topNav";
import WhatWeDo from "../components/whatWeDo";
import CaptureWorldOur from "../components/captureWorldOur";
import NowNearYou from "../components/nowNearYou";
import OurQuality from "../components/ourQuality";
import OurCertifate from "../components/ourCertifate";
import Blog from "../components/blog";
import OurCommit from "../components/ourCommit";
import OurCommitWomen from "../components/ourCommitWomen";
export default function Home() {
  return (
    <div className="w-full items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <TopNavHero />
      <WhatWeDo />

      <CaptureWorldOur />
      <NowNearYou />
      <OurQuality />
      <OurCertifate />
      <Blog />
      <OurCommit />
      <OurCommitWomen />
    </div>
  );
}
