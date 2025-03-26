// app/middleware.js
import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Si la ruta es la raíz (/) y no tiene idioma, redirige a /es
  if (pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = "/es"; // Redirige a /es por defecto
    return NextResponse.redirect(url);
  }

  return NextResponse.next(); // De lo contrario, sigue normalmente
}
