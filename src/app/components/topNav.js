"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { IoMdMenu } from "react-icons/io";
import { useTranslations } from "next-intl"; // Importar useTranslations
import { Wendy_One } from "next/font/google";

export default function TopNavHero( { toggleModalContact } ) {

  const [menuOpen, setMenuOpen] = useState(false);
  const { locale, push } = useRouter();
  const t = useTranslations("topNav"); // Inicializar useTranslations

  const changeLanguage = (lang) => {
    push("/", { locale: lang });
  };

/*   link :
  que hacemos: wedo 
  nuestra calidad: ourquality
  nuestro compromiso: ourcommit
  blog: blog
  */

  return (
    <div className="w-full">
      <nav className="bg-[#008638] text-white flex justify-between items-center px-4 w-full">
        <div className="flex items-center gap-4">
          <img src="./logo.png" alt="Logo" className="h-18 xl:pl-[86px] " />
          <ul className="hidden md:flex gap-6">
            <li>
              <a href="#">{t("home")}</a> {/* Utilizando la traducción */}
            </li>
            <li>
              <a href="#">{t("whatWeDo")}</a> {/* Utilizando la traducción */}
            </li>
            <li>
              <a href="#">{t("products")}</a> {/* Utilizando la traducción */}
            </li>
            <li>
              <a href="#">{t("quality")}</a> {/* Utilizando la traducción */}
            </li>
            <li>
              <a href="#">{t("commitment")}</a> {/* Utilizando la traducción */}
            </li>
            <li>
              <a href="#">{t("blog")}</a> {/* Utilizando la traducción */}
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-orange-500 px-4 py-2 rounded" onClick={toggleModalContact}>
            {t("contact")} {/* Utilizando la traducción */}
          </button>
          <button
            className="border px-4 py-2 rounded"
            onClick={() => changeLanguage(locale === "en" ? "es" : "en")}
          >
            {locale === "en" ? "ESP 🇪🇸" : "ENG 🇺🇸"}
          </button>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <IoMdMenu size={24} />
          </button>
        </div>
      </nav>
    </div>
  );
}
