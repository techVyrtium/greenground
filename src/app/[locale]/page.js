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
import { ProductCategories } from "../components/productCategories";
// import { WorkerTestimonials } from "../components/workerTestimonials";
import OurCertificate from "../components/ourCertificate";
import MapW from "../components/map";

export default async function Home({ params }) {
  const { locale } = await params;
  return (
    <div
      className={`bg-white/20 w-full max-w-[1920px] mx-auto items-center justify-items-center min-h-screen`}
    >
      <WhatWeDo />

      <ResponsibleCompany />
      <Experience />

      <ProductCategories locale={locale} />
      <TopProduct locale={locale} />
      {/* <NewProduct locale={locale} /> */}
      <MapW />
      <CaptureWorldOur />
      <NowNearYou />
      <div id="ourQuality" className="w-full">
        <OurQuality />
      </div>
      <OurCertificate />
      <div className="w-full">
        <Blog />
      </div>
      <div className="w-full">
        <OurCommit />
      </div>
      <OurCommitWomen />
      {/* <WorkerTestimonials /> */}
    </div>
  );
}