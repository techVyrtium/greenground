import Link from "next/link"
import { SidebarLinksMultiples } from "./sidebarLinksMultiples"

export const Siderbar = ({ menuOpen, setMenuOpen, t, toggleModal, locale, cantLinksProducts }) => {
    return (
        <section className={`lg:hidden absolute h-screen rounded-b-2xl bg-category-title-bold overflow-hidden ${menuOpen ? 'w-full md:w-1/2' : 'w-0'} right-0 top-19.5 z-10 transition-all duration-200`}>
            <ul className="flex flex-col gap-4 text-2xl font-light mt-6 items-center">
                <li>
                    <Link href="#" className="hover:underline hover:font-bold">{t("home")}</Link> {/* Utilizando la traducción */}
                </li>
                <li>
                    <Link href="#" className="hover:underline hover:font-bold">{t("whatWeDo")}</Link> {/* Utilizando la traducción */}
                </li>
                <li className="w-full">
                    <SidebarLinksMultiples title={t('products.title')} options={new Array(cantLinksProducts).fill(0).map((_, i) => {
                        return {
                            id: t(`products.options.${i}.id`),
                            text: t(`products.options.${i}.text`),
                            href: t(`products.options.${i}.href`),
                        }
                    })}
                    />
                </li>
                <li>
                    <Link href="#" className="hover:underline hover:font-bold">{t("quality")}</Link> {/* Utilizando la traducción */}
                </li>
                <li>
                    <Link href="#" className="hover:underline hover:font-bold">{t("commitment")}</Link> {/* Utilizando la traducción */}
                </li>
                <li>
                    <Link href="#" className="hover:underline hover:font-bold">{t("blog")}</Link> {/* Utilizando la traducción */}
                </li>
            </ul>
            <div className="flex items-center gap-4 justify-center mt-16">
                <button className="bg-orange-500 px-4 py-2 rounded cursor-pointer" onClick={toggleModal}>
                    {t("contact")} {/* Utilizando la traducción */}
                </button>
                {/* <button
                    className="border px-4 py-2 rounded cursor-pointer"
                    onClick={() => changeLanguage(locale === "en" ? "es" : "en")}
                >
                    {locale === "en" ? "ESP 🇪🇸" : "ENG 🇺🇸"}
                </button> */}
            </div>
        </section>
    )
}