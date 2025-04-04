"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { useTranslations } from "next-intl"; // Importar useTranslations
import { Wendy_One } from "next/font/google";

const slides = [
  { type: "video", src: "/hero/video.mp4" }, // Asegúrate de que la ruta sea absoluta desde public
  { type: "image", src: "/hero/image2.jpg" }, // Asegúrate de que la ruta sea absoluta desde public
];

export default function TopNavHero( { toggleModalContact } ) {
  const [current, setCurrent] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const { locale, push } = useRouter();
  const t = useTranslations("topNav"); // Inicializar useTranslations

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

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

      {/* <div className="relative w-full h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-500 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            {slide.type === "image" ? (
              <img
                src={slide.src} // Rutas absolutas desde public
                alt="Slide"
                className="w-full h-full object-cover"
              />
            ) : (
              <video autoPlay loop muted className="w-full h-full object-cover">
                <source src={slide.src} type="video/mp4" />
              </video>
            )}
          </motion.div>
        ))}

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white"
        >
          <FaChevronRight />
        </button>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === current ? "bg-white" : "bg-gray-400"
              }`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div> */}
    </div>
  );
}
