import Image from "next/image";
import { useTranslations } from "next-intl"; // Importar useTranslations
import Link from "next/link";
import logo2 from '@/assets/logo2.png';
import phone from '@/assets/icon-phone.svg';
import email from '@/assets/icon-email.svg';
export default function Footer() {
  const t = useTranslations("footer"); // Inicializar useTranslations

  return (
    <footer className="bg-green-700 text-white px-6 py-10 bg-[url('/banana-patterns.png')] bg-cover bg-no-repeat bg-left mt-[200px] max-w-[1920px] mx-auto">
      <div className="max-w-7xl lg:mx-auto flex flex-col md:flex-row justify-start items-center gap-x-8 lg:gap-x-10  overflow-hidden">
        {/* Logo */}
        <div className="flex justify-start lg:justify-start lg:w-auto">
          <Image
            src={logo2}
            alt="Green Ground"
            width={300}
            height={300}
            className="h-auto w-[200px] lg:w-[280px] "
          />
        </div>

        {/* Contenedor para Menú y Contacto en móvil */}
        <div className="w-full flex lg:justify-start lg:gap-x-12 sm:gap-x-8  gap-x-0  items-center">
          {/* Menú */}
          <div className="text-left min-w-[120px] self-start text-base md:text-2xl">
            <h3 className="font-bold text-3xl mb-3">{t("menuTitle")}</h3>
            <ul className="space-y-2 text-white/90">
              <li className="font-bold">
                <Link href={"#"} className="hover:underline">
                  {t("menuItems.home")}
                </Link>
              </li>
              <li className="font-bold">
                <Link href={"#"} className="hover:underline">
                  {t("menuItems.whatWeDo")}
                </Link>
              </li>
              <li className="font-bold">
                <Link href={"#"} className="hover:underline">
                  {t("menuItems.products")}
                </Link>
              </li>
              <li className="font-bold">
                <Link href={"#"} className="hover:underline">
                  {t("menuItems.quality")}
                </Link>
              </li>
              <li className="font-bold">
                <Link href={"#"} className="hover:underline">
                  {t("menuItems.aboutUs")}
                </Link>
              </li>
              <li className="font-bold">
                <Link href={"#"} className="hover:underline">
                  {t("menuItems.social")}
                </Link>
              </li>
              <li className="font-bold">
                <Link href={"#"} className="hover:underline">
                  {t("menuItems.contact")}
                </Link>
              </li>
            </ul>
            <ul className="space-x-1 min-w-[120px] self-start text-base md:text-2xl flex lg:gap-4">
                <li>
                  <Link
                    href="https://greenground.com.co/politica-para-el-tratamiento-de-datos-personales-de-los-titulares/"
                    className="text-[#F5B356] underline lg:whitespace-nowrap"
                  >
                    {t("policies.dataPolicy")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://greenground.com.co/politica-de-seguridad/"
                    className="text-[#F5B356] underline lg:whitespace-nowrap"
                  >
                    {t("policies.securityPolicy")}
                  </Link>
                </li>
              </ul>
          </div>

          {/* Contacto */}
          <div className="text-left  self-start lg:max-w-none text-base md:text-2xl">
            <h3 className="font-bold text-3xl mb-3">{t("contactTitle")}</h3>
            <div className="flex items-center gap-2 mb-3">
              <Image src={phone} alt="Phone" width={20} height={20} />
              <Link href={"tel:+573004194289"} className="hover:underline">
                +57 3004194289
              </Link>
            </div>
            <div className="flex items-center  gap-2 mb-5">
              <Image src={email} alt="Email" width={35} height={35} />
              <span className="break-all">
                <Link
                  href={"mailto:directorcomercial@greenground.com.co"}
                  className="hover:underline"
                >
                  directorcomercial@greenground.com.co
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
