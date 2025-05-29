import WhatWeDo from "../../components/whatWeDo";
import ResponsibleCompany from "../../components/responsibleCompany";
import Experience from "../../components/experience";
import CaptureWorldOur from "../../components/captureWorldOur";
import NowNearYou from "../../components/nowNearYou";
import OurQuality from "../../components/ourQuality";
import Blog from "../../components/blog";
import OurCommit from "../../components/ourCommit";
import OurCommitWomen from "../../components/ourCommitWomen";
import TopProduct from "../../components/topProduct";
import { ProductCategories } from "../../components/productCategories";
import OurCertificate from "../../components/ourCertificate";
import MapW from "../../components/map";
import SolarEnergyStats from "../../components/solarEnergyStats";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

export const dynamic = 'force-static';

export const generateStaticParams = async () => {
  const locales = ['es', 'en'];
  return locales.map((locale) => ({
    locale
  }));
}

export default async function Home({ params }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);


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
      <div id="ourQuality">
        <OurQuality />
      </div>
      <OurCertificate />
      <OurCommit />
      <OurCommitWomen />
      <SolarEnergyStats />
      <Blog />
    </div>
  );
}