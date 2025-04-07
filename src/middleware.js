import { NextResponse } from "next/server";

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  console.log("pathname", pathname);

  // Detectar el idioma de la URL (es/en)
  const locale = pathname.split("/")[1];
  console.log("locale", locale);
  const supportedLocales = ["en", "es"];

  if (!supportedLocales.includes(locale)) {
    // Redirigir al idioma por defecto (es) si no es válido
    const url = req.nextUrl.clone();
    url.pathname = `/es${pathname}`;
    return NextResponse.redirect(url);
  }

  const requestHeaders = await req.headers;
  const selectedLocale = locale || "es"; // Aquí usas await para obtener los headers

  console.log("Locale detectado:", selectedLocale); // Para depuración

  // Pasar el idioma a los headers
  const response = NextResponse.next();
  response.headers.set("x-locale", selectedLocale);

  return response;
}

export const config = {
  matcher: [
    "/((?!_next|api|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|mp4|mp3|wav|txt|pdf|zip|json|webmanifest)).*)",
  ],
};
