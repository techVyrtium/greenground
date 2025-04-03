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
      whatWeDo: await loadMessages("whatWeDo"),
      home: await loadMessages("home"),
      footer: await loadMessages("footer"),
    },
  };
});
