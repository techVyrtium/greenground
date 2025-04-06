import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import { Roboto } from "next/font/google";
import { Baloo_2 } from "next/font/google";
import "./../globals.css";
import { itcAvantGardeCEGothicBook, itcAvantGardeCEGothicLTBold } from "../styles/fonts";
import Footer from "@/app/components/Footer";
import TopNavHero from "../components/topNav";
import { ModalProvider } from "../context/ModalContext";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "700"], // Puedes agregar más estilos
  variable: "--font-roboto",
});

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-baloo",
});
const itcGBook = itcAvantGardeCEGothicBook;
const itcGBold = itcAvantGardeCEGothicLTBold;
export default async function RootLayout({ children }) {
  // Obtener el locale, esto puede ser de cookies, headers, etc.
  const locale = await getLocale();
  return (
    <html lang={locale} className={`${roboto.variable} ${baloo.variable} ${itcGBook.variable} ${itcGBold.variable}`}>
      <body className="">
        <NextIntlClientProvider>
          <ModalProvider>
            <TopNavHero locale={locale} />
            {children}
            <Footer />
          </ModalProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
