import React from "react";
import WhatWeDo from "../components/whatWeDo";
import ResponsibleCompany from "../components/responsibleCompany";
import Experience from "../components/experience";
import CaptureWorldOur from "../components/captureWorldOur";
import NowNearYou from "../components/nowNearYou";
import OurQuality from "../components/ourQuality";
import Blog from "../components/blog";
import OurCommit from "../components/ourCommit";
import OurCommitWomen from "../components/ourCommitWomen";
import TopProduct from "../components/topProduct";
import NewProduct from "../components/newProduct";
import { ProductCategories } from "../components/productCategories";
// import { WorkerTestimonials } from "../components/workerTestimonials";
import OurCertificate from "../components/ourCertificate";
export default async function Home() {
  
  return (
    <div
      className={`bg-white/20 w-full max-w-[1920px] mx-auto items-center justify-items-center min-h-screen`}
    >
      <WhatWeDo />
      <ResponsibleCompany />
      <Experience />

      {/* <MapW /> */}
      <CaptureWorldOur />
      <TopProduct />
      <NewProduct />
      <ProductCategories />
      <NowNearYou />
      <OurQuality />
      <OurCertificate />
      <Blog />
      <OurCommit />
      <OurCommitWomen />
      {/* <WorkerTestimonials /> */}
    </div>
  );
}
