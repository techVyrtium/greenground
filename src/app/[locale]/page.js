import Image from "next/image";
import TopNavHero from "@/app/components/topNav";
import WhatWeDo from "../components/whatWeDo";
import ResponsibleCompany from "../components/responsibleCompany";
import Experience from "../components/experience";
import CaptureWorldOur from "../components/captureWorldOur";
import NowNearYou from "../components/nowNearYou";
import OurQuality from "../components/ourQuality";
import OurCertifate from "../components/ourCertifate";
import Blog from "../components/blog";
import OurCommit from "../components/ourCommit";
import OurCommitWomen from "../components/ourCommitWomen";
import TopProduct from "../components/topProduct";
import NewProduct from "../components/newProduct";
import MapW from "../components/map";
import { ProductCategories } from "../components/productCategories";
export default function Home() {
  return (
    <div className="w-full max-w-[1920px] mx-auto items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <TopNavHero />
      <WhatWeDo />
      <ResponsibleCompany />
      <Experience />

      {/* <MapW /> */}
      <CaptureWorldOur />
      <TopProduct />
      <NewProduct />
      <ProductCategories />
      {/* <NowNearYou /> */}
      {/*<OurQuality />
      <OurCertifate />
      <Blog />
      <OurCommit />
      <OurCommitWomen /> */}
    </div>
  );
}
