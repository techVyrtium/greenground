import Link from "next/link"
import { SidebarLinksMultiples } from "./sidebarLinksMultiples"
import { useRouter } from "next/navigation"
import { useId } from "react";

export const Siderbar = ({ menuOpen, setMenuOpen, t, toggleModal, locale, cantLinksProducts }) => {
    const router = useRouter();
    const id = useId();
    const handleSmoothScroll = (e, sectionId) => {
        e.preventDefault();

        // Si no estamos en la página principal, redirigir primero
        if (window.location.pathname !== `/${locale}` && window.location.pathname !== `/${locale}/`) {
            router.push(`/${locale}/#${sectionId}`);
            return;
        }

        // Si ya estamos en la página principal, hacer scroll
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMenuOpen(false); // Cerrar el menú después de hacer clic
        }
    };
    const close = (e) => {
        const { classList } = e.target;
        const isDropdown = classList.contains(`sidebar-dropdown-${id}`);
        if (!isDropdown)
            setMenuOpen(false);
    }
    return (
        <section className={`lg:hidden absolute pt-4 h-screen rounded-b-2xl overflow-hidden text-[#E1FAEE] bg-[#01010156] backdrop-blur-2xl  z-30 mt-0.5 ${menuOpen ? 'w-full md:w-1/2 sidebar' : 'w-0'} right-0 top-19.5 z-10 transition-all duration-200`} onClick={close} >
            <div>
                <ul className="flex flex-col gap-4 text-2xl font-light items-center" onClick={close}>
                    <li>
                        <Link href="/" className="hover:underline hover:font-bold">{t("home")}</Link>
                    </li>
                    <li>
                        <Link
                            href={`/${locale}/#whatWeDo`}
                            className="hover:underline hover:font-bold"
                            onClick={(e) => handleSmoothScroll(e, 'whatWeDo')}
                        >
                            {t("whatWeDo")}
                        </Link>
                    </li>
                    <li className={`w-full`}>
                        <SidebarLinksMultiples buttonClassName={`sidebar-dropdown-${id}`} title={t('products.title')} options={new Array(cantLinksProducts).fill(0).map((_, i) => {
                            return {
                                id: t(`products.options.${i}.id`),
                                text: t(`products.options.${i}.text`),
                                href: t(`products.options.${i}.href`),
                            }
                        })}
                        />
                    </li>
                    <li>
                        <Link
                            href={`/${locale}/#ourQuality`}
                            className="hover:underline hover:font-bold"
                            onClick={(e) => handleSmoothScroll(e, 'ourQuality')}
                        >
                            {t("quality")}
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={`/${locale}/#ourCommit`}
                            className="hover:underline hover:font-bold"
                            onClick={(e) => handleSmoothScroll(e, 'ourCommit')}
                        >
                            {t("commitment")}
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={`/${locale}/#blog`}
                            className="hover:underline hover:font-bold"
                            onClick={(e) => handleSmoothScroll(e, 'blog')}
                        >
                            {t("blog")}
                        </Link>
                    </li>
                </ul>
                <div className="flex items-center gap-4 justify-center mt-16">
                    <button className="bg-orange-500 px-4 py-2 rounded cursor-pointer" onClick={toggleModal}>
                        {t("contact")}
                    </button>
                    {/* <button
                    className="border px-4 py-2 rounded cursor-pointer"
                    onClick={() => changeLanguage(locale === "en" ? "es" : "en")}
                >
                    {locale === "en" ? "ESP 🇪🇸" : "ENG 🇺🇸"}
                </button> */}
                </div>
            </div>

        </section>
    )
}