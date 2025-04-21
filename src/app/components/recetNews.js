"use client";
import { useState, useEffect } from "react";
import CardBlog, { Version } from "./cardBlog";
import { AnimatePresence, motion } from "framer-motion";
import { useParams } from "next/navigation";
import { recipes } from "@/seed/recipes";
import { news } from "@/seed/news";

export default function RecetNews({
  tipo = "recetas",
  existPadding = true,
  className = "",
}) {
  const { locale } = useParams();
  const [data, setData] = useState([]);
  const [colorset, setColorSet] = useState(true);
  const [isActive, setIsActive] = useState(true);
  useEffect(() => {
    if (tipo == "actualidad") {
      setColorSet(false);
      revData(false);
    } else {
      setColorSet(true);
      revData(true);
    }
  }, []);

  const revData = async (rev) => {
    let res = null;
    if (rev == true) {
      res = recipes[locale];
    } else if (rev == false) {
      res = news[locale];
    }
    setData(res);
  };

  const changeColor = (c) => {
    setColorSet(c);
    revData(c);
    setIsActive(false);
    setTimeout(() => {
      setIsActive(true);
    }, 100);
  };

  return (
    <div
      className={`${existPadding ? "px-[clamp(1rem,5vw,6rem)]" : "px-0"
        } mx-auto mt-12 h-full ${className}`}
    >
      <div className="flex flex-row items-center justify-center w-full gap-2">
        <div>
          <button
            onClick={() => changeColor(false)}
            className={`${colorset
              ? "bg-[#f5b256] hover:bg-[#f19412] cursor-pointer"
              : "bg-[#EA6B58]"
              } px-8 py-2 rounded-xl text-white text-[16px] lg:text-[20px] font-bold`}
          >
            {locale === 'en' ? "Current Trends" : "Actualidad"}
          </button>
        </div>
        <div>
          <button
            onClick={() => changeColor(true)}
            className={`${colorset
              ? "bg-[#f19412]"
              : " bg-[#EA6B58] hover:bg-[#B52C17] cursor-pointer"
              } px-8 py-2 rounded-xl text-white text-[16px] lg:text-[20px] font-bold cursor-pointer`}
          >
            {locale === 'en' ? "Recipes" : "Recetas"}
          </button>
        </div>
      </div>
      <div
        className={`mt-4 w-full ${isActive ? "h-fit" : "h-[40rem]"
          }`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`animation-slider`}
            variants={{
              offscreen: { opacity: 0, y: 0 },
              onscreen: {
                opacity: 1,
                y: 10,
                transition: {
                  duration: 0.5,
                  delay: 0.5,
                },
              }
            }}
            initial="offscreen"
            whileInView="onscreen"
          >
            <div className="hidden lg:block">
              <CardBlog
                data={data}
                color={colorset}
                type={colorset ? "recipes" : "news"}
                version={Version.DESK}
              />
            </div>
            {/*  Movil */}
            <div className="block md:hidden">
              <CardBlog
                data={data}
                color={colorset}
                type={colorset ? "recipes" : "news"}
                version={Version.MOBILE}
              />
            </div>
            {/*  Tabla */}
            <div className="hidden md:block lg:hidden">
              <CardBlog
                data={data}
                color={colorset}
                type={colorset ? "recipes" : "news"}
                version={Version.TABLET}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
