"use client";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { IoMdMenu } from "react-icons/io";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { NavLinkMultiple } from "./navLinkMultiple";
import { useModal } from "@/app/hooks/useModal";
import { Siderbar } from "./sidebar";

const CANT_LINKS_PRODUCTS = 4;
export default function TopNavHero({ locale }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { toggleModal } = useModal();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("topNav");
  const changeLanguage = (lang) => {
    if (pathname.length === 3)
      router.replace(`${pathname.replace(`/${locale}`, `/${lang}`)}`);
    else
      router.replace(`${pathname.replace(`/${locale}/`, `/${lang}/`)}`);
  };

  return (
    <div className="w-full">
      <nav className="bg-[#008638] text-white flex justify-between items-center px-4 py-1 w-full">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="Logo" className="h-18 xl:pl-[86px]" />
          <ul className="hidden lg:flex gap-[1vw] text-2xl font-light">
            <li>
              <Link href="/" className="hover:underline hover:font-bold">
                {t("home")}
              </Link>{" "}
              {/* Utilizando la traducción */}
            </li>
            <li>
              <Link href="/#whatWeDo" className="hover:underline hover:font-bold">
                {t("whatWeDo")}
              </Link>{" "}
              {/* Utilizando la traducción */}
            </li>
            <li className="z-50">
              <NavLinkMultiple
                title={t("products.title")}
                options={new Array(CANT_LINKS_PRODUCTS).fill(0).map((_, i) => {
                  return {
                    id: t(`products.options.${i}.id`),
                    text: t(`products.options.${i}.text`),
                    href: t(`products.options.${i}.href`),
                  };
                })}
              />
            </li>
            <li>
              <Link href="/#ourQuality" className="hover:underline hover:font-bold">
                {t("quality")}
              </Link>{" "}
              {/* Utilizando la traducción */}
            </li>
            <li>
              <Link href="/#ourCommit" className="hover:underline hover:font-bold">
                {t("commitment")}
              </Link>{" "}
              {/* Utilizando la traducción */}
            </li>
            <li>
              <Link href="/#blog" className="hover:underline hover:font-bold">
                {t("blog")}
              </Link>{" "}
              {/* Utilizando la traducción */}
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <button
            className="bg-orange-500 px-4 py-2 rounded cursor-pointer hidden lg:block"
            onClick={toggleModal}
          >
            {t("contact")} {/* Utilizando la traducción */}
          </button>
          {/* <button
            className="border px-4 py-2 rounded cursor-pointer hidden lg:block"
            onClick={() => changeLanguage(locale === "en" ? "es" : "en")}
          >
            {locale === "en" ? "ESP 🇪🇸" : "ENG 🇺🇸"}
          </button> */}
          <div>
            <button
              className="lg:hidden cursor-pointer z-30"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <IoMdMenu size={24} />
            </button>
            <Siderbar
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
              t={t}
              cantLinksProducts={CANT_LINKS_PRODUCTS}
              locale={locale}
            />
          </div>
        </div>
      </nav>
    </div>
  );
}
