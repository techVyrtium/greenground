"use client";
import React, { useState, useEffect } from "react";
import CardBlog from "./cardBlog";
import Data from "../[locale]/news/data";
import { inView, motion, useInView, useScroll } from "framer-motion";

export default function RecetNews({ tipo = "recetas" }) {
  //console.log("tipo ", tipo);
  const { news } = Data();
  const [activeIndex, setActiveIndex] = useState(0);
  const [dataDesk, setDataDesk] = useState([]);
  const [dataTable, setDataTable] = useState([]);
  const [dataMovil, setDataMovil] = useState([]);
  const [colorset, setColorSet] = useState(true);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    //console.log("tipo..", colorset)
    if (tipo == "recetas") {
      setColorSet(true);
      revData(true);
    } else {
      setColorSet(false);
      revData(false);
    }
  }, [tipo]);

  useEffect(() => {
    revData(colorset);
  }, [activeIndex]);

  const moveCard = (res) => {
    //console.log(res);
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
      <div className="flex felx-row items-center justify-center gap-2">
        <img
          src={`${
            colorset ? "/home/arrowsOrangeL.png" : "/home/arrowsRSL.png"
          }`}
          alt="Descripción de la imagen"
          className="mt-4 mr-2"
          onClick={() => handlePrev(size)}
        />
        <div
          className={`mt-4 p-3 rounded-full ${
            activeIndex == 0 && colorset
              ? "bg-[#F19412]"
              : activeIndex == 0 && !colorset
              ? "bg-[#B52C17]"
              : "bg-[#FEF8F1]"
          }`}
        ></div>
        <div
          className={`mt-4 p-3 rounded-full ${
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
          className="mt-4 ml-2"
          onClick={() => handleNext(size)}
        />
      </div>
    );
  }

  const revData = (rev) => {
    //setColorSet(rev);
    //console.log("revData ", tipo, colorset)
    let res = null;
    if (rev == true) {
      res = news.filter((d) => d.tipo == "recetas");
    } else if (rev == false) {
      res = news.filter((d) => d.tipo == "novedades");
    }
    setDataDesk(res);
    moveCard(res);
  };

  const changeColor = (c) => {
    setColorSet(c);
    revData(c);
    setIsActive(false)
    setTimeout(() => {
        setIsActive(true)
    }, 100);
  };

  return (
    <div className="max-w-7xl mx-auto mt-12 h-full">
      <div className="flex flex-row items-center justify-center w-full gap-2  ">
        <div>
          <button
            onClick={() => changeColor(true)}
            className={`${
              colorset
                ? "bg-[#f19412]"
                : " bg-[#EA6B58] hover:bg-[#B52C17] cursor-pointer"
            } px-8 py-2 rounded-xl text-white text-[16px] lg:text-[20px] font-bold`}
          >
            Recetas
          </button>
        </div>
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
      </div>
      <div className="mt-4 flex w-full h-[40rem] items-center justify-center">
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
            <div className="hidden lg:grid ">
              <CardBlog data={dataDesk} color={colorset} />
            </div>
            {/*  Movil */}
            <div className="block lg:hidden sm:hidden">
              <CardBlog data={dataMovil} color={colorset} />
              {btn(0)}
            </div>
            {/*  Tabla */}
            <div className="hidden md:grid lg:hidden ">
              <CardBlog data={dataTable} color={colorset} />
              {btn(1)}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
