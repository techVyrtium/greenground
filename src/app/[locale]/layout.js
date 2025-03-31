import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import { Roboto } from "next/font/google";
import { Baloo_2 } from "next/font/google";
import "./../globals.css";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"], // Puedes agregar más estilos
  variable: "--font-roboto",
});

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-baloo",
});
export default async function RootLayout({ children }) {
  // Obtener el locale, esto puede ser de cookies, headers, etc.
  const locale = await getLocale();

  return (
    <html lang={locale} className={`${roboto.variable} ${baloo.variable}`}>
      <body className="">
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
