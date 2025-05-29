// import { request } from "http";
import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
// import { headers } from "next/headers";
export default getRequestConfig(async ({ requestLocale }) => {
  // const requestHeaders = await headers();
  // const selectedLocale =  requestHeaders.get("x-locale") || "es"; // ✅ Leer el idioma del middleware
  // console.log("Locale detectado (REQUEST):", selectedLocale); // Para depuración
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;
  const loadMessages = async (section) => {
    try {
      return (await import(`../../messages/${section}/${locale}.json`))
        .default;
    } catch (error) {
      console.warn(`No se pudo cargar: ${section}/${locale}.json`);
      return {};
    }
  };

  return {
    locale,
    messages: {
      topNav: await loadMessages("topNav"),
      // products: await loadMessages("products"),
      category: await loadMessages("category"),
      whatWeDo: await loadMessages("whatWeDo"),
      responsableCompany: await loadMessages("responsableCompany"),
      ourCommit: await loadMessages("ourCommit"),
      ourCommitWomen: await loadMessages("ourCommitWomen"),
      ourQuality: await loadMessages("ourQuality"),
      nowNearYou: await loadMessages("nowNearYou"),
      topProducts: await loadMessages("topProducts"),
      experience: await loadMessages("experience"),
      mobileMap: await loadMessages("mobileMap"),
      captureWorldOur: await loadMessages("captureWorldOur"),
      ourCertificate: await loadMessages("ourCertificate"),
      // home: await loadMessages("home"),
      blog: await loadMessages('blog'),
      footer: await loadMessages("footer"),
      news: await loadMessages("news"),
      detallenews: await loadMessages("detallenews"),
      solarEnergyStats: await loadMessages("solarEnergyStats"),
    },
  };
});
