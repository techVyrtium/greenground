"use client";
import { useState, useEffect } from "react";
import CardBlog from "./cardBlog";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { recipes } from "@/seed/recipes";
import { news } from "@/seed/news";

export default function RecetNews({
  tipo = "recetas",
  existPadding = true,
  className = "",
}) {
  const { locale } = useParams();

  const [activeIndex, setActiveIndex] = useState(0);
  const [dataDesk, setDataDesk] = useState([]);
  const [dataTable, setDataTable] = useState([]);
  const [dataMovil, setDataMovil] = useState([]);
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

  const moveCard = (res) => {
    if (activeIndex == 0) {
      const rs = res.filter((r) => r.id == res[0].id || r.id == res[1].id);
      setDataTable(rs);
      const dm = res.filter((r) => r.id == res[0].id);
      setDataMovil(dm);
    }
    if (activeIndex == 1) {
      const rs = res.filter((r) => r.id == res[1].id || r.id == res[2].id);
      setDataTable(rs);
      const dm = res.filter((r) => r.id == res[1].id);
      setDataMovil(dm);
    }
    if (activeIndex == 2) {
      const dm = res.filter((r) => r.id == res[2].id);
      setDataMovil(dm);
    }
  };

  const handleNext = (size) => {
    setActiveIndex(activeIndex + 1);
    if (size == 1) {
      if (activeIndex >= 2 || activeIndex == 0) setActiveIndex(1);
      else if (activeIndex == 1) setActiveIndex(0);
    } else if (size == 0) {
      if (activeIndex == 2) setActiveIndex(0);
    }
  };

  const handlePrev = (size) => {
    setActiveIndex(activeIndex - 1);
    if (size == 1) {
      if (activeIndex == 0) setActiveIndex(1);
      else if (activeIndex == 1) setActiveIndex(0);
    } else if (size == 0) {
      if (activeIndex == 0) setActiveIndex(2);
    }
  };

  function btn(size) {
    return (
      <div className="flex flex-row items-center justify-center gap-2">
        <img
          src={`${
            colorset ? "/home/arrowsOrangeL.png" : "/home/arrowsRSL.png"
          }`}
          alt="Descripción de la imagen"
          className="mt-4 mr-2 cursor-pointer"
          onClick={() => handlePrev(size)}
        />
        <div
          className={`mt-4 p-3 rounded-full cursor-pointer ${
            activeIndex == 0 && colorset
              ? "bg-[#F19412]"
              : activeIndex == 0 && !colorset
              ? "bg-[#B52C17]"
              : "bg-[#FEF8F1]"
          }`}
        ></div>
        <div
          className={`mt-4 p-3 rounded-full cursor-pointer ${
            activeIndex == 1 && colorset
              ? "bg-[#F19412]"
              : activeIndex == 1 && !colorset
              ? "bg-[#B52C17]"
              : "bg-[#FEF8F1]"
          }`}
        ></div>
        <div
          className={`mt-4 p-3 rounded-full sm:grid md:hidden  ${
            activeIndex == 2 && colorset
              ? "bg-[#F19412]"
              : activeIndex == 2 && !colorset
              ? "bg-[#B52C17]"
              : "bg-[#FEF8F1]"
          }`}
        ></div>
        <img
          src={`${
            colorset ? "/home/arrowsOrangeR.png" : "/home/arrowsRSR.png"
          }`}
          alt="Descripción de la imagen"
          className="mt-4 ml-2 cursor-pointer"
          onClick={() => handleNext(size)}
        />
      </div>
    );
  }

  const revData = async (rev) => {
    let res = null;
    if (rev == true) {
      res = recipes[locale];
    } else if (rev == false) {
      res = news[locale];
    }
    setDataDesk(res);
    moveCard(res);
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
      className={`${
        existPadding ? "px-[clamp(1rem,5vw,6rem)]" : "px-0"
      } mx-auto mt-12 h-full ${className}`}
    >
      <div className="flex flex-row items-center justify-center w-full gap-2">
        <div>
          <button
            onClick={() => changeColor(false)}
            className={`${
              colorset
                ? "bg-[#f5b256] hover:bg-[#f19412] cursor-pointer"
                : "bg-[#EA6B58]"
            } px-8 py-2 rounded-xl text-white text-[16px] lg:text-[20px] font-bold`}
          >
            Actualidad
          </button>
        </div>
        <div>
          <button
            onClick={() => changeColor(true)}
            className={`${
              colorset
                ? "bg-[#f19412]"
                : " bg-[#EA6B58] hover:bg-[#B52C17] cursor-pointer"
            } px-8 py-2 rounded-xl text-white text-[16px] lg:text-[20px] font-bold cursor-pointer`}
          >
            Recetas
          </button>
        </div>
      </div>
      <div
        className={`mt-4 w-full ${
          isActive ? "h-fit" : "h-[40rem]"
        }`}
      >
        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{
              opacity: 1,
              y: 10,
              transition: {
                duration: 0.5,
                delay: 0.5,
              },
            }}
          >
            <div className="hidden lg:block">
              <CardBlog
                data={dataDesk}
                color={colorset}
                type={tipo === "recetas" ? "recipes" : "news"}
              />
            </div>
            {/*  Movil */}
            <div className="block lg:hidden sm:hidden">
              <CardBlog
                data={dataMovil}
                color={colorset}
                type={tipo === "recetas" ? "recipes" : "news"}
              />
              {btn(0)}
            </div>
            {/*  Tabla */}
            <div className="hidden md:block lg:hidden ">
              <CardBlog
                data={dataTable}
                color={colorset}
                type={tipo === "recetas" ? "recipes" : "news"}
              />
              {btn(1)}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
