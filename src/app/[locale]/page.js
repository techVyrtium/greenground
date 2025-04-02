"use client";
import React, { useState, useEffect } from "react";
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
// import MapW from "../components/map";
import { ProductCategories } from "../components/productCategories";
import { WorkerTestimonials } from "../components/workerTestimonials";
import ContactForm from "../components/modal/ContactForm";
export default function Home() {
  const [showModalContact, setShowModalContact] = useState(false);
  const toggleModalContact = () => {
    setShowModalContact((prev) => !prev);
  };

  return (
    <div
      className={`bg-white/20 w-full max-w-[1920px] mx-auto items-center justify-items-center min-h-screen`}
    >
      <TopNavHero toggleModalContact={toggleModalContact} />
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
      <OurCertifate />
      <Blog />
      <OurCommit />
      <OurCommitWomen />
      <WorkerTestimonials />
      {showModalContact && (
        <ContactForm toggleModalContact={toggleModalContact} />
      )}

    </div>
  );
}
