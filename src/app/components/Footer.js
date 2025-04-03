import Image from "next/image";
import { useTranslations } from "next-intl"; // Importar useTranslations

export default function Footer() {
  const t = useTranslations("footer"); // Inicializar useTranslations

  return (
    <footer className="bg-green-700 text-white px-6 py-10 bg-[url('/banana-patterns.png')] bg-cover bg-no-repeat bg-left mt-[200px]">
      <div className="max-w-7xl lg:mx-auto flex flex-col md:flex-row justify-start items-center gap-x-8 lg:gap-x-10  overflow-hidden">
        {/* Logo */}
        <div className="flex justify-start lg:justify-start lg:w-auto">
          <Image
            src="/logo2.png"
            alt="Green Ground"
            width={300}
            height={300}
            className="w-40 h-auto w-[200px] lg:w-[280px] "
          />
        </div>

        {/* Contenedor para Menú y Contacto en móvil */}
        <div className="w-full flex lg:justify-start lg:gap-x-12 sm:gap-x-8  gap-x-0  items-center">
          {/* Menú */}
          <div className="text-left min-w-[120px] self-start">
            <h3 className="font-bold text-2xl mb-3">{t("menuTitle")}</h3>
            <ul className="space-y-1 text-white/90 ">
              <li className="font-bold">{t("menuItems.home")}</li>
              <li className="font-bold">{t("menuItems.whatWeDo")}</li>
              <li className="font-bold">{t("menuItems.products")}</li>
              <li className="font-bold">{t("menuItems.quality")}</li>
              <li className="font-bold">{t("menuItems.aboutUs")}</li>
              <li className="font-bold">{t("menuItems.social")}</li>
              <li className="font-bold">{t("menuItems.contact")}</li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="text-left  self-start lg:max-w-none">
            <h3 className="font-bold text-2xl mb-3">{t("contactTitle")}</h3>
            <div className="flex items-center gap-2 mb-3">
              <Image src="/icon-phone.svg" alt="Phone" width={20} height={20} />
              <span className="text-md lg:text-base">+57 3004194289</span>
            </div>
            <div className="flex items-center  gap-2 mb-5">
              <Image src="/icon-email.svg" alt="Email" width={35} height={35}  />
              <span className="text-md lg:text-base break-all">
                directorcomercial@greenground.com.co
              </span>
            </div>
            <ul className="space-y-1">
              <li>
                <a
                  href="https://greenground.com.co/politica-para-el-tratamiento-de-datos-personales-de-los-titulares/"
                  className="text-orange-400 underline text-sm lg:text-base"
                >
                  {t("policies.dataPolicy")}
                </a>
              </li>
              <li>
                <a
                  href="https://greenground.com.co/politica-de-seguridad/"
                  className="text-orange-400 underline text-sm lg:text-base"
                >
                  {t("policies.securityPolicy")}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
