import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import { Roboto } from "next/font/google";
import { Baloo_2 } from "next/font/google";
import Footer from "@/components/Footer";
import TopNavHero from "../../components/topNav";
import ModalContainer from "@/components/modal/ModalContainer";
import "./../../globals.css";

import {
  itcAvantGardeCEGothicBook,
  itcAvantGardeCEGothicLTBold,
  itcAvantGardeCEGothicLTBook,
} from "../../styles/fonts";

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
const itcGLTBook = itcAvantGardeCEGothicLTBook;
export const metadata = {
  title: {
    template: '%s | Greenground',
    default: 'Greenground'
  }
}
export default async function RootLayout({ children, params }) {
  // Obtener el locale, esto puede ser de cookies, headers, etc.
  const { locale } = await params;
  return (
    <html
      lang={locale}
      className={`${roboto.variable} ${baloo.variable} ${itcGBook.variable} ${itcGBold.variable} ${itcGLTBook.variable}`}
    >
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body className="max-w-[1920px] mx-auto">
        <NextIntlClientProvider>
          <TopNavHero />
          {children}
          <Footer />
          <ModalContainer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
