import { getRequestConfig } from "next-intl/server";
import { headers } from "next/headers"; // ✅ Importar headers desde Next.js

export default getRequestConfig(async () => {
  // Obtener los headers de la solicitud
  const requestHeaders = await headers();
  const selectedLocale = requestHeaders.get("x-locale") || "es"; // ✅ Leer el idioma del middleware

  console.log("Locale detectado:", selectedLocale); // Para depuración

  const loadMessages = async (section) => {
    try {
      return (await import(`../../messages/${section}/${selectedLocale}.json`))
        .default;
    } catch (error) {
      console.warn(`No se pudo cargar: ${section}/${selectedLocale}.json`);
      return {};
    }
  };

  return {
    locale: selectedLocale,
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
    },
  };
});
