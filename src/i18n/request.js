// src/i18n/request.js

import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  // Puedes determinar el idioma estáticamente, o leer de cookies, cabeceras, etc.
  const locale = "es";

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
