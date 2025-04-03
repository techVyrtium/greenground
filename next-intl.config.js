// next-intl.config.js

async function getRouting() {
  const { defineRouting } = await import("next-intl/routing");

  return defineRouting({
    defaultLocale: "es",
    locales: ["es", "en"],
    routes: {
      "/": "/es", // Redirigir a /es si no se especifica un idioma
    },
  });
}

module.exports = getRouting();
