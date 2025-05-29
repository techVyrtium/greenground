"use client";
import { useState } from "react";
import { useParams, usePathname, useRouter } from "next/navigation";
import { IoMdMenu } from "react-icons/io";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { NavLinkMultiple } from "./navLinkMultiple";
import { useModal } from "@/hooks/useModal";
import { Siderbar } from "./sidebar";
import Image from "next/image";
import logo from '@/assets/logo.png';
const CANT_LINKS_PRODUCTS = 4;
export default function TopNavHero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { locale } = useParams();
  const { toggleModal } = useModal();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("topNav");
  const toogleMultipleOptions = () => { };
  const changeLanguage = (lang) => {
    if (pathname.length === 3)
      router.replace(`${pathname.replace(`/${locale}`, `/${lang}`)}`);
    else router.replace(`${pathname.replace(`/${locale}/`, `/${lang}/`)}`);
  };

  const handleSmoothScroll = (e, sectionId) => {
    e.preventDefault();
    if (pathname !== `/${locale}` && pathname !== `/${locale}/`) {
      router.push(`/${locale}/#${sectionId}`);
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed w-full h-[80px] z-30 mx-auto max-w-[1920px] top-0">
      {/* Fondo con blur */}
      <div className="fixed w-full h-[80px] z-30 bg-[#01010140] backdrop-blur-[20px] max-w-[1920px] mx-auto top-0"></div>
      <div className="absolute w-full h-full bg-[#01010140] backdrop-blur-[20px] z-30 top-0" />

      {/* Contenedor centrado del nav */}
      <div className="max-w-[1920px] w-full mx-auto z-40 relative">
        <nav className="text-[#E1FAEE] flex justify-between items-center px-4 py-1 w-full relative z-30">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Image
                src={logo}
                alt="Logo"
                height={130}
                className="w-20"
              />
            </Link>
            <ul className="hidden lg:flex gap-[1vw] text-[clamp(1rem,1.5vw,1.5rem)] font-light">
              <li>
                <Link href="/" className="hover:underline hover:font-bold">
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/#whatWeDo`}
                  className="hover:underline hover:font-bold"
                  onClick={(e) => handleSmoothScroll(e, "whatWeDo")}
                >
                  {t("whatWeDo")}
                </Link>
              </li>
              <li>
                <NavLinkMultiple
                  title={t('products.title')}
                  onToogle={toogleMultipleOptions}
                  className="text-[#E1FAEE] text-[clamp(1rem,1.5vw,1.5rem)] z-30 font-light hover:underline hover:font-bold"
                  options={new Array(CANT_LINKS_PRODUCTS)
                    .fill(0)
                    .map((_, i) => {
                      return {
                        id: t(`products.options.${i}.id`),
                        text: t(`products.options.${i}.text`),
                        href: t(`products.options.${i}.href`),
                      };
                    })}
                />
              </li>
              <li>
                <Link
                  href={`/${locale}/#ourQuality`}
                  className="hover:underline hover:font-bold"
                  onClick={(e) => handleSmoothScroll(e, "ourQuality")}
                >
                  {t("quality")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/#ourCommit`}
                  className="hover:underline hover:font-bold"
                  onClick={(e) => handleSmoothScroll(e, "ourCommit")}
                >
                  {t("commitment")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/#blog`}
                  className="hover:underline hover:font-bold"
                  onClick={(e) => handleSmoothScroll(e, "blog")}
                >
                  {t("blog")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <button
              className="bg-orange-500 px-4 py-2 rounded cursor-pointer hidden lg:block"
              onClick={toggleModal}
            >
              {t("contact")}
            </button>
            <button
              className="border px-4 py-2 rounded cursor-pointer hidden lg:block"
              onClick={() => changeLanguage(locale === "en" ? "es" : "en")}
            >
              {locale === "en" ? "ESP 🇪🇸" : "ENG 🇺🇸"}
            </button>
            <div>
              <button
                className="lg:hidden cursor-pointer z-30"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <IoMdMenu size={24} />
              </button>
            </div>
          </div>
        </nav>
      </div>
      <Siderbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        t={t}
        cantLinksProducts={CANT_LINKS_PRODUCTS}
        toggleModal={toggleModal}
        changeLanguage={changeLanguage}
      />
    </div>
  );
}
